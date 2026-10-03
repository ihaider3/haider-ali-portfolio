import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";
import { CinematicSection } from "@/components/CinematicSection";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col">
      {/* 01 — HERO: Meet Haider Ali */}
      <CinematicSection id="hero-wrapper">
        <HeroSection />
      </CinematicSection>

      {/* 02 — ABOUT: Strategy & Mind Behind MH Marketing */}
      <CinematicSection id="about-wrapper">
        <AboutSection />
      </CinematicSection>

      {/* 03 — SERVICES: Digital Marketing Built Around Growth */}
      <CinematicSection id="services-wrapper">
        <ServicesSection />
      </CinematicSection>

      {/* 04 — SELECTED WORK: 10 Verified Client Projects */}
      <CinematicSection id="projects-wrapper">
        <ProjectShowcase />
      </CinematicSection>

      {/* 05 — CERTIFICATES: Verified Credentials */}
      <CinematicSection id="certificates-wrapper">
        <CertificatesSection />
      </CinematicSection>

      {/* 06 — SOCIAL PROOF: Real Facebook Feedback & Reviews */}
      <CinematicSection id="reviews-wrapper">
        <ReviewsSection />
      </CinematicSection>

      {/* 07 — CONTACT: Start a Project & 1-Line Social Connection Box */}
      <CinematicSection id="contact-wrapper">
        <ContactSection />
      </CinematicSection>
    </main>
  );
}
