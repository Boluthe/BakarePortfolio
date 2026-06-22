import Image from "next/image";
import Nav from "@/components/Nav";
import RevealSection from "@/components/RevealSection";
import { caseStudies } from "@/data/caseStudies";
import Link from "next/link";

const statusColors = {
  Live:         "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  MVP:          "text-sky-400    bg-sky-500/10    border-sky-500/20",
  "In Progress":"text-amber-400  bg-amber-500/10  border-amber-500/20",
} as const;

const techStack = [
  "Java", "Spring Boot", "Spring Security",
  "React", "TypeScript", "PostgreSQL", "Docker",
];

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="grid min-h-screen items-center gap-12 pb-16 pt-28 lg:grid-cols-[1fr_300px] lg:gap-20">

          {/* Text — left */}
          <div className="order-2 lg:order-1">
            <p className="anim-fade-up delay-1 mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Open to work · Lagos, Nigeria
            </p>

            <h1 className="anim-fade-up delay-2 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tioluwani<br />Bakare
            </h1>

            <p className="anim-fade-up delay-3 mt-5 text-xl font-light text-slate-400">
              Full Stack Engineer
            </p>

            <p className="anim-fade-up delay-4 mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
              Production experience at Union Bank of Nigeria and across SaaS,
              e-commerce, and AI-assisted platforms. I build Spring Boot backends
              and React frontends — from internal banking APIs and AI-powered
              invoice automation to live consumer products. Oracle-certified
              (OCA &amp; OCP, Java SE 8).
            </p>

            <div className="anim-fade-up delay-5 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                View work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-sky-500/30 bg-sky-500/10 px-5 py-2.5 text-sm font-semibold text-sky-300 transition-all hover:bg-sky-500/20 hover:border-sky-400/50"
              >
                Get in touch
              </a>
            </div>

            <div className="anim-fade-up delay-6 mt-10 flex flex-wrap gap-2">
              {techStack.map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-slate-700/60 bg-slate-800/50 px-2.5 py-1 text-xs text-slate-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Photo — right */}
          <div className="anim-fade-up delay-2 order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/25 via-transparent to-sky-500/15" />
              <div className="relative w-56 overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-black/60 sm:w-64 lg:w-72">
                <Image
                  src="/profile.jpg"
                  alt="Tioluwani Bakare"
                  width={320}
                  height={400}
                  className="h-auto w-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-emerald-500/8 blur-2xl" />
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
                  className="group flex items-start gap-6 py-8"
                >
                  <span className="mt-1 w-6 shrink-0 font-mono text-xs text-emerald-500/50">
                    0{i + 1}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-emerald-400">
                        {cs.title}
                      </h3>
                      <span className="shrink-0 text-xs text-slate-600">
                        {cs.stack.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {cs.problem}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-400 opacity-0 transition-opacity group-hover:opacity-100">
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
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Contact
                </h2>
                <p className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white">
                  Available for<br />engineering work.
                </p>
                <p className="mt-4 max-w-sm text-sm text-slate-500">
                  Contract, freelance, or full-time. Remote or Lagos-based.
                </p>
              </div>

              <div className="grid gap-3">
                {/* Email */}
                <a
                  href="mailto:bakaretioluwani@icloud.com"
                  className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/30 px-5 py-4 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/20">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-sm font-medium text-white">bakaretioluwani@icloud.com</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/bakare-tioluwani-96a135261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/30 px-5 py-4 transition-all hover:border-sky-500/30 hover:bg-sky-500/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/20">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <p className="text-sm font-medium text-white">bakare-tioluwani-96a135261</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/boluthe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/30 px-5 py-4 transition-all hover:border-slate-600 hover:bg-slate-700/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-slate-300 ring-1 ring-slate-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">GitHub</p>
                    <p className="text-sm font-medium text-white">github.com/boluthe</p>
                  </div>
                  <svg className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all group-hover:translate-x-0.5 group-hover:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
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
