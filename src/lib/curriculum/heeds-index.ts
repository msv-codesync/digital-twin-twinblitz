import { heedsDay } from "./heeds-day";
import type { DayPlan, Task } from "./types";

export const HEEDS_DAY: DayPlan = heedsDay;

export const HEEDS_TASKS: Task[] = heedsDay.blocks.flatMap((b) => b.tasks);

export const HEEDS_TOTAL_TASKS = HEEDS_TASKS.length;
export const HEEDS_TOTAL_XP = HEEDS_TASKS.reduce((s, t) => s + t.xp, 0);

export function getHeedsTask(taskId: string): Task | undefined {
  return HEEDS_TASKS.find((t) => t.id === taskId);
}

export function getHeedsBlockTasks(block: number): Task[] {
  const b = heedsDay.blocks.find((x) => x.block === block);
  return b?.tasks ?? [];
}
