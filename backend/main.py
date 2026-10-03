import os
from contextlib import asynccontextmanager
from typing import List, Optional
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from datetime import datetime

try:
    from .database import get_db, init_db
    from .models import ContactSubmission
    from .schemas import ContactCreate, ContactResponse, ProjectItem, CertificateItem, ReviewItem
    from .data import PROFILE_DATA, SERVICES_DATA, PROJECTS_DATA, CERTIFICATES_DATA, REVIEWS_DATA
except ImportError:
    from database import get_db, init_db
    from models import ContactSubmission
    from schemas import ContactCreate, ContactResponse, ProjectItem, CertificateItem, ReviewItem
    from data import PROFILE_DATA, SERVICES_DATA, PROJECTS_DATA, CERTIFICATES_DATA, REVIEWS_DATA

limiter = Limiter(key_func=get_remote_address)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize DB schema on startup safely
    try:
        await init_db()
    except Exception as e:
        import logging
        logging.getLogger("uvicorn.error").warning(f"Database startup warning: {e}")
    yield

app = FastAPI(
    title="MH Marketing API — Haider Ali Portfolio",
    description="High-performance backend API for Haider Ali digital marketing portfolio",
    version="1.0.0",
    lifespan=lifespan
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Configure CORS
allowed_origins_env = os.getenv("CORS_ORIGINS", "")
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
]
if allowed_origins_env:
    for origin in allowed_origins_env.split(","):
        clean_origin = origin.strip()
        if clean_origin and clean_origin not in origins:
            origins.append(clean_origin)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if not os.getenv("VERCEL") else ["*"],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

@app.get("/api/health", tags=["Health"])
async def health_check():
    return {
        "status": "online",
        "service": "MH Marketing Portfolio API",
        "version": "1.0.0",
        "owner": "Haider Ali",
        "brand": "MH Marketing"
    }

@app.get("/api/info", tags=["Profile"])
async def get_profile_info():
    return PROFILE_DATA

@app.get("/api/services", tags=["Services"])
async def get_services():
    return SERVICES_DATA

@app.get("/api/projects", response_model=List[ProjectItem], tags=["Projects"])
async def get_projects():
    return PROJECTS_DATA

@app.get("/api/certificates", response_model=List[CertificateItem], tags=["Certificates"])
async def get_certificates():
    return CERTIFICATES_DATA

@app.get("/api/reviews", response_model=List[ReviewItem], tags=["Reviews"])
async def get_reviews():
    return REVIEWS_DATA

@app.post("/api/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED, tags=["Contact"])
@limiter.limit("5/minute")
async def submit_contact(
    request: Request,
    inquiry: ContactCreate,
    db: AsyncSession = Depends(get_db)
):
    # Spam honeypot check: If bots filled the honeypot field, reject silently
    if inquiry.honeypot:
        # Return dummy success without saving spam
        return ContactResponse(
            id=0,
            full_name=inquiry.full_name,
            phone=inquiry.phone,
            email=inquiry.email,
            service=inquiry.service,
            message=inquiry.message,
            created_at=datetime.now()
        )

    try:
        new_submission = ContactSubmission(
            full_name=inquiry.full_name,
            phone=inquiry.phone,
            email=inquiry.email,
            service=inquiry.service,
            message=inquiry.message
        )
        db.add(new_submission)
        await db.commit()
        await db.refresh(new_submission)
        return new_submission
    except Exception as e:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to record contact inquiry. Please reach out directly on WhatsApp or Email."
        )

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("backend.main:app", host="0.0.0.0", port=port, reload=True)
