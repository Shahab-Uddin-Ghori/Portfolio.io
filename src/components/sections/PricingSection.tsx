"use client";

import React, { useState } from "react";
import { pricingData } from "@/data/pricing";

/**
 * PricingSection renders the "SIMPLE PLANS FOR EVERY NEED" pricing block
 * with interactive toggle between MONTHLY and PROJECT BASED modes.
 */
export function PricingSection() {
  const [activePlan, setActivePlan] = useState<"monthly" | "project">("monthly");
  const plan = pricingData.plans[activePlan];

  return (
    <section
      id="pricing"
      aria-label="Pricing Plans"
      className="relative w-full bg-[#fafafa] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-100/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ========================================================================= */}
        {/* HEADER: BADGE + TITLE + TOGGLE SWITCH (MONTHLY / PROJECT BASED)           */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16">
          {/* Left Column: Badge + 2-Line Headline */}
          <div className="flex flex-col items-start gap-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200/70 shadow-2xs">
              <span className="text-[#f97316] font-bold text-sm leading-none">✱</span>
              <span className="text-[11px] font-bold tracking-widest text-neutral-800 uppercase">
                {pricingData.tagline}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[1.02] select-none">
              <span className="block text-neutral-950">
                {pricingData.headline.line1}
              </span>
              <span className="block text-neutral-400">
                {pricingData.headline.line2}
              </span>
            </h2>
          </div>

          {/* Right Column: Toggle Switch */}
          <div className="inline-flex items-center bg-neutral-100 border border-neutral-200/70 p-1 rounded-xl shadow-2xs self-start md:self-end">
            <button
              type="button"
              onClick={() => setActivePlan("monthly")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activePlan === "monthly"
                  ? "bg-neutral-950 text-white shadow-xs"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              MONTHLY
            </button>
            <button
              type="button"
              onClick={() => setActivePlan("project")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activePlan === "project"
                  ? "bg-neutral-950 text-white shadow-xs"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              PROJECT BASED
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARDS CONTAINER: 2 CONNECTED DARK CARDS WITH RESPONSIVE LAYOUT           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-6 items-stretch">
          {/* --------------------------------------------------------------------- */}
          {/* LEFT CARD: PACKAGE TITLE & SPECS TABLE                                */}
          {/* --------------------------------------------------------------------- */}
          <div className="bg-[#121212] rounded-3xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between shadow-xl min-h-[440px] sm:min-h-[460px]">
            <div>
              {/* Package Tag */}
              <div className="inline-block px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white/90 text-[10px] font-bold tracking-widest uppercase mb-4">
                {plan.packageTag}
              </div>

              {/* Package Title */}
              <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight leading-tight transition-all duration-300">
                {plan.packageName}
              </h3>
            </div>

            {/* Bottom Specs Table */}
            <div className="divide-y divide-white/10 mt-10">
              {plan.specs.map((spec, i) => (
                <div
                  key={i}
                  className="py-3.5 flex items-center justify-between text-xs transition-opacity duration-300"
                >
                  <span className="flex items-center gap-2 text-neutral-400 font-semibold tracking-wider uppercase">
                    {spec.icon === "clock" && (
                      <svg
                        className="w-3.5 h-3.5 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    )}
                    {spec.icon === "refresh" && (
                      <svg
                        className="w-3.5 h-3.5 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                    )}
                    {spec.icon === "folder" && (
                      <svg
                        className="w-3.5 h-3.5 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    )}
                    <span>{spec.label}</span>
                  </span>
                  <span className="text-white font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT CARD: PRICE, GUARANTEE, CTA & FEATURE CHECKLIST                 */}
          {/* --------------------------------------------------------------------- */}
          <div className="bg-[#121212] rounded-3xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between shadow-xl min-h-[440px] sm:min-h-[460px]">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 items-start">
              {/* Left Sub-Column: Price, Guarantee & CTA */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Payment Tag */}
                  <div className="inline-block px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white/90 text-[10px] font-bold tracking-widest uppercase mb-4">
                    {plan.paymentTag}
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-white font-black text-5xl sm:text-6xl tracking-tight transition-all duration-300">
                      {plan.price}
                    </span>
                    <span className="text-neutral-400 text-sm font-semibold">
                      {plan.period}
                    </span>
                  </div>

                  {/* Satisfaction Guarantee */}
                  <div className="mb-8">
                    <div className="w-6 h-6 flex items-center justify-center -ml-0.5 mb-2">
                      <svg
                        className="w-5 h-5 text-[#f97316] fill-[#f97316]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13 2L3 14h7v8l11-12h-8l0-8z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                      {plan.guarantee.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed max-w-[280px]">
                      {plan.guarantee.description}
                    </p>
                  </div>
                </div>

                {/* White CTA Button with Orange Arrow Box */}
                <a
                  href="#contact"
                  className="w-full bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl flex items-center justify-between group hover:bg-neutral-100 transition-all shadow-sm cursor-pointer select-none"
                >
                  <span>{plan.ctaText}</span>
                  <div className="w-8 h-8 rounded-lg bg-[#f97316] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Right Sub-Column: Features Checklist with Orange Diagonal Arrows */}
              <div className="md:border-l md:border-white/10 md:pl-8 pt-2">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs sm:text-[13px] text-neutral-200 font-medium transition-opacity duration-300"
                    >
                      <span className="text-[#f97316] font-bold text-sm shrink-0 leading-none">
                        ↗
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
