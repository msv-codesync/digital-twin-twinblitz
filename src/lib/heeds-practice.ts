/** Bullet-only HEEDS hands-on + antenna project mirror — no fluff */

export const HEEDS_TABS =
  "File → Process → Parameters → Tagging → Study → Run → POST";

export const HEEDS_EIGHT_STEPS = [
  "New project → save .heeds in your folder",
  "Process → exe + command (solver.in solver.out)",
  "Parameters → Variables (min / baseline / max)",
  "Parameters → Responses (what to read from output)",
  "Tagging → link each variable/response to file cells",
  "Study → pick type (DOE / Optimization / Robustness…)",
  "Run → execute all design points",
  "POST → plots, Pareto, response surface, export",
];

export type HeedsExample = {
  n: number;
  name: string;
  folder: string;
  study: string;
  goal: string;
  vars: string;
  responses: string;
  handsOn: string[];
  afterRun: string[];
  check: string[];
  defend: string;
};

export const HEEDS_EXAMPLES: HeedsExample[] = [
  {
    n: 1,
    name: "Simple Function",
    folder: "Examples/Function/",
    study: "Parameter Optimization",
    goal: "Learn Process + Tagging + Run on smallest exe",
    vars: "x1, x2 (continuous)",
    responses: "f1, f2",
    handsOn: [
      "File → Open Examples/Function/FunctionEx.heeds (or copy to your folder)",
      "Process → Analysis_1 → function.exe · cmd: function.in function.out",
      "Parameters → add Variables x1, x2 · Responses f1, f2",
      "Tagging → tag x1,x2 in function.in · f1,f2 in function.out",
      "Study → Parameter Optimization · set objective minimize f1",
      "Run → wait for convergence",
    ],
    afterRun: [
      "POST → scatter / history · find best design",
      "Log → confirm f1 changed between runs (tagging works)",
    ],
    check: [
      "Can name all 6 tabs without looking",
      "Tagged values change each run",
      "Best design beats baseline",
    ],
    defend: "Example 1 taught me Process → Parameters → Tagging before any real solver.",
  },
  {
    n: 2,
    name: "Cantilever Beam",
    folder: "Examples/Beam/",
    study: "Parameter Optimization",
    goal: "Structural exe + constraints + discrete variable option",
    vars: "width, height, length",
    responses: "mass, stress, deflection",
    handsOn: [
      "Open Beam example · link beam.exe",
      "Parameters → mass minimize · stress ≤ allow · deflection ≤ limit",
      "Note discrete variable set (allowed values only)",
      "Tag beam.in / beam.out",
      "Study → Optimization → Run",
    ],
    afterRun: [
      "POST → parallel plot (all designs vs constraints)",
      "Mark feasible vs infeasible points",
    ],
    check: [
      "Written objective + 2 constraints",
      "Know discrete vs continuous variable",
    ],
    defend: "Beam = minimize weight with stress/deflection limits — same logic as design constraints in my envelope.",
  },
  {
    n: 3,
    name: "3-Bar Truss",
    folder: "Examples/Truss/",
    study: "Parameter Optimization",
    goal: "Multi-response structural + POST animation",
    vars: "bar areas / lengths (per guide)",
    responses: "mass, stress, displacement",
    handsOn: [
      "Open Truss example · link truss solver",
      "Process → Parameters → Tagging (same 8-step flow)",
      "Study → Optimization → Run",
      "POST → animate deformed shape (guide Step 8)",
    ],
    afterRun: ["Screenshot animation frame", "Note which bar drives mass"],
    check: ["Same 8 steps as Ex 1–2", "Animation opened in POST"],
    defend: "Truss shows HEEDS drives external FEA/structural codes — not built-in physics.",
  },
  {
    n: 4,
    name: "Coil Spring DoE ★ EXAM",
    folder: "Examples/Spring/",
    study: "DOE — Response Surface",
    goal: "Prof. Exercise 5 — THIS maps to your antenna project",
    vars: "coil_diam (0.25–1.3) · wire_diam (0.05–0.2) · num_coils (2–15)",
    responses: "deflection · shear_stress · frequency · mass",
    handsOn: [
      "Copy Spring folder → your HEEDS_Projects/",
      "Process → spring.exe · spring.in spring.out",
      "Parameters → 3 variables + 4 responses",
      "Tagging → spring.in A4,A6,A8 · spring.out all responses",
      "Run spring.exe once manually → verify spring.out numbers",
      "Study → DOE → Full factorial or screening (guide table)",
      "Run → 40+ design points",
    ],
    afterRun: [
      "POST → Main effects · Interaction · 3D response surface",
      "POST → Pareto of factor impact on deflection/stress",
      "Export design table (like doe_results.csv)",
    ],
    check: [
      "3 variables + 4 responses named from memory",
      "DOE table ≠ Optimization study",
      "Response surface screenshot saved",
    ],
    defend:
      "I ran Spring DoE in HEEDS — same workflow as my Python 40-run factorial on wind × temp for RUL.",
  },
  {
    n: 5,
    name: "Robustness & Reliability",
    folder: "Examples/Robustness/ (per guide)",
    study: "Robustness / Reliability",
    goal: "Inputs as distributions → output scatter",
    vars: "Same as prior example + PDF on inputs",
    responses: "Same responses + probability of failure",
    handsOn: [
      "Open robustness example from guide",
      "Study → Robustness → assign mean/std on variables",
      "Run → Monte Carlo samples",
      "POST → histogram / CDF of response",
    ],
    afterRun: ["Reliability study if guide includes it", "Compare mean vs worst case"],
    check: ["Robustness = input uncertainty", "Reliability = P(fail constraint)"],
    defend: "Wind/temp scatter at a site would use this — my project uses deterministic DoE first (Ex 4).",
  },
  {
    n: 6,
    name: "Multi-Objective + Pareto",
    folder: "Examples/MultiObjective/",
    study: "Multi-Objective Optimization",
    goal: "Conflicting objectives → Pareto front",
    vars: "Per example (mass vs stiffness etc.)",
    responses: "Two+ objectives",
    handsOn: [
      "Open multi-objective example",
      "Study → Multi-Objective → two objectives (e.g. min mass, min deflection)",
      "Run → Pareto set",
      "POST → Pareto front plot · pick knee point",
    ],
    afterRun: ["Mark 3 designs on front: extreme A, extreme B, compromise"],
    check: ["Define Pareto front in one sentence", "Conflicting = improve one, worsen other"],
    defend: "Pareto = trade-off curve — my project uses single objective (max RUL) but sensitivity ranks factors like Pareto ranking.",
  },
  {
    n: 7,
    name: "Population / Curve Fit",
    folder: "Examples/Population/",
    study: "Evaluation / fit",
    goal: "Surrogate from data population — links to lecture least-squares",
    vars: "N/A — fit existing data",
    responses: "Fitted curve error",
    handsOn: [
      "Open population example",
      "Import/run population data",
      "POST → fit quality · residual plot",
    ],
    afterRun: ["Compare to lecture surrogate / ML slide"],
    check: ["Surrogate = fast approximate model of expensive runs"],
    defend: "Could fit 40-run DoE to polynomial surface — I plotted exact physics surface instead.",
  },
  {
    n: 8,
    name: "Taguchi Robust Design",
    folder: "Examples/Taguchi/ or Pipe network",
    study: "Taguchi RPD",
    goal: "Orthogonal array — robust parameter design",
    vars: "Control + noise factors",
    responses: "SN ratio",
    handsOn: [
      "Open Taguchi example in guide",
      "Study → Taguchi / orthogonal array",
      "Run → fewer runs than full factorial",
      "POST → main effects on SN ratio",
    ],
    afterRun: ["Name one noise factor vs control factor"],
    check: ["Taguchi = robust to noise", "Latin hypercube / factorial also in lecture"],
    defend: "Know Taguchi exists in HEEDS — my antenna used full factorial (only 2 factors, 40 cheap runs).",
  },
];

