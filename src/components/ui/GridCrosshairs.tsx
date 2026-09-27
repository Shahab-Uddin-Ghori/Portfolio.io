import React from "react";

/**
 * GridCrosshairs renders the architectural grid overlay and alignment crosses (+)
 * matching the precision layout of the reference hero design.
 */
export function GridCrosshairs() {
  return (
    <>
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 hero-grid pointer-events-none z-0" />

      {/* Top Crosshairs Row */}
      <span
        aria-hidden="true"
        className="absolute top-[8%] left-[4%] text-white/35 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[8%] left-[34%] text-white/35 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[8%] right-[34%] text-white/35 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[8%] right-[4%] text-white/35 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>

      {/* Upper-Middle Crosshairs Row */}
      <span
        aria-hidden="true"
        className="absolute top-[36%] left-[4%] text-white/40 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[36%] right-[4%] text-white/40 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>

      {/* Lower-Middle Crosshairs Row */}
      <span
        aria-hidden="true"
        className="absolute bottom-[33%] left-[4%] text-white/40 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-[33%] right-[4%] text-white/40 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>

      {/* Bottom Crosshairs Row */}
      <span
        aria-hidden="true"
        className="absolute bottom-[3%] left-[4%] text-white/35 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-[3%] right-[4%] text-white/35 text-xs sm:text-sm font-light select-none pointer-events-none z-10"
      >
        +
      </span>
    </>
  );
}
