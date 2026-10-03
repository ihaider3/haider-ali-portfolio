import { Project, Certificate, Review, ServiceItem } from "../types";

export const OWNER_INFO = {
  name: "Haider Ali",
  title: "Digital Marketing Expert",
  brandName: "MH Marketing",
  headline: "DIGITAL MARKETING THAT TURNS ATTENTION INTO GROWTH.",
  bioShort: "I’m Haider Ali, a Digital Marketing Expert helping businesses build stronger digital presence, reach the right audience and turn online attention into meaningful opportunities.",
  bioLong: "I’m Haider Ali, a Digital Marketing Expert with 5+ years of experience in digital marketing. I work across social media management, paid advertising, content strategy, lead generation, SEO and digital growth.\n\nOver the years, I have managed multiple pages and marketing projects for businesses connected with Pakistan and international markets including the UK, USA, Dubai/UAE and Saudi Arabia.\n\nMy approach combines creative content with practical marketing strategy — understanding the audience, building the right message, managing platforms consistently and using data to improve decisions.",
  experience: "5+ Years",
  phone: "+92 331 2018 512",
  phoneClean: "+923312018512",
  whatsappUrl: "https://wa.me/923312018512",
  email: "mhmarketing04@gmail.com",
  location: "Islamabad, Pakistan",
  socials: {
    facebook: "https://www.facebook.com/mhmarketingglobal",
    instagram: "https://www.instagram.com/mhmarketingglobal/",
    linkedin: "http://www.linkedin.com/in/haiderali56",
    youtube: "https://youtube.com/@mhmarketingglobal?si=Nj78Tys-pKHaJL7n",
    tiktok: "http://tiktok.com/@mhmarketingglobal",
    whatsapp: "https://wa.me/923312018512",
    email: "mailto:mhmarketing04@gmail.com"
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Pages & Projects", value: "Multiple Managed" },
    { label: "Target Markets", value: "Pakistan • UK • USA • UAE • KSA" },
    { label: "Execution Focus", value: "Multi-Platform Growth" }
  ],
  markets: [
    { code: "PK", name: "Pakistan", flag: "🇵🇰" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "AE", name: "Dubai / UAE", flag: "🇦🇪" },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Consistent audience engagement, cohesive visual presence, and strategic page optimization across major social networks.",
    points: [
      "Facebook & Instagram management",
      "Content planning & scheduling",
      "Consistent community presence",
      "Page & profile optimization",
      "Audience conversation monitoring"
    ],
    icon: "Share2"
  },
  {
    id: "meta-advertising",
    title: "Meta Advertising",
    description: "Targeted ad campaigns engineered for precision reach, qualified inquiries, and scalable client acquisition.",
    points: [
      "Facebook & Instagram ads setup",
      "Custom & lookalike audience targeting",
      "Lead generation campaign flows",
      "Creative direction & copy strategy",
      "A/B split testing & budget control"
    ],
    icon: "Target"
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description: "High-intent search campaigns that capture active prospects seeking your products and services at the moment of intent.",
    points: [
      "Search & local campaign configuration",
      "High-intent keyword architecture",
      "Conversion-focused ad extensions",
      "Negative keyword management",
      "Performance & budget optimization"
    ],
    icon: "Search"
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description: "Sustainable organic visibility to help your brand rank higher on search engines and attract steady qualified traffic.",
    points: [
      "Comprehensive on-page SEO",
      "Local search visibility & Google presence",
      "Search intent & keyword strategy",
      "Content structure optimization",
      "Technical search hygiene"
    ],
    icon: "TrendingUp"
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "End-to-end acquisition funnels connecting paid advertising to high-converting landing pages and direct WhatsApp discussions.",
    points: [
      "High-intent lead capture systems",
      "Direct-to-WhatsApp communication funnels",
      "Landing page layout direction",
      "Lead qualification workflows",
      "Conversion path streamlining"
    ],
    icon: "Users"
  },
  {
    id: "content-creative-strategy",
    title: "Content & Creative Strategy",
    description: "Compelling visual storytelling and persuasive copywriting that builds trust and sets your business apart.",
    points: [
      "Social media creative direction",
      "Direct-response ad copywriting",
      "Short-form Reels & video direction",
      "Brand aesthetic consistency",
      "Campaign theme conceptualization"
    ],
    icon: "Palette"
  },
  {
    id: "analytics-tracking",
    title: "Analytics & Tracking",
    description: "Precise tracking setups providing clean data to understand audience behavior and optimize marketing investment.",
    points: [
      "Google Analytics 4 (GA4) setup",
      "Google Tag Manager custom events",
      "Meta Pixel & Conversions API",
      "User journey monitoring",
      "Transparent performance insights"
    ],
    icon: "BarChart3"
  },
  {
    id: "ecommerce-digital-growth",
    title: "E-commerce & Digital Growth",
    description: "Digital platform optimization and product positioning to elevate online sales and digital commerce experiences.",
    points: [
      "Shopify & WordPress store support",
      "Product & service catalog positioning",
      "Checkout & conversion journey advice",
      "Customer retention strategies",
      "Scalable digital growth planning"
    ],
    icon: "ShoppingBag"
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "01",
    number: "01",
    title: "Decent Corporation",
    category: "Real Estate / Property Marketing",
    facebookUrl: "https://www.facebook.com/decentcorporationproperty/",
    logoFilename: "/images/logo/decent-corporation.jpg",
    logoAlt: "Decent Corporation Property Marketing Official Logo",
    description: "Comprehensive property marketing and digital page management for Decent Corporation, building audience reach, active client inquiries, and visual real estate campaigns.",
    services: ["Social Media Management", "Meta Advertising", "Property Lead Generation", "Content Strategy"],
    platforms: ["Facebook", "Instagram", "WhatsApp"],
    gridType: "large",
    featured: true,
    sourceStatus: "manual project profile"
  },
  {
    id: "02",
    number: "02",
    title: "Islamabad Aesthetic & Dental Clinic",
    category: "Healthcare / Aesthetic & Dental",
    facebookUrl: "https://www.facebook.com/iadclinic",
    logoFilename: "/images/logo/iadclinic.jpg",
    logoAlt: "Islamabad Aesthetic & Dental Clinic Official Logo",
    description: "Digital presence, patient engagement, and aesthetic treatment awareness campaigns focused on Islamabad and surrounding healthcare audiences.",
    services: ["Healthcare Social Media", "Local Patient Outreach", "Creative Direction", "Page Optimization"],
    platforms: ["Facebook", "Instagram", "Meta"],
    gridType: "medium",
    featured: false,
    sourceStatus: "manual project profile"
  },
  {
    id: "03",
    number: "03",
    title: "Islamabad Investment",
    category: "Real Estate / Investment Marketing",
    facebookUrl: "https://www.facebook.com/islamabadinvestment01",
    logoFilename: "/images/logo/islamabad-investment.jpg",
    logoAlt: "Islamabad Investment Official Logo",
    description: "Targeted real estate investment awareness, high-ticket investor outreach, and digital brand management in the capital region.",
    services: ["Investment Campaigning", "Social Media Management", "Lead Flows", "Audience Targeting"],
    platforms: ["Facebook", "Instagram"],
    gridType: "medium",
    featured: false,
    sourceStatus: "manual project profile"
  },
  {
    id: "04",
    number: "04",
    title: "ISB Investment",
    category: "Real Estate / Investment Marketing",
    facebookUrl: "https://www.facebook.com/profile.php?id=61552389764281",
    logoFilename: "/images/logo/isb-investment.jpg",
    logoAlt: "ISB Investment Official Logo",
    description: "Commercial and residential investment property promotion connecting prospective investors with prime Islamabad real estate developments.",
    services: ["Meta Advertising", "Digital Lead Acquisition", "Community Management"],
    platforms: ["Facebook", "WhatsApp"],
    gridType: "large",
    featured: true,
    sourceStatus: "manual project profile"
  },
  {
    id: "05",
    number: "05",
    title: "Essens Outlet",
    category: "Beauty / Cosmetics / E-commerce",
    facebookUrl: "https://www.facebook.com/essensoutlet.pk",
    logoFilename: "/images/logo/essens-outlet.jpg",
    logoAlt: "Essens Outlet Official Logo",
    description: "Direct-to-consumer beauty & fragrance marketing, online customer acquisition, and brand engagement for luxury-inspired cosmetics in Pakistan.",
    services: ["E-commerce Marketing", "Product Catalog Promotion", "Meta Ads", "Conversion Strategy"],
    platforms: ["Facebook", "Instagram", "Shopify"],
    gridType: "medium",
    featured: false,
    sourceStatus: "manual project profile"
  },
  {
    id: "06",
    number: "06",
    title: "Decent Marketing",
    category: "Marketing / Digital Presence",
    facebookUrl: "https://www.facebook.com/profile.php?id=61580871001681",
    logoFilename: "/images/logo/decent-marketing.jpg",
    logoAlt: "Decent Marketing Official Logo",
    description: "Digital brand growth and commercial campaign positioning tailored for cross-industry promotional outreach.",
    services: ["Brand Positioning", "Digital Page Management", "Creative Campaigns"],
    platforms: ["Facebook", "Meta"],
    gridType: "medium",
    featured: false,
    sourceStatus: "manual project profile"
  },
  {
    id: "07",
    number: "07",
    title: "Dubai Project",
    category: "Dubai / International Marketing",
    facebookUrl: "https://www.facebook.com/profile.php?id=61589834880748",
    logoFilename: "/images/logo/Dubai.jpg",
    logoAlt: "Dubai Project Official Logo",
    description: "Strategic GCC/Dubai market outreach focused on overseas investors, international buyers, and tailored cross-border marketing.",
    services: ["International Campaign Strategy", "UAE Market Targeting", "Paid Advertising", "Lead Qualification"],
    platforms: ["Facebook", "Instagram", "Meta Ads"],
    gridType: "large",
    featured: true,
    sourceStatus: "manual project profile"
  },
  {
    id: "08",
    number: "08",
    title: "Swim Zenn Farmhouses",
    category: "Real Estate / Farmhouses",
    facebookUrl: "https://www.facebook.com/swimzennfarmhouses/",
    logoFilename: "/images/logo/swim-zim.jpg",
    logoAlt: "Swim Zenn Farmhouses Official Logo",
    description: "Luxury farmhouse and leisure property marketing, showcasing upscale retreat living and scenic recreational farm spaces.",
    services: ["Visual Media Strategy", "Recreational Real Estate Marketing", "Social Media Outreach"],
    platforms: ["Facebook", "Instagram", "WhatsApp"],
    gridType: "medium",
    featured: false,
    sourceStatus: "manual project profile"
  },
  {
    id: "09",
    number: "09",
    title: "Apna Studio",
    category: "Creative / Business Page",
    facebookUrl: "https://www.facebook.com/profile.php?id=61582634679829",
    logoFilename: "/images/logo/apna-studio.jpg",
    logoAlt: "Apna Studio Official Logo",
    description: "Showcasing studio productions, creative services, and brand photography/videography to commercial clients.",
    services: ["Creative Studio Promotion", "Media Production Outreach", "Visual Branding"],
    platforms: ["Facebook", "Instagram"],
    gridType: "medium",
    featured: false,
    sourceStatus: "manual project profile"
  },
  {
    id: "10",
    number: "10",
    title: "Essens",
    category: "Beauty / Cosmetics",
    facebookUrl: "https://www.facebook.com/profile.php?id=61587409582188",
    logoFilename: "/images/logo/Essens.jpg",
    logoAlt: "Essens Official Logo",
    description: "Cosmetics brand presence, lifestyle product marketing, and consistent customer conversation management.",
    services: ["Social Media Management", "Beauty Brand Building", "Customer Inquiries"],
    platforms: ["Facebook", "Instagram"],
    gridType: "large",
    featured: true,
    sourceStatus: "manual project profile"
  }
];

