import React from "react";
import Image from "next/image";
import type { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  aspectRatio?: string;
}

/**
 * ProjectCard renders the authentic Polaroid-style gallery card
 * with crisp white framing and dedicated grey metadata strip.
 */
export function ProjectCard({
  project,
  className = "",
  aspectRatio,
}: ProjectCardProps) {
  const aspectClass =
    aspectRatio ||
    (project.isWide
      ? "aspect-[16/9] sm:aspect-[2.15/1]"
      : "aspect-[4/5] sm:aspect-[1/1.08]");

  return (
    <article
      className={`bg-white p-3 sm:p-4 rounded-[4px] border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col ${className}`}
    >
      {/* Media Window with white border padding */}
      <div
        className={`relative w-full overflow-hidden rounded-[2px] bg-neutral-100 ${aspectClass}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes={
            project.isWide
              ? "(max-width: 1024px) 100vw, 1360px"
              : "(max-width: 768px) 100vw, 680px"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
        />
      </div>

      {/* Dedicated Grey Metadata Caption Strip (Exact match to reference screenshots) */}
      <div className="mt-3 sm:mt-3.5 bg-[#f0f0f0] group-hover:bg-[#e8e8e8] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[2px] flex items-center justify-between transition-colors duration-300">
        {/* Left: ✱ TITLE */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-[12.5px] font-bold uppercase tracking-wider text-neutral-800 group-hover:text-orange-600 transition-colors duration-300">
          <span className="text-orange-600 text-xs inline-block transition-transform duration-300 group-hover:rotate-90">
            ✱
          </span>
          <span>{project.title}</span>
        </div>

        {/* Right: /Category */}
        <span className="text-[10px] sm:text-[11.5px] font-medium text-neutral-500 tracking-wider">
          {project.category}
        </span>
      </div>
    </article>
  );
}
