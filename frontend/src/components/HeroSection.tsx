"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { CountryFlag } from "./CountryFlag";
import { OWNER_INFO } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";

// Authentic Blue Verified Badge (Exact Twitter / Instagram / Meta scalloped starburst rosette with crisp white checkmark)
const AuthenticVerifiedBadge: React.FC<{ size?: number; className?: string }> = ({
  size = 22,
  className = ""
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-[0_0_8px_rgba(29,155,240,0.75)] ${className}`}
    aria-label="Verified Authentic Profile"
  >
    {/* Authentic 8-crest scalloped starburst rosette */}
    <path
      d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
      fill="#1D9BF0"
    />
    {/* Crisp pure white checkmark inside */}
    <path
      d="M10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z"
      fill="#FFFFFF"
    />
  </svg>
);

type Picture2Platform = {
  name: "google" | "instagram" | "whatsapp" | "tiktok" | "youtube";
  label: string;
  badgeText: string;
  href: string;
  baseDeg: number;
  borderColor: string;
  glowColor: string;
  sizeClass: string;
  iconSize: number;
};

type OrbitPlatformConfig = {
  id: string;
  name: "whatsapp" | "meta" | "instagram" | "youtube" | "tiktok" | "google" | "linkedin";
  label: string;
  badgeText: string;
  href: string;
  borderColor: string;
  glowColor: string;
  sizeClass: string;
  iconSize: number;
};

// 10 Evenly-spaced platforms around 360° to eliminate empty gaps:
// WhatsApp -> Meta -> Instagram -> YouTube -> TikTok -> Google -> WhatsApp -> LinkedIn -> Meta -> Instagram
const CONTINUOUS_ORBIT_PLATFORMS: OrbitPlatformConfig[] = [
  {
    id: "wa-1",
    name: "whatsapp",
    label: "WhatsApp",
    badgeText: "Direct WhatsApp Contact",
    href: OWNER_INFO.whatsappUrl,
    borderColor: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.9)",
    sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
    iconSize: 26
  },
  {
    id: "meta-1",
    name: "meta",
    label: "Meta Ads",
    badgeText: "Facebook & Instagram Ads",
    href: OWNER_INFO.socials.facebook,
    borderColor: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "ig-1",
    name: "instagram",
    label: "Instagram",
    badgeText: "Instagram Growth & Reels",
    href: OWNER_INFO.socials.instagram,
    borderColor: "#E1306C",
    glowColor: "rgba(225, 48, 108, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "yt-1",
    name: "youtube",
    label: "YouTube",
    badgeText: "YouTube Channel & Video Ads",
    href: OWNER_INFO.socials.youtube,
    borderColor: "#FF0000",
    glowColor: "rgba(255, 0, 0, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "tt-1",
    name: "tiktok",
    label: "TikTok",
    badgeText: "TikTok Marketing & Viral Ads",
    href: OWNER_INFO.socials.tiktok,
    borderColor: "#00F2FE",
    glowColor: "rgba(0, 242, 254, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "google-1",
    name: "google",
    label: "Google Ads",
    badgeText: "Google Ads & PPC Specialist",
    href: "#services",
    borderColor: "#FBBC05",
    glowColor: "rgba(251, 188, 5, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "wa-2",
    name: "whatsapp",
    label: "WhatsApp Me",
    badgeText: "Fast Client Support",
    href: OWNER_INFO.whatsappUrl,
    borderColor: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.9)",
    sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
    iconSize: 26
  },
  {
    id: "linkedin-1",
    name: "linkedin",
    label: "LinkedIn",
    badgeText: "B2B Marketing & Connections",
    href: OWNER_INFO.socials.linkedin,
    borderColor: "#0A66C2",
    glowColor: "rgba(10, 102, 194, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "meta-2",
    name: "meta",
    label: "Facebook Marketing",
    badgeText: "Meta Verified Specialist",
    href: OWNER_INFO.socials.facebook,
    borderColor: "#0081FB",
    glowColor: "rgba(0, 129, 251, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "ig-2",
    name: "instagram",
    label: "Instagram Page",
    badgeText: "Organic & Paid Campaigns",
    href: OWNER_INFO.socials.instagram,
    borderColor: "#E1306C",
    glowColor: "rgba(225, 48, 108, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  }
];

// 10 Golden Energy Light Beads placed midway between each icon (every 36°)
const CONTINUOUS_ORBIT_BEADS = [18, 54, 90, 126, 162, 198, 234, 270, 306, 342];

// Golden Stardust Particles floating in ambient space around card & orbit
const STARDUST_PARTICLES = [
  { top: "14%", left: "10%", size: "3px", delay: "0s", duration: "3.2s", opacity: 0.8 },
  { top: "22%", left: "22%", size: "2px", delay: "1.2s", duration: "4.1s", opacity: 0.6 },
  { top: "10%", left: "76%", size: "3.5px", delay: "0.5s", duration: "3.8s", opacity: 0.9 },
  { top: "26%", left: "84%", size: "2px", delay: "2.1s", duration: "4.5s", opacity: 0.7 },
  { top: "42%", left: "6%", size: "2.5px", delay: "1.7s", duration: "3.5s", opacity: 0.85 },
  { top: "60%", left: "12%", size: "3px", delay: "0.8s", duration: "4.2s", opacity: 0.75 },
  { top: "74%", left: "20%", size: "2px", delay: "2.5s", duration: "3.9s", opacity: 0.65 },
  { top: "86%", left: "16%", size: "3.5px", delay: "1.1s", duration: "4.8s", opacity: 0.9 },
  { top: "88%", left: "80%", size: "2.5px", delay: "0.3s", duration: "3.6s", opacity: 0.7 },
  { top: "66%", left: "88%", size: "3px", delay: "1.9s", duration: "4.4s", opacity: 0.8 },
  { top: "50%", left: "94%", size: "2px", delay: "2.7s", duration: "3.3s", opacity: 0.6 },
  { top: "34%", left: "90%", size: "3.5px", delay: "0.9s", duration: "4.0s", opacity: 0.85 },
  { top: "82%", left: "36%", size: "2px", delay: "1.4s", duration: "3.7s", opacity: 0.6 },
  { top: "84%", left: "64%", size: "2.5px", delay: "2.3s", duration: "4.3s", opacity: 0.75 },
  { top: "16%", left: "66%", size: "3px", delay: "0.7s", duration: "3.4s", opacity: 0.8 },
  { top: "32%", left: "16%", size: "2px", delay: "1.6s", duration: "4.6s", opacity: 0.65 },
];

const STAT_PLATFORMS = [
  { name: "facebook" as const, label: "Facebook", href: OWNER_INFO.socials.facebook },
  { name: "instagram" as const, label: "Instagram", href: OWNER_INFO.socials.instagram },
  { name: "tiktok" as const, label: "TikTok", href: OWNER_INFO.socials.tiktok },
  { name: "meta" as const, label: "Meta Ads", href: OWNER_INFO.socials.facebook },
  { name: "google-ads" as const, label: "Google Ads", href: "#services" },
  { name: "youtube" as const, label: "YouTube", href: OWNER_INFO.socials.youtube },
];

export const HeroSection: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [activeFlagTooltip, setActiveFlagTooltip] = useState<string | null>(null);
  const [activePlatformTooltip, setActivePlatformTooltip] = useState<string | null>(null);

  // Responsive radii: slightly lifted up and tightened so orbit passes completely ABOVE name badge
  const [radii, setRadii] = useState({ rx: 275, ry: 74 });
  const angleRef = useRef(0);
  const isHoveredRef = useRef(false);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const beadRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateRadii = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setRadii({ rx: 175, ry: 50 });
      } else if (window.innerWidth < 1024) {
        setRadii({ rx: 230, ry: 64 });
      } else {
        setRadii({ rx: 275, ry: 74 });
      }
    };

    updateRadii();
    window.addEventListener("resize", updateRadii);
    return () => window.removeEventListener("resize", updateRadii);
  }, []);

  // Continuous 60fps auto-rotation of all 10 icons and 10 golden beads (no empty gaps, lifted above name)
  useEffect(() => {
    let animId: number;
    const tiltRad = (-18 * Math.PI) / 180;
    const cosTilt = Math.cos(tiltRad);
    const sinTilt = Math.sin(tiltRad);
    const total = CONTINUOUS_ORBIT_PLATFORMS.length;
    const yShift = -30; // Lifts entire orbit up by 30px so it never overlaps the name badge!

    const updatePositions = () => {
      const baseAngle = angleRef.current;
      const { rx, ry } = radii;

      // 1. Auto-rotate all 10 Platform Icons along the orbit around the picture
      CONTINUOUS_ORBIT_PLATFORMS.forEach((_, index) => {
        const el = iconRefs.current[index];
        if (!el) return;

        const currentDeg = (index * (360 / total) + baseAngle) % 360;
        const rad = (currentDeg * Math.PI) / 180;
        const rawX = rx * Math.cos(rad);
        const rawY = ry * Math.sin(rad);
        const x = rawX * cosTilt - rawY * sinTilt;
        const y = rawX * sinTilt + rawY * cosTilt + yShift;

        // Depth sorting: rawY >= 0 is FRONT, rawY < 0 is BACK (behind portrait)
        const isFront = rawY >= 0;
        const depthFactor = (rawY / ry + 1) / 2; // 0 to 1
        const scale = 0.85 + 0.25 * depthFactor;
        const opacity = 0.75 + 0.25 * depthFactor;

        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        el.style.zIndex = isFront ? "30" : "6";
        el.style.opacity = `${opacity}`;
      });

      // 2. Auto-rotate all 10 Golden Energy Beads along the orbit
      CONTINUOUS_ORBIT_BEADS.forEach((baseDeg, index) => {
        const el = beadRefs.current[index];
        if (!el) return;

        const currentDeg = (baseDeg + baseAngle) % 360;
        const rad = (currentDeg * Math.PI) / 180;
        const rawX = rx * Math.cos(rad);
        const rawY = ry * Math.sin(rad);
        const x = rawX * cosTilt - rawY * sinTilt;
        const y = rawX * sinTilt + rawY * cosTilt + yShift;
        const isFront = rawY >= 0;
        const depthFactor = (rawY / ry + 1) / 2;

        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        el.style.zIndex = isFront ? "26" : "6";
        el.style.opacity = `${0.35 + 0.65 * depthFactor}`;
      });
    };

    const animate = () => {
      // Smooth continuous auto-rotation (slows down slightly on hover for easy clicking)
      const speed = isHoveredRef.current ? 0.03 : 0.2;
      angleRef.current = (angleRef.current + speed) % 360;
      updatePositions();
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [radii]);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-8 sm:pb-12 lg:pb-14 overflow-x-clip w-full scroll-mt-28"
    >
      {/* Dark Blue & Metallic Gold Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.2)_0%,rgba(212,175,55,0.1)_45%,transparent_75%)] blur-3xl opacity-90 animate-ambient-glow" />
        <div className="absolute top-8 right-1/4 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(212,175,55,0.09)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-6 left-12 w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(30,64,175,0.15)_0%,transparent_70%)] blur-2xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 w-full">
        {/* MAIN HERO GRID: Left Content / Right Portrait Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: Identity, Heading, Pitch, Prominent CTAs */}
          <ScrollReveal
            initialVisible={true}
            delay={0}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Metallic Gold Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#050D20]/90 border border-[#D4AF37]/40 shadow-[0_0_18px_rgba(212,175,55,0.18)] mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3CF7A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs font-bold tracking-widest metallic-gold-text uppercase">
                MH MARKETING
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs text-slate-300 font-medium">Digital Marketing Expert</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-extrabold tracking-tight text-white leading-[1.12] mb-4 sm:mb-5">
              DIGITAL MARKETING THAT TURNS{" "}
              <span className="metallic-gold-heading drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]">
                ATTENTION
              </span>{" "}
              INTO{" "}
              <span className="metallic-gold-heading drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]">
                GROWTH.
              </span>
            </h1>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
              I’m <strong className="text-white font-semibold">Haider Ali</strong>, a Digital Marketing Expert helping businesses build a stronger digital presence, reach the right audience and turn online attention into meaningful opportunities.
            </p>

            {/* Prominent CTA Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* View My Work (High Contrast, Prominent Metallic Outline) */}
              <Link
                href="#projects"
                className="metallic-outline-button px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 group/btn cursor-pointer shadow-lg"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFF4C2] transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
              </Link>

              {/* Let's Work Together (User-specified Specular Metallic Gold Gradient) */}
              <Link
                href="#contact"
                className="metallic-gold-button px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-xl group/btn cursor-pointer"
              >
                <span>Let’s Work Together</span>
                <Sparkles className="w-4 h-4" />
              </Link>

              {/* WhatsApp Me */}
              <a
                href={OWNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Haider Ali"
                className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-full border border-emerald-500/50 bg-emerald-950/35 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all text-sm sm:text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto shadow-md cursor-pointer"
              >
                <BrandIcon name="whatsapp" size={19} />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Portrait INSIDE Horizontal Ring with Synchronized Rotating Ring & Attached Clickable Icons */}
          <ScrollReveal
            initialVisible={true}
            delay={120}
            className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0 select-none"
          >
            {/* Deep Radiant Ambient Backglow */}
            <div className="absolute w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,rgba(30,64,175,0.18)_45%,transparent_70%)] blur-3xl pointer-events-none -z-10 animate-ambient-glow" />

            {/* STAGE CONTAINER: Picture sits inside horizontal ring matching Picture 2 */}
            <div
              suppressHydrationWarning
              className="relative w-full max-w-[580px] h-[450px] sm:h-[490px] lg:h-[530px] flex items-center justify-center"
            >
              
              {/* LAYER 1: BACK ARC OF INCLINED ORBIT (z-index: 5, passes BEHIND picture, tilted -18°, lifted up) */}
              <svg
                suppressHydrationWarning
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[520px] pointer-events-none overflow-visible"
                viewBox="0 0 600 500"
                fill="none"
                style={{ zIndex: 5 }}
              >
                <defs>
                  <linearGradient id="backGoldRail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C69A32" stopOpacity="0.55" />
                    <stop offset="50%" stopColor="#FFF4C2" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#E5C06E" stopOpacity="0.65" />
                  </linearGradient>
                </defs>

                {/* Soft ambient golden bloom halo behind track */}
                <path
                  d={`M ${300 + radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 - radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="#F3CF7A"
                  strokeWidth="8"
                  strokeOpacity="0.18"
                  className="filter blur-[4px]"
                />

                {/* Solid outer gold guide rail */}
                <path
                  d={`M ${300 + radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 - radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="url(#backGoldRail)"
                  strokeWidth="2.4"
                  strokeOpacity="0.75"
                  className="filter drop-shadow-[0_0_12px_rgba(212,175,55,0.55)]"
                />
              </svg>

              {/* LAYER 2: AMBIENT GOLDEN STARDUST PARTICLES MATCHING PICTURE 2 */}
              <div className="absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 10 }}>
                {STARDUST_PARTICLES.map((p, idx) => (
                  <div
                    key={`stardust-${idx}`}
                    className="absolute rounded-full bg-[#FFF4C2] animate-pulse"
                    style={{
                      top: p.top,
                      left: p.left,
                      width: p.size,
                      height: p.size,
                      opacity: p.opacity,
                      boxShadow: "0 0 8px rgba(243, 207, 122, 0.95)",
                      animationDuration: p.duration,
                      animationDelay: p.delay
                    }}
                  />
                ))}
              </div>

              {/* LAYER 3: CENTRAL PORTRAIT CARD (z-index: 15, UPRIGHT matching Picture 2, with glass effect & golden backlight) */}
              <div
                className="relative w-[270px] h-[370px] sm:w-[310px] sm:h-[430px] lg:w-[330px] lg:h-[460px] rounded-[32px] p-[2.5px] transition-all duration-500 group/card cursor-pointer"
                style={{
                  transform: "none",
                  zIndex: 15
                }}
              >
                {/* DYNAMIC GOLDEN BACKLIGHT SHADE (Blooms into rich golden shadow when cursor hovers over picture) */}
                <div className="absolute -inset-4 sm:-inset-6 rounded-[44px] bg-[radial-gradient(circle_at_50%_50%,rgba(243,207,122,0.75)_0%,rgba(212,175,55,0.45)_40%,transparent_70%)] blur-2xl opacity-40 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-500 pointer-events-none -z-10" />

                {/* Specular Gold & Frosted Glass Outer Border Frame */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#8F6A2A] via-[#F0D58A] to-[#D4AF37] shadow-[0_20px_50px_rgba(2,6,18,0.95),0_0_30px_rgba(212,175,55,0.3)] group-hover/card:shadow-[0_25px_65px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.85)] transition-all duration-500 pointer-events-none" />

                {/* Inner Card Container with Frosted Glass Effect */}
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#040A1A]/85 backdrop-blur-xl border border-white/15">
                  {/* Glass Specular Glint Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent pointer-events-none z-10 opacity-70 group-hover/card:opacity-95 transition-opacity duration-500" />
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF4C2]/80 to-transparent pointer-events-none z-10" />

                  {/* Haider Ali's Actual Authentic Photo */}
                  <Image
                    src="/images/profile/haider-portrait.jpg"
                    alt="Haider Ali — Digital Marketing Expert"
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 310px, 330px"
                    className="object-cover object-[50%_15%] filter contrast-105 brightness-98 transition-transform duration-700 group-hover/card:scale-105"
                  />

                  {/* Dark navy gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020614] via-transparent to-transparent opacity-85 z-10" />

                  {/* ATTACHED PORTRAIT DETAILS CARD (HAIDER ALI + Authentic Verified + Digital Marketing Expert + Founder MH Marketing) */}
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#06122F]/92 via-[#040C22]/96 to-[#020614]/98 backdrop-blur-xl border border-[#F3CF7A]/60 shadow-[0_12px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.35)] text-center transition-all duration-300 group-hover/card:border-[#FFF4C2] group-hover/card:shadow-[0_16px_45px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.55)] z-20">
                    {/* Line 1: HAIDER ALI + Authentic Blue Verified Badge */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg sm:text-2xl font-black tracking-wider bg-gradient-to-r from-[#FFF4C2] via-[#F3CF7A] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(212,175,55,0.7)] uppercase">
                        HAIDER ALI
                      </span>
                      <AuthenticVerifiedBadge size={22} />
                    </div>

                    {/* Line 2: Digital Marketing Expert */}
                    <p className="text-[11px] sm:text-xs font-extrabold tracking-[0.16em] text-slate-200 uppercase mt-1 drop-shadow-sm">
                      Digital Marketing Expert
                    </p>

                    {/* Line 3: FOUNDER • MH MARKETING (Exact Picture 2 addition) */}
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#F3CF7A]/90 uppercase mt-0.5">
                      FOUNDER • MH MARKETING
                    </p>
                  </div>
                </div>
              </div>

              {/* LAYER 4: FRONT ARC OF INCLINED ORBIT (z-index: 25, passes IN FRONT of picture, tilted -18°, lifted up) */}
              <svg
                suppressHydrationWarning
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[520px] pointer-events-none overflow-visible"
                viewBox="0 0 600 500"
                fill="none"
                style={{ zIndex: 25 }}
              >
                <defs>
                  <linearGradient id="frontGoldRail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#FFF8D6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#F3CF7A" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Soft ambient golden bloom halo in front of track */}
                <path
                  d={`M ${300 - radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 + radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="#F3CF7A"
                  strokeWidth="9"
                  strokeOpacity="0.28"
                  className="filter blur-[4px]"
                />

                {/* Solid outer specular gold rail */}
                <path
                  d={`M ${300 - radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 + radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="url(#frontGoldRail)"
                  strokeWidth="3.2"
                  strokeOpacity="0.95"
                  className="filter drop-shadow-[0_0_18px_rgba(212,175,55,0.85)]"
                />
              </svg>

              {/* LAYER 5: 10 CONTINUOUS AUTO-ROTATING GOLDEN LIGHT BEADS (MIDWAY BETWEEN ICONS) */}
              {CONTINUOUS_ORBIT_BEADS.map((baseDeg, idx) => {
                const rad = (baseDeg * Math.PI) / 180;
                const tiltRad = (-18 * Math.PI) / 180;
                const rawX = radii.rx * Math.cos(rad);
                const rawY = radii.ry * Math.sin(rad);
                const x = Number((rawX * Math.cos(tiltRad) - rawY * Math.sin(tiltRad)).toFixed(2));
                const y = Number((rawX * Math.sin(tiltRad) + rawY * Math.cos(tiltRad) - 30).toFixed(2));
                const isFront = rawY >= 0;

                return (
                  <div
                    key={`bead-${idx}`}
                    suppressHydrationWarning
                    ref={(el) => {
                      beadRefs.current[idx] = el;
                    }}
                    className="absolute top-1/2 left-1/2 pointer-events-none will-change-transform"
                    style={{
                      zIndex: isFront ? 26 : 6,
                      transform: `translate3d(${x}px, ${y}px, 0)`
                    }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
                      <div className="absolute w-5 h-5 rounded-full bg-[#D4AF37]/30 blur-[4px]" />
                      <div className="absolute w-3 h-3 rounded-full bg-[#FFE58F]/55 blur-[2px]" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFF4C2] shadow-[0_0_8px_#FFE58F,0_0_18px_rgba(212,175,55,0.95)] animate-pulse" />
                    </div>
                  </div>
                );
              })}

              {/* LAYER 6: 10 CONTINUOUS AUTO-ROTATING SIGNATURE PLATFORM ICONS (NO EMPTY GAPS) */}
              {CONTINUOUS_ORBIT_PLATFORMS.map((platform, idx) => {
                const currentDeg = idx * (360 / CONTINUOUS_ORBIT_PLATFORMS.length);
                const rad = (currentDeg * Math.PI) / 180;
                const tiltRad = (-18 * Math.PI) / 180;
                const rawX = radii.rx * Math.cos(rad);
                const rawY = radii.ry * Math.sin(rad);
                const x = Number((rawX * Math.cos(tiltRad) - rawY * Math.sin(tiltRad)).toFixed(2));
                const y = Number((rawX * Math.sin(tiltRad) + rawY * Math.cos(tiltRad) - 30).toFixed(2));
                const isFront = rawY >= 0;

                return (
                  <div
                    key={platform.id}
                    suppressHydrationWarning
                    ref={(el) => {
                      iconRefs.current[idx] = el;
                    }}
                    className="absolute top-1/2 left-1/2 pointer-events-auto will-change-transform group/icon"
                    style={{
                      zIndex: isFront ? 30 : 6,
                      transform: `translate3d(${x}px, ${y}px, 0)`
                    }}
                  >
                    <a
                      href={platform.href}
                      target={platform.href.startsWith("http") ? "_blank" : undefined}
                      rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${platform.label} (${OWNER_INFO.name})`}
                      className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center cursor-pointer block"
                      onMouseEnter={() => {
                        setActiveTooltip(platform.label);
                        isHoveredRef.current = true;
                      }}
                      onMouseLeave={() => {
                        setActiveTooltip(null);
                        isHoveredRef.current = false;
                      }}
                    >
                      {/* Luminous Circular Node with Platform-specific Neon Border & Rich Glow */}
                      <div
                        className={`relative ${platform.sizeClass} rounded-full bg-[#030816]/95 backdrop-blur-md border-[2.2px] group-hover/icon:scale-115 transition-all duration-300 flex items-center justify-center p-2 sm:p-2.5 z-10`}
                        style={{
                          borderColor: platform.borderColor,
                          boxShadow: `0 0 18px ${platform.glowColor}, 0 6px 20px rgba(2,6,18,0.9)`
                        }}
                      >
                        <BrandIcon name={platform.name} size={platform.iconSize} mode="authentic" />
                      </div>

                      {/* Hover Tooltip */}
                      {activeTooltip === platform.label && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-xl bg-[#020614]/98 border border-[#D4AF37]/70 text-[11px] font-extrabold text-[#FFF4C2] whitespace-nowrap shadow-2xl z-50 pointer-events-none backdrop-blur-md flex flex-col items-center gap-0.5">
                          <div className="flex items-center gap-1">
                            <span>{platform.label}</span>
                            <span className="text-[#38BDF8]">↗</span>
                          </div>
                          <span className="text-[9px] font-normal text-slate-300">{platform.badgeText}</span>
                        </div>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* FULL-WIDTH STATS & MARKETS BAR */}
        <ScrollReveal
          initialVisible={true}
          delay={180}
          className="w-full mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#040C22]/85 backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_12px_40px_rgba(2,6,18,0.7),inset_0_0_20px_rgba(212,175,55,0.06)]">
            {/* Box 1: 5+ Years Experience */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3.5 sm:p-4 rounded-xl bg-[#06122D]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black metallic-gold-text tracking-tight group-hover:scale-105 transition-transform origin-left">
                5+
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-semibold mt-1 text-center sm:text-left">
                Years Experience
              </span>
            </div>

            {/* Box 2: Multiple Managed Pages & Projects */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3.5 sm:p-4 rounded-xl bg-[#06122D]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black metallic-gold-text tracking-tight group-hover:scale-105 transition-transform origin-left">
                Multiple
              </span>
              <span className="text-xs sm:text-sm text-slate-300 font-semibold mt-1 text-center sm:text-left">
                Managed Pages &amp; Projects
              </span>
            </div>

            {/* Box 3: International Markets (Flag Icons & Tooltips) */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3.5 sm:p-4 rounded-xl bg-[#06122D]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-2">
                International Markets
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {[
                  { code: "PK" as const, name: "Pakistan" },
                  { code: "GB" as const, name: "United Kingdom" },
                  { code: "US" as const, name: "United States" },
                  { code: "AE" as const, name: "United Arab Emirates" },
                  { code: "SA" as const, name: "Saudi Arabia" },
                ].map((market) => (
                  <div
                    key={market.code}
                    className="relative group/flag cursor-pointer"
                    onMouseEnter={() => setActiveFlagTooltip(market.name)}
                    onMouseLeave={() => setActiveFlagTooltip(null)}
                  >
                    <div className="transition-transform group-hover/flag:scale-125 group-hover/flag:-translate-y-1 duration-200 shadow-sm">
                      <CountryFlag code={market.code} name={market.name} size={18} />
                    </div>
                    {activeFlagTooltip === market.name && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-[#020614] border border-[#D4AF37]/50 text-[10px] font-bold text-[#FFF4C2] whitespace-nowrap z-30 shadow-xl pointer-events-none backdrop-blur-md">
                        {market.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4: Multiple Platforms (with Direct Clickable Social Media Links) */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3.5 sm:p-4 rounded-xl bg-[#06122D]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-300 group">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-2">
                Multiple Platforms
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5">
                {STAT_PLATFORMS.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target={platform.href.startsWith("http") ? "_blank" : undefined}
                    rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="relative group/platform cursor-pointer block"
                    onMouseEnter={() => setActivePlatformTooltip(platform.label)}
                    onMouseLeave={() => setActivePlatformTooltip(null)}
                    aria-label={`Open ${platform.label} (${OWNER_INFO.name})`}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#050D24] border border-[#D4AF37]/40 group-hover/platform:border-[#FFF4C2] group-hover/platform:scale-125 group-hover/platform:-translate-y-1 transition-all duration-200 flex items-center justify-center p-1 shadow-sm">
                      <BrandIcon name={platform.name} size={14} mode="authentic" />
                    </div>
                    {activePlatformTooltip === platform.label && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-[#020614] border border-[#D4AF37]/50 text-[10px] font-bold text-[#FFF4C2] whitespace-nowrap z-30 shadow-xl pointer-events-none backdrop-blur-md flex items-center gap-1">
                        <span>{platform.label}</span>
                        <span className="text-[#38BDF8]">↗</span>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
