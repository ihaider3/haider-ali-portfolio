import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { LogoAnimationIntro } from "@/components/LogoAnimationIntro";

export default function Home() {
  return (
    <>
      {/* 00 — LOGO ANIMATION INTRO: Plays 3-4s on visit, then smoothly reveals portfolio */}
      <LogoAnimationIntro />

      <main className="w-full relative flex flex-col">
        {/* 01 — HERO: Meet Haider Ali */}
        <HeroSection />

      {/* 02 — ABOUT: Strategy & Mind Behind MH Marketing */}
      <AboutSection />

      {/* 03 — SERVICES: Digital Marketing Built Around Growth */}
      <ServicesSection />

      {/* 04 — SELECTED WORK: 10 Verified Client Projects */}
      <ProjectShowcase />

      {/* 05 — CERTIFICATES: Verified Credentials */}
      <CertificatesSection />

      {/* 06 — SOCIAL PROOF: Real Facebook Feedback & Reviews */}
      <ReviewsSection />

      {/* 07 — CONTACT: Start a Project & 1-Line Social Connection Box */}
      <ContactSection />
    </main>
  </>
  );
}
