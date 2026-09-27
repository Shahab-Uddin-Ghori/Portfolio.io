"use client";

import React, { useEffect, useRef, useState } from "react";

interface SlideInViewProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  distance?: string; // custom translation distance, e.g. "120px", "80vw"
  delay?: number; // in seconds
  duration?: number; // in seconds
  className?: string;
  threshold?: number;
}

/**
 * SlideInView animates an element from outside the viewport into its exact position
 * when it scrolls into view for the first time.
 *
 * NOTE: The IntersectionObserver observes a stationary outer trigger container
 * that stays in normal layout flow so offscreen transforms on children do NOT
 * prevent the observer from detecting when the section is in view.
 */
export function SlideInView({
  children,
  direction = "up",
  distance,
  delay = 0,
  duration = 1.15,
  className = "",
  threshold = 0.02,
}: SlideInViewProps) {
  // Stationary layout element for viewport intersection detection
  const triggerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // If prefers-reduced-motion is active, render in final state immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setHasAnimated(true);
      return;
    }

    const currentEl = triggerRef.current;
    if (!currentEl) return;

    // 1. Immediate check: if already in view (e.g. on page refresh or load)
    const rect = currentEl.getBoundingClientRect();
    if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
      setHasAnimated(true);
      return;
    }

    // 2. IntersectionObserver on the stationary layout trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "80px 0px 80px 0px",
      }
    );

    observer.observe(currentEl);

    // 3. Robust fallback listener for smooth scroll libraries (Lenis / Locomotive)
    const handleScrollCheck = () => {
      if (!currentEl) return;
      const r = currentEl.getBoundingClientRect();
      if (r.top < window.innerHeight + 80) {
        setHasAnimated(true);
        window.removeEventListener("scroll", handleScrollCheck);
      }
    };
    window.addEventListener("scroll", handleScrollCheck, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollCheck);
    };
  }, [threshold]);

  // Initial offscreen transform style (applied to the inner animated container)
  const getInitialTransform = () => {
    if (distance) {
      switch (direction) {
        case "left":
          return `translate3d(-${distance}, 0, 0)`;
        case "right":
          return `translate3d(${distance}, 0, 0)`;
        case "up":
          return `translate3d(0, ${distance}, 0)`;
        case "down":
          return `translate3d(0, -${distance}, 0)`;
        default:
          return "translate3d(0, 0, 0)";
      }
    }
    switch (direction) {
      case "left":
        return "translate3d(-80vw, 0, 0)";
      case "right":
        return "translate3d(80vw, 0, 0)";
      case "up":
        return "translate3d(0, 48px, 0)";
      case "down":
        return "translate3d(0, -48px, 0)";
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    // Outer stationary trigger container in normal layout flow
    <div ref={triggerRef} className={className}>
      {/* Inner animated container that slides in from off-screen */}
      <div
        className="w-full h-full"
        style={{
          transform: hasAnimated ? "translate3d(0, 0, 0)" : getInitialTransform(),
          opacity: hasAnimated ? 1 : 0,
          transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity ${
            duration * 0.75
          }s ease-out ${delay}s`,
          willChange: "transform, opacity",
        }}
      >
        {children}
      </div>
    </div>
  );
}
