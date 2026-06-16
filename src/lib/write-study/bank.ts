import { DEEP_TOPICS } from "@/lib/deep-guide";
import { TOPIC_PRACTICE } from "@/lib/deep-guide/topic-practice";
import type { WriteTopic } from "./types";

const FALLBACKS = [
  "Explain this topic in your own words (2–3 sentences) as you would in the oral exam.",
  "How does this topic connect to your 5G antenna RUL digital twin project?",
  "What exact wording or phrase would Prof. Nasti expect you to use?",
  "Give one concrete example from the lecture slides or your notes.",
  "If she asked a follow-up question on this topic, what might she ask — and how would you answer?",
];

function fiveQuestions(slug: string, title: string, fromTopic: string[]): string[] {
  const pool = [
    ...fromTopic,
    ...(TOPIC_PRACTICE[slug] ?? []).map((p) => p.question),
  ];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const q of pool) {
    const k = q.trim().toLowerCase();
    if (!seen.has(k) && q.trim()) {
      seen.add(k);
      out.push(q.trim());
    }
    if (out.length >= 5) break;
  }
  let fi = 0;
  while (out.length < 5) {
    out.push(FALLBACKS[fi % FALLBACKS.length].replace("this topic", title));
    fi++;
  }
  return out.slice(0, 5);
}

function buildBank(): WriteTopic[] {
  return DEEP_TOPICS.map((t) => ({
    slug: t.slug,
    title: t.title,
    group: t.group,
    questions: fiveQuestions(
      t.slug,
      t.title,
      t.practice.map((p) => p.question)
    ),
  }));
}

export const WRITE_TOPICS: WriteTopic[] = buildBank();

export const WRITE_TOTAL_QUESTIONS = WRITE_TOPICS.length * 5;

export function getWriteTopic(slug: string): WriteTopic | undefined {
  return WRITE_TOPICS.find((t) => t.slug === slug);
}

export function answerKey(slug: string, questionIndex: number): string {
  return `${slug}::q${questionIndex}`;
}

export function buildExportText(
  name: string,
  progress: Record<string, { answer: string }>,
  topics: WriteTopic[] = WRITE_TOPICS
): string {
  const lines: string[] = [
    "=== PROF. DR. ADELE NASTI — WRITTEN RECALL CHECK ===",
    `Student: ${name}`,
    `Date: ${new Date().toISOString().split("T")[0]}`,
    "",
    "INSTRUCTIONS FOR AI REVIEW:",
    "Compare MY ANSWER to what Prof. Nasti teaches in her Digital Twin course.",
    "For each question: say CORRECT / PARTIAL / WRONG, give the answer she expects, and note my mistakes in plain words.",
    "",
    "=".repeat(60),
    "",
  ];

  for (const topic of topics) {
    lines.push(`--- TOPIC: ${topic.title} (${topic.group}) ---`);
    lines.push("");
    topic.questions.forEach((q, i) => {
      const key = answerKey(topic.slug, i);
      const ans = progress[key]?.answer?.trim() || "(not answered yet)";
      lines.push(`Q${i + 1}: ${q}`);
      lines.push("MY ANSWER:");
      lines.push(ans);
      lines.push("");
    });
    lines.push("");
  }

  lines.push("=== END — paste this entire file into Claude for cross-check ===");
  return lines.join("\n");
}
