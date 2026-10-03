"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";
import { AiAssistantModal } from "./AiAssistantModal";

export const FloatingWhatsApp: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);
  const [showAiTooltip, setShowAiTooltip] = useState(false);
  const [hasAnimatedEntry, setHasAnimatedEntry] = useState(false);

  useEffect(() => {
    // Show gentle attention badge after 2.5 seconds
    const timer = setTimeout(() => {
      setHasAnimatedEntry(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Action Dock: Fixed in bottom-right corner */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3.5 select-none">
        
        {/* ===================================================================
            BUTTON 1: AI MARKETING ASSISTANT (MH Marketing AI)
            =================================================================== */}
        <div className="relative flex items-center group/ai">
          {/* Tooltip on Hover / Indicator */}
          <div
            className={`hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#03091B]/95 text-white text-xs font-bold border border-[#D4AF37]/50 shadow-[0_4px_25px_rgba(2,6,18,0.9)] whitespace-nowrap transition-all duration-300 pointer-events-none backdrop-blur-md ${
              showAiTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F3CF7A]" />
              <span className="metallic-gold-text font-black">Ask AI Assistant</span>
              <span className="text-[10px] text-emerald-400 font-semibold">• Online</span>
            </div>
          </div>

          {/* AI Circular Floating Launcher Button */}
          <button
            type="button"
            onClick={() => setIsAiOpen(true)}
            onMouseEnter={() => setShowAiTooltip(true)}
            onMouseLeave={() => setShowAiTooltip(false)}
            aria-label="Open MH Marketing AI Assistant"
            className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#06122C] via-[#091E4A] to-[#03091A] border-2 border-[#D4AF37] hover:border-[#FFF4C2] flex items-center justify-center text-[#FFF4C2] shadow-[0_8px_30px_rgba(2,6,18,0.95),0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_40px_rgba(2,6,18,0.98),0_0_35px_rgba(212,175,55,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
          >
            {/* Subtle Radiating Cyan/Gold Halo Pulse */}
            <span className="absolute inset-0 rounded-full border border-[#D4AF37]/40 animate-ping opacity-30 pointer-events-none" />

            {/* AI Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#F3CF7A] group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            </div>

            {/* AI Pill Badge on Mobile / Floating Corner Badge */}
            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3CF7A] text-[#020612] text-[9px] font-black tracking-wider uppercase shadow-sm">
              AI
            </span>
          </button>
        </div>

        {/* ===================================================================
            BUTTON 2: REAL WHATSAPP BUTTON WITH GESTURE HAND & ANIMATED PILL
            =================================================================== */}
        <div className="relative flex items-center group/wa">
          
          {/* Animated Professional "Chat on WhatsApp" Pill (Nudges & Shimmers) */}
          <a
            href={OWNER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Haider Ali"
            className="relative overflow-hidden flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#03091B]/95 hover:bg-[#061824] border border-emerald-500/50 hover:border-emerald-400 shadow-[0_4px_22px_rgba(0,0,0,0.85),0_0_16px_rgba(37,211,102,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer animate-wa-pill-nudge group/pill"
          >
            {/* Subtle light beam sweep across pill */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -skew-x-12 animate-wa-shimmer pointer-events-none" />

            {/* Glowing Live Green Dot Indicator */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] shadow-[0_0_8px_#25D366]" />
            </span>

            {/* Clean, Bold Professional Typography */}
            <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide select-none whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </a>

          {/* Animated Hand Icon (Smoothly points and moves towards WhatsApp button) */}
          <div
            className="relative mx-1.5 sm:mx-2 text-2xl sm:text-[28px] leading-none select-none pointer-events-none z-20 animate-wa-hand-gesture flex items-center justify-center filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            👉
          </div>

          {/* REAL Official WhatsApp Floating Button (Solid Green + Pure White Icon) */}
          <a
            href={OWNER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Haider Ali (+92 331 2018 512)"
            className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white shadow-[0_10px_28px_rgba(37,211,102,0.5),0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_36px_rgba(37,211,102,0.75),0_6px_16px_rgba(0,0,0,0.5)] animate-wa-button-zoom active:scale-95 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-emerald-300 cursor-pointer"
          >
            {/* Multi-tier Pulsing Ripple Waves */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none [animation-duration:2.6s]" />

            {/* REAL Pure White Official WhatsApp Brand Icon */}
            <div className="relative z-10 transition-transform group-hover/wa:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
              <BrandIcon name="whatsapp" size={32} mode="monochrome" className="text-white" />
            </div>

            {/* Online Green Beacon Badge with Crisp White Border */}
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-white shadow-md animate-pulse" />
          </a>
        </div>
      </div>

      {/* AI Assistant Chat Modal Window */}
      <AiAssistantModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </>
  );
};
