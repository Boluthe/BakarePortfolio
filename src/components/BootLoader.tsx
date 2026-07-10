"use client";

import { useState, useEffect } from "react";
import CaseStudyBackground from "@/components/CaseStudyBackground";

const bootLines = [
  { text: "init_process --user= bakare tioluwani boluwatife", delay: 100 },
  { text: "checking oracle certifications... [ OCA: OK, OCP: OK ]", delay: 250 },
  { text: "loading database adapters... PostgreSQL pool initialized", delay: 400 },
  { text: "checking backend core dependencies... Java 17 / Go 1.21 OK", delay: 550 },
  { text: "mounting security filters... JWT validation active", delay: 700 },
  { text: "redirecting routing gateways... telemetry diagnostics ONLINE", delay: 850 },
  { text: "system bootstrap complete. launching dashboard...", delay: 1000 },
];

export default function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Sequentially print boot log lines
    const timers = bootLines.map((line) => {
      return setTimeout(() => {
        setLines((prev) => [...prev, line.text]);
      }, line.delay);
    });

    // Fade out overlay after logs complete
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1300);

    // Call onComplete to reveal home page layout
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1700);

    return () => {
      timers.forEach((t) => clearTimeout(t));
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#1a1d24]/95 backdrop-blur-md p-6 font-mono text-xs sm:text-sm text-slate-200 selection:bg-red-500 selection:text-white transition-opacity duration-500 ease-in-out overflow-hidden ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Drifting Telemetry & Code Particles Layer (balanced opacity to prevent visual clash) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 blur-[0.5px]">
        <CaseStudyBackground />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-dot-grid bg-mesh-lines opacity-40" />

      {/* Terminal housed inside a solid glassmorphic dark box to prevent particle collision */}
      <div className="relative z-10 mx-auto w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
        <div className="rounded-2xl border border-white/[0.1] bg-[#161a22]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 ring-1 ring-white/[0.05]">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3.5 mb-5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
            <span className="text-[11px] text-slate-400 font-semibold ml-2 select-none tracking-wide">
              system_diagnostics.sh
            </span>
          </div>

          {/* Dynamic Boot Sequence Lines */}
          <div className="space-y-3 select-none min-h-[220px] font-mono text-xs sm:text-[13px] leading-relaxed">
            {lines.map((line, i) => {
              const isCommand = line.startsWith("init_process");
              const isSuccess = line.includes("OK") || line.includes("ONLINE") || line.includes("complete");
              return (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold select-none shrink-0">$</span>
                  {isCommand ? (
                    <span className="text-white font-bold tracking-wide">{line}</span>
                  ) : isSuccess ? (
                    <span className="text-red-400 font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">
                      {line}
                    </span>
                  ) : (
                    <span className="text-slate-300">{line}</span>
                  )}
                </div>
              );
            })}
            {lines.length < bootLines.length && (
              <div className="flex items-center gap-2 pt-1">
                <span className="text-red-500 font-bold select-none shrink-0">$</span>
                <span className="w-2.5 h-4 bg-red-500 animate-pulse rounded-sm shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center text-[10px] text-slate-500 font-semibold select-none pb-2">
        PORTFOLIO SYSTEM INITIALIZATION — REV 2026.07.01
      </div>
    </div>
  );
}
