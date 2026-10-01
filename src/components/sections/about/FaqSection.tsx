"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import { SlideInView } from "@/components/ui/SlideInView";

export function FaqSection() {
  // First item open by default (or allow multiple toggles)
  const [openId, setOpenId] = useState<string | null>("faq-01");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="deck-section min-h-screen w-full bg-[#fafafa] text-[#111111] py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80 z-50 shadow-[0_-30px_70px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-16 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: BADGE + GIANT 2-LINE HEADLINE                                */}
          {/* ========================================================================= */}
          <div className="lg:sticky lg:top-28 flex flex-col items-start">
            {/* Tagline Pill */}
            <SlideInView direction="up" distance="30px" delay={0.05}>
              <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3.5 py-1.5 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-6">
                <span className="text-orange-600 text-xs">✱</span>
                <span>{faqData.tagline}</span>
              </div>
            </SlideInView>

            {/* Giant Heading */}
            <SlideInView direction="up" distance="40px" delay={0.12}>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.96] font-sans text-neutral-950 select-none">
                <span>{faqData.headline.line1}</span>
                <br />
                <span>{faqData.headline.line2}</span>
              </h2>
            </SlideInView>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: ACCORDION LIST OF N FAQ CARDS                                */}
          {/* ========================================================================= */}
          <div className="space-y-3.5 sm:space-y-4 w-full">
            {faqData.faqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <SlideInView
                  key={faq.id}
                  direction="up"
                  distance="30px"
                  delay={0.1 + index * 0.06}
                >
                  <div
                    onClick={() => toggleFaq(faq.id)}
                    className={`bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border transition-all duration-300 cursor-pointer select-none ${
                      isOpen
                        ? "border-neutral-300/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                        : "border-neutral-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-neutral-300"
                    }`}
                  >
                    {/* Header Row: Question + Toggle Button */}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-neutral-950 flex items-center gap-2 leading-snug">
                        <span>{faq.number}</span>
                        <span>{faq.question}</span>
                      </h3>

                      {/* Plus / Minus Indicator Icon */}
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-neutral-800 transition-transform duration-300 focus:outline-none"
                      >
                        {isOpen ? (
                          <svg
                            className="w-5 h-5 text-neutral-900"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-neutral-700"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Expandable Accordion Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-neutral-100/90"
                          : "grid-rows-[0fr] opacity-0 mt-0 pt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </SlideInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
