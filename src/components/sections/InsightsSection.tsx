import React from "react";
import Link from "next/link";
import { insightsData } from "@/data/insights";

/**
 * InsightsSection renders the "LATEST DESIGN INSIGHTS" blog editorial section
 * with a large featured card on the left and two complementary cards on the right.
 */
export function InsightsSection() {
  const { featuredArticle, recentArticles } = insightsData;

  return (
    <section
      id="insights"
      aria-label="Latest Design Insights"
      className="relative w-full bg-[#fafafa] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-100/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ========================================================================= */}
        {/* SECTION HEADER: BADGE + TITLE + RIGHT-ALIGNED SUMMARY                     */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16">
          {/* Left Column: Badge + 2-Line Headline */}
          <div className="flex flex-col items-start gap-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200/70 shadow-2xs">
              <span className="text-[#f97316] font-bold text-sm leading-none">✱</span>
              <span className="text-[11px] font-bold tracking-widest text-neutral-800 uppercase">
                {insightsData.tagline}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[1.02] select-none">
              <span className="block text-neutral-950">
                {insightsData.headline.line1}
              </span>
              <span className="block text-neutral-400">
                {insightsData.headline.line2}
              </span>
            </h2>
          </div>

          {/* Right Column: Descriptor */}
          <div className="max-w-xs sm:max-w-sm md:pb-2">
            <p className="text-xs sm:text-[13px] font-bold text-neutral-500 uppercase tracking-wider leading-relaxed">
              {insightsData.subtitle}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EDITORIAL ARTICLES GRID                                                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-end">
          {/* --------------------------------------------------------------------- */}
          {/* FEATURED LARGE CARD (LEFT)                                            */}
          {/* --------------------------------------------------------------------- */}
          <Link
            href={`/blogs/${featuredArticle.slug}`}
            className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] h-[460px] sm:h-[530px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300"
          >
            {/* Background Image with Hover Scale */}
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

            {/* Top Category Badge */}
            <div className="relative z-10 self-start">
              <span className="inline-block px-3 py-1 rounded-md bg-white/90 backdrop-blur-xs text-neutral-950 text-[10px] font-bold uppercase tracking-wider shadow-xs">
                {featuredArticle.category}
              </span>
            </div>

            {/* Bottom Content Info */}
            <div className="relative z-10">
              <span className="text-xs font-semibold text-white/70 block mb-2">
                {featuredArticle.date}
              </span>
              <h3 className="text-white font-black text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight mb-2 group-hover:text-neutral-100 transition-colors">
                {featuredArticle.title}
              </h3>
              {featuredArticle.excerpt && (
                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 max-w-md font-normal leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              )}
            </div>
          </Link>

          {/* --------------------------------------------------------------------- */}
          {/* TWO SIDE-BY-SIDE RECENT ARTICLES (RIGHT)                              */}
          {/* --------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blogs/${article.slug}`}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-2xs aspect-square mb-3.5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-neutral-950 text-[10px] font-bold tracking-wider shadow-2xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <span className="text-[11px] font-semibold text-neutral-400 block mb-1">
                  {article.date}
                </span>

                {/* Article Title */}
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
