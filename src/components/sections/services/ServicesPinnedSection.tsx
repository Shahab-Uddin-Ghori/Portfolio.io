"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";

export function ServicesPinnedSection() {
  const { heroHeadline, services } = servicesData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const totalCards = services.length; // 5 cards
  const numTransitions = totalCards - 1; // 4 transitions
  const slotWidth = 1 / numTransitions; // 0.25

  // Live scroll tracker
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setProgress(clamped);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Compute active card index based on scroll progress for counter
  const currentActiveIndex = Math.min(
    totalCards - 1,
    Math.floor(progress / slotWidth + 0.05)
  );

  // Smooth click navigation
  const scrollToCard = useCallback((targetIndex: number) => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionAbsoluteTop = window.scrollY + rect.top;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    const targetScroll = sectionAbsoluteTop + targetIndex * slotWidth * totalScrollable;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }, [slotWidth]);

  // Calculate translateY (%) for each card based on scroll progress
  const getCardTransform = (index: number) => {
    // Card 0 (UI/UX Design) is always in place at translateY(0)
    if (index === 0) {
      return "translate3d(0, 0%, 0)";
    }

    const start = (index - 1) * slotWidth;
    const end = start + slotWidth;

    if (progress <= start) {
      return "translate3d(0, 110%, 0)";
    }
    if (progress >= end) {
      return "translate3d(0, 0%, 0)";
    }

    const t = (progress - start) / slotWidth;
    const y = 110 * (1 - t);
    return `translate3d(0, ${y.toFixed(2)}%, 0)`;
  };

  return (
    <section
      ref={sectionRef}
      id="services-stage"
      aria-label="Services Presentation Stage"
      className="relative w-full bg-[#fdfdfd]"
      style={{
        // 5 cards = 500vh of real, continuous scrollable distance
        height: `${totalCards * 100}vh`,
      }}
    >
      {/* ===================================================================== */}
      {/* PINNED STAGE VIEWPORT (LOCKED IN PLACE FOR ENTIRE 500vh DURATION)     */}
      {/* ===================================================================== */}
      <div className="sticky top-0 h-screen w-full bg-[#fdfdfd] overflow-hidden flex flex-col justify-between pt-6 sm:pt-8 pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1360px] mx-auto select-none">
        {/* ------------------------------------------------------------------- */}
        {/* TOP HEADER: BRAND + SERVICES TITLE (ALIGNED WITH EXPLORE ON RIGHT)  */}
        {/* ------------------------------------------------------------------- */}
        <div className="w-full flex-shrink-0 select-none z-10 mb-4 sm:mb-6">
          {/* Small Top Tag */}
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase mb-1">
            {heroHeadline.tagline}
          </div>

          {/* Title + Card Counter & Controls (Baseline Aligned) */}
          <div className="flex items-baseline justify-between w-full gap-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2vw] font-black tracking-tighter leading-none uppercase font-sans text-neutral-950">
              {heroHeadline.title}
            </h1>

            <div className="flex items-center gap-4 ml-auto pb-1">
              {/* Live 01 / 05 Progress indicator driven by scroll */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-500 uppercase flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-bold text-[#ea580c]">0{currentActiveIndex + 1}</span>
                <span className="text-neutral-400">/</span>
                <span className="font-medium text-neutral-500">0{totalCards}</span>
                <span className="hidden sm:inline-block ml-1 text-neutral-400">{heroHeadline.exploreText}</span>
              </div>

              {/* Micro Navigation Click Arrows */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => scrollToCard(Math.max(0, currentActiveIndex - 1))}
                  disabled={currentActiveIndex === 0}
                  aria-label="Previous Service"
                  className={`w-7 h-7 rounded-md border border-neutral-300 flex items-center justify-center text-xs font-bold transition-all ${
                    currentActiveIndex === 0
                      ? "opacity-30 cursor-not-allowed bg-neutral-100 text-neutral-400"
                      : "hover:bg-neutral-900 hover:text-white cursor-pointer bg-white text-neutral-800 shadow-2xs"
                  }`}
                >
                  ↑
                </button>
                <button
                  onClick={() => scrollToCard(Math.min(totalCards - 1, currentActiveIndex + 1))}
                  disabled={currentActiveIndex === totalCards - 1}
                  aria-label="Next Service"
                  className={`w-7 h-7 rounded-md border border-neutral-300 flex items-center justify-center text-xs font-bold transition-all ${
                    currentActiveIndex === totalCards - 1
                      ? "opacity-30 cursor-not-allowed bg-neutral-100 text-neutral-400"
                      : "hover:bg-neutral-900 hover:text-white cursor-pointer bg-white text-neutral-800 shadow-2xs"
                  }`}
                >
                  ↓
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* CARDS CONTAINER: STACKING DECK (PERFECT VIEWPORT FIT & ZERO ARTIFACT)*/}
        {/* ------------------------------------------------------------------- */}
        <div className="relative w-full max-w-[1080px] mx-auto h-[380px] sm:h-[400px] lg:h-[420px] overflow-hidden rounded-[22px] sm:rounded-[26px]">
          {services.map((service, index) => {
            const zIndex = 20 + index * 10;
            const cardTransform = getCardTransform(index);

            return (
              <div
                key={service.id}
                style={{
                  zIndex,
                  transform: cardTransform,
                  willChange: "transform",
                }}
                className="absolute inset-0 bg-white border border-neutral-200/90 rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 lg:p-6 shadow-[0_16px_50px_rgba(0,0,0,0.09)] flex flex-col justify-between overflow-hidden transition-shadow duration-300"
              >
                {/* ----------------------------------------------------------- */}
                {/* TOP SECTION: NUMBER + TITLE (LEFT) & HEADLINE + BUTTON (RIGHT)*/}
                {/* ----------------------------------------------------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-4 lg:gap-8 items-start">
                  {/* Left Column */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-neutral-800 uppercase mb-1">
                      <span className="text-[#ea580c] font-bold text-sm leading-none">✱</span>
                      <span>{service.number}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#ea580c] leading-[0.95] select-none font-sans">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col items-start">
                    <p className="text-xs sm:text-sm lg:text-base font-black uppercase tracking-tight text-neutral-900 leading-snug mb-2 max-w-lg select-none">
                      {service.headline}
                    </p>

                    <Link
                      href={service.buttonHref || "/#projects"}
                      className="group inline-flex items-center rounded-sm bg-[#ececec] hover:bg-neutral-300 transition-colors pl-3 pr-1 py-1 shadow-2xs cursor-pointer"
                    >
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-neutral-900 mr-2">
                        {service.buttonText}
                      </span>
                      <span className="w-5 h-5 rounded-xs bg-[#ea580c] text-white flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}
                {/* BOTTOM SECTION: IMAGE (LEFT) & PILL TAGS (RIGHT)            */}
                {/* ----------------------------------------------------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-4 lg:gap-8 items-end pt-2 border-t border-neutral-100">
                  {/* Left Column: Image Preview */}
                  <div className="relative w-full max-w-[300px] h-[105px] sm:h-[115px] lg:h-[125px] rounded-xl overflow-hidden bg-neutral-100 shadow-xs border border-neutral-200/80 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Right Column: Skill Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="bg-[#f4f4f4] hover:bg-neutral-900 hover:text-white text-neutral-800 text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
