import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { DEEP_TOPICS, getDeepTopicsByGroup } from "@/lib/deep-guide";

export default async function LearnPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const course = getDeepTopicsByGroup("course");
  const exercises = getDeepTopicsByGroup("exercise");
  const notes = getDeepTopicsByGroup("notes");

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-violet-400 tracking-wide">
          Prof. Dr. Adele Nasti · Lecture PDF + Exercises PDF
        </p>
        <h1 className="text-xl font-bold mt-1">Learn</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Every topic she taught — plain explanation, one focused video (~10–15 min), and
          practice questions with her answers. Work through Course Topics first.
        </p>
      </header>

      <section className="px-5 mb-5 space-y-2">
        <a
          href="/heeds/DigitalTwin_Lectures_Exercises.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-4 text-sm text-indigo-300"
        >
          Exercises PDF (Quiz Q1–12 + Exercises 1–12) ↗
        </a>
        <a
          href="/heeds/DigitalTwin_Lectures_ProfAdeleNasti.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-4 text-sm text-indigo-300"
        >
          Full Lecture PDF ↗
        </a>
        <Link
          href="/write"
          className="block glass rounded-xl p-4 text-sm text-emerald-300 border border-emerald-500/25"
        >
          ✍️ Written recall — 5 questions per topic, type your own answers →
        </Link>
      </section>

      <section className="px-5 mb-6">
        <h2 className="font-semibold mb-1 flex items-center gap-2">
          <span>📚</span>
          All course topics
          <span className="text-xs text-[var(--muted)] font-normal">({course.length})</span>
        </h2>
        <p className="text-xs text-[var(--muted)] mb-3">
          Quiz Q1–12 plus lecture topics (DoE, HEEDS, FEM, V&amp;V, PCA, …)
        </p>
        <div className="space-y-2">
          {course.map((t) => (
            <Link
              key={t.slug}
              href={`/learn/${t.slug}`}
              className="block glass rounded-xl p-4 active:scale-[0.98] transition-transform"
            >
              <p className="font-medium text-sm">{t.title}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-2">{t.subtitle}</p>
              <p className="text-xs text-violet-400/80 mt-1.5">
                {t.practice.length} practice Q · {t.videos[0]?.duration ?? "~12 min"} video
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 mb-6 border-t border-[var(--border)] pt-5">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <span>🧪</span>
          Exercises 1–12
          <span className="text-xs text-[var(--muted)] font-normal">({exercises.length})</span>
        </h2>
        <div className="space-y-2">
          {exercises.map((t) => (
            <Link
              key={t.slug}
              href={`/learn/${t.slug}`}
              className="block glass rounded-xl p-4 active:scale-[0.98] transition-transform"
            >
              <p className="font-medium text-sm">{t.title}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-2">{t.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 mb-4 border-t border-[var(--border)] pt-5">
        <h2 className="font-semibold mb-3 flex items-center gap-2">
          <span>📝</span>
          Your 9 note pages
          <span className="text-xs text-[var(--muted)] font-normal">({notes.length})</span>
        </h2>
        <div className="space-y-2">
          {notes.map((t) => (
            <Link
              key={t.slug}
              href={`/learn/${t.slug}`}
              className="block glass rounded-xl p-4 active:scale-[0.98] transition-transform"
            >
              <p className="font-medium text-sm">{t.title}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-2">{t.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 mb-4 text-xs text-[var(--muted)]">
        <p>{DEEP_TOPICS.length} topics · Answers from lecture &amp; exercises PDF</p>
      </section>

      <BottomNav />
    </main>
  );
}
