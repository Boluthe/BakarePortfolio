"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Contract & Project Inquiry");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const mailtoUrl = `mailto:bakaretioluwani@yahoo.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} — ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Type: ${subject}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="h-full flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-black/30 font-mono">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
            {"DIRECT_MESSAGE_DISPATCH — SEND INQUIRY OR QUESTION"}
          </h3>
        </div>
        <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
          SECURE_CLIENT_MAILTO
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-300 mb-2">
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Connor"
              className="w-full rounded-xl border border-white/[0.08] bg-[#161a22]/90 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-300 mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. sarah@cyberdyne.io"
              className="w-full rounded-xl border border-white/[0.08] bg-[#161a22]/90 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-slate-300 mb-2">
            Inquiry Category
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-[#161a22]/90 px-4 py-3 text-xs sm:text-sm text-white outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50"
          >
            <option value="Contract & Project Inquiry">Contract & Project Inquiry</option>
            <option value="Full-Time Engineering Opportunity">Full-Time Engineering Opportunity</option>
            <option value="Technical & Architecture Question">Technical & Architecture Question</option>
            <option value="General Question & Networking">General Question & Networking</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="message" className="block text-xs font-bold text-slate-300">
              Message / Question Details *
            </label>
            <span className="text-[10px] text-slate-500">
              {message.length} chars
            </span>
          </div>
          <textarea
            id="message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project, system requirements, or any architecture questions..."
            className="w-full rounded-xl border border-white/[0.08] bg-[#161a22]/90 px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 resize-y min-h-[120px]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-[11px] text-slate-400 max-w-sm">
            * Clicking dispatch will open your email client pre-filled with this inquiry for immediate delivery.
          </p>

          <button
            type="submit"
            className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95 ring-1 ring-emerald-500/50"
          >
            <span>{sent ? "Opening Client..." : "Dispatch Message ↗"}</span>
            <svg width="16" height="16" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
