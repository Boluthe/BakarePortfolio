"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import ConsoleWidget from "@/components/ConsoleWidget";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import BootLoader from "@/components/BootLoader";

const INSTAGRAM_LINK = "https://www.instagram.com/boluthecreator._/";

const statusColors = {
  Live: "text-red-400 bg-red-500/15 border-red-500/30 font-semibold shadow-sm shadow-red-500/10",
  MVP: "text-purple-300 bg-purple-500/15 border-purple-500/30 font-semibold shadow-sm shadow-purple-500/10",
  "In Progress": "text-slate-300 bg-slate-800/80 border-slate-700 font-semibold",
} as const;

const skills = [
  { label: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "PHP", "C++", "C#"] },
  { label: "Frameworks & UI", items: ["Spring Boot", "Spring Security", "React.js", "Next.js", "Vite", "Tailwind CSS"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "Oracle DB 12c"] },
  { label: "DevOps & Observability", items: ["Docker", "Jenkins", "Terraform", "Prometheus", "ELK Stack", "Git"] },
  { label: "AI & Automation", items: ["Gemini API", "Claude API", "Workflow Automation", "Async Pipelines"] },
];

const certs = [
  "Oracle OCA — Java SE 8",
  "Oracle OCP — Java SE 8",
  "Oracle DB 12c Admin",
  "CompTIA A+",
  "CPN Member",
];

const endpoints: Record<string, { method: "GET" | "POST" | "PUT"; route: string }> = {
  "maison-darlington": { method: "GET", route: "/api/v1/brand/menu" },
  "invoice-agent": { method: "POST", route: "/api/v1/invoice/escalate" },
  "cmr-system": { method: "GET", route: "/api/v1/bank/reporting" },
  "inventory-management": { method: "PUT", route: "/api/v1/stock/reconcile" },
  "rencash": { method: "POST", route: "/api/v1/loans/apply" },
};

const methodColors = {
  GET: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30 font-semibold",
  POST: "text-sky-300 bg-sky-500/15 border-sky-500/30 font-semibold",
  PUT: "text-amber-300 bg-amber-500/15 border-amber-500/30 font-semibold",
} as const;

