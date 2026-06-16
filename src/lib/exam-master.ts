/**
 * EXAM MASTER — sourced ONLY from:
 * - DigitalTwin_Lectures_Exercises.pdf (Prof. Adele Nasti, SRH)
 * - DigitalTwin_Exam_Guidelines.pdf
 * - Your DigitalTwin_Antenna_RUL.ipynb
 * No invented content. Links are from the exercises PDF only.
 */

export type ExamBlock = {
  hours: string;
  title: string;
  tasks: string[];
};

export const STUDY_24H: ExamBlock[] = [
  {
    hours: "Hour 1–3",
    title: "Quiz Q1–Q6 — say answers OUT LOUD",
    tasks: [
      "Read each Quiz answer below 3×. Cover text, recite.",
      "Q1 definition word-perfect: 'throughout its lifecycle'",
      "Q7 vs Q8 — do NOT mix verification and validation",
      "Exercise 1: plot spring data on paper, linear relationship",
    ],
  },
  {
    hours: "Hour 4–6",
    title: "Quiz Q7–Q12 + Exercise 2 AIAA",
    tasks: [
      "Write Q7 and Q8 on flashcards — most failed questions",
      "Exercise 2: write 3 paragraphs (DT definition, company value, product examples)",
      "Your value answer = antenna predictive maintenance (drone + RUL)",
    ],
  },
  {
    hours: "Hour 7–9",
    title: "Exercise 1 Hooke's law + Exercise 4 diagrams",
    tasks: [
      "Plot 15 data points (page 4 of Exercises PDF)",
      "Calculate spring constant k in N/m (convert mm→m)",
      "Draw P-diagram, context diagram, FFD for antenna tower",
    ],
  },
  {
    hours: "Hour 10–12",
    title: "RUN your project — notebook on Desktop",
    tasks: [
      "Open Desktop/DigitalTwin_Antenna_RUL.ipynb",
      "Run ALL cells top to bottom",
      "Memorise: RUL formula + 3 sanity numbers + wind 3.5×",
    ],
  },
  {
    hours: "Hour 13–15",
    title: "Exercise 5–6 HEEDS + MATLAB",
    tasks: [
      "HEEDS: Example 5 Coil Spring DoE — know workflow steps",
      "Map spring DoE to your 40-run antenna factorial",
      "MATLAB: know optimproblem, optimvar, optimconstr, optimexpr",
    ],
  },
  {
    hours: "Hour 16–18",
    title: "DoE, Pareto, your note pages 1–5",
    tasks: [
      "4 DoE types: full factorial, fractional, screening, Latin hypercube",
      "Your antenna: 4×10 = 40 runs, wind dominant factor",
      "Mesh convergence 4 steps, HEEDS workflow from note p.5",
    ],
  },
  {
    hours: "Hour 19–21",
    title: "Exercises 7–9 Simcenter + Exercise 10–12 overview",
    tasks: [
      "Ex 7: thermal PCB workflow (CAD→mesh→BC→solve→post)",
      "Ex 8: transient vs steady-state",
      "Ex 9 = validation (FEA vs test). Ex 11 = bearing prognosis ≈ your RUL",
    ],
  },
  {
    hours: "Hour 22–23",
    title: "PRESENTATION — Desktop PPT",
    tasks: [
      "Open Desktop/Exam_Presentation_Antenna_RUL_SRH_FINAL.pptx",
      "Rehearse 10–12 min: Problem→Approach→DoE→Results→Value",
      "Live demo: run notebook cell showing RUL output",
    ],
  },
  {
    hours: "Hour 24",
    title: "Mock oral — she asks theory BEYOND slides",
    tasks: [
      "Random: pick 12 Quiz questions, answer without looking",
      "Sleep 6+ hours before exam — memory consolidates",
    ],
  },
];

