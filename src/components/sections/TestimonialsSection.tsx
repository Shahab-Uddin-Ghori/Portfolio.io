import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

/**
 * TestimonialsSection renders the "WHAT MY CLIENTS SAY" section with an infinite
 * horizontal scrolling marquee running right-to-left.
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      className="relative w-full bg-[#fafafa] py-24 sm:py-32 border-t border-neutral-100/80 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* SECTION HEADER: BADGE + TITLE + RIGHT-ALIGNED SUMMARY PARAGRAPH           */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          {/* Left Column: Badge + 2-Line Headline */}
          <div className="flex flex-col items-start gap-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200/70 shadow-2xs">
              <span className="text-[#f97316] font-bold text-sm leading-none">✱</span>
              <span className="text-[11px] font-bold tracking-widest text-neutral-800 uppercase">
                {testimonialsData.tagline}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[1.02] select-none">
              <span className="block text-neutral-950">
                {testimonialsData.headline.line1}
              </span>
              <span className="block text-neutral-400">
                {testimonialsData.headline.line2}
              </span>
            </h2>
          </div>

          {/* Right Column: Uppercase Descriptor Paragraph */}
          <div className="max-w-xs sm:max-w-sm md:pb-2">
            <p className="text-xs sm:text-[13px] font-bold text-neutral-500 uppercase tracking-wider leading-relaxed">
              {testimonialsData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HORIZONTAL INFINITE MARQUEE TRACK (RIGHT TO LEFT)                         */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Soft Fade Gradients for Luxury Seamless Portal Effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Marquee Continuous Sliding Rail */}
        <div
          className="animate-marquee-left flex items-center gap-6"
          style={{ willChange: "transform" }}
        >
          {/* Original Card Set */}
          {testimonialsData.testimonials.map((item) => (
            <TestimonialCard key={`t1-${item.id}`} item={item} />
          ))}

          {/* Duplicate Card Set for Seamless Infinite Loop */}
          {testimonialsData.testimonials.map((item) => (
            <TestimonialCard key={`t2-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
