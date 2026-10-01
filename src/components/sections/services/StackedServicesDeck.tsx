"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { StackedServiceCard } from "@/components/ui/StackedServiceCard";

export function StackedServicesDeck() {
  const { services } = servicesData;

  return (
    <section
      id="services-deck"
      aria-label="Stacked Services Deck"
      className="relative w-full bg-[#fdfdfd] pt-6 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-visible"
    >
      <div className="max-w-6xl mx-auto relative">
        {services.map((service, index) => (
          <StackedServiceCard
            key={service.id}
            service={service}
            index={index}
            total={services.length}
          />
        ))}
      </div>
    </section>
  );
}
