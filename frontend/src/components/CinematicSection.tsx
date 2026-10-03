"use client";

import React, { useEffect, useRef, useState } from "react";

interface CinematicSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const CinematicSection: React.FC<CinematicSectionProps> = ({
  id,
  className = "",
  children
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isHero = id === "hero-wrapper";
  const [revealState, setRevealState] = useState<"below" | "active" | "above">(
    isHero ? "active" : "below"
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let ticking = false;

    const checkVisibility = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Entry threshold: triggers when section top enters within lower 10% of viewport
      const bottomEntryBoundary = Math.round(vh * 0.90);
      // Exit threshold: triggers only when bottom of section has nearly left the viewport
      const topExitBoundary = 50;

      if (rect.top <= bottomEntryBoundary && rect.bottom >= topExitBoundary) {
        setRevealState("active");
      } else if (rect.bottom < topExitBoundary) {
        setRevealState("above");
      } else {
        setRevealState("below");
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`cinematic-reveal ${
        revealState === "active"
          ? "is-revealed"
          : revealState === "above"
          ? "is-scrolled-past"
          : "is-scrolled-below"
      } ${className}`}
    >
      {children}
    </div>
  );
};
