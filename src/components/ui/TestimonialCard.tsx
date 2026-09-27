import React from "react";
import { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  item: TestimonialItem;
}

/**
 * TestimonialCard renders a single review card with alternating top/bottom
 * author positioning and orange stars, matching the reference designs.
 */
export function TestimonialCard({ item }: TestimonialCardProps) {
  const isAuthorTop = item.variant === "author-top";

  return (
    <div className="w-[320px] sm:w-[360px] md:w-[380px] h-[280px] sm:h-[300px] shrink-0 bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-md hover:border-neutral-300 transition-all duration-300">
      {isAuthorTop ? (
        <>
          {/* Author Row (Top) */}
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-11 h-11 rounded-xl object-cover border border-neutral-100 shadow-2xs shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm text-neutral-950 truncate">
                {item.name}
              </span>
              <span className="text-xs text-neutral-400 font-medium truncate mt-0.5">
                {item.role}
              </span>
            </div>
          </div>

          {/* Stars & Plus Icon */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex text-[#f97316] text-sm tracking-tight select-none">
              {"★★★★★"}
            </div>
            <span className="text-neutral-400 font-light text-base select-none leading-none">
              +
            </span>
          </div>

          {/* Quote (Bottom) */}
          <p className="text-xs sm:text-[13px] text-neutral-800 font-normal leading-relaxed line-clamp-4">
            &ldquo;{item.quote}&rdquo;
          </p>
        </>
      ) : (
        <>
          {/* Stars & Plus Icon (Top) */}
          <div className="flex items-center justify-between">
            <div className="flex text-[#f97316] text-sm tracking-tight select-none">
              {"★★★★★"}
            </div>
            <span className="text-neutral-400 font-light text-base select-none leading-none">
              +
            </span>
          </div>

          {/* Quote (Middle) */}
          <p className="text-xs sm:text-[13px] text-neutral-800 font-normal leading-relaxed line-clamp-4 my-auto">
            &ldquo;{item.quote}&rdquo;
          </p>

          {/* Author Row (Bottom) */}
          <div className="flex items-center gap-3 pt-2">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-11 h-11 rounded-xl object-cover border border-neutral-100 shadow-2xs shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm text-neutral-950 truncate">
                {item.name}
              </span>
              <span className="text-xs text-neutral-400 font-medium truncate mt-0.5">
                {item.role}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
