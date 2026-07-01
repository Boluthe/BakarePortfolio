"use client";

import { useState, useEffect } from "react";

const bootLines = [
  { text: "init_process --user=tioluwani --daemon", delay: 100 },
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
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-black p-6 font-mono text-xs sm:text-sm text-slate-400 selection:bg-red-600 selection:text-black transition-opacity duration-500 ease-in-out ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mx-auto w-full max-w-3xl flex-1 flex flex-col justify-center">
        {/* Terminal Header */}
        <div className="flex items-center gap-1.5 border-b border-white/[0.08] pb-3 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="text-[10px] text-slate-600 ml-2 select-none">system_diagnostics.sh</span>
        </div>

        {/* Dynamic Boot Sequence Lines */}
        <div className="space-y-2.5 select-none min-h-[220px]">
          {lines.map((line, i) => {
            const isCommand = line.startsWith("init_process");
            const isSuccess = line.includes("OK") || line.includes("ONLINE") || line.includes("complete");
            return (
              <div key={i} className="flex items-start gap-2">
                <span className="text-red-500 select-none">$</span>
                {isCommand ? (
                  <span className="text-white font-semibold">{line}</span>
                ) : isSuccess ? (
                  <span className="text-red-500/90">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </div>
            );
          })}
          {lines.length < bootLines.length && (
            <div className="flex items-center gap-1">
              <span className="text-red-500 select-none">$</span>
              <span className="w-2 h-4 bg-red-500 animate-pulse" />
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl text-center text-[10px] text-slate-700 select-none">
        PORTFOLIO SYSTEM INITIALIZATION // REV 2026.07.01
      </div>
    </div>
  );
}
