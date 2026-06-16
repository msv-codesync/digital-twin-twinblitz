"use client";

import { buildExportText, WRITE_TOPICS, WRITE_TOTAL_QUESTIONS, answerKey } from "@/lib/write-study/bank";
import type { WriteAnswerRecord } from "@/lib/write-study/types";

type Props = {
  studentName: string;
  progress: Record<string, WriteAnswerRecord>;
};

export function DownloadAllRecall({ studentName, progress }: Props) {
  const answered = Object.values(progress).filter((p) => p.answer.trim()).length;
  const pct = WRITE_TOTAL_QUESTIONS
    ? Math.round((answered / WRITE_TOTAL_QUESTIONS) * 100)
    : 0;

  const downloadAll = () => {
    const flat: Record<string, { answer: string }> = {};
    for (const [k, v] of Object.entries(progress)) {
      flat[k] = { answer: v.answer };
    }
    const text = buildExportText(studentName, flat, WRITE_TOPICS);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Prof_Nasti_Recall_All_${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass rounded-xl p-4 border border-emerald-500/30 space-y-3">
      <p className="text-sm font-medium text-emerald-300">When you finish writing</p>
      <p className="text-xs text-[var(--muted)] leading-relaxed">
        Download all answers as one .txt file. Paste it here in Claude — I will mark each answer CORRECT /
        PARTIAL / WRONG and give what Prof. Nasti expects.
      </p>
      <p className="text-xs text-violet-400">
        Progress: {answered}/{WRITE_TOTAL_QUESTIONS} written ({pct}%)
      </p>
      <button
        type="button"
        onClick={downloadAll}
        className="w-full rounded-lg bg-emerald-600/20 border border-emerald-500/40 py-3 text-sm font-semibold text-emerald-200"
      >
        Download ALL answers (.txt)
      </button>
    </div>
  );
}

export function topicProgress(
  slug: string,
  questionCount: number,
  progress: Record<string, WriteAnswerRecord>
): number {
  let n = 0;
  for (let i = 0; i < questionCount; i++) {
    if (progress[answerKey(slug, i)]?.answer?.trim()) n++;
  }
  return n;
}