export type ProjectHeedsStep = {
  n: number;
  title: string;
  heeds: string[];
  python: string[];
  say: string;
};

export const PROJECT_HEEDS_STEPS: ProjectHeedsStep[] = [
  {
    n: 1,
    title: "Physics model (solver)",
    heeds: [
      "Process → link solver (spring.exe in Ex 4)",
      "Your twin → Python rul_days() replaces exe",
    ],
    python: [
      "Open project/antenna_digital_twin/model.py",
      "rul_days(v,t) = 175200 / (f_wind × f_temp × 24)",
      "f_wind = (v/5)^1.6 · f_temp = 2^((T-20)/15)",
    ],
    say: "First-principles RUL — wind fatigue × thermal aging, not a black-box fit.",
  },
  {
    n: 2,
    title: "Verification",
    heeds: [
      "Run baseline once → check output sane",
      "Same as manual spring.exe test before DOE",
    ],
    python: [
      ".venv/bin/python project/run_project.py",
      "Check: ~7300 days at 5 m/s, 20°C (~20 yr)",
      "Check: ~41 days at 35 m/s, 65°C",
    ],
    say: "Verification = have I done the maths right? — anchor points before DoE.",
  },
  {
    n: 3,
    title: "DoE (Example 4)",
    heeds: [
      "Parameters → wind_ms, temp_C as Variables",
      "Responses → rul_days, rul_years",
      "Study → DOE → full factorial 4×10",
      "Run → 40 points → POST surface",
    ],
    python: [
      "project/antenna_digital_twin/doe.py → build_design_matrix()",
      "4 wind × 10 temp = 40 rows → doe_results.csv",
      "Same as HEEDS design table export",
    ],
    say: "Identical to Coil Spring DoE — factors, levels, response surface.",
  },
  {
    n: 4,
    title: "Sensitivity / Pareto",
    heeds: [
      "POST → Pareto / main effects on spring responses",
      "Rank which variable moves output most",
    ],
    python: [
      "sensitivity_analysis() in doe.py",
      "ΔRUL wind ~3.5× ΔRUL temp",
      "Figure: 03_pareto_sensitivity.png",
    ],
    say: "Wind dominates — larger ΔRUL when sweeping 5→35 m/s than temp 20→65°C.",
  },
  {
    n: 5,
    title: "Operating envelope",
    heeds: [
      "POST → contour / 3D surface",
      "Read safe region from response plot",
    ],
    python: [
      "visualize.py → contour RUL years",
      "Safe ops: wind ≤ 12 m/s, temp ≤ 30°C → >10 yr RUL",
      "Figure: 04_operating_envelope.png",
    ],
    say: "Actionable limit for operators — stay inside DoE box, no extrapolation to 40 m/s.",
  },
  {
    n: 6,
    title: "Present & defend",
    heeds: [
      "Show SpringEx.heeds OR describe 8-step workflow",
      "POST screenshot proves you ran DOE",
    ],
    python: [
      ".venv/bin/python project/run_project.py --ppt",
      "Demo CSV + 5 PNGs + SRH PowerPoint",
    ],
    say: "I replicated HEEDS MDO workflow in Python when license unavailable — same Process→Study→POST logic.",
  },
];

