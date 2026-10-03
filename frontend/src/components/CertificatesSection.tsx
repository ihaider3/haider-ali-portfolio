"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Calendar, Hash, ZoomIn, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { CERTIFICATES_LIST } from "../data/portfolioData";
import { CertificateLightbox } from "./CertificateLightbox";
import { Certificate } from "../types";
import { ScrollReveal } from "./ScrollReveal";

export const CertificatesSection: React.FC = () => {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  const activeCert = selectedCertIndex !== null ? CERTIFICATES_LIST[selectedCertIndex] : null;

  const handleNext = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex + 1) % CERTIFICATES_LIST.length);
    }
  };

  const handlePrev = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex(
        (selectedCertIndex - 1 + CERTIFICATES_LIST.length) % CERTIFICATES_LIST.length
      );
    }
  };

  return (
    <section
      id="certificates"
      aria-label="Professional Credentials and Certificates"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[700px] h-[550px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(30,64,175,0.12)_45%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header: Pill Badge + 1-Line Metallic Gold Title */}
        <ScrollReveal delay={0} className="text-center max-w-4xl mx-auto mb-14">
          {/* Section Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#050D20]/90 border border-[#D4AF37]/35 mb-3 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF4C2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] metallic-gold-text uppercase">
              CERTIFICATES
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase">
              Verified Qualifications &amp; Industry Credentials
            </span>
          </div>

          {/* 1 Single Line Section Title in Specular Metallic Gold */}
          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-tight whitespace-normal text-white">
            <span className="metallic-gold-heading">
              OFFICIALLY VERIFIED CREDENTIALS &amp; INDUSTRY CERTIFICATIONS
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Accredited government &amp; marketplace qualifications across Meta Ads, Social Media Sales, AI Workflows, and Creative Direction.
          </p>
        </ScrollReveal>

        {/* 
          CERTIFICATE EDITORIAL RHYTHM:
          - 01: Large Centered Feature Card (DigiSkills Digital Marketing)
          - 02 + 03: Two Side-by-Side Cards (DigiSkills Freelancing + DigiSkills AI using Python)
          - 04: Large Centered Feature Card (LWE Social Media Sales)
          - 05 + 06: Two Side-by-Side Cards (LWE Fiverr Freelancing + LWE Video Editing)
          - 07: Large Centered Feature Card (LWE Graphic Designing)
        */}
        <div className="space-y-10 w-full">
          {/* GROUP 1: Certificate 01 (Large Feature Card) */}
          <ScrollReveal delay={40} className="w-full">
            <LargeCertificateCard
              cert={CERTIFICATES_LIST[0]}
              onOpen={() => setSelectedCertIndex(0)}
            />
          </ScrollReveal>

          {/* GROUP 2: Certificates 02 + 03 (Two Side-by-Side) */}
          <ScrollReveal delay={80} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <MediumCertificateCard
              cert={CERTIFICATES_LIST[1]}
              onOpen={() => setSelectedCertIndex(1)}
            />
            <MediumCertificateCard
              cert={CERTIFICATES_LIST[2]}
              onOpen={() => setSelectedCertIndex(2)}
            />
          </ScrollReveal>

          {/* GROUP 3: Certificate 04 (Large Feature Card) */}
          <ScrollReveal delay={40} className="w-full">
            <LargeCertificateCard
              cert={CERTIFICATES_LIST[3]}
              onOpen={() => setSelectedCertIndex(3)}
            />
          </ScrollReveal>

          {/* GROUP 4: Certificates 05 + 06 (Two Side-by-Side) */}
          <ScrollReveal delay={80} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <MediumCertificateCard
              cert={CERTIFICATES_LIST[4]}
              onOpen={() => setSelectedCertIndex(4)}
            />
            <MediumCertificateCard
              cert={CERTIFICATES_LIST[5]}
              onOpen={() => setSelectedCertIndex(5)}
            />
          </ScrollReveal>

          {/* GROUP 5: Certificate 07 (Large Feature Card) */}
          <ScrollReveal delay={40} className="w-full">
            <LargeCertificateCard
              cert={CERTIFICATES_LIST[6]}
              onOpen={() => setSelectedCertIndex(6)}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificate={activeCert}
        onClose={() => setSelectedCertIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

interface CertCardProps {
  cert: Certificate;
  onOpen: () => void;
}

const LargeCertificateCard: React.FC<CertCardProps> = ({ cert, onOpen }) => {
  return (
    <div className="glass-blue-panel glass-blue-panel-hover rounded-3xl p-6 sm:p-9 border border-[#D4AF37]/35 relative overflow-hidden group w-full shadow-[0_15px_40px_rgba(2,6,18,0.9)] hover:border-[#FFF4C2] transition-all duration-300">
      {/* Top Metallic Gold Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F3CF7A] to-transparent group-hover:via-[#FFF4C2] transition-all" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Certificate Preview Image: Framed & 100% Uncropped */}
        <div
          onClick={onOpen}
          className="lg:col-span-6 relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#02050E] border-2 border-[#D4AF37]/45 cursor-pointer shadow-[0_12px_30px_rgba(0,0,0,0.85)] group/img p-2 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={cert.imageFilename}
              alt={cert.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-[1.02]"
            />
          </div>

          {/* Hover Zoom Overlay */}
          <div className="absolute inset-0 bg-[#020612]/75 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full metallic-gold-button flex items-center justify-center shadow-lg transform -translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-6 h-6 text-[#020612]" />
            </div>
            <span className="text-xs font-bold text-[#FFF4C2] tracking-wider uppercase drop-shadow-md">
              Inspect Certificate Fullscreen
            </span>
          </div>

          {/* Category Tag Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#040B1D]/90 text-[#FFF4C2] border border-[#D4AF37]/50 backdrop-blur-md shadow-sm">
            {cert.category}
          </span>
        </div>

        {/* Certificate Details */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2.5 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/35 shadow-sm">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Government / Accredited Qualification</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:metallic-gold-text transition-colors">
              {cert.title}
            </h3>

            <p className="mt-1 text-sm font-semibold text-slate-300">
              {cert.issuer}
            </p>

            {cert.program && (
              <p className="mt-0.5 text-xs text-slate-400">
                {cert.program}
              </p>
            )}

            {/* Clear Description of What This Certificate Covers */}
            {cert.description && (
              <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#071330]/85 p-3.5 rounded-xl border border-[#D4AF37]/20">
                {cert.description}
              </p>
            )}

            {/* Key Skills Mastered */}
            {cert.skills && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-semibold text-[#FFF4C2] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-md border border-[#D4AF37]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Meta Chips */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Issue Date: <strong className="text-white">{cert.issueDate}</strong></span>
            </div>

            {cert.credentialId && (
              <div className="flex items-center gap-2 font-mono metallic-gold-text truncate">
                <Hash className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate">ID: {cert.credentialId}</span>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpen}
              className="metallic-gold-button px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              <Award className="w-4 h-4" />
              <span>View Full Certificate</span>
            </button>

            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-outline-button px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MediumCertificateCard: React.FC<CertCardProps> = ({ cert, onOpen }) => {
  return (
    <div className="glass-blue-panel glass-blue-panel-hover rounded-3xl p-6 sm:p-7 border border-[#D4AF37]/30 hover:border-[#FFF4C2] flex flex-col justify-between group relative overflow-hidden shadow-[0_15px_40px_rgba(2,6,18,0.9)] w-full transition-all duration-300">
      {/* Top Gold Highlight */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3CF7A]/60 to-transparent group-hover:via-[#FFF4C2] transition-all" />

      <div>
        {/* Certificate Preview Image: Framed & 100% Uncropped */}
        <div
          onClick={onOpen}
          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#02050E] border-2 border-[#D4AF37]/35 cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.85)] mb-4 group/img p-2 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src={cert.imageFilename}
              alt={cert.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-[1.02]"
            />
          </div>

          <div className="absolute inset-0 bg-[#020612]/70 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5">
            <div className="w-10 h-10 rounded-full metallic-gold-button flex items-center justify-center shadow-lg">
              <ZoomIn className="w-5 h-5 text-[#020612]" />
            </div>
            <span className="text-[11px] font-bold text-[#FFF4C2] tracking-wider uppercase drop-shadow-md">
              Click to Inspect Fullscreen
            </span>
          </div>

          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#040B1D]/90 text-[#FFF4C2] border border-[#D4AF37]/45 backdrop-blur-md">
            {cert.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-black text-white group-hover:metallic-gold-text transition-colors mb-1">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="text-xs text-slate-300 mb-2.5 line-clamp-1 font-medium">
          {cert.issuer}
        </p>

        {/* Description of What It Covers */}
        {cert.description && (
          <p className="text-xs text-slate-200 leading-relaxed bg-[#071330]/80 p-2.5 rounded-xl border border-[#D4AF37]/15 mb-3 line-clamp-2">
            {cert.description}
          </p>
        )}

        {/* Skills Chips */}
        {cert.skills && (
          <div className="flex flex-wrap gap-1 mb-3">
            {cert.skills.slice(0, 3).map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-[10px] font-semibold text-[#FFF4C2] bg-[#D4AF37]/10 px-2 py-0.5 rounded-md border border-[#D4AF37]/25"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Meta Details */}
        <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-slate-300">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{cert.issueDate}</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
            </span>
          </div>

          {cert.credentialId && (
            <div className="flex items-center gap-1.5 font-mono text-[11px] metallic-gold-text truncate">
              <Hash className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="truncate">ID: {cert.credentialId}</span>
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <button
          type="button"
          onClick={onOpen}
          className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/35 hover:border-[#FFF4C2] text-xs font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
        >
          <Award className="w-3.5 h-3.5 text-[#F3CF7A]" />
          <span>View Full Certificate</span>
        </button>
      </div>
    </div>
  );
};
