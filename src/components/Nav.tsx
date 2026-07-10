"use client";

import { useState } from "react";
import Link from "next/link";

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
  const baseClasses = `transition-all duration-200 hover:text-emerald-400 font-medium ${className}`;
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.1] bg-[#262a33]/85 backdrop-blur-md shadow-lg shadow-black/20">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 text-sm font-mono font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-transform group-hover:scale-125 animate-pulse" />
          Bakare Tioluwani Boluwatife
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-mono text-slate-200">
          {links.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex h-8 w-8 items-center justify-center text-slate-200 hover:text-emerald-400 transition-colors"
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
        <div className="md:hidden border-t border-white/[0.1] bg-[#262a33]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col gap-4 text-sm font-mono text-slate-200">
            {links.map((link) => (
              <NavItem
                key={link.label}
                {...link}
                onClick={() => setOpen(false)}
                className="py-1 border-b border-white/[0.04] last:border-none"
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
