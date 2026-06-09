import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getTaskProgress, getUserStats } from "@/lib/db";
import {
  HEEDS_DAY,
  HEEDS_TASKS,
  HEEDS_TOTAL_TASKS,
  HEEDS_TOTAL_XP,
  CATEGORY_COLORS,
  CATEGORY_EMOJI,
} from "@/lib/curriculum";
import { BottomNav } from "@/components/BottomNav";
import { LogoutButton } from "@/components/LogoutButton";

export default async function HeedsPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const progress = await getTaskProgress(user.id);
  const stats = await getUserStats(user.id);
  const heedsProgress = HEEDS_TASKS.filter((t) => progress[t.id]);
  const completed = heedsProgress.length;
  const pct = Math.round((completed / HEEDS_TOTAL_TASKS) * 100);
  const heedsXp = heedsProgress.reduce((s, t) => s + t.xp, 0);

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-orange-400 tracking-wide">
              HEEDS MDO 2404 · Siemens
            </p>
            <p className="text-[var(--muted)] text-sm">Hey {user.name} 👋</p>
            <h1 className="text-xl font-bold mt-0.5">{HEEDS_DAY.title}</h1>
          </div>
          <LogoutButton />
        </div>
        <p className="text-sm text-[var(--muted)] mt-2">{HEEDS_DAY.subtitle}</p>
        <p className="text-xs text-orange-300/80 mt-1 italic">{HEEDS_DAY.theme}</p>
      </header>

      <section className="px-5 mb-4">
        <a
          href="/heeds/HEEDSGettingStartedGuide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass rounded-xl p-4 text-sm text-orange-300 border border-orange-500/20"
        >
          📄 Open HEEDS Getting Started Guide PDF (187 pages) →
        </a>
      </section>

      <section className="px-5 mb-6">
        <div className="glass rounded-2xl p-5 glow-accent border border-orange-500/20">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-3xl font-bold">{pct}%</p>
              <p className="text-xs text-[var(--muted)]">
                {completed}/{HEEDS_TOTAL_TASKS} HEEDS missions
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-amber-400">⚡ {heedsXp} XP</p>
              <p className="text-xs text-[var(--muted)]">
                🔥 {stats?.streak ?? 0} day streak
              </p>
            </div>
          </div>
          <div className="h-2 bg-[var(--surface2)] rounded-full overflow-hidden">
            <div className="progress-bar h-full rounded-full" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-[var(--muted)] mt-2">
            {HEEDS_TOTAL_XP} XP available · 18-hour scratch-to-hero
          </p>
        </div>
      </section>

      <section className="px-5 mb-6">
        <h2 className="font-semibold mb-1">8 Examples Roadmap</h2>
        <p className="text-xs text-[var(--muted)] mb-4">
          Function → Beam → Truss → Spring DoE → Robustness → Multi-obj → Curve fit → Taguchi
        </p>
        {HEEDS_DAY.blocks.map((block) => (
          <div key={block.block} className="mb-5">
            <div className="glass rounded-xl px-4 py-3 mb-2">
              <p className="text-xs text-[var(--muted)]">
                {block.slot} · Block {block.block}
              </p>
              <p className="font-semibold text-sm">{block.label}</p>
            </div>
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
                        <p
                          className={`font-medium text-sm leading-snug ${
                            done ? "line-through" : ""
                          }`}
                        >
                          {task.title}
                        </p>
                        <p className="text-xs text-[var(--muted)] mt-0.5">
                          {task.slot} · +{task.xp} XP
                        </p>
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
      </section>

      <BottomNav />
    </main>
  );
}
