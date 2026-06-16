"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CORE_TERMS,
  DOE_SUMMARY,
  FIGURE_DEFENSE,
  METHOD_STEPS_DEFENSE,
  PITCH_90_SEC,
  PROJECT_FORMULA,
  SANITY_NUMBERS,
  WHITEBOARD_DRILLS,
} from "@/lib/project-defense";

function Collapse({
  title,
  subtitle,
  defaultOpen,
  children,
}: {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className="glass rounded-xl border border-cyan-500/15 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between gap-2 items-start"
      >
        <div>
          <p className="font-medium text-sm">{title}</p>
          {subtitle && <p className="text-xs text-[var(--muted)] mt-0.5">{subtitle}</p>}
        </div>
        <span className="text-cyan-400 text-sm shrink-0">{open ? "▾" : "▸"}</span>
      </button>
      {open && <div className="px-4 pb-4 border-t border-[var(--border)]/50 pt-3">{children}</div>}
    </div>
  );
}

function BulletList({ items, color = "text-[var(--text)]/90" }: { items: string[]; color?: string }) {
  return (
    <ul className={`text-sm space-y-1.5 ${color}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2 leading-snug">
          <span className="text-cyan-400 shrink-0">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDefenseGuide() {
  return (
    <div className="space-y-6">
      {/* Formula + sanity */}
      <section className="px-5">
        <h2 className="font-semibold mb-2 text-cyan-300">Formula — say out loud</h2>
        <div className="glass rounded-xl p-4 text-sm space-y-2 font-mono text-emerald-200/90">
          <p>{PROJECT_FORMULA.main}</p>
          <p>{PROJECT_FORMULA.fWind}</p>
          <p>{PROJECT_FORMULA.fTemp}</p>
          <p className="text-xs text-[var(--muted)] font-sans">{PROJECT_FORMULA.nominal}</p>
        </div>
        <p className="text-xs font-semibold text-amber-300 mt-3 mb-1">Verification numbers (memorise)</p>
        <BulletList items={SANITY_NUMBERS} />
      </section>

      {/* 90 sec pitch */}
      <section className="px-5">
        <h2 className="font-semibold mb-2">90-second pitch</h2>
        <BulletList items={PITCH_90_SEC} />
      </section>

      {/* Every term she will ask why */}
      <section className="px-5 space-y-2">
        <h2 className="font-semibold mb-2">Every term — WHAT · WHY · IF SHE ASKS</h2>
        <p className="text-xs text-[var(--muted)] mb-2">
          Tap each word you use in the presentation. She asks &quot;what is CFD?&quot; &quot;why Pareto?&quot; for everything.
        </p>
        {CORE_TERMS.map((t) => (
          <Collapse key={t.term} title={t.term} subtitle={t.what.slice(0, 72) + "…"}>
            <p className="text-xs mb-2">
              <span className="text-violet-400 font-semibold">What (Prof):</span> {t.what}
            </p>
            <p className="text-xs mb-2">
              <span className="text-orange-300 font-semibold">Why in course:</span> {t.whyCourse}
            </p>
            <p className="text-xs mb-2">
              <span className="text-emerald-400 font-semibold">Why in my project:</span> {t.whyProject}
            </p>
            <p className="text-xs text-amber-200/90 border-l-2 border-amber-500/40 pl-2">
              <span className="text-amber-400 font-semibold">If she asks:</span> {t.ifSheAsks}
            </p>
          </Collapse>
        ))}
      </section>

      {/* DoE summary */}
      <section className="px-5">
        <h2 className="font-semibold mb-2">DoE — your 40 runs</h2>
        <BulletList
          items={[
            DOE_SUMMARY.design,
            `Wind: ${DOE_SUMMARY.windLevels}`,
            `Temp: ${DOE_SUMMARY.tempLevels}`,
            DOE_SUMMARY.sensitivity,
            DOE_SUMMARY.sensitivityTemp,
            `Dominance: ${DOE_SUMMARY.ratio}`,
            DOE_SUMMARY.range,
          ]}
        />
      </section>

      {/* Each figure */}
      <section className="px-5 space-y-4">
        <h2 className="font-semibold mb-1">Every figure — draw · explain · defend</h2>
        <p className="text-xs text-[var(--muted)] mb-3">
          She may ask you to sketch on board and explain axes, result, and why you chose this plot.
        </p>
        {FIGURE_DEFENSE.map((fig, i) => (
          <div key={fig.file} className="glass rounded-xl overflow-hidden border border-indigo-500/15">
            <div className="px-3 py-2 bg-indigo-500/10">
              <p className="text-sm font-medium text-indigo-300">
                Fig {i + 1}: {fig.title}
              </p>
            </div>
            <Image
              src={`/project/outputs/${fig.file}`}
              alt={fig.title}
              width={800}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
            <div className="p-4 space-y-3 text-xs">
              <p>
                <span className="text-violet-400 font-semibold">What is this graph?</span> {fig.whatIsIt}
              </p>
              <div>
                <p className="text-cyan-400 font-semibold mb-1">Axes</p>
                <BulletList items={fig.axes} />
              </div>
              <div>
                <p className="text-emerald-400 font-semibold mb-1">How to draw & explain (whiteboard)</p>
                <BulletList items={fig.drawExplain} />
              </div>
              <div>
                <p className="text-orange-300 font-semibold mb-1">What result it shows</p>
                <BulletList items={fig.result} />
              </div>
              <p>
                <span className="text-amber-400 font-semibold">What I understand:</span> {fig.understand}
              </p>
              <p>
                <span className="text-rose-300 font-semibold">Why this plot:</span> {fig.whyThisPlot}
              </p>
              <p className="text-emerald-200/80 font-mono">{fig.numbers.join(" · ")}</p>
              <div>
                <p className="text-amber-300 font-semibold mb-1">She will ask</p>
                {fig.sheAsks.map((qa) => (
                  <div key={qa.q} className="mb-2 pl-2 border-l border-amber-500/30">
                    <p className="text-amber-200/90">Q: {qa.q}</p>
                    <p className="text-[var(--muted)]">A: {qa.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Method steps */}
      <section className="px-5 space-y-2">
        <h2 className="font-semibold mb-2">6 method steps — bullets + defend line</h2>
        {METHOD_STEPS_DEFENSE.map((s) => (
          <Collapse key={s.n} title={`Step ${s.n}: ${s.title}`} defaultOpen={s.n <= 2}>
            <BulletList items={s.bullets} />
            <p className="text-xs mt-3 text-amber-200/90 border-l-2 border-amber-500/40 pl-2">
              Defend: {s.defend}
            </p>
          </Collapse>
        ))}
      </section>

      {/* Whiteboard drills */}
      <section className="px-5 mb-4">
        <h2 className="font-semibold mb-2">Whiteboard drills — practise drawing</h2>
        <BulletList items={WHITEBOARD_DRILLS} />
      </section>
    </div>
  );
}
