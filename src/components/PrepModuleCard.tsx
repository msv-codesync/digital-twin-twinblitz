"use client";

import Image from "next/image";
import { useState } from "react";
import type { PrepModule } from "@/lib/prep-guide";
import { formatMinutes } from "@/lib/prep-guide";

export function PrepModuleCard({ module: m }: { module: PrepModule }) {
  const [open, setOpen] = useState(m.order <= 2);

  return (
    <article id={m.id} className="glass rounded-2xl overflow-hidden scroll-mt-20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-4 flex gap-3 items-start"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold flex items-center justify-center">
          {m.order}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-semibold text-[15px] leading-snug">{m.title}</h2>
            <span className="flex-shrink-0 text-xs font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
              ⏱ {formatMinutes(m.minutes)}
            </span>
          </div>
          <p className="text-xs text-[var(--muted)] mt-1">{m.subtitle}</p>
        </div>
        <span className="text-[var(--muted)] text-sm mt-1">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="px-4 pb-5 space-y-4 border-t border-[var(--border)] pt-4 animate-slide-up">
          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-3">
            <p className="text-xs font-semibold text-emerald-400 mb-1">🧠 REMEMBER</p>
            <p className="text-sm font-medium">{m.remember}</p>
          </div>

          <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/25 p-3">
            <p className="text-xs font-semibold text-indigo-400 mb-1">✅ PERFECT EXAM ANSWER</p>
            <p className="text-sm leading-relaxed">{m.examAnswer}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[var(--muted)] mb-1">📖 UNDERSTAND (elaborated)</p>
            <p className="text-sm leading-relaxed text-[var(--text)]/90">{m.learn}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-[var(--muted)] mb-1">✏️ PRACTICE NOW</p>
            <p className="text-sm leading-relaxed text-[var(--text)]/90">{m.practice}</p>
          </div>

          <div className="text-xs space-y-1 text-[var(--muted)]">
            <p>
              <span className="text-indigo-400 font-medium">Lecture:</span> {m.lectureRef}
            </p>
            {m.exerciseRef && (
              <p>
                <span className="text-indigo-400 font-medium">Exercise:</span> {m.exerciseRef}
              </p>
            )}
          </div>

          {m.pdfLink && (
            <a
              href={m.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-indigo-400 underline"
            >
              📄 Open class PDF →
            </a>
          )}

          <div className="rounded-xl overflow-hidden border border-[var(--border)]">
            <p className="text-xs font-semibold text-[var(--muted)] px-3 py-2 bg-[var(--surface2)]">
              🎬 {m.youtube.title}
            </p>
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${m.youtube.id}`}
                title={m.youtube.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {m.noteImage && (
            <div className="rounded-xl overflow-hidden border border-[var(--border)]">
              <p className="text-xs font-semibold text-indigo-300 px-3 py-2 bg-[var(--surface2)]">
                📷 {m.noteLabel ?? "Your handwritten note"}
              </p>
              <Image
                src={`/class-notes/${m.noteImage}`}
                alt={m.noteLabel ?? m.title}
                width={800}
                height={1200}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          )}
        </div>
      )}
    </article>
  );
}
