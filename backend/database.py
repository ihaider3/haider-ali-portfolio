import os
import logging
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger("uvicorn.error")

# Determine default SQLite path: On Vercel serverless, filesystem is read-only except /tmp
is_vercel = os.getenv("VERCEL") == "1" or os.getenv("AWS_LAMBDA_FUNCTION_NAME") is not None
default_sqlite = "/tmp/portfolio.db" if is_vercel else "./portfolio.db"

DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite+aiosqlite:///{default_sqlite}")

# Normalize Postgres driver for async SQLAlchemy (Neon, Supabase, Vercel Postgres, Railway)
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+asyncpg://", 1)
elif DATABASE_URL.startswith("postgresql://") and not DATABASE_URL.startswith("postgresql+asyncpg://"):
    DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://", 1)

connect_args = {}
if "sqlite" in DATABASE_URL:
    connect_args = {"check_same_thread": False}
elif "postgresql" in DATABASE_URL:
    # Handle sslmode parameter for asyncpg compatibility
    if "sslmode=" in DATABASE_URL:
        import urllib.parse
        parsed = urllib.parse.urlparse(DATABASE_URL)
        query_params = urllib.parse.parse_qs(parsed.query)
        sslmode = query_params.pop("sslmode", ["require"])[0]
        new_query = urllib.parse.urlencode(query_params, doseq=True)
        DATABASE_URL = urllib.parse.urlunparse(parsed._replace(query=new_query))
        if sslmode != "disable":
            connect_args["ssl"] = "require"

try:
    engine = create_async_engine(
        DATABASE_URL,
        echo=False,
        future=True,
        connect_args=connect_args,
        pool_pre_ping=True
    )
except Exception as e:
    logger.warning(f"Failed to connect to primary DB, falling back to local SQLite: {e}")
    DATABASE_URL = f"sqlite+aiosqlite:///{default_sqlite}"
    engine = create_async_engine(
        DATABASE_URL,
        echo=False,
        future=True,
        connect_args={"check_same_thread": False},
    )

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False
)

Base = declarative_base()

async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()

async def init_db():
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        logger.info("Database initialized successfully.")
    except Exception as e:
        logger.warning(f"Database schema init notice: {e}")
