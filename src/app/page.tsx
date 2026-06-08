import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getTaskProgress, getUserStats } from "@/lib/db";
import {
  CAMP_DAYS,
  ALL_TASKS,
  TOTAL_TASKS,
  TOTAL_XP,
  getTodayDayNum,
  CATEGORY_COLORS,
  CATEGORY_EMOJI,
} from "@/lib/curriculum";
import { BottomNav } from "@/components/BottomNav";
import { LogoutButton } from "@/components/LogoutButton";

export default async function HomePage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const progress = await getTaskProgress(user.id);
  const stats = await getUserStats(user.id);
  const todayNum = getTodayDayNum();
  const today = CAMP_DAYS.find((d) => d.day === todayNum)!;
  const completed = ALL_TASKS.filter((t) => progress[t.id]).length;
  const pct = Math.round((completed / TOTAL_TASKS) * 100);
  const todayTasks = today.blocks.flatMap((b) => b.tasks);
  const todayDone = todayTasks.filter((t) => progress[t.id]).length;

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-indigo-400 tracking-wide">TwinBlitz</p>
            <p className="text-[var(--muted)] text-sm">Hey {user.name} 👋</p>
            <h1 className="text-xl font-bold mt-0.5">Day {todayNum} — {today.title}</h1>
          </div>
          <LogoutButton />
        </div>
      </header>

      <section className="px-5 mb-6">
        <div className="glass rounded-2xl p-5 glow-accent">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-3xl font-bold">{pct}%</p>
              <p className="text-xs text-[var(--muted)]">{completed}/{TOTAL_TASKS} missions</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-amber-400">⚡ {stats?.xp ?? 0} XP</p>
              <p className="text-xs text-[var(--muted)]">🔥 {stats?.streak ?? 0} day streak</p>
            </div>
          </div>
          <div className="h-2 bg-[var(--surface2)] rounded-full overflow-hidden">
            <div className="progress-bar h-full rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">{TOTAL_XP} XP total available</p>
        </div>
      </section>

      <section className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Today&apos;s Sprint</h2>
          <span className="text-xs text-indigo-400">{todayDone}/{todayTasks.length} done</span>
        </div>
        <p className="text-sm text-[var(--muted)] mb-4">{today.subtitle} · 18 hours</p>
        {today.blocks.map((block) => (
          <div key={block.block} className="mb-4">
            <p className="text-xs text-[var(--muted)] mb-2">{block.slot}</p>
            <p className="text-sm font-medium mb-2">{block.label}</p>
            <div className="space-y-2">
              {block.tasks.map((task) => {
                const done = progress[task.id];
                return (
                  <Link
                    key={task.id}
                    href={`/task/${task.id}`}
                    className={`block glass rounded-xl p-4 active:scale-[0.98] transition-transform ${
                      done ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{done ? "✅" : task.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium text-sm ${done ? "line-through" : ""}`}>
                          {task.title}
                        </p>
                        <p className="text-xs text-[var(--muted)] mt-0.5">{task.slot}</p>
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full shrink-0"
                        style={{
                          background: `${CATEGORY_COLORS[task.category]}22`,
                          color: CATEGORY_COLORS[task.category],
                        }}
                      >
                        {CATEGORY_EMOJI[task.category]}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
        <Link
          href={`/day/${todayNum}`}
          className="block text-center py-3 text-indigo-400 text-sm font-medium"
        >
          Full Day {todayNum} view →
        </Link>
      </section>

      <section className="px-5 mb-6">
        <h2 className="font-semibold mb-3">3-Day Map</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {CAMP_DAYS.map((d) => {
            const dTasks = d.blocks.flatMap((b) => b.tasks);
            const dDone = dTasks.filter((t) => progress[t.id]).length;
            const dPct = Math.round((dDone / dTasks.length) * 100);
            const isToday = d.day === todayNum;
            return (
              <Link
                key={d.day}
                href={`/day/${d.day}`}
                className={`glass rounded-xl p-4 ${isToday ? "ring-2 ring-indigo-500" : ""}`}
              >
                <p className="text-xs text-[var(--muted)]">Day {d.day}</p>
                <p className="font-semibold text-sm mt-1">{d.title}</p>
                <div className="h-1.5 bg-[var(--surface2)] rounded-full mt-3 overflow-hidden">
                  <div
                    className="progress-bar h-full rounded-full"
                    style={{ width: `${dPct}%` }}
                  />
                </div>
                <p className="text-xs text-[var(--muted)] mt-1">{dPct}% · {dDone}/{dTasks.length}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
