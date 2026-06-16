import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";

const FIGURES = [
  { file: "01_rul_curves.png", title: "RUL vs temperature by wind level" },
  { file: "02_response_surface_3d.png", title: "3D DoE response surface" },
  { file: "03_pareto_sensitivity.png", title: "Pareto — wind dominates 3.5×" },
  { file: "04_operating_envelope.png", title: "Operating envelope (safe: ≤12 m/s, ≤30°C)" },
  { file: "05_doe_heatmap.png", title: "Full factorial heatmap (40 runs)" },
];

const STEPS = [
  {
    n: 1,
    title: "Define physics model",
    why: "Interpretable first-principles RUL — wind fatigue × thermal aging",
    how: "model.py → wind_factor(), temp_factor(), rul_days()",
    exam: "Recite formula + sanity: 20yr at (5m/s,20°C), 41 days at (35m/s,65°C)",
  },
  {
    n: 2,
    title: "Verification",
    why: "'Have I done the maths right?' — Prof's verification definition",
    how: "run_project.py prints anchor points; check monotonic trends",
    exam: "CFD vs analytical = verification; FEA vs test = validation",
  },
  {
    n: 3,
    title: "Full-factorial DoE",
    why: "Explore design space — same as HEEDS Example 4 (Coil Spring)",
    how: "doe.py → 4 wind × 10 temp = 40 runs → doe_results.csv",
    exam: "HEEDS: Process → Parameters → Tagging → Study (DOE) → Run → POST",
  },
  {
    n: 4,
    title: "Sensitivity + Pareto",
    why: "Identify dominant factor for robust design",
    how: "One-factor sweeps at midpoint of other factor",
    exam: "Wind ~3.5× temperature impact — state with ΔRUL numbers",
  },
  {
    n: 5,
    title: "Operating envelope",
    why: "Actionable recommendation for operators (investor value)",
    how: "Contour plot RUL(years); mark wind≤12, temp≤30 → >10yr",
    exam: "Avoid extrapolation beyond DoE bounds (35 m/s, 65°C)",
  },
  {
    n: 6,
    title: "Present & defend",
    why: "10–15 min pitch + 10 min theory Q&A (70% theory!)",
    how: "Download PPT below; rehearse slides 1–15",
    exam: "DT definition, V&V, coupling, PCA, Pugh, TRL 4–5",
  },
];

export default async function ProjectPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-cyan-400 tracking-wide">
          Final Exam · 10–15 min presentation
        </p>
        <h1 className="text-xl font-bold mt-1">📡 Antenna RUL Digital Twin</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Complete polished project — Python code, HEEDS workflow, figures &amp; PowerPoint.
          Built from your notebook for Prof. Dr. Adele Nasti.
        </p>
      </header>

      <section className="px-5 mb-5 space-y-2">
        <a
          href="/project/Exam_Presentation_Antenna_RUL.pptx"
          download
          className="block glass rounded-xl p-4 text-sm font-medium text-emerald-300 border border-emerald-500/30"
        >
          ⬇️ Download exam PowerPoint (15 slides) →
        </a>
        <a
          href="/project/DigitalTwin_Antenna_RUL.ipynb"
          download
          className="block glass rounded-xl p-4 text-sm text-indigo-300"
        >
          📓 Download Jupyter notebook →
        </a>
        <a
          href="/project/outputs/doe_results.csv"
          download
          className="block glass rounded-xl p-4 text-sm text-indigo-300"
        >
          📊 Download DoE results CSV (40 runs) →
        </a>
        <Link href="/prep" className="block glass rounded-xl p-4 text-sm text-amber-300">
          📚 Theory prep (70% of exam) →
        </Link>
      </section>

      <section className="px-5 mb-6">
        <div className="glass rounded-2xl p-5 border border-cyan-500/20">
          <h2 className="font-semibold text-cyan-300 mb-2">Your 10-min pitch script</h2>
          <ol className="text-sm space-y-2 text-[var(--text)]/90 list-decimal list-inside">
            <li>Problem: telecom outages, costly climber inspections (€220K drone pipeline)</li>
            <li>Digital twin = lifecycle virtual product — as-built + as-used RUL</li>
            <li>Physics model: RUL = 175200/(f_wind×f_temp×24)</li>
            <li>DoE 40 runs — HEEDS Example 4 equivalent workflow</li>
            <li>Result: wind dominates 3.5× — safe ops wind≤12, temp≤30</li>
            <li>Demo: Python notebook / run_project.py live</li>
            <li>Value: predictive maintenance, fewer outages</li>
          </ol>
        </div>
      </section>

      <section className="px-5 mb-6">
        <h2 className="font-semibold mb-3">Method — what &amp; why (6 steps)</h2>
        <div className="space-y-3">
          {STEPS.map((s) => (
            <div key={s.n} className="glass rounded-xl p-4">
              <p className="text-xs text-cyan-400 font-semibold">Step {s.n}</p>
              <p className="font-medium text-sm mt-0.5">{s.title}</p>
              <p className="text-xs text-[var(--muted)] mt-2">
                <span className="text-emerald-400">Why:</span> {s.why}
              </p>
              <p className="text-xs text-[var(--muted)] mt-1">
                <span className="text-indigo-400">How:</span> {s.how}
              </p>
              <p className="text-xs text-amber-300/90 mt-1">
                <span className="font-medium">Exam:</span> {s.exam}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 mb-6">
        <h2 className="font-semibold mb-3">Run locally (reproducible)</h2>
        <pre className="glass rounded-xl p-4 text-xs overflow-x-auto text-emerald-200/90 leading-relaxed">
{`cd "Digital twin"
python3 -m venv .venv
.venv/bin/pip install -r project/requirements.txt
.venv/bin/python project/run_project.py --ppt`}
        </pre>
        <p className="text-xs text-[var(--muted)] mt-2">
          Regenerates all 5 figures + PowerPoint in public/project/
        </p>
      </section>

      <section className="px-5 mb-6">
        <h2 className="font-semibold mb-3">Generated figures (in your PPT)</h2>
        <div className="space-y-4">
          {FIGURES.map((f) => (
            <div key={f.file} className="glass rounded-xl overflow-hidden">
              <p className="text-xs font-medium text-indigo-300 px-3 py-2">{f.title}</p>
              <Image
                src={`/project/outputs/${f.file}`}
                alt={f.title}
                width={800}
                height={500}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 mb-6 glass rounded-2xl p-5">
        <h2 className="font-semibold mb-2">HEEDS ↔ Antenna mapping</h2>
        <table className="w-full text-xs">
          <thead>
            <tr className="text-left text-[var(--muted)]">
              <th className="pb-2 pr-2">HEEDS (Spring Ex 4)</th>
              <th className="pb-2">Your project</th>
            </tr>
          </thead>
          <tbody className="text-[var(--text)]/90">
            <tr><td className="py-1 pr-2">Solver exe</td><td>Python rul_days()</td></tr>
            <tr><td className="py-1 pr-2">coil_diam, wire_diam</td><td>wind_ms, temp_C</td></tr>
            <tr><td className="py-1 pr-2">deflection, stress</td><td>rul_days, rul_years</td></tr>
            <tr><td className="py-1 pr-2">DOE study 2³=8</td><td>Full factorial 4×10=40</td></tr>
            <tr><td className="py-1 pr-2">POST 3D surface</td><td>Response surface plot</td></tr>
          </tbody>
        </table>
      </section>

      <BottomNav />
    </main>
  );
}
