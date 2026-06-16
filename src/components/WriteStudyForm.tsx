"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { WriteAnswerRecord, WriteTopic } from "@/lib/write-study/types";
import { answerKey, buildExportText } from "@/lib/write-study/bank";

type Props = {
  topic: WriteTopic;
  studentName: string;
  initialProgress: Record<string, WriteAnswerRecord>;
};

export function WriteStudyForm({ topic, studentName, initialProgress }: Props) {
  const [answers, setAnswers] = useState<string[]>(() =>
    topic.questions.map((_, i) => initialProgress[answerKey(topic.slug, i)]?.answer ?? "")
  );
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});

  const saveOne = useCallback(async (index: number, text: string) => {
    setStatus("saving");
    await fetch("/api/write-study", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answerKey: answerKey(topic.slug, index), answer: text }),
    });
    setStatus("saved");
    setTimeout(() => setStatus("idle"), 1500);
  }, [topic.slug]);

  const onChange = (index: number, text: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = text;
      return next;
    });
    clearTimeout(timers.current[index]);
    timers.current[index] = setTimeout(() => saveOne(index, text), 700);
  };

  useEffect(() => {
    return () => {
      Object.values(timers.current).forEach(clearTimeout);
    };
  }, []);

  const downloadTopic = () => {
    const progress: Record<string, { answer: string }> = {};
    topic.questions.forEach((_, i) => {
      progress[answerKey(topic.slug, i)] = { answer: answers[i] };
    });
    const text = buildExportText(studentName, progress, [topic]);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `recall_${topic.slug}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filled = answers.filter((a) => a.trim().length > 0).length;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-2 text-xs text-[var(--muted)]">
        <span>
          {filled}/{topic.questions.length} answered ·{" "}
          {status === "saving" ? "Saving…" : status === "saved" ? "Saved ✓" : "Auto-saves as you type"}
        </span>
        <Link href={`/learn/${topic.slug}`} className="text-violet-400 underline shrink-0">
          Read topic first →
        </Link>
      </div>

      {topic.questions.map((q, i) => (
        <div key={i} className="glass rounded-xl p-4 space-y-2">
          <p className="text-xs font-semibold text-violet-400">Question {i + 1}</p>
          <p className="text-sm font-medium leading-snug">{q}</p>
          <textarea
            value={answers[i]}
            onChange={(e) => onChange(i, e.target.value)}
            placeholder="Write your answer from memory — no peeking. Say it like the oral exam."
            rows={4}
            className="w-full rounded-lg bg-[var(--surface2)] border border-[var(--border)] px-3 py-2 text-sm leading-relaxed resize-y min-h-[96px] focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={downloadTopic}
        className="w-full glass rounded-xl p-4 text-sm font-medium text-emerald-300 border border-emerald-500/30"
      >
        Download this topic (.txt) → paste in Claude to check
      </button>
    </div>
  );
}