export const QUIZ_OFFICIAL = [
  {
    n: 1,
    q: "What is the digital twin?",
    a: "The digital representation of a physical product throughout its lifecycle — the virtual product. It is a coupled parametric simulation model updated with real data. It does NOT replace experimental testing.",
    trap: "WRONG: 'a 3D CAD copy' or 'a digital copy of the product'",
  },
  {
    n: 2,
    q: "What are the key steps of a product lifecycle?",
    a: "(1) Design & Analysis, (2) Manufacture, (3) Build & Assembly, (4) Experimental Testing, (5) Service.",
    trap: "WRONG: confusing with software dev cycle (Planning, Analysis, Design...)",
  },
  {
    n: 3,
    q: "Why is parametric geometry modelling important for digital twin?",
    a: "One master model can simulate as-designed AND as-manufactured by changing parameters — geometry, mesh and BCs update automatically. Needed for DoE and optimisation.",
    trap: "WRONG: 'parametric just means 3D CAD'",
  },
  {
    n: 4,
    q: "What is the accuracy of a model?",
    a: "How close model predictions are to reality (geometry, behavioural, dynamic accuracy). NOT the same as fidelity (level of detail).",
    trap: "WRONG: saying accuracy = level of detail (that is fidelity)",
  },
  {
    n: 5,
    q: "What does coupling mean in physics-based models?",
    a: "Solving two or more models together in an iterative loop because outputs of one are inputs of another — interdependent, cannot be solved independently.",
    trap: "WRONG: coupling = connecting software tools (that is process automation)",
  },
  {
    n: 6,
    q: "What is an empirical model?",
    a: "A model built from real-world observations and experimental data using statistical methods (curve fitting, regression). Contrast: physics-based uses first principles.",
    trap: "WRONG: saying empirical is 'less scientific'",
  },
  {
    n: 7,
    q: "What is the difference between model validation and model calibration?",
    a: "VALIDATION: check predictions vs real-world behaviour — 'Have I done the RIGHT maths?' CALIBRATION (data matching): tune internal parameters to match experimental data. Calibration is NOT validation.",
    trap: "WRONG: using calibration and validation as the same thing",
  },
  {
    n: 8,
    q: "What is the difference between verification and validation?",
    a: "VERIFICATION: 'Have I done the maths right?' — code/implementation correct. VALIDATION: 'Have I done the right maths?' — model matches reality. Example: FEA vs analytical = verification; simulation vs wind tunnel = validation.",
    trap: "WRONG: swapping the two questions",
  },
  {
    n: 9,
    q: "What does geometry idealisation mean and why is it useful?",
    a: "Simplifying complex CAD for simulation (3D→2D slice→1D rod) while keeping important physics. Reduces runtime; must stay synced with master CAD.",
    trap: "WRONG: idealisation = bad/inaccurate model",
  },
  {
    n: 10,
    q: "What is curve fitting?",
    a: "Generating a curve as close as possible to experimental data points — creates an empirical model. Used in calibration. Exercise 1 Hooke's law is curve fitting.",
    trap: "WRONG: thinking curve fitting = validation",
  },
  {
    n: 11,
    q: "What is the least square method and how does it work?",
    a: "Estimates parameters by minimising Σ(yᵢ − f(xᵢ))² — sum of squared residuals. For Hooke's law: fit F=kx, find k. Convert displacement mm→m for SI.",
    trap: "WRONG: line must pass through every point",
  },
  {
    n: 12,
    q: "What does extrapolation mean?",
    a: "Predicting OUTSIDE the range of measured data — higher uncertainty than interpolation (inside range). Spring data to 1.5N only → predicting at 5N is extrapolation.",
    trap: "WRONG: recommending ops outside your DoE bounds without stating risk",
  },
];

