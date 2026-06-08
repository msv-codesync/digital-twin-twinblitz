"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function TaskChecklist({
  taskId,
  items,
  initialDone,
}: {
  taskId: string;
  items: string[];
  initialDone: boolean;
}) {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean[]>(items.map(() => initialDone));
  const [taskDone, setTaskDone] = useState(initialDone);

  async function saveProgress(completed: boolean) {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, completed }),
    });
    router.refresh();
  }

  async function toggleItem(i: number) {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
    const allDone = next.every(Boolean);
    if (allDone && !taskDone) {
      setTaskDone(true);
      await saveProgress(true);
    } else if (!allDone && taskDone) {
      setTaskDone(false);
      await saveProgress(false);
    }
  }

  async function toggleTask() {
    const next = !taskDone;
    setTaskDone(next);
    if (next) setChecked(items.map(() => true));
    else setChecked(items.map(() => false));
    await saveProgress(next);
  }

  const doneCount = taskDone ? items.length : checked.filter(Boolean).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wide">
          Checklist ({doneCount}/{items.length})
        </h3>
        <button
          onClick={toggleTask}
          className={`text-xs px-3 py-1 rounded-full border ${
            taskDone
              ? "bg-green-500/20 border-green-500 text-green-400"
              : "border-[var(--border)] text-[var(--muted)]"
          }`}
        >
          {taskDone ? "✓ Done" : "Mark all"}
        </button>
      </div>
      {items.map((item, i) => (
        <label
          key={i}
          className="check-item flex items-start gap-3 p-3 rounded-xl bg-[var(--surface2)] cursor-pointer active:scale-[0.98] transition-transform"
        >
          <input
            type="checkbox"
            checked={taskDone || checked[i]}
            onChange={() => toggleItem(i)}
            className="mt-0.5 w-5 h-5 rounded accent-indigo-500 shrink-0"
          />
          <span className="text-sm leading-relaxed">{item}</span>
        </label>
      ))}
    </div>
  );
}
