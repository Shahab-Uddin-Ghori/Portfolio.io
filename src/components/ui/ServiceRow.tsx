import React from "react";
import Image from "next/image";
import type { ServiceItem } from "@/data/services";

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
}

/**
 * ServiceRow renders an individual row in the dynamic Services directory
 * with Locomotive Scroll in-view reveal animation.
 */
export function ServiceRow({ service, index }: ServiceRowProps) {
  const displayNumber = service.number || String(index + 1).padStart(3, "0");

  return (
    <div
      data-scroll
      data-scroll-class="is-inview"
      className="service-row loco-fade-up py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
    >
      {/* Col 1: Padded Number & Star Symbol */}
      <div className="lg:col-span-2 flex items-center gap-2 text-sm font-semibold text-neutral-500">
        <span className="text-orange-600">✱</span>
        <span className="tracking-wider">{displayNumber}</span>
      </div>

      {/* Col 2: Content & Skill Badges */}
      <div className="lg:col-span-6 pr-0 lg:pr-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 mb-3 transition-colors group-hover:text-orange-600">
          {service.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-6 max-w-[500px]">
          {service.description}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700 text-[11px] font-medium px-3 py-1.5 rounded-sm transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Col 3: Right Visual Media Card */}
      <div className="lg:col-span-4 flex justify-start lg:justify-end">
        <div className="relative w-full max-w-[340px] aspect-[16/10] rounded-[6px] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/60">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, 340px"
            className="service-preview-img object-cover"
          />
          {/* Action Badge Pill */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-[3px] shadow-sm flex items-center gap-1.5 whitespace-nowrap z-10 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
            <span className="text-[9px] font-bold tracking-widest uppercase text-neutral-800">
              {service.badgeText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
