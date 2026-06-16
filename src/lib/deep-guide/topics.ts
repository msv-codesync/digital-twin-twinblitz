import type { DeepTopic } from "./types";

/** Verified via YouTube oEmbed — all return HTTP 200 */
export const V = {
  rollsRoyce: { id: "9CcbYQ5QA70", title: "Rolls-Royce — Intelligent Engine (digital twin in real life)" },
  siemensDT: { id: "ObGhB9CCHP8", title: "Siemens — What is a Digital Twin?" },
  dtOverview: { id: "9UpMeDO0A04", title: "Digital Twin Explained — Industry Overview" },
  asmeCities: { id: "HftDI09LVI0", title: "ASME — Digital Twin Cities (coupled systems)" },
  ansysSim: { id: "8u6dYTuBymA", title: "Ansys — Simulation-Driven Design" },
  cfdVent: { id: "z_g-ov61DNw", title: "Building Ventilation / CFD Simulation" },
  heatFEM: { id: "cHThndE20oI", title: "Heat Transfer Simulation (physics models)" },
  jmpDoe: { id: "_Rgue-7KDww", title: "JMP — Design of Experiments Explained" },
  minitab: { id: "PD_0QjEyQJk", title: "Minitab — Statistical Methods & DoE" },
  isight: { id: "SwgtZp4Jcjs", title: "Isight — Process Automation Overview" },
  heeds: { id: "HvF_3Rok8RY", title: "HEEDS — Multi-Disciplinary Design Exploration" },
  simValidation: { id: "9x9LYvErnwk", title: "Simulation Model Validation" },
  statquestLS: { id: "_UVHneBUBW0", title: "StatQuest — Least Squares & Linear Regression" },
  statquestPCA: { id: "FgakZw6K1QQ", title: "StatQuest — PCA Step by Step" },
  femOverview: { id: "pcLg6C_WlHg", title: "Structural FEM Simulation Overview" },
  transient: { id: "64N2BY747Cw", title: "Transient Simulation Context" },
  simcenter: { id: "V_yaMyLeJ1I", title: "Simcenter / Abaqus Integration" },
  predictive: { id: "HMOI_lkzW08", title: "Predictive Maintenance & Digital Twin" },
} as const;

