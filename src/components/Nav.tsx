"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0c1220]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white hover:text-orange-400 transition-colors"
        >
          Tioluwani Bakare
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link href="/#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="https://linkedin.com/in/bakare-tioluwani-96a135261"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
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
