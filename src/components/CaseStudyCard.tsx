import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

const statusColors: Record<CaseStudy["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  MVP: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-slate-800 bg-surface-subtle p-6 transition-all duration-200 hover:border-slate-600 hover:bg-surface-muted/30"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
          {cs.title}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColors[cs.status]}`}
        >
          {cs.status}
        </span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed">{cs.tagline}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {cs.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
          >
            {tech}
          </span>
        ))}
        {cs.stack.length > 4 && (
          <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-500">
            +{cs.stack.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-1.5 text-xs text-accent">
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
