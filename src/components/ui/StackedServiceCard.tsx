"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/data/services";

interface StackedServiceCardProps {
  service: ServiceItem;
  index: number;
  total: number;
}

export function StackedServiceCard({ service, index }: StackedServiceCardProps) {
  // Ascending z-index so every subsequent card slides over the previous pinned card
  const zIndex = 10 + index * 10;

  return (
    <div
      style={{
        zIndex,
        top: "80px",
      }}
      className="sticky w-full bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_-25px_60px_rgba(0,0,0,0.12)] mb-20 sm:mb-28 min-h-[75vh] sm:min-h-[82vh] flex flex-col justify-between overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* TOP SECTION: NUMBER + GIANT TITLE (LEFT) & HEADLINE + BUTTON (RIGHT)       */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 lg:gap-14 items-start mb-8">
        {/* Left Column: Number + Title */}
        <div className="flex flex-col items-start">
          {/* Tagline / Number: ✱ 001 */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-neutral-800 uppercase mb-3">
            <span className="text-[#ea580c] font-bold text-sm leading-none">✱</span>
            <span>{service.number}</span>
          </div>

          {/* Giant Title: e.g. UI/UX DESIGN / PRODUCT DESIGN (Orange font matching screenshots) */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#ea580c] leading-[0.94] select-none font-sans">
            {service.title}
          </h2>
        </div>

        {/* Right Column: Big Editorial Headline + VIEW PROJECT Button */}
        <div className="flex flex-col items-start">
          <p className="text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-snug mb-6 max-w-2xl select-none">
            {service.headline}
          </p>

          {/* VIEW PROJECT Button with Orange Arrow Box */}
          <Link
            href={service.buttonHref || "/#projects"}
            className="group inline-flex items-center rounded-sm bg-[#e8e8e8] hover:bg-neutral-300 transition-colors pl-4 pr-1.5 py-1.5 shadow-2xs cursor-pointer"
          >
            <span className="text-xs font-black uppercase tracking-wider text-neutral-900 mr-3">
              {service.buttonText}
            </span>
            <span className="w-7 h-7 rounded-xs bg-[#ea580c] text-white flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM SECTION: IMAGE BANNER (LEFT) + SKILL PILL TAGS (RIGHT)              */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 lg:gap-14 items-end pt-4 border-t border-neutral-100">
        {/* Left Column: Image Preview */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/80 group">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        {/* Right Column: Skill Pills */}
        <div className="flex flex-wrap gap-2 lg:pb-2">
          {service.tags.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="bg-[#f2f2f2] hover:bg-neutral-900 hover:text-white text-neutral-800 text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-md transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
