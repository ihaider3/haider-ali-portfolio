"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Star,
  MessageSquareQuote,
  ExternalLink,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  SlidersHorizontal,
  X
} from "lucide-react";
import { REVIEWS_LIST, OWNER_INFO } from "../data/portfolioData";
import { BrandIcon } from "./BrandIcon";
import { Review } from "../types";
import { ScrollReveal } from "./ScrollReveal";

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAllModal, setShowAllModal] = useState(false);

  // Responsive visible count calculation (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter categories
  const categories = ["All", "Real Estate", "Healthcare", "E-Commerce", "International"];

  const filteredReviews = useMemo(() => {
    if (selectedCategory === "All") return REVIEWS_LIST;
    if (selectedCategory === "Real Estate") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.role?.toLowerCase().includes("estate") ||
          r.role?.toLowerCase().includes("property") ||
          r.role?.toLowerCase().includes("investment") ||
          r.role?.toLowerCase().includes("farmhouse") ||
          r.role?.toLowerCase().includes("builder") ||
          r.role?.toLowerCase().includes("plaza")
      );
    }
    if (selectedCategory === "Healthcare") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.role?.toLowerCase().includes("clinic") ||
          r.role?.toLowerCase().includes("dental") ||
          r.role?.toLowerCase().includes("wellness") ||
          r.author.toLowerCase().includes("dr.")
      );
    }
    if (selectedCategory === "E-Commerce") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.role?.toLowerCase().includes("commerce") ||
          r.role?.toLowerCase().includes("retail") ||
          r.role?.toLowerCase().includes("cosmetics") ||
          r.role?.toLowerCase().includes("essens") ||
          r.role?.toLowerCase().includes("apparel") ||
          r.role?.toLowerCase().includes("brand")
      );
    }
    if (selectedCategory === "International") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.role?.toLowerCase().includes("dubai") ||
          r.role?.toLowerCase().includes("overseas") ||
          r.role?.toLowerCase().includes("gcc") ||
          r.role?.toLowerCase().includes("uk") ||
          r.text.toLowerCase().includes("uae") ||
          r.text.toLowerCase().includes("overseas")
      );
    }
    return REVIEWS_LIST;
  }, [selectedCategory]);

  const maxIndex = Math.max(0, filteredReviews.length - visibleCount);

  // Auto-play carousel every 2 seconds with smooth slide animation
  useEffect(() => {
    if (isPaused || showAllModal || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, showAllModal, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch & Swipe Gesture Handlers (for mobile devices & touchscreen laptops)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const mouseStartY = useRef<number | null>(null);
  const isMouseDown = useRef(false);
  const minSwipeDistance = 45; // Minimum travel in px to trigger next/prev slide

  // Touch event listeners for mobile phones & touchscreens
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = (touchStartY.current ?? 0) - (touchEndY.current ?? 0);

    // Only swipe if horizontal motion is dominant (keeps natural vertical page scrolling)
    if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > 0) {
        // Swiped left (finger moved right-to-left) -> Next review
        handleNext();
      } else {
        // Swiped right (finger moved left-to-right) -> Previous review
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  // Mouse drag handlers for desktop/laptop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsPaused(true);
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
    mouseStartY.current = e.clientY;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isMouseDown.current && mouseStartX.current !== null) {
      const distanceX = mouseStartX.current - e.clientX;
      const distanceY = (mouseStartY.current ?? 0) - e.clientY;
      if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > minSwipeDistance) {
        if (distanceX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    isMouseDown.current = false;
    mouseStartX.current = null;
    mouseStartY.current = null;
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
    mouseStartX.current = null;
    mouseStartY.current = null;
    setIsPaused(false);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  // Calculate total pages for pagination dots
  const totalPages = Math.ceil(filteredReviews.length / visibleCount);
  const currentPage = Math.min(Math.floor(currentIndex / visibleCount), totalPages - 1);

  return (
    <section
      id="reviews"
      aria-label="Client Feedback and Facebook Social Proof"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(30,64,175,0.12)_45%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header with Meta/Facebook Verified Credibility */}
        <ScrollReveal delay={0} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            {/* Facebook Verified Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#050D20]/90 border border-[#D4AF37]/35 mb-4 backdrop-blur-md shadow-sm">
              <span className="w-5 h-5 flex items-center justify-center shrink-0">
                <BrandIcon name="facebook" size={18} mode="authentic" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest metallic-gold-text">
                FACEBOOK VERIFIED SOCIAL PROOF
              </span>
            </div>

            {/* 2-Line High-Impact Headline matching design reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Real Feedback. Real People. <br className="hidden sm:inline" />
              <span className="metallic-gold-heading">
                Real Work.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Verified client partnerships and marketing feedback from official MH Marketing campaigns and Facebook reviews.
            </p>
          </div>

          {/* Facebook Rating Summary Pill & Action Button */}
          <div className="flex flex-wrap items-center gap-4">
            {/* 5.0 Rating Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl glass-blue-panel border border-[#D4AF37]/35 flex items-center gap-3.5 shadow-xl">
              <div className="w-11 h-11 flex items-center justify-center shrink-0 drop-shadow-[0_0_12px_rgba(24,119,242,0.5)]">
                <BrandIcon name="facebook" size={40} mode="authentic" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white">5.0</span>
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  100% recommendation rate • Official Facebook Page
                </p>
              </div>
            </div>

            {/* View On Facebook External Button */}
            <a
              href="https://www.facebook.com/mhmarketingglobal/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="metallic-outline-button px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 group cursor-pointer shadow-md"
            >
              <span>View On Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills & Show All Directory Trigger */}
        <ScrollReveal delay={60} className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-[#020614] shadow-[0_0_15px_rgba(212,175,55,0.4)] font-black"
                    : "bg-[#050D20] text-slate-300 hover:text-white border border-[#D4AF37]/25 hover:border-[#D4AF37]/60"
                }`}
              >
                {cat}
                {cat === "All" && ` (${REVIEWS_LIST.length})`}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowAllModal(true)}
            className="text-xs font-bold metallic-gold-text flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2.5 rounded-lg bg-white/5 border border-[#D4AF37]/35 hover:border-[#D4AF37]/70"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Browse All {REVIEWS_LIST.length} Reviews</span>
          </button>
        </ScrollReveal>

        {/* 3-Card Interactive Sliding Carousel */}
        <ScrollReveal delay={120} className="w-full">
          <div
            className="relative overflow-hidden w-full py-2 touch-pan-y select-none cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out -mx-3"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`
              }}
            >
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3 flex"
                >
                  {/* Individual Review Card matching Reference Image */}
                  <div className="w-full glass-blue-panel glass-blue-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-[#D4AF37]/30 hover:border-[#F3CF7A] relative overflow-hidden transition-all duration-300 shadow-[0_12px_35px_rgba(2,6,18,0.85)] hover:shadow-[0_20px_45px_rgba(2,6,18,0.95),0_0_35px_rgba(212,175,55,0.25)] h-full group">
                    {/* Top Specular Metallic Gold Highlight */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3CF7A]/70 to-transparent group-hover:via-[#FFF4C2] transition-all" />

                    <div className="flex flex-col flex-1">
                      {/* Header: Quote Icon on Left, 5 Stars + Facebook Icon on Right */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 text-[#FFF4C2] flex items-center justify-center border border-[#D4AF37]/35 shadow-sm">
                          <MessageSquareQuote className="w-5 h-5 text-[#F3CF7A]" />
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-0.5 text-[#D4AF37]">
                            {[...Array(rev.rating || 5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                            ))}
                          </div>
                          <span className="w-6 h-6 flex items-center justify-center shrink-0">
                            <BrandIcon name="facebook" size={18} mode="authentic" />
                          </span>
                        </div>
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-200 leading-relaxed italic mb-6 flex-1 font-normal">
                        “{rev.text}”
                      </p>
                    </div>

                    {/* Card Bottom: Client Info & Verified Badge */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#F3CF7A] transition-colors truncate">
                          {rev.author}
                        </h3>
                        {rev.role && (
                          <p className="text-[11px] text-slate-400 mt-0.5 font-medium truncate">
                            {rev.role}
                          </p>
                        )}
                      </div>

                      {/* Verified Client Badge matching reference */}
                      <div className="flex items-center gap-1.5 text-[11px] metallic-gold-subtle font-bold bg-[#03091B] px-2.5 py-1 rounded-full border border-[#D4AF37]/30 shadow-sm shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Client</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Controls matching reference screenshot */}
            <div className="flex items-center justify-between mt-8 pt-2">
              {/* Left: Indicator Dots with Active Pill */}
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.min(totalPages, 8) }).map((_, idx) => {
                  const isActive = currentPage === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx * visibleCount)}
                      aria-label={`Go to slide page ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-8 bg-gradient-to-r from-[#F3CF7A] to-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Right: Round Previous / Next Arrow Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous reviews"
                  className="w-10 h-10 rounded-full bg-[#050E24] border border-[#D4AF37]/35 text-slate-300 hover:text-white hover:border-[#FFF4C2] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next reviews"
                  className="w-10 h-10 rounded-full bg-[#050E24] border border-[#D4AF37]/35 text-slate-300 hover:text-white hover:border-[#FFF4C2] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Facebook Guarantee Bar matching Reference Image */}
          <a
            href="https://www.facebook.com/mhmarketingglobal/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 p-4 rounded-2xl bg-[#040B1D]/90 border border-[#D4AF37]/30 hover:border-[#F3CF7A] transition-all text-center text-xs text-slate-300 max-w-2xl mx-auto flex items-center justify-center gap-2.5 backdrop-blur-md shadow-lg group block cursor-pointer"
          >
            <ThumbsUp className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform shrink-0" />
            <span className="group-hover:text-white transition-colors">
              Client testimonials represent genuine campaigns managed by Haider Ali (MH Marketing). Read direct public recommendations on Facebook.
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 opacity-70 group-hover:opacity-100" />
          </a>
        </ScrollReveal>
      </div>

      {/* "Browse All 32+ Reviews" Modal Dialog */}
      {showAllModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="fixed inset-0 bg-[#020612]/92 backdrop-blur-md transition-opacity"
            onClick={() => setShowAllModal(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl bg-[#050D22] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(2,6,18,0.95),0_0_35px_rgba(212,175,55,0.25)] overflow-hidden z-10 max-h-[88vh] flex flex-col">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3CF7A] to-transparent" />

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#D4AF37]/20 shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 flex items-center justify-center shrink-0">
                  <BrandIcon name="facebook" size={32} mode="authentic" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    All Verified Client Reviews ({REVIEWS_LIST.length})
                  </h3>
                  <p className="text-xs text-slate-400">
                    Direct recommendations from official MH Marketing client campaigns
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                aria-label="Close modal"
                className="p-2 rounded-full bg-[#081535] text-slate-300 hover:text-white hover:bg-[#0D2152] border border-[#D4AF37]/30 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="py-6 overflow-y-auto space-y-4 pr-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REVIEWS_LIST.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-[#040C22] border border-[#D4AF37]/25 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-0.5 text-[#D4AF37]">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                          ))}
                        </div>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 font-semibold">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed italic mb-4">
                        “{rev.text}”
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                        <p className="text-[10px] text-slate-400">{rev.role}</p>
                      </div>
                      <a
                        href={rev.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#F3CF7A] hover:underline flex items-center gap-1"
                      >
                        <span>Facebook</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-400">
                100% Recommendation Rate on Facebook
              </span>
              <a
                href="https://www.facebook.com/mhmarketingglobal/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-outline-button px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
              >
                <span>Open Reviews on Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
