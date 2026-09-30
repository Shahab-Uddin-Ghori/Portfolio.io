import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

/**
 * ProjectsSection renders the refined editorial gallery:
 * 1. Balanced viewport heights: Cards never overflow the screen.
 * 2. Visual hierarchy: Header + ZENTIX (left), LUMIO (right) fit in a single view.
 * 3. ARKEO: Cinematic letterbox landscape banner.
 * 4. NOVU & PULSE + ALL PROJECTS button: Compact and clean.
 */
export function ProjectsSection() {
  const [zentix, lumio, arkeo, novu, pulse] = projectsData.projects;

  return (
    <section
      id="projects"
      aria-label="Our Projects"
      className="deck-section z-40 w-full bg-[#fdfdfd] text-[#111111] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80 shadow-[0_-30px_70px_rgba(0,0,0,0.18)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ========================================================================= */}
        {/* ROW 1: ASYMMETRICAL EDITORIAL (HEADER + ZENTIX ON LEFT, LUMIO ON RIGHT)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          {/* Left Column: Tagline + Heading + ZENTIX */}
          <div className="flex flex-col">
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-1.5 bg-[#f0eae1] px-3 py-1 rounded-sm text-[10.5px] font-bold tracking-widest text-neutral-800 uppercase mb-4 self-start">
              <span className="text-[#ea580c] text-xs">✱</span>
              <span>{projectsData.tagline}</span>
            </div>

            {/* Giant Heading */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.92] uppercase text-neutral-950 mb-8 sm:mb-10 select-none">
              {projectsData.headline.line1}
              <br />
              {projectsData.headline.line2}
            </h2>

            {/* Project 1: ZENTIX */}
            {zentix && (
              <ProjectCard
                project={zentix}
                imageHeight="h-[260px] sm:h-[300px] md:h-[320px]"
              />
            )}
          </div>

          {/* Right Column: Project 2: LUMIO (Tastefully offset) */}
          <div className="flex flex-col md:pt-14 lg:pt-16">
            {lumio && (
              <ProjectCard
                project={lumio}
                imageHeight="h-[300px] sm:h-[360px] md:h-[390px]"
              />
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: ARKEO (CINEMATIC LETTERBOX PANORAMIC BANNER)                       */}
        {/* ========================================================================= */}
        {arkeo && (
          <div className="mb-12 sm:mb-16">
            <ProjectCard
              project={arkeo}
              isWide
              imageHeight="h-[240px] sm:h-[300px] md:h-[340px]"
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* ROW 3: ASYMMETRICAL LOWER ROW (NOVU ON LEFT, PULSE ON RIGHT)               */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left Column: NOVU + ALL PROJECTS CTA Button */}
          <div className="flex flex-col">
            {novu && (
              <ProjectCard
                project={novu}
                imageHeight="h-[260px] sm:h-[300px] md:h-[320px]"
              />
            )}

            {/* ALL PROJECTS ↗ button directly below NOVU as in reference */}
            <div className="mt-8 sm:mt-10">
              <Link
                href={projectsData.ctaLink}
                className="inline-flex items-center rounded-[3px] overflow-hidden border border-neutral-300 shadow-2xs hover:shadow-md transition-all group"
              >
                <span className="w-1 self-stretch bg-[#ea580c]" />
                <span className="px-6 py-3.5 bg-[#f2f2f2] group-hover:bg-[#e8e8e8] text-[11px] font-bold tracking-widest uppercase text-neutral-800 transition-colors">
                  {projectsData.ctaText}
                </span>
                <span className="w-11 h-11 bg-[#ea580c] flex items-center justify-center text-white transition-colors group-hover:bg-orange-500">
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
              </Link>
            </div>
          </div>

          {/* Right Column: PULSE */}
          <div className="flex flex-col md:pt-10">
            {pulse && (
              <ProjectCard
                project={pulse}
                imageHeight="h-[290px] sm:h-[340px] md:h-[370px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
