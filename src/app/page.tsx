import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { WhatIDo } from "@/components/WhatIDo";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { TerminalSimulator } from "@/components/TerminalSimulator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D18]">
      <Navigation />
      <Hero />
      <ImpactDashboard />
      <WhatIDo />
      <ExperienceTimeline />
      <Projects />
      <TerminalSimulator />
      <ContactSection />
      <Footer />
    </main>
  );
}
