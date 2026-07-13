"use client";

import { useEffect, useState } from "react";

// Drifting Telemetry & Code Particles positioned along the left/right flanks to avoid overlapping central content
const floatingTokens = [
  { text: '{ status: "live" }', top: "12%", left: "5%", delay: "0s", duration: "22s" },
  { text: "PORT: 8080", top: "18%", left: "88%", delay: "2s", duration: "25s" },
  { text: "</>", top: "32%", left: "7%", delay: "4s", duration: "21s" },
  { text: "GET /api/v1/system", top: "42%", left: "82%", delay: "1s", duration: "26s" },
  { text: "[0x7F_OK]", top: "56%", left: "6%", delay: "3s", duration: "23s" },
  { text: "PING: 8ms", top: "66%", left: "86%", delay: "5s", duration: "24s" },
  { text: "SELECT * FROM core", top: "78%", left: "10%", delay: "2.5s", duration: "27s" },
  { text: "JWT_VERIFIED", top: "86%", left: "78%", delay: "1.5s", duration: "22s" },
];

export default function CaseStudyBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Drifting Telemetry & Code Particles ONLY along outer flanks */}
      {floatingTokens.map((token, idx) => (
        <div
          key={idx}
          className="absolute font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-slate-400/25 dark:text-slate-400/25 light:text-slate-600/60 border border-white/[0.04] dark:border-white/[0.04] light:border-slate-300/60 bg-[#161a22]/30 dark:bg-[#161a22]/30 light:bg-white/80 backdrop-blur-[2px] px-2.5 py-1 rounded-md shadow-sm transition-all duration-1000"
          style={{
            top: token.top,
            left: token.left,
            animation: `float-particle ${token.duration} ease-in-out infinite alternate ${token.delay}`,
          }}
        >
          {token.text}
        </div>
      ))}

      {/* CSS Keyframes for slow, gentle floating movement */}
      <style jsx global>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(12px) rotate(2deg) scale(1.03);
            opacity: 0.35;
          }
          100% {
            transform: translateY(16px) translateX(-12px) rotate(-2deg) scale(0.97);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
