import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

const statusColors: Record<CaseStudy["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 light:bg-emerald-100 light:text-emerald-800 light:border-emerald-300",
  MVP: "bg-blue-500/10 text-blue-400 border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 light:bg-blue-100 light:text-blue-800 light:border-blue-300",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20 light:bg-amber-100 light:text-amber-800 light:border-amber-300",
};

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-slate-800 dark:border-white/[0.08] light:border-slate-300 bg-[#1e222b]/80 dark:bg-[#1e222b]/80 light:bg-white/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 light:hover:border-slate-400 hover:bg-[#242832]/90 light:hover:bg-white hover:shadow-xl hover:shadow-black/40 light:hover:shadow-slate-300/60 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-emerald-400 transition-colors">
          {cs.title}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[cs.status]}`}
        >
          {cs.status}
        </span>
      </div>

      <p className="text-sm text-slate-400 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">{cs.tagline}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {cs.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-800 dark:bg-slate-900 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 px-2.5 py-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-800 font-mono"
          >
            {tech}
          </span>
        ))}
        {cs.stack.length > 4 && (
          <span className="rounded-md bg-slate-800 dark:bg-slate-900 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 px-2.5 py-1 text-xs text-slate-500 dark:text-slate-500 light:text-slate-600 font-mono">
            +{cs.stack.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-1.5 text-xs text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-mono font-semibold">
        <span>Read case study</span>
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
