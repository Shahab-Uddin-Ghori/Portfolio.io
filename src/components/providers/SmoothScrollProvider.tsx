"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider initializes Locomotive Scroll (v5 - Lenis powered)
 * with a silky momentum inertia curve, progress tracking, and in-view triggers.
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let locomotiveScrollInstance: any = null;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScrollInstance = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.075, // Silky, stable, luxury inertia glide without micro-vibrations
            smoothWheel: true,
            wheelMultiplier: 1.15,
            touchMultiplier: 1.5,
            syncTouch: false, // Disables touch/wheel conflict that causes shaking/jittering
            autoResize: true,
          },
          scrollCallback: (scrollValues: any) => {
            // Direct DOM update on GPU compositor (Zero React re-renders during scroll)
            if (
              progressBarRef.current &&
              scrollValues &&
              typeof scrollValues.progress === "number"
            ) {
              progressBarRef.current.style.transform = `scaleX(${scrollValues.progress})`;
            }
          },
        });
      } catch (err) {
        console.error("Locomotive Scroll initialization failed:", err);
      }
    };

    initScroll();

    return () => {
      if (locomotiveScrollInstance && typeof locomotiveScrollInstance.destroy === "function") {
        locomotiveScrollInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Top Glowing Scroll Progress Indicator - 0 re-render hardware transform */}
      <div
        ref={progressBarRef}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 z-50 origin-left pointer-events-none shadow-[0_0_10px_rgba(234,88,12,0.6)]"
        style={{
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
      {children}
    </>
  );
}
