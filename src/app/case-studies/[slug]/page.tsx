import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Tioluwani Bakare`,
    description: cs.tagline,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      <Nav />

      <main className="mx-auto max-w-3xl px-6 pb-32 pt-32">
        {/* Back */}
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to work
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                cs.status === "Live"
                  ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  : cs.status === "MVP"
                  ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                  : "border-amber-500/20 bg-amber-500/10 text-amber-400"
              }`}
            >
              {cs.status}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {cs.title}
          </h1>
          <p className="text-lg text-slate-400">{cs.tagline}</p>
        </div>

        {/* Content */}
        <div className="space-y-10 divide-y divide-slate-800">
          <Section label="Problem">
            <p className="text-slate-300 leading-relaxed">{cs.problem}</p>
          </Section>

          <Section label="Solution">
            <p className="text-slate-300 leading-relaxed">{cs.solution}</p>
          </Section>

          <Section label="Outcome">
            <p className="text-slate-300 leading-relaxed">{cs.outcome}</p>
          </Section>

          <Section label="Tech stack">
            <div className="flex flex-wrap gap-2">
              {cs.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section label="Links">
            <div className="flex flex-wrap gap-3">
              {cs.liveUrl && (
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                >
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live site
                </a>
              )}
              {cs.githubUrl && (
                <a
                  href={cs.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {cs.availableOnRequest && (
                <a
                  href="mailto:bakaretioluwani@icloud.com?subject=Portfolio request — work samples"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
                >
                  Available on request
                </a>
              )}
            </div>
          </Section>
        </div>

        {/* Nav between case studies */}
        <div className="mt-16 flex items-center justify-between border-t border-slate-800 pt-10">
          <Link
            href="/#work"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            ← All work
          </Link>
          <a
            href="https://wa.me/2349154604723?text=Hi%20Tioluwani%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Discuss a project →
          </a>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-600">
          <span>© 2026 Tioluwani Bakare</span>
          <a
            href="https://github.com/boluthe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            Lagos, Nigeria
          </a>
        </div>
      </footer>
    </>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-10 first:pt-0">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </h2>
      {children}
    </div>
  );
}
