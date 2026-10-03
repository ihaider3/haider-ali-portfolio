"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX, FastForward } from "lucide-react";

export const LogoAnimationIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [stage, setStage] = useState<"logo" | "video">("logo");
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
    }, 500);
  };

  useEffect(() => {
    // Lock scroll while intro is active
    document.body.style.overflow = "hidden";

    // Phase 1: Show transparent circular logo badge for 0.7 seconds (0.5s - 1s as requested)
    const stageTimer = setTimeout(() => {
      setStage("video");
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    }, 700);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const handleTimeUpdate = () => {
        if (video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
          // Auto-trigger completion as soon as animation concludes (~2.5s)
          if (video.currentTime >= 2.5) {
            handleComplete();
          }
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        clearTimeout(stageTimer);
      };
    }

    // Safety fallback: complete after 3.8s total
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 3800);

    return () => {
      clearTimeout(stageTimer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-label="MH Marketing Logo Animation Intro"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020612] select-none transition-all duration-500 ease-out ${
        isFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Cinematic Ambient Atmosphere Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep blue and gold radial glow centered behind video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.25)_0%,rgba(212,175,55,0.15)_45%,transparent_75%)] blur-3xl animate-pulse" />
        <div className="absolute -top-[10%] -left-[10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.15)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-2xl" />
      </div>

      {/* Top Controls: Sound Toggle & Skip (Clean top-right, no duplicate brand text) */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 flex items-center gap-2 sm:gap-3 z-20">
        {/* Sound Toggle (if video has audio) */}
        <button
          type="button"
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = !videoRef.current.muted;
              setIsMuted(videoRef.current.muted);
            }
          }}
          className="p-2 sm:p-2.5 rounded-full bg-[#050D24]/90 border border-[#D4AF37]/30 text-[#FFF4C2] hover:border-[#D4AF37] transition-all cursor-pointer backdrop-blur-md shadow-lg"
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

      {/* STAGE 1: 0.7s Transparent Circular Logo Reveal (Zero Black Corners, 100% Transparent Alpha) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
          stage === "logo" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center px-4">
          {/* Specular golden ambient pulse */}
          <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,rgba(30,64,175,0.2)_50%,transparent_75%)] blur-2xl animate-pulse" />
          
          {/* Transparent Logo Medallion */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 drop-shadow-[0_0_35px_rgba(212,175,55,0.55)]">
            <Image
              src="/images/logo/mh-marketing.png"
              alt="MH Marketing Official Logo"
              width={208}
              height={208}
              priority
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-4 flex flex-col items-center gap-1 text-center">
            <span className="text-xs sm:text-sm font-black metallic-gold-text tracking-widest uppercase">
              MH MARKETING
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wider">
              Your Trusted Digital Partner
            </span>
          </div>
        </div>
      </div>

      {/* STAGE 2: Main Video Presentation: Perfectly Sized Vertical Device/Mobile Frame (Zero Logo Cropping) */}
      <div
        className={`relative flex flex-col items-center justify-center px-4 max-w-full transition-all duration-500 ease-out ${
          stage === "video" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Specular Ambient Glow Frame Styled Like Natural Smartphone / Vertical Showcase */}
        <div className="relative h-[66vh] sm:h-[72vh] max-h-[540px] sm:max-h-[620px] aspect-[9/16] rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 bg-gradient-to-b from-[#D4AF37]/50 via-[#050D24] to-[#D4AF37]/35 border-2 border-[#D4AF37]/60 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.35)]">
          {/* Inner Display Screen */}
          <div className="relative w-full h-full rounded-[1.6rem] sm:rounded-[2.1rem] overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/videos/logo-animation.mp4"
              poster="/videos/logo-poster.jpg"
              playsInline
              preload="auto"
              onEnded={handleComplete}
              className="w-full h-full object-contain object-center"
            />

            {/* Bottom Accent Progress Track */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/60 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#9A6F14] via-[#D4AF37] to-[#FFF4C2] transition-all duration-150 ease-linear shadow-[0_0_8px_#D4AF37]"
                style={{ width: `${Math.min(100, Math.max(progress, 3))}%` }}
              />
            </div>
          </div>
        </div>

        {/* Lower Tagline & Status Indicator */}
        <div className="mt-3 sm:mt-4 flex flex-col items-center gap-1 text-center px-4">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black metallic-gold-text tracking-wider uppercase">
              Haider Ali
            </span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-semibold tracking-wide">
              Digital Marketing Expert
            </span>
          </div>
          <p className="text-[10px] sm:text-xs text-[#D4AF37]/70 font-medium tracking-wide">
            Welcome to MH Marketing Experience
          </p>
        </div>
      </div>
    </div>
  );
};
