"use client";

import { useState } from "react";

export function PracticeLog({ taskId }: { taskId: string }) {
  const [desc, setDesc] = useState("");
  const [mins, setMins] = useState(30);
  const [logged, setLogged] = useState(false);

  async function log() {
    if (!desc.trim()) return;
    await fetch("/api/practice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, description: desc, durationMinutes: mins }),
    });
    setDesc("");
    setLogged(true);
    setTimeout(() => setLogged(false), 2000);
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wide">
        Log Practice (+15 XP)
      </h3>
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="What did you build/practice?"
        className="w-full px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] outline-none text-sm"
      />
      <div className="flex gap-2 items-center">
        <input
          type="number"
          value={mins}
          onChange={(e) => setMins(Number(e.target.value))}
          min={1}
          max={180}
          className="w-20 px-3 py-2 rounded-xl bg-[var(--surface2)] border border-[var(--border)] text-sm"
        />
        <span className="text-sm text-[var(--muted)]">minutes</span>
        <button
          onClick={log}
          className="ml-auto px-4 py-2 rounded-xl bg-indigo-600 text-sm font-medium"
        >
          {logged ? "Logged ✓" : "Log it"}
        </button>
      </div>
    </div>
  );
}
