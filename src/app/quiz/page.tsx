import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getQuizProgress } from "@/lib/db";
import { BottomNav } from "@/components/BottomNav";
import { computeQuizStats, QUIZ_DECKS, QUIZ_TOTAL } from "@/lib/quiz";

export default async function QuizHubPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const progress = await getQuizProgress(user.id);
  const stats = computeQuizStats(progress);

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-violet-400 tracking-wide">
          90% theory · Prof. Nasti materials
        </p>
        <h1 className="text-xl font-bold mt-1">🎯 Theory Quiz</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          {QUIZ_TOTAL} MCQs from Quiz Q1–12, exercises, notes &amp; lectures. Every answer saves
          to your account — progress never resets when you leave.
        </p>
      </header>

      <section className="px-5 mb-6">
        <div className="glass rounded-2xl p-5 glow-accent border border-violet-500/25">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-3xl font-bold">{stats.pct}%</p>
              <p className="text-xs text-[var(--muted)]">
                {stats.correct}/{stats.answered} correct
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-violet-300">
                {stats.answered}/{stats.total}
              </p>
              <p className="text-xs text-[var(--muted)]">answered</p>
            </div>
          </div>
          <div className="h-2 bg-[var(--surface2)] rounded-full mt-3 overflow-hidden">
            <div
              className="progress-bar h-full rounded-full"
              style={{ width: `${Math.round((stats.answered / stats.total) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">
            Target: 90%+ correct on all decks before exam
          </p>
        </div>
      </section>

      <section className="px-5 mb-4">
        <Link
          href="/quiz/mix"
          className="block glass rounded-xl p-4 text-center font-medium text-violet-300 border border-violet-500/30"
        >
          🔀 Mixed exam drill — all {QUIZ_TOTAL} questions shuffled
        </Link>
      </section>

      <section className="px-5 space-y-3">
        <p className="text-xs font-semibold text-[var(--muted)]">STUDY BY TOPIC</p>
        {QUIZ_DECKS.map((deck) => {
          const d = stats.byDeck[deck.id];
          const donePct = d.total ? Math.round((d.answered / d.total) * 100) : 0;
          return (
            <Link
              key={deck.id}
              href={`/quiz/${deck.id}`}
              className="block glass rounded-xl p-4 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{deck.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{deck.title}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{deck.subtitle}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 h-1.5 bg-[var(--surface2)] rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full rounded-full"
                        style={{ width: `${donePct}%` }}
                      />
                    </div>
                    <span className="text-xs text-violet-400 shrink-0">
                      {d.correct}/{d.answered} · {d.pct}%
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="px-5 mt-6 mb-4">
        <Link href="/prep" className="text-sm text-indigo-400">
          📚 Read elaborated prep guide →
        </Link>
      </section>

      <BottomNav />
    </main>
  );
}
