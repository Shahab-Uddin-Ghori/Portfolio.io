import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SlideInView } from "@/components/ui/SlideInView";

/**
 * ProjectsSection showcases the curated portfolio gallery
 * matching Screenshots 1-4 with asymmetrical editorial layout,
 * dual-column parallax float, and Polaroid gallery styling.
 */
export function ProjectsSection() {
  const [zentix, lumio, arkeo, novu, pulse] = projectsData.projects;

  return (
    <section
      id="work"
      aria-label="Our Projects"
      data-scroll-section
      className="relative z-20 w-full bg-[#fdfdfd] text-[#111111] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-t border-neutral-200 overflow-x-clip"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* SECTION TOP: ASYMMETRICAL DUAL-COLUMN (HEADER + ZENTIX ON LEFT, LUMIO ON RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 lg:mb-24">
          {/* Left Column: Tagline + Heading + ZENTIX Card directly below */}
          <div className="lg:col-span-6 flex flex-col" data-scroll data-scroll-speed="0.04">
            {/* Top Tagline: "✱ PORTFOLIO" */}
            <SlideInView direction="up" distance="30px" delay={0.05}>
              <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-8">
                <span className="text-orange-600 text-xs">✱</span>
                <span>{projectsData.tagline}</span>
              </div>
            </SlideInView>

            {/* Giant Heading: "OUR / PROJECTS." */}
            <SlideInView direction="up" distance="40px" delay={0.1}>
              <h2 className="text-[10vw] sm:text-[7vw] lg:text-[5.5vw] font-black tracking-tight leading-[0.92] uppercase font-sans text-neutral-950 mb-12 sm:mb-16">
                {projectsData.headline.line1}
                <br />
                {projectsData.headline.line2}
              </h2>
            </SlideInView>

            {/* Project 1: ZENTIX (Sits below heading on the left) */}
            {zentix && (
              <SlideInView direction="up" distance="50px" delay={0.15}>
                <ProjectCard project={zentix} />
              </SlideInView>
            )}
          </div>

          {/* Right Column: Project 2: LUMIO (Starts high beside the heading!) */}
          <div
            className="lg:col-span-6 lg:pt-8"
            data-scroll
            data-scroll-speed="-0.04"
          >
            {lumio && (
              <SlideInView direction="right" distance="60px" delay={0.15}>
                <ProjectCard project={lumio} />
              </SlideInView>
            )}
          </div>
        </div>

        {/* MIDDLE FEATURE: ARKEO (Massive Wide Cinematic Landscape Card) */}
        {arkeo && (
          <div className="mb-16 lg:mb-24" data-scroll data-scroll-speed="0.02">
            <SlideInView direction="up" distance="60px" delay={0.1}>
              <ProjectCard project={arkeo} />
            </SlideInView>
          </div>
        )}

        {/* LOWER SECTION: ASYMMETRICAL DUAL-COLUMN (NOVU ON LEFT, PULSE ON RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-20">
          {/* Left Column: NOVU */}
          <div className="lg:col-span-5" data-scroll data-scroll-speed="0.04">
            {novu && (
              <SlideInView direction="left" distance="60px" delay={0.1}>
                <ProjectCard project={novu} aspectRatio="aspect-square sm:aspect-[1/1.05]" />
              </SlideInView>
            )}
          </div>

          {/* Right Column: PULSE (Offset downwards for editorial stagger!) */}
          <div className="lg:col-span-7 lg:pt-14" data-scroll data-scroll-speed="-0.03">
            {pulse && (
              <SlideInView direction="right" distance="60px" delay={0.15}>
                <ProjectCard project={pulse} aspectRatio="aspect-[4/5] sm:aspect-[1/1.05]" />
              </SlideInView>
            )}
          </div>
        </div>

        {/* BOTTOM CTA: "ALL PROJECTS ↗" */}
        <div className="pt-4">
          <SlideInView direction="up" distance="30px" delay={0.1}>
            <a
              href={projectsData.ctaLink}
              className="inline-flex items-center rounded-[3px] overflow-hidden border border-neutral-300 shadow-sm hover:shadow-md transition-all group"
            >
              <span className="w-1 self-stretch bg-orange-600" />
              <span className="px-6 py-3.5 bg-[#f2f2f2] group-hover:bg-[#e8e8e8] text-[11px] font-bold tracking-widest uppercase text-neutral-800 transition-colors">
                {projectsData.ctaText}
              </span>
              <span className="w-11 h-11 bg-orange-600 flex items-center justify-center text-white transition-colors group-hover:bg-orange-500">
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              </span>
            </a>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}
