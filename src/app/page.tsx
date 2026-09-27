import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-hidden bg-[#fdfdfd]">
      {/* SECTION 1: HERO CANVAS - STICKY FULL-VIEWPORT PIN (Zero peek of Section 2) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-0 overflow-hidden z-10 bg-[#090403] bg-[url('/images/outer-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/25 pointer-events-none z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <HeroSection />
        </div>
      </div>

      {/* SECTION 2: TRUSTED BRANDS & IMPACT (Physically slides UP and OVER Section 1) */}
      <ImpactSection />

      {/* SECTION 3: DYNAMIC SERVICES DIRECTORY */}
      <ServicesSection />

      {/* SECTION 4: OUR PROJECTS (PORTFOLIO GALLERY) */}
      <ProjectsSection />

      {/* SECTION 5: DESIGN PROCESS THAT WORKS (METHODOLOGY) */}
      <ProcessSection />

      {/* SECTION 6: WHY CHOOSE ME (FOCUSED ON DESIGN THAT DELIVERS RESULTS) */}
      <WhyChooseSection />

      {/* SECTION 7: WHAT MY CLIENTS SAY (TESTIMONIALS MARQUEE) */}
      <TestimonialsSection />
    </main>
  );
}
