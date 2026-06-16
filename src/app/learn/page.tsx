import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { DEEP_TOPICS, getDeepTopicsByGroup } from "@/lib/deep-guide";

const GROUPS = [
  { id: "quiz" as const, label: "Official Quiz Q1–12", emoji: "📋", count: 12 },
  { id: "exercise" as const, label: "Exercises 1–12", emoji: "🧪", count: 12 },
  { id: "notes" as const, label: "Your 9 Note Pages", emoji: "📝", count: 9 },
];

export default async function LearnPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-violet-400 tracking-wide">
          Plain language · Verified videos · No fluff
        </p>
        <h1 className="text-xl font-bold mt-1">📖 Deep Study Guide</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Every quiz question, exercise, and handwritten note — explained so anyone can
          understand and remember. Each topic has working YouTube videos from Prof.&apos;s
          materials.
        </p>
      </header>

      <section className="px-5 mb-5 space-y-2">
        <Link
          href="/quiz"
          className="block glass rounded-xl p-4 text-sm text-violet-300 border border-violet-500/25"
        >
          🎯 Test yourself — MCQ quiz with saved scores →
        </Link>
        <a
          href="/heeds/DigitalTwin_Lectures_Exercises.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-4 text-sm text-indigo-300"
        >
          📄 Open official Exercises PDF →
        </a>
      </section>

      {GROUPS.map((g) => {
        const topics = getDeepTopicsByGroup(g.id);
        return (
          <section key={g.id} className="px-5 mb-6">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <span>{g.emoji}</span>
              {g.label}
              <span className="text-xs text-[var(--muted)] font-normal">({topics.length})</span>
            </h2>
            <div className="space-y-2">
              {topics.map((t) => (
                <Link
                  key={t.slug}
                  href={`/learn/${t.slug}`}
                  className="block glass rounded-xl p-4 active:scale-[0.98] transition-transform"
                >
                  <p className="font-medium text-sm">{t.title}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5 line-clamp-2">{t.subtitle}</p>
                  <p className="text-xs text-violet-400/80 mt-1.5">
                    {t.videos.length} video{t.videos.length !== 1 ? "s" : ""} · {t.remember.slice(0, 50)}…
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="px-5 mb-4 text-xs text-[var(--muted)]">
        <p>{DEEP_TOPICS.length} topics total · All YouTube links verified working</p>
      </section>

      <BottomNav />
    </main>
  );
}
