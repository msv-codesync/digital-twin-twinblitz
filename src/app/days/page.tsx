import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getTaskProgress } from "@/lib/db";
import { CAMP_DAYS, getTodayDayNum } from "@/lib/curriculum";
import { BottomNav } from "@/components/BottomNav";

export default async function DaysPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const progress = await getTaskProgress(user.id);
  const todayNum = getTodayDayNum();

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <h1 className="text-xl font-bold">📅 3-Day Exam Sprint</h1>
        <p className="text-sm text-[var(--muted)] mt-1">54 hours · Theory → DoE/HEEDS → Project + Presentation</p>
      </header>

      <div className="px-5 space-y-4">
        {CAMP_DAYS.map((d) => {
          const tasks = d.blocks.flatMap((b) => b.tasks);
          const done = tasks.filter((t) => progress[t.id]).length;
          const pct = Math.round((done / tasks.length) * 100);
          return (
            <Link
              key={d.day}
              href={`/day/${d.day}`}
              className={`block glass rounded-2xl p-5 ${
                d.day === todayNum ? "ring-2 ring-indigo-500 pulse-glow" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-[var(--muted)]">{d.date} · {d.day === todayNum ? "TODAY" : `Day ${d.day}`}</p>
                  <h2 className="text-lg font-bold mt-1">{d.title}</h2>
                  <p className="text-sm text-[var(--muted)]">{d.subtitle}</p>
                </div>
                <span className="text-2xl font-bold text-indigo-400">{pct}%</span>
              </div>
              <p className="text-xs mt-3 text-indigo-300 italic">{d.theme}</p>
              <div className="h-2 bg-[var(--surface2)] rounded-full mt-3 overflow-hidden">
                <div className="progress-bar h-full rounded-full" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-xs text-[var(--muted)] mt-2">
                {d.blocks.length} blocks · {tasks.length} tasks · {done} done
              </p>
            </Link>
          );
        })}
      </div>

      <BottomNav />
    </main>
  );
}
