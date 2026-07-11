"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import Link from "next/link";
import BootLoader from "@/components/BootLoader";
import ContactForm from "@/components/ContactForm";

const INSTAGRAM_LINK = "https://www.instagram.com/boluthecreator._/";

const statusColors = {
  Live: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30 font-semibold shadow-sm shadow-emerald-500/10",
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

const categoryAccents: Record<string, { badge: string }> = {
  "Languages": {
    badge: "border-amber-500/35 bg-amber-500/[0.06] text-amber-300 dark:text-amber-300 light:text-amber-800 light:bg-amber-100/70 hover:border-amber-400 hover:bg-amber-500/15",
  },
  "Frameworks & UI": {
    badge: "border-emerald-500/35 bg-emerald-500/[0.06] text-emerald-300 dark:text-emerald-300 light:text-emerald-800 light:bg-emerald-100/70 hover:border-emerald-400 hover:bg-emerald-500/15",
  },
  "Databases": {
    badge: "border-sky-500/35 bg-sky-500/[0.06] text-sky-300 dark:text-sky-300 light:text-sky-800 light:bg-sky-100/70 hover:border-sky-400 hover:bg-sky-500/15",
  },
  "DevOps & Observability": {
    badge: "border-purple-500/35 bg-purple-500/[0.06] text-purple-300 dark:text-purple-300 light:text-purple-800 light:bg-purple-100/70 hover:border-purple-400 hover:bg-purple-500/15",
  },
  "AI & Automation": {
    badge: "border-rose-500/35 bg-rose-500/[0.06] text-rose-300 dark:text-rose-300 light:text-rose-800 light:bg-rose-100/70 hover:border-rose-400 hover:bg-rose-500/15",
  },
};

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
  GET: "text-emerald-400 dark:text-emerald-400 light:text-emerald-700 bg-emerald-500/15 border-emerald-500/30 font-semibold",
  POST: "text-sky-300 dark:text-sky-300 light:text-sky-700 bg-sky-500/15 border-sky-500/30 font-semibold",
  PUT: "text-amber-300 dark:text-amber-300 light:text-amber-700 bg-amber-500/15 border-amber-500/30 font-semibold",
} as const;

function StandardCaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <RevealSection className="h-full">
      <Link
        href={`/case-studies/${cs.slug}`}
        className="group relative block rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/80 dark:bg-[#1e222b]/80 light:bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-lg shadow-black/30 light:shadow-slate-300/60 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#242832]/90 light:hover:bg-slate-50 hover:shadow-2xl hover:shadow-[0_0_35px_-5px_rgba(239,68,68,0.2)] overflow-hidden flex flex-col justify-between h-full"
      >
        {/* Top status bar representing endpoint metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-3.5 mb-4 font-mono text-[10px] sm:text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className={`rounded px-1.5 py-0.5 font-bold border tracking-wider text-[9px] shrink-0 ${methodColors[endpoints[cs.slug]?.method || "GET"]}`}>
              {endpoints[cs.slug]?.method || "GET"}
            </span>
            <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold select-all truncate">
              {endpoints[cs.slug]?.route}
            </span>
          </div>
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-wide shrink-0 ${statusColors[cs.status]}`}>
            {cs.status}
          </span>
        </div>

        {/* Readable System Dashboard Content */}
        <div className="space-y-4 font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex-1">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight group-hover:text-red-400 dark:group-hover:text-red-400 light:group-hover:text-red-600 transition-colors">
              {cs.title}
            </h3>
            <p className="mt-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans text-xs sm:text-[13.5px] leading-relaxed font-normal">
              {cs.tagline}
            </p>
          </div>

          <div className="space-y-2.5 pt-2.5 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-baseline">
              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold select-none">[ CHALLENGE ]</span>
              <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-sans text-xs leading-relaxed line-clamp-3">{cs.problem}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-baseline">
              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold select-none">[ PLATFORM ]</span>
              <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-sans text-xs font-medium">
                {cs.status === "Live" ? "Production System (Live)" : "Minimum Viable Product (MVP)"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1 sm:gap-2 items-baseline">
              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold select-none">[ ENGINE ]</span>
              <div className="flex flex-wrap gap-1.5">
                {cs.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-slate-100 border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 px-2 py-0.5 text-[10px] text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {tech}
                  </span>
                ))}
                {cs.stack.length > 4 && (
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-semibold pl-0.5">
                    +{cs.stack.length - 4}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Restrained GET details footer (frontend craft signal) */}
        <div className="mt-5 pt-3.5 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center justify-between gap-2 sm:gap-3 flex-nowrap overflow-hidden">
          <span className="font-mono text-[10px] text-slate-500 dark:text-slate-500 light:text-slate-600 select-none min-w-0 truncate pr-1">
            $ cat docs/{cs.slug}.json
          </span>
          <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-red-400 dark:text-red-400 light:text-red-600 inline-flex items-center gap-1 sm:gap-1.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-300 shrink-0 whitespace-nowrap">
            [ GET CASE_STUDY ]
            <svg width="12" height="12" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </RevealSection>
  );
}

