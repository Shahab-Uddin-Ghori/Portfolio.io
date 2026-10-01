"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  theme?: "orange" | "dark" | "transparent";
}

export function Header({ theme = "orange" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Service", href: "/services" },
    { title: "Contact", href: "/#contact" },
  ];

  const headerBgClass =
    theme === "orange"
      ? "hero-canvas text-white border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      : theme === "dark"
      ? "bg-[#090403] text-white border-b border-white/10"
      : "bg-transparent text-neutral-900";

  return (
    <>
      <header
        className={`w-full px-6 sm:px-10 lg:px-14 py-4 sm:py-5 flex items-center justify-between transition-colors duration-300 relative z-50 overflow-hidden ${headerBgClass}`}
      >
        {/* Subtle Crosshairs for Orange Theme (No Grid Lines) */}
        {theme === "orange" && (
          <>
            <span
              aria-hidden="true"
              className="absolute top-2.5 left-6 sm:left-10 text-white/30 text-xs font-light select-none pointer-events-none z-10"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute top-2.5 left-1/3 text-white/18 text-xs font-light select-none pointer-events-none z-10 hidden sm:inline"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute top-2.5 right-1/3 text-white/18 text-xs font-light select-none pointer-events-none z-10 hidden sm:inline"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute top-2.5 right-6 sm:right-10 text-white/30 text-xs font-light select-none pointer-events-none z-10"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-6 sm:left-10 text-white/30 text-xs font-light select-none pointer-events-none z-10"
            >
              +
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-2 right-6 sm:right-10 text-white/30 text-xs font-light select-none pointer-events-none z-10"
            >
              +
            </span>
          </>
        )}

        {/* Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-0.5 font-bold text-lg sm:text-xl tracking-tight hover:opacity-90 transition-opacity select-none relative z-20"
        >
          <span>Portfoliob</span>
          <span className="text-xs -mt-2 font-normal">®</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Subpage Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-12 text-[13px] font-semibold tracking-normal relative z-20"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.title}
                href={link.href}
                className={`transition-opacity hover:opacity-100 ${
                  isActive ? "opacity-100 font-bold underline underline-offset-4" : "opacity-85"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        {/* 2-Line Hamburger Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="w-10 h-10 relative flex flex-col justify-center items-end gap-[6px] cursor-pointer bg-transparent border-0 p-1 z-60 group focus:outline-none"
        >
          <span
            className={`h-[2px] bg-white rounded-full transition-all duration-300 transform-origin-center ${
              isMenuOpen ? "w-[24px] translate-y-[4px] rotate-45" : "w-[28px] group-hover:w-[30px]"
            }`}
          />
          <span
            className={`h-[2px] bg-white rounded-full transition-all duration-300 transform-origin-center ${
              isMenuOpen ? "w-[24px] -translate-y-[4px] -rotate-45" : "w-[28px] group-hover:w-[20px]"
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#0d0705]/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center gap-8 text-2xl font-bold text-white transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            onClick={closeMenu}
            className="hover:text-orange-500 transition-colors"
          >
            {link.title}
          </Link>
        ))}

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 text-sm font-normal text-white/60">
          <span>Available for select projects</span>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors text-xs"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </>
  );
}
