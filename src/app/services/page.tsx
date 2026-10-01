import type { Metadata } from "next";
import { constructMetadata } from "@/config/seo";
import { Header } from "@/components/layout/Header";
import { ServicesPinnedSection } from "@/components/sections/services/ServicesPinnedSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/about/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = constructMetadata({
  title: "Our Services | Michael Portfolio",
  description:
    "Explore our powerful design and engineering services: UI/UX Design, Mobile App Design, Product Strategy, Workflow Automation, and Brand Identity.",
});

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-clip bg-[#fdfdfd]">
      {/* 1. TOP HEADER BANNER (ORANGE THEME MATCHING SCREENSHOT 1) */}
      <Header theme="orange" />

      {/* 2. PINNED SERVICES PRESENTATION STAGE (EXACT MATCH TO PIC 1 & PIC 2) */}
      <ServicesPinnedSection />

      {/* 3. DESIGN PROCESS THAT WORKS (METHODOLOGY) */}
      <ProcessSection />

      {/* 4. FREQUENT QUESTIONS (FAQ ACCORDION) */}
      <FaqSection />

      {/* 5. WORKING CONTACT FORM */}
      <ContactSection />

      {/* 6. SITE FOOTER */}
      <Footer />
    </main>
  );
}
