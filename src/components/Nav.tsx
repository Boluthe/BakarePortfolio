"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/components/Toast";

const links = [
  { label: "Work", href: "/#work", external: false },
  { label: "Resume", href: "/cv.pdf", external: true },
  { label: "Contact", href: "/#contact", external: false },
];

function NavItem({
  label,
  href,
  external,
  onClick,
  className = "",
}: {
  label: string;
  href: string;
  external: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const baseClasses = `transition-all duration-200 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded px-1.5 py-0.5 ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={baseClasses} onClick={onClick}>
      {label}
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bakaretioluwani@yahoo.com");
    showToast("Copied bakaretioluwani@yahoo.com to clipboard!");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/[0.1] light:border-slate-200 bg-white/85 dark:bg-[#262a33]/85 light:bg-white/95 backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-black/20 light:shadow-slate-200 transition-colors duration-300">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 text-sm font-mono font-semibold tracking-tight text-slate-900 dark:text-white light:text-slate-900 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none rounded px-1.5 py-0.5"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-transform group-hover:scale-125" />
          Bakare Tioluwani Boluwatife
        </Link>

        {/* Desktop actions & links */}
        <div className="hidden md:flex items-center gap-5 text-sm font-mono text-slate-700 dark:text-slate-200">
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}

          <span className="h-4 w-px bg-slate-300 dark:bg-slate-700/80" />

          {/* Centralized Quick-Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-white/[0.12] bg-slate-100/90 dark:bg-[#1e222b]/90 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            <svg width="13" height="13" className="shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Copy Email</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-white/[0.12] bg-slate-100/90 dark:bg-[#1e222b]/90 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          >
            {theme === "dark" ? (
              <>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-amber-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Light</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-sky-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-white/[0.1] text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown drawer with smooth slide-down and contact actions */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#262a33]/95 backdrop-blur-xl transition-all duration-300">
          <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col gap-4 text-sm font-mono text-slate-800 dark:text-slate-200">
            {links.map((link) => (
              <NavItem
                key={link.label}
                {...link}
                onClick={() => setOpen(false)}
                className="py-1.5 border-b border-slate-200 dark:border-white/[0.04] last:border-none"
              />
            ))}

            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/[0.08]">
              {/* Centralized Quick-Copy Email Button (Mobile) */}
              <button
                onClick={() => {
                  handleCopyEmail();
                  setOpen(false);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-slate-100 dark:bg-[#1e222b] px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Copy Email</span>
              </button>

              {/* Theme Toggle Button (Mobile) */}
              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-slate-100 dark:bg-[#1e222b] px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                {theme === "dark" ? (
                  <>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-amber-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-sky-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
