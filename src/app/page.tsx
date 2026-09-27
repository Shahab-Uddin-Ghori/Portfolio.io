import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-0 overflow-hidden relative bg-[#090403] bg-[url('/images/outer-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Subtle outer darkening overlay to keep focus sharp on the hero */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-0" />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <HeroSection />
      </div>
    </main>
  );
}
