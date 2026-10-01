import type { Metadata } from "next";
import { constructMetadata } from "@/config/seo";
import { Header } from "@/components/layout/Header";
import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { AchievementsSection } from "@/components/sections/about/AchievementsSection";
import { CareerJourneySection } from "@/components/sections/about/CareerJourneySection";
import { FaqSection } from "@/components/sections/about/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Michael Portfolio",
  description:
    "Learn about our design philosophy, creative journey, honors, awards, frequently asked questions, and the purpose-driven experiences we engineer for modern companies.",
});

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden bg-[#fdfdfd]">
      {/* 1. TOP HEADER BANNER (ORANGE THEME MATCHING SCREENSHOT 1) */}
      <Header theme="orange" />

      {/* 2. ABOUT US HERO + INFINITE MOVING IMAGE MARQUEE */}
      <AboutHeroSection />

      {/* 3. FOCUSED ON DESIGN THAT DELIVERS RESULTS (WHY CHOOSE BENTO GRID) */}
      <WhyChooseSection />

      {/* 4. MICHAEL® ACHIEVEMENTS (HONORS & AWARDS DARK GRID) */}
      <AchievementsSection />

      {/* 5. CAREER JOURNEY (PURPOSE-DRIVEN EXPERIENCES FOR MODERN COMPANIES) */}
      <CareerJourneySection />

      {/* 6. FAQ (FREQUENT QUESTIONS ACCORDION) */}
      <FaqSection />

      {/* 7. CONTACT FORM (LET'S CREATE TOGETHER WITH WORKING FORM) */}
      <ContactSection />

      {/* 8. SITE FOOTER */}
      <Footer />
    </main>
  );
}