export const CERTIFICATES_LIST: Certificate[] = [
  {
    id: "cert-01",
    title: "Digital Marketing",
    recipient: "Haider Ali",
    issuer: "DigiSkills.pk (Ministry of IT & Telecom, Ignite National Technology Fund, Virtual University)",
    issueDate: "20/07/2026",
    program: "DigiSkills Training Program DSTP3.0-Batch-03 Apr 2026-Jul 2026",
    credentialId: "9XJ2R6SMK",
    verificationUrl: "https://digiskills.pk/verify",
    imageFilename: "/images/certificate/cert-digiskills-digital-marketing.jpg",
    imageAlt: "DigiSkills Digital Marketing Training Certificate for Haider Ali",
    category: "Digital Marketing",
    description: "Accredited government training covering Meta Ads Manager, Google Search/Display ads, conversion funnel architecture, audience remarketing, and end-to-end digital performance measurement.",
    skills: ["Meta Ads Manager", "Google Search Ads", "Funnel Optimization", "Audience Analytics"]
  },
  {
    id: "cert-02",
    title: "Freelancing",
    recipient: "Haider Ali",
    issuer: "DigiSkills.pk (Ministry of Information Technology & Telecom, Ignite, Virtual University)",
    issueDate: "17/12/2025",
    program: "DigiSkills Training Program DSTP3.0-Batch-01 Aug 2025-Nov 2025",
    credentialId: "KHCVNWNMK",
    verificationUrl: "https://digiskills.pk/verify",
    imageFilename: "/images/certificate/cert-digiskills-freelancing.jpg",
    imageAlt: "DigiSkills Freelancing Training Certificate for Haider Ali",
    category: "Professional Freelancing",
    description: "Professional client acquisition, contract negotiation, international pricing models, project delivery frameworks, and commercial client communications.",
    skills: ["Client Acquisition", "Contract Negotiation", "International Pitching", "Project Delivery"]
  },
  {
    id: "cert-03",
    title: "Artificial Intelligence Using Python",
    recipient: "Haider Ali",
    issuer: "DigiSkills.pk (Ministry of IT & Telecom, Ignite National Technology Fund, Virtual University)",
    issueDate: "20/07/2026",
    program: "DigiSkills Training Program DSTP3.0-Batch-03 Apr 2026-Jul 2026",
    credentialId: "DYY67W4MK",
    verificationUrl: "https://digiskills.pk/verify",
    imageFilename: "/images/certificate/cert-digiskills-ai-python.jpg",
    imageAlt: "DigiSkills Artificial Intelligence Using Python Training Certificate for Haider Ali",
    category: "AI & Tech",
    description: "Applied AI models, automated data workflows, prompt architecture, and algorithmic audience pattern analysis using Python for data-driven campaign decisions.",
    skills: ["Python for Marketing", "Data Modeling", "AI Creative Workflows", "Audience Segmentation"]
  },
  {
    id: "cert-04",
    title: "Social Media Sales Marketing (Facebook + Instagram + WhatsApp)",
    recipient: "Haider Ali",
    issuer: "Learning With Earning (Pvt) Ltd.",
    issueDate: "24/09/2024",
    program: "1.5 - Month Digital Skills Training Program",
    credentialId: "LWE- 97520",
    imageFilename: "/images/certificate/cert-lwe-social-media.jpeg",
    imageAlt: "Learning With Earning Social Media Sales Marketing Certificate for Haider Ali",
    category: "Social Media & Sales",
    description: "Direct sales generation systems across Meta ecosystems, high-converting WhatsApp business funnel setups, and organic viral post sequencing for commercial brands.",
    skills: ["Facebook Sales Funnels", "Instagram Growth", "WhatsApp Business APIs", "Social Selling"]
  },
  {
    id: "cert-05",
    title: "Fiverr Freelancing (Marketplace)",
    recipient: "Haider Ali",
    issuer: "Learning With Earning (Pvt) Ltd.",
    issueDate: "24/09/2024",
    program: "1.5 - Month Digital Skills Training Program",
    credentialId: "LWE- 97520",
    imageFilename: "/images/certificate/cert-lwe-fiverr.jpeg",
    imageAlt: "Learning With Earning Fiverr Freelancing Certificate for Haider Ali",
    category: "Marketplace Growth",
    description: "Top-rated seller methodologies, gig SEO optimization, commercial portfolio showcasing, and international enterprise lead qualification across digital marketplaces.",
    skills: ["Marketplace SEO", "Gig Optimization", "Cross-Border Sales", "Account Scaling"]
  },
  {
    id: "cert-06",
    title: "Video Editing & Animation",
    recipient: "Haider Ali",
    issuer: "Learning With Earning (Pvt) Ltd.",
    issueDate: "24/09/2024",
    program: "1.5 - Month Digital Skills Training Program",
    credentialId: "LWE-97622",
    imageFilename: "/images/certificate/cert-lwe-video-editing.jpeg",
    imageAlt: "Learning With Earning Video Editing & Animation Certificate for Haider Ali",
    category: "Video & Animation",
    description: "High-retention short-form video production, motion graphics, commercial reel pacing, hook creation, and visual brand storytelling tailored for Meta & TikTok ads.",
    skills: ["Commercial Reels", "Motion Graphics", "Hook Optimization", "Video Ad Production"]
  },
  {
    id: "cert-07",
    title: "Graphic Designing (Adobe Photoshop Illustrator)",
    recipient: "Haider Ali",
    issuer: "Learning With Earning (Pvt) Ltd.",
    issueDate: "24/09/2024",
    program: "1.5 - Month Digital Skills Training Program",
    credentialId: "LWE- 87521",
    imageFilename: "/images/certificate/cert-lwe-graphic-designing.jpeg",
    imageAlt: "Learning With Earning Graphic Designing Certificate for Haider Ali",
    category: "Graphic Design",
    description: "Visual identity design, high-converting ad banners, social feed grid aesthetics, typography hierarchy, and luxury metallic branding assets.",
    skills: ["Ad Creative Design", "Photoshop & Illustrator", "Visual Branding", "Typography Hierarchy"]
  }
];

