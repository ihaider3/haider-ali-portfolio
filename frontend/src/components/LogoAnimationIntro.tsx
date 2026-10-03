"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, FastForward } from "lucide-react";

export const LogoAnimationIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleComplete = () => {
    if (isFading || !isVisible) return;
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      // Ensure body scroll is unlocked
      document.body.style.overflow = "";
    }, 700);
  };

  useEffect(() => {
    // Lock scroll while intro video is playing
    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Fallback for strict browser autoplay policies
      });

      const handleTimeUpdate = () => {
        if (video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }

    // Safety timeout: video is ~4 seconds, auto-complete after 4.5s max
    const timer = setTimeout(() => {
      handleComplete();
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-label="MH Marketing Logo Animation Intro"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020612] select-none transition-all duration-700 ease-out ${
        isFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Cinematic Ambient Atmosphere Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep blue and gold radial glow centered behind video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.25)_0%,rgba(212,175,55,0.12)_45%,transparent_75%)] blur-3xl animate-pulse" />
        <div className="absolute -top-[10%] -left-[10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.15)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-2xl" />
      </div>

      {/* Top Bar: Brand Pill & Skip Button */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between z-20">
        {/* Brand Tag */}
        <div className="flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#050D24]/80 border border-[#D4AF37]/30 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-[11px] sm:text-xs font-black metallic-gold-text tracking-wider uppercase">
            MH Marketing
          </span>
        </div>

        {/* Action Controls: Sound Toggle & Skip */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound Toggle (if video has audio) */}
          <button
            type="button"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = !videoRef.current.muted;
                setIsMuted(videoRef.current.muted);
              }
            }}
            className="p-2 sm:p-2.5 rounded-full bg-[#050D24]/80 border border-[#D4AF37]/25 text-[#FFF4C2] hover:border-[#D4AF37] transition-all cursor-pointer backdrop-blur-md"
            aria-label={isMuted ? "Unmute intro video" : "Mute intro video"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
            )}
          </button>

          {/* Skip Intro Button */}
          <button
            type="button"
            onClick={handleComplete}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#050D24]/90 hover:bg-[#091838] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-white text-xs sm:text-[13px] font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer group backdrop-blur-md"
            aria-label="Skip logo animation intro"
          >
            <span className="text-slate-200 group-hover:text-white transition-colors">
              Skip Intro
            </span>
            <FastForward className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Video Presentation Container (Fully Responsive across Mobile, Tablet, and Desktop) */}
      <div className="relative w-full max-w-[92vw] sm:max-w-[580px] md:max-w-[720px] lg:max-w-[840px] px-2 sm:px-4 flex flex-col items-center justify-center">
        {/* Specular Ambient Glow Frame */}
        <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black/90 border border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(2,6,18,0.95),0_0_40px_rgba(212,175,55,0.28)]">
          <video
            ref={videoRef}
            src="/videos/logo-animation.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleComplete}
            className="w-full h-full object-cover object-center"
          />

          {/* Subtle Bottom Progress Track */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#9A6F14] via-[#D4AF37] to-[#FFF4C2] transition-all duration-150 ease-linear shadow-[0_0_8px_#D4AF37]"
              style={{ width: `${Math.min(100, Math.max(progress, 2))}%` }}
            />
          </div>
        </div>

        {/* Lower Tagline & Status Indicator */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center gap-1.5 text-center px-4">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black metallic-gold-text tracking-wider uppercase">
              Haider Ali
            </span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-semibold tracking-wide">
              Digital Marketing Expert
            </span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide">
            Loading MH Marketing Experience...
          </p>
        </div>
      </div>
    </div>
  );
};
