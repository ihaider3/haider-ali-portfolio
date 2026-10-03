# MH Marketing — Haider Ali | Premium Cinematic Portfolio

A grand, cinematic, production-ready Digital Marketing Portfolio for **Haider Ali** (Founder & Lead Strategist at **MH Marketing**), engineered with a **Deep Dark Blue + Specular Metallic Gold** design system, 3D tilted orbital platform animations, glassmorphism, real social proof, and a secure FastAPI backend.

---

## 🌟 Brand & Visual Identity
- **Owner**: Haider Ali
- **Title**: Digital Marketing Expert (5+ Years Experience)
- **Brand**: MH Marketing — *Your Trusted Digital Partner*
- **Primary Color Palette**: Deep Midnight Sapphire & Dark Navy (`#020612`, `#050D20`, `#08142F`)
- **Accent**: Specular Metallic Gold (`#FFF4C2`, `#F3CF7A`, `#D4AF37`, `#AA771C`, `#9A6F14`)
- **Visual Features**:
  - Tilted 3D orbital carousel of marketing tools (Meta, Google Ads, GA4, GTM, Canva, Shopify, WordPress, TikTok, YouTube, LinkedIn, WhatsApp) around Haider's portrait with **no visible connecting line**.
  - Specular metallic gold frames on portrait and brand logos.
  - Dark blue glassmorphism panels with soft golden highlights.
  - Cinematic scroll transitions with staggered reveals and background ambient lighting.
  - Curated project showcase with **1-Large / 2-Medium / 1-Large / 2-Medium / 1-Large / 2-Medium / 1-Large** editorial rhythm.
  - Official Facebook Social Proof section with 5-star rating and interactive review carousel.
  - Verified credentials gallery showcasing 7 authentic certificates with full-screen zoom lightbox.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript (Strict typing, zero `any`)
- **Styling**: Tailwind CSS with custom Dark Blue & Metallic Gold design tokens
- **Icons**: Authentic brand vectors & Lucide React
- **Animations**: CSS 3D transforms, keyframe orbits, IntersectionObserver scroll transitions

### Backend
- **Framework**: FastAPI (Python 3.14)
- **Validation**: Pydantic v2 schemas
- **Database**: SQLAlchemy 2.0 async engine (SQLite for local development, asyncpg PostgreSQL for Railway production)
- **Security**: Rate limiting (SlowAPI), Honeypot anti-spam protection, CORS middleware

---

## 📁 Repository Structure

```text
e:/Haider New portfolio/
├── backend/
│   ├── data.py             # Verified backend data fixtures
│   ├── database.py         # Async SQLAlchemy engine (SQLite / PostgreSQL)
│   ├── main.py             # FastAPI endpoints (health, contact, services, etc.)
│   ├── models.py           # ContactSubmission database model
│   ├── railway.json        # Railway deployment configuration
│   ├── requirements.txt    # Python dependencies
│   └── schemas.py          # Pydantic validation models
├── certificate/            # Original certificate image files & Haider Pic.jpeg
├── logo/                   # Original project logos & MH Marketing brand logo
├── portfolio.db            # Local SQLite database (auto-created)
├── frontend/
│   ├── public/
│   │   └── images/
│   │       ├── certificate/ # High-resolution certificate scans
│   │       ├── logo/        # Verified project logos
│   │       └── profile/     # Haider Ali professional portrait
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css  # Dark Blue + Metallic Gold design system
│   │   │   ├── layout.tsx   # Root layout with SEO metadata & JSON-LD
│   │   │   ├── page.tsx     # Cinematic landing page
│   │   │   ├── robots.ts    # Technical SEO robots
│   │   │   └── sitemap.ts   # Dynamic XML sitemap
│   │   ├── components/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── BrandIcon.tsx
│   │   │   ├── CertificateLightbox.tsx
│   │   │   ├── CertificatesSection.tsx
│   │   │   ├── CinematicBackground.tsx
│   │   │   ├── CinematicSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── FloatingWhatsApp.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── ProjectShowcase.tsx
│   │   │   ├── ReviewsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── SkipLink.tsx
│   │   │   └── SocialConnectSection.tsx
│   │   ├── data/
│   │   │   └── portfolioData.ts # Centralized source of truth
│   │   └── types/
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── .env.example
└── README.md
```

