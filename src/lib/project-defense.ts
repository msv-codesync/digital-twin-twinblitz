/**
 * Antenna RUL project — oral defense guide (Prof. Dr. Adele Nasti terminology).
 * Every term: WHAT · WHY (course) · WHY (my project) · IF SHE ASKS
 */

export type DefenseTerm = {
  term: string;
  what: string;
  whyCourse: string;
  whyProject: string;
  ifSheAsks: string;
};

export type FigureDefense = {
  file: string;
  title: string;
  whatIsIt: string;
  axes: string[];
  drawExplain: string[];
  result: string[];
  understand: string;
  whyThisPlot: string;
  numbers: string[];
  sheAsks: { q: string; a: string }[];
};

export const PROJECT_FORMULA = {
  main: "RUL (days) = 175 200 / (f_wind × f_temp × 24)",
  fWind: "f_wind = (v / 5)^1.6  — wind fatigue accelerator, baseline 1.0 at 5 m/s",
  fTemp: "f_temp = 2^((T − 20) / 15)  — thermal aging (Arrhenius-style), doubles every 15 °C above 20 °C",
  nominal: "175 200 h ≈ 20 years continuous — nominal antenna life at benign conditions (5 m/s, 20 °C)",
};

export const SANITY_NUMBERS = [
  "5 m/s, 20 °C → 7 300 days ≈ 20.0 years (verification anchor — benign baseline)",
  "15 m/s, 35 °C → ~629 days ≈ 1.7 years (moderate stress)",
  "35 m/s, 65 °C → ~41 days ≈ 0.11 years (worst corner of DoE — harsh site)",
];

export const DOE_SUMMARY = {
  design: "Full factorial: 4 wind levels × 10 temp levels = 40 runs",
  windLevels: "5, 15, 25, 35 m/s",
  tempLevels: "20, 25, 30, … 65 °C (every 5 °C)",
  sensitivity: "ΔRUL wind (5→35 m/s at 42.5 °C) ≈ 2 466 days",
  sensitivityTemp: "ΔRUL temp (20→65 °C at 20 m/s) ≈ 695 days",
  ratio: "Wind dominance ≈ 3.5× (2466 / 695)",
  range: "RUL spans ~0.11 years (worst) to 20 years (best) across design space",
};

