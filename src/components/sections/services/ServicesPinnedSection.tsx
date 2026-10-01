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

  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger initial entrance animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="sticky top-0 h-screen w-full bg-[#fdfdfd] overflow-hidden flex flex-col justify-start pt-5 sm:pt-7 lg:pt-8 pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1360px] mx-auto select-none">
        {/* ------------------------------------------------------------------- */}
        {/* TOP HEADER: BRAND + SERVICES TITLE (BLACK/GREY COMBO) + CONTROLS    */}
        {/* ------------------------------------------------------------------- */}
        <div className="w-full flex-shrink-0 select-none z-10 mb-4 sm:mb-6 lg:mb-7">
          {/* Small Top Pill Tag matching Reference Image */}
          <div
            className={`inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-2 sm:mb-2.5 transition-all duration-700 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="text-[#ea580c] text-xs leading-none">✱</span>
            <span>BETTER DIGITAL JOURNEYS.</span>
          </div>

          {/* Title + Card Counter & Controls (Baseline Aligned) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-3 sm:gap-6">
            <div
              className={`relative flex items-center gap-4 transition-all duration-700 delay-100 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.9vw] font-black tracking-tight leading-[0.94] uppercase font-sans">
                <span className="text-neutral-950">MY SERVICES </span>
                <span className="text-neutral-900">THROUGH </span>
                <br className="hidden sm:block" />
                <span className="text-neutral-400">USER </span>
                <span className="text-neutral-300">EXPERIENCE</span>
              </h1>

              {/* Subtle 8-point Starburst Icon matching Reference Screenshot */}
              <div className="hidden lg:flex items-center justify-center opacity-30 text-neutral-400 pl-2">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 2h2v7h-2zm0 13h2v7h-2zm9-4v2h-7v-2zm-13 0v2H0v-2zm12.364-7.778l1.414 1.414-4.95 4.95-1.414-1.414zm-9.192 9.192l1.414 1.414-4.95 4.95-1.414-1.414zm10.606 4.95l-1.414 1.414-4.95-4.95 1.414-1.414zm-9.192-9.192l-1.414 1.414-4.95-4.95 1.414-1.414z" />
                </svg>
              </div>
            </div>

            <div
              className={`flex items-center gap-4 ml-auto sm:ml-0 pb-1 flex-shrink-0 transition-all duration-700 delay-200 ease-out ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              {/* Live 01 / 05 Progress indicator driven by scroll */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-500 uppercase flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-bold text-[#ea580c]">0{currentActiveIndex + 1}</span>
                <span className="text-neutral-400">/</span>
                <span className="font-medium text-neutral-500">0{totalCards}</span>
                <span className="hidden md:inline-block ml-1 text-neutral-400">{heroHeadline.exploreText}</span>
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
        {/* CARDS CONTAINER: REDUCED WIDTH (MAX-W-[920px]) & ORANGE HERO THEME */}
        {/* ------------------------------------------------------------------- */}
        <div
          className={`relative w-full max-w-[920px] mx-auto h-[360px] sm:h-[380px] lg:h-[400px] mt-2 sm:mt-4 lg:mt-5 overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-[0_25px_60px_rgba(219,56,2,0.25)] transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"
          }`}
        >
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
                className="absolute inset-0 hero-canvas border border-white/20 rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 lg:p-6 text-white flex flex-col justify-between overflow-hidden transition-shadow duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                {/* ----------------------------------------------------------- */}
                {/* TOP SECTION: NUMBER + TITLE (LEFT) & HEADLINE + BUTTON (RIGHT)*/}
                {/* ----------------------------------------------------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-3.5 lg:gap-6 items-start relative z-10">
                  {/* Left Column */}
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-widest text-white/90 uppercase mb-0.5">
                      <span className="text-white font-bold text-sm leading-none">✱</span>
                      <span>{service.number}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-[0.95] select-none font-sans drop-shadow-sm">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col items-start">
                    <p className="text-xs sm:text-[13px] lg:text-sm font-black uppercase tracking-tight text-white/95 leading-snug mb-2 max-w-lg select-none">
                      {service.headline}
                    </p>

                    <Link
                      href={service.buttonHref || "/#projects"}
                      className="group inline-flex items-center rounded-[6px] bg-white text-neutral-950 hover:bg-neutral-200 transition-colors pl-2.5 pr-1.5 py-1 shadow-sm cursor-pointer"
                    >
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-neutral-950 mr-2">
                        {service.buttonText}
                      </span>
                      <span className="w-4.5 h-4.5 rounded-[4px] bg-[#ea580c] text-white flex items-center justify-center font-bold text-[10px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}
                {/* BOTTOM SECTION: IMAGE (LEFT), TAGS (MIDDLE), LET'S TALK (RIGHT) */}
                {/* ----------------------------------------------------------- */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 pt-2.5 border-t border-white/15 relative z-10">
                  {/* Left: Image Preview */}
                  <div className="relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] h-[85px] sm:h-[95px] lg:h-[105px] rounded-xl overflow-hidden bg-black/20 shadow-md border border-white/20 group flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Middle: Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 flex-1 max-w-[340px] py-0.5">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="bg-black/25 backdrop-blur-sm border border-white/10 hover:bg-white hover:text-neutral-950 text-white text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-sm transition-colors duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Right: Floating Let's Talk Badge (Matching Screenshot 2) */}
                  <div className="flex-shrink-0 bg-[#141416]/95 backdrop-blur-md border border-white/15 rounded-[16px] p-2 sm:p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex items-center gap-2.5">
                    {/* Avatar */}
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-[9px] overflow-hidden bg-neutral-800 flex-shrink-0 border border-white/15">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                        alt="Michael"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>

                    {/* Bio text */}
                    <div className="pr-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="text-[8.5px] text-white/50 font-bold uppercase tracking-wider leading-none">
                          LET&apos;S TALK
                        </span>
                        <span className="text-white/35 text-[8px]">✱</span>
                      </div>
                      <h4 className="text-[11.5px] sm:text-xs font-bold text-white leading-tight">Michael</h4>
                      <p className="text-[9px] text-white/60 font-normal leading-tight">UI/UX Designer</p>
                    </div>

                    {/* Arrow Button */}
                    <Link
                      href="/#contact"
                      aria-label="Open contact form"
                      className="w-7 h-7 rounded-[8px] bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors flex-shrink-0 group"
                    >
                      <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H9M17 7V15" />
                      </svg>
                    </Link>
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
