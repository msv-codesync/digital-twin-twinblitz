"use client";

import { useState, useEffect, useCallback } from "react";

export function NotesEditor({ taskId }: { taskId: string }) {
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/notes?taskId=${taskId}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.notes?.content) setContent(d.notes.content);
      });
  }, [taskId]);

  const save = useCallback(async () => {
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, content }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [taskId, content]);

  useEffect(() => {
    const t = setTimeout(save, 800);
    return () => clearTimeout(t);
  }, [content, save]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wide">
          Your Notes
        </h3>
        {saved && <span className="text-xs text-green-400">Saved ✓</span>}
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Jot insights, formulas, claim drafts..."
        rows={5}
        className="w-full px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)] outline-none resize-none text-sm"
      />
    </div>
  );
}
