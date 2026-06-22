import Nav from "@/components/Nav";
import CaseStudyCard from "@/components/CaseStudyCard";
import RevealSection from "@/components/RevealSection";
import { caseStudies } from "@/data/caseStudies";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-24 pt-32">

          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-orange-500 opacity-[0.06] blur-3xl" />
            <div className="absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-blue-600 opacity-[0.04] blur-3xl" />
          </div>

          <div className="relative max-w-3xl">
            {/* Pulsing "available" badge */}
            <p className="anim-fade-up delay-1 mb-4 flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for work
            </p>

            <h1 className="anim-fade-up delay-2 mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Tioluwani Bakare
            </h1>

            <p className="anim-fade-up delay-3 mb-4 text-xl text-slate-300 sm:text-2xl">
              Fullstack Engineer — backend focus
            </p>

            <p className="anim-fade-up delay-4 mb-10 max-w-xl text-base text-slate-400 leading-relaxed">
              I build production-grade backends with Java/Spring Boot and clean
              React/TypeScript frontends. Based in Lagos, Nigeria. I work with
              founders and teams who need things that actually ship.
            </p>

            <div className="anim-fade-up delay-5 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-orange-500/20"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                Get in touch
              </a>
            </div>

            <div className="anim-fade-up delay-6 mt-14 flex flex-wrap gap-8 text-sm text-slate-500">
              {[
                "Java / Spring Boot",
                "React / TypeScript",
                "PostgreSQL",
                "Node.js",
                "REST APIs",
                "Lagos, Nigeria",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="pb-32 scroll-mt-20">
          <RevealSection className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-white">Selected Work</h2>
            <p className="text-slate-400">
              Three projects — a restaurant platform, a SaaS product, and a
              professional services engagement.
            </p>
          </RevealSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <RevealSection key={cs.slug} style={{ transitionDelay: `${i * 100}ms` } as React.CSSProperties}>
                <CaseStudyCard cs={cs} />
              </RevealSection>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-32 scroll-mt-20">
          <RevealSection>
            <div className="rounded-2xl border border-slate-800 bg-surface-subtle p-10">
              <h2 className="mb-3 text-3xl font-bold text-white">
                Let&apos;s work together
              </h2>
              <p className="mb-8 max-w-xl text-slate-400 leading-relaxed">
                If you&apos;re building something that needs a reliable backend
                engineer or a fullstack developer who can ship end-to-end, reach
                out. Tell me what problem you&apos;re solving.
              </p>
              <a
                href="mailto:bakaretioluwani@icloud.com?subject=Let's work together&body=Hi Tioluwani,%0A%0AWhat I'm building:%0A%0AWhat I need help with:%0A%0ATimeline:%0A"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-orange-500/20"
              >
                Send me a message
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <p className="mt-4 text-xs text-slate-600">
                Or email directly: bakaretioluwani@icloud.com
              </p>
            </div>
          </RevealSection>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-600">
          <span>© 2024 Tioluwani Bakare</span>
          <a
            href="https://github.com/boluthe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
