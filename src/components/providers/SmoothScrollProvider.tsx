"use client";

import { useEffect, type ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider initializes Locomotive Scroll (v5 - Lenis powered)
 * on the client side while keeping layout and child pages as Server Components.
 *
 * Honors prefers-reduced-motion and gracefully tears down on unmount.
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Check if the user has requested reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let scrollInstance: { destroy: () => void } | null = null;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        scrollInstance = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
          },
        });
      } catch (err) {
        console.error("Locomotive Scroll initialization failed:", err);
      }
    };

    initScroll();

    return () => {
      if (scrollInstance && typeof scrollInstance.destroy === "function") {
        scrollInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
