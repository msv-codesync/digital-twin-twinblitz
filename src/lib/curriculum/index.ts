import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import type { DayPlan, Task } from "./types";

export const CAMP_DAYS: DayPlan[] = [day1, day2, day3];

export const ALL_TASKS: Task[] = CAMP_DAYS.flatMap((d) =>
  d.blocks.flatMap((b) => b.tasks)
);

export const TOTAL_TASKS = ALL_TASKS.length;
export const TOTAL_XP = ALL_TASKS.reduce((s, t) => s + t.xp, 0);

export function getDay(dayNum: number): DayPlan | undefined {
  return CAMP_DAYS.find((d) => d.day === dayNum);
}

export function getTask(taskId: string): Task | undefined {
  return ALL_TASKS.find((t) => t.id === taskId);
}

export function getTodayDayNum(): number {
  const start = new Date("2026-06-08");
  const now = new Date();
  const diff = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return Math.min(Math.max(diff + 1, 1), CAMP_DAYS.length);
}

export const CATEGORY_COLORS: Record<string, string> = {
  ALL: "#a78bfa",
  Theory: "#60a5fa",
  "V&V": "#34d399",
  DoE: "#f472b6",
  Optimization: "#fbbf24",
  HEEDS: "#fb923c",
  Surrogate: "#22d3ee",
  Functional: "#e879f9",
  Project: "#4ade80",
  Tools: "#94a3b8",
  FEA: "#a3e635",
  ML: "#c084fc",
};

export const CATEGORY_EMOJI: Record<string, string> = {
  ALL: "🌐",
  Theory: "📘",
  "V&V": "✅",
  DoE: "🧪",
  Optimization: "🎯",
  HEEDS: "⚙️",
  Surrogate: "🤖",
  Functional: "📐",
  Project: "📡",
  Tools: "🔧",
  FEA: "🔩",
  ML: "🧠",
};
