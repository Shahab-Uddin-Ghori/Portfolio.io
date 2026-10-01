"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "@/data/about";

export function AboutHeroSection() {
  const { hero } = aboutData;

  return (
    <section
      id="about-hero"
      aria-label="About Us Hero"
      className="relative md:sticky md:top-0 min-h-screen w-full bg-[#fdfdfd] text-[#111111] pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden flex flex-col justify-between z-10"
    >
      {/* Top Header Area */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 pt-2">
        {/* Brand Tagline */}
        <div className="text-xs sm:text-sm font-black tracking-widest text-neutral-900 uppercase mb-3 sm:mb-4">
          {hero.tagline}
        </div>

        {/* Title + Scroll To Explore Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-black tracking-tight leading-[0.92] uppercase font-sans text-neutral-950 select-none">
            {hero.title}
          </h1>

          <div className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-500 uppercase flex items-center gap-2 pb-2 md:pb-4 self-start md:self-end">
            <span className="font-bold text-neutral-800">{hero.copyrightYear}</span>
            <span>{hero.exploreText}</span>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Image Strip (Moving Right to Left in a Loop) */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Soft Fade Gradients (Ultra-minimal edge feathering) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-3 sm:w-5 bg-gradient-to-r from-[#fdfdfd]/40 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-3 sm:w-5 bg-gradient-to-l from-[#fdfdfd]/40 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Continuous Marquee Sliding Rail */}
        <div
          className="animate-marquee-left flex items-center gap-5 sm:gap-7 hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {/* Set 1 */}
          {hero.marqueeImages.map((img) => (
            <div
              key={`m1-${img.id}`}
              className="relative w-[280px] sm:w-[330px] md:w-[380px] aspect-[4/3] sm:aspect-square flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-neutral-200/80 group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 330px, 380px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}

          {/* Set 2 (Duplicate for seamless infinite loop) */}
          {hero.marqueeImages.map((img) => (
            <div
              key={`m2-${img.id}`}
              className="relative w-[280px] sm:w-[330px] md:w-[380px] aspect-[4/3] sm:aspect-square flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-neutral-200/80 group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 330px, 380px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
