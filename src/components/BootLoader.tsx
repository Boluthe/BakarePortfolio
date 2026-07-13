"use client";

import { useState, useEffect, useCallback } from "react";

const bootLines = [
  "$ ./kernel_init --target=bakare.tech --mode=secure_access",
  "[KERNEL] Allocating memory pages & initializing core subsystem... [OK]",
  "[CRYPTO] Handshaking RSA-4096 / AES-256-GCM secure enclave... [OK]",
  "[NETWORK] Establishing encrypted tunnel [127.0.0.1:8080]... [OK]",
  "[AUTH] Validating engineer security token for Bakare Tioluwani... [GRANTED]",
  "[SYS] Decrypting portfolio case studies & production systems... 100%",
  ">>> ACCESS GRANTED: WELCOME TO THE SYSTEM <<<",
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
      }, 120 + idx * 240);
    });

    // Fade out overlay after logs complete
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1850);

    // Call onComplete to reveal home page layout
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2100);

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
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#0d1117] dark:bg-[#0d1117] light:bg-[#f8fafc] font-mono p-8 selection:bg-emerald-500 selection:text-white transition-opacity duration-500 ease-in-out cursor-pointer ${
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
      <div className="mx-auto max-w-xl w-full my-auto px-4">
        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          {lines.map((line, i) => {
            const isCommand = line.startsWith("$");
            const isSuccess = line.includes("[OK]") || line.includes("[GRANTED]") || line.includes("100%");
            const isHeader = line.startsWith(">>>");
            return (
              <div key={i} className="flex items-start gap-3">
                {isCommand ? (
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold tracking-wide">
                    {line}
                  </span>
                ) : isHeader ? (
                  <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold tracking-wider pt-1 animate-pulse">
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

      {/* Subtle bottom diagnostic */}
      <div className="flex justify-between items-center text-xs font-mono text-slate-500">
        <span>SYSTEM_BOOT_KERNEL // v4.19</span>
        <span>STATUS: OK</span>
      </div>
    </div>
  );
}
