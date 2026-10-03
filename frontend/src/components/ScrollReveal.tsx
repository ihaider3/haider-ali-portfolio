"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealDirection = "up" | "fade";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number; // Delay in milliseconds for staggered entries
  direction?: RevealDirection;
  initialVisible?: boolean; // For above-the-fold hero elements
  topOffset?: number; // Distance in px from viewport top where exit fade completes (default: 110)
  bottomOffset?: number; // Distance in px from viewport bottom where entry fade begins (default: 70)
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  id,
  delay = 0,
  direction = "up",
  initialVisible = false,
  topOffset = 110,
  bottomOffset = 70,
  as: Component = "div"
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [revealState, setRevealState] = useState<"below" | "active" | "above">(
    initialVisible ? "active" : "below"
  );

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Use IntersectionObserver with rootMargin for optimal 60fps/120fps GPU performance
    // Top margin: -topOffset (fades out as it moves into/past header)
    // Bottom margin: -bottomOffset (fades in as it enters into view from bottom)
    const rootMargin = `-${topOffset}px 0px -${bottomOffset}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealState("active");
          } else {
            // Determine whether it exited past the top or past the bottom
            const rect = entry.boundingClientRect;
            if (rect.top < topOffset) {
              setRevealState("above");
            } else {
              setRevealState("below");
            }
          }
        });
      },
      {
        rootMargin,
        threshold: 0
      }
    );

    observer.observe(el);

    // Initial positioning check in case element is already in viewport
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom >= topOffset && rect.top <= vh - bottomOffset) {
      setRevealState("active");
    } else if (rect.bottom < topOffset) {
      setRevealState("above");
    } else {
      setRevealState("below");
    }

    return () => {
      observer.disconnect();
    };
  }, [topOffset, bottomOffset]);

  const stateClass =
    revealState === "active"
      ? "is-visible"
      : revealState === "above"
      ? "is-scrolled-above"
      : "is-scrolled-below";

  const directionClass = direction === "fade" ? "direction-fade" : "direction-up";

  // When fading in (active), apply the staggered delay. When exiting (above/below), exit cleanly with 0ms delay.
  const transitionDelayStyle =
    revealState === "active" && delay > 0 ? { transitionDelay: `${delay}ms` } : { transitionDelay: "0ms" };

  return (
    <Component
      id={id}
      ref={elementRef}
      style={transitionDelayStyle}
      className={`scroll-reveal ${stateClass} ${directionClass} ${className}`}
    >
      {children}
    </Component>
  );
};
