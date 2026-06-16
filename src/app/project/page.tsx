import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { ProjectDefenseGuide } from "@/components/ProjectDefenseGuide";

export default async function ProjectPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-cyan-400 tracking-wide">
          Final Exam · defend every plot & term
        </p>
        <h1 className="text-xl font-bold mt-1">📡 Antenna RUL Digital Twin</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Prof. Nasti asks <strong className="text-amber-300/90">why</strong> for everything — what is
          it, why use it, what does each graph say. Tap terms & figures below.
        </p>
      </header>

      <section className="px-5 mb-5 space-y-2">
        <a
          href="/project/Exam_Presentation_Antenna_RUL_SRH.pptx"
          download
          className="block glass rounded-xl p-4 text-sm font-medium text-emerald-300 border border-emerald-500/30"
        >
          ⬇️ SRH exam PowerPoint →
        </a>
        <a
          href="/project/present/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-4 text-sm text-orange-300"
        >
          ▶️ Present in browser →
        </a>
        <a
          href="/project/outputs/doe_results.csv"
          download
          className="block glass rounded-xl p-4 text-sm text-indigo-300"
        >
          📊 DoE CSV (40 runs) →
        </a>
        <Link href="/heeds" className="block glass rounded-xl p-4 text-sm text-orange-300">
          ⚙️ HEEDS practice (same DoE workflow) →
        </Link>
        <Link href="/exam" className="block glass rounded-xl p-4 text-sm text-violet-300">
          🎓 Quiz Q1–12 official answers →
        </Link>
      </section>

      <section className="px-5 mb-4">
        <pre className="glass rounded-xl p-4 text-xs overflow-x-auto text-emerald-200/90 leading-relaxed whitespace-pre-wrap">
{`cd "Digital twin"
.venv/bin/python project/run_project.py --ppt`}
        </pre>
        <p className="text-xs text-[var(--muted)] mt-1">Regenerates all 5 figures for live demo</p>
      </section>

      <ProjectDefenseGuide />

      <BottomNav />
    </main>
  );
}
