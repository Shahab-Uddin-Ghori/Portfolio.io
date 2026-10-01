"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutData } from "@/data/about";
import { SlideInView } from "@/components/ui/SlideInView";

export function CareerJourneySection() {
  const { careerJourney } = aboutData;
  const sectionRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsOpen(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.65) {
          // Re-fold into book shape when scrolled back above
          setIsOpen(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="career-journey"
      aria-label="Career Journey"
      className="deck-section min-h-screen w-full bg-[#fdfdfd] text-[#111111] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80 z-40 shadow-[0_-30px_70px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Block */}
        <div className="mb-8 sm:mb-10">
          {/* Tagline Pill */}
          <SlideInView direction="up" distance="30px" delay={0.05}>
            <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3.5 py-1.5 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-4">
              <span className="text-orange-600 text-xs">✱</span>
              <span>{careerJourney.tagline}</span>
            </div>
          </SlideInView>

          {/* Giant Editorial Heading */}
          <SlideInView direction="up" distance="40px" delay={0.12}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.94] select-none font-sans text-neutral-950">
              <span>{careerJourney.headline.line1}</span>
              <br />
              <span>{careerJourney.headline.line2Prefix}</span>
              <span className="text-neutral-500">{careerJourney.headline.line2Suffix}</span>
              <br />
              <span className="text-neutral-400">{careerJourney.headline.line3}</span>
            </h2>
          </SlideInView>
        </div>

        {/* 3D Book-Opening Interactive Showcase (Pic 5 Folded -> Pic 4 Flat Plane) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center perspective-[1600px]">
          {careerJourney.items.map((item, idx) => {
            const isLeft = idx === 0;

            const transformStyle = isLeft
              ? isOpen
                ? "perspective(1400px) rotateY(0deg) rotateX(0deg) scale(1)"
                : "perspective(1400px) rotateY(24deg) rotateX(4deg) scale(0.91)"
              : isOpen
              ? "perspective(1400px) rotateY(0deg) rotateX(0deg) scale(1)"
              : "perspective(1400px) rotateY(-24deg) rotateX(4deg) scale(0.91)";

            const originStyle = isLeft ? "right center" : "left center";
            const shadowStyle = isOpen
              ? "0 10px 30px rgba(0,0,0,0.06)"
              : isLeft
              ? "-14px 20px 40px rgba(0,0,0,0.18)"
              : "14px 20px 40px rgba(0,0,0,0.18)";

            return (
              <div
                key={item.id}
                className="group flex flex-col will-change-transform"
                style={{
                  transform: transformStyle,
                  transformOrigin: originStyle,
                  transition:
                    "transform 1100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 1100ms ease",
                }}
              >
                {/* Image Card Container */}
                <div
                  className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/90 transition-all duration-700 mb-4"
                  style={{ boxShadow: shadowStyle }}
                >
                  <Image
                    src={item.image}
                    alt={item.company}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Company & Period Badge Label (e.g. FRAMERDEVS _ [ 2021 - 2023 ]) */}
                <div className="flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-wider text-neutral-900">
                  <span className="text-neutral-950 font-black">{item.company}</span>
                  <span className="text-neutral-400">_</span>
                  <span className="text-neutral-600 font-mono">[ {item.period} ]</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