export default function HomePage() {
  const [booting, setBooting] = useState(true);
  const maisonProject = caseStudies.find((cs) => cs.slug === "maison-darlington");
  const otherProjects = caseStudies.filter((cs) => cs.slug !== "maison-darlington");

  return (
    <>
      {booting && <BootLoader onComplete={() => setBooting(false)} />}
      <div className={`relative bg-dot-grid bg-mesh-lines min-h-screen transition-opacity duration-700 ${booting ? "opacity-0" : "opacity-100"}`}>
        <Nav />

        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-10 pb-12 pt-28 lg:grid-cols-[1.15fr_420px] lg:gap-14">

            {/* Text — left */}
            <div className="order-2 lg:order-1">
              <div className="anim-fade-up delay-1 mb-5 flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-300 font-semibold">$ curl -s /system/health</span>
                <span className="rounded-md border border-red-500/40 bg-red-500/15 px-2.5 py-0.5 font-bold uppercase text-red-400 animate-pulse shadow-sm shadow-red-500/10">
                  ● Open to Work
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 font-medium">Lagos, Nigeria</span>
              </div>

              <h1 className="anim-fade-up delay-2 font-mono text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Bakare <br />Tioluwani<br />
                Boluwatife
              </h1>

              <p className="anim-fade-up delay-3 mt-4 font-mono text-lg font-medium text-red-500 tracking-tight">
                Full_Stack_Engineer<span className="font-bold text-red-500 animate-pulse font-sans">_</span>
              </p>

              <p className="anim-fade-up delay-4 mt-6 max-w-md text-[15px] leading-relaxed text-slate-200 font-sans">
                I have production experience at Union Bank of Nigeria and across various SaaS products, e-commerce, and AI-assisted platforms. I build Spring Boot backend systems
                and React frontend systems....from internal banking APIs and AI-powered
                invoice automation to live consumer products.
              </p>

              {/* Stats + certifications */}
              <div className="anim-fade-up delay-5 mt-6 space-y-3">
                <p className="text-[11px] font-mono font-medium text-slate-400">
                  {"// Over 10 projects shipped · 3+ yrs production experience"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {certs.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-amber-300 shadow-sm shadow-amber-500/5"
                    >
                      <svg width="12" height="12" className="h-3 w-3 shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="anim-fade-up delay-6 mt-8 space-y-3 font-mono">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
                  >
                    View work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/15 px-5 py-2.5 text-sm font-semibold text-red-300 transition-all hover:bg-red-500/25 hover:border-red-400"
                  >
                    <svg width="16" height="16" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span>Discuss a project</span>
                  </a>
                </div>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 underline underline-offset-4 decoration-slate-600 hover:text-white hover:decoration-red-500 transition-all"
                >
                  Download CV
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

              {/* Skills grouped by category */}
              <div className="mt-12 pt-8 border-t border-white/[0.08]">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-red-400 mb-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  {"// TECHNICAL STACK & CAPABILITIES"}
                </h2>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 font-mono">
                {skills.map(({ label, items }) => (
                  <div key={label}>
                    <p className="mb-2 text-xs font-bold text-slate-400">
                      {"//"} {label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-slate-700/70 bg-[#1e222b]/90 px-2.5 py-1 text-xs text-slate-200 shadow-sm transition-all hover:border-red-500/50 hover:bg-slate-800 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

            {/* Interactive Terminal / Profile Console Widget — right */}
            <div className="anim-fade-up delay-2 order-1 flex justify-center lg:order-2 lg:justify-end w-full lg:sticky lg:top-28">
              <ConsoleWidget />
            </div>

          </div>
        </section>

        {/* ── Work ── */}
        <section id="work" className="border-t border-white/[0.08] scroll-mt-20 py-14">
          {/* Full-Stretch Featured Darlington Container */}
          <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10">
            <RevealSection>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-4">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  {"// FEATURED WORK & CASE STUDIES"}
                </h2>
                <span className="text-[11px] font-mono text-slate-400">{"[ PRODUCTION_READY_SYSTEMS ]"}</span>
              </div>
            </RevealSection>

            {/* Featured Horizontal Card for Maison Darlington with Stretched Desktop Live Preview */}
            {maisonProject && (
              <RevealSection className="mt-6">
                <div className="group relative rounded-3xl border border-white/[0.08] bg-[#1e222b]/90 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-red-500/50 hover:bg-[#242832]/95 hover:shadow-[0_0_60px_-10px_rgba(239,68,68,0.25)] overflow-hidden">
                  {/* Top Status Header */}
                  <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 px-6 sm:px-8 py-4 font-mono text-xs bg-[#16181d]/95">
                    <div className="flex items-center gap-3">
                      <span className="rounded px-2.5 py-0.5 font-bold border tracking-wider text-[10px] text-red-400 bg-red-500/15 border-red-500/30">
                        GET
                      </span>
                      <span className="text-slate-200 font-semibold select-all text-xs sm:text-sm">
                        {endpoints["maison-darlington"]?.route || "/api/v1/brand/menu"}
                      </span>
                      <span className="hidden sm:inline text-slate-600">|</span>
                      <span className="hidden sm:inline text-slate-400 font-normal text-xs">FEATURED_PRODUCTION_SYSTEM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-2 text-xs font-bold text-red-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
                        LIVE ON PROD
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-10 items-stretch">
                    {/* Left Side: Stretched Desktop Live Site Preview inside macOS Browser Window (Hidden on mobile as requested) */}
                    <div className="hidden lg:flex xl:col-span-7 lg:col-span-7 flex-col rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl overflow-hidden ring-1 ring-white/[0.06]">
                      {/* Custom Terminal / Browser Window Bar */}
                      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#161b22] px-4 sm:px-5 py-3 font-mono text-xs gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] inline-block" />
                          <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] inline-block" />
                          <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] inline-block" />
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-black/50 px-3 sm:px-4 py-1.5 border border-white/[0.06] text-slate-300 flex-1 max-w-[340px] justify-center truncate shadow-inner">
                          <span className="text-emerald-400 select-none shrink-0">🔒</span>
                          <span className="truncate text-xs font-medium select-all">https://maidarlington.com</span>
                        </div>
                        <a
                          href="https://maidarlington.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors font-bold select-none bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-md border border-red-500/30 shrink-0"
                        >
                          <span>Live Site ↗</span>
                        </a>
                      </div>

                      {/* Interactive Live Preview Viewport (Exact 1.6x Desktop Scale to 100% Fill without Black Gaps Underneath) */}
                      <div className="relative w-full h-[380px] sm:h-[500px] xl:h-[580px] bg-[#0b0e14] overflow-hidden flex-1">
                        {/* Loading background indicator while live iframe boots */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-500 font-mono text-xs bg-[#0b0e14] z-0 select-none px-4 text-center">
                          <div className="w-6 h-6 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                          <span>Connecting to live interactive preview of maidarlington.com...</span>
                        </div>

                        {/* 160% Desktop Viewport Scaled by exactly 0.625 (1/1.6) so 1.6 * 0.625 = 1.0 (100% exact fill height & width) */}
                        <div
                          className="absolute top-0 left-0 z-10 pointer-events-auto"
                          style={{
                            width: "160%",
                            height: "160%",
                            transform: "scale(0.625)",
                            transformOrigin: "top left",
                          }}
                        >
                          <iframe
                            src="https://maidarlington.com/"
                            className="w-full h-full border-0 bg-transparent block"
                            title="Maison Darlington Live Site Preview"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Bottom Status & Rating Bar */}
                      <div className="bg-[#161b22]/95 border-t border-white/[0.08] px-4 sm:px-5 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-2.5 leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                          <span className="text-[11px] sm:text-xs">Interactive Desktop Preview • Scroll inside frame to explore menu & ordering</span>
                        </div>
                        <div className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-emerald-300 font-bold text-[11px] tracking-wide self-end sm:self-auto">
                          <span>★ 4.8 Rating (100+ Reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Case Study Details */}
                    <div className="xl:col-span-5 lg:col-span-5 flex flex-col justify-between h-full font-mono py-1">
                      <div>
                        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-red-400 font-bold mb-2.5">
                          <span>{"// FEATURED_PRODUCTION_SYSTEM"}</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                          {maisonProject.title}
                        </h3>
                        <p className="mt-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-normal">
                          {maisonProject.tagline}
                        </p>

                        <div className="mt-6 space-y-4 pt-5 border-t border-slate-800/80 text-xs text-slate-300">
                          <div className="flex flex-col gap-1.5">
                            <span className="text-red-400 font-bold tracking-wider select-none text-xs">[ CHALLENGE & SCOPE ]</span>
                            <p className="text-slate-300 font-sans text-xs sm:text-[13.5px] leading-relaxed">
                              {maisonProject.problem}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1.5 pt-2">
                            <span className="text-red-400 font-bold tracking-wider select-none text-xs">[ SOLUTION & PERFORMANCE ]</span>
                            <p className="text-slate-300 font-sans text-xs sm:text-[13.5px] leading-relaxed">
                              {maisonProject.solution}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="mt-7">
                          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-3">
                            {"// System Architecture & Stack"}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {maisonProject.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md border border-slate-700/80 bg-zinc-900/90 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:border-red-500/60 hover:bg-slate-800 hover:text-white shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action CTAs */}
                      <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/case-studies/${maisonProject.slug}`}
                          className="inline-flex items-center gap-2.5 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 ring-1 ring-red-500/50"
                        >
                          <span>View Case Study</span>
                          <svg width="16" height="16" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <a
                          href={maisonProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 rounded-xl border border-red-500/40 bg-red-500/15 px-6 py-3 text-sm font-semibold text-red-300 transition-all hover:bg-red-500/25 hover:border-red-400"
                        >
                          <span>Visit Live Site</span>
                          <svg width="14" height="14" className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            )}
          </div>

          {/* Remaining Projects Grid (Centered Standard Container) */}
          <div className="mx-auto max-w-5xl px-6 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((cs, i) => (
                <RevealSection
                  key={cs.slug}
                  style={{ transitionDelay: `${i * 60}ms` } as React.CSSProperties}
                >
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="group relative block rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md p-6 sm:p-7 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#242832]/90 hover:shadow-2xl hover:shadow-[0_0_35px_-5px_rgba(239,68,68,0.15)] overflow-hidden"
                  >
                    {/* Top status bar representing endpoint metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3.5 mb-4 font-mono text-[10px] sm:text-xs">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`rounded px-1.5 py-0.5 font-bold border tracking-wider text-[9px] shrink-0 ${methodColors[endpoints[cs.slug]?.method || "GET"]}`}>
                          {endpoints[cs.slug]?.method || "GET"}
                        </span>
                        <span className="text-slate-200 font-semibold select-all truncate">
                          {endpoints[cs.slug]?.route}
                        </span>
                      </div>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-wide shrink-0 ${statusColors[cs.status]}`}>
                        {cs.status}
                      </span>
                    </div>

                    {/* Readable System Dashboard Content */}
                    <div className="space-y-4 font-mono text-xs text-slate-300">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                          {cs.title}
                        </h3>
                        <p className="mt-1.5 text-slate-300 font-sans text-xs sm:text-[13.5px] leading-relaxed font-normal">
                          {cs.tagline}
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-2.5 border-t border-slate-800/60">
                        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-baseline">
                          <span className="text-red-400 font-bold select-none">[ CHALLENGE ]</span>
                          <span className="text-slate-200 font-sans text-xs leading-relaxed">{cs.problem}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-baseline">
                          <span className="text-red-400 font-bold select-none">[ PLATFORM ]</span>
                          <span className="text-slate-200 font-sans text-xs font-medium">
                            {cs.status === "Live" ? "Production System (Live)" : "Minimum Viable Product (MVP)"}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-baseline">
                          <span className="text-red-400 font-bold select-none">[ ENGINE ]</span>
                          <div className="flex flex-wrap gap-1.5">
                            {cs.stack.slice(0, 3).map((tech) => (
                              <span key={tech} className="rounded bg-zinc-800/80 border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-200">
                                {tech}
                              </span>
                            ))}
                            {cs.stack.length > 3 && (
                              <span className="text-[10px] text-slate-400 font-semibold pl-0.5">
                                +{cs.stack.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Restrained GET details footer (frontend craft signal) */}
                    <div className="mt-5 pt-3.5 border-t border-slate-800/60 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-500 select-none">
                        $ cat docs/{cs.slug}.json
                      </span>
                      <span className="font-mono text-[11px] font-bold text-red-400 inline-flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-300">
                        [ GET CASE_STUDY ]
                        <svg width="12" height="12" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="border-t border-white/[0.08] scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <RevealSection>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <div>
                  <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    {"// DIRECT CONTACT & AVAILABILITY"}
                  </h2>
                  <p className="mt-5 font-mono text-3xl font-bold leading-tight tracking-tight text-white">
                    Available_for_work()
                  </p>
                  <p className="mt-3 max-w-sm text-sm font-medium text-slate-300 font-sans">
                    Contract, freelance, or full-time. Remote or Lagos-based.
                  </p>
                </div>

                {/* Desktop / Tablet Contact Cards (sm & above) */}
                <div className="hidden sm:grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <a
                    href="mailto:bakaretioluwani@yahoo.com"
                    className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#242832]/90 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/25 to-orange-500/15 text-red-400 ring-1 ring-red-500/40 shadow-md shadow-red-500/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-red-400">
                      <svg width="20" height="20" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-red-400 font-mono">Email</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-medium tracking-wide truncate font-mono">bakaretioluwani@yahoo.com</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-[#242832]/90 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-amber-500/20 text-pink-400 ring-1 ring-pink-500/40 shadow-md shadow-pink-500/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-pink-400">
                      <svg width="20" height="20" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-pink-400 font-mono">Instagram</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-medium tracking-wide truncate font-mono">boluthecreator._</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/bakare-tioluwani-96a135261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#242832]/90 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-500/15 text-blue-400 ring-1 ring-blue-500/40 shadow-md shadow-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-blue-400">
                      <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-blue-400 font-mono">LinkedIn</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-medium tracking-wide truncate font-mono">linkedin.com/in/tioluwani</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/boluthe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/50 hover:bg-[#242832]/90 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(203,213,225,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-400/25 via-indigo-500/20 to-purple-500/15 text-slate-100 ring-1 ring-slate-400/40 shadow-md shadow-slate-400/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-slate-300">
                      <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-slate-200 font-mono">GitHub</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-medium tracking-wide truncate font-mono">github.com/boluthe</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Mobile Icon-Only Horizontal Line (Only visible below sm breakpoint - shows ONLY clean icons in a sleek bar) */}
                <div className="sm:hidden pt-4">
                  <div className="flex items-center justify-around w-full rounded-2xl border border-white/[0.08] bg-[#1e222b]/80 backdrop-blur-md px-4 py-4 shadow-xl">
                    <a
                      href="mailto:bakaretioluwani@yahoo.com"
                      aria-label="Email"
                      className="p-3.5 text-slate-300 hover:text-red-400 transition-all duration-200 active:scale-90 hover:scale-110"
                    >
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </a>
                    <div className="h-6 w-px bg-white/[0.08]" />
                    <a
                      href={INSTAGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-3.5 text-slate-300 hover:text-pink-400 transition-all duration-200 active:scale-90 hover:scale-110"
                    >
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                      </svg>
                    </a>
                    <div className="h-6 w-px bg-white/[0.08]" />
                    <a
                      href="https://linkedin.com/in/bakare-tioluwani-96a135261"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-3.5 text-slate-300 hover:text-blue-400 transition-all duration-200 active:scale-90 hover:scale-110"
                    >
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <div className="h-6 w-px bg-white/[0.08]" />
                    <a
                      href="https://github.com/boluthe"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-3.5 text-slate-300 hover:text-white transition-all duration-200 active:scale-90 hover:scale-110"
                    >
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        <footer className="border-t border-slate-800/80 px-6 py-6 pb-16">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pr-14 sm:pr-20">
            <span>© 2026 Bakare Tioluwani Boluwatife</span>
            <span>Lagos, Nigeria</span>
          </div>
        </footer>

        {/* Diagnostics Status Bar (Systems Developer vibe) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.1] bg-[#262a33]/95 backdrop-blur-md px-4 sm:px-6 py-2 text-[10px] sm:text-xs font-mono font-medium text-slate-300 flex flex-wrap justify-between items-center gap-2 select-none shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wider shrink-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM_OK
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline shrink-0">JVM: ACTIVE</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline truncate">RUNTIME: JAVA 17 / GO 1.21 / NODE.JS</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="hidden xs:inline text-slate-400">PING: 8ms</span>
            <span className="text-red-400 font-bold">PORT: 8080</span>
          </div>
        </div>
      </div>
    </>
  );
}
