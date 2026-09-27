import React from "react";

interface CornerBracketCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * CornerBracketCard wraps content with 4 architectural corner bracket ticks [ ]
 * matching the precision design of Section 2.
 */
export function CornerBracketCard({ children, className = "" }: CornerBracketCardProps) {
  return (
    <div className={`bracket-container p-2.5 ${className}`}>
      <span className="bracket-tl" aria-hidden="true" />
      <span className="bracket-tr" aria-hidden="true" />
      <span className="bracket-bl" aria-hidden="true" />
      <span className="bracket-br" aria-hidden="true" />
      {children}
    </div>
  );
}
