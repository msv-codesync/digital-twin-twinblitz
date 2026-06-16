"use client";

import Image from "next/image";
import type { DeepTopic } from "@/lib/deep-guide";

export function DeepTopicView({ topic }: { topic: DeepTopic }) {
  const video = topic.videos[0];

  return (
    <article className="space-y-5">
      <div className="rounded-xl bg-violet-500/10 border border-violet-500/25 p-4">
        <p className="text-xs font-semibold text-violet-400">Remember in one line</p>
        <p className="text-sm font-medium mt-1">{topic.remember}</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-[var(--muted)] mb-2">Explained clearly</p>
        <div className="text-sm leading-relaxed whitespace-pre-line text-[var(--text)]/95">
          {topic.plainAnswer}
        </div>
      </div>

      <div className="rounded-xl bg-amber-500/10 border border-amber-500/25 p-4">
        <p className="text-xs font-semibold text-amber-400">Plain analogy</p>
        <p className="text-sm leading-relaxed mt-1">{topic.analogy}</p>
      </div>

      <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/25 p-4">
        <p className="text-xs font-semibold text-indigo-400">Prof. Nasti&apos;s wording</p>
        <p className="text-sm leading-relaxed mt-1 italic">{topic.profSays}</p>
      </div>

      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-4">
        <p className="text-xs font-semibold text-emerald-400">Say this in the exam</p>
        <p className="text-sm mt-1 leading-relaxed">{topic.sayInExam}</p>
      </div>

      {video && (
        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
          <div className="px-3 py-2 bg-[var(--surface2)]">
            <p className="text-xs font-semibold text-[var(--muted)]">
              Watch & learn {video.duration ? `(${video.duration})` : "(~10–15 min)"}
            </p>
            <p className="text-sm font-medium mt-0.5">{video.title}</p>
          </div>
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs text-indigo-400 px-3 py-2 underline"
          >
            Open on YouTube ↗
          </a>
        </div>
      )}

      {topic.practice.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-semibold text-[var(--muted)]">
            Practice — answer out loud before peeking
          </p>
          {topic.practice.map((item, i) => (
            <details
              key={i}
              className="glass rounded-xl p-4 group"
            >
              <summary className="text-sm font-medium cursor-pointer list-none flex justify-between gap-2">
                <span>Q{i + 1}. {item.question}</span>
                <span className="text-violet-400 text-xs shrink-0">tap answer</span>
              </summary>
              <p className="text-sm mt-3 pt-3 border-t border-[var(--border)] leading-relaxed text-emerald-200/90">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      )}

      {topic.noteImage && (
        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
          <p className="text-xs font-semibold text-indigo-300 px-3 py-2 bg-[var(--surface2)]">
            {topic.noteLabel ?? "Your handwritten note"}
          </p>
          <Image
            src={`/class-notes/${topic.noteImage}`}
            alt={topic.noteLabel ?? topic.title}
            width={800}
            height={1200}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      )}

      <div className="text-xs text-[var(--muted)] space-y-1">
        <p>Source: {topic.source}</p>
        <a
          href="/heeds/DigitalTwin_Lectures_Exercises.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 underline block"
        >
          Open Exercises PDF ↗
        </a>
        {topic.pdfRef && (
          <a
            href={`/heeds/${topic.pdfRef}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline block"
          >
            Open Lecture PDF ↗
          </a>
        )}
      </div>
    </article>
  );
}
