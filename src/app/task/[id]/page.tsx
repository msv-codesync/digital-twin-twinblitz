import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getTaskProgress } from "@/lib/db";
import { getTask, getDay, CATEGORY_COLORS, CATEGORY_EMOJI } from "@/lib/curriculum";
import { TaskChecklist } from "@/components/TaskChecklist";
import { NotesEditor } from "@/components/NotesEditor";
import { PracticeLog } from "@/components/PracticeLog";
import { BottomNav } from "@/components/BottomNav";

export default async function TaskPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getSession();
  if (!user) redirect("/login");

  const { id } = await params;
  const task = getTask(id);
  if (!task) notFound();

  const day = getDay(task.day)!;
  const progress = await getTaskProgress(user.id);
  const isDone = progress[task.id] ?? false;

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <Link href={`/day/${task.day}`} className="text-sm text-indigo-400">
          ← Day {task.day}
        </Link>
        <div className="flex items-start gap-3 mt-3">
          <span className="text-3xl">{task.emoji}</span>
          <div>
            <h1 className="text-lg font-bold leading-tight">{task.title}</h1>
            <p className="text-xs text-[var(--muted)] mt-1">
              {task.slot} · +{task.xp} XP
            </p>
          </div>
        </div>
        <span
          className="inline-block mt-2 text-xs px-3 py-1 rounded-full"
          style={{
            background: `${CATEGORY_COLORS[task.category]}22`,
            color: CATEGORY_COLORS[task.category],
          }}
        >
          {CATEGORY_EMOJI[task.category]} {task.category}
        </span>
        {isDone && (
          <p className="mt-2 text-sm text-green-400 font-medium">✓ Mission complete!</p>
        )}
      </header>

      <div className="px-5 space-y-6">
        <section className="glass rounded-2xl p-5">
          <h2 className="font-semibold text-indigo-400 mb-2">📖 Learn</h2>
          <p className="text-sm leading-relaxed">{task.learn}</p>
        </section>

        <section className="glass rounded-2xl p-5">
          <h2 className="font-semibold text-amber-400 mb-2">🛠️ Practice</h2>
          <p className="text-sm leading-relaxed">{task.practice}</p>
        </section>

        {task.exercises.length > 0 && (
          <section className="glass rounded-2xl p-5">
            <h2 className="font-semibold text-purple-400 mb-3">💪 Exercises</h2>
            <ol className="space-y-2">
              {task.exercises.map((ex, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="text-indigo-400 font-mono shrink-0">{i + 1}.</span>
                  <span className="leading-relaxed">{ex}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="glass rounded-2xl p-5">
          <TaskChecklist
            taskId={task.id}
            items={task.checklist}
            initialDone={isDone}
          />
        </section>

        {task.youtube.length > 0 && (
          <section>
            <h2 className="font-semibold mb-3">▶️ Watch ({task.youtube.length} videos)</h2>
            <div className="space-y-3">
              {task.youtube.map((yt, i) => {
                const videoId = yt.id.includes("v=")
                  ? yt.id.split("v=")[1]?.split("&")[0]
                  : yt.id.startsWith("watch")
                  ? null
                  : yt.id.length === 11
                  ? yt.id
                  : null;
                const url = videoId
                  ? `https://www.youtube.com/watch?v=${videoId}`
                  : `https://www.youtube.com/results?search_query=${encodeURIComponent(yt.title)}`;
                return (
                  <div key={i} className="glass rounded-xl overflow-hidden">
                    {videoId && (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={yt.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 text-sm text-indigo-400"
                    >
                      {yt.title} →
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {task.resources.length > 0 && (
          <section>
            <h2 className="font-semibold mb-3">🔗 Resources</h2>
            <div className="space-y-2">
              {task.resources.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass rounded-xl p-4 text-sm"
                >
                  <span>
                    {r.type === "video" ? "🎬" : r.type === "paper" ? "📄" : r.type === "tool" ? "🔧" : "📚"}
                  </span>
                  <span className="text-indigo-300">{r.title}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="glass rounded-2xl p-5">
          <NotesEditor taskId={task.id} />
        </section>

        <section className="glass rounded-2xl p-5">
          <PracticeLog taskId={task.id} />
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