export const EXERCISES_OFFICIAL = [
  {
    n: 1,
    title: "Hooke's law — spring data",
    pdfTask: "Plot Force vs Displacement. Fit curve. Find spring constant k in SI (N/m).",
    whatToDo: [
      "Independent variable: Force (N). Dependent: Displacement (mm). Uncertainty ±0.5 mm.",
      "Plot 15 points from Exercises PDF page 4.",
      "Relationship: approximately linear → Hooke's law F = kx.",
      "Convert x from mm to m. Slope k ≈ 14–16 N/m (fit line or use 1.5N / 0.0998m ≈ 15 N/m).",
    ],
    links: [
      { label: "Hooke's law", url: "https://phys.org/news/2015-02-law.html" },
      { label: "Data analysis graphs (IIT)", url: "https://www.iit.edu/sites/default/files/2019-12/data_analysis.pdf" },
    ],
  },
  {
    n: 2,
    title: "AIAA Digital Twin paper",
    pdfTask: "Read AIAA paper. Answer 3 discussion questions.",
    whatToDo: [
      "(1) What is a digital twin in your view? → Use Q1 answer with 'lifecycle'.",
      "(2) Valuable company use case? → Predictive maintenance: drone inspects tower, RUL model predicts when to repair.",
      "(3) Product examples? → Aero engines, buildings, vehicles, antenna towers, centrifuges.",
    ],
    links: [
      {
        label: "AIAA Digital Twin Definition & Value (Dec 2020)",
        url: "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
      },
    ],
  },
  {
    n: 4,
    title: "P-diagram, context diagram, functional flow diagram",
    pdfTask: "Create all three for your product (can be final assignment).",
    whatToDo: [
      "YOUR PRODUCT: 5G antenna tower digital twin.",
      "P-diagram centre: maintain structural integrity & predict RUL.",
      "Context: tower, drone, cloud, maintenance crew.",
      "FFD: Monitor → Compare → Adjust → Predict → Feedback.",
    ],
    links: [],
  },
  {
    n: 5,
    title: "HEEDS Training",
    pdfTask: "Install HEEDS. Example 5 Coil Spring DoE. Example 10 Multi-objective.",
    whatToDo: [
      "Workflow: Process → Parameters → Tagging → Study → Run → POST.",
      "Example 5 = DoE study (NOT optimisation) on coil spring.",
      "Map to antenna: inputs wind+temp, output RUL, 40 factorial runs.",
    ],
    links: [
      { label: "HEEDS documentation", url: "https://www.egr.msu.edu/classes/me475/averillr/Lab1/HEEDS.pdf" },
      { label: "HEEDS Getting Started (in app /heeds)", url: "/heeds/HEEDSGettingStartedGuide.pdf" },
    ],
  },
  {
    n: 6,
    title: "MATLAB Optimisation Toolbox",
    pdfTask: "optimproblem, optimvar, optimconstr, optimexpr",
    whatToDo: [
      "Know function names from PDF.",
      "Antenna example: maximise RUL subject to wind≤12, temp≤30.",
    ],
    links: [
      { label: "Optimisation Toolbox overview", url: "https://de.mathworks.com/videos/optimization-toolbox-overview-70384.html" },
      { label: "MATLAB Optim Onramp", url: "https://matlabacademy.mathworks.com/R2021a/portal.html?course=optim" },
      { label: "Optimal path example", url: "https://de.mathworks.com/videos/finding-optimal-path-using-optimization-toolbox-68958.html" },
    ],
  },
  {
    n: 7,
    title: "Simcenter 3D — Thermal PCB",
    pdfTask: "Thermal modelling: PCB with chip hotspot.",
    whatToDo: [
      "Workflow: import CAD → mesh → materials → thermal BCs (chip power) → solve → temperature post.",
      "Links geometry idealisation (Q9) and validation if compared to thermocouple.",
    ],
    links: [
      { label: "Simcenter 3D tutorials", url: "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials.html" },
      { label: "Exercise 7 — Thermal PCB", url: "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials#uid:index_advanced_sim_tutorial:xid1688538" },
      { label: "Nastran getting started PDF", url: "https://docs.plm.automation.siemens.com/data_services/resources/scnastran/2020_1/help/tdoc/en_US/pdf/getting_started.pdf" },
    ],
  },
  {
    n: 8,
    title: "Simcenter — Response Dynamics",
    pdfTask: "FEM setup + transient event analysis.",
    whatToDo: [
      "Part 1: FEM setup. Part 2: transient (time-dependent) analysis.",
      "Contrast: steady-state heated rod (Ch31) vs transient vibration/impact.",
    ],
    links: [
      { label: "Ex 8 Part 1 FEM setup", url: "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials#uid:index_advanced_sim_tutorial:xid1677563" },
      { label: "Ex 8 Part 2 transient", url: "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials#uid:index_advanced_sim_tutorial:xid1677679" },
    ],
  },
  {
    n: 9,
    title: "Correlate FEA with test",
    pdfTask: "Structural analysis vs test solution — this is VALIDATION (Q8).",
    whatToDo: [
      "Run FEA → run physical test → compare results → quantify error.",
      "If error too large: calibrate parameters (Q7) then re-validate.",
    ],
    links: [
      { label: "Exercise 9 correlation tutorial", url: "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials#uid:index_advanced_sim_tutorial:xid1731225" },
    ],
  },
  {
    n: 10,
    title: "MATLAB Machine Learning Onramp",
    pdfTask: "Supervised learning workflow overview.",
    whatToDo: [
      "Import data → preprocess → train → evaluate.",
      "ML on your 40-run DoE = empirical surrogate for RUL (optional extension).",
    ],
    links: [
      { label: "ML Onramp", url: "https://de.mathworks.com/learn/tutorials/machine-learning-onramp.html" },
    ],
  },
  {
    n: 11,
    title: "Bearing prognosis (MATLAB)",
    pdfTask: "Wind turbine bearing RUL — parallel to your antenna project.",
    whatToDo: [
      "Sensor data → health index → degradation model → RUL forecast.",
      "Your project: physics-based RUL from wind+temp instead of vibration ML.",
    ],
    links: [
      { label: "Bearing prognosis example", url: "https://de.mathworks.com/help/predmaint/ug/wind-turbine-high-speed-bearing-prognosis.html" },
      { label: "exponentialdegradationmodel", url: "https://de.mathworks.com/help/predmaint/ref/exponentialdegradationmodel.html" },
    ],
  },
  {
    n: 12,
    title: "DRL Pong + pump feature analysis",
    pdfTask: "Awareness of DRL and diagnostic features.",
    whatToDo: [
      "DRL: agent, environment, reward.",
      "Pump features: RMS, kurtosis, band energy for fault detection.",
    ],
    links: [
      { label: "DRL Pong", url: "https://de.mathworks.com/matlabcentral/fileexchange/87939-playing-pong-with-deep-reinforcement-learning" },
      { label: "Pump feature analysis", url: "https://de.mathworks.com/help/predmaint/ug/analyze-and-select-features-for-pump-diagnostics.html" },
    ],
  },
];

