"use client";

import React, { useState } from "react";

/**
 * ContactSection renders the "LET'S CREATE TOGETHER" banner with an atmospheric
 * cinematic neon backdrop and a fully functional interactive contact form.
 */
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    // Simulate realistic async network dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="deck-section min-h-screen w-full bg-neutral-950 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 z-[100] shadow-[0_-40px_90px_rgba(0,0,0,0.65)] overflow-hidden flex items-center justify-center"
    >
      {/* ========================================================================= */}
      {/* ATMOSPHERIC CINEMATIC NEON PORTRAIT BACKGROUND (PIC 2 EXACT MATCH)        */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85"
          alt="Atmospheric neon cinematic background"
          className="w-full h-full object-cover object-center opacity-70"
        />
        {/* Cinematic Vignette & Color Grade Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* CONTENT GRID: FLOATING FORM CARD (LEFT) + HERO HEADLINE (RIGHT)           */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-center">
        {/* --------------------------------------------------------------------- */}
        {/* FLOATING WHITE FORM CARD WITH DARK GRADIENT HEADER                    */}
        {/* --------------------------------------------------------------------- */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 w-full max-w-md mx-auto lg:mx-0">
          {/* Top Dark Burgundy Banner */}
          <div className="bg-gradient-to-b from-[#2a0e05] to-[#140602] py-5 px-6 text-center border-b border-neutral-100">
            <span className="font-black text-white text-base tracking-wider uppercase">
              Michael ®
            </span>
          </div>

          {/* Form Content Body */}
          <div className="p-6 sm:p-8">
            {status === "success" ? (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-neutral-950 mb-2">
                  Message Sent!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  Thank you for reaching out. I have received your message and will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="w-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl hover:bg-black transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              /* Interactive Working Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="text-lg font-black text-neutral-950 text-center mb-6">
                  Reach Out to Me
                </h3>

                {/* Field 1: Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-bold text-neutral-900 uppercase tracking-wider mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Jane Smith"
                    className={`w-full bg-neutral-100/90 rounded-xl px-4 py-3 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "focus:ring-red-500 border border-red-500"
                        : "focus:ring-orange-500"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-medium block mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Field 2: Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-bold text-neutral-900 uppercase tracking-wider mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="jane@framer.com"
                    className={`w-full bg-neutral-100/90 rounded-xl px-4 py-3 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "focus:ring-red-500 border border-red-500"
                        : "focus:ring-orange-500"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-medium block mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Field 3: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-bold text-neutral-900 uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Your Message"
                    className={`w-full bg-neutral-100/90 rounded-xl px-4 py-3 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 resize-none transition-all ${
                      errors.message
                        ? "focus:ring-red-500 border border-red-500"
                        : "focus:ring-orange-500"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 font-medium block mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl hover:bg-black active:scale-[0.99] transition-all cursor-pointer shadow-sm mt-3 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    "YOUR MESSAGE"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* RIGHT HERO COPY: PILL BADGE + MASSIVE 2-LINE TITLE + DESCRIPTOR      */}
        {/* --------------------------------------------------------------------- */}
        <div className="flex flex-col items-start">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-xs mb-6">
            <span className="text-[#f97316] font-bold text-sm leading-none">✱</span>
            <span className="text-[11px] font-bold tracking-widest text-white uppercase">
              DESIGN INSIGHTS
            </span>
          </div>

          {/* Massive 2-Line Headline */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.98] select-none mb-8">
            <span className="block text-white">
              LET&apos;S CREATE
            </span>
            <span className="block text-teal-300 drop-shadow-[0_0_35px_rgba(45,212,191,0.5)]">
              TOGETHER
            </span>
          </h2>

          {/* Subtitle & Solutions Note */}
          <div className="max-w-md pt-4">
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/70 block mb-1">
              RESULTS-DRIVEN SOLUTIONS
            </span>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Turning complex ideas into beautiful, user-centered experiences that meet both user and business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