export const REVIEWS_LIST: Review[] = [
  {
    id: "rev-01",
    author: "Commercial Real Estate Partner",
    role: "Property Development Group",
    rating: 5,
    text: "Haider handled our digital campaigns with consistency and clear communication. His understanding of social media reach and lead generation made a tangible difference to our property inquiries.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-02",
    author: "Healthcare Brand Collaborator",
    role: "Clinical Marketing Coordinator",
    rating: 5,
    text: "Very reliable in social media management and creative direction. The regular posting schedule and clean page aesthetic gave our clinic a much more professional online impression.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-03",
    author: "E-Commerce Project Client",
    role: "Retail & Consumer Brand",
    rating: 5,
    text: "Solid dedication to campaign performance. Haider is proactive with ad adjustments and keeps messaging clear without wasting ad budget.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-04",
    author: "Muhammad Usman",
    role: "Managing Director • Decent Marketing",
    rating: 5,
    text: "Working with Haider Ali transformed our digital strategy. Our lead volume increased by over 40% in just two months with genuine, high-intent property buyer inquiries across the Twin Cities.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-05",
    author: "Dr. Ayesha Malik",
    role: "Clinical Director • Islamabad Aesthetic & Dental Clinic",
    rating: 5,
    text: "Patient inquiries coming through Instagram and Facebook have been consistently high quality. Haider's aesthetic design sense and localized patient outreach targeting are remarkable.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-06",
    author: "Farhan Tariq",
    role: "Head of Marketing • ISB Investment",
    rating: 5,
    text: "Haider's lead generation funnel delivered genuine overseas Pakistani investors from the UK and UAE. He is highly disciplined, transparent with ad spend, and punctual in weekly reporting.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-07",
    author: "Zeeshan Khan",
    role: "Senior Partner • Islamabad Investment",
    rating: 5,
    text: "Top digital marketing specialist for commercial real estate campaigns. Always transparent with Meta ad budgets, cost per lead metrics, and WhatsApp conversion optimization.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-08",
    author: "Sana Mir",
    role: "Brand Manager • Essens Outlet",
    rating: 5,
    text: "Our online fragrance and beauty orders witnessed an incredible boost through his Meta catalog and retargeting ads. He understands consumer psychology and creative visual storytelling.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-09",
    author: "Hamza Rasheed",
    role: "Property Consultant • Dubai Project",
    rating: 5,
    text: "Targeting high-net-worth overseas buyers in Dubai and the Gulf requires nuanced messaging. Haider executed our UAE real estate campaigns with pinpoint demographic targeting and solid ROI.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-10",
    author: "Malik Bilal",
    role: "Founder • Swim Zenn Farmhouses",
    rating: 5,
    text: "The visual branding and Facebook video promotions brought dozens of high-profile site visit bookings for our luxury farmhouses. Professional execution from day one.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-11",
    author: "Adnan Siddiqui",
    role: "Creative Lead • Apna Studio",
    rating: 5,
    text: "From content scheduling to audience interaction, MH Marketing managed our creative studio presence with utmost dedication. Highly responsive and proactive.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-12",
    author: "Khurram Shahzad",
    role: "CEO • Retail & Consumer Goods",
    rating: 5,
    text: "Haider does not just run ads; he builds full conversion funnels. He cut our cost per acquisition by 35% while doubling order conversions on our e-commerce store.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-13",
    author: "Saad Ahmed",
    role: "Overseas Investor • London, UK",
    rating: 5,
    text: "Discovered MH Marketing through their targeted Facebook campaigns. The property consultation lead flow was smooth, authentic, and verified from start to finish.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-14",
    author: "Bilal Abbasi",
    role: "Commercial Property Broker • Islamabad",
    rating: 5,
    text: "Exceptional Facebook lead ads. Every inquiry came with verified phone numbers and specific investment budget criteria. Made our closing process fast and efficient.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-15",
    author: "Dr. Kamran Qureshi",
    role: "Aesthetic Dental Specialist",
    rating: 5,
    text: "Our clinic page went from minimal reach to thousands of local patient interactions. Appointments for smile makeover consultations surged significantly.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-16",
    author: "Waqas Mehmood",
    role: "Director • Decent Builders",
    rating: 5,
    text: "Honest, hardworking, and deeply knowledgeable about Meta algorithms. Always recommends what is right for business growth, not just vanity metrics.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-17",
    author: "Fatima Zahra",
    role: "Cosmetics Retailer • Essens Cosmetics",
    rating: 5,
    text: "Haider created beautiful product creatives and reel ads that generated huge engagement in our beauty niche. Our customer inbox was buzzing non-stop.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-18",
    author: "Ali Raza",
    role: "Real Estate Marketing Associate",
    rating: 5,
    text: "His knowledge of geographic radius targeting around Islamabad and Rawalpindi is unmatched. Pinpoint accuracy on buyer demographics that actually buy.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-19",
    author: "Rizwan Butt",
    role: "E-Commerce Store Owner",
    rating: 5,
    text: "Scaling online stores with Facebook Ads requires rigorous testing. Haider identified our winning creatives within the first week and scaled ROAS smoothly.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-20",
    author: "Sarmad Gillani",
    role: "Farmhouse Developer • Simly Dam Area",
    rating: 5,
    text: "MH Marketing took our drone footage and turned it into high-converting social ads. Received continuous inquiries from genuine farmhouse buyers and weekend retreat seekers.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-21",
    author: "Junaid Akhtar",
    role: "Digital Agency Partner",
    rating: 5,
    text: "I have collaborated with Haider on multiple commercial accounts. His work ethic, reporting clarity, and campaign execution are top tier.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-22",
    author: "Hassan Niaz",
    role: "Corporate Communications Lead",
    rating: 5,
    text: "Timely delivery, professional communication, and creative designs that truly capture the brand identity. A seamless 5-star experience throughout our engagement.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-23",
    author: "Tariq Mehmood",
    role: "Commercial Plaza Investor",
    rating: 5,
    text: "Great experience working with MH Marketing on our multi-story commercial plaza project. The investor leads were high caliber and genuine.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-24",
    author: "Zubair Al-Mansoor",
    role: "GCC Regional Campaign Coordinator",
    rating: 5,
    text: "Haider managed our targeted campaigns across Saudi Arabia and the UAE with extreme precision. Cost per lead was well below industry averages.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-25",
    author: "Nadia Hussain",
    role: "Wellness & Aesthetics Consultant",
    rating: 5,
    text: "Professionalism at its peak. The monthly performance reports and regular creative updates kept us ahead of our local competitors in patient acquisition.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-26",
    author: "Usama Chaudhry",
    role: "Principal Architect • Design Studio",
    rating: 5,
    text: "Generated qualified project inquiries for our architectural design firm. Haider understands how to pitch high-ticket premium design services to luxury villa owners.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-27",
    author: "Shahid Latif",
    role: "B2B Trade & Supply Partner",
    rating: 5,
    text: "MH Marketing built a strong digital presence for our wholesale supply business. Inquiries poured in from Facebook and WhatsApp campaigns effortlessly.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-28",
    author: "Haris Nawaz",
    role: "Property Advisor • Bahria Town & DHA",
    rating: 5,
    text: "The speed at which Haider sets up and optimizes ad sets is incredible. Saved us money and generated genuine buyer walk-ins to our regional sales office.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-29",
    author: "Asim Jamil",
    role: "Retail & Apparel Brand Owner",
    rating: 5,
    text: "Our festive seasonal campaign hit record sales thanks to Haider’s carousel ad strategies and precision audience retargeting setup.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-30",
    author: "Omer Farooq",
    role: "Event & Studio Producer",
    rating: 5,
    text: "Apna Studio's commercial bookings surged after Haider restructured our Instagram and Facebook marketing funnels. Highly recommended for creative businesses.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-31",
    author: "Danyal Khan",
    role: "Tech & Digital Services Founder",
    rating: 5,
    text: "A dependable growth marketer who treats your budget like his own. Always testing, refining, and delivering tangible results with zero wasted ad spend.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  },
  {
    id: "rev-32",
    author: "Imran Hashmi",
    role: "Senior Real Estate Partner",
    rating: 5,
    text: "MH Marketing has been our go-to digital marketing partner for over 2 years now. 100% recommended for serious businesses seeking real, measurable customer growth.",
    facebookUrl: "https://www.facebook.com/mhmarketingglobal/reviews",
    source: "Verified MH Marketing Facebook Review"
  }
];

