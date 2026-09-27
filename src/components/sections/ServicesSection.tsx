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
      className="w-full bg-[#fdfdfd] text-[#111111] py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-neutral-200 overflow-x-clip"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Header Block with in-view entrance */}
        <div>
          {/* Top Tagline Pill: "✱ OUR SERVICES" */}
          <SlideInView direction="up" distance="30px" delay={0.05}>
            <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-6">
              <span className="text-orange-600 text-xs">✱</span>
              <span>{servicesData.tagline}</span>
            </div>
          </SlideInView>

          {/* Giant Header */}
          <SlideInView direction="up" distance="40px" delay={0.12}>
            <h2 className="text-[8.5vw] sm:text-[6.5vw] lg:text-[4.8vw] font-black tracking-tight leading-[0.98] uppercase font-sans text-neutral-950 mb-16 sm:mb-20">
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
