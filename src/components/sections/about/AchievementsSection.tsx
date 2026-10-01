"use client";

import React, { useRef, useState } from "react";
import { aboutData, type AchievementItem } from "@/data/about";
import { SlideInView } from "@/components/ui/SlideInView";
import { TypewriterText } from "@/components/ui/TypewriterText";

function AchievementIcon({ type }: { type: AchievementItem["iconType"] }) {
  switch (type) {
    case "asterisk":
      // 4-point curved sparkle icon (Exact match to Card 1 in Screenshot 1 & 2)
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" />
        </svg>
      );
    case "loop":
      // Counter-clockwise circle loop icon (Exact match to Card 2 in Screenshot 1 & 2)
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.99 6.57 2.6L21 8" />
          <polyline points="21 3 21 8 16 8" />
        </svg>
      );
    case "star":
      // 5-point star icon (Exact match to Card 3 in Screenshot 1 & 2)
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "diamond":
      // Rhombus / diamond icon (Exact match to Card 4 in Screenshot 1 & 2)
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      );
    case "trophy":
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 5h-2V3H7v2H5C3.9 5 3 5.9 3 7v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-400 group-hover:text-[#ea580c] transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 12l10 10 10-10L12 2z" />
        </svg>
      );
  }
}

export function AchievementsSection() {
  const { achievements } = aboutData;
  const [activePageIndex, setActivePageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Group 8 cards into 2 pages of 4 cards each (so 4 cards fit on screen at a time)
  const pageSize = 4;
  const totalPages = Math.ceil(achievements.items.length / pageSize);

  const goToPage = (pageIdx: number) => {
    setActivePageIndex(pageIdx);
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: pageIdx * scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newPage = Math.round(scrollLeft / clientWidth);
      if (newPage !== activePageIndex && newPage >= 0 && newPage < totalPages) {
        setActivePageIndex(newPage);
      }
    }
  };

  return (
    <section
      id="achievements"
      aria-label="Honors and Awards"
      className="deck-section min-h-screen w-full bg-[#090403] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 z-30 shadow-[0_-35px_80px_rgba(0,0,0,0.55)] overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Block with Typewriter Title & Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            {/* Tagline Pill */}
            <SlideInView direction="up" distance="30px" delay={0.05}>
              <div className="inline-flex items-center gap-1.5 bg-[#18100c] border border-orange-500/25 px-3 py-1 rounded-md text-[10.5px] font-bold tracking-widest text-neutral-200 uppercase mb-3">
                <span className="text-[#ea580c] text-xs">✱</span>
                <span>{achievements.tagline}</span>
              </div>
            </SlideInView>

            {/* Headline with Typewriter Typing Animation on Scroll */}
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] uppercase font-sans text-white select-none">
              <span>{achievements.headline.line1}</span>
              <div className="text-neutral-400">
                <TypewriterText
                  text={achievements.headline.line2}
                  speed={75}
                  delay={350}
                  className="inline-block"
                  cursorClassName="bg-orange-600"
                />
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons & Indicators (Cards 1-4 / Cards 5-8) */}
          <div className="flex items-center gap-3 self-start md:self-end pt-2">
            <div className="text-xs font-mono font-bold tracking-widest text-neutral-400 mr-2">
              <span className="text-white">0{activePageIndex + 1}</span>
              <span className="text-neutral-600"> / </span>
              <span>0{totalPages}</span>
            </div>

            <button
              type="button"
              onClick={() => goToPage(Math.max(0, activePageIndex - 1))}
              disabled={activePageIndex === 0}
              aria-label="Previous achievement cards"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                activePageIndex === 0
                  ? "border-neutral-800 text-neutral-600 opacity-40 cursor-not-allowed"
                  : "border-neutral-700 bg-neutral-900 text-white hover:border-orange-500 hover:text-orange-500 cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => goToPage(Math.min(totalPages - 1, activePageIndex + 1))}
              disabled={activePageIndex === totalPages - 1}
              aria-label="Next achievement cards"
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                activePageIndex === totalPages - 1
                  ? "border-neutral-800 text-neutral-600 opacity-40 cursor-not-allowed"
                  : "border-neutral-700 bg-neutral-900 text-white hover:border-orange-500 hover:text-orange-500 cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* 8 Cards Horizontal Sliding Track (4 cards fit per screen page) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-2 w-full"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const pageItems = achievements.items.slice(pageIdx * pageSize, (pageIdx + 1) * pageSize);

            return (
              <div
                key={`page-${pageIdx}`}
                className="w-full flex-shrink-0 snap-center grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
              >
                {pageItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0f0f0f] border border-neutral-800/90 rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between hover:border-orange-600/70 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-300 group cursor-pointer"
                  >
                    {/* Top Row: Icon Square + Title */}
                    <div className="flex items-center gap-4 sm:gap-5 mb-3 sm:mb-4">
                      {/* Square Icon Container */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#191919] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a110a] transition-colors duration-300">
                        <AchievementIcon type={item.iconType} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm md:text-[15px] font-black uppercase tracking-wider leading-snug text-white group-hover:text-[#ea580c] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-neutral-800/80 my-2" />

                    {/* Bottom Metadata Split Row */}
                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-neutral-500 uppercase tracking-wider font-bold">
                          ACHIEVEMENT
                        </span>
                        <span className="text-white font-bold">{item.achievementType}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-neutral-500 uppercase tracking-wider font-bold">
                          YEAR
                        </span>
                        <span className="text-white font-mono font-bold">{item.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
