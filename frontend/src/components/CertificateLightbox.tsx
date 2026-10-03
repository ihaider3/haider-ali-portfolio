"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Award, Calendar, Hash, ArrowLeft, ArrowRight } from "lucide-react";
import { Certificate } from "../types";

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificate,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose, onNext, onPrev]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#020612]/95 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Container */}
      <div className="relative w-full max-w-5xl bg-[#050D24] border border-[#D4AF37]/50 rounded-3xl p-4 sm:p-8 shadow-[0_25px_60px_-15px_rgba(2,6,18,0.98),0_0_35px_rgba(212,175,55,0.25)] overflow-hidden z-10 max-h-[95vh] flex flex-col justify-between">
        {/* Top Metallic Gold Border Accent */}
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F3CF7A] to-transparent" />

        {/* Top Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
          <div>
            <span className="text-xs font-mono font-bold metallic-gold-text uppercase tracking-wider block">
              {certificate.category}
            </span>
            <h3 id="certificate-lightbox-title" className="text-lg sm:text-xl font-bold text-white">
              {certificate.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous certificate"
                className="p-2.5 rounded-xl bg-[#08173B] text-slate-300 hover:text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Next certificate"
                className="p-2.5 rounded-xl bg-[#08173B] text-slate-300 hover:text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate lightbox"
              className="p-2.5 rounded-xl bg-[#08173B] text-slate-300 hover:text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors focus:ring-2 focus:ring-[#D4AF37] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Resolution Certificate Image */}
        <div className="relative w-full h-[48vh] sm:h-[56vh] my-3 rounded-2xl overflow-hidden bg-[#02050E] border-2 border-[#D4AF37]/35 flex items-center justify-center p-2 shadow-2xl">
          <Image
            src={certificate.imageFilename}
            alt={certificate.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-contain"
            priority
          />
        </div>

        {/* Certificate Description & Skills in Lightbox */}
        {certificate.description && (
          <div className="bg-[#03091B] p-3 rounded-xl border border-[#D4AF37]/20 my-1 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <p>{certificate.description}</p>
            {certificate.skills && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {certificate.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-semibold text-[#FFF4C2] bg-[#D4AF37]/15 px-2 py-0.5 rounded-md border border-[#D4AF37]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Certificate Meta Details */}
        <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-200">
              <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Issued to: <strong className="text-white">{certificate.recipient}</strong> by {certificate.issuer}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Date: {certificate.issueDate}</span>
              </span>
              {certificate.credentialId && (
                <span className="flex items-center gap-1.5 font-mono text-[#F3CF7A]">
                  <Hash className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>ID: {certificate.credentialId}</span>
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="metallic-gold-button px-5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 w-full sm:w-auto shadow-md"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors w-full sm:w-auto cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
