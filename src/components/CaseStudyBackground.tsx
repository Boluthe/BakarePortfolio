"use client";

import { useEffect, useState } from "react";

// Drifting Telemetry & Code Particles scattered everywhere across the main viewport
const floatingTokens = [
  { text: "{...}", top: "8%", left: "6%", delay: "0s", duration: "18s" },
  { text: "PORT: 8080", top: "15%", left: "85%", delay: "2s", duration: "22s" },
  { text: "</>", top: "28%", left: "12%", delay: "4s", duration: "20s" },
  { text: "SYS_SYN", top: "35%", left: "78%", delay: "1s", duration: "24s" },
  { text: "[0x7F]", top: "45%", left: "90%", delay: "3s", duration: "19s" },
  { text: "PING: 2ms", top: "52%", left: "5%", delay: "5s", duration: "21s" },
  { text: "SELECT * FROM core", top: "62%", left: "30%", delay: "2.5s", duration: "25s" },
  { text: "POST /api/v1/auth", top: "18%", left: "50%", delay: "3.5s", duration: "23s" },
  { text: "JWT_VERIFIED", top: "72%", left: "82%", delay: "1.5s", duration: "21s" },
  { text: "CACHE_HIT: REDIS", top: "82%", left: "12%", delay: "4.5s", duration: "24s" },
  { text: "ws://sync.stream", top: "88%", left: "55%", delay: "0.5s", duration: "22s" },
  { text: "ORACLE_12C: OK", top: "93%", left: "80%", delay: "3s", duration: "26s" },
];

export default function CaseStudyBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Drifting Telemetry & Code Particles ONLY */}
      {floatingTokens.map((token, idx) => (
        <div
          key={idx}
          className="absolute font-mono text-[11px] sm:text-xs font-bold tracking-wider text-slate-500/30 sm:text-slate-400/30 border border-slate-700/25 bg-slate-900/40 backdrop-blur-[2px] px-2.5 py-1 rounded-md shadow-sm transition-all duration-1000"
          style={{
            top: token.top,
            left: token.left,
            animation: `float-particle ${token.duration} ease-in-out infinite alternate ${token.delay}`,
          }}
        >
          {token.text}
        </div>
      ))}

      {/* CSS Keyframes for slow floating movement */}
      <style jsx global>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-28px) translateX(18px) rotate(3deg) scale(1.05);
            opacity: 0.45;
          }
          100% {
            transform: translateY(18px) translateX(-18px) rotate(-3deg) scale(0.95);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
