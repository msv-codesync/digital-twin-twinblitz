import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getTaskProgress } from "@/lib/db";
import { getDay, CATEGORY_COLORS, CATEGORY_EMOJI } from "@/lib/curriculum";
import { BottomNav } from "@/components/BottomNav";

export default async function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const user = await getSession();
  if (!user) redirect("/login");

  const { day: dayStr } = await params;
  const dayNum = Number(dayStr);
  const plan = getDay(dayNum);
  if (!plan) notFound();

  const progress = await getTaskProgress(user.id);
  const allTasks = plan.blocks.flatMap((b) => b.tasks);
  const done = allTasks.filter((t) => progress[t.id]).length;

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <Link href="/days" className="text-sm text-indigo-400">← All days</Link>
        <h1 className="text-xl font-bold mt-2">Day {plan.day}: {plan.title}</h1>
        <p className="text-sm text-[var(--muted)]">{plan.date} · {plan.subtitle}</p>
        <p className="text-xs text-indigo-300 mt-2 italic">{plan.theme}</p>
        <p className="text-sm mt-3">{done}/{allTasks.length} complete · 18hr schedule</p>
      </header>

      <div className="px-5 space-y-6">
        {plan.blocks.map((block) => (
          <section key={block.block}>
            <div className="sticky top-0 z-10 glass rounded-xl px-4 py-3 mb-3">
              <p className="text-xs text-[var(--muted)]">{block.slot} · Block {block.block}</p>
              <p className="font-semibold">{block.label}</p>
            </div>
            <div className="space-y-2">
              {block.tasks.map((task) => {
                const isDone = progress[task.id];
                return (
                  <Link
                    key={task.id}
                    href={`/task/${task.id}`}
                    className={`block glass rounded-xl p-4 ${isDone ? "opacity-60" : ""}`}
                  >
                    <div className="flex gap-3">
                      <span className="text-xl">{isDone ? "✅" : task.emoji}</span>
                      <div className="flex-1">
                        <p className={`font-medium text-sm ${isDone ? "line-through" : ""}`}>
                          {task.title}
                        </p>
                        <p className="text-xs text-[var(--muted)]">{task.slot} · +{task.xp} XP</p>
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full h-fit"
                        style={{
                          background: `${CATEGORY_COLORS[task.category]}22`,
                          color: CATEGORY_COLORS[task.category],
                        }}
                      >
                        {CATEGORY_EMOJI[task.category]} {task.category}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <BottomNav />
    </main>
  );
}
