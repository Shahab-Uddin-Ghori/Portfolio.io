import React from "react";
import Image from "next/image";
import type { ServiceItem } from "@/data/services";
import { SlideInView } from "@/components/ui/SlideInView";

interface ServiceRowProps {
  service: ServiceItem;
  index: number;
}

/**
 * ServiceRow renders an individual row in the dynamic Services directory
 * with coordinated entrance animations and interactive hover physics.
 */
export function ServiceRow({ service, index }: ServiceRowProps) {
  const displayNumber = service.number || String(index + 1).padStart(3, "0");

  return (
    <div className="service-row py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#faf8f5]/80 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-[12px] transition-colors duration-300">
      {/* Col 1: Padded Number & Star Symbol */}
      <div className="lg:col-span-2">
        <SlideInView direction="left" distance="50px" delay={0.05}>
          <div className="flex items-center gap-2 text-sm font-semibold text-neutral-500">
            <span className="text-orange-600 inline-block transition-transform duration-300 group-hover:rotate-90">
              ✱
            </span>
            <span className="tracking-wider">{displayNumber}</span>
          </div>
        </SlideInView>
      </div>

      {/* Col 2: Content & Skill Badges */}
      <div className="lg:col-span-6 pr-0 lg:pr-8">
        <SlideInView direction="up" distance="40px" delay={0.12}>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 mb-3 transition-colors duration-300 group-hover:text-orange-600">
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
                className="bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 text-[11px] font-medium px-3 py-1.5 rounded-sm transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </SlideInView>
      </div>

      {/* Col 3: Right Visual Media Card */}
      <div className="lg:col-span-4 flex justify-start lg:justify-end">
        <SlideInView direction="right" distance="100px" delay={0.18} className="w-full max-w-[340px]">
          <div className="relative w-full aspect-[16/10] rounded-[6px] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/60 transition-transform duration-500 group-hover:shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, 340px"
              className="service-preview-img object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Action Badge Pill */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-[3px] shadow-sm flex items-center gap-1.5 whitespace-nowrap z-10 pointer-events-none transition-transform duration-300 group-hover:scale-105">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
              <span className="text-[9px] font-bold tracking-widest uppercase text-neutral-800">
                {service.badgeText}
              </span>
            </div>
          </div>
        </SlideInView>
      </div>
    </div>
  );
}
