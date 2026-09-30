import React from "react";
import { servicesData } from "@/data/services";
import { ServiceRow } from "@/components/ui/ServiceRow";
import { SlideInView } from "@/components/ui/SlideInView";

/**
 * ServicesSection dynamically renders N services with coordinated in-view reveal animations.
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      data-scroll-section
      className="deck-section min-h-screen w-full bg-[#fdfdfd] text-[#111111] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 z-30 shadow-[0_-30px_70px_rgba(0,0,0,0.18)] border-t border-neutral-200 overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Block with in-view entrance */}
        <div>
          {/* Top Tagline Pill: "✱ OUR SERVICES" */}
          <SlideInView direction="up" distance="30px" delay={0.05}>
            <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-4 sm:mb-5">
              <span className="text-orange-600 text-xs">✱</span>
              <span>{servicesData.tagline}</span>
            </div>
          </SlideInView>

          {/* Giant Header */}
          <SlideInView direction="up" distance="40px" delay={0.12}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.98] uppercase font-sans text-neutral-950 mb-8 sm:mb-10">
              {servicesData.headline.line1}
              <br />
              {servicesData.headline.line2}
              <br />
              <span className="text-neutral-400">{servicesData.headline.line3}</span>
            </h2>
          </SlideInView>
        </div>

        {/* Dynamic Services List (N Services with staggered in-view reveals) */}
        <div className="divide-y divide-neutral-200/90 border-y border-neutral-200/90">
          {servicesData.services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
