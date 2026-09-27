import React from "react";
import Image from "next/image";
import { heroData } from "@/data/hero";
import { Navbar } from "@/components/layout/Navbar";
import { GridCrosshairs } from "@/components/ui/GridCrosshairs";
import { ProjectBadgeCard } from "@/components/ui/ProjectBadgeCard";
import { ContactCard } from "@/components/ui/ContactCard";

/**
 * HeroSection renders the primary viewport for the portfolio.
 * Integrates Locomotive Scroll parallax attributes (data-scroll, data-scroll-speed)
 * for 3D depth layering.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      data-scroll-section
      className="relative w-[97.5vw] h-[94vh] max-w-[97.5vw] max-h-[94vh] rounded-[28px] sm:rounded-[36px] overflow-hidden hero-canvas border border-white/15 flex flex-col justify-between mx-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)] anim-hero-canvas"
    >
      {/* Layer 0: Architectural Grid Background & Crosshairs (+) */}
      <GridCrosshairs />

      {/* Layer 1: Top Navigation Bar */}
      <div className="anim-hero-nav">
        <Navbar
          brandName={heroData.brand.name}
          trademark={heroData.brand.trademark}
          navLinks={heroData.navLinks}
        />
      </div>

      {/* Layer 2: Giant Background Watermark Text ("MICHAEL") with distinct counter-parallax */}
      <div
        aria-hidden="true"
        data-scroll
        data-scroll-speed="-0.2"
        className="absolute inset-x-0 top-[6%] sm:top-[7%] flex justify-center items-start pointer-events-none z-10 overflow-hidden"
      >
        <span className="watermark-text text-[18vw] xl:text-[16.5vw] leading-none whitespace-nowrap anim-hero-watermark">
          {heroData.watermarkText}
        </span>
      </div>

      {/* Layer 3: Central Portrait Cutout with forward scroll parallax */}
      <div
        data-scroll
        data-scroll-speed="0.14"
        className="absolute inset-x-0 bottom-0 top-[10%] flex justify-center items-end pointer-events-none z-20"
      >
        <Image
          src={heroData.portrait.src}
          alt={heroData.portrait.alt}
          width={800}
          height={1000}
          priority
          className="portrait-mask h-[80%] sm:h-[87%] lg:h-[94%] w-auto max-w-none object-cover object-top drop-shadow-[0_20px_45px_rgba(0,0,0,0.55)] select-none anim-hero-portrait"
        />
      </div>

      {/* Layer 4: Middle-Left Manifesto Description with slight depth */}
      <div
        data-scroll
        data-scroll-speed="0.08"
        className="absolute left-6 sm:left-10 lg:left-14 top-[32%] sm:top-[34%] max-w-[270px] sm:max-w-[310px] z-30 pointer-events-auto"
      >
        <div className="flex items-start gap-2 anim-hero-manifesto">
          <span
            aria-hidden="true"
            className="text-white/60 text-xs mt-0.5 select-none font-light"
          >
            +
          </span>
          <div className="space-y-0.5">
            {heroData.manifesto.lines.map((line, idx) => (
              <p
                key={idx}
                className="text-[11px] sm:text-[12px] font-semibold tracking-wider text-white/95 uppercase leading-[1.55]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Layer 5: Top-Right Floating Polaroid Card with noticeable counter-float */}
      <div
        data-scroll
        data-scroll-speed="-0.16"
        className="hidden sm:block absolute right-8 sm:right-12 lg:right-14 top-[24%] sm:top-[26%] z-30 pointer-events-auto"
      >
        <div className="anim-hero-badge">
          <ProjectBadgeCard
            title={heroData.projectBadge.title}
            category={heroData.projectBadge.category}
            image={heroData.projectBadge.image}
            symbol={heroData.projectBadge.symbol}
          />
        </div>
      </div>

      {/* Layer 6: Bottom Container (Foreground Name & Floating "Let's Talk" Card) */}
      <div className="relative z-30 px-6 sm:px-10 lg:px-14 pb-7 sm:pb-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Bottom-Left: Copyright & Massive Foreground Name */}
        <div className="pointer-events-auto anim-hero-name">
          <span className="block text-white/90 text-xs sm:text-sm font-semibold tracking-wider mb-1">
            {heroData.copyrightYear}
          </span>
          <h1 className="foreground-name text-[14vw] sm:text-[10vw] lg:text-[7.6vw]">
            {heroData.foregroundName}
          </h1>
        </div>

        {/* Bottom-Right: Floating "Let's Talk" Card */}
        <div
          data-scroll
          data-scroll-speed="0.12"
          className="pointer-events-auto self-end md:self-auto anim-hero-contact"
        >
          <ContactCard
            tagline={heroData.contactCard.tagline}
            name={heroData.contactCard.name}
            role={heroData.contactCard.role}
            avatar={heroData.contactCard.avatar}
          />
        </div>
      </div>
    </section>
  );
}
