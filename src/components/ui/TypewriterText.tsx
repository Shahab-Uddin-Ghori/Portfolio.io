"use client";

import React, { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // milliseconds per character
  delay?: number; // initial delay in ms before typing starts
  className?: string;
  cursorClassName?: string;
}

/**
 * TypewriterText types out text character-by-character when first entering the viewport.
 */
export function TypewriterText({
  text,
  speed = 18,
  delay = 250,
  className = "",
  cursorClassName = "bg-orange-600",
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // If prefers-reduced-motion, show full text immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayedCount(text.length);
      return;
    }

    let intervalId: NodeJS.Timeout | null = null;
    let delayTimeoutId: NodeJS.Timeout | null = null;
    let cursorTimeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();

          // Wait initial delay before typing starts
          delayTimeoutId = setTimeout(() => {
            setIsTyping(true);
            setShowCursor(true);

            let current = 0;
            intervalId = setInterval(() => {
              current += 1;
              setDisplayedCount(current);

              if (current >= text.length) {
                if (intervalId) clearInterval(intervalId);
                setIsTyping(false);

                // Hide cursor gracefully 1.8s after typing finishes
                cursorTimeoutId = setTimeout(() => {
                  setShowCursor(false);
                }, 1800);
              }
            }, speed);
          }, delay);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      observer.disconnect();
      if (delayTimeoutId) clearTimeout(delayTimeoutId);
      if (intervalId) clearInterval(intervalId);
      if (cursorTimeoutId) clearTimeout(cursorTimeoutId);
    };
  }, [text, speed, delay]);

  const displayedText = text.slice(0, displayedCount);

  return (
    <p ref={containerRef} className={className}>
      {/* Hidden for screen readers (to avoid letter-by-letter chatter), visible visually */}
      <span aria-hidden="true">
        {displayedText}
        {showCursor && (
          <span
            className={`inline-block w-[2px] h-[0.9em] ml-1 align-baseline animate-pulse ${cursorClassName}`}
          />
        )}
      </span>
      {/* Accessible, SEO-friendly full text for assistive technologies */}
      <span className="sr-only">{text}</span>
    </p>
  );
}
