import type { DayPlan } from "./types";

export const day2: DayPlan = 
{
  "day": 2,
  "date": "2026-06-09",
  "title": "DoE, Optimisation & HEEDS Mastery",
  "subtitle": "Exercises 4–6 + lecture topics Prof. Nasti drills on Pareto and HEEDS",
  "theme": "Design space exploration, UQ, process automation, then hands-on HEEDS/MATLAB",
  "blocks": [
    {
      "block": 1,
      "slot": "05:00–07:30",
      "label": "🧪 DoE — Four Types & Sensitivity",
      "tasks": [
        {
          "id": "d2-b1-t1",
          "day": 2,
          "block": 1,
          "slot": "05:00–06:15",
          "title": "DoE Definition & Four Types",
          "emoji": "🧪",
          "category": "DoE",
          "learn": "DESIGN OF EXPERIMENTS (DoE): tool to explore design space and understand sensitivity of inputs on outputs — run multiple configurations, gather data. Four types from Prof's notes: (1) FULL FACTORIAL — all combinations of all parameter levels; estimates all main effects AND interactions; computationally expensive. (2) FRACTIONAL FACTORIAL — subset of full factorial; less info, more efficient. (3) SCREENING EXPERIMENTS — many parameters, few runs, identifies key variables. (4) LATIN HYPERCUBE — optimised space-filling sampling; captures non-linear effects with fewer runs. Design matrix: columns = inputs (in1, in2), column = output. Injection molding example: inputs = temperature, injection pressure, cooling time; outputs = part weight, dimensional deviation, surface quality, cycle time. Your antenna: 4 wind × 10 temp = 40 runs = full factorial.",
          "practice": "Build 2³ design matrix on paper for injection molding (3 inputs, 2 levels). Justify DoE type for: (a) 2 factors, 16-run budget → full factorial; (b) 20 factors, 30 runs → screening. Recreate antenna 40-run header.",
          "exercises": [
            "Define DoE in Prof's words",
            "List 4 DoE types with trade-offs",
            "What is a design matrix?",
            "Injection molding — 3 inputs, 4 outputs",
            "Why full factorial for antenna (4×10)?"
          ],
          "checklist": [
            "4 types memorised",
            "Design matrix on paper",
            "Injection molding example ready",
            "Antenna 40-run justified",
            "Watched DoE intro videos"
          ],
          "youtube": [
            {
              "id": "_Rgue-7KDww",
              "title": "JMP — Design of Experiments Process"
            },
            {
              "id": "PD_0QjEyQJk",
              "title": "Minitab — DoE Introduction"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — DoE",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 52
        },
        {
          "id": "d2-b1-t2",
          "day": 2,
          "block": 1,
          "slot": "06:15–07:30",
          "title": "Sensitivity Analysis & Pareto Charts",
          "emoji": "📊",
          "category": "DoE",
          "learn": "SENSITIVITY ANALYSIS: studies how input parameter changes affect model output. Antenna method: sweep one factor across full range, hold other at midpoint — larger Δoutput = more sensitive factor. PARETO CHART ranks factors by impact on output. Antenna result: wind sweep (5→35 m/s at temp=42.5°C) gives larger RUL reduction than temp sweep (20→65°C at wind=20 m/s) — wind DOMINANT (~3.5× impact). Also know: main effects plots, interaction plots, parallel axes plots from lecture slide 106. Prof: 'Understanding sensitivity is crucial to design robust products.'",
          "practice": "Recalculate ΔRUL_wind and ΔRUL_temp from notebook. Draw Pareto bar chart on paper. Explain in two sentences why wind dominance is counterintuitive for electronics-focused engineers.",
          "exercises": [
            "Define sensitivity analysis",
            "What does Pareto chart show?",
            "Dominant factor in antenna project?",
            "Main effects plot — purpose?",
            "Recalculate Δwind and Δtemp"
          ],
          "checklist": [
            "Deltas recalculated",
            "Pareto chart drawn",
            "Wind = dominant (~3.5×)",
            "Counterintuitive argument ready",
            "Notebook cells 12–14 reviewed"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "DoE with FEA — Post-Processing"
            },
            {
              "id": "V_yaMyLeJ1I",
              "title": "Isight Plugin within Abaqus CAE"
            }
          ],
          "resources": [
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 2,
      "slot": "07:30–10:00",
      "label": "🎯 Design Optimisation & Pareto Front",
      "tasks": [
        {
          "id": "d2-b2-t1",
          "day": 2,
          "block": 2,
          "slot": "07:30–08:45",
          "title": "Design Optimisation — Objectives, Constraints, Variables",
          "emoji": "🎯",
          "category": "Optimization",
          "learn": "DESIGN OPTIMISATION: computational technique to find best design given objectives and constraints through iterative search. Prof's phrase: 'Swapping inputs & outputs — give target and ask model for inputs.' Component or system level. MULTI-OBJECTIVE: often conflicting objectives. Examples: (1) Seal — lowest leakage, mass ≤ x kg (Rolls-Royce). (2) Mug — max insulation, cost constraint. (3) Engine — min specific fuel consumption within safety margins. (4) Leaf seal — lowest leakage AND min heat at interface. Logistics: minimise delivery time + fuel cost; variables = routes/order; constraints = visit each customer once, fuel capacity, working hours. Antenna: OBJECTIVE = maximise RUL; VARIABLES = wind exposure, temperature; CONSTRAINTS = structural safety, data rate.",
          "practice": "Write optimisation problem statement for antenna project: objective, variables, constraints. Compare structure to logistics example from notes. Explain 'swap inputs and outputs' with one sentence example.",
          "exercises": [
            "Define design optimisation",
            "DoE vs optimisation — difference?",
            "Antenna optimisation problem written",
            "Logistics example — obj/var/constraints",
            "What is multi-objective optimisation?"
          ],
          "checklist": [
            "Optimisation defined clearly",
            "Antenna problem written",
            "Logistics example known",
            "Objectives vs constraints distinguished",
            "HEEDS optim workflow previewed"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Optimization Workflow"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d2-b2-t2",
          "day": 2,
          "block": 2,
          "slot": "08:45–10:00",
          "title": "Pareto Front & Global vs Local Minimum",
          "emoji": "📉",
          "category": "Optimization",
          "learn": "PARETO FRONT: collection of optimal solutions between CONFLICTING objectives — feasible vs unfeasible designs; boundary = Pareto front. Example: stress vs mass — cannot minimise both; Pareto front shows trade-off curve. GLOBAL MINIMUM vs LOCAL MINIMUM: optimisation challenge is finding GLOBAL minimum (absolute best). Local minimum may suffice in some engineering problems. Method of steepest descent (gradient method). CATEGORICAL VARIABLE: discrete values. Exam trap: Pareto CHART (factor ranking from DoE) ≠ Pareto FRONT (multi-objective trade-off) — Prof tests both.",
          "practice": "Sketch stress-vs-mass Pareto front with feasible cloud. Mark local and global minimum on 1D curve. Answer: antenna wind vs temp — Pareto trade-off? (No — degradation drivers; operating envelope IS constraint boundary.)",
          "exercises": [
            "Define Pareto front — 'conflicting objectives'",
            "Global vs local minimum",
            "Sketch stress vs mass Pareto front",
            "Pareto chart vs Pareto front?",
            "Define categorical variable"
          ],
          "checklist": [
            "Pareto front sketched",
            "Global vs local explained",
            "Chart vs front distinguished",
            "Antenna nuance understood",
            "Oral answer practiced"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Multi-Objective Optimization"
            },
            {
              "id": "9x9LYvErnwk",
              "title": "Optimization + DoE in Simulation"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 3,
      "slot": "10:00–12:30",
      "label": "🎲 Monte Carlo & Uncertainty Quantification",
      "tasks": [
        {
          "id": "d2-b3-t1",
          "day": 2,
          "block": 3,
          "slot": "10:00–11:15",
          "title": "Monte Carlo Simulation",
          "emoji": "🎲",
          "category": "DoE",
          "learn": "MONTE CARLO: computational technique using RANDOM SAMPLING for complex deterministic problems (e.g. multi-objective optimisation with uncertainty). Each input gets PROBABILITY DISTRIBUTION (Gaussian or rectangular) → stochastic set of inputs → many deterministic runs. Useful for highly coupled physics or many input uncertainties. Swiss cheese model (lecture): layered defences — failures must align through every hole to cause incident; Monte Carlo samples many failure combinations. Example: wind speed Weibull at tower site → sample 1000 values → run RUL model 1000 times → RUL distribution.",
          "practice": "Explain Monte Carlo in three sentences. Describe stochastic set of inputs. Connect Swiss cheese: each layer = defence; Monte Carlo samples whether holes align.",
          "exercises": [
            "Define Monte Carlo method",
            "What is stochastic set of inputs?",
            "Gaussian vs rectangular distribution?",
            "Swiss cheese model — 2 sentences",
            "Antenna wind variability example"
          ],
          "checklist": [
            "Monte Carlo defined",
            "Stochastic inputs explained",
            "Swiss cheese understood",
            "1000-run example sketched",
            "Connected to robust design"
          ],
          "youtube": [
            {
              "id": "PD_0QjEyQJk",
              "title": "Statistical Methods — Monte Carlo Context"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d2-b3-t2",
          "day": 2,
          "block": 3,
          "slot": "11:15–12:30",
          "title": "Uncertainty Quantification (UQ)",
          "emoji": "📏",
          "category": "DoE",
          "learn": "UNCERTAINTY QUANTIFICATION: identify uncertainty sources, estimate input uncertainties, propagate to output uncertainties. Types: STATISTICAL (random noise) vs SYSTEMATIC (bias/offset from test setup). Propagation: x₁±δx₁ → effect on R; combined via ROOT SUM SQUARE (RSS). UNCERTAINTY QUANTIFICATION from notes: nominal value + distribution variation. Robust design = low sensitivity of outputs to input variation. ASME PTC 19.1 governs test uncertainty — links to Quiz Q4 measurement ±0.1 and Exercise 1 ±0.5 mm displacement.",
          "practice": "List three uncertainty sources for antenna RUL model (wind measurement, temperature sensor, material aging coefficients). Show RSS combination concept. Distinguish statistical vs systematic with one example each.",
          "exercises": [
            "Define UQ from notes",
            "Statistical vs systematic uncertainty",
            "Root sum square combination",
            "What makes design 'robust'?",
            "Link to ASME PTC 19.1"
          ],
          "checklist": [
            "UQ types memorised",
            "3 antenna uncertainty sources",
            "RSS concept explained",
            "ASME link noted",
            "Robust design defined"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "Simulation Uncertainty Context"
            }
          ],
          "resources": [
            {
              "title": "ASME PTC 19.1 — Test Uncertainty",
              "url": "https://www.asme.org/codes-standards/find-codes-standards/ptc-19-1-test-uncertainty",
              "type": "paper"
            }
          ],
          "xp": 52
        }
      ]
    },
    {
      "block": 4,
      "slot": "12:30–15:00",
      "label": "📋 Pugh, FMEA & Swiss Cheese",
      "tasks": [
        {
          "id": "d2-b4-t1",
          "day": 2,
          "block": 4,
          "slot": "12:30–13:45",
          "title": "Pugh Matrix — Concept Selection",
          "emoji": "📋",
          "category": "Functional",
          "learn": "PUGH MATRIX: decision-making tool comparing multiple concepts against criteria by scoring (+/−/S same). Use early in conceptual design when choosing between alternatives. DATA MATCHING = MODEL CALIBRATION — tuning parameters to match experimental data (Prof notes p.3). For antenna: Pugh compare (A) periodic climber inspection, (B) drone photogrammetry only, (C) full digital twin with RUL. Criteria: cost, safety, accuracy, scalability, maintenance interval.",
          "practice": "Create 3-concept × 5-criteria Pugh matrix for antenna monitoring approaches. Score +/−/S. Identify winner. Write two sentences: data matching = calibration for RUL f_wind exponent and Arrhenius coefficient.",
          "exercises": [
            "Define Pugh matrix purpose",
            "Data matching = what?",
            "Build 3×5 Pugh matrix",
            "Which concept wins?",
            "RUL parameters to calibrate?"
          ],
          "checklist": [
            "Pugh matrix completed",
            "Winner identified",
            "Data matching = calibration",
            "Calibration limits acknowledged",
            "Honest limitation for presentation"
          ],
          "youtube": [
            {
              "id": "SwgtZp4Jcjs",
              "title": "Isight — Decision Support Context"
            }
          ],
          "resources": [
            {
              "title": "BHW Functional Modelling Handbook",
              "url": "https://www.burgehugheswalsh.co.uk/downloads/Functional-Modelling-Handbook.pdf",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 45
        },
        {
          "id": "d2-b4-t2",
          "day": 2,
          "block": 4,
          "slot": "13:45–15:00",
          "title": "FMEA & Swiss Cheese Model",
          "emoji": "🧀",
          "category": "Functional",
          "learn": "FMEA table structure from Prof's notes: Process, Failure Mode, Failure Effect, SEVERITY, Cause, OCCURRENCE, Current controls, DETECTION, RPN/TOTAL. Line-on-line interference → almost no wear (class example). SWISS CHEESE MODEL: multiple defensive layers (design review, simulation V&V, testing, maintenance); failure requires holes to align through ALL layers — connects to Monte Carlo sampling of failure combinations. For antenna: FMEA row — 'Structural failure due to wind fatigue' with S/O/D scores.",
          "practice": "Fill one complete FMEA row for antenna structural wind fatigue failure. Draw Swiss cheese with 4 layers labelled for digital twin workflow (CAD, simulation, drone inspection, RUL monitoring).",
          "exercises": [
            "FMEA column headers from memory",
            "One antenna FMEA row complete",
            "Swiss cheese — 2 sentence definition",
            "Line-on-line interference example",
            "Link FMEA to digital twin layers"
          ],
          "checklist": [
            "FMEA row filled",
            "Swiss cheese diagram drawn",
            "S/O/D scales understood",
            "Class example recalled",
            "Connected to Monte Carlo task"
          ],
          "youtube": [
            {
              "id": "HftDI09LVI0",
              "title": "Systems Safety — Layered Defences"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — FMEA",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 48
        }
      ]
    },
    {
      "block": 5,
      "slot": "15:00–17:30",
      "label": "⚙️ Process Automation, Integrated Design & Agile",
      "tasks": [
        {
          "id": "d2-b5-t1",
          "day": 2,
          "block": 5,
          "slot": "15:00–16:15",
          "title": "Process Automation — Four Pillars",
          "emoji": "⚙️",
          "category": "HEEDS",
          "learn": "PROCESS AUTOMATION (Prof notes): brings the design process into software — links multiple simulation tools via automated data transfers = INTEGRATED DESIGN SYSTEMS (simulation framework). Four pillars from lecture: (1) CAD integration (NX), (2) simulation tools (Simcenter/Ansys), (3) DoE & optimisation (HEEDS/iSight), (4) data management & workflow orchestration. Benefits: speed up process, improve product attributes, repeatability. HEEDS + iSight = Siemens/Simulia automation stack. This is exactly what your Python notebook replicates manually for antenna RUL.",
          "practice": "List four pillars with tool example each. Explain process automation in one sentence. Map notebook cells to HEEDS workflow: Design Space → DoE → Response Surface → Optimisation/envelope.",
          "exercises": [
            "Define process automation",
            "What are Integrated Design Systems?",
            "Name 4 pillars with tools",
            "HEEDS + iSight purpose",
            "Notebook ↔ HEEDS mapping"
          ],
          "checklist": [
            "4 pillars memorised",
            "HEEDS workflow mapped to notebook",
            "Process automation defined",
            "Watched HEEDS overview",
            "Read HEEDS getting started intro"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Multi-Disciplinary Design Exploration"
            },
            {
              "id": "SwgtZp4Jcjs",
              "title": "Isight — Process Automation Overview"
            }
          ],
          "resources": [
            {
              "title": "HEEDS Getting Started Guide",
              "url": "file:///Users/msv/Downloads/HEEDSGettingStartedGuide.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d2-b5-t2",
          "day": 2,
          "block": 5,
          "slot": "16:15–17:30",
          "title": "Integrated Design & Agile Development",
          "emoji": "🔄",
          "category": "Tools",
          "learn": "INTEGRATED DESIGN: multidisciplinary, multi-fidelity, simulation-driven — risk level drives accuracy/fidelity needed. AGILE: iterative incremental project management — flexibility, customer collaboration, rapid value delivery; contrast to waterfall. SOFTWARE DEV CYCLE (notes p.5): (1) Planning, (2) Analysis, (3) Design, (4) Implementation, (5) Testing & integration, (6) Maintenance. VERIFICATION happens in Testing phase. Your Jupyter notebook: Planning (objective) → Analysis (RUL physics) → Design (DoE matrix) → Implementation (Python) → Testing (sanity checks 5/15/35 m/s) → Maintenance (extend with sensor data).",
          "practice": "List 6 software dev cycle stages. Map notebook to each. Define Agile in one sentence. Answer: 'How is simulation software development different from app development?' — verification against analytical solutions is critical.",
          "exercises": [
            "List 6 software development stages",
            "Define Agile from notes",
            "Map notebook to 6 stages",
            "Where does verification fit?",
            "Agile vs waterfall — one difference"
          ],
          "checklist": [
            "6 stages memorised",
            "Notebook mapped",
            "Agile defined",
            "Verification in testing phase",
            "Simulation vs app dev answer ready"
          ],
          "youtube": [
            {
              "id": "SwgtZp4Jcjs",
              "title": "Isight — Agile Workflow Integration"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 48
        }
      ]
    },
    {
      "block": 6,
      "slot": "17:30–20:00",
      "label": "🔧 TRL, Mesh Convergence & Toolchain",
      "tasks": [
        {
          "id": "d2-b6-t1",
          "day": 2,
          "block": 6,
          "slot": "17:30–18:45",
          "title": "Technology Readiness Levels (TRL)",
          "emoji": "🚀",
          "category": "Tools",
          "learn": "NASA TRL 1–9 scale: TRL 1 basic principles, TRL 4 component validation in lab, TRL 5 validation in relevant environment, TRL 6 system prototype demonstration, TRL 7 operational prototype, TRL 9 deployed system. Your antenna project ≈ TRL 4–5: validated RUL model in simulation/lab, drone photogrammetry demonstrated industrially (~€220K contract) but full tower-scale predictive maintenance not deployed at scale. Prof asks TRL in Q&A — justify with evidence, not aspiration.",
          "practice": "Read NASA TRL page. Write 3 sentences placing antenna project at TRL 4–5 with evidence. List what would be needed to reach TRL 7 (field sensors, live twin feed, maintenance action closure).",
          "exercises": [
            "Define TRL scale (1–9 overview)",
            "Where is antenna project?",
            "Evidence for TRL 4–5",
            "Gap to TRL 7?",
            "TRL vs technology maturity — oral answer"
          ],
          "checklist": [
            "NASA TRL page read",
            "TRL 4–5 justified in writing",
            "Gap analysis done",
            "Oral answer ≤30 sec",
            "No inflated TRL claim"
          ],
          "youtube": [
            {
              "id": "9UpMeDO0A04",
              "title": "Digital Twin Maturity Context"
            }
          ],
          "resources": [
            {
              "title": "NASA TRL Scale",
              "url": "https://www.nasa.gov/directorates/heo/scan/engineering/technology/technology_readiness_level",
              "type": "doc"
            }
          ],
          "xp": 45
        },
        {
          "id": "d2-b6-t2",
          "day": 2,
          "block": 6,
          "slot": "18:45–20:00",
          "title": "Mesh Convergence & NX/Simcenter/HEEDS Tools",
          "emoji": "🔧",
          "category": "Tools",
          "learn": "MESH CONVERGENCE STUDY: (1) coarse mesh, (2) systematic refinement, (3) simulation iterations, (4) check convergence. Software toolchain from notes: CAD=NX, Dynamic=NX/MSC Nastran, General FEA=Ansys/Abaqus, Contact=LS-Dyna, Mesh-free=Simsolid, Automation=HyperWorks/HyperMesh, Optimisation=HEEDS+iSight, Simcenter 3D for integrated FEA/thermal/response dynamics (Exercises 7–9). Antenna uses analytical model — explain WHEN you'd need Simcenter FEA instead (stress concentrations, nonlinear material, validation correlation).",
          "practice": "Write 4 mesh convergence steps from memory. List 8 tools with purpose. Prepare one sentence: 'Analytical RUL sufficient for system-level DoE; FEA needed for local stress validation.'",
          "exercises": [
            "4 mesh convergence steps",
            "8 software tools from notes",
            "When analytical vs FEA?",
            "What is Simsolid?",
            "Simcenter role in Exercises 7–9"
          ],
          "checklist": [
            "Convergence steps memorised",
            "Toolchain listed",
            "Analytical vs FEA answer ready",
            "Simcenter tutorial bookmarked",
            "Rolls-Royce seal context noted"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "FEA Simulation Example"
            },
            {
              "id": "V_yaMyLeJ1I",
              "title": "Simcenter/Abaqus Integration"
            }
          ],
          "resources": [
            {
              "title": "Simcenter 3D Tutorials",
              "url": "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials.html#uid:index_advanced_sim_tutorial",
              "type": "doc"
            },
            {
              "title": "HEEDS Getting Started Guide",
              "url": "file:///Users/msv/Downloads/HEEDSGettingStartedGuide.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 7,
      "slot": "20:00–23:00",
      "label": "📊 Exercises 4–6 — P-diagram, HEEDS, MATLAB",
      "tasks": [
        {
          "id": "d2-b7-t1",
          "day": 2,
          "block": 7,
          "slot": "20:00–21:30",
          "title": "Exercise 4 — P-Diagram, Context & FFD Antenna Tower",
          "emoji": "📡",
          "category": "Functional",
          "learn": "Exercise 4: Create P-diagram, context diagram, and functional flow diagram for a product — complex or simple; may become final assignment. YOUR PRODUCT: 5G/6G telecom antenna tower digital twin. P-DIAGRAM centre: 'Maintain antenna structural integrity & predict RUL.' INPUTS: wind speed, ambient temperature, drone-derived geometry, load history. NOISE: weather variability, material batch variation, unmeasured vibration. CONTROLS: inspection interval, operating envelope limits, maintenance threshold. IDEAL RESPONSE: accurate RUL, minimal outages. ERROR STATE: RUL underestimate → late maintenance; overestimate → unsafe operation. FFD: Monitor (sensors/drone) → Compare (RUL vs threshold) → Adjust (maintenance schedule) → Predict (degradation trend) → Feedback. Context diagram: tower, drone, cloud analytics, maintenance crew.",
          "practice": "Draw P-diagram, context diagram, and FFD for antenna tower from memory. Use BHW Functional Modelling Handbook structure. Prof trap: FFD ≠ software architecture — abstraction of real problem. Connect to motorcycle traction FFD from Day 1 notes.",
          "exercises": [
            "P-diagram — all 5 zones for antenna",
            "Context diagram — 4+ entities",
            "FFD — 4-step flow with feedback",
            "FFD ≠ software architecture",
            "Noise vs control factors — 3 each"
          ],
          "checklist": [
            "All three diagrams drawn",
            "BHW handbook consulted",
            "Motorcycle FFD compared",
            "Oral explanation practiced",
            "Ready for Exercise 4 submission"
          ],
          "youtube": [
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens — Smart Infrastructure Context"
            }
          ],
          "resources": [
            {
              "title": "BHW Functional Modelling Handbook",
              "url": "https://www.burgehugheswalsh.co.uk/downloads/Functional-Modelling-Handbook.pdf",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 4",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "ASME GT2020 Nasti Seal Paper",
              "url": "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2020/84188/V07CT14A023/1095072",
              "type": "paper"
            }
          ],
          "xp": 58
        },
        {
          "id": "d2-b7-t2",
          "day": 2,
          "block": 7,
          "slot": "21:30–23:00",
          "title": "Exercise 5 HEEDS Coil Spring & Exercise 6 MATLAB optimproblem",
          "emoji": "⚙️",
          "category": "HEEDS",
          "learn": "Exercise 5: HEEDS Training — install per campusnet guidelines. Examples: Example 5 DoE Study of Coil Spring; Example 10 Multi-objective optimisation. Read HEEDS Getting Started Guide. Exercise 6: MATLAB Optimisation Toolbox — optimproblem, optimvar, optimconstr, optimexpr; tutorial on MathWorks; optional optimal path video. Map HEEDS coil spring DoE to your antenna factorial: both define design space, run experiments, analyse responses. Multi-objective in HEEDS Example 10 parallels Pareto front lecture — conflicting objectives, trade-off curve.",
          "practice": "Open HEEDS guide — identify Design Space, Response Surface, Optimisation workflow steps. If HEEDS unavailable: document equivalent notebook workflow. In MATLAB (or read docs): write pseudocode for optimproblem with one objective and one constraint. Compare coil spring DoE to antenna 40-run matrix.",
          "exercises": [
            "HEEDS Example 5 — coil spring DoE steps",
            "HEEDS Example 10 — multi-objective goal",
            "MATLAB optimproblem pseudocode",
            "optimvar / optimconstr roles",
            "Map HEEDS workflow to notebook"
          ],
          "checklist": [
            "HEEDS guide sections identified",
            "Coil spring ↔ antenna DoE compared",
            "MATLAB functions listed",
            "Multi-objective linked to Pareto",
            "Process automation demonstrated"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — DoE & Optimization"
            },
            {
              "id": "SwgtZp4Jcjs",
              "title": "Isight — MATLAB Integration"
            },
            {
              "id": "_Rgue-7KDww",
              "title": "DoE Process — Coil Spring Analog"
            }
          ],
          "resources": [
            {
              "title": "HEEDS Getting Started Guide",
              "url": "file:///Users/msv/Downloads/HEEDSGettingStartedGuide.pdf",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercises 5–6",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 62
        }
      ]
    }
  ]
};