---

## 🚀 Local Development

### 1. Backend Setup
```bash
# From workspace root
uvicorn backend.main:app --host 127.0.0.1 --port 8000 --reload
```
API docs available at: `http://127.0.0.1:8000/docs`

### 2. Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Run development server
npm run dev

# Or build and start production server
npm run build
npm run start
```
Frontend accessible at: `http://localhost:3000`

---

## 🚂 Railway Deployment
1. Connect this repository to **Railway**.
2. Provision a **PostgreSQL** service in Railway.
3. Deploy the **Backend**:
   - Root directory: `/` or `/backend`
   - Start command: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
   - Set environment variable: `DATABASE_URL=${{Postgres.DATABASE_URL}}`
4. Deploy the **Frontend**:
   - Root directory: `frontend`
   - Set environment variable: `NEXT_PUBLIC_API_URL=https://<your-backend-railway-url>`
   - Build command: `npm run build`
   - Start command: `npm run start`

---

## 📋 Verified Project Showcase List
1. **Decent Corporation** — Real Estate / Property Marketing
2. **Islamabad Aesthetic & Dental Clinic** — Healthcare / Aesthetic & Dental
3. **Islamabad Investment** — Real Estate / Investment Marketing
4. **ISB Investment** — Real Estate / Investment Marketing
5. **Essens Outlet** — Beauty / Cosmetics / E-commerce
6. **Decent Marketing** — Marketing / Digital Presence
7. **Dubai Project** — Dubai / International Marketing
8. **Swim Zenn Farmhouses** — Real Estate / Farmhouses
9. **Apna Studio** — Creative / Business Page
10. **Essens** — Beauty / Cosmetics

All projects link directly to their official verified Facebook pages.

---

## 🎓 Verified Credentials List
1. **DigiSkills.pk / Ministry of IT & Telecom** — Digital Marketing (DSTP3.0-Batch-03, July 2026, ID: 9XJ2R6SMK)
2. **Learning With Earning** — Social Media Sales Marketing (Facebook + Instagram + WhatsApp, Sept 2024, ID: LWE-97520)
3. **DigiSkills.pk / Ministry of IT & Telecom** — Freelancing (DSTP3.0-Batch-01, Dec 2025, ID: KHCVNWNMK)
4. **Learning With Earning** — Fiverr Freelancing (Sept 2024, ID: LWE-97520)
5. **DigiSkills.pk / Ignite / Virtual University** — Artificial Intelligence using Python (July 2026, ID: DYY67W4MK)
6. **Learning With Earning** — Video Editing & Animation (Sept 2024, ID: LWE-97622)
7. **Learning With Earning** — Graphic Designing (Adobe Photoshop Illustrator, Sept 2024, ID: LWE-87521)

---

## 📞 Official Contact Channels
- **WhatsApp**: [+92 331 2018512](https://wa.me/923312018512)
- **Phone**: `0331-2018512`
- **Email**: `mhmarketing04@gmail.com`
- **Facebook**: [facebook.com/mhmarketingglobal](https://www.facebook.com/mhmarketingglobal)
- **Instagram**: [instagram.com/mhmarketingglobal](https://www.instagram.com/mhmarketingglobal/)
- **LinkedIn**: [linkedin.com/in/haiderali56](http://www.linkedin.com/in/haiderali56)
- **YouTube**: [youtube.com/@mhmarketingglobal](https://youtube.com/@mhmarketingglobal?si=Nj78Tys-pKHaJL7n)
- **TikTok**: [tiktok.com/@mhmarketingglobal](http://tiktok.com/@mhmarketingglobal)
