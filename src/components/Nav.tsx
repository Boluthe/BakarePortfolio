"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Work",     href: "/#work",                                             external: false },
  { label: "Contact",  href: "/#contact",                                          external: false },
  { label: "LinkedIn", href: "https://linkedin.com/in/bakare-tioluwani-96a135261", external: true },
  { label: "GitHub",   href: "https://github.com/boluthe",                         external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#060e1a]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-sm font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors"
        >
          Tioluwani Bakare
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          {links.map(({ label, href, external }) =>
            external ? (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                {label}
              </a>
            ) : (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex h-8 w-8 items-center justify-center text-slate-400 hover:text-white transition-colors"
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

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col gap-5 text-sm text-slate-400">
            {links.map(({ label, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
