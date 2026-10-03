"use client";

import React from "react";
import { OWNER_INFO } from "../data/portfolioData";
import { Globe, Sparkles } from "lucide-react";
import { CountryFlag } from "./CountryFlag";
import { ScrollReveal } from "./ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Haider Ali and MH Marketing"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(30,64,175,0.18)_0%,rgba(212,175,55,0.1)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header with Specular Metallic Gold "ABOUT" Badge */}
        <ScrollReveal delay={0} className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#F3CF7A]/35 to-[#8F6A2A]/25 border-2 border-[#D4AF37]/75 shadow-[0_0_22px_rgba(212,175,55,0.35)] mb-3.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF4C2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] metallic-gold-text uppercase">
              ABOUT
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase">
              The Marketing Mind Behind MH Marketing
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.18] mb-3">
            Strategy, Creativity &amp; Digital Growth —{" "}
            <span className="metallic-gold-heading">
              Built Around Your Business.
            </span>
          </h2>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Main Story Narrative */}
          <ScrollReveal delay={100} className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#040C22]/90 backdrop-blur-xl border border-[#F3CF7A]/40 shadow-[0_12px_35px_rgba(2,6,18,0.85),inset_0_0_20px_rgba(212,175,55,0.06)]">
              <p>
                I’m <strong className="text-white font-bold">Haider Ali</strong>, a Digital Marketing Expert with 5+ years of experience in digital marketing. I work across social media management, paid advertising, content strategy, lead generation, SEO and digital growth.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#040C22]/75 backdrop-blur-md border border-[#D4AF37]/25 space-y-3.5 shadow-md">
              <p>
                Over the years, I have managed multiple pages and marketing projects for businesses connected with Pakistan and international markets including the{" "}
                <strong className="metallic-gold-text font-bold">
                  UK, USA, Dubai/UAE
                </strong>{" "}
                and{" "}
                <strong className="metallic-gold-text font-bold">
                  Saudi Arabia
                </strong>
                .
              </p>

              <p className="text-slate-300">
                My approach combines creative content with practical marketing strategy — understanding the audience, building the right message, managing platforms consistently and using data to improve decisions.
              </p>
            </div>

            {/* Geographic Markets & Campaign Reach with Authentic Flags */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-widest metallic-gold-text mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                <span>Geographic Markets &amp; Campaign Reach</span>
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {OWNER_INFO.markets.map((market) => (
                  <div
                    key={market.code}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#061129]/95 border border-[#D4AF37]/35 text-slate-200 text-xs sm:text-sm font-bold hover:border-[#F3CF7A] hover:bg-[#09183C] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 group cursor-default"
                  >
                    <div className="transition-transform group-hover:scale-115 shrink-0">
                      <CountryFlag code={market.code as any} name={market.name} size={18} />
                    </div>
                    <span className="group-hover:text-white transition-colors">{market.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Visual Factual Stats with Realistic 3D Medallion Icons */}
          <ScrollReveal delay={180} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-4.5">
            {/* Stat 1: 5+ Years Industry Experience */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-[#040C22]/85 backdrop-blur-xl border border-[#D4AF37]/30 hover:border-[#F3CF7A] hover:shadow-[0_12px_35px_rgba(2,6,18,0.9),0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 group flex items-start gap-4">
              {/* Realistic 3D Gold Ribbon Trophy Medallion */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFE58F] via-[#D4AF37] to-[#8F6A2A] p-[2px] shadow-[0_4px_16px_rgba(212,175,55,0.4)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-[#040C22] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.35)_0%,transparent_70%)]" />
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative z-10 drop-shadow-[0_2px_6px_rgba(243,207,122,0.6)]">
                    <path d="M12 2l2.4 5 5.6.8-4 4 1 5.6-5-2.6-5 2.6 1-5.6-4-4 5.6-.8L12 2z" fill="url(#aboutGoldGrad1)" stroke="#FFE58F" strokeWidth="0.8" />
                    <path d="M8.5 17.5L7 22l5-2.5 5 2.5-1.5-4.5" stroke="#F3CF7A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="aboutGoldGrad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFF4C2" />
                        <stop offset="50%" stopColor="#F3CF7A" />
                        <stop offset="100%" stopColor="#D4AF37" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black metallic-gold-heading">
                  5+ Years
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider metallic-gold-subtle mt-0.5">
                  Industry Experience
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                  Hands-on execution across Meta, Google, organic growth, and content.
                </p>
              </div>
            </div>

            {/* Stat 2: Multiple Pages Actively Managed */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-[#040C22]/85 backdrop-blur-xl border border-[#D4AF37]/30 hover:border-[#F3CF7A] hover:shadow-[0_12px_35px_rgba(2,6,18,0.9),0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 group flex items-start gap-4">
              {/* Realistic 3D Stacked Social Feed / Dashboard */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFE58F] via-[#D4AF37] to-[#8F6A2A] p-[2px] shadow-[0_4px_16px_rgba(212,175,55,0.4)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-[#040C22] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.35)_0%,transparent_70%)]" />
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative z-10 drop-shadow-[0_2px_6px_rgba(243,207,122,0.6)]">
                    <rect x="7" y="3" width="13" height="13" rx="2.5" fill="#8F6A2A" fillOpacity="0.4" stroke="#D4AF37" strokeWidth="1" />
                    <rect x="5" y="5.5" width="13" height="13" rx="2.5" fill="#040C22" fillOpacity="0.8" stroke="#F3CF7A" strokeWidth="1.2" />
                    <rect x="3" y="8" width="13" height="13" rx="2.5" fill="#061334" stroke="#FFF4C2" strokeWidth="1.4" />
                    <line x1="6" y1="12" x2="13" y2="12" stroke="#FFF4C2" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="6" y1="15" x2="11" y2="15" stroke="#F3CF7A" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="13" cy="15" r="1.5" fill="#38BDF8" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black metallic-gold-heading">
                  Multiple Pages
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider metallic-gold-subtle mt-0.5">
                  Actively Managed
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                  Active management for real estate, healthcare, clinics, and e-commerce brands.
                </p>
              </div>
            </div>

            {/* Stat 3: Local + Global Cross-Border Reach */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-[#040C22]/85 backdrop-blur-xl border border-[#D4AF37]/30 hover:border-[#F3CF7A] hover:shadow-[0_12px_35px_rgba(2,6,18,0.9),0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 group flex items-start gap-4">
              {/* Realistic 3D Holographic Globe with Gold Equator & Pin */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFE58F] via-[#D4AF37] to-[#8F6A2A] p-[2px] shadow-[0_4px_16px_rgba(212,175,55,0.4)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-[#040C22] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.35)_0%,transparent_70%)]" />
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative z-10 drop-shadow-[0_2px_6px_rgba(243,207,122,0.6)]">
                    <circle cx="12" cy="12" r="9" stroke="#FFE58F" strokeWidth="1.6" />
                    <ellipse cx="12" cy="12" rx="4.5" ry="9" stroke="#F3CF7A" strokeWidth="1.2" />
                    <line x1="3" y1="12" x2="21" y2="12" stroke="#FFF4C2" strokeWidth="1.4" />
                    <circle cx="14" cy="8" r="2" fill="#E11D48" stroke="#FFFFFF" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black metallic-gold-heading">
                  Local + Global
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider metallic-gold-subtle mt-0.5">
                  Cross-Border Reach
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                  Connecting Pakistani diaspora, local consumers, and international investors.
                </p>
              </div>
            </div>

            {/* Stat 4: Multi-Platform Coordinated Execution */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-[#040C22]/85 backdrop-blur-xl border border-[#D4AF37]/30 hover:border-[#F3CF7A] hover:shadow-[0_12px_35px_rgba(2,6,18,0.9),0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 group flex items-start gap-4">
              {/* Realistic 3D Command Hub with Gold Node Arrows */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFE58F] via-[#D4AF37] to-[#8F6A2A] p-[2px] shadow-[0_4px_16px_rgba(212,175,55,0.4)] shrink-0 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-[#040C22] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.35)_0%,transparent_70%)]" />
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="relative z-10 drop-shadow-[0_2px_6px_rgba(243,207,122,0.6)]">
                    <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" fill="#061334" stroke="#F3CF7A" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3.2" fill="#D4AF37" />
                    <circle cx="12" cy="12" r="1.2" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black metallic-gold-heading">
                  Multi-Platform
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider metallic-gold-subtle mt-0.5">
                  Coordinated Execution
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                  Facebook, Instagram, Google Ads, SEO, and direct WhatsApp lead workflows.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
