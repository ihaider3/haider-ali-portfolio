"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { OWNER_INFO } from "../data/portfolioData";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Reviews", href: "#reviews" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "Facebook", href: OWNER_INFO.socials.facebook, icon: "facebook" as const },
    { name: "Instagram", href: OWNER_INFO.socials.instagram, icon: "instagram" as const },
    { name: "LinkedIn", href: OWNER_INFO.socials.linkedin, icon: "linkedin" as const },
    { name: "YouTube", href: OWNER_INFO.socials.youtube, icon: "youtube" as const },
    { name: "TikTok", href: OWNER_INFO.socials.tiktok, icon: "tiktok" as const },
    { name: "WhatsApp", href: OWNER_INFO.socials.whatsapp, icon: "whatsapp" as const }
  ];

  return (
    <footer className="relative bg-[#02050E] border-t border-[#D4AF37]/30 pt-20 pb-12 overflow-hidden w-full">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(30,64,175,0.12)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

      <ScrollReveal delay={0} className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10 items-start">
          {/* Left: MH Marketing Official Brand */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Image
                  src="/images/logo/mh-marketing.png"
                  alt="MH Marketing Official Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl tracking-wider block metallic-gold-heading">
                  MH MARKETING
                </span>
                <span className="text-xs metallic-gold-text tracking-widest uppercase font-semibold">
                  Your Trusted Digital Partner
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Digital marketing built around strategy, creativity and growth. Helping businesses turn online attention into measurable opportunities.
            </p>
          </div>

          {/* Center: Haider Ali Identity with circular portrait */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center text-left md:text-center space-y-3">
            <div className="relative w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#D4AF37] to-[#FFF4C2] shadow-[0_0_22px_rgba(212,175,55,0.35)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#02050E]">
                <Image
                  src="/images/profile/haider-portrait.jpg"
                  alt="Haider Ali Digital Marketing Expert"
                  fill
                  sizes="64px"
                  className="object-cover object-[50%_15%]"
                />
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold text-white tracking-wide">
                Haider Ali
              </h4>
              <p className="text-xs metallic-gold-text font-semibold">
                Digital Marketing Expert
              </p>
            </div>

            <p className="text-xs text-slate-400 max-w-xs">
              5+ years managing cross-industry digital campaigns in Pakistan and international markets.
            </p>
          </div>

          {/* Right: Contact & Quick Links */}
          <div className="md:col-span-4 flex flex-col space-y-3 md:items-end">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get In Touch
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300 md:text-right">
              <a
                href={`tel:${OWNER_INFO.phoneClean}`}
                className="flex items-center md:justify-end gap-2 text-slate-300 hover:metallic-gold-text transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{OWNER_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="flex items-center md:justify-end gap-2 text-slate-300 hover:metallic-gold-text transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{OWNER_INFO.email}</span>
              </a>

              <div className="flex items-center md:justify-end gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{OWNER_INFO.location}</span>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MH Marketing ${s.name}`}
                  className="w-9 h-9 rounded-full bg-[#050D24] border border-[#D4AF37]/30 hover:border-[#FFF4C2] hover:bg-[#D4AF37]/20 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                >
                  <BrandIcon name={s.icon} size={16} mode="authentic" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation row */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-medium text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:metallic-gold-text transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom row: Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 MH Marketing — Haider Ali. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#050D24] border border-[#D4AF37]/30 text-slate-300 hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer shadow-md"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </ScrollReveal>
    </footer>
  );
};
