"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-surface/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white hover:text-accent transition-colors"
        >
          TB
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="https://github.com/boluthe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
