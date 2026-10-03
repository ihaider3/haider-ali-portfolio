"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, ShieldCheck, Layers, Tag, Star } from "lucide-react";
import { Project } from "../types";
import { BrandIcon } from "./BrandIcon";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dark midnight blue backdrop blur */}
      <div
        className="fixed inset-0 bg-[#020612]/92 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-[#050D22] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(2,6,18,0.95),0_0_35px_rgba(212,175,55,0.25)] overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
        {/* Subtle Top Gold Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3CF7A] to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#081535] text-slate-300 hover:text-white hover:bg-[#0D2152] border border-[#D4AF37]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-[#D4AF37]/20">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#030816] border border-[#D4AF37]/40 p-2 shrink-0 flex items-center justify-center shadow-lg">
            <Image
              src={project.logoFilename}
              alt={project.logoAlt}
              fill
              sizes="80px"
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold metallic-gold-text px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40">
                Project {project.number}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {project.category}
              </span>
            </div>

            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-black metallic-gold-heading">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">5.0 Star Client Rating</span>
              <span className="text-[10px] metallic-gold-subtle font-bold bg-[#D4AF37]/15 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">
                Verified Campaign
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Verified Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Verified Project Scope</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-[#071330] p-4 rounded-xl border border-white/5">
              {project.description}
            </p>
          </div>

          {/* Managed Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span>Services &amp; Role</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#08173B] text-xs font-medium text-slate-200 border border-[#D4AF37]/20"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-[#D4AF37]" />
              <span>Connected Platforms</span>
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.platforms.map((plat, idx) => {
                const iconName = plat.toLowerCase().includes("meta")
                  ? "meta"
                  : plat.toLowerCase().includes("instagram")
                  ? "instagram"
                  : plat.toLowerCase().includes("whatsapp")
                  ? "whatsapp"
                  : plat.toLowerCase().includes("shopify")
                  ? "shopify"
                  : "facebook";

                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08173B] border border-[#D4AF37]/30 text-xs font-semibold text-slate-200"
                  >
                    <BrandIcon name={iconName} size={14} />
                    <span>{plat}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Source Notice */}
          <div className="text-[11px] text-slate-400 bg-[#03091A] p-3 rounded-lg border border-white/5">
            <span className="metallic-gold-text font-bold">Source Status:</span> Real client page showcase. Managed by Haider Ali (MH Marketing).
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
          >
            Close
          </button>

          <a
            href={project.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto metallic-gold-button px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 group"
          >
            <span>Visit Facebook Page</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
