"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { QuizAnswerRecord } from "@/lib/quiz/types";
import type { QuizQuestion } from "@/lib/quiz/types";
import { computeQuizStats, QUIZ_TOTAL } from "@/lib/quiz";

type Props = {
  deckId: string;
  deckTitle: string;
  questions: QuizQuestion[];
  initialProgress: Record<string, QuizAnswerRecord>;
};

export function QuizPlayer({
  deckId,
  deckTitle,
  questions,
  initialProgress,
}: Props) {
  const [progress, setProgress] = useState(initialProgress);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<"all" | "wrong" | "unanswered">("all");

  const filtered = questions.filter((q) => {
    const rec = progress[q.id];
    if (filter === "unanswered") return !rec;
    if (filter === "wrong") return rec && !rec.correct;
    return true;
  });

  const current = filtered[index] ?? questions[0];
  const stats = computeQuizStats(progress);
  const deckStats =
    deckId === "mix"
      ? {
          total: questions.length,
          answered: stats.answered,
          correct: stats.correct,
          pct: stats.pct,
        }
      : stats.byDeck[deckId] ?? { total: questions.length, answered: 0, correct: 0, pct: 0 };

  const loadQuestion = useCallback(
    (q: QuizQuestion) => {
      const rec = progress[q.id];
      if (rec) {
        setSelected(rec.selectedIndex);
        setRevealed(true);
      } else {
        setSelected(null);
        setRevealed(false);
      }
    },
    [progress]
  );

  useEffect(() => {
    if (current) loadQuestion(current);
  }, [current, loadQuestion]);

  async function submitAnswer(choice: number) {
    if (!current || saving || revealed) return;
    setSaving(true);
    setSelected(choice);

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: current.id, selectedIndex: choice }),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      setProgress(data.progress);
      setRevealed(true);
    } catch {
      setSelected(null);
      alert("Could not save — check you're logged in.");
    } finally {
      setSaving(false);
    }
  }

  function goNext() {
    if (index < filtered.length - 1) {
      setIndex(index + 1);
    }
  }

  function goPrev() {
    if (index > 0) setIndex(index - 1);
  }

  if (!current) {
    return (
      <p className="text-center text-[var(--muted)] py-12">
        No questions in this filter.{" "}
        <button type="button" className="text-indigo-400" onClick={() => setFilter("all")}>
          Show all
        </button>
      </p>
    );
  }

  const rec = progress[current.id];
  const isCorrect = rec?.correct;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-[var(--muted)]">
        <Link href="/quiz" className="text-indigo-400">
          ← All decks
        </Link>
        <span>
          {deckStats?.correct ?? 0}/{deckStats?.answered ?? 0} correct · {deckStats?.total} total
        </span>
      </div>

      <div className="glass rounded-2xl p-4 border border-indigo-500/20">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-indigo-400 font-semibold">{current.source}</p>
          <p className="text-xs text-[var(--muted)]">
            Q {index + 1}/{filtered.length}
          </p>
        </div>
        <div className="h-1.5 bg-[var(--surface2)] rounded-full overflow-hidden mb-4">
          <div
            className="progress-bar h-full rounded-full transition-all"
            style={{ width: `${((index + 1) / filtered.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-amber-400/90 mb-1">{current.topic}</p>
        <h2 className="font-semibold text-[15px] leading-snug">{current.question}</h2>
      </div>

      <div className="space-y-2">
        {current.options.map((opt, i) => {
          let style =
            "glass rounded-xl p-4 text-left text-sm w-full transition-all border ";
          const isSelected = selected === i;
          const isAnswer = revealed && i === current.correctIndex;

          if (!revealed) {
            style += isSelected
              ? "border-indigo-500 ring-2 ring-indigo-500/40"
              : "border-transparent active:scale-[0.98]";
          } else if (isAnswer) {
            style += "border-emerald-500 bg-emerald-500/10";
          } else if (isSelected && !isAnswer) {
            style += "border-red-500/60 bg-red-500/10";
          } else {
            style += "border-transparent opacity-60";
          }

          return (
            <button
              key={opt}
              type="button"
              disabled={revealed || saving}
              onClick={() => submitAnswer(i)}
              className={style}
            >
              <span className="font-medium text-indigo-300 mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div
          className={`rounded-xl p-4 text-sm ${
            isCorrect
              ? "bg-emerald-500/10 border border-emerald-500/30"
              : "bg-amber-500/10 border border-amber-500/30"
          }`}
        >
          <p className="font-semibold mb-1">
            {isCorrect ? "✅ Correct!" : "❌ Not quite — learn this:"}
          </p>
          <p className="leading-relaxed">{current.explanation}</p>
        </div>
      )}

      <div className="flex gap-2 flex-wrap">
        {(["all", "wrong", "unanswered"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              setIndex(0);
            }}
            className={`text-xs px-3 py-1.5 rounded-full ${
              filter === f ? "bg-indigo-500/30 text-indigo-300" : "glass text-[var(--muted)]"
            }`}
          >
            {f === "all" ? "All" : f === "wrong" ? "Retry wrong" : "Unanswered"}
          </button>
        ))}
      </div>

      <div className="flex justify-between gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="flex-1 py-3 rounded-xl glass text-sm disabled:opacity-40"
        >
          ← Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index >= filtered.length - 1}
          className="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium disabled:opacity-40"
        >
          Next →
        </button>
      </div>

      <p className="text-xs text-center text-[var(--muted)]">
        Answers save instantly to your account · {stats.answered}/{QUIZ_TOTAL} answered globally
      </p>
    </div>
  );
}
