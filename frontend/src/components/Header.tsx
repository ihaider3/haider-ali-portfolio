"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "services", "projects", "certificates", "reviews", "contact"];
      let currentActive = "hero";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section is active if its top is near header (<= 260px) and bottom is still visible (> 100px)
          if (rect.top <= 260 && rect.bottom > 100) {
            currentActive = sectionId;
          }
        }
      }
      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020614]/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-[#D4AF37]/35 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.18)] py-2 sm:py-2.5"
          : "bg-transparent border-b border-transparent shadow-none py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#FFF4C2] transition-all duration-300">
              <Image
                src="/images/logo/mh-marketing.jpg"
                alt="MH Marketing Official Logo"
                fill
                sizes="44px"
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider metallic-gold-heading leading-none">
                MH MARKETING
              </span>
            </div>
          </Link>

          {/* Navigation in Center (Desktop) */}
          <nav
            className={`hidden lg:flex items-center space-x-1 xl:space-x-1.5 px-3.5 py-1 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-[#040C22]/80 backdrop-blur-xl border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]"
                : "bg-[#050D24]/70 backdrop-blur-md border-[#D4AF37]/20 shadow-md"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3 py-1 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#020612] bg-gradient-to-r from-[#F3CF7A] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right-side CTAs: WhatsApp + Facebook Page */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={OWNER_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit MH Marketing on Facebook"
              className="px-3.5 py-1.5 rounded-full border border-blue-500/40 bg-blue-950/30 text-blue-400 hover:bg-blue-900/50 hover:border-blue-400 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-sm"
            >
              <BrandIcon name="facebook" size={15} />
              <span className="hidden md:inline">Facebook</span>
            </a>

            <a
              href={OWNER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with Haider Ali"
              className="px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 hover:bg-emerald-900/50 hover:border-emerald-400 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-sm"
            >
              <BrandIcon name="whatsapp" size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile CTAs & Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={OWNER_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="p-1.5 rounded-full border border-blue-500/40 bg-blue-950/30 text-blue-400"
            >
              <BrandIcon name="facebook" size={16} />
            </a>

            <a
              href={OWNER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400"
            >
              <BrandIcon name="whatsapp" size={16} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 rounded-xl bg-[#050D24] border border-[#D4AF37]/40 text-white hover:text-[#F3CF7A] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-[#020614]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-semibold py-2 px-3.5 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? "text-[#020612] bg-gradient-to-r from-[#F3CF7A] to-[#D4AF37]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={OWNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 font-semibold flex items-center justify-center gap-2 text-xs"
              >
                <BrandIcon name="whatsapp" size={16} />
                <span>WhatsApp: {OWNER_INFO.phone}</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full metallic-gold-button py-2.5 rounded-xl text-center font-bold flex items-center justify-center gap-2 text-xs"
              >
                <span>Let’s Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
