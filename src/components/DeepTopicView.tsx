"use client";

import Image from "next/image";
import { useState } from "react";
import type { DeepTopic } from "@/lib/deep-guide";

export function DeepTopicView({ topic }: { topic: DeepTopic }) {
  const [videoIdx, setVideoIdx] = useState(0);
  const video = topic.videos[videoIdx] ?? topic.videos[0];

  return (
    <article className="space-y-5">
      <div className="rounded-xl bg-violet-500/10 border border-violet-500/25 p-4">
        <p className="text-xs font-semibold text-violet-400">🧠 REMEMBER IN ONE LINE</p>
        <p className="text-sm font-medium mt-1">{topic.remember}</p>
      </div>

      <div className="rounded-xl bg-amber-500/10 border border-amber-500/25 p-4">
        <p className="text-xs font-semibold text-amber-400">💡 PLAIN ANALOGY (no jargon)</p>
        <p className="text-sm leading-relaxed mt-1 text-[var(--text)]/90">{topic.analogy}</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-[var(--muted)] mb-2">📖 EXPLAINED CLEARLY</p>
        <div className="text-sm leading-relaxed whitespace-pre-line text-[var(--text)]/95 space-y-0">
          {topic.plainAnswer}
        </div>
      </div>

      <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/25 p-4">
        <p className="text-xs font-semibold text-indigo-400">🎓 PROF. NASTI WANTS TO HEAR</p>
        <p className="text-sm leading-relaxed mt-1 italic">&ldquo;{topic.profSays.replace(/^"|"$/g, "")}&rdquo;</p>
      </div>

      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-4">
        <p className="text-xs font-semibold text-emerald-400">⚡ EXAM TIP</p>
        <p className="text-sm mt-1">{topic.examTip}</p>
      </div>

      {topic.videos.length > 0 && video && (
        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
          <div className="flex items-center justify-between px-3 py-2 bg-[var(--surface2)] gap-2">
            <p className="text-xs font-semibold text-[var(--muted)] truncate">
              🎬 {video.title}
            </p>
            {topic.videos.length > 1 && (
              <div className="flex gap-1 shrink-0">
                {topic.videos.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVideoIdx(i)}
                    className={`text-xs px-2 py-0.5 rounded ${
                      i === videoIdx ? "bg-violet-500/40 text-violet-200" : "text-[var(--muted)]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
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

      {topic.noteImage && (
        <div className="rounded-xl overflow-hidden border border-[var(--border)]">
          <p className="text-xs font-semibold text-indigo-300 px-3 py-2 bg-[var(--surface2)]">
            📷 {topic.noteLabel ?? "Your handwritten note"}
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

      <p className="text-xs text-[var(--muted)]">Source: {topic.source}</p>
    </article>
  );
}
