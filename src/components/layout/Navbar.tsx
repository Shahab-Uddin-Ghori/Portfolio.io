"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { HeroNavLink } from "@/data/hero";

interface NavbarProps {
  brandName: string;
  trademark: string;
  navLinks: HeroNavLink[];
}

export function Navbar({ brandName, trademark, navLinks }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="relative z-40 w-full px-6 sm:px-10 lg:px-14 pt-7 sm:pt-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-0.5 text-white font-bold text-lg sm:text-xl tracking-tight hover:opacity-90 transition-opacity select-none"
        >
          <span>{brandName}</span>
          <span className="text-xs -mt-2 font-normal">{trademark}</span>
        </Link>

        {/* Desktop Nav Items */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-medium text-white/80 tracking-normal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`transition-colors hover:text-white flex items-center gap-1 ${
                link.active
                  ? "text-white relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white"
                  : ""
              }`}
            >
              <span>{link.title}</span>
              {link.count && (
                <span className="text-[11px] text-white/60 font-normal">
                  ({link.count})
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* 2-Line Morphing Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="w-11 h-11 relative flex flex-col justify-center items-end gap-[7px] cursor-pointer bg-transparent border-0 p-1.5 z-60 group focus:outline-none"
        >
          <span
            className={`h-[2px] bg-white rounded-full transition-all duration-300 transform-origin-center ${
              isMenuOpen
                ? "w-[26px] translate-y-[4.5px] rotate-45"
                : "w-[30px] group-hover:w-[32px]"
            }`}
          />
          <span
            className={`h-[2px] bg-white rounded-full transition-all duration-300 transform-origin-center ${
              isMenuOpen
                ? "w-[26px] -translate-y-[4.5px] -rotate-45"
                : "w-[30px] group-hover:w-[22px]"
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#0d0705]/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center gap-8 text-2xl font-bold text-white transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            onClick={closeMenu}
            className="hover:text-orange-500 transition-colors flex items-center gap-2"
          >
            <span>{link.title}</span>
            {link.count && (
              <span className="text-sm font-normal text-white/50">
                ({link.count})
              </span>
            )}
          </Link>
        ))}

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 text-sm font-normal text-white/60">
          <span>Available for select projects</span>
          <a
            href="#contact"
            onClick={closeMenu}
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors text-xs"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}
