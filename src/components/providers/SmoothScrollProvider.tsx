"use client";

import { useEffect, useState, type ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider initializes Locomotive Scroll (v5 - Lenis powered)
 * with a silky momentum inertia curve, progress tracking, and in-view triggers.
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

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
            lerp: 0.06, // Silky weighted momentum inertia
            duration: 1.35,
            smoothWheel: true,
            wheelMultiplier: 1.15,
            touchMultiplier: 1.8,
            infinite: false,
          },
          scrollCallback: (scrollValues: any) => {
            if (scrollValues && typeof scrollValues.progress === "number") {
              setScrollProgress(scrollValues.progress);
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
      {/* Top Glowing Scroll Progress Indicator */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 z-50 origin-left pointer-events-none shadow-[0_0_10px_rgba(234,88,12,0.6)]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transition: "transform 100ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {children}
    </>
  );
}
