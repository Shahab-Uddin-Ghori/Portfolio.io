"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { SlideInView } from "@/components/ui/SlideInView";

export function ServicesHeroSection() {
  const { heroHeadline } = servicesData;

  return (
    <section
      id="services-hero"
      aria-label="Services Page Hero"
      className="relative w-full bg-[#fdfdfd] text-[#111111] pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Tagline */}
        <SlideInView direction="up" distance="30px" delay={0.05}>
          <div className="text-xs sm:text-sm font-black tracking-widest text-neutral-900 uppercase mb-4 sm:mb-6">
            {heroHeadline.tagline}
          </div>
        </SlideInView>

        {/* Giant Title + Scroll to Explore Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SlideInView direction="up" distance="40px" delay={0.12}>
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5vw] font-black tracking-tight leading-[0.92] uppercase font-sans text-neutral-950 select-none">
              {heroHeadline.title}
            </h1>
          </SlideInView>

          <SlideInView direction="up" distance="30px" delay={0.18}>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-500 uppercase flex items-center gap-2 pb-2 md:pb-4 self-start md:self-end">
              <span className="font-bold text-neutral-800">{heroHeadline.copyrightYear}</span>
              <span>{heroHeadline.exploreText}</span>
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}