export const HEEDS_SPRING_ANTENNA_MAP: { heeds: string; antenna: string }[] = [
  { heeds: "spring.exe", antenna: "rul_days(wind, temp)" },
  { heeds: "coil_diam, wire_diam, num_coils", antenna: "wind_ms, temp_C" },
  { heeds: "deflection, stress, mass", antenna: "rul_days, rul_years" },
  { heeds: "DOE factorial in Study", antenna: "4×10 = 40 runs" },
  { heeds: "POST 3D surface", antenna: "02_response_surface_3d.png" },
  { heeds: "POST Pareto", antenna: "03_pareto_sensitivity.png" },
];

export const ORAL_DEFENSE = [
  "HEEDS = automate Process + explore Design Space (DOE/optimization).",
  "Process Automation = Process + Parameters + Tagging.",
  "Tagging = without it every run gives identical output.",
  "DOE = explore · Optimization = search best · different Study types.",
  "My project = Example 4 Spring DoE with Python instead of spring.exe.",
  "Verification ≠ validation · calibration ≠ validation.",
  "TRL 4–5: DoE validated in simulation, not live tower yet.",
];

export const RUN_COMMANDS = {
  heeds: "Open HEEDS → Examples/Spring/ → SpringEx.heeds → Study DOE → Run → POST",
  python: `cd "Digital twin"
.venv/bin/python project/run_project.py --ppt`,
  noLicense: "No HEEDS? Run Python command above — prints HEEDS mapping + same 40-run table.",
};