export const CORE_TERMS: DefenseTerm[] = [
  {
    term: "Digital twin",
    what: "Digital representation of a physical product throughout its lifecycle — the virtual product. Coupled parametric model updated with real data. Does NOT replace experimental testing.",
    whyCourse: "Quiz Q1 + AIAA paper — lifecycle spans design → manufacture → service.",
    whyProject: "Virtual 5G tower antenna updated with drone as-built geometry + operating wind/temp → predicts RUL for maintenance.",
    ifSheAsks: "Why not just CAD? → CAD is static geometry; twin adds physics + operating data + prognostics over service life.",
  },
  {
    term: "RUL (Remaining Useful Life)",
    what: "How much operational life remains before failure or required maintenance — prognostics output.",
    whyCourse: "Exercise 11 bearing prognosis — same question: when will it fail?",
    whyProject: "Operators need RUL to schedule drone/climber inspections instead of fixed calendar intervals.",
    ifSheAsks: "Why RUL not MTBF? → RUL is condition-based for THIS tower under THIS wind/temp; MTBF is population average.",
  },
  {
    term: "Physics-based model",
    what: "Model from first principles / known scaling laws — not fitted blindly to data (Quiz Q6 contrast: empirical).",
    whyCourse: "Prof separates physics-based vs empirical; interpretability matters in engineering.",
    whyProject: "Wind fatigue ∝ v^1.6 and thermal aging ∝ 2^((T−20)/15) — explainable to regulators, not black-box ML.",
    ifSheAsks: "Why not ML? → Could surrogate 40-run DoE with ML (Ex 10) but lose physics story; need field data to validate ML.",
  },
  {
    term: "Empirical model",
    what: "Built from observations + statistics (curve fitting, regression) — Quiz Q6.",
    whyCourse: "Exercise 1 Hooke's law plot IS empirical curve fitting → spring constant k.",
    whyProject: "My model is physics-based; the 40-run DoE table could feed an empirical surrogate surface if we lacked physics.",
    ifSheAsks: "Is your RUL empirical? → No — exponents come from fatigue/Arrhenius laws; DoE explores the physics model, not fit coefficients from scratch.",
  },
  {
    term: "DoE (Design of Experiments)",
    what: "Planned set of runs across input factors to explore design space and learn sensitivity — Prof: 'tool to explore design space'.",
    whyCourse: "Four types: full factorial, fractional, screening, Latin hypercube. HEEDS Example 4/5 coil spring.",
    whyProject: "40 runs map wind × temp → RUL — same workflow as HEEDS Spring DoE, factors replaced.",
    ifSheAsks: "Why full factorial not fractional? → Only 2 factors, 40 runs cheap for analytical model; captures interaction for surface plot.",
  },
  {
    term: "Verification",
    what: "'Have I done the maths right?' — implementation/code correct (Quiz Q8).",
    whyCourse: "Different from validation. FEA vs analytical = verification.",
    whyProject: "Sanity checks: 20 yr at (5,20), monotonic RUL decreases as wind/temp increase, hand calc matches Python.",
    ifSheAsks: "Did you verify? → Yes — anchor points printed in run_project.py before DoE.",
  },
  {
    term: "Validation",
    what: "'Have I done the right maths?' — model vs reality (Quiz Q7/Q8). Exercise 9 = FEA vs test.",
    whyCourse: "Calibration ≠ validation. Need independent experimental or field data.",
    whyProject: "Not yet done at TRL 6 — would compare predicted RUL to actual tower failure/maintenance records or strain gauges.",
    ifSheAsks: "Where is validation? → Honest: TRL 4–5 simulation validated; field validation is future work with sensor data.",
  },
  {
    term: "Calibration (data matching)",
    what: "Tune internal parameters to match experimental data — NOT validation (Quiz Q7).",
    whyCourse: "Prof notes p.3 — data matching adjusts exponents/coefficients.",
    whyProject: "Could calibrate wind exponent 1.6 or Arrhenius slope from field failures — then validate on held-out towers.",
    ifSheAsks: "Did you calibrate? → Used literature-style exponents; full calibration needs real failure data.",
  },
  {
    term: "Sensitivity analysis",
    what: "Study how output changes when one input varies — Prof: 'crucial for robust products'.",
    whyCourse: "Lecture slide 106 — main effects, interaction plots, Pareto ranking.",
    whyProject: "One-factor-at-a-time: sweep wind at mid-temp, sweep temp at mid-wind → compare ΔRUL.",
    ifSheAsks: "Method? → OFAT at midpoint of other factor; rank factors by |Δoutput|.",
  },
  {
    term: "Pareto chart (sensitivity)",
    what: "Bar chart ranking factors by impact on output — tallest bar = dominant driver. NOT the same as Pareto front.",
    whyCourse: "DoE block — rank inputs by influence on response.",
    whyProject: "Figure 03 — wind bar ~2 466 days RUL drop vs temp ~695 days → wind dominates ~3.5×.",
    ifSheAsks: "What is Pareto chart? → Ranks factor importance; my chart shows wind >> temperature for RUL.",
  },
  {
    term: "Pareto front",
    what: "Set of non-dominated designs when objectives conflict — improve one, worsen another (HEEDS Ex 10).",
    whyCourse: "Multi-objective optimisation — trade-off curve.",
    whyProject: "I have single objective (max RUL) so no Pareto front — but sensitivity Pareto ranks factors, not trade-offs.",
    ifSheAsks: "Show Pareto front? → Clarify: sensitivity Pareto (factor ranking) vs multi-obj Pareto front (design trade-offs). I show the first.",
  },
  {
    term: "Response surface",
    what: "Graph of output over input factor space — from DoE or continuous model; HEEDS POST 3D plot.",
    whyCourse: "DoE goal — understand how response changes across design space.",
    whyProject: "Figure 02 — RUL surface over wind × temp; valley = harsh conditions, plateau = benign.",
    ifSheAsks: "Why 3D? → Two factors + one response = natural response surface; same as HEEDS POST after Spring DoE.",
  },
  {
    term: "Operating envelope",
    what: "Allowed operating region (wind, temp) meeting performance/safety targets — read from contours.",
    whyCourse: "Quiz Q12 extrapolation — stay inside explored bounds when recommending limits.",
    whyProject: "Figure 04 — contour lines in years; green = long RUL; star marks recommended ops point inside DoE box.",
    ifSheAsks: "Why wind ≤12, temp ≤30? → Conservative operator limits inside DoE (5–35, 20–65); read 10-yr contour — need lower wind AND temp for >10 yr (e.g. ~6 m/s at 30 °C).",
  },
  {
    term: "Extrapolation vs interpolation",
    what: "Interpolation = predict inside data range; extrapolation = outside — higher risk (Quiz Q12).",
    whyCourse: "Spring data to 1.5 N — predicting 5 N is extrapolation.",
    whyProject: "DoE ends at 35 m/s, 65 °C — predicting 40 m/s is extrapolation; envelope recommendation stays inside box.",
    ifSheAsks: "Are you extrapolating? → No — all plots and recommendations stay within 5–35 m/s and 20–65 °C.",
  },
  {
    term: "CFD (Computational Fluid Dynamics)",
    what: "Numerical simulation of fluid flow — wind loads, pressure, heat transfer on structures.",
    whyCourse: "High-fidelity tool in integrated design; slower than analytical.",
    whyProject: "I did NOT run CFD — system-level analytical RUL for DoE speed. CFD would refine local wind pressure on antenna faces.",
    ifSheAsks: "Why not CFD? → DoE needs 40+ runs — CFD each run is too slow; analytical fatigue scaling for system RUL; CFD later for validation/local hot spots.",
  },
  {
    term: "FEA / FEM (Finite Element Analysis / Method)",
    what: "Discretise structure into elements, solve stress/thermal/deformation — Exercises 7–9 Simcenter.",
    whyCourse: "Mesh convergence 4 steps; validation = compare FEA to physical test (Ex 9).",
    whyProject: "Analytical RUL idealises tower — FEA needed for stress concentrations, bolt details, nonlinear material.",
    ifSheAsks: "Why not FEA? → System prognostic twin first; FEA is higher fidelity for local validation (verification vs test).",
  },
  {
    term: "Coupling",
    what: "Interdependent physics solved in iterative loop — output of one model feeds another (Quiz Q5).",
    whyCourse: "HVAC example: thermal ↔ airflow ↔ structural.",
    whyProject: "Full tower twin would couple CFD wind → structural FEA → thermal → RUL; my model merges wind+temp into closed-form RUL (uncoupled approximation).",
    ifSheAsks: "Is your model coupled? → Loosely — wind and temp effects multiply in one formula; not iterative multi-physics loop yet.",
  },
  {
    term: "HEEDS",
    what: "Siemens MDO tool — Process → Parameters → Tagging → Study → Run → POST (Exercise 5).",
    whyCourse: "Example 4/5 coil spring DoE — Prof expects workflow description.",
    whyProject: "Python replicates Spring DoE: factors=wind,temp; response=RUL; 40 runs; POST plots.",
    ifSheAsks: "Did you use HEEDS? → Workflow yes (same as Ex 4); solver is Python rul_days() when HEEDS license unavailable.",
  },
  {
    term: "Drone / photogrammetry pipeline",
    what: "As-built geometry capture — digital twin 'as-manufactured' vs CAD 'as-designed'.",
    whyCourse: "Lifecycle + parametric model — real geometry feeds simulation.",
    whyProject: "€220K industrial context — drone scans tower; twin updates geometry + loads for RUL.",
    ifSheAsks: "Where does drone data enter? → Geometry + inspection inputs; RUL model uses environmental factors; full integration = TRL 6+.",
  },
  {
    term: "TRL (Technology Readiness Level)",
    what: "NASA 1–9 maturity scale — TRL 4–5 = validated in lab/relevant simulation; TRL 6+ = prototype in field.",
    whyCourse: "State honestly with evidence.",
    whyProject: "TRL 4–5: physics + 40-run DoE verified in simulation; not live fleet deployment with sensors.",
    ifSheAsks: "What TRL? → 4–5 now; path to 6 = real tower + sensor feed + validation.",
  },
  {
    term: "Accuracy vs fidelity",
    what: "Accuracy = closeness to reality; fidelity = level of detail (Quiz Q4).",
    whyCourse: "Coarse mesh = low fidelity, can still be accurate for global trend.",
    whyProject: "Low-fidelity analytical model, sufficient accuracy for system-level maintenance scheduling in DoE.",
    ifSheAsks: "Is your model high fidelity? → No — high accuracy for trend/ranking; local stress needs high-fidelity FEA.",
  },
];

