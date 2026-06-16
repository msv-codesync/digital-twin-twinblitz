"use client";

import { useState } from "react";
import {
  HEEDS_TABS,
  HEEDS_EIGHT_STEPS,
  HEEDS_EXAMPLES,
  PROJECT_HEEDS_STEPS,
  HEEDS_SPRING_ANTENNA_MAP,
  ORAL_DEFENSE,
  RUN_COMMANDS,
} from "@/lib/heeds-practice";

function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="text-sm space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 leading-snug">
          <span className="text-orange-400 shrink-0">{i === 0 ? "→" : "→"}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
    <div className="glass rounded-xl border border-orange-500/15 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between gap-2 items-start"
      >
        <div>
          <p className="font-medium text-sm">{title}</p>
          {subtitle && <p className="text-xs text-[var(--muted)] mt-0.5">{subtitle}</p>}
        </div>
        <span className="text-orange-400 text-sm shrink-0">{open ? "▾" : "▸"}</span>
      </button>
      {open && <div className="px-4 pb-4 border-t border-[var(--border)]/50 pt-3">{children}</div>}
    </div>
  );
}

export function HeedsPracticeSections() {
  return (
    <div className="space-y-6">
      <section className="px-5">
        <h2 className="text-xs font-semibold text-orange-400 uppercase tracking-wide mb-2">
          Workflow (every example)
        </h2>
        <p className="text-sm font-mono text-orange-200/90 mb-3">{HEEDS_TABS}</p>
        <ArrowList items={HEEDS_EIGHT_STEPS} />
      </section>

      <section className="px-5">
        <h2 className="font-semibold mb-2">Run in HEEDS</h2>
        <pre className="glass rounded-xl p-3 text-xs text-emerald-200/90 overflow-x-auto mb-2">
          {RUN_COMMANDS.heeds}
        </pre>
        <p className="text-xs text-[var(--muted)]">{RUN_COMMANDS.noLicense}</p>
      </section>

      <section className="px-5 space-y-2">
        <h2 className="font-semibold mb-2">8 examples — hands-on</h2>
        {HEEDS_EXAMPLES.map((ex) => (
          <Collapse
            key={ex.n}
            title={`Ex ${ex.n}: ${ex.name}${ex.n === 4 ? " ★" : ""}`}
            subtitle={`${ex.folder} · ${ex.study}`}
            defaultOpen={ex.n === 4}
          >
            <p className="text-xs text-[var(--muted)] mb-2">{ex.goal}</p>
            <p className="text-xs mb-1">
              <span className="text-orange-300">Vars:</span> {ex.vars}
            </p>
            <p className="text-xs mb-3">
              <span className="text-orange-300">Responses:</span> {ex.responses}
            </p>
            <p className="text-xs font-semibold text-orange-300 mb-1">Do this</p>
            <ArrowList items={ex.handsOn} />
            <p className="text-xs font-semibold text-orange-300 mt-3 mb-1">After Run → POST</p>
            <ArrowList items={ex.afterRun} />
            <p className="text-xs font-semibold text-emerald-400 mt-3 mb-1">Check ✓</p>
            <ul className="text-xs space-y-1 text-[var(--muted)]">
              {ex.check.map((c) => (
                <li key={c}>✓ {c}</li>
              ))}
            </ul>
            <p className="text-xs mt-3 text-amber-200/90 border-l-2 border-amber-500/50 pl-2">
              Defend: {ex.defend}
            </p>
          </Collapse>
        ))}
      </section>

      <section className="px-5">
        <h2 className="font-semibold mb-2">Your antenna project = HEEDS Ex 4</h2>
        <div className="space-y-3">
          {PROJECT_HEEDS_STEPS.map((s) => (
            <div key={s.n} className="glass rounded-xl p-4 border border-cyan-500/15">
              <p className="text-xs text-cyan-400 font-semibold">
                Step {s.n} — {s.title}
              </p>
              <div className="grid gap-3 mt-2">
                <div>
                  <p className="text-xs font-medium text-orange-300 mb-1">In HEEDS</p>
                  <ArrowList items={s.heeds} />
                </div>
                <div>
                  <p className="text-xs font-medium text-emerald-300 mb-1">In Python</p>
                  <ArrowList items={s.python} />
                </div>
              </div>
              <p className="text-xs mt-2 text-amber-200/90">
                <span className="text-amber-400">Say:</span> {s.say}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5">
        <h2 className="font-semibold mb-2">Spring ↔ Antenna map</h2>
        <div className="glass rounded-xl overflow-hidden text-xs">
          {HEEDS_SPRING_ANTENNA_MAP.map((row) => (
            <div
              key={row.heeds}
              className="flex border-b border-[var(--border)]/40 last:border-0"
            >
              <div className="flex-1 p-3 text-orange-200/90">{row.heeds}</div>
              <div className="px-2 text-[var(--muted)]">→</div>
              <div className="flex-1 p-3 text-cyan-200/90">{row.antenna}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5">
        <h2 className="font-semibold mb-2">Run Python (same as HEEDS POST)</h2>
        <pre className="glass rounded-xl p-4 text-xs text-emerald-200/90 overflow-x-auto leading-relaxed whitespace-pre-wrap">
          {RUN_COMMANDS.python}
        </pre>
      </section>

      <section className="px-5 mb-2">
        <h2 className="font-semibold mb-2">Oral defense — 30 sec each</h2>
        <ul className="text-sm space-y-2">
          {ORAL_DEFENSE.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-orange-400">→</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
