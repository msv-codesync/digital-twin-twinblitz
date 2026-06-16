import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { DownloadAllRecall } from "@/components/DownloadAllRecall";
import { getWriteProgress } from "@/lib/db";
import { WRITE_TOPICS, topicProgress } from "@/lib/write-study/bank";

const GROUPS = [
  { id: "course" as const, label: "Course topics", emoji: "📚" },
  { id: "exercise" as const, label: "Exercises 1–12", emoji: "🧪" },
  { id: "notes" as const, label: "Your notes", emoji: "📝" },
];

export default async function WritePage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const progress = await getWriteProgress(user.id);

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-emerald-400">Write from memory — no multiple choice</p>
        <h1 className="text-xl font-bold mt-1">✍️ Written Recall</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          5 questions per topic. Type your own answers in the box — like the real oral exam. Answers
          auto-save. Download .txt when done and paste here for correction.
        </p>
      </header>

      <section className="px-5 mb-5">
        <DownloadAllRecall studentName={user.name} progress={progress} />
      </section>

      {GROUPS.map((g) => {
        const topics = WRITE_TOPICS.filter((t) => t.group === g.id);
        return (
          <section key={g.id} className="px-5 mb-6">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <span>{g.emoji}</span>
              {g.label}
            </h2>
            <div className="space-y-2">
              {topics.map((t) => {
                const done = topicProgress(t.slug, t.questions.length, progress);
                const complete = done === t.questions.length;
                return (
                  <Link
                    key={t.slug}
                    href={`/write/${t.slug}`}
                    className="block glass rounded-xl p-4 active:scale-[0.98] transition-transform"
                  >
                    <div className="flex justify-between gap-2 items-start">
                      <p className="font-medium text-sm">{t.title}</p>
                      <span
                        className={`text-xs shrink-0 px-2 py-0.5 rounded-full ${
                          complete
                            ? "bg-emerald-500/20 text-emerald-300"
                            : done > 0
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-[var(--surface2)] text-[var(--muted)]"
                        }`}
                      >
                        {done}/5
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-1">Tap to write answers</p>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <BottomNav />
    </main>
  );
}