export const FIGURE_DEFENSE: FigureDefense[] = [
  {
    file: "01_rul_curves.png",
    title: "RUL vs Temperature (one curve per wind level)",
    whatIsIt: "2D line plot — how remaining life changes with temperature at four fixed wind speeds.",
    axes: [
      "X-axis: Average operating temperature (°C) — 20 to 65",
      "Y-axis: Remaining Useful Life (days) — log-scale feel; drops sharply at high temp",
      "Four lines: Wind = 5, 15, 25, 35 m/s (legend)",
    ],
    drawExplain: [
      "Draw horizontal axis = temperature, vertical = RUL days",
      "Sketch 4 downward curves — top curve = gentle wind (5 m/s), bottom = hurricane (35 m/s)",
      "Mark point (20 °C, 7300 days) on blue line — verification anchor",
      "Show all lines slope down left→right — higher temp always shortens life",
    ],
    result: [
      "Higher wind → entire curve shifts down — less RUL at every temperature",
      "Higher temp → move right along a curve → RUL falls (thermal aging)",
      "35 m/s line near bottom at 65 °C → ~41 days — worst case in DoE",
      "5 m/s line at 20 °C → ~7300 days (~20 yr) — best case",
    ],
    understand: "Wind and temperature both degrade antenna life; wind sets which 'floor' you start from, temperature slides you along that curve.",
    whyThisPlot: "Before DoE matrix — intuitive proof that model behaves physically (monotonic, no bugs). Prof verification mindset.",
    numbers: ["5 m/s, 20 °C → 7300 d", "35 m/s, 65 °C → 41 d", "15 m/s, 35 °C → 629 d"],
    sheAsks: [
      { q: "Why days not years?", a: "Model runs in hours/day internally; days clearer for short RUL; convert ÷365 for years." },
      { q: "Why four wind lines?", a: "One factor fixed per curve — isolate temperature effect at each wind level (main effects thinking)." },
      { q: "Is this DoE?", a: "Not the full factorial table — this is verification visualization before 40-run matrix." },
    ],
  },
  {
    file: "02_response_surface_3d.png",
    title: "3D DoE Response Surface",
    whatIsIt: "3D surface plot — RUL over entire wind × temperature design space (continuous mesh from physics model).",
    axes: [
      "X: Wind speed (m/s) 5–35",
      "Y: Temperature (°C) 20–65",
      "Z (height/color): RUL (days) — high plateau = long life, low corner = short life",
    ],
    drawExplain: [
      "Draw 3D axes or sketch as 'hill' sloping down toward corner (high wind, high temp)",
      "Label corner (35, 65) = lowest point ~41 days",
      "Label corner (5, 20) = highest ~7300 days",
      "Say: same as HEEDS POST after Spring DoE — response vs two factors",
    ],
    result: [
      "Surface monotonic — no weird peaks → model consistent",
      "Steepest drop along wind axis → visually supports wind dominance before Pareto",
      "DoE 40 points lie ON this surface — factorial samples the hill",
    ],
    understand: "The design space is a 'landscape' of RUL; operators must stay on the green high plateau, avoid red low corner.",
    whyThisPlot: "DoE purpose (Prof) — see how response changes across factor space; HEEDS POST standard output.",
    numbers: ["40 DoE runs sample this surface", "Worst corner RUL ≈ 41 d", "Best corner ≈ 7300 d"],
    sheAsks: [
      { q: "What is response surface?", a: "Output (RUL) plotted over input factors — from DoE or dense grid." },
      { q: "Why not just table?", a: "Surface shows trends/interaction visually; table is the raw DoE data (heatmap)." },
      { q: "Interaction?", a: "Wind and temp multiply in formula — combined harshness worse than either alone; surface captures that." },
    ],
  },
  {
    file: "03_pareto_sensitivity.png",
    title: "Sensitivity / Pareto — Wind vs Temperature",
    whatIsIt: "Bar chart (Pareto style) — compares how much RUL drops when each factor is swept across its full range.",
    axes: [
      "X: Two factors — Wind (5→35 m/s), Temperature (20→65 °C)",
      "Y: RUL reduction (days) — how many days of life you LOSE when factor goes from best to worst",
      "Taller bar = more important factor",
    ],
    drawExplain: [
      "Draw two bars side by side",
      "Wind bar ~2466 days tall — label 'dominant'",
      "Temp bar ~695 days — label '~3.5× smaller'",
      "Write: OFAT — other factor held at midpoint (wind 20 m/s, temp 42.5 °C)",
    ],
    result: [
      "Wind sweep causes ~2466 days RUL loss",
      "Temperature sweep causes ~695 days loss",
      "Ratio ≈ 3.5× — wind dominates for maintenance prioritisation",
      "Counterintuitive: engineers think electronics/temp matters most — structure/wind fatigue wins",
    ],
    understand: "If you can only monitor one variable, monitor wind exposure — it moves RUL more.",
    whyThisPlot: "Prof sensitivity + Pareto lecture — rank factors before optimisation; justifies wind sensors / exposure maps.",
    numbers: ["ΔRUL_wind ≈ 2466 d", "ΔRUL_temp ≈ 695 d", "Ratio 3.55×"],
    sheAsks: [
      { q: "What is Pareto chart?", a: "Ranks factors by impact — tallest bar is priority." },
      { q: "Pareto front?", a: "Different — front is multi-objective trade-off; this chart is factor ranking." },
      { q: "Why OFAT not full interaction?", a: "Standard screening step; full interaction in DoE heatmap/surface; OFAT gives clear ranking for oral exam." },
    ],
  },
  {
    file: "04_operating_envelope.png",
    title: "Operating Envelope — RUL Contours (years)",
    whatIsIt: "2D filled contour plot — iso-lines of RUL in years across wind × temp; decision map for operators.",
    axes: [
      "X: Wind speed (m/s)",
      "Y: Temperature (°C)",
      "Color fill + dashed lines: RUL in years (1, 2, 5, 10, 15 yr labels)",
      "Star: recommended operating point (12 m/s, 30 °C)",
    ],
    drawExplain: [
      "Draw rectangle 5–35 m/s, 20–65 °C — DoE bounds",
      "Shade green top-left (low wind, low temp), red bottom-right (harsh)",
      "Draw dashed '10 years' contour — show where it lies",
      "Mark star at (12, 30) — conservative ops target inside box",
    ],
    result: [
      ">10 yr region requires low wind AND moderate temp — read from green zone",
      "At harsh corner (35, 65) → ~0.1 yr — avoid operating there",
      "Envelope turns DoE into actionable rule for network operators",
      "Stay inside rectangle — no extrapolation beyond DoE (Quiz Q12)",
    ],
    understand: "Not just analysis — product recommendation: where can we run this antenna and still hit maintenance targets?",
    whyThisPlot: "Investor/operator value — digital twin must give decisions, not only numbers; contour = standard reliability map.",
    numbers: ["DoE box: 5–35 m/s, 20–65 °C", "10 yr contour location", "Star at 12 m/s, 30 °C"],
    sheAsks: [
      { q: "What is operating envelope?", a: "Region of wind/temp where performance/RUL meets requirement." },
      { q: "Why contour plot?", a: "Two factors — contours show iso-RUL lines; operator sees safe vs unsafe zone." },
      { q: "Extrapolation?", a: "All lines inside measured DoE bounds — we do not predict at 40 m/s." },
    ],
  },
  {
    file: "05_doe_heatmap.png",
    title: "Full Factorial DoE Heatmap (40 runs)",
    whatIsIt: "Heatmap matrix — every DoE run as a cell; rows = temperature, columns = wind; colour = RUL (years).",
    axes: [
      "Columns: 5, 15, 25, 35 m/s",
      "Rows: 20–65 °C (10 levels)",
      "Cell colour: RUL years — green long, red short",
    ],
    drawExplain: [
      "Draw 4×10 grid",
      "Top-left cell brightest green (~20 yr at 5 m/s, 20 °C)",
      "Bottom-right darkest red (~0.11 yr)",
      "Say: this IS the DoE table — 40 experiments from HEEDS Study → Run",
    ],
    result: [
      "Every row gets darker left→right — wind hurts at all temps",
      "Every column gets darker top→bottom — temp hurts at all winds",
      "Raw data behind all other plots — export = doe_results.csv",
    ],
    understand: "DoE is not abstract — 40 concrete simulations; heatmap is what you hand Prof to prove you ran the matrix.",
    whyThisPlot: "HEEDS POST tabular view equivalent; proves full factorial completed; links to Exercise 5 Spring DoE.",
    numbers: ["40 cells = 40 runs", "Min RUL ≈ 0.11 yr", "Max RUL = 20 yr"],
    sheAsks: [
      { q: "Why full factorial?", a: "2 factors, 4×10 levels — manageable; captures all combinations for surface." },
      { q: "Where is CSV?", a: "doe_results.csv — wind_ms, temp_C, rul_days, rul_years columns." },
      { q: "Same as HEEDS?", a: "Same Study → Run table; spring.exe replaced by rul_days()." },
    ],
  },
];

