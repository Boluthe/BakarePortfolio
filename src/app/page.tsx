import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

const statusColors = {
  Live:        "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  MVP:         "text-blue-400   bg-blue-500/10   border-blue-500/20",
  "In Progress":"text-amber-400  bg-amber-500/10  border-amber-500/20",
} as const;

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-[1fr_300px] lg:gap-20">

          {/* Text — left */}
          <div className="order-2 lg:order-1">
            <p className="anim-fade-up delay-1 mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              Open to work · Lagos, Nigeria
            </p>

            <h1 className="anim-fade-up delay-2 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tioluwani<br />Bakare
            </h1>

            <p className="anim-fade-up delay-3 mt-5 text-xl font-light text-slate-400">
              Fullstack Engineer
            </p>

            <p className="anim-fade-up delay-4 mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
              Backend engineer by focus. I write Spring Boot APIs that hold up
              under pressure, and React/TypeScript frontends that ship on
              schedule. Six years of production software across e-commerce,
              SaaS, and enterprise procurement.
            </p>

            <div className="anim-fade-up delay-5 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                Get in touch
              </a>
            </div>

            <p className="anim-fade-up delay-6 mt-10 text-[13px] tracking-wide text-slate-700">
              Java&nbsp;&nbsp;·&nbsp;&nbsp;Spring Boot&nbsp;&nbsp;·&nbsp;&nbsp;React&nbsp;&nbsp;·&nbsp;&nbsp;TypeScript&nbsp;&nbsp;·&nbsp;&nbsp;PostgreSQL&nbsp;&nbsp;·&nbsp;&nbsp;Node.js
            </p>
          </div>

          {/* Photo — right */}
          <div className="anim-fade-up delay-2 order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="relative w-56 overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:w-64 lg:w-72">
                <Image
                  src="/profile.jpg"
                  alt="Tioluwani Bakare"
                  width={320}
                  height={400}
                  className="h-auto w-full object-cover object-top"
                  priority
                />
              </div>
              {/* Subtle glow behind photo */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-orange-500/10 blur-2xl" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="border-t border-white/[0.06] scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-24">

          <RevealSection>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Selected work
            </h2>
          </RevealSection>

          <div className="mt-10 divide-y divide-white/[0.05]">
            {caseStudies.map((cs, i) => (
              <RevealSection
                key={cs.slug}
                style={{ transitionDelay: `${i * 80}ms` } as React.CSSProperties}
              >
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group flex items-start gap-6 py-8 transition-colors"
                >
                  <span className="mt-1 w-6 shrink-0 font-mono text-xs text-slate-500">
                    0{i + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-orange-400">
                        {cs.title}
                      </h3>
                      <span className="shrink-0 text-xs text-slate-600">
                        {cs.stack.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {cs.problem}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-orange-400">
                      Read case study
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  <span
                    className={`mt-1 shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[cs.status]}`}
                  >
                    {cs.status}
                  </span>
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
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Contact
                </h2>
                <p className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white">
                  Available for<br />engineering work.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-slate-500">
                  Contract, freelance, or full-time. Remote or Lagos-based.
                </p>
                <a
                  href="mailto:bakaretioluwani@icloud.com"
                  className="block text-lg font-medium text-orange-400 transition-colors hover:text-orange-300"
                >
                  bakaretioluwani@icloud.com
                </a>
                <a
                  href="https://github.com/boluthe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-500 transition-colors hover:text-slate-300"
                >
                  github.com/boluthe
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-600">
          <span>© 2026 Tioluwani Bakare</span>
          <span>Lagos, Nigeria</span>
        </div>
      </footer>
    </>
  );
}
