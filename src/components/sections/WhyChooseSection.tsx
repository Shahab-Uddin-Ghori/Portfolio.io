"use client";

import React, { useEffect, useRef, useState } from "react";
import { whyChooseData } from "@/data/whyChoose";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

/**
 * WhyChooseSection implements the 3-column Bento grid with a dynamic
 * stack-to-fan-out scroll animation:
 * 1. Initial / entering state: cards are tucked behind the center card with depth/fade.
 *    Heading text has a progressive lens-blur focus effect.
 * 2. On scroll entry: side cards fan out smoothly to their grid positions,
 *    heading unblurs into crystal sharpness, and numbers count up (7+, 98%).
 */
export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsExpanded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.75) {
          // Reset when scrolled back above the section so it re-fans out on next scroll
          setIsExpanded(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      aria-label="Why Choose Me"
      className="deck-section min-h-screen w-full bg-[#fafafa] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 z-[60] shadow-[0_-30px_70px_rgba(0,0,0,0.18)] border-t border-neutral-100/80 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* ========================================================================= */}
        {/* HEADER: BADGE + 3-LINE HEADING WITH PROGRESSIVE LENS-BLUR FOCUS EFFECT     */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-14 mb-10 sm:mb-14">
          {/* Pill Badge */}
          <div className="shrink-0 pt-1.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200/70 shadow-2xs">
              <span className="text-[#f97316] font-bold text-sm leading-none">✱</span>
              <span className="text-[11px] font-bold tracking-widest text-neutral-800 uppercase">
                {whyChooseData.tagline}
              </span>
            </div>
          </div>

          {/* Big Editorial Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[1.03] select-none">
            {/* Line 1: FOCUSED ON */}
            <span className="block text-neutral-950">
              {whyChooseData.headline.line1}
            </span>

            {/* Line 2: DESIGN THAT (progressive focus) */}
            <span
              className="block text-neutral-950 transition-all duration-700 ease-out"
              style={{
                filter: isExpanded ? "blur(0px)" : "blur(3px)",
                opacity: isExpanded ? 1 : 0.8,
                transitionDelay: isExpanded ? "120ms" : "0ms",
              }}
            >
              {whyChooseData.headline.line2Prefix}
              <span className="text-neutral-500">{whyChooseData.headline.line2Suffix}</span>
            </span>

            {/* Line 3: DELIVERS RESULTS (progressive lens blur -> crisp focus) */}
            <span
              className="block text-neutral-400 transition-all duration-700 ease-out"
              style={{
                filter: isExpanded ? "blur(0px)" : "blur(7px)",
                opacity: isExpanded ? 1 : 0.45,
                transitionDelay: isExpanded ? "260ms" : "0ms",
              }}
            >
              {whyChooseData.headline.line3}
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 3-COLUMN BENTO GRID: CARDS FAN OUT FROM BEHIND CENTER IMAGE               */}
        {/* ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.18fr_1fr] gap-6 items-stretch">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: DESIGN EXPERIENCE (7+) & CLIENT SATISFACTION (98%)        */}
          {/* --------------------------------------------------------------------- */}
          <div className="flex flex-col gap-6 justify-between relative z-10">
            {/* CARD 1: DESIGN EXPERIENCE */}
            <div
              className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[230px] sm:h-[245px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isExpanded
                  ? "translate3d(0, 0, 0) scale(1) rotate(0deg)"
                  : "translate3d(85%, 0, 0) scale(0.93) rotate(-2.5deg)",
                opacity: isExpanded ? 1 : 0.35,
                filter: isExpanded ? "blur(0px)" : "blur(2px)",
                transitionDelay: isExpanded ? "0ms" : "0ms",
              }}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-neutral-800 uppercase">
                <span className="text-[#f97316] font-bold text-sm">✱</span>
                <span>{whyChooseData.experienceCard.label}</span>
              </div>

              <div className="text-5xl sm:text-6xl font-black tracking-tight text-neutral-950 my-2">
                <AnimatedCounter
                  key={isExpanded ? "exp-active" : "exp-idle"}
                  value={isExpanded ? whyChooseData.experienceCard.value : "0"}
                  duration={1400}
                />
              </div>

              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-[280px]">
                {whyChooseData.experienceCard.description}
              </p>
            </div>

            {/* CARD 2: CLIENT SATISFACTION */}
            <div
              className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[230px] sm:h-[245px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isExpanded
                  ? "translate3d(0, 0, 0) scale(1) rotate(0deg)"
                  : "translate3d(85%, 0, 0) scale(0.91) rotate(-3.5deg)",
                opacity: isExpanded ? 1 : 0.28,
                filter: isExpanded ? "blur(0px)" : "blur(3px)",
                transitionDelay: isExpanded ? "140ms" : "0ms",
              }}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-neutral-800 uppercase">
                <span className="text-[#f97316] font-bold text-sm">✱</span>
                <span>{whyChooseData.satisfactionCard.label}</span>
              </div>

              <div className="text-5xl sm:text-6xl font-black tracking-tight text-neutral-950 my-2">
                <AnimatedCounter
                  key={isExpanded ? "sat-active" : "sat-idle"}
                  value={isExpanded ? whyChooseData.satisfactionCard.value : "0%"}
                  duration={1400}
                />
              </div>

              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-[280px]">
                {whyChooseData.satisfactionCard.description}
              </p>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* CENTER COLUMN: TALL FEATURED CARD (ANCHOR IN FRONT OF STACK)          */}
          {/* --------------------------------------------------------------------- */}
          <div className="relative z-20 bg-[#eef3f6] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between p-6 sm:p-7 min-h-[485px] sm:min-h-[515px]">
            {/* Background Motion Blur Artwork */}
            <div className="absolute inset-0 z-0">
              <img
                src={whyChooseData.centerCard.bgImage}
                alt="Motion dynamic artwork"
                className="w-full h-full object-cover object-center"
              />
              {/* Soft editorial gradient overlays for optimal readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/95" />
            </div>

            {/* Top Row: Client Avatars & Success Metric */}
            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex -space-x-2 items-center">
                {whyChooseData.centerCard.clientAvatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Client ${i + 1}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-neutral-800">
                {whyChooseData.centerCard.clientCountText}
              </span>
            </div>

            {/* Bottom Panel: Star Rating, Testimonial Quote & Author */}
            <div className="relative z-10 pt-6">
              {/* 5 Orange Stars & Rating */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex text-[#f59e0b] text-sm tracking-tight select-none">
                  {"★★★★★"}
                </div>
                <span className="text-xs font-bold text-neutral-900">
                  {whyChooseData.centerCard.rating}
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal mb-5">
                {whyChooseData.centerCard.quote}
              </p>

              {/* Olivia Davis Author Row */}
              <div className="flex items-center gap-3">
                <img
                  src={whyChooseData.centerCard.authorAvatar}
                  alt={whyChooseData.centerCard.authorName}
                  className="w-9 h-9 rounded-full object-cover border border-white/80 shadow-2xs"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-950 leading-tight">
                    {whyChooseData.centerCard.authorName}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium">
                    {whyChooseData.centerCard.authorRole}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: SUNSET SILHOUETTE PHOTO & FAST & RELIABLE CARD          */}
          {/* --------------------------------------------------------------------- */}
          <div className="flex flex-col gap-6 justify-between relative z-10">
            {/* CARD 1: SUNSET SILHOUETTE PORTRAIT IMAGE */}
            <div
              className="h-[230px] sm:h-[245px] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] bg-neutral-900 relative group transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isExpanded
                  ? "translate3d(0, 0, 0) scale(1) rotate(0deg)"
                  : "translate3d(-85%, 0, 0) scale(0.93) rotate(2.5deg)",
                opacity: isExpanded ? 1 : 0.35,
                filter: isExpanded ? "blur(0px)" : "blur(2px)",
                transitionDelay: isExpanded ? "70ms" : "0ms",
              }}
            >
              <img
                src={whyChooseData.silhouetteImage.src}
                alt={whyChooseData.silhouetteImage.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* CARD 2: FAST & RELIABLE CARD */}
            <div
              className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-center h-[230px] sm:h-[245px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: isExpanded
                  ? "translate3d(0, 0, 0) scale(1) rotate(0deg)"
                  : "translate3d(-85%, 0, 0) scale(0.91) rotate(3.5deg)",
                opacity: isExpanded ? 1 : 0.28,
                filter: isExpanded ? "blur(0px)" : "blur(3px)",
                transitionDelay: isExpanded ? "210ms" : "0ms",
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center -ml-1 mb-2">
                <svg
                  className="w-6 h-6 text-[#f97316] fill-[#f97316]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13 2L3 14h7v8l11-12h-8l0-8z" />
                </svg>
              </div>

              <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-neutral-950 mb-2">
                {whyChooseData.fastReliableCard.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {whyChooseData.fastReliableCard.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
