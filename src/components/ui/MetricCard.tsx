import React from "react";
import type { MetricItem } from "@/data/impact";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface MetricCardProps {
  metric: MetricItem;
}

/**
 * MetricCard renders the clean stat boxes with animated counter, star label, and description.
 */
export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="bg-neutral-50 hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-300 border border-neutral-200/80 rounded-[8px] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 font-sans min-w-[130px]">
        <AnimatedCounter value={metric.value} />
      </div>
      <div className="sm:border-l sm:border-neutral-200 sm:pl-7">
        <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-neutral-900 uppercase mb-1">
          <span className="text-orange-600 text-xs">✱</span>
          <span>{metric.label}</span>
        </div>
        <p className="text-[12px] text-neutral-500 font-normal leading-normal">
          {metric.description}
        </p>
      </div>
    </div>
  );
}
