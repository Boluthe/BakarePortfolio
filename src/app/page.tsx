"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";
import BootLoader from "@/components/BootLoader";

const WA_LINK =
  "https://wa.me/2349154604723?text=Hi%20Tioluwani%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.";

const statusColors = {
  Live:          "text-red-400 bg-red-500/5 border-red-500/15",
  MVP:           "text-white bg-white/5 border-white/15",
  "In Progress": "text-slate-500 bg-transparent border-white/[0.06]",
} as const;

const skills = [
  { label: "Languages",  items: ["Java", "Python", "SQL", "JavaScript", "PHP", "C++", "C#"] },
  { label: "Frameworks & UI", items: ["Spring Boot", "Spring Security", "React.js", "Next.js", "Vite", "Tailwind CSS"] },
  { label: "Databases",  items: ["PostgreSQL", "MySQL", "Oracle DB 12c"] },
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
  GET: "text-red-500 bg-red-500/5 border-red-500/20",
  POST: "text-white bg-white/5 border-white/20",
  PUT: "text-slate-300 bg-slate-950 border-white/[0.08]",
} as const;

export default function HomePage() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      {booting && <BootLoader onComplete={() => setBooting(false)} />}
      <div className={`relative bg-dot-grid bg-mesh-lines min-h-screen transition-opacity duration-700 ${booting ? "opacity-0" : "opacity-100"}`}>
        <Nav />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-[1fr_300px] lg:gap-20">

          {/* Text — left */}
          <div className="order-2 lg:order-1">
            <div className="anim-fade-up delay-1 mb-6 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-slate-500">$ curl -s /system/health</span>
              <span className="rounded-md border border-red-500/20 bg-red-500/10 px-2 py-0.5 font-semibold uppercase text-red-500 animate-pulse">
                ● Open to Work
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-500">Lagos, Nigeria</span>
            </div>

            <h1 className="anim-fade-up delay-2 font-mono text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tioluwani<br />
              Boluwatife<br/>
              Bakare
            </h1>

            <p className="anim-fade-up delay-3 mt-5 font-mono text-lg font-medium text-red-500 tracking-tight">
              Full_Stack_Engineer<span className="font-bold text-red-500 animate-pulse font-sans">_</span>
            </p>

            <p className="anim-fade-up delay-4 mt-6 max-w-md text-[14px] leading-relaxed text-slate-400 font-sans">
              Production experience at Union Bank of Nigeria and across SaaS,
              e-commerce, and AI-assisted platforms. I build Spring Boot backend systems
              and React frontend systems....from internal banking APIs and AI-powered
              invoice automation to live consumer products.
            </p>

            {/* Stats + certifications */}
            <div className="anim-fade-up delay-5 mt-6 space-y-3">
              <p className="text-[11px] font-mono text-slate-500">
                {"// Over 10 projects shipped · 3+ yrs production experience"}
              </p>
              <div className="flex flex-wrap gap-2">
                {certs.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 text-[10px] font-mono text-amber-400"
                  >
                    <svg width="12" height="12" className="h-3 w-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                  className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25"
                >
                  View work
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-300 transition-all hover:bg-red-500/20 hover:border-red-400/50"
                >
                  <svg width="16" height="16" className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Discuss a project
                </a>
              </div>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-500 underline underline-offset-4 decoration-slate-700 hover:text-slate-300 hover:decoration-slate-500 transition-colors"
              >
                Download CV
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Skills grouped by category */}
            <div className="mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-8 font-mono">
              {skills.map(({ label, items }) => (
                <div key={label}>
                  <p className="mb-2 text-xs font-bold text-slate-500">
                    {"//"} {label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-white/[0.05] bg-slate-950/40 px-2 py-0.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo — right */}
          <div className="anim-fade-up delay-2 order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-red-600/20 via-transparent to-red-500/5" />
              <div className="relative w-56 overflow-hidden rounded-2xl bg-black border border-white/[0.08] shadow-2xl shadow-black/60 sm:w-64 lg:w-72">
                <Image
                  src="/profile.jpg"
                  alt="Tioluwani Bakare"
                  width={320}
                  height={400}
                  className="h-auto w-full object-cover object-top filter grayscale contrast-125 brightness-90"
                  priority
                />
              </div>
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-red-600/8 blur-2xl" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="border-t border-white/[0.06] scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-24">

          <RevealSection>
            <h2 className="font-mono text-xs text-slate-500">
              {"// 02 — Selected Work"}
            </h2>
          </RevealSection>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <RevealSection
                key={cs.slug}
                style={{ transitionDelay: `${i * 80}ms` } as React.CSSProperties}
              >
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group relative block rounded-xl border border-white/[0.06] bg-slate-950/20 backdrop-blur-md p-6 transition-all duration-300 hover:border-red-500/30 hover:bg-slate-950/40 hover:shadow-2xl hover:shadow-[0_0_35px_-5px_rgba(239,68,68,0.15)] overflow-hidden"
                >
                  {/* Top status bar representing endpoint metadata */}
                  <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4 font-mono text-[10px] sm:text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`rounded px-1.5 py-0.5 font-bold border tracking-wider text-[8px] sm:text-[9px] ${methodColors[endpoints[cs.slug]?.method || "GET"]}`}>
                        {endpoints[cs.slug]?.method || "GET"}
                      </span>
                      <span className="text-slate-400 font-semibold select-all truncate max-w-[120px] sm:max-w-none">
                        {endpoints[cs.slug]?.route}
                      </span>
                    </div>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide ${statusColors[cs.status]}`}>
                      {cs.status}
                    </span>
                  </div>

                  {/* Readable System Dashboard Content */}
                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                        {cs.title}
                      </h3>
                      <p className="mt-1.5 text-slate-400 font-sans text-xs sm:text-[13px] leading-relaxed font-normal">
                        {cs.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/[0.03]">
                      <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
                        <span className="text-red-500 font-bold select-none">[ CHALLENGE ]</span>
                        <span className="text-slate-300 font-sans text-xs leading-relaxed">{cs.problem}</span>
                      </div>

                      <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
                        <span className="text-red-500 font-bold select-none">[ PLATFORM ]</span>
                        <span className="text-slate-300 font-sans text-xs">
                          {cs.status === "Live" ? "Production System (Live)" : "Minimum Viable Product (MVP)"}
                        </span>
                      </div>

                      <div className="grid grid-cols-[100px_1fr] gap-2 items-baseline">
                        <span className="text-red-500 font-bold select-none">[ ENGINE ]</span>
                        <div className="flex flex-wrap gap-1">
                          {cs.stack.slice(0, 3).map((tech) => (
                            <span key={tech} className="rounded bg-black border border-white/[0.08] px-1.5 py-0.5 text-[9px] text-slate-300">
                              {tech}
                            </span>
                          ))}
                          {cs.stack.length > 3 && (
                            <span className="text-[9px] text-slate-500 font-semibold pl-0.5">
                              +{cs.stack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Restrained GET details footer (frontend craft signal) */}
                  <div className="mt-5 pt-3.5 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="font-mono text-[9px] text-slate-600 select-none">
                      $ cat docs/{cs.slug}.json
                    </span>
                    <span className="font-mono text-[11px] text-red-500 inline-flex items-center gap-1.5 transition-all duration-300 group-hover:translate-x-0.5">
                      [ GET CASE_STUDY ]
                      <svg width="12" height="12" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <section id="contact" className="border-t border-white/[0.06] scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <RevealSection>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="font-mono text-xs text-slate-500">
                  {"// 03 — Contact / Diagnostics"}
                </h2>
                <p className="mt-6 font-mono text-3xl font-bold leading-tight tracking-tight text-white">
                  Available_for_work()
                </p>
                <p className="mt-4 max-w-sm text-sm text-slate-500">
                  Contract, freelance, or full-time. Remote or Lagos-based.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.04] bg-slate-950/20 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:border-red-500/30 hover:bg-slate-900/40 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
                    <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="relative z-10 min-w-0 flex-1">
                    <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-red-500 font-mono">WhatsApp</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium tracking-wide truncate font-mono">+234 915 460 4723</p>
                  </div>
                  <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:bakaretioluwani@yahoo.com"
                  className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.04] bg-slate-950/20 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:border-red-500/30 hover:bg-slate-900/40 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
                    <svg width="20" height="20" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="relative z-10 min-w-0 flex-1">
                    <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-red-500 font-mono">Email</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium tracking-wide truncate font-mono">bakaretioluwani@yahoo.com</p>
                  </div>
                  <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/bakare-tioluwani-96a135261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.04] bg-slate-950/20 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-slate-900/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                    <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="relative z-10 min-w-0 flex-1">
                    <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-white font-mono">LinkedIn</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium tracking-wide truncate font-mono">Tioluwani Bakare</p>
                  </div>
                  <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/boluthe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 rounded-2xl border border-white/[0.04] bg-slate-950/20 backdrop-blur-md px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-slate-900/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.05)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-slate-300 ring-1 ring-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-800">
                    <svg width="20" height="20" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="relative z-10 min-w-0 flex-1">
                    <p className="text-[14px] font-bold text-white tracking-wider transition-colors group-hover:text-white font-mono">GitHub</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-medium tracking-wide truncate font-mono">boluthe</p>
                  </div>
                  <svg width="16" height="16" className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-6 py-8 pb-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-600">
          <span>© 2026 Tioluwani Bakare</span>
          <span>Lagos, Nigeria</span>
        </div>
      </footer>

      {/* Diagnostics Status Bar (Systems Developer vibe) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.08] bg-black/95 backdrop-blur-md px-6 py-2.5 text-[10px] font-mono text-slate-500 flex justify-between items-center sm:text-xs select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-red-500 font-semibold tracking-wider">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            SYSTEM_OK
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden sm:inline">JVM: ACTIVE</span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="hidden md:inline">RUNTIME: JAVA 17 / GO 1.21 / NODE.JS</span>
        </div>
        <div className="flex items-center gap-3.5">
          <span>PING: 8ms</span>
          <span className="text-red-500/80 font-bold">PORT: 8080</span>
        </div>
      </div>
    </div>
    </>
  );
}
