from pydantic import BaseModel, EmailStr, Field, field_validator
from typing import Optional, List
from datetime import datetime
import re

ALLOWED_SERVICES = [
    "Social Media Management",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "Lead Generation",
    "Content & Creative",
    "Analytics & Tracking",
    "E-commerce / Digital Growth",
    "Other"
]

class ContactCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120, description="Full Name of the inquirer")
    phone: str = Field(..., min_length=6, max_length=35, description="Contact phone or WhatsApp number")
    service: str = Field(..., description="Target service needed")
    email: EmailStr = Field(..., description="Required email address")
    message: Optional[str] = Field(None, max_length=3000, description="Project message or requirements")
    honeypot: Optional[str] = Field(None, description="Anti-spam honeypot field, must remain empty")

    @field_validator("full_name")
    def validate_name(cls, v: str) -> str:
        clean = v.strip()
        if len(clean) < 2:
            raise ValueError("Full name must have at least 2 characters")
        return clean

    @field_validator("phone")
    def validate_phone(cls, v: str) -> str:
        clean = v.strip()
        # Allow numbers, spaces, +, -, parentheses
        if not re.match(r"^[\d\+\-\s\(\)]{6,35}$", clean):
            raise ValueError("Please provide a valid phone or WhatsApp number")
        return clean

    @field_validator("service")
    def validate_service(cls, v: str) -> str:
        clean = v.strip()
        if clean not in ALLOWED_SERVICES:
            # Allow fallback if valid text
            if len(clean) < 2:
                raise ValueError("Please select a valid service")
        return clean

class ContactResponse(BaseModel):
    id: int
    full_name: str
    phone: str
    email: Optional[str] = None
    service: str
    message: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True

class ProjectItem(BaseModel):
    id: str
    title: str
    category: str
    facebook_url: str
    logo_filename: str
    description: str
    services: List[str]
    platforms: List[str]
    featured: bool
    grid_type: str # "large" | "medium"
    source_status: str # "manual project profile"

class CertificateItem(BaseModel):
    id: str
    title: str
    recipient: str
    issuer: str
    issue_date: str
    credential_id: Optional[str] = None
    verification_url: Optional[str] = None
    image_filename: str
    category: str

class ReviewItem(BaseModel):
    id: str
    author: str
    role: Optional[str] = None
    rating: Optional[int] = None
    text: str
    facebook_url: str
    source: str
