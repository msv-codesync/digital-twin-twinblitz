import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import {
  EXERCISES_OFFICIAL,
  OFFICIAL_LINKS,
  PROJECT_RUN,
  QUIZ_OFFICIAL,
  STUDY_24H,
} from "@/lib/exam-master";

export default async function ExamPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh pb-8 max-w-lg mx-auto bg-[var(--bg)]">
      <header className="px-5 pt-12 pb-4 border-b border-[var(--border)]">
        <p className="text-xs font-semibold text-red-400">EXAM TOMORROW · Prof. Dr. Adele Nasti</p>
        <h1 className="text-xl font-bold mt-1">24-Hour Exam Master</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Only content from her Exercises PDF + your project. No random videos.
        </p>
      </header>

      <section className="px-5 py-4 bg-emerald-500/10 border-b border-emerald-500/30">
        <p className="text-sm font-semibold text-emerald-300">On your Desktop now:</p>
        <ul className="text-sm mt-2 space-y-1 text-emerald-200/90">
          <li>• Exam_Presentation_Antenna_RUL_SRH_FINAL.pptx</li>
          <li>• DigitalTwin_Antenna_RUL.ipynb</li>
        </ul>
        <a
          href="/project/Exam_Presentation_Antenna_RUL_SRH.pptx"
          download
          className="inline-block mt-3 text-xs text-emerald-400 underline"
        >
          Re-download PPT from app →
        </a>
      </section>

      <section className="px-5 py-5">
        <h2 className="font-bold text-lg mb-3">24-hour study plan</h2>
        <div className="space-y-3">
          {STUDY_24H.map((b) => (
            <div key={b.hours} className="glass rounded-xl p-4 border-l-4 border-l-orange-500">
              <p className="text-xs text-orange-400 font-semibold">{b.hours}</p>
              <p className="font-medium text-sm mt-0.5">{b.title}</p>
              <ul className="mt-2 space-y-1">
                {b.tasks.map((t) => (
                  <li key={t} className="text-xs text-[var(--muted)]">
                    → {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-5 border-t border-[var(--border)]">
        <h2 className="font-bold text-lg mb-1">Official Quiz Q1–12</h2>
        <p className="text-xs text-[var(--muted)] mb-4">Exact questions from Exercises PDF pages 9–20. Memorise answers.</p>
        <div className="space-y-4">
          {QUIZ_OFFICIAL.map((item) => (
            <div key={item.n} className="glass rounded-xl p-4">
              <p className="text-xs text-violet-400 font-bold">Q{item.n}</p>
              <p className="font-medium text-sm mt-1">{item.q}</p>
              <p className="text-sm mt-2 text-white/90 leading-relaxed">{item.a}</p>
              <p className="text-xs mt-2 text-violet-400/90">{item.keyPhrase}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-5 border-t border-[var(--border)]">
        <h2 className="font-bold text-lg mb-4">Exercises 1–12 (from her PDF)</h2>
        <div className="space-y-4">
          {EXERCISES_OFFICIAL.map((ex) => (
            <div key={ex.n} className="glass rounded-xl p-4">
              <p className="text-xs text-cyan-400 font-bold">Exercise {ex.n}</p>
              <p className="font-medium text-sm">{ex.title}</p>
              <p className="text-xs text-[var(--muted)] mt-1 italic">{ex.pdfTask}</p>
              <ul className="mt-2 space-y-1">
                {ex.whatToDo.map((w) => (
                  <li key={w} className="text-xs text-[var(--text)]/85">
                    • {w}
                  </li>
                ))}
              </ul>
              {ex.links.length > 0 && (
                <div className="mt-2 space-y-1">
                  {ex.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-indigo-400 underline"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-5 border-t border-[var(--border)]">
        <h2 className="font-bold text-lg mb-3">{PROJECT_RUN.title}</h2>
        <p className="text-sm font-mono bg-[var(--surface2)] p-3 rounded-lg text-cyan-300">
          {PROJECT_RUN.formula}
        </p>
        <div className="mt-4 space-y-3">
          {PROJECT_RUN.steps.map((s) => (
            <div key={s.step} className="glass rounded-xl p-3">
              <p className="text-xs text-orange-400">Step {s.step}</p>
              <p className="font-medium text-sm">{s.title}</p>
              <p className="text-xs text-[var(--muted)] mt-1 font-mono">{s.cmd}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xs font-semibold text-[var(--muted)] mb-2">Results to state in exam:</p>
          {PROJECT_RUN.results.map((r) => (
            <p key={r} className="text-sm text-emerald-300/90">
              ✓ {r}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 py-5 border-t border-[var(--border)]">
        <h2 className="font-bold text-sm mb-2">Official PDFs only</h2>
        {OFFICIAL_LINKS.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass rounded-xl p-3 text-sm text-indigo-300 mb-2"
          >
            {l.label} →
          </a>
        ))}
        <Link href="/quiz/official" className="block glass rounded-xl p-3 text-sm text-violet-300 mt-2">
          Test Quiz Q1–12 (saved scores) →
        </Link>
      </section>
    </main>
  );
}