export const METHOD_STEPS_DEFENSE = [
  {
    n: 1,
    title: "Define physics model",
    bullets: [
      "→ Inputs: wind (m/s), temperature (°C)",
      "→ Outputs: RUL days/years",
      "→ f_wind = (v/5)^1.6 captures fatigue damage accumulation",
      "→ f_temp = 2^((T−20)/15) captures Arrhenius thermal aging",
      "→ Why physics? Explainable, fast, suitable for 40-run DoE",
    ],
    defend: "I chose physics-based RUL because Prof Q6 — interpretable first principles, not black-box fit.",
  },
  {
    n: 2,
    title: "Verification",
    bullets: [
      "→ Run 3 anchor points before DoE",
      "→ Check monotonic: more wind/temp → less RUL",
      "→ 'Have I done the maths right?' — Quiz Q8",
      "→ NOT validation — no field data yet",
    ],
    defend: "Verification sanity checks prove code matches formula; validation needs tower field data (future TRL 6).",
  },
  {
    n: 3,
    title: "Full-factorial DoE",
    bullets: [
      "→ 4 wind × 10 temp = 40 runs",
      "→ HEEDS: Process → Parameters → Tagging → Study (DOE) → Run",
      "→ Python: build_design_matrix() → doe_results.csv",
      "→ Why DoE? Explore space, not guess one scenario — Prof DoE definition",
    ],
    defend: "Same workflow as HEEDS Example 4 coil spring — I replaced spring.exe with rul_days().",
  },
  {
    n: 4,
    title: "Sensitivity + Pareto",
    bullets: [
      "→ Sweep wind 5→35 at temp=42.5 °C",
      "→ Sweep temp 20→65 at wind=20 m/s",
      "→ Pareto bar chart ranks factors",
      "→ Result: wind ~3.5× stronger than temp",
    ],
    defend: "Sensitivity tells operators what to monitor — wind dominates, counterintuitive vs 'temp only' intuition.",
  },
  {
    n: 5,
    title: "Operating envelope",
    bullets: [
      "→ Contour RUL in years on wind–temp plane",
      "→ Mark recommended ops inside DoE box",
      "→ Avoid extrapolation outside 5–35 m/s, 20–65 °C",
      "→ Turns twin into maintenance policy",
    ],
    defend: "Digital twin value = decision support — when to inspect, not only pretty plots.",
  },
  {
    n: 6,
    title: "Present & defend",
    bullets: [
      "→ 10–15 min: Problem → Twin → Model → DoE → Plots → Value",
      "→ Live demo: run_project.py or notebook cell",
      "→ Q&A: Quiz Q1–12 theory — 70% of grade",
      "→ Draw any plot from memory on whiteboard if asked",
    ],
    defend: "I can regenerate all figures from script — reproducible, not hand-waved numbers.",
  },
];

