import React from "react";
import { processData } from "@/data/process";
import { ProcessCard } from "@/components/ui/ProcessCard";
import { SlideInView } from "@/components/ui/SlideInView";

/**
 * ProcessSection renders the 4-step architectural methodology
 * matching Screenshots 4 & 5 under "DESIGN PROCESS THAT WORKS".
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="Design Process"
      data-scroll-section
      className="deck-section min-h-screen w-full bg-[#fdfdfd] text-[#111111] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 z-50 shadow-[0_-30px_70px_rgba(0,0,0,0.18)] border-t border-neutral-200 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Block */}
        <div className="mb-10 sm:mb-12">
          {/* Top Tagline Pill: "✱ MY DESIGN PROCESS" */}
          <SlideInView direction="up" distance="30px" delay={0.05}>
            <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-4 sm:mb-5">
              <span className="text-orange-600 text-xs">✱</span>
              <span>{processData.tagline}</span>
            </div>
          </SlideInView>

          {/* Giant Heading: "DESIGN PROCESS / THAT WORKS" */}
          <SlideInView direction="up" distance="40px" delay={0.12}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.96] uppercase font-sans text-neutral-950">
              {processData.headline.line1}
              <br />
              <span className="text-neutral-400">{processData.headline.line2}</span>
            </h2>
          </SlideInView>
        </div>

        {/* 4 Process Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {processData.steps.map((step, idx) => (
            <SlideInView key={step.id} direction="up" distance="40px" delay={0.1 + idx * 0.08}>
              <ProcessCard step={step} index={idx} />
            </SlideInView>
          ))}
        </div>
      </div>
    </section>
  );
}