export default function HomePage() {
  const [booting, setBooting] = useState(true);
  const [activeFilter, setActiveFilter] = useState<"All" | "Enterprise & Banking" | "AI & Automation" | "Consumer & SaaS">("All");
  const invoiceProject = caseStudies.find((cs) => cs.slug === "invoice-agent");
  const crmProject = caseStudies.find((cs) => cs.slug === "cmr-system");
  const maisonProject = caseStudies.find((cs) => cs.slug === "maison-darlington");
  const inventoryProject = caseStudies.find((cs) => cs.slug === "inventory-management");
  const rencashProject = caseStudies.find((cs) => cs.slug === "rencash");

  return (
    <>
      {booting && <BootLoader onComplete={() => setBooting(false)} />}
      <div className={`relative bg-dot-grid bg-mesh-lines min-h-screen transition-opacity duration-700 ${booting ? "opacity-0" : "opacity-100"}`}>
        <Nav />

        {/* ── Hero ── */}
        <section className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-10 pb-12 pt-28 lg:grid-cols-[1fr_300px] lg:gap-16">

            {/* Text — left */}
            <div className="order-2 lg:order-1">
              <div className="anim-fade-up delay-1 mb-5 flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-semibold">$ curl -s /system/health</span>
                <span className="rounded-md border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-0.5 font-bold uppercase text-emerald-400 dark:text-emerald-400 light:text-emerald-700 shadow-sm shadow-emerald-500/10">
                  ● Open to Work
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">Lagos, Nigeria</span>
              </div>

              <h1 className="anim-fade-up delay-2 font-mono text-4xl font-bold leading-[1.1] tracking-tight text-white dark:text-white light:text-slate-900 sm:text-5xl lg:text-6xl">
                Bakare <br />Tioluwani<br />
                Boluwatife
              </h1>

              <p className="anim-fade-up delay-3 mt-4 font-mono text-lg font-medium text-emerald-400 dark:text-emerald-400 light:text-emerald-700 tracking-tight">
                Full_Stack_Engineer<span className="font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-700 animate-pulse font-sans">_</span>
              </p>

              <p className="anim-fade-up delay-4 mt-6 max-w-md text-[15px] leading-relaxed text-slate-200 dark:text-slate-200 light:text-slate-700 font-sans">
                I have production experience across various SaaS products, e-commerce, and AI-assisted platforms. I build Spring Boot backend systems
                and React frontend systems....from internal banking APIs and AI-powered
                invoice automation to live consumer products.
              </p>

              {/* Stats + certifications */}
              <div className="anim-fade-up delay-5 mt-6 space-y-3">
                <p className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {"Over 10 projects shipped · 3+ yrs production experience"}
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
                  className="inline-flex items-center gap-1 text-xs text-slate-400 underline underline-offset-4 decoration-slate-600 hover:text-white hover:decoration-emerald-500 transition-all"
                >
                  Download CV
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Photo — right */}
            <div className="anim-fade-up delay-2 order-1 flex justify-center lg:order-2 lg:justify-end lg:pt-1.5">
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-white/10" />
                <div className="relative w-56 overflow-hidden rounded-2xl bg-slate-900 border border-white/30 shadow-2xl shadow-white/10 sm:w-64 lg:w-72">
                  <Image
                    src="/profile.jpg"
                    alt="Tioluwani Bakare"
                    width={320}
                    height={400}
                    className="h-auto w-full object-cover object-top filter contrast-105 transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/10 blur-2xl" />
              </div>
            </div>

          </div>
        </section>

        {/* ── Technical Stack & Capabilities (Full Width Spread-Out Section) ── */}
        <section className="border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 py-10 sm:py-14 px-6">
          <div className="mx-auto max-w-5xl">
            <RevealSection>
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 pb-3 mb-4 sm:pb-4 sm:mb-8">
                <h2 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 flex items-center gap-2 sm:gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  {"TECHNICAL STACK & CAPABILITIES — FULL SPECTRUM"}
                </h2>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">{"[ CORE_ENGINEERING_TOOLKIT ]"}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 font-mono">
                {skills.map(({ label, items }) => (
                  <div key={label}>
                    <p className="mb-3 text-xs font-bold text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase tracking-wider">
                      {label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span
                          key={item}
                          className={`rounded border px-2.5 py-1 text-xs font-medium shadow-sm transition-all ${categoryAccents[label]?.badge || "border-slate-700/70 dark:border-slate-700/70 light:border-slate-300 bg-[#1e222b]/90 dark:bg-[#1e222b]/90 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800"}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── Work ── */}
        <section id="work" className="border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 scroll-mt-20 py-14">
          {/* Full-Stretch Featured Darlington Container */}
          <div className="mx-auto max-w-5xl px-6">
            <RevealSection>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 pb-3 mb-3 sm:pb-4 sm:mb-4 sm:gap-3">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600" />
                  {"FEATURED WORK & CASE STUDIES"}
                </h2>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">{"[ PRODUCTION_READY_SYSTEMS ]"}</span>
              </div>
            </RevealSection>

            {/* Domain Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4 mb-2 font-mono text-xs">
              {(["All", "Enterprise & Banking", "AI & Automation", "Consumer & SaaS"] as const).map((filter) => {
                const count = filter === "All" ? 5 : filter === "Enterprise & Banking" ? 2 : filter === "AI & Automation" ? 1 : 2;
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-xl px-3.5 py-1.5 font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-105"
                        : "border border-slate-700/80 dark:border-white/[0.12] light:border-slate-300 bg-[#1e222b]/60 dark:bg-[#1e222b]/60 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-emerald-500/60 hover:text-emerald-400 light:hover:text-emerald-600"
                    }`}
                  >
                    [ {filter} ({count}) ]
                  </button>
                );
              })}
            </div>

            {/* Unified 2-Column Grid with Horizontal Maison Darlington Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mt-3 sm:mt-6">
              {/* Row 1: Invoice Agent & CMR System */}
              {(activeFilter === "All" || activeFilter === "AI & Automation") && invoiceProject && <StandardCaseStudyCard cs={invoiceProject} />}
              {(activeFilter === "All" || activeFilter === "Enterprise & Banking") && crmProject && <StandardCaseStudyCard cs={crmProject} />}

              {/* Row 2: Maison Darlington (Horizontal Full-Width Card across both columns — Writing ONLY, No Preview) */}
              {(activeFilter === "All" || activeFilter === "Consumer & SaaS") && maisonProject && (
                <RevealSection className="col-span-1 md:col-span-2 h-full">
                  <div className="group relative rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/90 dark:bg-[#1e222b]/90 light:bg-white/95 backdrop-blur-xl shadow-2xl light:shadow-slate-300/60 transition-all duration-500 hover:border-red-500/50 hover:bg-[#242832]/95 light:hover:bg-slate-50 hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)] overflow-hidden p-6 sm:p-8 font-mono flex flex-col justify-between h-full">
                    <div>
                      {/* Top Status Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 pb-4 mb-5 text-xs">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`rounded px-2 py-0.5 font-bold border tracking-wider text-[10px] shrink-0 ${methodColors[endpoints[maisonProject.slug]?.method || "GET"]}`}>
                            {endpoints[maisonProject.slug]?.method || "GET"}
                          </span>
                          <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold select-all truncate text-xs sm:text-sm">
                            {endpoints[maisonProject.slug]?.route || "/api/v1/brand/menu"}
                          </span>
                          <span className="hidden sm:inline text-slate-600 dark:text-slate-600 light:text-slate-400">|</span>
                          <span className="hidden sm:inline text-slate-400 dark:text-slate-400 light:text-slate-600 font-normal text-xs">FEATURED_PRODUCTION_SYSTEM</span>
                        </div>
                        <span className={`rounded-full border px-3 py-0.5 text-xs font-bold tracking-wide shrink-0 ${statusColors[maisonProject.status]}`}>
                          LIVE ON PROD
                        </span>
                      </div>

                      {/* Horizontal Writing Content */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        {/* Title and Tagline + Problem/Solution summary */}
                        <div className="lg:col-span-7 space-y-4">
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight group-hover:text-red-400 dark:group-hover:text-red-400 light:group-hover:text-red-600 transition-colors">
                              {maisonProject.title}
                            </h3>
                            <p className="mt-2 text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans text-sm sm:text-[15px] leading-relaxed font-normal">
                              {maisonProject.tagline}
                            </p>
                          </div>

                          <div className="space-y-3 pt-3 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                            <div className="flex flex-col gap-1">
                              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold tracking-wider select-none text-xs">[ CHALLENGE & SCOPE ]</span>
                              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans text-xs sm:text-[13.5px] leading-relaxed">
                                {maisonProject.problem}
                              </p>
                            </div>

                            <div className="flex flex-col gap-1 pt-1">
                              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold tracking-wider select-none text-xs">[ SOLUTION & PERFORMANCE ]</span>
                              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans text-xs sm:text-[13.5px] leading-relaxed">
                                {maisonProject.solution}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Right column of horizontal card: Architecture & Stack + Action Buttons */}
                        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-800/80 dark:lg:border-slate-800/80 light:lg:border-slate-200 lg:pl-8 h-full">
                          <div>
                            <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-bold uppercase tracking-wider block mb-3">
                              {"System Architecture & Stack"}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {maisonProject.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 transition-all hover:border-red-500/60 hover:bg-slate-800 light:hover:bg-slate-200 hover:text-white light:hover:text-slate-950 shadow-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action CTAs */}
                          <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-3.5">
                            <Link
                              href={`/case-studies/${maisonProject.slug}`}
                              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 ring-1 ring-emerald-500/50"
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
                              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/25 hover:border-emerald-400"
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

                    {/* Footer signal */}
                    <div className="mt-6 pt-3.5 border-t border-slate-800/60 flex items-center justify-between gap-2 sm:gap-3 flex-nowrap overflow-hidden">
                      <span className="font-mono text-[10px] text-slate-500 select-none min-w-0 truncate pr-1">
                        $ cat docs/maison-darlington.json
                      </span>
                      <Link
                        href={`/case-studies/${maisonProject.slug}`}
                        className="font-mono text-[10.5px] sm:text-[11px] font-bold text-red-400 inline-flex items-center gap-1 sm:gap-1.5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-300 shrink-0 whitespace-nowrap"
                      >
                        [ GET CASE_STUDY ]
                        <svg width="12" height="12" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </RevealSection>
              )}

              {/* Row 3: Inventory Management & RenCash */}
              {(activeFilter === "All" || activeFilter === "Consumer & SaaS") && inventoryProject && <StandardCaseStudyCard cs={inventoryProject} />}
              {(activeFilter === "All" || activeFilter === "Enterprise & Banking") && rencashProject && <StandardCaseStudyCard cs={rencashProject} />}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6 pt-6 pb-6 sm:py-16">
            <RevealSection>
              {/* Section Header */}
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 pb-4 mb-4 sm:pb-6 sm:mb-8 sm:gap-6">
                <div>
                  <h2 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 dark:text-emerald-400 light:text-emerald-700 flex items-center gap-2.5 mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    {"DIRECT CONTACT & AVAILABILITY"}
                  </h2>
                  <p className="font-mono text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white dark:text-white light:text-slate-900">
                    Available_for_work()
                  </p>
                </div>
                <p className="max-w-md text-sm sm:text-base font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans">
                  Contract, freelance, or full-time engineering opportunities. Remote worldwide or Lagos-based.
                </p>
              </div>

              {/* Side-by-Side Layout: Contact Form on Left, Social Media Links on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-3 sm:mt-8">
                {/* Left Side: Contact Form + Mobile Horizontal Social Bar */}
                <div className="lg:col-span-7 w-full flex flex-col gap-6">
                  <div className="flex-1 w-full">
                    <ContactForm />
                  </div>

                  {/* Mobile-Only Horizontal Social Icon Bar (Matching Live Site Screenshot) */}
                  <div className="lg:hidden w-full rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/95 dark:bg-[#1e222b]/95 light:bg-white/95 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-xl ring-1 ring-white/[0.04]">
                    {/* Email Icon */}
                    <a
                      href="mailto:bakaretioluwani@yahoo.com"
                      className="p-2 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 light:hover:text-emerald-600 hover:scale-110 transition-all duration-300"
                      title="Email"
                    >
                      <svg width="22" height="22" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </a>

                    <div className="h-5 w-[1px] bg-slate-700/80 dark:bg-slate-700/80 light:bg-slate-300" />

                    {/* Instagram Icon */}
                    <a
                      href={INSTAGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-pink-400 light:hover:text-pink-600 hover:scale-110 transition-all duration-300"
                      title="Instagram"
                    >
                      <svg width="22" height="22" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                      </svg>
                    </a>

                    <div className="h-5 w-[1px] bg-slate-700/80 dark:bg-slate-700/80 light:bg-slate-300" />

                    {/* LinkedIn Icon */}
                    <a
                      href="https://linkedin.com/in/bakare-tioluwani-96a135261"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-blue-400 light:hover:text-blue-600 hover:scale-110 transition-all duration-300"
                      title="LinkedIn"
                    >
                      <svg width="22" height="22" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <div className="h-5 w-[1px] bg-slate-700/80 dark:bg-slate-700/80 light:bg-slate-300" />

                    {/* GitHub Icon */}
                    <a
                      href="https://github.com/boluthe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-950 hover:scale-110 transition-all duration-300"
                      title="GitHub"
                    >
                      <svg width="22" height="22" className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Desktop-Only Right Side: Social Media Links (Matching Live Site) */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-4 w-full h-full">
                  {/* Email */}
                  <a
                    href="mailto:bakaretioluwani@yahoo.com"
                    className="group relative overflow-hidden flex-1 flex items-center gap-4 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/80 dark:bg-[#1e222b]/80 light:bg-white/95 backdrop-blur-md px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-[#242832]/90 light:hover:bg-slate-50 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/15 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 ring-1 ring-emerald-500/40 shadow-md shadow-emerald-500/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-emerald-400">
                      <svg width="20" height="20" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white dark:text-white light:text-slate-900 tracking-wider transition-colors group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 font-mono">Email</p>
                      <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5 font-medium tracking-wide truncate font-mono">bakaretioluwani@yahoo.com</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex-1 flex items-center gap-4 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/80 dark:bg-[#1e222b]/80 light:bg-white/95 backdrop-blur-md px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-[#242832]/90 light:hover:bg-slate-50 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/25 via-purple-500/20 to-amber-500/20 text-pink-400 dark:text-pink-400 light:text-pink-600 ring-1 ring-pink-500/40 shadow-md shadow-pink-500/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-pink-400">
                      <svg width="20" height="20" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white dark:text-white light:text-slate-900 tracking-wider transition-colors group-hover:text-pink-400 dark:group-hover:text-pink-400 light:group-hover:text-pink-600 font-mono">Instagram</p>
                      <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5 font-medium tracking-wide truncate font-mono">Bakare Tioluwani Boluwatife</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-pink-400 dark:group-hover:text-pink-400 light:group-hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/bakare-tioluwani-96a135261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex-1 flex items-center gap-4 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/80 dark:bg-[#1e222b]/80 light:bg-white/95 backdrop-blur-md px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#242832]/90 light:hover:bg-slate-50 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-500/15 text-blue-400 dark:text-blue-400 light:text-blue-600 ring-1 ring-blue-500/40 shadow-md shadow-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-blue-400">
                      <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white dark:text-white light:text-slate-900 tracking-wider transition-colors group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 font-mono">LinkedIn</p>
                      <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5 font-medium tracking-wide truncate font-mono">Bakare Tioluwani Boluwatife</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/boluthe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden flex-1 flex items-center gap-4 rounded-2xl border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/80 dark:bg-[#1e222b]/80 light:bg-white/95 backdrop-blur-md px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/50 hover:bg-[#242832]/90 light:hover:bg-slate-50 hover:shadow-xl hover:shadow-[0_0_30px_-5px_rgba(203,213,225,0.2)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-400/25 via-indigo-500/20 to-purple-500/15 text-slate-100 dark:text-slate-100 light:text-slate-800 ring-1 ring-slate-400/40 shadow-md shadow-slate-400/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-slate-300">
                      <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div className="relative z-10 min-w-0 flex-1">
                      <p className="text-[14px] font-bold text-white dark:text-white light:text-slate-900 tracking-wider transition-colors group-hover:text-slate-200 dark:group-hover:text-slate-200 light:group-hover:text-slate-800 font-mono">GitHub</p>
                      <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5 font-medium tracking-wide truncate font-mono">Bakare Tioluwani Boluwatife</p>
                    </div>
                    <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-200 dark:group-hover:text-slate-200 light:group-hover:text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 px-6 pt-6 pb-24 sm:py-8 sm:pb-28">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 pr-4">
            <span>© 2026 Bakare Tioluwani Boluwatife</span>
            <span className="font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">Lagos, Nigeria</span>
          </div>
        </footer>

        {/* Diagnostics Status Bar (Systems Developer vibe) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.1] dark:border-white/[0.1] light:border-slate-300 bg-[#262a33]/95 dark:bg-[#262a33]/95 light:bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 text-[10px] sm:text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-800 flex flex-wrap justify-between items-center gap-2 select-none shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-semibold tracking-wider shrink-0">
              SYSTEM_OK
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <span className="hidden xs:inline text-slate-400 dark:text-slate-400 light:text-slate-600">PING: 8ms</span>
            <span className="text-red-500 font-bold">PORT: 8080</span>
          </div>
        </div>
      </div>
    </>
  );
}