export const DEEP_TOPICS: DeepTopic[] = [
  // ═══ QUIZ Q1–Q12 ═══════════════════════════════════════════════
  {
    slug: "quiz-q1-digital-twin",
    order: 1,
    group: "quiz",
    title: "Quiz Q1 — What is a Digital Twin?",
    subtitle: "The one sentence Prof. Nasti will fail you if you get wrong",
    source: "Exercises PDF · Quiz Q1 · Note p.1",
    remember: "Virtual copy that lives through the WHOLE life of the product — not just a 3D picture",
    analogy:
      "Think of a flight simulator for a real airplane. It is not a photo of the plane — it is a living computer model that gets updated as the real plane flies, ages, and gets repaired. That is a digital twin.",
    plainAnswer:
      "A digital twin is a computer version of a real product that follows that product from the day it is designed until the day it is retired.\n\n" +
      "It is NOT just a 3D drawing. It is NOT just a spreadsheet. It is a connected simulation that can predict what will happen to the real thing — if it gets hotter, if wind hits it harder, if a part wears out.\n\n" +
      "Companies use it to test ideas cheaply on the computer before spending money on real tests. But — and this is what Prof. Nasti stresses — the computer model never replaces real experiments. It reduces risk; it does not eliminate testing.",
    profSays:
      '"The digital twin is the digital representation of a physical product throughout its lifecycle — the virtual product."',
    examTip: "Say 'throughout its lifecycle' and 'does NOT replace experimental testing' in the same breath.",
    videos: [V.rollsRoyce, V.siemensDT, V.dtOverview],
    noteImage: "PHOTO-2026-04-27-12-02-20 7.jpg",
    noteLabel: "Your note p.1",
    pdfPage: "Quiz Q1",
  },
  {
    slug: "quiz-q2-lifecycle",
    order: 2,
    group: "quiz",
    title: "Quiz Q2 — Product Lifecycle Steps",
    subtitle: "Five stages in order — do not mix with software dev phases",
    source: "Exercises PDF · Quiz Q2",
    remember: "Design → Make → Build → Test → Service (DBBTS mnemonic: Don't Build Before Testing Service)",
    analogy:
      "Like a person's life: plan the house (design), manufacture bricks (manufacture), build it (assembly), inspect it (testing), live in it for years (service). The digital twin follows all five stages.",
    plainAnswer:
      "Prof. Nasti lists exactly five lifecycle stages:\n\n" +
      "1. Design & Analysis — engineers decide shape, materials, how it should work\n" +
      "2. Manufacture — how it will be made in the factory\n" +
      "3. Build & Assembly — putting parts together\n" +
      "4. Experimental Testing — real physical tests in lab or field\n" +
      "5. Service — the product is in use; sensors and maintenance happen here\n\n" +
      "At each stage, the digital twin helps you ask 'what if?' before changing the real product. AIAA also talks about as-designed (on paper), as-built (after factory), and as-used (in operation) — your antenna project uses drone scan = as-built, RUL model = as-used.",
    profSays: "Five stages: Design & Analysis, Manufacture, Build & Assembly, Experimental Testing, Service.",
    examTip: "Never confuse this with software phases (Planning, Analysis, Design...) — that is a different list from your notes p.5.",
    videos: [V.siemensDT, V.asmeCities],
    noteImage: "PHOTO-2026-04-27-12-02-20 7.jpg",
    noteLabel: "Your note p.1 — lifecycle",
  },
  {
    slug: "quiz-q3-parametric",
    order: 3,
    group: "quiz",
    title: "Quiz Q3 — Why Parametric Geometry?",
    subtitle: "Change one number → whole model updates automatically",
    source: "Exercises PDF · Quiz Q3",
    remember: "Parameters = knobs you turn; geometry + simulation update together",
    analogy:
      "Like a recipe where you type 'serves 4' and all ingredient amounts scale automatically. Parametric CAD means change 'bracket thickness = 5 mm' and the 3D model, mesh, and simulation all update without redrawing from scratch.",
    plainAnswer:
      "Parametric geometry means the design is built from changeable numbers (parameters): length, diameter, thickness, bolt spacing.\n\n" +
      "Why does a digital twin need this? Because the real product changes over its life — manufacturing tolerances, wear, repairs. If your computer model is parametric, you change one number and the whole simulation updates. That lets you run DoE (try 40 combinations) and optimisation automatically.\n\n" +
      "Without parametric models you would redraw CAD by hand for every change — too slow for a real digital twin.",
    profSays: "Parametric geometry lets you simulate as-designed AND as-manufactured from one master model.",
    examTip: "Trap answer to avoid: 'parametric just means 3D CAD' — wrong. It means parameters drive geometry AND linked simulation.",
    videos: [V.ansysSim, V.cfdVent],
  },
  {
    slug: "quiz-q4-accuracy-fidelity",
    order: 4,
    group: "quiz",
    title: "Quiz Q4 — Accuracy vs Fidelity",
    subtitle: "Accuracy = how right; Fidelity = how detailed",
    source: "Exercises PDF · Quiz Q4 · Note p.1",
    remember: "Accuracy = bullseye closeness · Fidelity = microscope zoom level",
    analogy:
      "A photo of the moon can be high fidelity (very detailed craters) but low accuracy (wrong colours). A blurry photo might accidentally be more accurate about overall brightness. Simulation is the same: a detailed model (high fidelity) can still give wrong answers (low accuracy) if the physics is wrong.",
    plainAnswer:
      "ACCURACY asks: 'How close is my prediction to what really happens in the real world?'\n\n" +
      "FIDELITY asks: 'How detailed and realistic is my model?' — fine mesh, complex geometry, many physics equations.\n\n" +
      "Trade-off: higher fidelity usually means longer computer time. You do not always need the fanciest model — you need the right level for the decision you are making.\n\n" +
      "When you see d = 35.0 (±0.1) mm in exercises, that is real-world uncertainty — the part might be slightly bigger or smaller. The twin must account for that.",
    profSays: "Accuracy = closeness to reality. Fidelity = level of detail. They are not the same.",
    examTip: "If she asks 'is a fine mesh more accurate?' — answer: 'Not necessarily — finer mesh is higher fidelity; accuracy depends on whether the physics and boundary conditions match reality.'",
    videos: [V.ansysSim, V.heatFEM],
    noteImage: "PHOTO-2026-04-27-12-02-20 7.jpg",
    noteLabel: "Your note p.1 — Accuracy VS Fidelity",
  },
  {
    slug: "quiz-q5-coupling",
    order: 5,
    group: "quiz",
    title: "Quiz Q5 — Model Coupling",
    subtitle: "When one system's output becomes another's input — in a loop",
    source: "Exercises PDF · Quiz Q5 · Note p.7",
    remember: "Coupling = round trip · Automation = passing files between tools (different thing!)",
    analogy:
      "Thermostat at home: more people in the room → more heat → AC works harder → electricity bill goes up. You cannot calculate the bill without knowing occupancy, and occupancy affects heat. The models are tied in a loop.",
    plainAnswer:
      "Coupling means two or more physics models must be solved together because they affect each other.\n\n" +
      "Example from your notes (HVAC): more occupants → more heat → more cooling needed → more energy used. Four models, one chain.\n\n" +
      "Prof. Nasti's exam trap: coupling is NOT the same as 'process automation' (linking software tools with scripts). Coupling is physics — the temperature really depends on airflow. Automation is IT workflow.\n\n" +
      "For your antenna twin: structural stress, wind load, temperature, and RUL prediction would ideally be coupled.",
    profSays: '"Solving two or more models together in an iterative loop — interdependent, cannot be solved independently."',
    examTip: "Draw four boxes with arrows in a circle for HVAC. Say the word 'interdependent'.",
    videos: [V.asmeCities, V.rollsRoyce],
    noteImage: "PHOTO-2026-04-27-12-02-19 8.jpg",
    noteLabel: "Your note p.7 — HVAC coupling chain",
  },
  {
    slug: "quiz-q6-empirical-physics",
    order: 6,
    group: "quiz",
    title: "Quiz Q6 — Physics vs Empirical Models",
    subtitle: "Laws of nature vs learning from measured data",
    source: "Exercises PDF · Quiz Q6 · Note p.2",
    remember: "Physics = WHY from equations · Empirical = WHAT the data shows",
    analogy:
      "Physics-based: you calculate when ice melts using thermodynamics. Empirical: you notice ice always melts near 0°C after measuring 100 times and you fit a curve. Both are useful. Your RUL formula is physics-based; curve-fitting spring data is empirical.",
    plainAnswer:
      "Physics-based models start from known laws — Newton, Hooke, heat transfer, fatigue equations. You trust the equation structure and calibrate a few numbers.\n\n" +
      "Empirical models start from data — you measure, plot points, fit a curve or train ML. You may not know the deep physics, but you capture the pattern.\n\n" +
      "Prof. Nasti: neither is 'better' in all cases. Even physics models need real tests to validate. Empirical models fail badly if you use them outside the range where you collected data (extrapolation).",
    profSays: "Physics exploits first principles; empirical starts from observations and statistics. In practice both matter.",
    examTip: "Exercise 1 Hooke's law: F=kx is physics; fitting a line through 15 measured points is empirical application of least squares.",
    videos: [V.heatFEM, V.statquestLS],
    noteImage: "PHOTO-2026-04-27-12-02-20 8.jpg",
    noteLabel: "Your note p.2",
  },
  {
    slug: "quiz-q7-validation-calibration",
    order: 7,
    group: "quiz",
    title: "Quiz Q7 — Validation vs Calibration",
    subtitle: "Tuning knobs vs checking if the model matches reality",
    source: "Exercises PDF · Quiz Q7 · Note p.2",
    remember: "Calibration = adjust knobs to match data · Validation = does it still predict NEW reality?",
    analogy:
      "Calibration: adjusting your bathroom scale until it reads correctly when you stand on it. Validation: asking a friend to stand on it too — does it work for someone else, on a different day? If you only tuned for yourself, you calibrated. If you check against independent tests, you validate.",
    plainAnswer:
      "MODEL CALIBRATION (data matching in your notes): you change internal settings in the model so outputs match known test data. Example: tune the wind exponent 1.6 in your RUL formula until it matches a few tower failure records.\n\n" +
      "MODEL VALIDATION: you check whether the model predicts correctly against reality you did NOT use for tuning — different test, field data, higher-fidelity simulation.\n\n" +
      "Critical: calibration is NOT validation. You can calibrate first, then validate on separate data. Fitting a curve through spring points is calibration — proving the spring works at new forces is validation.",
    profSays: "Validation: 'Have I done the right maths?' Calibration: tune parameters to match experimental data.",
    examTip: "She will ask this in oral exam. Answer in two complete sentences, one per term.",
    videos: [V.simValidation],
    noteImage: "PHOTO-2026-04-27-12-02-20 8.jpg",
    noteLabel: "Your note p.2 — V vs V definitions",
  },
  {
    slug: "quiz-q8-verification-validation",
    order: 8,
    group: "quiz",
    title: "Quiz Q8 — Verification vs Validation",
    subtitle: "The #1 exam trap — maths right vs right maths",
    source: "Exercises PDF · Quiz Q8",
    remember: "VERIFICATION = maths right? · VALIDATION = right maths?",
    analogy:
      "Verification: checking your calculator adds 2+2 correctly. Validation: checking your household budget formula actually predicts your real bank balance at month end.",
    plainAnswer:
      "VERIFICATION: 'Have I done the maths right?' — Is the code correct? Does the FEA program match a known analytical solution? Goal: zero error in implementation.\n\n" +
      "VALIDATION: 'Have I done the right maths?' — Does the model represent the real world? Compare CFD to wind tunnel, FEA to strain gauges. Goal: acceptable difference from reality.\n\n" +
      "Examples to memorise:\n• FEA vs analytical beam = verification\n• Simulation vs wind tunnel = validation\n• Exercise 9 (FEA vs test) = validation",
    profSays: "Verification checks implementation; validation checks agreement with physical reality.",
    examTip: "Say both questions verbatim: 'Have I done the maths right?' and 'Have I done the right maths?'",
    videos: [V.simValidation, V.femOverview],
  },
  {
    slug: "quiz-q9-idealisation",
    order: 9,
    group: "quiz",
    title: "Quiz Q9 — Geometry Idealisation",
    subtitle: "Simplify the shape, keep the important physics",
    source: "Exercises PDF · Quiz Q9",
    remember: "Idealise = simplify wisely · 3D → 2D slice → 1D rod when safe",
    analogy:
      "Drawing a map of a city: you do not draw every window. You keep roads and rivers because those matter for navigation. Idealisation removes detail that does not change the answer you need.",
    plainAnswer:
      "Geometry idealisation means simplifying a complex CAD shape before simulation while keeping the physics that matter.\n\n" +
      "Levels: full 3D solid → 2D cross-section slice → 1D line/rod. The heated rod in FEM Chapter 31 is a 1D idealisation of a 3D heat problem.\n\n" +
      "It must stay linked to the master parametric model — not a disconnected sketch.\n\n" +
      "Wrong idealisation wastes time (too detailed) or gives wrong answers (too simple for stress concentrations).",
    profSays: "Idealisation is engineering judgement — not 'bad modelling'.",
    examTip: "Exercise 7 PCB: you might simplify the board but keep chip detail for the hotspot.",
    videos: [V.ansysSim, V.heatFEM],
  },
  {
    slug: "quiz-q10-curve-fitting",
    order: 10,
    group: "quiz",
    title: "Quiz Q10 — Curve Fitting",
    subtitle: "Drawing the best line or curve through measured dots",
    source: "Exercises PDF · Quiz Q10 · Exercise 1",
    remember: "Fit ≠ validate · Fit on Monday's data · Validate on Tuesday's test",
    analogy:
      "You plot your weight each morning for two weeks and draw a smooth trend line. That line is curve fitting. It helps you predict — but if you suddenly change diet, the old line may be wrong (extrapolation).",
    plainAnswer:
      "Curve fitting means finding a mathematical function (line, polynomial, exponential) that passes as close as possible to measured data points.\n\n" +
      "Used for: finding spring constant k in Exercise 1, calibrating material models, building surrogate models.\n\n" +
      "Prof trap: completing a fit is NOT validation. You still must test whether the curve works on new data.",
    profSays: "Curve fitting generates an empirical model close to experimental observations.",
    examTip: "Connect to Hooke's law lab: plot Force vs Displacement, fit line, slope = k.",
    videos: [V.statquestLS],
    noteImage: "PHOTO-2026-04-27-12-02-18 2.jpg",
    noteLabel: "Your note p.4 — least squares",
  },
  {
    slug: "quiz-q11-least-squares",
    order: 11,
    group: "quiz",
    title: "Quiz Q11 — Least Squares Method",
    subtitle: "Minimise the total squared error — why square?",
    source: "Exercises PDF · Quiz Q11",
    remember: "Minimise Σ(yᵢ − f(xᵢ))² — square kills negative errors and punishes big misses",
    analogy:
      "If you miss a dart board by 2 cm left or 2 cm right, both are 2 cm mistakes. Squaring makes +2 and -2 both count as 4 — no cancellation cheat. Big misses get punished harder than small ones.",
    plainAnswer:
      "Least squares picks model parameters (like slope k in F=kx) by minimising the sum of squared differences between measured y and model prediction f(x).\n\n" +
      "Formula: minimise Σ(yᵢ − f(xᵢ))²\n\n" +
      "For Exercise 1: convert displacement from mm to metres, fit F = kx, k comes out in N/m.\n\n" +
      "The line usually does NOT pass through every point — 15 measurements have noise (±0.5 mm). Least squares finds the best compromise.",
    profSays: "Minimise sum of squared residuals between data and model.",
    examTip: "Write the formula on paper from memory before the exam.",
    videos: [V.statquestLS],
    noteImage: "PHOTO-2026-04-27-12-02-18 2.jpg",
    noteLabel: "Your note p.4",
  },
  {
    slug: "quiz-q12-extrapolation",
    order: 12,
    group: "quiz",
    title: "Quiz Q12 — Extrapolation",
    subtitle: "Guessing outside where you measured — dangerous",
    source: "Exercises PDF · Quiz Q12",
    remember: "Inside data = interpolation (safer) · Outside data = extrapolation (risky)",
    analogy:
      "You measured plant growth for 4 weeks and draw a line. Predicting week 5 is interpolation (inside your range). Predicting year 10 is extrapolation — the plant might stop growing or die. Your model does not know.",
    plainAnswer:
      "Interpolation: predicting inside the range where you have data — generally safer.\n\n" +
      "Extrapolation: predicting outside that range — uncertainty shoots up. The physics might change (spring goes plastic, antenna fails differently in hurricane).\n\n" +
      "Your antenna DoE runs from 5–35 m/s wind and 20–65°C. Recommending ops at wind ≤12 and temp ≤30 stays inside safe learned region. Predicting at 40 m/s is extrapolation.",
    profSays: "Extrapolation = prediction outside measured/calibrated range — higher uncertainty.",
    examTip: "Link to operating envelope slide in your presentation.",
    videos: [V.simValidation, V.predictive],
  },

  // ═══ EXERCISES 1–12 ════════════════════════════════════════════
  {
    slug: "exercise-1-hooke",
    order: 13,
    group: "exercise",
    title: "Exercise 1 — Hooke's Law Spring Lab",
    subtitle: "Plot force vs stretch → find spring constant k",
    source: "Exercises PDF · Exercise 1",
    remember: "15 points · ±0.5 mm error · slope of F vs x = k (convert mm→m)",
    analogy:
      "A spring is like a rubber band: pull harder, it stretches more. Hooke's law says the relationship is a straight line if you do not stretch too far. The stiffness k is the slope.",
    plainAnswer:
      "What you do:\n1. Plot Force (N) on y-axis vs Displacement (mm) on x-axis — 15 data points from 0.1 N to 1.5 N\n2. Add error bars ±0.5 mm on displacement (measurement uncertainty)\n3. Fit a straight line using least squares\n4. Slope = spring constant k — convert mm to metres for SI units (N/m)\n\n" +
      "Physics-based: Hooke's law F = kx predicts linear behaviour.\nEmpirical: you fit the line to real noisy data.\n\n" +
      "Prof may ask your k value orally — have your notebook or calculation ready.",
    profSays: "Demonstrate physics via experiment; understand trends; fit curve to data.",
    examTip: "Beyond 1.5 N prediction is extrapolation — spring may not stay linear.",
    videos: [V.statquestLS],
    pdfPage: "Exercise 1",
  },
  {
    slug: "exercise-2-aiaa",
    order: 14,
    group: "exercise",
    title: "Exercise 2 — AIAA Digital Twin Paper",
    subtitle: "Read the industry definition paper · Answer 3 questions",
    source: "Exercises PDF · Exercise 2 · AIAA Dec 2020",
    remember: "Q1 align with Prof definition · Q2 company value · Q3 five product examples",
    analogy:
      "AIAA is like an industry agreement on what 'digital twin' officially means — so engineers worldwide speak the same language.",
    plainAnswer:
      "Read AIAA 'Digital Twin: Definition & Value' (Dec 2020). Answer:\n\n" +
      "(1) What is a digital twin in YOUR view? → Use Prof's lifecycle wording, not '3D copy'.\n\n" +
      "(2) Valuable company use case? → Predictive maintenance: drone inspects tower, RUL model predicts when to fix it, fewer climber visits and outages. Your €220K industrial context fits here.\n\n" +
      "(3) Products with digital twins? → Aero engines, smart buildings, motorcycles, centrifuges, injection molding, 5G antenna towers.\n\n" +
      "Map as-designed / as-built / as-used to your antenna project.",
    profSays: "Understand main ideas — language is technical but you need concepts, not every word memorised.",
    examTip: "Have three short paragraphs written before exam day.",
    videos: [V.dtOverview, V.siemensDT],
    pdfPage: "Exercise 2",
  },
  {
    slug: "exercise-4-functional",
    order: 15,
    group: "exercise",
    title: "Exercise 4 — P-Diagram, Context & FFD",
    subtitle: "Draw three diagrams for your antenna tower product",
    source: "Exercises PDF · Exercise 4 · Note p.8",
    remember: "P-diagram: Inputs|Noise|Controls|Ideal|Error · FFD ≠ software diagram",
    analogy:
      "P-diagram is like a control panel map: what you can adjust (controls), what messes things up (noise), what you want (ideal response), and what goes wrong (error). Context diagram is who talks to whom — tower, drone, crew, cloud.",
    plainAnswer:
      "P-DIAGRAM centre: 'Maintain antenna structural integrity & predict RUL'\n• Inputs: wind, temperature, drone geometry, load history\n• Noise: weather variability, material variation, vibration\n• Controls: inspection interval, operating limits, maintenance threshold\n• Ideal: accurate RUL, minimal outages\n• Error: underestimate RUL → late fix; overestimate → unsafe\n\n" +
      "CONTEXT DIAGRAM: tower, drone, cloud analytics, maintenance crew — who sends data to whom.\n\n" +
      "FUNCTIONAL FLOW (FFD): Monitor → Compare → Adjust → Predict → Feedback loop.\n\n" +
      "Compare to motorcycle traction diagram on your note p.6–8.",
    profSays: "Functional modelling is abstraction of the real problem — NOT software architecture.",
    examTip: "Draw all three from memory the night before.",
    videos: [V.siemensDT, V.asmeCities],
    noteImage: "PHOTO-2026-04-27-12-02-20 5.jpg",
    noteLabel: "Your note p.8 — P-diagram traction",
    pdfPage: "Exercise 4",
  },
  {
    slug: "exercise-5-heeds",
    order: 16,
    group: "exercise",
    title: "Exercise 5 — HEEDS Coil Spring DoE",
    subtitle: "Same workflow as your antenna 40-run factorial",
    source: "Exercises PDF · Exercise 5 · HEEDS Guide Ex 4",
    remember: "Process → Parameters → Tagging → Study(DOE) → Run → POST",
    analogy:
      "HEEDS is like a robot lab assistant: you tell it which knobs to turn (coil diameter, wire size), it runs the spring test program 8 times, collects results, and draws charts. Your Python notebook does the same for wind and temperature.",
    plainAnswer:
      "Install HEEDS per campus guidelines. Complete Example 4 (Coil Spring DoE):\n\n" +
      "1. Process Automation — link spring.exe\n2. Parameters — tag coil_diam, wire_diam, num_coils as inputs; deflection, stress, mass as outputs\n3. Study type = DOE (NOT optimisation) — 2³ = 8 runs\n4. POST — Pareto, main effects, 3D response surface\n\n" +
      "Map to antenna: wind_ms & temp_C = inputs; rul_days = output; 4×10 = 40 runs.\n\n" +
      "Example 10 = multi-objective optimisation → Pareto front lecture topic.",
    profSays: "Walk me through coil spring DoE in HEEDS — common oral question.",
    examTip: "If no HEEDS license on exam day, explain workflow from guide PDF and show notebook equivalent.",
    videos: [V.heeds, V.jmpDoe],
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5 — HEEDS + mesh",
    pdfPage: "Exercise 5",
  },
  {
    slug: "exercise-6-matlab",
    order: 17,
    group: "exercise",
    title: "Exercise 6 — MATLAB optimproblem",
    subtitle: "Write optimisation problems in code — objectives & constraints",
    source: "Exercises PDF · Exercise 6",
    remember: "optimproblem · optimvar · optimconstr · objective vs constraint",
    analogy:
      "Optimisation is like telling the computer: 'Find me the cheapest phone plan (objective) but I need at least 10 GB data (constraint).' optimproblem is the form you write that request in MATLAB.",
    plainAnswer:
      "Learn MATLAB Optimisation Toolbox basics:\n• optimproblem — container for the problem\n• optimvar — variables the solver changes\n• optimconstr — limits (mass ≤ 5 kg, stress ≤ allowable)\n• optimexpr — objective (minimise mass, maximise RUL)\n\n" +
      "Antenna example: maximise RUL subject to wind ≤ 12 m/s, temp ≤ 30°C, structural safety.\n\n" +
      "HEEDS does this with a GUI; MATLAB does it with code — same maths.",
    profSays: "Swapping inputs & outputs — give target output, ask model for required inputs.",
    examTip: "Pseudocode on paper is enough if MATLAB not installed.",
    videos: [V.heeds, V.isight],
    pdfPage: "Exercise 6",
  },
  {
    slug: "exercise-7-thermal",
    order: 18,
    group: "exercise",
    title: "Exercise 7 — Simcenter Thermal PCB",
    subtitle: "FEA heat simulation on a circuit board with hot chip",
    source: "Exercises PDF · Exercise 7",
    remember: "CAD → mesh → materials → BCs (chip power) → solve → temperature plot",
    analogy:
      "Like checking which part of a laptop gets hottest when you run a game — the chip dumps heat, board spreads it, fans/cooling matter. Simcenter calculates that temperature map on the computer.",
    plainAnswer:
      "Workflow:\n1. Import PCB CAD into Simcenter 3D\n2. Mesh board + chip\n3. Assign materials (copper, FR4, silicon)\n4. Boundary conditions: power dissipation at chip hotspot; cooling elsewhere\n5. Solve steady-state thermal\n6. Postprocess: temperature field, find max temp location\n\n" +
      "Verification: mesh convergence (refine until answer stops changing).\nValidation: compare hotspot temperature to thermocouple measurement.",
    profSays: "Links geometry idealisation (Quiz Q9) and validation (Quiz Q8).",
    examTip: "Bookmark Simcenter tutorial xid1688538 even if you cannot run software before exam.",
    videos: [V.heatFEM, V.cfdVent],
    pdfPage: "Exercise 7",
  },
  {
    slug: "exercise-8-dynamics",
    order: 19,
    group: "exercise",
    title: "Exercise 8 — Response Dynamics (Transient)",
    subtitle: "Time-dependent vibration / impact — not steady-state",
    source: "Exercises PDF · Exercise 8",
    remember: "Steady = snapshot in time · Transient = movie over time",
    analogy:
      "Steady-state is a photo of a guitar string. Transient is a video of it being plucked — position changes every millisecond. Wind gust hitting antenna = transient event.",
    plainAnswer:
      "Part 1: Set up FEM model — mesh, materials, damping, constraints.\nPart 2: Transient analysis — time stepping, record displacement/acceleration history.\n\n" +
      "Contrast with heated rod (Chapter 31) which is steady-state thermal.\n\n" +
      "Your antenna RUL model is steady/system-level; transient FEA needed for gust loads or vibration peaks.",
    profSays: "Structural ↔ dynamic coupling example for Quiz Q5.",
    examTip: "Outputs: time history graphs, peak response.",
    videos: [V.femOverview, V.transient],
    pdfPage: "Exercise 8",
  },
  {
    slug: "exercise-9-correlation",
    order: 20,
    group: "exercise",
    title: "Exercise 9 — Correlate FEA with Test",
    subtitle: "This exercise IS model validation",
    source: "Exercises PDF · Exercise 9",
    remember: "Simulate → Test → Overlay → Measure gap → Calibrate if needed → Re-validate",
    analogy:
      "You predict a bridge will bend 2 cm under load. You build a scale model in the lab and measure 2.3 cm. Correlation is lining up prediction vs measurement and asking if 0.3 cm is acceptable.",
    plainAnswer:
      "Workflow:\n1. Run structural FEA (modal or static)\n2. Run physical test (shaker, strain gauges, DIC)\n3. Overlay results\n4. Metrics: MAC (modes), strain error %, R²\n5. If gap too large → calibrate Young's modulus, damping, BCs\n6. Re-run validation on separate test case\n\n" +
      "This is Quiz Q8 validation in practice.",
    profSays: "Exercise 9 = 'Have I done the right maths?'",
    examTip: "Mention ASME PTC 19.1 uncertainty on test data.",
    videos: [V.simValidation, V.femOverview],
    pdfPage: "Exercise 9",
  },
  {
    slug: "exercise-10-ml",
    order: 21,
    group: "exercise",
    title: "Exercise 10 — MATLAB ML Onramp",
    subtitle: "Supervised learning basics — data to prediction",
    source: "Exercises PDF · Exercise 10",
    remember: "Import → clean → features → train → evaluate on NEW data",
    analogy:
      "Show a child 100 photos of cats and dogs labelled correctly. They learn patterns. Then show new photos — if they label right, the model works. That is supervised ML.",
    plainAnswer:
      "ML Onramp teaches: load data, preprocess, pick features, train model, evaluate.\n\n" +
      "Connection to course: ML is empirical modelling at scale. Surrogate: train on 40 antenna DoE runs to predict RUL faster — but you lose physics interpretability and MUST validate on held-out runs.\n\n" +
      "Contrast with PCA (Exercise path Day 3) which is UNSUPERVISED — no labels.",
    profSays: "Could ML replace RUL formula? Only with enough data + validation — physics formula is interpretable.",
    examTip: "Know supervised vs unsupervised cold.",
    videos: [V.statquestLS, V.statquestPCA],
    pdfPage: "Exercise 10",
  },
  {
    slug: "exercise-11-prognosis",
    order: 22,
    group: "exercise",
    title: "Exercise 11 — Bearing Prognosis (RUL)",
    subtitle: "Direct parallel to your antenna project",
    source: "Exercises PDF · Exercise 11",
    remember: "Sensors → health index → degradation model → RUL forecast",
    analogy:
      "Like a car dashboard estimating 'oil life 30% remaining' from how you drive — bearing example does that for wind turbine bearings using vibration data.",
    plainAnswer:
      "MATLAB wind turbine bearing example:\n• Collect vibration sensors\n• Build health index (damage indicator)\n• Fit exponential degradation model\n• Forecast when bearing hits failure threshold = RUL\n\n" +
      "Your antenna project: physics-based RUL from wind & temperature instead of vibration ML — same question: 'How many days until maintenance?'\n\n" +
      "Compare: physics = interpretable laws; data-driven = needs lots of failure history.",
    profSays: "Prognostics = predicting remaining useful life — your project title.",
    examTip: "She may ask you to compare approaches — prepare 3 sentences.",
    videos: [V.predictive, V.dtOverview],
    pdfPage: "Exercise 11",
  },
  {
    slug: "exercise-12-drl",
    order: 23,
    group: "exercise",
    title: "Exercise 12 — DRL & Pump Features",
    subtitle: "Reinforcement learning + vibration feature extraction",
    source: "Exercises PDF · Exercise 12",
    remember: "DRL = learn by trial & reward · Features = RMS, kurtosis, band energy",
    analogy:
      "DRL Pong: computer plays, scores points, learns what moves work — like practice without a teacher. Pump features: listen to machine hum — certain frequency patterns mean bearing wear.",
    plainAnswer:
      "DRL (Pong example): agent, environment, reward — learns control policy, not from labelled data.\n\n" +
      "Pump feature analysis: extract numbers from vibration signal (RMS amplitude, kurtosis spike, energy in frequency band) → classify fault type.\n\n" +
      "Links to PCA on centrifuge notes — many features → PCA reduces to few patterns.\n\n" +
      "Digital twin use: pick which sensors to install on tower; optimise maintenance schedule.",
    profSays: "Breadth topic — show you know how ML fits operation phase of lifecycle.",
    examTip: "One sentence each on DRL and feature analysis is enough for oral.",
    videos: [V.statquestPCA, V.predictive],
    pdfPage: "Exercise 12",
  },

  // ═══ HANDWRITTEN NOTES p.1–9 ═══════════════════════════════════
  {
    slug: "notes-page-1",
    order: 24,
    group: "notes",
    title: "Your Note p.1 — DT Definition & Lifecycle",
    subtitle: "The opening page — foundation of everything",
    source: "Handwritten class notes · Photo p.1",
    remember: "Lifecycle + virtual product + coupled parametric model",
    analogy: "See Quiz Q1 — this page is your cheat sheet for the definition oral.",
    plainAnswer:
      "Your first note page captures:\n• Official digital twin definition through lifecycle\n• Product lifecycle stages diagram\n• Model coupling concept introduced\n• Accuracy vs fidelity circled — know the difference cold\n\n" +
      "When studying, cover the page and recite the definition aloud three times.",
    profSays: "Same as Quiz Q1–Q2 content.",
    examTip: "Photo this page to your phone — read on the way to exam.",
    videos: [V.rollsRoyce, V.siemensDT],
    noteImage: "PHOTO-2026-04-27-12-02-20 7.jpg",
    noteLabel: "Your note p.1",
  },
  {
    slug: "notes-page-2",
    order: 25,
    group: "notes",
    title: "Your Note p.2 — V&V & Surrogate",
    subtitle: "Verification vs Validation — your circled definitions",
    source: "Handwritten class notes · Photo p.2",
    remember: "Maths right? vs Right maths? · Surrogate = fast approximation",
    analogy: "See Quiz Q7–Q8. Surrogate = cliff notes version of expensive simulation.",
    plainAnswer:
      "Page 2 topics:\n• Verification vs validation definitions (memorise wording)\n• Model inputs and outputs listed\n• Surrogate model concept — approximate expensive runs\n• Least squares mentioned — connects to Quiz Q11\n\n" +
      "Draw a two-box diagram: Verification (code) vs Validation (reality).",
    profSays: "Most failed exam topic if confused.",
    examTip: "Never swap the two questions.",
    videos: [V.simValidation],
    noteImage: "PHOTO-2026-04-27-12-02-20 8.jpg",
    noteLabel: "Your note p.2",
  },
  {
    slug: "notes-page-3",
    order: 26,
    group: "notes",
    title: "Your Note p.3 — DoE & Optimization",
    subtitle: "Four DoE types · Pareto · Injection molding example",
    source: "Handwritten class notes · Photo p.3",
    remember: "Full factorial · Fractional · Screening · Latin hypercube",
    analogy: "DoE = tasting combinations systematically instead of random guessing in the kitchen.",
    plainAnswer:
      "Key content:\n• DoE explores design space — multiple runs, design matrix\n• Four types: full factorial, fractional factorial, screening, Latin hypercube\n• Pareto chart ranks factor impact; Pareto front = trade-off curve\n• Injection molding: temp, pressure, cooling → weight, deviation, quality\n• Global vs local minimum in optimisation\n• Data matching = calibration",
    profSays: "Injection molding is her go-to DoE example besides your antenna.",
    examTip: "Be able to name all four DoE types with one phrase each.",
    videos: [V.jmpDoe, V.minitab, V.heeds],
    noteImage: "PHOTO-2026-04-27-12-02-19 5.jpg",
    noteLabel: "Your note p.3",
  },
  {
    slug: "notes-page-4",
    order: 27,
    group: "notes",
    title: "Your Note p.4 — PCA Six Steps",
    subtitle: "Unsupervised · Step 0 = NORMALIZE",
    source: "Handwritten class notes · Photo p.4",
    remember: "0 Normalize · 1 Covariance · 2 Eigen · 3 Order λ · 4 Matrix P · 5 Transform",
    analogy:
      "PCA is like finding that most group photos vary mainly 'left-right' and 'brightness' even though you have millions of pixel values — compress to what actually changes.",
    plainAnswer:
      "Six PCA steps from your notes:\n0. Normalize data\n1. Build covariance matrix (diagonal = variance)\n2. Eigenvalues & eigenvectors\n3. Sort eigenvalues descending\n4. Build projection matrix P\n5. Transform data to lower dimensions\n\n" +
      "Centrifuge: 20 vibration features → PCA1 energy, PCA2 imbalance, PCA3 bearing.\nSurrogate: wing geometry → AI predicts lift/drag without full CFD.",
    profSays: "PCA is UNSUPERVISED — no labels.",
    examTip: "Recite six steps with eyes closed.",
    videos: [V.statquestPCA],
    noteImage: "PHOTO-2026-04-27-12-02-18 2.jpg",
    noteLabel: "Your note p.4",
  },
  {
    slug: "notes-page-5",
    order: 28,
    group: "notes",
    title: "Your Note p.5 — Mesh · HEEDS · FMEA · Agile",
    subtitle: "Toolchain + software dev cycle",
    source: "Handwritten class notes · Photo p.5",
    remember: "Mesh: coarse→refine→iterate→check · Dev cycle 6 stages",
    analogy: "Mesh convergence = zooming into a map until street names stop changing. Agile = deliver small working pieces often instead of one big bang in 2 years.",
    plainAnswer:
      "Mesh convergence 4 steps.\nTools: NX, Ansys, Abaqus, Nastran, LS-Dyna, Simsolid, HEEDS+iSight, HyperMesh.\nFMEA table columns: failure mode, severity, occurrence, detection, RPN.\nAgile vs waterfall.\nSoftware cycle: Planning → Analysis → Design → Implementation → Testing → Maintenance. Verification in Testing.",
    profSays: "Map your notebook to all six dev stages orally.",
    examTip: "FMEA one row for antenna wind fatigue.",
    videos: [V.heeds, V.femOverview, V.isight],
    noteImage: "PHOTO-2026-04-27-12-02-19 6.jpg",
    noteLabel: "Your note p.5",
  },
  {
    slug: "notes-page-6-7",
    order: 29,
    group: "notes",
    title: "Your Notes p.6–7 — Motorcycle FFD & HVAC",
    subtitle: "Functional flow with feedback · Coupled building models",
    source: "Handwritten class notes · Photo p.6–7",
    remember: "Monitor→Compare→Adjust→Predict→Feedback · Occupancy→Heat→Cooling→Energy",
    analogy: "Motorcycle traction control: watch wheel slip, compare to limit, reduce throttle — loop. HVAC chain is same idea for buildings.",
    plainAnswer:
      "Motorcycle (p.6): Section 1.0 Monitor sliding/lean/steering/brake → Compare settings → Change outputs → Predict → Feedback.\n\n" +
      "HVAC (p.7): Occupancy up → heat up → cooling demand up → energy up. Logistics DoE on same page — minimise time AND fuel, visit each customer once.\n\n" +
      "Both illustrate coupling and functional thinking for Exercise 4.",
    profSays: "FFD must show feedback loop arrow back to Monitor.",
    examTip: "Sketch both from memory.",
    videos: [V.asmeCities],
    noteImage: "PHOTO-2026-04-27-12-02-19 7.jpg",
    noteLabel: "Your note p.6 — motorcycle FFD",
  },
  {
    slug: "notes-page-8",
    order: 30,
    group: "notes",
    title: "Your Note p.8 — P-Diagram Traction",
    subtitle: "Rear wheel traction control example",
    source: "Handwritten class notes · Photo p.8",
    remember: "Centre: Regulate rear wheel traction · Noise = road, tire, temp",
    analogy: "Traction control is cruise control for grip — prevents wheel spin on wet road.",
    plainAnswer:
      "P-diagram zones:\n• Ideal response: stable traction / controlled slip\n• Inputs: throttle, steering, brake, lean angle\n• Controls: TC sensitivity, slip target\n• Noise: road surface, tire wear, temperature\n• Error: too much slip → loss of control\n\n" +
      "Copy structure for antenna P-diagram in Exercise 4.",
    profSays: "Classic functional modelling example in course.",
    examTip: "Label all five zones on exam paper if asked.",
    videos: [V.siemensDT],
    noteImage: "PHOTO-2026-04-27-12-02-20 5.jpg",
    noteLabel: "Your note p.8",
  },
  {
    slug: "notes-page-9",
    order: 31,
    group: "notes",
    title: "Your Note p.9 — Monte Carlo & AI Surrogate",
    subtitle: "Random sampling · Wing aerodynamics AI",
    source: "Handwritten class notes · Photo p.9",
    remember: "Monte Carlo = many random input rolls · AI surrogate replaces expensive CFD",
    analogy:
      "Monte Carlo: roll dice 1000 times for weather, run RUL each time, see distribution of outcomes. Surrogate: apprentice who learned CFD patterns and answers in seconds — fast but must be checked.",
    plainAnswer:
      "Monte Carlo: assign probability distributions to inputs (wind, temp), sample randomly, run model thousands of times, get output distribution.\n\n" +
      "Swiss cheese: multiple safety layers — failure needs all holes to line up.\n\n" +
      "AI surrogate: wing shape in → lift/drag out without full CFD each time.\nAgile mentioned again — iterative delivery.",
    profSays: "Connect Monte Carlo to HEEDS Example 5 robustness.",
    examTip: "Explain Swiss cheese in two plain sentences.",
    videos: [V.minitab, V.heeds, V.statquestPCA],
    noteImage: "PHOTO-2026-04-27-12-02-20 6.jpg",
    noteLabel: "Your note p.9",
  },
];

export function getDeepTopic(slug: string): DeepTopic | undefined {
  return DEEP_TOPICS.find((t) => t.slug === slug);
}

export function getDeepTopicsByGroup(group: DeepTopic["group"]): DeepTopic[] {
  return DEEP_TOPICS.filter((t) => t.group === group);
}
