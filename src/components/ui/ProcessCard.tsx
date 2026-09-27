import React from "react";
import type { ProcessStep } from "@/data/process";

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
}

/**
 * Renders the custom geometric orange icon matching the screenshot design.
 */
function ProcessIcon({ type }: { type: ProcessStep["iconType"] }) {
  switch (type) {
    case "star4":
      return (
        <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      );
    case "asterisk":
      return (
        <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.5 0h3v8.1l7-4.04 1.5 2.6-7 4.04 7 4.04-1.5 2.6-7-4.04V24h-3v-6.7l-7 4.04-1.5-2.6 7-4.04-7-4.04 1.5-2.6 7 4.04V0z" />
        </svg>
      );
    case "plus":
      return (
        <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6V3z" />
        </svg>
      );
    case "cross":
      return (
        <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10v5h5v10h-5v5H7v-5H2V7h5V2z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * ProcessCard renders each black step card under "DESIGN PROCESS THAT WORKS"
 */
export function ProcessCard({ step, index }: ProcessCardProps) {
  return (
    <div className="bg-[#101010] border border-neutral-800/80 rounded-[6px] p-7 sm:p-9 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] hover:border-orange-600/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-all duration-300 group">
      <div>
        {/* Top Icon */}
        <div className="transition-transform duration-300 group-hover:scale-110 origin-left">
          <ProcessIcon type={step.iconType} />
        </div>

        {/* Step Title */}
        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white font-sans mt-7">
          {step.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed mt-auto pt-8">
        {step.description}
      </p>
    </div>
  );
}
