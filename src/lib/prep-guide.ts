export type PrepModule = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  minutes: number;
  lectureRef: string;
  exerciseRef?: string;
  remember: string;
  examAnswer: string;
  learn: string;
  practice: string;
  youtube: { id: string; title: string };
  noteImage?: string;
  noteLabel?: string;
  pdfLink?: string;
};

export const PREP_MODULES: PrepModule[] = [
  {
    id: "dt-definition",
    order: 1,
    title: "Digital Twin Definition",
    subtitle: "Quiz Q1 · Lecture slides 10–16 · Your note p.1",
    minutes: 90,
    lectureRef: "Lecture PDF slides 10–16 — 'The digital twin is the digital representation of a physical product throughout its lifecycle'",
    exerciseRef: "Quiz Q1 + Exercise 2 (AIAA paper)",
    remember: "LIFECYCLE + VIRTUAL PRODUCT + does NOT replace testing",
    examAnswer:
      "The digital twin is the digital representation of a physical product throughout its lifecycle — the virtual product. At each lifecycle stage it optimises and de-risks the real product. It does NOT replace experimental testing.",
    learn:
      "Prof. Nasti fails anyone who says 'a 3D copy' or 'a CAD model'. The twin spans the ENTIRE lifecycle: Design & Analysis → Manufacture → Build & Assembly → Experimental Testing → Service. The core is a fully coupled multi-disciplinary, multi-fidelity PARAMETRIC simulation model. Feeding real sensor data creates a unique virtual model per real product (Rolls-Royce Intelligent Engine example).",
    practice:
      "Recite the definition 3× without looking. Read AIAA paper pages 1–5. Draw the 5 lifecycle arrows. Record a 30-second oral answer.",
    youtube: { id: "9CcbYQ5QA70", title: "Rolls-Royce — Pioneering the Intelligent Engine" },
    noteImage: "PHOTO-2026-04-27-12-02-20 7.jpg",
    noteLabel: "Your note p.1 — DT definition, lifecycle, model coupling",
    pdfLink: "/heeds/DigitalTwin_Lectures_Exercises.pdf",
  },
  {
    id: "lifecycle-parametric",
    order: 2,
    title: "Lifecycle & Parametric Geometry",
    subtitle: "Quiz Q2–Q3 · AIAA as-designed / as-built / as-used",
    minutes: 75,
    lectureRef: "Lecture slides 11–15, 24 — parametric geometry enables simulation across lifecycle",
    exerciseRef: "Quiz Q2, Q3",
    remember: "5 stages in order · parametric = change dimensions without rebuilding CAD",
    examAnswer:
      "Lifecycle: (1) Design & Analysis, (2) Manufacture, (3) Build & Assembly, (4) Experimental Testing, (5) Service. Parametric geometry lets you simulate as-designed AND as-manufactured by changing dimensions — essential for a digital twin that tracks the real product.",
    learn:
      "AIAA maps three twin stages: AS-DESIGNED (CAD, materials), AS-BUILT (QC, BOM), AS-USED (live sensors). Parametric model = geometry parameters are variables (tower height, antenna diameter) — same model, different configurations. Without parametric geometry you rebuild CAD for every change → no automated DoE/optimization possible.",
    practice:
      "List 5 stages in ≤10 seconds. Map your antenna project: drone scan = as-built geometry, RUL model = as-used prediction.",
    youtube: { id: "ObGhB9CCHP8", title: "Siemens — Digital Twin Lifecycle" },
    noteImage: "PHOTO-2026-04-27-12-02-20 7.jpg",
    noteLabel: "Your note p.1 — lifecycle + operating envelope",
  },
  {
    id: "accuracy-coupling",
    order: 3,
    title: "Accuracy, Fidelity & Model Coupling",
    subtitle: "Quiz Q4–Q5 · Your notes circle 'Accuracy VS Fidelity'",
    minutes: 90,
    lectureRef: "Lecture slides 22–23, 47–50 — coupling = iterative loop, interdependent models",
    exerciseRef: "Quiz Q4, Q5",
    remember: "FIDELITY = detail level · ACCURACY = closeness to reality · COUPLING = interdependent loop",
    examAnswer:
      "Accuracy = how close predictions are to reality. Fidelity = level of detail/realism (geometry or model). Coupling = solving two or more models together in an iterative loop because one's outputs are others' inputs — they are INTERDEPENDENT and cannot be solved independently.",
    learn:
      "Trade-off: RUN TIME vs ACCURACY — higher fidelity costs more compute. HVAC example from your notes: Occupancy↑ → Heat↑ → Cooling demand↑ → Energy↑. Four coupled models. Your antenna full twin would couple: structural FEA + wind load + thermal + RUL prognostics.",
    practice:
      "Draw HVAC coupling chain from note p.7. Explain fidelity vs accuracy with antenna analytical model vs FEA example.",
    youtube: { id: "HftDI09LVI0", title: "Digital Twin Cities — ASME multi-system coupling" },
    noteImage: "PHOTO-2026-04-27-12-02-19 8.jpg",
    noteLabel: "Your note p.7 — HVAC coupled models chain",
  },
  {
    id: "empirical-physics",
    order: 4,
    title: "Physics-Based vs Empirical Models",
    subtitle: "Quiz Q6 · Exercise 1 Hooke's law data",
    minutes: 90,
    lectureRef: "Lecture slides 41–42 — first principles vs observations from real world",
    exerciseRef: "Exercise 1 — Hooke's law spring data (15 data points)",
    remember: "PHYSICS = first principles · EMPIRICAL = data/observations · BOTH needed in practice",
    examAnswer:
      "Physics-based modelling exploits laws of physics from first principles. Empirical modelling starts from experimental observations and statistical methods. In practice both matter — even physics models need experimental validation. Curve fitting (Exercise 1) is empirical.",
    learn:
      "Exercise 1 data: Force (N) vs Displacement (mm) with ±0.5mm uncertainty. Plot → linear relationship → slope gives spring constant k in N/m (convert mm to m). Hooke's law F = kx. Your RUL model is physics-based (Arrhenius + wind fatigue). ML surrogate would be empirical.",
    practice:
      "Plot the 15 data points on paper. Calculate k ≈ slope of F vs x. Answer: what relationship do you see?",
    youtube: { id: "cHThndE20oI", title: "Heat Transfer Simulation — physics-based modelling example" },
    noteImage: "PHOTO-2026-04-27-12-02-20 8.jpg",
    noteLabel: "Your note p.2 — physics vs empirical, inputs/outputs",
    pdfLink: "/heeds/DigitalTwin_Lectures_Exercises.pdf",
  },
  {
    id: "vv-calibration",
    order: 5,
    title: "Verification vs Validation vs Calibration",
    subtitle: "Quiz Q7–Q8 · THE #1 exam trap",
    minutes: 120,
    lectureRef: "Lecture slides 43–44, 448–461 — ASME PTC 19.1 test uncertainty",
    exerciseRef: "Quiz Q7, Q8",
    remember: "VERIFICATION = maths right? · VALIDATION = right maths? · CALIBRATION = tune parameters",
    examAnswer:
      "Verification: 'Have I done the maths right?' — checks code implementation, aims for zero error. Validation: 'Have I done the right maths?' — checks model vs reality, aims for acceptable delta. Calibration: tuning model parameters to match experimental data (data matching).",
    learn:
      "CFD vs wind tunnel = VALIDATION. FEA code vs analytical beam solution = VERIFICATION. Measurement uncertainty: d = 35.0 (±0.1) → manufacturing tolerance. Model calibration incorporates missed physics found in real data. Exercise 9 (Simcenter) = correlate FEA with test = validation.",
    practice:
      "Write 5 flashcards: V vs V vs calibration. Give one example each from your antenna project.",
    youtube: { id: "9x9LYvErnwk", title: "Model Validation in Simulation" },
    noteImage: "PHOTO-2026-04-27-12-02-20 8.jpg",
    noteLabel: "Your note p.2 — Verification vs Validation definitions",
  },
  {
    id: "curve-least-squares",
    order: 6,
    title: "Geometry Idealisation, Curve Fitting & Least Squares",
    subtitle: "Quiz Q9–Q12 · Extrapolation trap",
    minutes: 90,
    lectureRef: "Lecture slides 46, 480–494 — least squares minimises Σ(yᵢ−f(xᵢ))²",
    exerciseRef: "Quiz Q9–Q12",
    remember: "IDEALISE = simplify geometry · INTERPOLATION = inside data · EXTRAPOLATION = outside (risky)",
    examAnswer:
      "Geometry idealisation: simplified 3D, 2D slice, or 1D vector — all synced with master CAD. Curve fitting: approximate data with a function. Least squares: minimise Σ(yᵢ−f(xᵢ))². Extrapolation: prediction outside known range — higher uncertainty.",
    learn:
      "Idealisation levels from notes: simplified 3D, 2D slice, 1D vector — must stay in sync with master model. Surrogate model = high-fidelity data approximated for speed. Interpolation safe inside measured bounds; extrapolation dangerous for RUL beyond tested wind/temp range.",
    practice:
      "Write least-squares formula. Explain when your antenna RUL model extrapolates (beyond 35 m/s or 65°C).",
    youtube: { id: "_UVHneBUBW0", title: "StatQuest — Least Squares & PCA math foundation" },
    noteImage: "PHOTO-2026-04-27-12-02-18 2.jpg",
    noteLabel: "Your note p.4 — surrogate model + least squares",
  },
  {
    id: "functional-diagrams",
    order: 7,
    title: "P-Diagram, Context Diagram & FFD",
    subtitle: "Exercise 4 · Your motorcycle traction notes",
    minutes: 120,
    lectureRef: "Lecture slides 78–87 — functional modelling ≠ software architecture",
    exerciseRef: "Exercise 4 — create diagrams for your antenna tower product",
    remember: "FFD ≠ software arch · P-diagram: Inputs|Noise|Controls|Ideal|Error",
    examAnswer:
      "Functional modelling captures key functionalities and interactions — abstraction of the real problem, NOT software architecture. P-diagram maps Inputs, Noise factors, Control factors, Ideal response, Error state. Context diagram shows scope/boundaries. FFD shows functional flow with feedback loops.",
    learn:
      "Your motorcycle notes: Section 1.0 Monitor (sliding, lean, steering, brake, suspension, track). Compare user settings. Change outputs (throttle, fueling). Make prediction → feedback loop. P-diagram center: 'Regulate rear wheel traction.' Noise = road, tire wear, temperature. Controls = allowed slip, TC sensitivity.",
    practice:
      "Redraw P-diagram from note p.8 from memory. Create context diagram for 5G antenna tower (sensors, environment, maintenance team).",
    youtube: { id: "8u6dYTuBymA", title: "Engineering Simulation — functional system context" },
    noteImage: "PHOTO-2026-04-27-12-02-20 5.jpg",
    noteLabel: "Your note p.8 — P-diagram rear wheel traction",
  },
  {
    id: "doe-optimization",
    order: 8,
    title: "DoE, Pareto & Design Optimization",
    subtitle: "Your note p.3 · Lecture slides 102–114",
    minutes: 150,
    lectureRef: "Lecture slides 102–114 — full/fractional factorial, screening, Latin hypercube",
    exerciseRef: "Injection molding example in notes: temp, pressure, cooling → weight, deviation",
    remember: "DoE = explore design space · Pareto = rank factor impact · Pareto FRONT = conflicting objectives",
    examAnswer:
      "DoE explores design space by running multiple configurations to understand input sensitivity on outputs. Types: full factorial (all combos), fractional factorial, screening (few runs), Latin hypercube. Pareto chart ranks factor impact. Pareto front = optimal trade-off between conflicting objectives.",
    learn:
      "Injection molding DoE from notes: inputs = temperature, injection pressure, cooling time; outputs = part weight, dimensional deviation, surface quality, cycle time. Logistics optimisation: minimise time + fuel, variables = routes, constraints = visit each customer once. Global vs local minimum — optimization seeks global best.",
    practice:
      "Draw Pareto bar chart for antenna wind vs temp. Write injection molding design matrix on paper.",
    youtube: { id: "_Rgue-7KDww", title: "JMP — Design of Experiments Process" },
    noteImage: "PHOTO-2026-04-27-12-02-19 5.jpg",
    noteLabel: "Your note p.3 — DoE types, Pareto, optimization",
  },
  {
    id: "monte-carlo-uq",
    order: 9,
    title: "Monte Carlo, UQ & Robust Design",
    subtitle: "Your note p.9 · Lecture slides 114–119",
    minutes: 75,
    lectureRef: "Lecture slides 117–119 — uncertainty propagation, RSS combination",
    exerciseRef: "HEEDS Example 5 — Robustness & Reliability",
    remember: "MONTE CARLO = random sampling with probability distributions · ROBUST = low output sensitivity",
    examAnswer:
      "Monte Carlo uses random sampling with probability distributions on inputs to solve complex deterministic problems. Uncertainty quantification characterises input uncertainty and propagates to outputs. Robust design = low sensitivity of outputs to input variation.",
    learn:
      "Stochastic set of inputs = each parameter sampled from its distribution (Gaussian, rectangular). Categorical variable = discrete values. Data matching = model calibration. Line-on-line interference → almost no wear (from your notes). UQ: x₁±δx₁ → effect on output R.",
    practice:
      "Explain Monte Carlo for antenna: wind follows Weibull distribution → 1000 RUL samples → distribution of remaining life.",
    youtube: { id: "PD_0QjEyQJk", title: "Minitab — Statistical Methods & UQ context" },
    noteImage: "PHOTO-2026-04-27-12-02-20 6.jpg",
    noteLabel: "Your note p.9 — Monte Carlo + AI surrogate",
  },
  {
    id: "pca-surrogate",
    order: 10,
    title: "PCA, Surrogate Models & AI in Engineering",
    subtitle: "Your note p.4 — 6 PCA steps · Centrifuge example",
    minutes: 120,
    lectureRef: "Lecture slides 1600–1768 — PCA for feature extraction",
    exerciseRef: "Exercise 10–12 ML (overview)",
    remember: "PCA Step 0: NORMALIZE · diagonal=variance · off-diagonal→0 · UNSUPERVISED",
    examAnswer:
      "PCA is unsupervised linear transformation for dimensionality reduction. Steps: (0) normalize, (1) covariance matrix, (2) eigenvalues/eigenvectors, (3) order λ descending, (4) projection matrix P, (5) transform data. Surrogate = high-fidelity data approximated for fast runs.",
    learn:
      "Centrifuge example: 20 vibration features → PCA1=overall energy, PCA2=imbalance, PCA3=bearing patterns. Wing aerodynamics AI surrogate: inputs=geometry, outputs=lift/drag, replaces expensive CFD. Your RUL analytical model is a medium-fidelity surrogate of full FEA fatigue analysis.",
    practice:
      "List all 6 PCA steps from note p.4. Do toy PCA on 3×2 dataset by hand.",
    youtube: { id: "FgakZw6K1QQ", title: "StatQuest — PCA Step-by-Step" },
    noteImage: "PHOTO-2026-04-27-12-02-18 2.jpg",
    noteLabel: "Your note p.4 — PCA steps 0–5 + covariance matrix",
  },
  {
    id: "heeds-mastery",
    order: 11,
    title: "HEEDS MDO — Full Scratch to Hero",
    subtitle: "Exercise 5 · Getting Started Guide · 8 examples",
    minutes: 1080,
    lectureRef: "Lecture slides 104–108 — JMP, Minitab, Isight, HEEDS tools",
    exerciseRef: "Exercise 5 — Coil Spring DoE (Ex 4) + Multi-objective (Ex 10)",
    remember: "PROCESS → PARAMETERS → TAGGING → STUDY → RUN → POST · Spring DoE = Prof's Exercise 5",
    examAnswer:
      "HEEDS automates multidisciplinary design exploration: baseline design → process automation (link exe + input/output files) → tagging variables → study (DOE/Optimization/Reliability) → run → HEEDS POST. Coil spring: 3 variables, 4 responses, full factorial 2³=8 runs. Map to antenna 40-run factorial.",
    learn:
      "8 Examples: (1) Function optimize, (2) Beam constrained, (3) Truss animate, (4)★Spring DoE, (5) Reliability/Robustness, (6) Multi-objective Pareto, (7) Curve fitting, (8) Taguchi RPD. Spring equations: deflection=80·coil_diam³·num_coils/(wire_diam⁴·G). Study type for DoE = 'DOE — Screening/Response Surface' NOT optimization.",
    practice:
      "Open /heeds tab in app. Complete all 16 HEEDS tasks. Build SpringEx.heeds on campus PC. Present 2-min antenna↔HEEDS mapping.",
    youtube: { id: "HvF_3Rok8RY", title: "HEEDS — Multi-Disciplinary Design Exploration" },
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — HEEDS + iSight + mesh convergence",
    pdfLink: "/heeds/HEEDSGettingStartedGuide.pdf",
  },
  {
    id: "fea-simcenter",
    order: 12,
    title: "FEA & Simcenter 3D (Exercises 7–9)",
    subtitle: "FEM Chapter 31 · Mesh convergence 4 steps",
    minutes: 180,
    lectureRef: "Chapter 31 FEM.pptx — discretization, [k]{u}={F}, assembly, heated rod",
    exerciseRef: "Exercises 7, 8, 9 — thermal PCB, response dynamics, FEA/test correlation",
    remember: "MESH CONVERGENCE: coarse → refine → iterate → check · Exercise 9 = VALIDATION",
    examAnswer:
      "FEM: divide domain into elements, assemble [k]{u}={F}, solve for nodal values. Mesh convergence: (1) coarse mesh, (2) systematic refinement, (3) iterations, (4) check convergence. Exercise 9 correlating FEA with test = model validation.",
    learn:
      "Tools from notes: NX, Ansys, Abaqus, Nastran, LS-Dyna (contact), Simsolid (mesh-free), HEEDS+iSight. Exercise 7: thermal PCB with chip hotspot. Exercise 8: transient response dynamics. Your antenna uses analytical RUL — FEA needed for stress concentrations and validation.",
    practice:
      "List 4 mesh convergence steps. Open Simcenter tutorial link from exercises PDF.",
    youtube: { id: "z_g-ov61DNw", title: "Building Ventilation CFD — FEA/simulation example" },
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — mesh convergence + FEA tools",
  },
  {
    id: "antenna-project",
    order: 13,
    title: "Your Antenna RUL Project — Present to Prof",
    subtitle: "5G/6G tower · Drone pipeline · DoE 40 runs",
    minutes: 180,
    lectureRef: "Exercise 2 AIAA use cases — as-built + as-used predictive maintenance",
    exerciseRef: "Your DigitalTwin_Antenna_RUL.ipynb + presentation",
    remember: "RUL = 175200/(f_wind×f_temp×24) · wind DOMINANT 3.5× · safe: wind≤12, temp≤30",
    examAnswer:
      "Drone photogrammetry delivers as-built geometry. Physics-based RUL model: f_wind=(v/5)^1.6, f_temp=2^((T-20)/15). Full factorial DoE 4×10=40 runs. Wind speed dominant factor. Operating envelope: wind≤12 m/s, temp≤30°C → RUL>10 years. Same workflow as HEEDS SpringEx Example 4.",
    learn:
      "Story: USA telecom client, drone 2D→3D reconstruction, €220K pipeline. Notebook adds predictive physics = true digital twin. Sanity: (5m/s,20°C)=7300 days=20yr; (35m/s,65°C)=41 days. Sensitivity: wind ~3.5× temperature impact.",
    practice:
      "Run full notebook. Memorise formula + 3 sanity numbers. 2-min pitch: Problem→Approach→Results→Value. Download PPT from /project tab.",
    youtube: { id: "9UpMeDO0A04", title: "Digital Twin Predictive Maintenance" },
    pdfLink: "/project/Exam_Presentation_Antenna_RUL.pptx",
  },
  {
    id: "exam-oral",
    order: 14,
    title: "Exam Oral Drill — All 12 Quiz + 12 Exercises",
    subtitle: "10-min presentation + 10-min Q&A",
    minutes: 120,
    lectureRef: "Exam Guidelines PDF — technical depth, creativity, literature review",
    exerciseRef: "All Quiz Q1–12 + Exercises 1–12",
    remember: "Complete sentences only · Prof fails vague answers · breadth + depth",
    examAnswer:
      "Presentation: Problem (telecom maintenance) → Approach (drone+DoE+RUL) → Results (wind dominant, operating envelope) → Value (predictive maintenance). Q&A covers ALL course topics complementary to presentation.",
    learn:
      "Criteria: technical understanding, depth/breadth, creativity, literature (9 refs), presentation skills. 25 trap questions in app Day 3. Practice 60-sec answers for: DT definition, V vs V, HEEDS workflow, coil spring DoE, Pareto front, PCA steps, RUL formula.",
    practice:
      "Record full 15-min mock presentation. Random-order quiz drill on all 12 questions.",
    youtube: { id: "9CcbYQ5QA70", title: "Technical Presentation Style — Rolls-Royce" },
    pdfLink: "/heeds/DigitalTwin_Exam_Guidelines.pdf",
  },
];

export const PREP_TOTAL_MINUTES = PREP_MODULES.reduce((s, m) => s + m.minutes, 0);

export function formatMinutes(m: number): string {
  const h = Math.floor(m / 60);
  const min = m % 60;
  if (h === 0) return `${min}m`;
  if (min === 0) return `${h}h`;
  return `${h}h ${min}m`;
}

export function getPrepModule(id: string): PrepModule | undefined {
  return PREP_MODULES.find((m) => m.id === id);
}
