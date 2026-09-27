"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number; // total animation time in ms
}

/**
 * AnimatedCounter counts up from 0 to the target number with easing when scrolled into view.
 */
export function AnimatedCounter({ value, duration = 1600 }: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    // If prefers-reduced-motion, show final value immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayValue(value);
      return;
    }

    // Match numbers and non-numeric suffixes (e.g., "37+", "100%", etc.)
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || "";
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic curve: fast start, soft gentle landing
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOutProgress * targetNum);

            setDisplayValue(`${currentNum}${suffix}`);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return (
    <span ref={containerRef} aria-label={value}>
      {displayValue}
    </span>
  );
}
