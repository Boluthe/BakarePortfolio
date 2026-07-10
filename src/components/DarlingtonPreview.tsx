"use client";

import { useState } from "react";
import Image from "next/image";

export default function DarlingtonPreview() {
  const [activeTab, setActiveTab] = useState<"ui" | "architecture" | "metrics">("ui");

  return (
    <div className="flex flex-col h-full w-full bg-[#0b0e14] overflow-hidden select-none font-mono">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#141820] px-4 py-2.5 text-xs text-slate-400 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-[11px] font-semibold text-slate-300 flex items-center gap-1.5 truncate">
            <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            https://maidarlington.com
          </span>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center rounded-lg bg-[#0b0e14] p-0.5 border border-white/[0.06] shrink-0">
          <button
            onClick={() => setActiveTab("ui")}
            className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
              activeTab === "ui"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Desktop UI
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
              activeTab === "architecture"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all ${
              activeTab === "metrics"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Live Metrics
          </button>
        </div>
      </div>

      {/* Preview Content Area */}
      <div className="relative flex-1 flex flex-col justify-center overflow-hidden bg-[#0b0e14]">
        {activeTab === "ui" && (
          <div className="group/screenshot relative w-full h-auto overflow-hidden bg-[#0b0e14]">
            {/* Screenshot of normal view (Unzoomed 100% exact width) */}
            <Image
              src="/maison-preview.png"
              alt="Maison Darlington Normal View Screenshot"
              width={1400}
              height={900}
              className="w-full h-auto block object-contain transition-transform duration-700 group-hover/screenshot:scale-[1.01]"
              priority
            />

            {/* Subtle bottom gradient so card border is clean when not hovered */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none transition-opacity duration-300 group-hover/screenshot:opacity-0" />

            {/* Hover Overlay with Pop-Up Site Link (Triggers ONLY on screenshot hover via group/screenshot) */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-black/75 backdrop-blur-md opacity-0 transition-all duration-300 group-hover/screenshot:opacity-100 p-6 text-center pointer-events-none group-hover/screenshot:pointer-events-auto">
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-xs font-bold text-emerald-300 tracking-wider shadow-md">
                MAISON DARLINGTON PRODUCTION SYSTEM
              </span>
              <p className="text-sm sm:text-base text-slate-200 max-w-md font-sans leading-relaxed">
                Precision-engineered luxury gastronomy platform with instant Next.js edge ordering and POS synchronization.
              </p>
              <a
                href="https://maidarlington.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-2xl shadow-emerald-500/50 hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all ring-2 ring-emerald-400/60 pointer-events-auto"
              >
                <span>Launch maidarlington.com ↗</span>
              </a>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-300 font-mono mt-1">
                <span className="text-amber-400 font-bold">★ 4.8 Rating (100+ Reviews)</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">Live POS WebSocket Sync</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="anim-fade-up space-y-6 max-w-2xl mx-auto w-full text-xs p-5 sm:p-7 min-h-[380px] sm:min-h-[440px] flex flex-col justify-center overflow-y-auto">
            <div className="border-b border-white/[0.08] pb-3">
              <h4 className="text-sm sm:text-base font-bold text-white">
                {"SYSTEM_PIPELINE — REAL-TIME GASTRONOMY ENGINE"}
              </h4>
              <p className="text-slate-400 text-[11px] mt-1">
                High-availability event-driven architecture processing orders under 120ms latency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-500/30 bg-[#141a24] p-4 space-y-2">
                <span className="text-[10px] text-emerald-400 font-bold block">1. EDGE FRONTEND</span>
                <p className="text-white font-bold">Next.js 14 SSR</p>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Server-Side Rendered menu with sub-second static caching across Vercel global edge CDN.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-[#141a24] p-4 space-y-2">
                <span className="text-[10px] text-blue-400 font-bold block">2. CACHE & EVENTS</span>
                <p className="text-white font-bold">Upstash Redis + Webhooks</p>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Instant order state synchronization between Paystack payment gateways and kitchen display.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/30 bg-[#141a24] p-4 space-y-2">
                <span className="text-[10px] text-purple-400 font-bold block">3. KITCHEN POS</span>
                <p className="text-white font-bold">WebSocket KDS Stream</p>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Real-time ticket display inside the kitchen with live prep timer countdown and SMS alerts.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#12161f] border border-slate-800 p-3.5 flex items-center justify-between text-[11px] text-slate-400">
              <span>Security: Spring Security JWT API Gateway</span>
              <span className="text-emerald-400 font-bold">0% Order Loss Rate</span>
            </div>
          </div>
        )}

        {activeTab === "metrics" && (
          <div className="anim-fade-up space-y-6 max-w-2xl mx-auto w-full p-5 sm:p-7 min-h-[380px] sm:min-h-[440px] flex flex-col justify-center overflow-y-auto">
            <div className="border-b border-white/[0.08] pb-3">
              <h4 className="text-sm sm:text-base font-bold text-white">
                {"PRODUCTION_BENCHMARKS — LIVE TELEMETRY"}
              </h4>
              <p className="text-slate-400 text-xs mt-1">
                Real-world operational metrics gathered from live system monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-white/[0.08] bg-[#141a24] p-3.5 text-center">
                <span className="text-xs text-slate-400 block mb-1">Avg Latency</span>
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">120ms</span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#141a24] p-3.5 text-center">
                <span className="text-xs text-slate-400 block mb-1">System Uptime</span>
                <span className="text-xl sm:text-2xl font-bold text-white">99.98%</span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#141a24] p-3.5 text-center">
                <span className="text-xs text-slate-400 block mb-1">Monthly Orders</span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400">10.4K+</span>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-[#141a24] p-3.5 text-center">
                <span className="text-xs text-slate-400 block mb-1">Cache Hit Rate</span>
                <span className="text-xl sm:text-2xl font-bold text-blue-400">94.2%</span>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-300 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>All health checks normal across 3 redundant edge regions.</span>
              </div>
              <a
                href="https://maidarlington.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-white shrink-0"
              >
                Visit Site ↗
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-[#141820] border-t border-white/[0.08] px-4 sm:px-5 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-[11px] sm:text-xs">Interactive Desktop Preview — Hover over screenshot to launch site or switch tabs</span>
        </div>
        <a
          href="https://maidarlington.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-1.5 text-white font-bold text-xs hover:bg-emerald-700 transition-all self-end sm:self-auto shadow-md shadow-emerald-600/20"
        >
          <span>Open Live Website ↗</span>
        </a>
      </div>
    </div>
  );
}
