"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ExternalLink,
  RotateCcw,
  MessageCircle,
  HelpCircle,
  ShieldCheck
} from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  { label: "👤 Who is Haider Ali?", text: "Haider Ali kaun hain aur unka experience kya hai?" },
  { label: "🚀 How to start Meta Ads?", text: "Facebook aur Instagram Ads start karne ke liye mujhe kya provide karna hoga?" },
  { label: "💰 Pricing & Packages", text: "Aapke marketing packages aur pricing kya hai?" },
  { label: "🎯 Services Offered", text: "MH Marketing kaun kaun si services provide karta hai?" }
];

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Walaikum Assalam / Hello! 👋 Main **MH Marketing AI Assistant** hoon — Haider Ali ka intelligent consultant. \n\nAap mujh se **Roman Urdu**, **English**, ya **Urdu** mein Meta Ads, services, strategy, ya packages ke mutaliq kuch bhi pooch sakte hain. Main aapko realistic guide karunga!",
      timestamp: "Just now"
    }
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 200);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const historyToSend = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyToSend })
      });

      if (!res.ok) {
        throw new Error("Chat response failed");
      }

      const data = await res.json();
      const botReply =
        data.reply ||
        "Aap direct Haider Ali se WhatsApp par rabta kar sakte hain: +92 331 2018 512 (https://wa.me/923312018512).";

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        content: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const fallbackMessage: Message = {
        id: `bot-fallback-${Date.now()}`,
        role: "assistant",
        content:
          "Network connectivity issue ki wajah se response generate nahi ho saka. Lekin aap foran Haider Ali se direct WhatsApp par rabta kar sakte hain:\n\n👉 **WhatsApp: +92 331 2018 512**\n[Chat Directly on WhatsApp](https://wa.me/923312018512)",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Chat reset kar di gayi hai! Aap mujh se services, ads requirements, ya business packages ke mutaliq sawal pooch sakte hain.",
        timestamp: "Just now"
      }
    ]);
  };

  // Render markdown formatting simply (bold, links, bullet points)
  const formatMessageText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Check for bullet points
      const isBullet = line.trim().startsWith("- ") || line.trim().startsWith("• ") || /^\d+\./.test(line.trim());
      const cleanLine = line.replace(/^[-•]\s*/, "");

      // Handle simple bold tags **text**
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);

      return (
        <div key={idx} className={`${isBullet ? "flex items-start gap-1.5 ml-2 my-0.5" : "my-0.5"}`}>
          {isBullet && <span className="text-[#D4AF37] font-black shrink-0">•</span>}
          <span>
            {parts.map((part, pIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={pIdx} className="text-[#FFF4C2] font-extrabold">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              // Check for links
              if (part.includes("https://wa.me/")) {
                return (
                  <a
                    key={pIdx}
                    href={OWNER_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 font-bold underline hover:text-emerald-300 ml-1"
                  >
                    <span>Open WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                );
              }
              return part;
            })}
          </span>
        </div>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="MH Marketing AI Assistant"
      className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 z-50 flex flex-col w-full sm:w-[420px] md:w-[460px] h-full sm:h-[620px] max-h-full sm:max-h-[85vh] bg-[#03091B]/95 sm:rounded-3xl border border-[#D4AF37]/45 shadow-[0_20px_60px_rgba(2,6,18,0.98),0_0_35px_rgba(212,175,55,0.3)] backdrop-blur-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
    >
      {/* Top Specular Gold Edge Highlight */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#F3CF7A] to-transparent z-10" />

      {/* Header Bar */}
      <div className="p-4 sm:p-4.5 bg-[#050E28]/95 border-b border-[#D4AF37]/25 flex items-center justify-between shrink-0 relative z-10 shadow-sm">
        <div className="flex items-center gap-3">
          {/* AI Avatar with Glowing Aura */}
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0B1E4A] via-[#122A63] to-[#040C22] border-2 border-[#D4AF37]/70 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Sparkles className="w-5 h-5 text-[#F3CF7A]" />
            </div>
            {/* Online Live Status Indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#03091B] animate-pulse shadow-sm" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-extrabold text-white tracking-wide">
                MH Marketing AI
              </h3>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#D4AF37]/15 text-[#FFF4C2] border border-[#D4AF37]/35 uppercase tracking-wider">
                Official
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
              <span>Haider Ali’s Digital Consultant</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Online</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={clearChat}
            title="Reset conversation"
            aria-label="Reset conversation"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            title="Close Assistant"
            aria-label="Close Assistant"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Direct WhatsApp Callout Banner inside chat */}
      <a
        href={OWNER_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gradient-to-r from-emerald-950/60 to-[#040C22] border-b border-emerald-500/25 flex items-center justify-between text-[11px] text-emerald-300 hover:text-white transition-all group shrink-0"
      >
        <span className="flex items-center gap-2">
          <BrandIcon name="whatsapp" size={14} />
          <span>Need immediate quotation? Message Haider directly:</span>
        </span>
        <span className="font-bold underline text-white group-hover:text-emerald-400 shrink-0">
          +92 331 2018 512 ↗
        </span>
      </a>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-[13px] leading-relaxed select-text">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${
              m.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs shadow-sm ${
                m.role === "user"
                  ? "bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FFF4C2]"
                  : "bg-[#091D4A] border border-[#38BDF8]/40 text-[#38BDF8]"
              }`}
            >
              {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[84%] sm:max-w-[80%] rounded-2xl p-3 sm:p-3.5 shadow-md ${
                m.role === "user"
                  ? "bg-gradient-to-r from-[#1E40AF]/40 to-[#0F286E]/80 border border-[#D4AF37]/35 text-white rounded-tr-none"
                  : "bg-[#050F2C]/90 border border-white/10 text-slate-200 rounded-tl-none space-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              }`}
            >
              {formatMessageText(m.content)}
              <div
                className={`text-[9px] mt-1.5 opacity-60 text-right ${
                  m.role === "user" ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {m.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-[#091D4A] border border-[#38BDF8]/40 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5 text-[#38BDF8]" />
            </div>
            <div className="bg-[#050F2C]/90 border border-white/10 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.15s]" />
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.3s]" />
              <span className="text-[11px] text-slate-400 font-medium ml-1.5">
                AI is crafting a reply...
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Chips */}
      <div className="px-3.5 py-2 bg-[#020716]/90 border-t border-white/5 shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 w-max">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1 mr-1">
            <HelpCircle className="w-3 h-3 text-[#D4AF37]" />
            <span>Quick:</span>
          </span>
          {QUICK_PROMPTS.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(q.text)}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-full bg-[#071333] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 hover:border-[#FFF4C2] text-[11px] text-slate-300 hover:text-white transition-all whitespace-nowrap cursor-pointer disabled:opacity-50"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-[#050E28] border-t border-[#D4AF37]/25 flex items-center gap-2 shrink-0 relative z-10"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask in Roman Urdu, English, ya Urdu..."
          disabled={isLoading}
          className="flex-1 px-4 py-2.5 rounded-xl bg-[#020614] border border-[#D4AF37]/35 focus:border-[#FFF4C2] focus:ring-1 focus:ring-[#D4AF37]/50 text-white text-xs outline-none transition-all placeholder:text-slate-500 shadow-inner"
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F3CF7A] hover:from-[#FFF4C2] hover:to-[#D4AF37] text-[#020614] font-black transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
