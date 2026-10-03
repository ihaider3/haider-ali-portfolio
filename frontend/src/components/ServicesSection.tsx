"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";
import { ServiceDetailModal, ServiceDetailData } from "./ServiceDetailModal";

// 8 Professional Services with Bright Vivid Visuals, Illuminated Framing, and Highlighted Titles
const SERVICES_DATA: ServiceDetailData[] = [
  {
    id: "meta-advertising",
    pillarBadge: "PAID PERFORMANCE",
    metricBadge: "UP TO 4.2x ROAS",
    metricColor: "#38BDF8",
    categoryTag: "META ADS ECOSYSTEM",
    title: "Facebook & Instagram Ads",
    subtitle: "Targeted High-ROAS Acquisition & Scaling",
    shortDescription:
      "High-converting paid advertising engineered for laser-focused audience targeting, creative A/B testing, and scalable ROAS.",
    imageSrc: "/images/services/meta-ads.jpg",
    brandIcon: "meta",
    featureTags: ["Meta Ads Manager", "Audience Modeling", "Pixel & CAPI"],
    fullOverview:
      "End-to-end paid advertising infrastructure engineered across Facebook and Instagram feeds, Stories, and Reels. We build full-funnel architectures that combine top-of-funnel brand attraction with hyper-targeted retargeting, custom audience segmentation, and lookalike modeling to maximize advertising return on ad spend (ROAS).",
    businessGrowthImpact: {
      heading: "How Facebook & Instagram Ads Generate Direct Revenue:",
      points: [
        "Reaches high-intent buyers ready to purchase your specific products and services.",
        "Server-side Meta Conversions API (CAPI) prevents iOS data loss and optimizes bidding.",
        "High-converting visual creatives lower cost-per-click (CPC) and dramatically increase ROAS.",
        "Predictable, scalable customer acquisition that grows alongside your monthly ad budget."
      ]
    },
    deliverablesList: [
      "Custom & lookalike audience segmentation",
      "Dynamic creative A/B split testing",
      "Full-funnel campaign architecture",
      "Pixel & Conversions API (CAPI) setup",
      "Continuous bid & budget scaling",
      "Weekly transparent ROAS reports"
    ],
    toolsStack: [
      { name: "meta", label: "Meta Ads Manager" },
      { name: "facebook", label: "Facebook Business" },
      { name: "instagram", label: "Instagram Ads" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Facebook & Instagram Ads (Meta Advertising)*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "google-ads",
    pillarBadge: "HIGH-INTENT SEARCH",
    metricBadge: "TOP BIDDING",
    metricColor: "#FBBC04",
    categoryTag: "GOOGLE SEARCH & P-MAX",
    title: "Google Ads & PPC Campaigns",
    subtitle: "High-Intent Keyword Architecture & Scaling",
    shortDescription:
      "Capture active buyers at the exact moment of search with high-ROI keyword bidding, local map ads, and Performance Max.",
    imageSrc: "/images/services/google-ads.jpg",
    brandIcon: "google-ads",
    featureTags: ["Search & Local", "Keyword Bidding", "P-Max Campaigns"],
    fullOverview:
      "Google Ads puts your business directly in front of prospects who are actively typing search queries for your products and services. We build meticulous keyword architectures with negative keyword filtering, high-converting ad extensions, and conversion tracking to ensure every single penny of ad spend targets commercial-intent prospects.",
    businessGrowthImpact: {
      heading: "Why Google PPC Drives Immediate High-Value Inquiries:",
      points: [
        "Captures prospects at the highest point of buying intent — when they are searching.",
        "Outranks competitors for prime commercial and local industry keywords.",
        "Strict negative keyword controls prevent wasteful ad spend on irrelevant clicks.",
        "Real-time conversion tracking directly measures cost-per-acquisition and ROI."
      ]
    },
    deliverablesList: [
      "High-intent keyword research & architecture",
      "Search, Call-Only & Performance Max setups",
      "Conversion-focused ad copy & extensions",
      "Negative keyword lists & audit",
      "Quality Score optimization",
      "Bid management & budget control"
    ],
    toolsStack: [
      { name: "google-ads", label: "Google Ads" },
      { name: "google", label: "Google Search" },
      { name: "google-analytics", label: "GA4 Tracking" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Google Ads & PPC Campaigns*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "social-marketing",
    pillarBadge: "ORGANIC REACH",
    metricBadge: "VIRAL SCALE",
    metricColor: "#E1306C",
    categoryTag: "OMNICHANNEL DISTRIBUTION",
    title: "Social Media Marketing",
    subtitle: "Organic Distribution & Viral Growth",
    shortDescription:
      "Viral content architecture across Instagram, TikTok, and YouTube to build unshakeable brand presence and organic buyers.",
    imageSrc: "/images/services/social-marketing.jpg",
    brandIcon: "instagram",
    featureTags: ["Viral Reels", "Algorithm Pacing", "Multi-Channel"],
    fullOverview:
      "Turn passive scrollers into passionate brand advocates. We craft algorithmic-first content strategies engineered for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn that leverage trending hooks, visual pacing, and high-retention storytelling to generate viral organic reach without burning money on paid ads.",
    businessGrowthImpact: {
      heading: "How Organic Social Marketing Elevates Your Brand Equity:",
      points: [
        "Builds massive organic distribution and top-of-mind brand recognition.",
        "Positions you as the undisputed authority in your industry.",
        "Fosters an engaged community that continuously generates word-of-mouth referrals.",
        "Establishes a zero-cost organic buyer funnel that supplements paid advertising."
      ]
    },
    deliverablesList: [
      "9:16 Short-form video strategy & scripting",
      "Instagram & TikTok algorithm growth roadmap",
      "Hashtag & audio trend analysis",
      "Audience engagement & community pacing",
      "Cross-platform distribution workflows",
      "Monthly virality & reach audit"
    ],
    toolsStack: [
      { name: "instagram", label: "Instagram" },
      { name: "tiktok", label: "TikTok" },
      { name: "youtube", label: "YouTube" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Social Media Marketing (Viral Growth & Reels)*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "social-management",
    pillarBadge: "DAILY OPERATIONS",
    metricBadge: "100% UPTIME",
    metricColor: "#22C55E",
    categoryTag: "FULL ACCOUNT GOVERNANCE",
    title: "Social Media Management",
    subtitle: "Complete Page Governance & 24/7 DMs",
    shortDescription:
      "Daily page operations, scheduled publishing, proactive community moderation, and round-the-clock customer inbox closing.",
    imageSrc: "/images/services/social-management.jpg",
    brandIcon: "facebook",
    featureTags: ["Post Scheduling", "24/7 DM Closing", "Page Governance"],
    fullOverview:
      "Complete hands-off peace of mind for business owners. We take over the day-to-day governance of your commercial social media profiles, managing your monthly content calendar, scheduled publishing, copyright-safe audio, community comment moderation, and rapid 24/7 DM response closing that turns inquiries into confirmed clients.",
    businessGrowthImpact: {
      heading: "How Professional Management Converts Inquiries Into Revenue:",
      points: [
        "Rapid response times in DMs capture warm leads before they contact competitors.",
        "Consistent posting schedule keeps your brand active and algorithms favorable.",
        "Professional community moderation protects brand reputation from spam and negativity.",
        "Frees up your core business hours so you can focus entirely on fulfillment."
      ]
    },
    deliverablesList: [
      "Monthly structured content calendar",
      "Automated post scheduling & captioning",
      "Proactive comment & review moderation",
      "24/7 direct message (DM) response workflows",
      "Profile & bio conversion optimization",
      "Monthly account performance debrief"
    ],
    toolsStack: [
      { name: "facebook", label: "Facebook Page" },
      { name: "meta", label: "Meta Business Suite" },
      { name: "whatsapp", label: "WhatsApp CRM" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Social Media Management (Page Governance & 24/7 DMs)*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "lead-generation",
    pillarBadge: "HIGH-TICKET PIPELINE",
    metricBadge: "-35% LOWER CPL",
    metricColor: "#25D366",
    categoryTag: "DIRECT CLIENT ACQUISITION",
    title: "High-Intent Lead Generation",
    subtitle: "Direct WhatsApp CRM Pipelines",
    shortDescription:
      "High-ticket acquisition funnels routing pre-qualified customer appointments directly into your WhatsApp inbox, eliminating tire-kickers.",
    imageSrc: "/images/services/lead-generation.jpg",
    brandIcon: "whatsapp",
    featureTags: ["WhatsApp Funnels", "Instant Lead Forms", "HNW Filtering"],
    fullOverview:
      "Engineered specifically for real estate developers, healthcare practices, luxury interior designers, and high-ticket service companies. We eliminate cheap tire-kickers by combining qualification questionnaires, Instant Lead Forms, and direct WhatsApp CRM routing, ensuring your sales team only speaks to high-net-worth prospects ready to transact.",
    businessGrowthImpact: {
      heading: "The Power of Direct-to-WhatsApp Client Acquisition:",
      points: [
        "WhatsApp boasts a 98% open rate compared to standard email follow-ups.",
        "Qualifying questions filter out low-budget leads and non-serious prospects.",
        "Frictionless booking experience accelerates your customer sales cycle.",
        "Consistent daily flow of qualified phone numbers and direct WhatsApp chats."
      ]
    },
    deliverablesList: [
      "High-converting Instant Lead Form setup",
      "Direct-to-WhatsApp routing & automation",
      "Custom lead qualification questionnaires",
      "CRM & spreadsheet lead integration",
      "Follow-up message template scripts",
      "Cost-Per-Lead (CPL) reduction audits"
    ],
    toolsStack: [
      { name: "whatsapp", label: "WhatsApp Direct" },
      { name: "meta", label: "Meta Instant Forms" },
      { name: "phone", label: "Direct Calling" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *High-Intent Lead Generation (Direct WhatsApp Funnels)*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "creative-design",
    pillarBadge: "CREATIVE DIRECTION",
    metricBadge: "HIGH CTR VISUALS",
    metricColor: "#F59E0B",
    categoryTag: "COMMERCIAL VISUAL IDENTITY",
    title: "Post & Creative Design",
    subtitle: "Scroll-Stopping Visuals & 9:16 Reels",
    shortDescription:
      "Studio-grade ad creatives crafted in Adobe Photoshop, Illustrator, and Premiere Pro designed to stop the scroll and drive conversions.",
    imageSrc: "/images/services/creative-design.jpg",
    brandIcon: "photoshop",
    featureTags: ["Photoshop Ps", "Illustrator Ai", "Viral 9:16 Reels"],
    fullOverview:
      "In digital advertising, your creative is your targeting. We design scroll-stopping high-CTR static ad banners, carousel infographics, 3D real estate visual showcases, and kinetic typography video reels in Adobe Photoshop, Illustrator, and Premiere Pro that communicate value instantly and make clicking irresistible.",
    businessGrowthImpact: {
      heading: "Why Premium Visual Creatives Make Campaigns Profitable:",
      points: [
        "High CTR ad creatives directly lower Facebook & Google CPM ad costs.",
        "Clean, luxurious branding creates immediate consumer trust and credibility.",
        "Platform-native 9:16 formats blend seamlessly into modern social feeds.",
        "Consistent aesthetic builds memorable, iconic brand positioning."
      ]
    },
    deliverablesList: [
      "Adobe Photoshop high-CTR ad banners",
      "Multi-slide carousel educational graphics",
      "Adobe Illustrator vector branding assets",
      "Premiere Pro 9:16 vertical video reel edits",
      "Story banners & interactive polls",
      "Source files & complete visual kits"
    ],
    toolsStack: [
      { name: "photoshop", label: "Photoshop Ps" },
      { name: "illustrator", label: "Illustrator Ai" },
      { name: "premiere", label: "Premiere Pr" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Post & Creative Design (Ad Creatives, Banners & Reels)*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "seo-ranking",
    pillarBadge: "ORGANIC VISIBILITY",
    metricBadge: "PAGE #1 GOOGLE",
    metricColor: "#34A853",
    categoryTag: "SEARCH ENGINE OPTIMIZATION",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Google #1 First-Page Rankings",
    shortDescription:
      "Sustainable organic search visibility, high-authority keyword ranking, and local Google Business Profile optimization.",
    imageSrc: "/images/services/seo-ranking.jpg",
    brandIcon: "google",
    featureTags: ["On-Page SEO", "Local Maps", "Technical Audits"],
    fullOverview:
      "Long-term digital dominance through white-hat SEO. We conduct deep technical website audits, optimize on-page content structures, establish local Google Business Profile supremacy in your city, and execute authoritative backlink architectures that push your company to Position #1 on Google search results.",
    businessGrowthImpact: {
      heading: "How First-Page Google SEO Generates Compounding Inquiries:",
      points: [
        "Earns organic 24/7 web traffic without paying per click to ad networks.",
        "Local SEO maps optimization dominates nearby customers searching for local services.",
        "First-page placement establishes massive perceived industry authority.",
        "Compounding results that continue delivering leads month after month."
      ]
    },
    deliverablesList: [
      "Complete technical & site speed SEO audit",
      "Keyword intent mapping & content hierarchy",
      "On-page meta tags, schema markup & headings",
      "Google Business Profile (Local Maps) ranking",
      "Competitor backlink gap analysis",
      "Monthly organic keyword ranking reports"
    ],
    toolsStack: [
      { name: "google", label: "Google Ranking" },
      { name: "analytics", label: "Search Console" },
      { name: "google-ads", label: "Search Signals" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Search Engine Optimization (SEO & Google Rank #1)*\n\nPlease share your packages, strategy, and pricing."
  },
  {
    id: "analytics-tracking",
    pillarBadge: "DATA INTELLIGENCE",
    metricBadge: "100% CAPI ACCURACY",
    metricColor: "#00A9FF",
    categoryTag: "MEASUREMENT & PIXEL",
    title: "Analytics, GA4 & Conversion Tracking",
    subtitle: "Precision Measurement & CAPI",
    shortDescription:
      "Eliminate tracking blind spots with server-side Meta Conversions API (CAPI), Google Analytics 4, and custom GTM telemetry.",
    imageSrc: "/images/services/analytics-tracking.jpg",
    brandIcon: "google-analytics",
    featureTags: ["GA4 Setup", "Tag Manager", "Meta CAPI"],
    fullOverview:
      "You cannot improve what you cannot measure. With modern privacy barriers and iOS tracking restrictions, standard browser cookies lose up to 35% of conversion data. We build robust server-side Meta Conversions API (CAPI) and Google Analytics 4 setups via Google Tag Manager that give ad algorithms 100% accurate signal attribution.",
    businessGrowthImpact: {
      heading: "How Server-Side Tracking Directly Maximizes Ad ROI:",
      points: [
        "Feeds ad algorithms accurate purchase data to find more high-value buyers.",
        "Eliminates data loss caused by ad-blockers and browser privacy restrictions.",
        "Tracks full customer purchase journeys from first click to final WhatsApp deal.",
        "Provides crystal-clear clarity on which campaigns actually produce profit."
      ]
    },
    deliverablesList: [
      "Google Analytics 4 (GA4) custom event telemetry",
      "Server-side Meta Conversions API (CAPI) setup",
      "Google Tag Manager (GTM) data layer configuration",
      "Custom purchase, lead & scroll event triggers",
      "Cross-domain & iframe booking tracking",
      "Data accuracy validation & audit"
    ],
    toolsStack: [
      { name: "google-analytics", label: "Google Analytics 4" },
      { name: "google-tag-manager", label: "Tag Manager" },
      { name: "meta", label: "Meta CAPI" }
    ],
    whatsappMessage:
      "Hello Haider Ali, I saw your portfolio website.\n\nI am interested in your service:\n📌 *Analytics, GA4 & Meta Conversions API (CAPI) Tracking*\n\nPlease share your packages, strategy, and pricing."
  }
];

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetailData | null>(null);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    const serviceSelect = document.getElementById("service-select") as HTMLSelectElement | null;
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (
          serviceSelect.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase()) ||
          serviceTitle.toLowerCase().includes(serviceSelect.options[i].text.toLowerCase())
        ) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  };

  return (
    <section
      id="services"
      aria-label="Digital Marketing Services"
      className="py-14 sm:py-20 lg:py-24 relative overflow-hidden w-full scroll-mt-24"
    >
      {/* Radiant Glowing Ambient Atmosphere - Bright & Luminous */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(30,64,175,0.25)_45%,transparent_75%)] blur-3xl pointer-events-none -z-10 animate-ambient-glow" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(56,189,248,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10 w-full">
        {/* Section Header: Specular Metallic Gold "SERVICES" Pill Badge */}
        <ScrollReveal delay={0} className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/30 via-[#F3CF7A]/40 to-[#8F6A2A]/30 border-2 border-[#D4AF37] shadow-[0_0_28px_rgba(212,175,55,0.45)] mb-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF4C2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] bg-gradient-to-r from-[#FFF4C2] via-[#F3CF7A] to-[#D4AF37] bg-clip-text text-transparent uppercase">
              SERVICES
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs text-slate-200 font-bold tracking-wider uppercase">
              Digital Marketing &amp; Growth Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight leading-tight whitespace-normal text-white">
            <span className="metallic-gold-heading drop-shadow-[0_0_35px_rgba(212,175,55,0.65)]">
              HIGH-IMPACT DIGITAL MARKETING SERVICES
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mt-3 font-medium">
            Click on any service card or <strong className="text-[#FFF4C2]">&ldquo;View Full Details&rdquo;</strong> to explore the complete business growth strategy, tools, and deliverables.
          </p>
        </ScrollReveal>

        {/* 8 Bright, Framed Service Cards with High-Resolution Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={(index % 4) * 60}
              className="h-full flex"
            >
              {/* Outer Illuminated Frame (User-Requested Framing Effect) */}
              <div
                onClick={() => setSelectedService(service)}
                className="w-full rounded-[24px] p-[2px] bg-gradient-to-b from-[#FFF4C2]/75 via-[#D4AF37]/50 to-[#38BDF8]/40 shadow-[0_12px_35px_rgba(2,6,18,0.9),0_0_20px_rgba(212,175,55,0.22)] hover:shadow-[0_20px_50px_rgba(2,6,18,0.98),0_0_40px_rgba(212,175,55,0.55),0_0_25px_rgba(56,189,248,0.35)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Inner Card Container with Rich Glossy Dark Blue Glass */}
                <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#091A3E] via-[#05112B] to-[#020718] flex flex-col justify-between overflow-hidden">
                  
                  {/* Top Framed Visual Window (Bright & Vivid, No Dull Dark Overlay) */}
                  <div className="p-3 pb-0">
                    <div className="relative w-full h-44 sm:h-48 rounded-[16px] overflow-hidden border-2 border-[#D4AF37]/45 shadow-[0_6px_25px_rgba(0,0,0,0.7)] bg-[#020612] group-hover:border-[#FFF4C2] transition-colors">
                      <Image
                        src={service.imageSrc}
                        alt={`${service.title} High-Tech Dashboard Visual`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover object-center brightness-105 contrast-105 group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      
                      {/* Subtle Clean Bottom Gradient (Preserves 90% Image Brightness) */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#05112B] to-transparent pointer-events-none" />

                      {/* Top Badges (NO NUMBERS! Clean Pill Framing) */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
                        <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#020614]/90 border border-[#D4AF37]/70 text-[#FFF4C2] shadow-md backdrop-blur-md">
                          {service.pillarBadge}
                        </span>
                        <span
                          className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#020614]/90 border border-white/25 shadow-md backdrop-blur-md"
                          style={{ color: service.metricColor || "#38BDF8" }}
                        >
                          {service.metricBadge}
                        </span>
                      </div>

                      {/* Bottom-right Official Brand Icon Badge */}
                      <div className="absolute bottom-2.5 right-2.5 z-10 w-8 h-8 rounded-xl bg-[#03091E]/95 border border-[#D4AF37]/60 shadow-[0_0_12px_rgba(212,175,55,0.4)] flex items-center justify-center p-1.5 backdrop-blur-md group-hover:scale-115 transition-transform">
                        <BrandIcon name={service.brandIcon} size={17} mode="authentic" />
                      </div>
                    </div>
                  </div>

                  {/* LOWER CHAMBER: Highly Prominent Highlighted Service Name & Short Text */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Label with Glowing Cyan Accent */}
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-[#38BDF8] uppercase tracking-wider mb-2 px-2 py-0.5 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                        <span>{service.categoryTag}</span>
                      </div>

                      {/* HIGHLY PROMINENT & HIGHLIGHTED SERVICE TITLE (User-Requested) */}
                      <h3 className="text-lg sm:text-[1.25rem] font-black tracking-tight leading-snug mb-1.5 bg-gradient-to-r from-white via-[#FFF4C2] to-[#F3CF7A] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.45)] group-hover:from-[#FFF4C2] group-hover:to-[#D4AF37] transition-all">
                        {service.title}
                      </h3>

                      {/* Highlighted Value Subtitle */}
                      <p className="text-xs sm:text-[13px] font-bold text-[#F3CF7A] mb-2.5 leading-snug flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#F3CF7A]" />
                        <span>{service.subtitle}</span>
                      </p>

                      {/* Short Concise Description (Compact box height) */}
                      <p className="text-xs text-slate-200 leading-relaxed mb-3.5 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Feature Chips with Gold Trim */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.featureTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#040C22] border border-[#D4AF37]/30 text-slate-200 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: 1. View Full Details, 2. Direct WhatsApp Action */}
                    <div className="space-y-2 mt-auto pt-3 border-t border-[#D4AF37]/25" onClick={(e) => e.stopPropagation()}>
                      {/* View Full Detail Button - High-Visibility Gold Sheen */}
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#0B1E48] to-[#061435] hover:from-[#D4AF37]/30 hover:to-[#F3CF7A]/30 border-2 border-[#D4AF37]/70 hover:border-[#FFF4C2] text-xs font-black tracking-wider text-[#FFF4C2] flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#F3CF7A]" />
                        <span>VIEW FULL DETAILS</span>
                      </button>

                      {/* Direct WhatsApp Action - Authentic WhatsApp Green #25D366 */}
                      <a
                        href={`https://wa.me/923312018512?text=${encodeURIComponent(
                          service.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-black tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.45)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] cursor-pointer"
                      >
                        <BrandIcon name="whatsapp" size={17} mode="monochrome" className="text-white fill-white shrink-0" />
                        <span className="text-white font-black tracking-wide">INQUIRE ON WHATSAPP</span>
                        <ArrowUpRight className="w-4 h-4 text-white shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Modal for "View Full Detail" */}
      <ServiceDetailModal
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        onSelectServiceForContact={handleSelectServiceForContact}
      />
    </section>
  );
};
