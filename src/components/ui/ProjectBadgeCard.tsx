import React from "react";
import Image from "next/image";

interface ProjectBadgeCardProps {
  title: string;
  category: string;
  image: string;
  symbol?: string;
  className?: string;
}

export function ProjectBadgeCard({
  title,
  category,
  image,
  symbol = "✱",
  className = "",
}: ProjectBadgeCardProps) {
  return (
    <div
      className={`floating-card bg-white rounded-[18px] sm:rounded-[20px] p-2.5 sm:p-3 shadow-[0_24px_45px_rgba(0,0,0,0.35)] w-[160px] sm:w-[190px] select-none ${className}`}
    >
      {/* Square Project Preview Image */}
      <div className="relative w-full aspect-square rounded-[12px] overflow-hidden bg-neutral-100 mb-2.5 shadow-inner">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 160px, 190px"
          className="object-cover"
          priority
        />
      </div>

      {/* Card Footer Info */}
      <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] px-1">
        <span className="flex items-center gap-1 font-bold text-neutral-900 tracking-tight">
          <span className="text-xs text-neutral-800">{symbol}</span>
          <span>{title}</span>
        </span>
        <span className="text-neutral-400 font-medium text-[10px] sm:text-[10.5px]">
          {category}
        </span>
      </div>
    </div>
  );
}
