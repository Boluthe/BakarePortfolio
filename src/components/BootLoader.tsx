"use client";

import { useState, useEffect, useCallback } from "react";

const bootLines = [
  "$ init portfolio --mode=interactive",
  "[OK] Verified system architecture & core stack",
  "[OK] Launching interactive workspace...",
];

export default function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [fade, setFade] = useState(false);

  const handleSkip = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Sequentially print boot log lines
    const timers = bootLines.map((line, idx) => {
      return setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, 150 + idx * 280);
    });

    // Fade out overlay after logs complete
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 950);

    // Call onComplete to reveal home page layout
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      timers.forEach((t) => clearTimeout(t));
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, handleSkip]);

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#12141a] dark:bg-[#12141a] light:bg-[#f8fafc] font-mono p-8 selection:bg-emerald-500 selection:text-white transition-opacity duration-500 ease-in-out cursor-pointer ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Quiet, unobtrusive top right skip action */}
      <div className="flex justify-end w-full">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 hover:text-emerald-400 light:hover:text-emerald-600 transition-colors py-1.5 px-3 rounded-lg border border-transparent hover:border-slate-700/50 light:hover:border-slate-300"
        >
          [ ESC / Click to skip ]
        </button>
      </div>

      {/* Pure, uncluttered centered terminal typography */}
      <div className="mx-auto max-w-lg w-full my-auto px-4">
        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          {lines.map((line, i) => {
            const isCommand = line.startsWith("$");
            const isSuccess = line.includes("[OK]");
            return (
              <div key={i} className="flex items-start gap-3">
                {isCommand ? (
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold tracking-wide">
                    {line}
                  </span>
                ) : isSuccess ? (
                  <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium tracking-wide flex items-center gap-2">
                    <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold">✓</span>
                    {line.replace("[OK] ", "")}
                  </span>
                ) : (
                  <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">{line}</span>
                )}
              </div>
            );
          })}
          {lines.length < bootLines.length && (
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2.5 h-4 bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600 animate-pulse rounded-xs" />
            </div>
          )}
        </div>
      </div>

      {/* Bottom spacer for perfect vertical centering */}
      <div className="h-6" />
    </div>
  );
}
