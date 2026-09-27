"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ContactCardProps {
  tagline?: string;
  name: string;
  role: string;
  avatar: string;
  className?: string;
}

export function ContactCard({
  tagline = "Let's Talk",
  name,
  role,
  avatar,
  className = "",
}: ContactCardProps) {
  const [toastVisible, setToastVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2400);
    }
  };

  return (
    <>
      <div
        className={`floating-card relative bg-[#121214]/90 backdrop-blur-md border border-white/10 rounded-[18px] sm:rounded-[20px] p-2.5 sm:p-3 shadow-[0_20px_45px_rgba(0,0,0,0.55)] flex items-center justify-between gap-3 sm:gap-4 max-w-[280px] sm:max-w-[295px] w-full select-none ${className}`}
      >
        {/* Subtle Asterisk Symbol on Top-Right matching reference photo */}
        <span
          aria-hidden="true"
          className="absolute top-2.5 right-3 text-white/35 text-[11px] font-light pointer-events-none"
        >
          ✱
        </span>

        {/* Left: Thumbnail Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-[11px] overflow-hidden bg-neutral-800 flex-shrink-0 border border-white/15">
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="48px"
              className="object-cover object-top"
            />
          </div>

          {/* Center: Details */}
          <div>
            <span className="block text-[10px] text-white/50 font-medium tracking-wide uppercase leading-none mb-1">
              {tagline}
            </span>
            <h4 className="text-xs sm:text-[13px] font-bold text-white leading-tight">
              {name}
            </h4>
            <p className="text-[10px] text-white/60 font-normal leading-tight mt-0.5">
              {role}
            </p>
          </div>
        </div>

        {/* Right: Interactive Arrow Button */}
        <button
          onClick={handleClick}
          aria-label={`Contact ${name}`}
          className="w-9 h-9 rounded-[10px] bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-transform active:scale-95 group flex-shrink-0 cursor-pointer shadow-sm mt-3"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H9M17 7V15"
            />
          </svg>
        </button>
      </div>

      {/* Floating In-App Interactive Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-black/85 backdrop-blur-md text-white text-xs py-2.5 px-5 rounded-full border border-white/15 transition-all duration-300 shadow-2xl flex items-center gap-2 pointer-events-none ${
          toastVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Connecting to {name}&apos;s contact channel...</span>
      </div>
    </>
  );
}