export const PROJECT_RUN = {
  title: "Antenna RUL — run, simulate, analyse (YOUR exam demo)",
  files: [
    "Desktop/DigitalTwin_Antenna_RUL.ipynb",
    "Desktop/Exam_Presentation_Antenna_RUL_SRH_FINAL.pptx",
  ],
  steps: [
    {
      step: 1,
      title: "Open notebook",
      cmd: "Open /Users/msv/Desktop/DigitalTwin_Antenna_RUL.ipynb in Jupyter or VS Code",
    },
    {
      step: 2,
      title: "Run imports (Cell 2)",
      cmd: "import numpy, pandas, matplotlib — no errors",
    },
    {
      step: 3,
      title: "Run RUL model (Cell 4)",
      cmd: "Must print: 7300 days (5m/s,20°C), ~629 days (15m/s,35°C), ~41 days (35m/s,65°C)",
    },
    {
      step: 4,
      title: "Run DoE (Cell 6)",
      cmd: "40 rows = 4 wind × 10 temp. Shows design matrix.",
    },
    {
      step: 5,
      title: "Run plots (Cells 8–16)",
      cmd: "RUL curves, 3D surface, Pareto (wind ~3.5×), operating envelope",
    },
    {
      step: 6,
      title: "Or run Python script (alternative)",
      cmd: 'cd "Digital twin" && .venv/bin/python project/run_project.py',
    },
  ],
  formula: "RUL(days) = 175200 / (f_wind × f_temp × 24); f_wind=(v/5)^1.6; f_temp=2^((T-20)/15)",
  results: [
    "Wind dominates temperature (~3.5× impact on RUL)",
    "Safe ops: wind ≤12 m/s, temp ≤30°C → RUL >10 years",
    "Same DoE workflow as HEEDS Example 5 (Coil Spring)",
  ],
  presentation: [
    "10–15 min presentation + 10 min Q&A on ALL course topics",
    "70–90% of Q&A is theory from Quiz Q1–12",
    "Show: problem → drone pipeline → physics model → DoE 40 runs → envelope → value",
  ],
};

export const OFFICIAL_LINKS = [
  { label: "Exercises PDF (Prof. Nasti)", url: "/heeds/DigitalTwin_Lectures_Exercises.pdf" },
  { label: "Exam Guidelines", url: "/heeds/DigitalTwin_Exam_Guidelines.pdf" },
  { label: "Lecture PDF", url: "/heeds/DigitalTwin_Lectures_ProfAdeleNasti.pdf" },
  { label: "HEEDS Guide", url: "/heeds/HEEDSGettingStartedGuide.pdf" },
];