export const WHITEBOARD_DRILLS = [
  "Draw Quiz Q1 digital twin lifecycle loop: physical product ↔ virtual model ↔ data feed",
  "Draw P-diagram centre 'Predict antenna RUL' — inputs wind/temp, noise weather, control inspection interval",
  "Draw 2×2: Verification vs Validation with FEA/CFD examples in each quadrant",
  "Draw DoE heatmap 4×4 mini version — label best/worst cell",
  "Draw Pareto two bars — wind tall, temp short — label 3.5×",
  "Draw contour sketch — green top-left, red bottom-right, one iso-10yr line",
  "Write RUL formula from memory — all three lines",
  "Draw HEEDS workflow arrow chain: Process → Parameters → Tagging → Study → Run → POST",
];

export const PITCH_90_SEC = [
  "Problem: 5G tower outages; climber inspections expensive; drone pipeline exists (~€220K context).",
  "Twin: virtual antenna through lifecycle — as-built geometry + as-used wind/temp → RUL.",
  "Model: physics RUL = 175200/(f_wind×f_temp×24) — verified at 20 yr benign point.",
  "DoE: 40-run factorial = HEEDS Spring workflow — explore wind × temp.",
  "Results: wind dominates 3.5×; envelope map for operators; stay inside DoE bounds.",
  "TRL 4–5 today; validation with real sensors = next step.",
  "Value: predictive maintenance — inspect when RUL says, not arbitrary calendar.",
];
