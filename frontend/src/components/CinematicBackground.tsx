"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const CinematicBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 01: Deep Midnight Sapphire Base Void */}
      <div className="absolute inset-0 bg-[#020612]" />

      {/* 02: User-Selected High-Impact Cinematic Background with Specular Gold Lines & Digital Icons */}
      <div className="absolute inset-0 opacity-80 sm:opacity-85 transition-opacity duration-700">
        <Image
          src="/images/portfolio-bg.png"
          alt="MH Marketing Cinematic Ambient Background"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />
      </div>

      {/* 03: Soft Dark-Blue Gradient & Vignette Overlay to Guarantee 100% Text & Card Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020612]/75 via-[#020612]/35 to-[#020612]/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,rgba(2,6,18,0.75)_95%)]" />

      {/* 04: Dynamic Ambient Glow Flares (Responsive for Mobile Battery & GPU) */}
      <div className="absolute -top-[12%] left-1/4 w-[360px] sm:w-[750px] h-[360px] sm:h-[750px] rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.20)_0%,transparent_70%)] blur-[50px] sm:blur-[100px]" />
      <div className="absolute top-[35%] -right-[8%] w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-[45px] sm:blur-[95px]" />
      <div className="hidden sm:block absolute top-[70%] -left-[8%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.18)_0%,transparent_70%)] blur-[110px]" />
      <div className="hidden sm:block absolute -bottom-[8%] right-1/4 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-[120px]" />

      {/* 05: Subtle Gold Particle Shimmer (Hydration-safe client render) */}
      {mounted && (
        <div className="absolute inset-0 opacity-45">
          {[
            { top: "12%", left: "18%", delay: "0s", duration: "4.2s", size: "2.5px" },
            { top: "22%", left: "78%", delay: "1.2s", duration: "5.1s", size: "3px" },
            { top: "38%", left: "28%", delay: "2.4s", duration: "6s", size: "2px" },
            { top: "48%", left: "88%", delay: "0.8s", duration: "4.5s", size: "2.5px" },
            { top: "64%", left: "14%", delay: "1.8s", duration: "5.5s", size: "3px" },
            { top: "76%", left: "68%", delay: "3s", duration: "4.8s", size: "2px" },
            { top: "86%", left: "32%", delay: "1.5s", duration: "6.2s", size: "2.5px" },
            { top: "94%", left: "84%", delay: "2.1s", duration: "5.1s", size: "3px" },
          ].map((star, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-[#FFF4C2] animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.85)]"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
