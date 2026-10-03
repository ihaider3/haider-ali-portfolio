"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, ArrowUpRight, ChevronLeft, ChevronRight, Star, Sparkles, Play, Pause } from "lucide-react";
import { PROJECTS_LIST } from "../data/portfolioData";
import { Project } from "../types";
import { ProjectModal } from "./ProjectModal";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items-per-page calculation
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const total = PROJECTS_LIST.length;
  const maxIndex = Math.max(0, total - visibleCount);

  // Auto-play animation every 3 seconds (as requested by user)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  // Touch & Swipe Gesture Handlers (for mobile devices & touchscreen laptops)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const mouseStartX = useRef<number | null>(null);
  const mouseStartY = useRef<number | null>(null);
  const isMouseDown = useRef(false);
  const minSwipeDistance = 45; // Minimum travel in px to trigger next/prev slide

  // Carousel navigation handlers with timer reset
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

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
        // Swiped left (finger moved right-to-left) -> Next project
        handleNext();
      } else {
        // Swiped right (finger moved left-to-right) -> Previous project
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

  return (
    <section
      id="projects"
      aria-label="Selected Client & Project Showcase"
      className="py-14 sm:py-20 lg:py-24 relative overflow-hidden w-full scroll-mt-24"
    >
      {/* Background radiant ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,rgba(30,64,175,0.22)_45%,transparent_75%)] blur-3xl pointer-events-none -z-10 animate-ambient-glow" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.16)_0%,transparent_70%)] blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.16)_0%,transparent_70%)] blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Metallic Gold "PROJECTS" Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/30 via-[#F3CF7A]/40 to-[#8F6A2A]/30 border-2 border-[#D4AF37] shadow-[0_0_28px_rgba(212,175,55,0.45)] mb-4 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF4C2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.25em] metallic-gold-text uppercase">
              PROJECTS
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs text-slate-200 font-bold tracking-wider uppercase">
              Client Success &amp; Managed Brands
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight leading-tight whitespace-normal text-white">
            <span className="metallic-gold-heading drop-shadow-[0_0_35px_rgba(212,175,55,0.65)]">
              PROVEN CLIENT PROJECTS &amp; MANAGED BRANDS
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-medium">
            A curated showcase of real businesses and verified pages I’ve managed, grown, and scaled.
          </p>

          {/* Auto-Slide Indicator Pill */}
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-[#050D24]/90 border border-[#D4AF37]/35 text-[11px] font-bold text-[#F3CF7A] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span>Auto-Rotating Every 3 Seconds</span>
            <span className="text-slate-400 font-normal">| Hover to Pause</span>
          </div>
        </ScrollReveal>

        {/* 3-Card Carousel Track Slider with Smooth Auto-Slide Animation */}
        <ScrollReveal delay={120} className="w-full">
          <div
            className="relative w-full overflow-hidden py-4 -my-4 touch-pan-y select-none cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out -mx-2.5 sm:-mx-3"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`
              }}
            >
              {PROJECTS_LIST.map((project) => (
                <div
                  key={project.id}
                  className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2.5 sm:px-3 flex"
                >
                  {/* Outer Illuminated Metallic Frame (Consistent with Services Section) */}
                  <div className="w-full rounded-[24px] p-[2px] bg-gradient-to-b from-[#FFF4C2]/75 via-[#D4AF37]/50 to-[#38BDF8]/40 shadow-[0_12px_35px_rgba(2,6,18,0.9),0_0_20px_rgba(212,175,55,0.22)] hover:shadow-[0_20px_50px_rgba(2,6,18,0.98),0_0_40px_rgba(212,175,55,0.55),0_0_25px_rgba(56,189,248,0.35)] hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                    
                    {/* Inner Card Container */}
                    <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#091A3E] via-[#05112B] to-[#020718] p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
                      
                      <div className="relative z-10 flex flex-col flex-1">
                        {/* Top: Brand Logo in Uniform Circular Medallion Frame */}
                        <div className="relative w-full h-44 sm:h-48 rounded-[18px] bg-[#030818] border-2 border-[#D4AF37]/40 p-4 flex items-center justify-center overflow-hidden group-hover:border-[#FFF4C2] transition-all mb-4 shadow-inner">
                          
                          {/* Subtle Cyber Grid Texture */}
                          <div
                            className="absolute inset-0 opacity-40 pointer-events-none"
                            style={{
                              backgroundImage: `
                                linear-gradient(to right, rgba(212, 175, 55, 0.08) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(212, 175, 55, 0.08) 1px, transparent 1px)
                              `,
                              backgroundSize: "16px 16px"
                            }}
                          />

                          {/* Radiant Golden Glow Behind Medallion */}
                          <div className="absolute w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,transparent_70%)] blur-xl pointer-events-none" />

                          {/* UNIFORM CIRCULAR MEDALLION FRAME (User-Requested Uniform Geometry) */}
                          <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[2.5px] bg-gradient-to-tr from-[#D4AF37] via-[#FFF4C2] to-[#E5C06E] shadow-[0_0_25px_rgba(212,175,55,0.45)] group-hover:scale-108 transition-transform duration-300">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-3 overflow-hidden shadow-inner">
                              <div className="relative w-full h-full">
                                <Image
                                  src={project.logoFilename}
                                  alt={project.logoAlt}
                                  fill
                                  sizes="(max-width: 640px) 120px, 140px"
                                  className="object-contain filter contrast-105"
                                />
                              </div>
                            </div>
                          </div>

                          {/* 5-Star Rating Top Badge */}
                          <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#020614]/90 text-[#FFF4C2] border border-[#D4AF37]/50 shadow-md backdrop-blur-md">
                            <div className="flex items-center text-[#D4AF37]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-[#D4AF37] text-[#D4AF37]" />
                              ))}
                            </div>
                            <span className="text-[10px] font-bold text-white tracking-wide">5.0</span>
                          </div>

                          {/* Project Index Badge */}
                          <span className="absolute top-2.5 right-2.5 z-20 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#020614]/90 text-[#FFF4C2] border border-[#D4AF37]/50 shadow-md backdrop-blur-md">
                            0{project.number}
                          </span>
                        </div>

                        {/* Industry Category Tag */}
                        <div className="mb-2">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-1 rounded-full border border-[#38BDF8]/30 inline-block shadow-sm">
                            {project.category}
                          </span>
                        </div>

                        {/* Highly Prominent Project Name */}
                        <h3 className="text-lg sm:text-[1.25rem] font-black tracking-tight leading-snug mb-1.5 metallic-gold-heading">
                          {project.title}
                        </h3>

                        {/* 5-Star Rating & Performance Row */}
                        <div className="flex items-center justify-between text-xs text-slate-300 mb-2.5 py-1 px-2.5 rounded-xl bg-white/[0.04] border border-[#D4AF37]/30">
                          <div className="flex items-center gap-1.5">
                            <div className="flex items-center text-[#D4AF37]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                              ))}
                            </div>
                            <span className="font-bold text-white text-[11px]">5.0 Client Rating</span>
                          </div>
                          <span className="text-[10px] metallic-gold-subtle font-bold bg-[#D4AF37]/15 px-2 py-0.5 rounded-md border border-[#D4AF37]/30">
                            Verified Result
                          </span>
                        </div>

                        {/* Short, Readable Details */}
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 line-clamp-2 flex-1">
                          {project.description}
                        </p>

                        {/* Key Service Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#D4AF37]/25">
                          {project.services.slice(0, 2).map((srv, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-bold text-slate-200 bg-[#040C22] px-2 py-0.5 rounded-md border border-[#D4AF37]/30 shadow-sm"
                            >
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Dual Action Buttons: Preview Details + View on Facebook */}
                      <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-[#D4AF37]/25">
                        {/* Button 1: Preview Details Modal */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0B1E48] to-[#061435] hover:from-[#D4AF37]/30 hover:to-[#F3CF7A]/30 border-2 border-[#D4AF37]/70 hover:border-[#FFF4C2] text-xs font-black tracking-wider text-[#FFF4C2] flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#F3CF7A]" />
                          <span>Preview</span>
                        </button>

                        {/* Button 2: Direct Link to Facebook Page */}
                        <a
                          href={project.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on Facebook`}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] border-2 border-[#1877F2] hover:border-white text-xs font-black tracking-wider text-white flex items-center justify-center gap-1.5 transition-all shadow-[0_0_18px_rgba(24,119,242,0.45)] hover:shadow-[0_0_28px_rgba(24,119,242,0.7)] cursor-pointer"
                        >
                          <BrandIcon name="facebook" size={15} mode="monochrome" className="text-white fill-white shrink-0" />
                          <span>Facebook</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Bar (Controls & Counter) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8 px-2">
            {/* Counter Status with Auto-play state */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
              <span>
                Showing <strong className="text-white font-black">{currentIndex + 1}</strong> –{" "}
                <strong className="text-white font-black">
                  {Math.min(currentIndex + visibleCount, total)}
                </strong>{" "}
                of <strong className="metallic-gold-text font-black">{total} Managed Brands</strong>
              </span>

              {/* Pause/Play Toggle Button */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-[10px] font-bold text-slate-300 hover:text-white flex items-center gap-1 transition-all"
                title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              >
                {isPaused ? <Play className="w-2.5 h-2.5 text-[#25D366]" /> : <Pause className="w-2.5 h-2.5 text-[#F3CF7A]" />}
                <span>{isPaused ? "Play" : "Pause"}</span>
              </button>
            </div>

            {/* Navigation Arrows & Dot Indicators */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="p-2.5 sm:p-3 rounded-full bg-[#040C22] border-2 border-[#D4AF37]/50 hover:border-[#FFF4C2] hover:bg-[#D4AF37]/20 text-[#FFF4C2] transition-all shadow-md hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] cursor-pointer group"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === dotIdx
                        ? "w-7 bg-gradient-to-r from-[#F3CF7A] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Slide"
                className="p-2.5 sm:p-3 rounded-full bg-[#040C22] border-2 border-[#D4AF37]/50 hover:border-[#FFF4C2] hover:bg-[#D4AF37]/20 text-[#FFF4C2] transition-all shadow-md hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] cursor-pointer group"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Project Detail Modal for Deep Case Study Review */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
