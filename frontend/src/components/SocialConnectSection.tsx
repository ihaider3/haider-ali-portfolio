"use client";

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";

export const SocialConnectSection: React.FC = () => {
  const socialChannels = [
    {
      name: "Facebook",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.facebook,
      icon: "facebook" as const,
      desc: "Updates, real client work & official announcements"
    },
    {
      name: "Instagram",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.instagram,
      icon: "instagram" as const,
      desc: "Visual reels, creative design & marketing strategies"
    },
    {
      name: "LinkedIn",
      handle: "Haider Ali",
      url: OWNER_INFO.socials.linkedin,
      icon: "linkedin" as const,
      desc: "Professional insights, growth networking & B2B reach"
    },
    {
      name: "YouTube",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.youtube,
      icon: "youtube" as const,
      desc: "Video guides, marketing tactics & breakdowns"
    },
    {
      name: "TikTok",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.tiktok,
      icon: "tiktok" as const,
      desc: "Short-form video trends, hooks & audience reach"
    },
    {
      name: "WhatsApp",
      handle: OWNER_INFO.phone,
      url: OWNER_INFO.socials.whatsapp,
      icon: "whatsapp" as const,
      desc: "Direct instant chat & quick project consultation"
    },
    {
      name: "Email",
      handle: OWNER_INFO.email,
      url: OWNER_INFO.socials.email,
      icon: "email" as const,
      desc: "Formal business proposals & direct inquiries"
    }
  ];

  return (
    <section
      id="social"
      aria-label="Social Media Connections"
      className="py-28 relative overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(30,64,175,0.12)_0%,rgba(212,175,55,0.08)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050D20]/90 border border-[#D4AF37]/30 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest metallic-gold-text">
              LET’S CONNECT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Find MH Marketing Across the{" "}
            <span className="metallic-gold-heading">Web</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Connect across your preferred digital platform for updates, insights, and quick direct communication.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open MH Marketing on ${ch.name}`}
              className="glass-blue-panel glass-blue-panel-hover rounded-3xl p-6 border border-[#D4AF37]/30 flex flex-col justify-between group transition-all shadow-xl cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#03091B] border border-[#D4AF37]/35 group-hover:border-[#F3CF7A] group-hover:scale-110 transition-all duration-300 flex items-center justify-center p-3 shadow-md">
                    <BrandIcon name={ch.icon} size={22} mode="authentic" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#F3CF7A] transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:metallic-gold-text transition-colors">
                  {ch.name}
                </h3>
                <p className="text-xs font-semibold metallic-gold-subtle mt-0.5 truncate">
                  {ch.handle}
                </p>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
