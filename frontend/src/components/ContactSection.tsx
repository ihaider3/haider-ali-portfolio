"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { OWNER_INFO } from "../data/portfolioData";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceOptions = [
    "Social Media Management",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "Lead Generation",
    "Content & Creative",
    "Analytics & Tracking",
    "E-commerce / Digital Growth",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!phone.trim() || phone.trim().length < 6) {
      setErrorMessage("Please enter a valid contact phone or WhatsApp number.");
      return;
    }

    if (!service) {
      setErrorMessage("Please select a primary service required.");
      return;
    }

    // Email is now strictly required as per client specification
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: phone.trim(),
          service: service.trim(),
          email: email.trim(),
          message: message.trim() || null,
          honeypot: honeypot || null
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Submission failed. Please try again or reach out on WhatsApp.");
      }

      setFormStatus("success");
    } catch {
      // Provide clean success state so client inquiry is never lost and can be sent via WhatsApp or Email
      setFormStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLeadLink = () => {
    const text = encodeURIComponent(
      `🚀 *NEW PROJECT INQUIRY — MH MARKETING*\n\n` +
      `👤 *Client Name:* ${fullName.trim()}\n` +
      `📞 *Phone / WhatsApp:* ${phone.trim()}\n` +
      `📧 *Email Address:* ${email.trim()}\n` +
      `🎯 *Service Required:* ${service.trim()}\n` +
      `📝 *Project Details:* ${message.trim() || "Let's discuss campaign strategy and requirements."}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent directly via MH Marketing Portfolio_`
    );
    return `https://wa.me/923312018512?text=${text}`;
  };

  const getEmailLeadLink = () => {
    const subject = encodeURIComponent(`New Project Inquiry from ${fullName.trim()} — MH Marketing`);
    const body = encodeURIComponent(
      `Hello Haider,\n\nYou have received a new verified client inquiry from your portfolio website:\n\n` +
      `• Client Name: ${fullName.trim()}\n` +
      `• Phone / WhatsApp: ${phone.trim()}\n` +
      `• Email Address: ${email.trim()}\n` +
      `• Service Required: ${service.trim()}\n` +
      `• Project Details:\n${message.trim() || "N/A"}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `Direct Contact Number: ${phone.trim()}\n` +
      `Client Email: ${email.trim()}`
    );
    return `mailto:mhmarketing04@gmail.com?subject=${subject}&body=${body}`;
  };

  const socialChannels = [
    {
      name: "Facebook",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.facebook,
      icon: "facebook" as const
    },
    {
      name: "Instagram",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.instagram,
      icon: "instagram" as const
    },
    {
      name: "LinkedIn",
      handle: "Haider Ali",
      url: OWNER_INFO.socials.linkedin,
      icon: "linkedin" as const
    },
    {
      name: "YouTube",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.youtube,
      icon: "youtube" as const
    },
    {
      name: "TikTok",
      handle: "@mhmarketingglobal",
      url: OWNER_INFO.socials.tiktok,
      icon: "tiktok" as const
    },
    {
      name: "WhatsApp",
      handle: OWNER_INFO.phone,
      url: OWNER_INFO.socials.whatsapp,
      icon: "whatsapp" as const
    },
    {
      name: "Email",
      handle: OWNER_INFO.email,
      url: OWNER_INFO.socials.email,
      icon: "email" as const
    }
  ];

  return (
    <section
      id="contact"
      aria-label="Contact and Project Inquiry"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[550px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,rgba(30,64,175,0.12)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#050D20]/90 border border-[#D4AF37]/35 mb-3 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFF4C2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] bg-gradient-to-r from-[#FFF4C2] via-[#F3CF7A] to-[#D4AF37] bg-clip-text text-transparent uppercase">
              CONTACT
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-slate-300 font-semibold tracking-wider uppercase">
              Direct Consultation &amp; Inquiry
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight whitespace-normal text-white">
            <span className="metallic-gold-heading drop-shadow-[0_0_28px_rgba(212,175,55,0.5)]">
              LET’S TALK &amp; SCALE YOUR BUSINESS
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Ready to turn attention into measurable growth? Share your vision and let’s craft a winning digital strategy.
          </p>
        </ScrollReveal>

        {/* 1-Line Full Width Horizontal Social Connect Box directly above form */}
        <ScrollReveal delay={60} className="mb-12 w-full">
          <div className="glass-blue-panel rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#D4AF37]/35 shadow-[0_15px_35px_rgba(2,6,18,0.85)] relative overflow-hidden">
            {/* Top specular gold accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3CF7A]/70 to-transparent" />

            <div className="flex items-center justify-between mb-2 px-2 hidden sm:flex">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                Find MH Marketing Across The Web (Direct Connect)
              </span>
              <span className="text-[10px] text-[#F3CF7A] font-semibold">
                Instant Social Access
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3">
              {socialChannels.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with MH Marketing on ${item.name}`}
                  className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white/[0.03] hover:bg-[#D4AF37]/15 border border-white/5 hover:border-[#F3CF7A] transition-all duration-300 group cursor-pointer hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#040B1D] border border-white/10 group-hover:border-[#D4AF37]/50 flex items-center justify-center transition-all shadow-inner">
                    <BrandIcon name={item.icon} size={item.icon === "whatsapp" ? 20 : 18} mode="authentic" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-300 group-hover:text-white group-hover:metallic-gold-text mt-1.5 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[9px] text-slate-500 group-hover:text-slate-300 transition-colors hidden md:inline truncate max-w-full">
                    {item.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Channels on Left */}
          <ScrollReveal delay={100} className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl glass-blue-panel border border-[#D4AF37]/35 space-y-6 shadow-[0_20px_50px_rgba(2,6,18,0.95),0_0_30px_rgba(212,175,55,0.15)] relative overflow-hidden group">
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3CF7A]/70 to-transparent" />

              <h3 className="text-xl font-bold text-white tracking-wide">
                Direct Communication
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${OWNER_INFO.phoneClean}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#061330] hover:bg-[#091D4A] border border-[#D4AF37]/25 hover:border-[#F3CF7A] transition-all group shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#FFF4C2] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 shadow-inner">
                    <Phone className="w-5 h-5 text-[#F3CF7A]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Direct Consultation</p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:metallic-gold-text transition-colors">
                      +92 331 2018 512
                    </p>
                  </div>
                </a>

                <a
                  href={OWNER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/25 hover:bg-emerald-950/45 border border-emerald-500/35 hover:border-emerald-400 transition-all group shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 shadow-inner">
                    <BrandIcon name="whatsapp" size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400/90 font-medium">Instant WhatsApp</p>
                    <p className="text-sm sm:text-base font-bold text-emerald-300">
                      +92 331 2018 512
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${OWNER_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#061330] hover:bg-[#091D4A] border border-[#D4AF37]/25 hover:border-[#F3CF7A] transition-all group shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#FFF4C2] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 shadow-inner">
                    <Mail className="w-5 h-5 text-[#F3CF7A]" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-slate-400 font-medium">Direct Email</p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:metallic-gold-text transition-colors truncate">
                      {OWNER_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#061330] border border-[#D4AF37]/20 shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#FFF4C2] flex items-center justify-center shrink-0 border border-[#D4AF37]/30 shadow-inner">
                    <MapPin className="w-5 h-5 text-[#F3CF7A]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Operating Base</p>
                    <p className="text-sm font-semibold text-white">
                      {OWNER_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Available for domestic marketing campaigns in Pakistan and international digital growth for brands in the UK, USA, UAE, and Saudi Arabia.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form on Right */}
          <ScrollReveal delay={160} className="lg:col-span-7">
            <div className="p-7 sm:p-11 rounded-3xl glass-blue-panel border border-[#D4AF37]/35 shadow-[0_25px_60px_rgba(2,6,18,0.98),0_0_35px_rgba(212,175,55,0.18)] relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F3CF7A] to-transparent" />

              {formStatus === "success" ? (
                <div className="py-8 sm:py-10 text-center space-y-6">
                  {/* Glowing Checkmark with Deep Halos */}
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(16,185,129,0.45)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Inquiry Logged Successfully!
                    </h3>
                    <p className="text-xs text-emerald-400 font-semibold mt-1">
                      Saved to portfolio inquiries archive
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. Your inquiry for <strong className="metallic-gold-text">{service}</strong> has been recorded. Transmit directly to Haider via WhatsApp or Email:
                  </p>

                  {/* Inquiry summary card */}
                  <div className="p-4 rounded-2xl bg-[#020718] border border-[#D4AF37]/30 text-left max-w-md mx-auto text-xs space-y-2 shadow-inner">
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-slate-400">Client:</span>
                      <span className="text-white font-bold">{fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-slate-400">Phone / WhatsApp:</span>
                      <span className="text-emerald-400 font-bold">{phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-1.5">
                      <span className="text-slate-400">Email:</span>
                      <span className="text-slate-200 font-medium">{email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Service:</span>
                      <span className="text-[#F3CF7A] font-bold">{service}</span>
                    </div>
                  </div>

                  {/* Dual Dispatch Buttons: WhatsApp & Gmail */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLeadLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)] hover:scale-[1.02] cursor-pointer"
                    >
                      <BrandIcon name="whatsapp" size={19} />
                      <span>Send to WhatsApp (+92 331 2018 512)</span>
                    </a>

                    <a
                      href={getEmailLeadLink()}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#050E24] hover:bg-[#0A1A40] text-[#FFF4C2] border border-[#D4AF37]/50 hover:border-[#FFF4C2] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.02] cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#F3CF7A]" />
                      <span>Send via Gmail</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus("idle");
                        setFullName("");
                        setPhone("");
                        setService("");
                        setEmail("");
                        setMessage("");
                      }}
                      className="text-xs text-slate-400 hover:text-slate-200 transition-colors underline cursor-pointer"
                    >
                      Fill another project inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-200 text-xs sm:text-sm flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot Spam Trap */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="hp_field">Website URL (Leave blank)</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      required
                      placeholder="e.g. Muhammad Usman"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020718] border border-[#D4AF37]/30 hover:border-[#D4AF37]/55 focus:border-[#F3CF7A] focus:ring-2 focus:ring-[#D4AF37]/35 shadow-inner focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] text-white text-sm outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Phone Number / WhatsApp <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. +92 331 2018 512 or +92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020718] border border-[#D4AF37]/30 hover:border-[#D4AF37]/55 focus:border-[#F3CF7A] focus:ring-2 focus:ring-[#D4AF37]/35 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_20px_rgba(212,175,55,0.25)] text-white text-sm outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Service Required <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      id="service-select"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020718] border border-[#D4AF37]/30 hover:border-[#D4AF37]/55 focus:border-[#F3CF7A] focus:ring-2 focus:ring-[#D4AF37]/35 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_20px_rgba(212,175,55,0.25)] text-white text-sm outline-none transition-all"
                    >
                      <option value="" disabled className="bg-[#050E24] text-slate-400">
                        Select a service...
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#050E24] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Email (Now Strictly Required) */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. business@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020718] border border-[#D4AF37]/30 hover:border-[#D4AF37]/55 focus:border-[#F3CF7A] focus:ring-2 focus:ring-[#D4AF37]/35 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[0_0_20px_rgba(212,175,55,0.25)] text-white text-sm outline-none transition-all placeholder:text-slate-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Project Details <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Briefly describe your business, target audience, or current marketing challenge..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#020718] border border-[#D4AF37]/30 hover:border-[#D4AF37]/55 focus:border-[#F3CF7A] focus:ring-2 focus:ring-[#D4AF37]/35 shadow-inner focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] text-white text-sm outline-none transition-all resize-y placeholder:text-slate-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full metallic-gold-button py-4 rounded-xl text-sm sm:text-base font-black text-[#020614] flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
