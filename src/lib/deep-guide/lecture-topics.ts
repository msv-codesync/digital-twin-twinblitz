import type { DeepTopic } from "./types";
import { V } from "./videos";

/** Lecture topics from Prof. Nasti PDF + class notes — beyond Quiz Q1–12 */
export const LECTURE_TOPICS: DeepTopic[] = [
  {
    slug: "lecture-doe-four-types",
    order: 13,
    group: "course",
    title: "Design of Experiments — 4 Types",
    subtitle: "How engineers explore many input combinations systematically",
    source: "Lecture PDF · Note p.3 · Exercise 5",
    pdfRef: "DigitalTwin_Lectures_ProfAdeleNasti.pdf",
    remember: "Full factorial · Fractional · Screening · Latin hypercube",
    analogy:
      "Instead of guessing one recipe at a time, DoE is a planned tasting menu — you try combinations in a structured table so you learn which ingredients matter.",
    plainAnswer:
      "Design of Experiments (DoE) explores the design space: run multiple configurations, record outputs, learn sensitivity.\n\n" +
      "Four types Prof. Nasti teaches:\n" +
      "1. Full factorial — every combination of all factor levels; captures interactions; expensive.\n" +
      "2. Fractional factorial — subset of full factorial; faster, less information.\n" +
      "3. Screening — many parameters, few runs; find which inputs matter most.\n" +
      "4. Latin hypercube — space-filling sample; good for nonlinear behaviour with fewer runs.\n\n" +
      "Design matrix: columns = inputs, last column = output.\n\n" +
      "Injection molding example from lecture: inputs = temperature, pressure, cooling time; outputs = weight, deviation, quality, cycle time.\n\n" +
      "Your antenna project: 4 wind × 10 temp = 40 runs = full factorial.",
    profSays: "DoE is a tool to explore design space and understand how sensitive outputs are to inputs.",
    sayInExam:
      "Name all four types, then give your antenna example: full factorial 4×10 = 40 runs because the physics model is cheap to evaluate.",
    videos: [{ ...V.jmpDoe, duration: "~12 min" }],
    practice: [
      {
        question: "Define DoE in one sentence.",
        answer: "A structured set of simulation or test runs that maps how inputs affect outputs across the design space.",
      },
      {
        question: "Why full factorial for your antenna?",
        answer: "Only two factors (wind, temp), analytical model is fast, and you need the full response surface for the operating envelope.",
      },
      {
        question: "Name the four DoE types.",
        answer: "Full factorial, fractional factorial, screening experiments, Latin hypercube.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-19 5.jpg",
    noteLabel: "Your note p.3 — DoE types",
  },
  {
    slug: "lecture-sensitivity-pareto",
    order: 14,
    group: "course",
    title: "Sensitivity Analysis & Pareto Charts",
    subtitle: "Which input moves the output most?",
    source: "Lecture PDF slide 106 · Antenna project",
    remember: "Sweep one factor · rank impacts · wind ~3.5× temperature on RUL",
    analogy:
      "Turn one knob on a stereo at a time. If volume changes a lot but bass changes a little, volume is the dominant knob. Pareto chart draws the knobs biggest-first.",
    plainAnswer:
      "Sensitivity analysis asks: if I change input A while holding others fixed, how much does the output change?\n\n" +
      "Method: sweep wind across its range at mid-temperature; sweep temperature at mid-wind; compare ΔRUL.\n\n" +
      "Pareto chart ranks factors by impact — tallest bar = dominant driver.\n\n" +
      "Your result: wind dominates temperature by about 3.5× on RUL.\n\n" +
      "Also know from lecture: main effects plots, interaction plots, parallel axes plots in HEEDS POST.",
    profSays: "Understanding sensitivity is crucial to design robust products.",
    sayInExam:
      "State wind as dominant factor with the 3.5× ratio from your DoE — link to Pareto chart in your presentation.",
    videos: [{ ...V.jmpDoe, duration: "~12 min" }],
    practice: [
      {
        question: "What does a Pareto chart show?",
        answer: "Factors ranked by their impact on the output — largest influence first.",
      },
      {
        question: "Dominant factor in your antenna project?",
        answer: "Wind speed — about 3.5× stronger impact on RUL than temperature.",
      },
    ],
  },
  {
    slug: "lecture-optimisation-ocv",
    order: 15,
    group: "course",
    title: "Design Optimisation — Objectives, Constraints, Variables",
    subtitle: "Tell the solver what to improve and what limits to respect",
    source: "Lecture PDF · Exercise 6 MATLAB",
    remember: "Variables = knobs · Objective = goal · Constraints = limits",
    analogy:
      "Buy a laptop: maximise battery life (objective) but price must stay under €1000 and weight under 2 kg (constraints). The optimiser searches variables (CPU, screen size) inside those limits.",
    plainAnswer:
      "Design optimisation searches design variables to improve an objective while satisfying constraints.\n\n" +
      "• Design variables — what the solver may change (coil diameter, wind limit, material thickness).\n" +
      "• Objective — what you maximise or minimise (maximise RUL, minimise mass).\n" +
      "• Constraints — hard limits (stress ≤ allowable, wind ≤ 12 m/s).\n\n" +
      "MATLAB: optimproblem, optimvar, optimconstr, optimexpr.\n" +
      "HEEDS Example 10 = multi-objective optimisation (trade-off curve).\n" +
      "Your antenna: maximise RUL subject to wind ≤ 12 m/s, temp ≤ 30 °C.",
    profSays: "Swapping inputs and outputs — given a target output, ask the model what inputs are required.",
    sayInExam:
      "Give one objective and two constraints from your antenna safe-envelope recommendation.",
    videos: [{ ...V.heeds, duration: "~10 min" }],
    practice: [
      {
        question: "What are the three parts of an optimisation problem?",
        answer: "Design variables, objective function, and constraints.",
      },
      {
        question: "MATLAB functions Prof. lists in Exercise 6?",
        answer: "optimproblem, optimvar, optimconstr, optimexpr.",
      },
    ],
  },
  {
    slug: "lecture-pareto-front",
    order: 16,
    group: "course",
    title: "Pareto Front & Global vs Local Minimum",
    subtitle: "When improving one goal hurts another",
    source: "Lecture PDF · HEEDS Example 10",
    remember: "Pareto front = trade-off curve · Global = best overall · Local = hill you are stuck on",
    analogy:
      "You cannot maximise speed and fuel economy at once. The Pareto front is the set of best compromises — moving along it trades one for the other.",
    plainAnswer:
      "Single-objective: one best answer (if it exists).\n\n" +
      "Multi-objective: improving objective A may worsen B — no single ‘best’ point. The Pareto front is the set of non-dominated solutions.\n\n" +
      "Global minimum: lowest point over the entire design space.\n" +
      "Local minimum: lowest point in a neighbourhood — gradient methods can get trapped.\n\n" +
      "HEEDS Example 10 demonstrates multi-objective optimisation and Pareto front visualization.",
    profSays: "Pareto front shows trade-offs when multiple objectives conflict.",
    sayInExam: "Contrast DoE (explore) with optimisation (search for best) — Example 5 is DoE, Example 10 is optimisation.",
    videos: [{ ...V.heeds, duration: "~10 min" }],
    practice: [
      {
        question: "What is a Pareto front?",
        answer: "The set of designs where you cannot improve one objective without worsening another.",
      },
      {
        question: "Global vs local minimum?",
        answer: "Global = best over entire space; local = best in a small region only.",
      },
    ],
  },
  {
    slug: "lecture-monte-carlo",
    order: 17,
    group: "course",
    title: "Monte Carlo Simulation",
    subtitle: "Run the model many times with random inputs",
    source: "Lecture PDF · Note p.9",
    remember: "Random samples from input distributions → distribution of outputs",
    analogy:
      "Roll weather dice 1000 times (wind, temperature), run RUL each time, and see the spread of outcomes — not just one forecast.",
    plainAnswer:
      "Monte Carlo assigns probability distributions to uncertain inputs, samples them randomly many times, runs the model each time, and builds a distribution of outputs.\n\n" +
      "Used for risk and robustness — how often does RUL drop below 1 year?\n\n" +
      "Links to Swiss cheese model: multiple uncertainty layers stack.\n\n" +
      "HEEDS can run Monte Carlo studies after DoE calibration.",
    profSays: "Monte Carlo quantifies output uncertainty when inputs are uncertain.",
    sayInExam: "One sentence: sample inputs randomly, run model N times, analyse output distribution.",
    videos: [{ ...V.minitab, duration: "~14 min" }],
    practice: [
      {
        question: "What is Monte Carlo used for?",
        answer: "Propagating input uncertainty through a model to get output uncertainty and risk estimates.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-20 6.jpg",
    noteLabel: "Your note p.9 — Monte Carlo",
  },
  {
    slug: "lecture-uncertainty-uq",
    order: 18,
    group: "course",
    title: "Uncertainty Quantification (UQ)",
    subtitle: "Measurement error and model uncertainty",
    source: "Lecture PDF · Exercise 1 ±0.5 mm · ASME PTC 19.1",
    remember: "Test uncertainty ± · Manufacturing tolerance d = 35.0 ± 0.1 mm",
    analogy:
      "Exercise 1 spring: every displacement has ±0.5 mm measurement error. UQ asks how that error affects your spring constant k.",
    plainAnswer:
      "Uncertainty quantification tracks how unknowns in inputs affect outputs.\n\n" +
      "Sources: measurement error (Exercise 1 ±0.5 mm), manufacturing tolerances, material scatter, boundary condition guesswork.\n\n" +
      "ASME PTC 19.1 governs test uncertainty in experimental validation.\n\n" +
      "Connects to accuracy (Quiz Q4) and validation (Quiz Q8).",
    profSays: "Report uncertainty with test data — d = 35.0 (±0.1) mm reflects manufacturing tolerance.",
    sayInExam: "Mention error bars on Exercise 1 plot and ASME PTC 19.1 when discussing test correlation.",
    videos: [{ ...V.simValidation, duration: "~12 min" }],
    practice: [
      {
        question: "What is measurement uncertainty in Exercise 1?",
        answer: "±0.5 mm on displacement for every data point.",
      },
    ],
  },
  {
    slug: "lecture-pugh-matrix",
    order: 19,
    group: "course",
    title: "Pugh Matrix — Concept Selection",
    subtitle: "Compare design concepts against a baseline",
    source: "Lecture PDF · BHW Functional Modelling",
    remember: "+ same as baseline · S better · − worse · Pick highest score",
    analogy:
      "Compare three phone plans against your current plan: mark each feature better (+), same (S), or worse (−). Highest total wins.",
    plainAnswer:
      "Pugh matrix ranks design concepts against a datum (baseline).\n\n" +
      "For each criterion, score + (better), S (same), or − (worse) than baseline.\n\n" +
      "Used early in design to down-select concepts before expensive simulation.\n\n" +
      "Your project Pugh: drone + RUL twin vs climber-only vs geometry-only — twin wins on predictive maintenance.",
    profSays: "Pugh matrix supports structured concept selection before detailed modelling.",
    sayInExam: "Name three concepts and two criteria for your antenna maintenance approach.",
    videos: [{ ...V.isight, duration: "~8 min" }],
    practice: [
      {
        question: "What do +, S, and − mean in a Pugh matrix?",
        answer: "+ = better than baseline, S = same as baseline, − = worse than baseline.",
      },
    ],
  },
  {
    slug: "lecture-fmea-swiss",
    order: 20,
    group: "course",
    title: "FMEA & Swiss Cheese Model",
    subtitle: "Failure modes and layered defences",
    source: "Lecture PDF · Note p.5 & p.9",
    remember: "FMEA: mode · severity · occurrence · detection · RPN",
    analogy:
      "Swiss cheese: each safety layer has holes; an accident needs all holes to line up at once. Multiple defences reduce risk.",
    plainAnswer:
      "FMEA (Failure Mode and Effects Analysis) table columns:\n" +
      "• Failure mode — what can go wrong\n" +
      "• Severity — how bad\n" +
      "• Occurrence — how likely\n" +
      "• Detection — can we catch it in time\n" +
      "• RPN = Severity × Occurrence × Detection\n\n" +
      "Swiss cheese model: independent defence layers; failure requires aligned holes in every slice.\n\n" +
      "Antenna example: failure mode = wind fatigue crack; digital twin monitoring = extra cheese layer.",
    profSays: "FMEA structures risk thinking; Swiss cheese explains layered safety.",
    sayInExam: "One FMEA row for antenna: wind fatigue, high severity, twin reduces detection delay.",
    videos: [{ ...V.predictive, duration: "~11 min" }],
    practice: [
      {
        question: "What is RPN in FMEA?",
        answer: "Risk Priority Number = Severity × Occurrence × Detection.",
      },
      {
        question: "Swiss cheese model in one sentence?",
        answer: "Multiple independent safety layers; catastrophic failure only when holes in every layer align.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — FMEA",
  },
  {
    slug: "lecture-process-automation",
    order: 21,
    group: "course",
    title: "Process Automation & HEEDS Workflow",
    subtitle: "Linking solvers — different from physics coupling",
    source: "Lecture PDF · Note p.5 · HEEDS Guide · Exercise 5",
    remember: "Process → Parameters → Tagging → Study → Run → POST",
    analogy:
      "Process automation is a factory conveyor: CAD updates, mesh runs, solver runs, results file saved — automatically. Coupling is when physics in step 3 depends on step 2’s temperature.",
    plainAnswer:
      "Process automation chains software tools without manual clicks between runs.\n\n" +
      "HEEDS six steps:\n" +
      "1. Process — link executable (spring.exe or Python)\n" +
      "2. Parameters — define inputs/outputs\n" +
      "3. Tagging — mark inputs and responses\n" +
      "4. Study — choose DOE or optimisation\n" +
      "5. Run — execute all cases\n" +
      "6. POST — Pareto, surfaces, main effects\n\n" +
      "This is workflow automation — not the same as physics coupling (Quiz Q5).",
    profSays: "Walk through coil spring DoE: Process → Parameters → Tagging → Study → Run → POST.",
    sayInExam: "Recite the six HEEDS steps, then map coil spring to antenna factorial.",
    videos: [{ ...V.heeds, duration: "~10 min" }],
    practice: [
      {
        question: "List the six HEEDS workflow steps.",
        answer: "Process → Parameters → Tagging → Study → Run → POST.",
      },
      {
        question: "Process automation vs model coupling?",
        answer: "Automation = software pipeline between tools. Coupling = interdependent physics requiring iterative solution.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — HEEDS workflow",
  },
  {
    slug: "lecture-software-agile",
    order: 22,
    group: "course",
    title: "Software Development Cycle & Agile",
    subtitle: "Where verification happens in the dev process",
    source: "Lecture PDF · Note p.5",
    remember: "Planning → Analysis → Design → Implementation → Testing → Maintenance",
    analogy:
      "Building an app in sprints (Agile) vs one big release in two years (Waterfall). Verification happens when you test whether the code works correctly.",
    plainAnswer:
      "Six software development stages:\n" +
      "1. Planning\n2. Analysis\n3. Design\n4. Implementation\n5. Testing & Integration\n6. Maintenance\n\n" +
      "Verification happens in Testing — compare code output to analytical benchmarks.\n\n" +
      "Agile: iterative delivery of working pieces. Waterfall: sequential phases.\n\n" +
      "Product lifecycle (Quiz Q2) is different — do not mix the two lists.",
    profSays: "Verification is in the Testing phase of software development.",
    sayInExam:
      "List six software stages, then say verification occurs in Testing. Separately list five product lifecycle stages.",
    videos: [{ ...V.isight, duration: "~8 min" }],
    practice: [
      {
        question: "In which software stage does verification happen?",
        answer: "Testing and Integration.",
      },
      {
        question: "List the six software development stages.",
        answer: "Planning, Analysis, Design, Implementation, Testing & Integration, Maintenance.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — dev cycle",
  },
  {
    slug: "lecture-trl",
    order: 23,
    group: "course",
    title: "Technology Readiness Levels (TRL)",
    subtitle: "How mature is the technology?",
    source: "Lecture PDF · NASA TRL scale",
    remember: "TRL 1 basic research · TRL 9 flight-proven · Antenna twin ≈ TRL 4–5",
    analogy:
      "TRL is like a video game level: TRL 1 is idea on paper; TRL 9 is working in the real world every day.",
    plainAnswer:
      "TRL 1–9 scale from basic principles observed to proven in operational environment.\n\n" +
      "Your antenna RUL twin: physics model + DoE validated in relevant environment ≈ TRL 4–5 (component validated in lab/relevant environment, not fleet-deployed).\n\n" +
      "Digital twin maturity grows as you add live sensor feed and field validation.",
    profSays: "State TRL honestly — prototype model with verification checks is not TRL 9.",
    sayInExam: "Claim TRL 4–5 for your project and explain what is still needed for higher TRL (field correlation).",
    videos: [{ ...V.dtOverview, duration: "~10 min" }],
    practice: [
      {
        question: "What TRL is your antenna project?",
        answer: "TRL 4–5: validated physics and DoE in relevant conditions; not yet deployed on live fleet with continuous sensor feed.",
      },
    ],
  },
  {
    slug: "lecture-surrogate",
    order: 24,
    group: "course",
    title: "Surrogate Models",
    subtitle: "Fast approximation of expensive simulation",
    source: "Lecture PDF · Note p.2 & p.9",
    remember: "Train on DoE runs · fast prediction · must validate on held-out data",
    analogy:
      "A student who watched 40 CFD runs and learned to guess lift/drag for new shapes — fast, but you still check a few answers against the real solver.",
    plainAnswer:
      "Surrogate model = mathematical approximation of an expensive simulation built from a sample of runs (often DoE).\n\n" +
      "Methods: response surface, kriging, neural network.\n\n" +
      "Your 40-run DoE could train a surrogate for RUL — but you lose some interpretability vs physics formula.\n\n" +
      "Always validate surrogate on runs not used for training.",
    profSays: "Surrogate replaces expensive solver calls during optimisation — validate accuracy first.",
    sayInExam: "Surrogate = empirical model trained on simulation database; needs validation like any empirical model.",
    videos: [{ ...V.statquestLS, duration: "~14 min" }],
    practice: [
      {
        question: "What is a surrogate model?",
        answer: "A fast approximation of a high-fidelity model, usually built from DoE or simulation samples.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-20 8.jpg",
    noteLabel: "Your note p.2 — surrogate",
  },
  {
    slug: "lecture-mesh-convergence",
    order: 25,
    group: "course",
    title: "Mesh Convergence",
    subtitle: "Refine mesh until the answer stops changing",
    source: "Lecture PDF · Note p.5 · Exercise 7",
    remember: "Coarse → refine → iterate → check result stability",
    analogy:
      "Zooming a map until street names stop changing — you have enough resolution for navigation.",
    plainAnswer:
      "FEM splits geometry into elements (mesh). Too coarse → wrong answer. Too fine → wasted time.\n\n" +
      "Mesh convergence process:\n" +
      "1. Start coarse\n2. Refine mesh\n3. Re-run solver\n4. Compare key result (max stress, max temp)\n5. Repeat until change is acceptably small\n\n" +
      "This is verification (mesh independence study), not validation against physical test.",
    profSays: "Mesh convergence is standard before trusting FEM results.",
    sayInExam: "Describe four steps: coarse mesh, refine, compare, repeat until stable.",
    videos: [{ ...V.femOverview, duration: "~12 min" }],
    practice: [
      {
        question: "Why refine the mesh?",
        answer: "To check that results no longer change significantly — mesh-independent solution.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — mesh",
  },
  {
    slug: "lecture-pca",
    order: 26,
    group: "course",
    title: "PCA — Six Steps",
    subtitle: "Unsupervised dimension reduction",
    source: "Lecture PDF · Note p.4 · Exercise 12",
    remember: "Step 0 = NORMALIZE · unsupervised · no labels",
    analogy:
      "Many vibration sensors give 20 numbers; PCA finds the 2–3 patterns that actually vary — like finding ‘brightness’ and ‘contrast’ in photos.",
    plainAnswer:
      "Principal Component Analysis reduces many correlated features to fewer uncorrelated components.\n\n" +
      "Six steps from your notes:\n" +
      "0. Normalize the data\n" +
      "1. Build covariance matrix\n" +
      "2. Compute eigenvalues and eigenvectors\n" +
      "3. Sort eigenvalues descending\n" +
      "4. Build projection matrix P\n" +
      "5. Transform data to lower dimensions\n\n" +
      "Centrifuge example: 20 features → PCA1 energy, PCA2 imbalance, PCA3 bearing.\n\n" +
      "Unsupervised — no output labels (contrast with Exercise 10 supervised ML).",
    profSays: "Step 0 is always normalize. PCA is unsupervised.",
    sayInExam: "Recite six steps starting with normalize; give centrifuge or pump feature example.",
    videos: [{ ...V.statquestPCA, duration: "~15 min" }],
    practice: [
      {
        question: "What is PCA Step 0?",
        answer: "Normalize the data.",
      },
      {
        question: "Supervised or unsupervised?",
        answer: "Unsupervised — no labelled outputs required.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-18 2.jpg",
    noteLabel: "Your note p.4 — PCA",
  },
  {
    slug: "lecture-fem-basics",
    order: 27,
    group: "course",
    title: "FEM Basics — Elements, Nodes, Discretization",
    subtitle: "Split continuous structure into solvable pieces",
    source: "Lecture PDF Ch.31 · Exercises 7–9",
    remember: "Discretize · assemble [K]{u}={F} · boundary conditions",
    analogy:
      "A bridge drawn as connected triangles on graph paper — each corner is a node, each triangle is an element, equations link them.",
    plainAnswer:
      "Finite Element Method (FEM):\n" +
      "• Discretize continuous domain into elements connected at nodes\n" +
      "• Shape functions interpolate behaviour inside each element\n" +
      "• Assemble global stiffness matrix [K]{u} = {F}\n" +
      "• Apply boundary conditions (fixed supports, loads, heat flux)\n" +
      "• Solve for unknown displacements or temperatures\n\n" +
      "Tools from lecture: NX, Ansys, Abaqus, Nastran, Simcenter 3D.",
    profSays: "FEM is numerical discretization of governing PDEs.",
    sayInExam: "Sketch nodes + elements; mention BCs and assembly step.",
    videos: [{ ...V.femOverview, duration: "~12 min" }],
    practice: [
      {
        question: "What does FEM discretization mean?",
        answer: "Breaking a continuous structure into finite elements and nodes so a computer can solve the equations.",
      },
    ],
  },
  {
    slug: "lecture-heated-rod",
    order: 28,
    group: "course",
    title: "1D Heated Rod — Steady-State Thermal FEM",
    subtitle: "Geometry idealisation example from Ch.31",
    source: "Lecture PDF Ch.31 · Note idealisation",
    remember: "1D rod · fixed T ends · heat equation · steady-state",
    analogy:
      "A metal rod with one end in hot water and one in cold — temperature varies only along the length. 1D idealisation drops width and height detail.",
    plainAnswer:
      "Heated rod problem: simplify 3D heat transfer to 1D along the rod axis.\n\n" +
      "Steps: mesh 1D elements → apply temperatures or heat flux at ends → solve steady-state conduction → plot T(x).\n\n" +
      "Shows geometry idealisation (Quiz Q9) and steady-state vs transient (Exercise 8).\n\n" +
      "Exercise 7 PCB is 3D thermal with hotspot — more complex geometry.",
    profSays: "1D rod teaches FEM workflow before 3D PCB thermal.",
    sayInExam: "Steady-state = snapshot; rod is 1D idealisation of 3D heat problem.",
    videos: [{ ...V.heatFEM, duration: "~11 min" }],
    practice: [
      {
        question: "Why use 1D rod idealisation?",
        answer: "When temperature varies mainly along one axis — reduces cost while keeping key physics.",
      },
    ],
  },
  {
    slug: "lecture-functional-modelling",
    order: 29,
    group: "course",
    title: "P-Diagram, Context Diagram & Functional Flow",
    subtitle: "Functional modelling — not software architecture",
    source: "Lecture PDF · Exercise 4 · Notes p.6–8",
    remember: "P-diagram: Inputs · Noise · Controls · Ideal · Error · FFD with feedback",
    analogy:
      "P-diagram is a control map for your product. Context diagram shows who talks to whom. Functional flow is the step-by-step loop including feedback.",
    plainAnswer:
      "P-DIAGRAM zones:\n" +
      "• Centre — ideal function (e.g. maintain traction / predict RUL)\n" +
      "• Inputs — what you control or measure\n" +
      "• Noise — uncontrolled variation (road, weather, material scatter)\n" +
      "• Controls — tunable parameters\n" +
      "• Error — gap between ideal and actual\n\n" +
      "CONTEXT DIAGRAM — system boundary and external actors (tower, drone, cloud, crew).\n\n" +
      "FUNCTIONAL FLOW — Monitor → Compare → Adjust → Predict → Feedback to Monitor.\n\n" +
      "Motorcycle traction (note p.8) and HVAC (note p.7) are course examples. Your antenna Exercise 4 uses same structure.",
    profSays: "Functional modelling abstracts the real problem — not software architecture.",
    sayInExam: "Draw FFD with feedback arrow; label all five P-diagram zones for antenna.",
    videos: [{ ...V.siemensDT, duration: "~9 min" }],
    practice: [
      {
        question: "FFD steps for antenna digital twin?",
        answer: "Monitor conditions → Compare to model → Adjust parameters → Predict RUL → Feedback to monitoring.",
      },
    ],
    noteImage: "PHOTO-2026-04-27-12-02-20 5.jpg",
    noteLabel: "Your note p.8 — P-diagram",
  },
  {
    slug: "lecture-prognostics-rul",
    order: 30,
    group: "course",
    title: "Prognostics & Remaining Useful Life (RUL)",
    subtitle: "Predicting when maintenance is needed",
    source: "Lecture PDF · Exercise 11 · Your project",
    remember: "Sensors or physics → health index → RUL forecast",
    analogy:
      "Car oil-life indicator estimates kilometres until service. RUL answers: how many days until this antenna needs repair?",
    plainAnswer:
      "Prognostics = predicting future health and remaining useful life.\n\n" +
      "Data-driven path (Exercise 11 bearing): vibration sensors → health index → degradation model → RUL.\n\n" +
      "Physics path (your project): wind + temperature → fatigue/aging laws → RUL in days.\n\n" +
      "Both answer: when to schedule maintenance before failure.\n\n" +
      "Links digital twin as-used stage (Service) to business value.",
    profSays: "Prognostics is the operational heart of a predictive maintenance twin.",
    sayInExam: "Compare bearing ML approach vs your physics RUL — same question, different model type.",
    videos: [{ ...V.predictive, duration: "~12 min" }],
    practice: [
      {
        question: "What is RUL?",
        answer: "Remaining Useful Life — estimated time until maintenance or failure threshold.",
      },
      {
        question: "Your project inputs and output?",
        answer: "Inputs: wind speed, temperature. Output: RUL in days/years.",
      },
    ],
  },
];
