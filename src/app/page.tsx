import Nav from "@/components/Nav";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex min-h-screen flex-col justify-center pb-24 pt-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Available for work
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Tioluwani Bakare
            </h1>
            <p className="mb-4 text-xl text-slate-300 sm:text-2xl">
              Fullstack Engineer — backend focus
            </p>
            <p className="mb-10 max-w-xl text-base text-slate-400 leading-relaxed">
              I build production-grade backends with Java/Spring Boot and clean
              React/TypeScript frontends. Based in Lagos, Nigeria. I work with
              founders and teams who need things that actually ship.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 text-sm text-slate-500">
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
          <div className="mb-12">
            <h2 className="mb-3 text-3xl font-bold text-white">Selected Work</h2>
            <p className="text-slate-400">
              Three projects — a restaurant platform, a SaaS product, and a
              professional services engagement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-32 scroll-mt-20">
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
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
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
