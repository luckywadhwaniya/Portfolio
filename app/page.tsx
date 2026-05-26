"use client";

import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ConnectSection from "@/components/ConnectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollOverview from "@/components/ScrollOverview";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* Particle canvas background */}
      <ParticleBackground />

      {/* Scroll overview overlay */}
      <ScrollOverview />

      {/* Navigation */}
      <Navbar />

      {/* Main sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ConnectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
