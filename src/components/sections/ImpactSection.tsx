import React from "react";
import Image from "next/image";
import { impactData } from "@/data/impact";
import { CornerBracketCard } from "@/components/ui/CornerBracketCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { SlideInView } from "@/components/ui/SlideInView";
import { TypewriterText } from "@/components/ui/TypewriterText";

/**
 * ImpactSection renders Section 2 with Locomotive Scroll parallax and interactive entrance animations.
 */
export function ImpactSection() {
  return (
    <section
      id="impact"
      aria-label="About and Impact"
      data-scroll-section
      className="relative z-20 w-full bg-[#fdfdfd] text-[#111111] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 rounded-none shadow-[0_-30px_70px_rgba(0,0,0,0.55)] border-t border-neutral-200 overflow-x-clip"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Top Row: "TRUSTED BY LEADING BRANDS" + Logo Row */}
        <div
          data-scroll
          data-scroll-class="is-inview"
          className="loco-fade-up flex flex-col lg:flex-row lg:items-center justify-between pb-16 sm:pb-20 border-b border-neutral-200/80 gap-8"
        >
          <div className="text-[12px] font-bold tracking-widest text-neutral-800 uppercase flex-shrink-0 leading-tight whitespace-pre-line">
            {impactData.trustedBrandsHeading}
          </div>

          {/* Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-8 sm:gap-14 opacity-80">
            {/* Logo 1 */}
            <div className="flex items-center gap-2 font-bold tracking-tighter text-lg text-neutral-800">
              <svg className="w-6 h-6 text-neutral-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="tracking-widest font-black uppercase text-sm">LOGOIPSUM</span>
            </div>

            {/* Logo 2 */}
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-xl text-neutral-900">
              <span className="font-extrabold font-serif italic text-2xl">L</span>ogoipsum
            </div>

            {/* Logo 3 */}
            <div className="flex items-center gap-2 border-b-2 border-neutral-800 pb-0.5">
              <span className="text-xs font-black tracking-widest uppercase">LOGOIPSUM</span>
            </div>

            {/* Logo 4 */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-neutral-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span className="font-semibold text-neutral-700 text-sm">
                logo<b className="text-neutral-900">ipsum</b>
              </span>
            </div>
          </div>
        </div>

        {/* Main Impact Grid Layout */}
        <div className="pt-16 sm:pt-20">
          {/* Tagline Pill: "✱ BETTER DIGITAL JOURNEYS." */}
          <div
            data-scroll
            data-scroll-speed="0.02"
            className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-8"
          >
            <span className="text-orange-600 text-xs">✱</span>
            <span>{impactData.tagline}</span>
          </div>

          {/* Giant Split Headline with subtle parallax */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
            <div
              data-scroll
              data-scroll-speed="0.05"
              className="lg:col-span-8"
            >
              <SlideInView direction="up" delay={0.05}>
                <h2 className="text-[9vw] sm:text-[6.5vw] lg:text-[5.2vw] font-black tracking-tight leading-[0.96] uppercase font-sans text-neutral-950">
                  {impactData.headline.line1}
                  <br />
                  <span className="text-neutral-900">{impactData.headline.line2}</span>
                  <span className="text-neutral-300">{impactData.headline.highlight1}</span>
                  <br />
                  <span className="text-neutral-400">{impactData.headline.line3}</span>
                </h2>
              </SlideInView>
            </div>

            {/* Subtle 8-point Starburst Icon with counter-rotation/parallax */}
            <div
              data-scroll
              data-scroll-speed="-0.08"
              className="hidden lg:flex lg:col-span-1 justify-center pt-8"
            >
              <svg className="w-14 h-14 text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 2h2v7h-2zm0 13h2v7h-2zm9-4v2h-7v-2zm-13 0v2H0v-2zm12.364-7.778l1.414 1.414-4.95 4.95-1.414-1.414zm-9.192 9.192l1.414 1.414-4.95 4.95-1.414-1.414zm10.606 4.95l-1.414 1.414-4.95-4.95 1.414-1.414zm-9.192-9.192l-1.414 1.414-4.95-4.95 1.414-1.414z" />
              </svg>
            </div>

            {/* Top-Right Portrait Card (Flies in from off-screen right) */}
            <div
              data-scroll
              data-scroll-speed="-0.04"
              className="lg:col-span-3 flex justify-start lg:justify-end"
            >
              <SlideInView direction="right" delay={0.15} className="w-fit">
                <div className="relative w-[140px] sm:w-[170px] aspect-[4/5] rounded-[6px] overflow-hidden shadow-md">
                  <Image
                    src={impactData.portraitSmall.src}
                    alt={impactData.portraitSmall.alt}
                    fill
                    sizes="(max-width: 640px) 140px, 170px"
                    className="object-cover filter contrast-125"
                  />
                </div>
              </SlideInView>
            </div>
          </div>

          {/* Lower Row: Left Corner-Bracket Portrait + Right Bio & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Portrait with Corner Crop Ticks [ ] (Flies in from off-screen left) */}
            <div
              data-scroll
              data-scroll-speed="0.04"
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <SlideInView direction="left" delay={0.1} className="w-fit">
                <CornerBracketCard>
                  <div className="relative w-[260px] sm:w-[320px] aspect-[4/5] overflow-hidden rounded-[2px]">
                    <Image
                      src={impactData.portraitBracket.src}
                      alt={impactData.portraitBracket.alt}
                      fill
                      sizes="(max-width: 640px) 260px, 320px"
                      className="object-cover"
                    />
                  </div>
                </CornerBracketCard>
              </SlideInView>
            </div>

            {/* Right: Bio (with typewriter effect) + 2 Metric Cards with in-view reveal */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">
              <TypewriterText
                text={impactData.bio}
                speed={16}
                delay={250}
                className="text-[13px] sm:text-[14px] font-bold text-neutral-800 uppercase tracking-wide leading-relaxed max-w-[540px] mb-12 block min-h-[72px]"
              />

              {/* Metrics (Each container animates into view with count-up numbers) */}
              <div className="space-y-4 max-w-[560px]">
                {impactData.metrics.map((metric, idx) => (
                  <SlideInView key={idx} direction="up" delay={0.25 + idx * 0.2}>
                    <MetricCard metric={metric} />
                  </SlideInView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
