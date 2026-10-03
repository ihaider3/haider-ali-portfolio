from sqlalchemy import Column, Integer, String, Text, DateTime, func
try:
    from .database import Base
except ImportError:
    from database import Base

class ContactSubmission(Base):
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    full_name = Column(String(255), nullable=False)
    phone = Column(String(100), nullable=False)
    email = Column(String(255), nullable=True)
    service = Column(String(100), nullable=False)
    message = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    def __repr__(self):
        return f"<ContactSubmission id={self.id} name='{self.full_name}' service='{self.service}'>"
