"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-12 sm:bottom-16 right-4 sm:right-8 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#1e222b]/90 dark:bg-[#1e222b]/90 text-slate-200 dark:text-slate-200 shadow-xl ring-1 ring-white/[0.1] dark:ring-white/[0.1] backdrop-blur-md transition-all duration-300 hover:bg-red-600 hover:text-white hover:ring-red-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
