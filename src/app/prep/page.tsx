import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { PrepModuleCard } from "@/components/PrepModuleCard";
import { PREP_MODULES, PREP_TOTAL_MINUTES, formatMinutes } from "@/lib/prep-guide";

const FAST_TRACK_MINUTES = PREP_MODULES.filter((m) => m.id !== "heeds-mastery").reduce(
  (s, m) => s + m.minutes,
  0
);

export default async function PrepPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const totalHours = (PREP_TOTAL_MINUTES / 60).toFixed(1);
  const fastHours = (FAST_TRACK_MINUTES / 60).toFixed(1);

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-indigo-400 tracking-wide">
          Prof. Dr. Adele Nasti · Modeling, Simulation & Digital Twin
        </p>
        <h1 className="text-xl font-bold mt-1">📚 Exam Prep Guide</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Every topic: time estimate, one video, lecture reference, your note image, memory hook
          &amp; perfect answer — built to understand and remember.
        </p>
      </header>

      <section className="px-5 mb-5">
        <div className="glass rounded-2xl p-5 glow-accent">
          <p className="text-2xl font-bold">{totalHours} hours</p>
          <p className="text-xs text-[var(--muted)]">Full mastery (all 14 modules incl. HEEDS)</p>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-[var(--surface2)] p-3">
              <p className="font-semibold text-amber-400">{fastHours}h</p>
              <p className="text-xs text-[var(--muted)]">Theory + project (skip HEEDS deep dive)</p>
            </div>
            <div className="rounded-xl bg-[var(--surface2)] p-3">
              <p className="font-semibold text-orange-400">18h</p>
              <p className="text-xs text-[var(--muted)]">HEEDS only → <Link href="/heeds" className="text-orange-300 underline">HEEDS tab</Link></p>
            </div>
          </div>
          <p className="text-xs text-[var(--muted)] mt-3">
            Suggested sprint: Day 1 modules 1–6 ({formatMinutes(PREP_MODULES.slice(0, 6).reduce((s, m) => s + m.minutes, 0))}) · Day 2 modules 7–10 · Day 3 modules 11–14 + mock oral
          </p>
        </div>
      </section>

      <section className="px-5 mb-4">
        <p className="text-xs font-semibold text-[var(--muted)] mb-2">JUMP TO TOPIC</p>
        <div className="flex flex-wrap gap-2">
          {PREP_MODULES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="text-xs px-2.5 py-1 rounded-full glass text-indigo-300 border border-indigo-500/20"
            >
              {m.order}. {m.title.split(" ")[0]}
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 mb-4">
        <Link
          href="/learn"
          className="block glass rounded-xl p-4 text-sm font-medium text-violet-300 border border-violet-500/30"
        >
          📖 Deep study guide — exercises & notes in plain English →
        </Link>
      </section>

      <section className="px-5 mb-4">
        <Link
          href="/quiz"
          className="block glass rounded-xl p-4 text-sm font-medium text-violet-300 border border-violet-500/30"
        >
          🎯 Theory quiz — all MCQs with saved scores →
        </Link>
      </section>

      <section className="px-5 mb-4 space-y-1">
        <a
          href="/heeds/DigitalTwin_Lectures_ProfAdeleNasti.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-3 text-sm text-indigo-300"
        >
          📄 Lecture PDF (212 pp) →
        </a>
        <a
          href="/heeds/DigitalTwin_Lectures_Exercises.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-3 text-sm text-indigo-300"
        >
          📄 Exercises PDF (Quiz Q1–12 + Ex 1–12) →
        </a>
        <a
          href="/heeds/DigitalTwin_Exam_Guidelines.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-3 text-sm text-indigo-300"
        >
          📄 Exam Guidelines →
        </a>
      </section>

      <div className="px-5 space-y-4">
        {PREP_MODULES.map((m) => (
          <PrepModuleCard key={m.id} module={m} />
        ))}
      </div>

      <section className="px-5 mt-8 mb-4 glass rounded-2xl p-5">
        <h2 className="font-semibold mb-2">🎯 Final checklist before exam</h2>
        <ul className="text-sm space-y-2 text-[var(--text)]/90">
          <li>□ Recite DT definition with &quot;throughout its lifecycle&quot;</li>
          <li>□ V vs V vs calibration — one example each</li>
          <li>□ HEEDS: Process → Parameters → Tagging → Study → Run → POST</li>
          <li>□ Coil spring DoE maps to antenna 40-run factorial</li>
          <li>□ RUL formula + wind≤12, temp≤30 safe envelope</li>
          <li>□ PCA 6 steps from memory</li>
          <li>□ 15-min mock presentation recorded</li>
        </ul>
        <Link href="/days" className="inline-block mt-4 text-sm text-indigo-400">
          → Start 3-day task sprint
        </Link>
      </section>

      <BottomNav />
    </main>
  );
}
