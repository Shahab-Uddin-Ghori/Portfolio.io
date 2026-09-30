import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  imageHeight?: string;
  isWide?: boolean;
}

/**
 * ProjectCard renders the authentic Polaroid-style gallery card
 * with crisp white framing, calibrated responsive heights,
 * and dedicated grey metadata strip matching the original design.
 */
export function ProjectCard({
  project,
  className = "",
  imageHeight,
  isWide = false,
}: ProjectCardProps) {
  // Balanced default height so cards fit comfortably within viewport
  const heightClass =
    imageHeight ||
    (isWide || project.isWide
      ? "h-[240px] sm:h-[300px] md:h-[350px]"
      : "h-[280px] sm:h-[320px] md:h-[360px]");

  return (
    <Link
      href={project.link || `/projects/${project.id}`}
      className={`block bg-white p-3 sm:p-3.5 rounded-sm border border-neutral-200/90 shadow-[0_3px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group ${className}`}
    >
      {/* Media Window */}
      <div
        className={`relative w-full overflow-hidden rounded-[2px] bg-neutral-100 ${heightClass}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes={
            isWide || project.isWide
              ? "(max-width: 1024px) 100vw, 1150px"
              : "(max-width: 768px) 100vw, 560px"
          }
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
        />
      </div>

      {/* Dedicated Grey Metadata Caption Strip (Exact match to reference screenshots) */}
      <div className="mt-3 bg-[#f0f0f0] group-hover:bg-[#e8e8e8] px-3.5 py-2.5 rounded-[2px] flex items-center justify-between transition-colors duration-200">
        {/* Left: ✱ TITLE */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-800 group-hover:text-orange-600 transition-colors duration-200">
          <span className="text-[#ea580c] text-xs inline-block transition-transform duration-300 group-hover:rotate-90">
            ✱
          </span>
          <span>{project.title}</span>
        </div>

        {/* Right: /Category */}
        <span className="text-[10.5px] font-medium text-neutral-500 tracking-wider">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
