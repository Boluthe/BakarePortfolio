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
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tioluwanibakare.com";
  const url = `${siteUrl}/case-studies/${cs.slug}`;

  return {
    title: cs.title,
    description: cs.tagline,
    keywords: [...cs.stack, "Tioluwani Bakare", cs.title, "Full Stack Case Study", "System Architecture"],
    alternates: {
      canonical: `/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: `${cs.title} — Tioluwani Bakare Portfolio`,
      description: cs.tagline,
      url,
      type: "article",
      authors: ["Tioluwani Bakare"],
      tags: cs.stack,
      images: [
        {
          url: "/profile.jpg",
          width: 1200,
          height: 630,
          alt: `${cs.title} Case Study Architecture & Performance`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} — Software Architecture Case Study`,
      description: cs.tagline,
      images: ["/profile.jpg"],
      creator: "@boluthecreator",
    },
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
    <div className="relative bg-dot-grid bg-mesh-lines min-h-screen">
      <Nav />

      <main className="mx-auto max-w-3xl px-6 pb-32 pt-32">
        {/* Back */}
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm font-mono font-medium text-slate-300 hover:text-red-400 transition-colors"
        >
          <svg
            width="16"
            height="16"
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
          <div className="mb-4 flex items-center gap-3 font-mono">
            <span
              className={`rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide ${
                cs.status === "Live"
                  ? "border-red-500/40 bg-red-500/15 text-red-400 shadow-sm shadow-red-500/10"
                  : cs.status === "MVP"
                  ? "border-purple-500/40 bg-purple-500/15 text-purple-300 shadow-sm shadow-purple-500/10"
                  : "border-slate-700 bg-slate-800/80 text-slate-300"
              }`}
            >
              {cs.status}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {cs.title}
          </h1>
          <p className="text-lg text-slate-300 font-sans leading-relaxed">{cs.tagline}</p>
        </div>

        {/* Content */}
        <div className="space-y-10 divide-y divide-slate-800/80">
          <Section label="Problem">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans">{cs.problem}</p>
          </Section>

          <Section label="Solution">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans">{cs.solution}</p>
          </Section>

          <Section label="Outcome">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-sans">{cs.outcome}</p>
          </Section>

          <Section label="Tech stack">
            <div className="flex flex-wrap gap-2 font-mono">
              {cs.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section label="Links">
            <div className="flex flex-wrap gap-3 font-mono">
              {cs.liveUrl && (
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
                >
                  <svg
                    width="14"
                    height="14"
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
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-red-500/50 hover:bg-slate-800 hover:text-white transition-all"
                >
                  <svg
                    width="14"
                    height="14"
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
                  href="mailto:bakaretioluwani@yahoo.com?subject=Portfolio request — work samples"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-red-500/50 hover:bg-slate-800 hover:text-white transition-all"
                >
                  Available on request
                </a>
              )}
            </div>
          </Section>
        </div>

        {/* Nav between case studies */}
        <div className="mt-16 flex items-center justify-between border-t border-slate-800/80 pt-10 font-mono">
          <Link
            href="/#work"
            className="text-sm font-medium text-slate-300 hover:text-red-400 transition-colors"
          >
            ← All work
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors animate-pulse"
          >
            Discuss a project →
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 px-6 py-6 pb-16">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pr-14 sm:pr-20">
          <span>© 2026 Bakare Tioluwani Boluwatife</span>
          <a
            href="https://github.com/boluthe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Lagos, Nigeria
          </a>
        </div>
      </footer>
    </div>
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
      <h2 className="mb-4 font-mono text-xs font-bold text-slate-400">
        {"//"} {label}
      </h2>
      {children}
    </div>
  );
}
