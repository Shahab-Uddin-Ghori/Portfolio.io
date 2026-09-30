"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * Footer component implements the full-viewport height editorial layout:
 * 1. min-h-screen: Occupies the full viewport height at the bottom of the page,
 *    ensuring zero bleed/peek from previous dark sections.
 * 2. Manifesto statement + phone & email contact info
 * 3. Interactive newsletter subscription card
 * 4. 2-column navigation directory & social links
 * 5. Giant bold typography wordmark "Michael ®"
 */
export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;
    setIsSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className="deck-section min-h-screen w-full flex flex-col justify-between bg-[#fdfdfd] pt-14 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 z-[110] shadow-[0_-30px_70px_rgba(0,0,0,0.2)] border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col justify-between">
        {/* ========================================================================= */}
        {/* TOP ROW: MANIFESTO & CONTACT (LEFT) + NEWSLETTER BOX (RIGHT)              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start pt-4 sm:pt-6 mb-10 sm:mb-14">
          {/* Left Column: Manifesto & Direct Contacts */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-neutral-700 text-sm sm:text-base font-semibold leading-relaxed max-w-lg mb-8">
              Focused on crafting clean and intuitive experiences that blend creativity, usability, and functionality to help brands connect better their users.
            </p>

            <div className="space-y-1">
              <a
                href="tel:+12025550149"
                className="block text-xs font-semibold text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                +1 (202) 555-0149
              </a>
              <a
                href="mailto:info@portfoliob.com"
                className="block text-sm sm:text-base font-bold text-neutral-950 hover:text-[#f97316] transition-colors"
              >
                info@portfoliob.com
              </a>
            </div>
          </div>

          {/* Right Column: Newsletter Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] max-w-sm w-full lg:ml-auto">
            <h4 className="text-sm font-bold text-neutral-950 mb-3">Newsletter</h4>

            {isSubscribed ? (
              <div className="py-4 text-center">
                <span className="text-xs font-bold text-emerald-600 block mb-1">
                  ✓ Subscribed Successfully
                </span>
                <p className="text-[11px] text-neutral-500">
                  Thank you for joining my design dispatch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="jane@framer.com"
                  className="w-full bg-neutral-100/90 rounded-xl px-4 py-3 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl hover:bg-black transition-colors cursor-pointer"
                >
                  YOUR MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ROW: NAVIGATION DIRECTORY (LEFT) + GIANT MICHAEL ® (RIGHT)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-end pt-10 sm:pt-14 border-t border-neutral-100">
          {/* Left Column: 2 Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-14 max-w-sm">
            {/* Nav Column 1 */}
            <div>
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Me", href: "/about" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "Contact", href: "/contact" },
                  { label: "404", href: "/not-found" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-semibold text-neutral-900 hover:text-[#f97316] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Column 2: Socials with Arrow */}
            <div>
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5">
                {[
                  { label: "Dribbble", href: "https://dribbble.com" },
                  { label: "Behance", href: "https://behance.net" },
                  { label: "Linkedin", href: "https://linkedin.com" },
                  { label: "Instagram", href: "https://instagram.com" },
                ].map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-[#f97316] transition-colors group"
                    >
                      <span>{social.label}</span>
                      <span className="text-xs text-neutral-400 group-hover:text-[#f97316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Giant Brand Name Wordmark "Michael ®" */}
          <div className="flex justify-start lg:justify-end select-none">
            <span className="text-6xl sm:text-8xl md:text-9xl font-black text-neutral-950 tracking-tighter leading-none inline-flex items-start">
              Michael
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-950 ml-1 mt-1">
                ®
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
