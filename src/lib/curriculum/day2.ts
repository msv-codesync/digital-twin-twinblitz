import type { DayPlan } from "./types";

export const day2: DayPlan = 
{
  day: 2,
  date: "2026-06-09",
  "title": "DoE, Optimization & HEEDS Mastery",
  "subtitle": "Class notes p.3–5 + Prof's lecture slides 102–120 — she loves Pareto questions",
  "theme": "Design space exploration, sensitivity, and the HEEDS workflow",
  "blocks": [
    {
      "block": 1,
      "slot": "05:00–08:00",
      "label": "🧪 Design of Experiments — Theory (handwritten p.3)",
      "tasks": [
        {
          "id": "d2-b1-t1",
          day: 2,
          "block": 1,
          "slot": "05:00–06:30",
          "title": "DoE Definition & Four Types",
          "emoji": "🧪",
          "category": "DoE",
          "learn": "DESIGN OF EXPERIMENTS (DoE): tool to explore design space and understand sensitivity of inputs on outputs — run multiple configurations of a model, gather data. Your notes list 4 types: (1) FULL FACTORIAL — all combinations of all parameter levels; estimates all main effects AND interactions; computationally expensive. (2) FRACTIONAL FACTORIAL — derivative of full factorial; less info, more efficient. (3) SCREENING EXPERIMENTS — many parameters, few runs, low cost, identifies key variables. (4) LATIN HYPERCUBE — optimised choice of runs; captures non-linear effects with fewer runs. Design matrix: columns = inputs (in1, in2, in3), column = output (out1). Prof's injection molding example: inputs = temperature, injection pressure, cooling time; outputs = part weight, dimensional deviation, surface quality, cycle time.",
          "practice": "Build a design matrix on paper for injection molding with 3 inputs at 2 levels each (2³=8 runs). Identify which DoE type you'd use for: (a) 2 factors, budget for 16 runs → full factorial, (b) 20 factors, budget for 30 runs → screening. Your antenna project uses FULL FACTORIAL: 4 wind × 10 temp = 40 runs.",
          "exercises": [
            "Define DoE in Prof's words",
            "List all 4 DoE types with trade-offs",
            "What is a design matrix?",
            "Injection molding example — 3 inputs, 4 outputs",
            "Why did you pick full factorial for antenna?"
          ],
          "checklist": [
            "Can define DoE clearly",
            "Listed all 4 types with pros/cons",
            "Built design matrix on paper",
            "Know injection molding example",
            "Justified full factorial for 40-run DoE"
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
              "title": "Montgomery — Design and Analysis of Experiments",
              "url": "https://www.wiley.com/en-us/Design+and+Analysis+of+Experiments%2C+9th+Edition-p-9781119493918",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d2-b1-t2",
          day: 2,
          "block": 1,
          "slot": "06:30–08:00",
          "title": "Sensitivity Analysis & Pareto Charts",
          "emoji": "📊",
          "category": "DoE",
          "learn": "SENSITIVITY ANALYSIS: studies how changes in input parameters affect model output. Method from your antenna notebook: sweep one factor across full range while holding other at midpoint — larger Δoutput = more sensitive factor. PARETO CHART (from notes + lecture): ranks factors by impact on output — 'sensitivity towards output.' In your project: wind sweep (5→35 m/s at temp=42.5°C) gave larger RUL reduction than temp sweep (20→65°C at wind=20 m/s) — wind is DOMINANT (~3.5× impact). Pareto chart shows this visually. Also know: main effects plots, interaction plots, parallel axes plots (from lecture slide 106).",
          "practice": "Recalculate sensitivity from your notebook: Δwind and Δtemp. Draw a Pareto bar chart on paper. Explain in 2 sentences why Pareto matters for robust design: 'Understanding sensitivity is crucial to design robust products.'",
          "exercises": [
            "Define sensitivity analysis",
            "What does a Pareto chart show?",
            "Which factor dominates in your antenna project?",
            "What is a main effects plot?",
            "Recalculate Δwind and Δtemp from RUL formula"
          ],
          "checklist": [
            "Recalculated sensitivity deltas",
            "Drew Pareto chart on paper",
            "Wind identified as dominant factor",
            "Watched DoE post-processing videos",
            "Can explain Pareto to Prof"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "DoE with FEA — Abaqus/Isight Example"
            },
            {
              "id": "V_yaMyLeJ1I",
              "title": "Isight Plugin within Abaqus CAE"
            }
          ],
          "resources": [
            {
              "title": "Abaqus DoE Results Graphs",
              "url": "https://abaqus-docs.mit.edu/2017/English/IhrUserMap/ihr-c-Results-GraphSpecialized.htm",
              "type": "doc"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 2,
      "slot": "08:00–11:00",
      "label": "⚙️ HEEDS & Process Automation Deep Dive",
      "tasks": [
        {
          "id": "d2-b2-t1",
          day: 2,
          "block": 2,
          "slot": "08:00–09:30",
          "title": "HEEDS Workflow — MDAO in Practice",
          "emoji": "⚙️",
          "category": "HEEDS",
          "learn": "HEEDS = Siemens Simcenter solution for Multi-Disciplinary Design Exploration. Automates: Design Space definition → DoE execution → Response surface → Optimisation. Same workflow you did manually in Python for antenna RUL. HEEDS connects to: Ansys, Abaqus, NX, Nastran, Excel, Python scripts, etc. Process automation = linking tools with automated data transfer (your notes: HEEDS + iSight). Prof's industrial case (slide 110): design optimisation of BOP for fatigue in HPHT environment using Isight + fe-safe. Your notebook IS the exam demo — you wrote the code, ran the DoE, produced Pareto + response surface + operating envelope.",
          "practice": "Open your DigitalTwin_Antenna_RUL.ipynb. For each HEEDS step, point to the equivalent notebook cell: (1) Design space = WIND_LEVELS × TEMP_LEVELS, (2) DoE execution = nested for loop, (3) Response surface = 3D plot_surface, (4) Optimisation/envelope = contour plot at 10yr RUL. Practice saying: 'I replicated the HEEDS workflow in Python because...'",
          "exercises": [
            "What does HEEDS automate?",
            "Map 4 HEEDS steps to your notebook cells",
            "What is MDAO?",
            "Prof's industrial case slide 110 topic",
            "Why Python instead of HEEDS GUI?"
          ],
          "checklist": [
            "Opened and reviewed full notebook",
            "Mapped HEEDS steps to notebook",
            "Watched HEEDS overview video",
            "Read HEEDS getting started guide",
            "Can present workflow to Prof"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Multi-Disciplinary Design Exploration"
            },
            {
              "id": "SwgtZp4Jcjs",
              "title": "Isight — Process Automation"
            }
          ],
          "resources": [
            {
              "title": "HEEDS — Siemens Simcenter",
              "url": "https://www.plm.automation.siemens.com/global/en/products/simcenter/HEEDS.html",
              "type": "doc"
            },
            {
              "title": "Simulia Isight Brochure",
              "url": "https://www.3ds.com/fileadmin/PRODUCTS-SERVICES/SIMULIA/RESOURCES/simulia-isight-brochure.pdf",
              "type": "doc"
            },
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 60
        },
        {
          "id": "d2-b2-t2",
          day: 2,
          "block": 2,
          "slot": "09:30–11:00",
          "title": "Mesh Convergence & FEA Tools (handwritten p.5)",
          "emoji": "🔧",
          "category": "Tools",
          "learn": "MESH CONVERGENCE STUDY (your notes): progressively refine mesh to find sensitivity towards solution. Steps: (1) coarse mesh, (2) systematic refinement, (3) simulation iterations, (4) check convergence. Software from notes: CAD=NX, Dynamic=NX/MSC Nastran, General FEA=Ansys/Abaqus, Contact friction=LS-Dyna, Mesh-free=Simsolid, Automation=HyperWorks/HyperMesh, Optimisation=HEEDS+iSight. FMEA table structure from notes: Process, Failure Mode, Failure Effect, SEVERITY, Cause, OCCURRENCE, Current controls, DETECTION, TOTAL. Line-on-line interference → almost no wear (from notes).",
          "practice": "Write the 4 mesh convergence steps from memory. For your antenna project: you used an analytical model (no mesh) — explain to Prof WHY and when you'd need FEA instead. Fill one FMEA row for 'antenna structural failure due to wind fatigue'.",
          "exercises": [
            "List 4 mesh convergence steps",
            "Name 6 simulation software tools from notes",
            "When is analytical model enough vs FEA needed?",
            "Fill one FMEA table row for antenna",
            "What is Simsolid (mesh-free FEA)?"
          ],
          "checklist": [
            "Memorised mesh convergence steps",
            "Listed all software tools",
            "Prepared FEA vs analytical justification",
            "Completed FMEA example row",
            "Understand Simsolid concept"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "Ansys Simulation Example"
            },
            {
              "id": "z_g-ov61DNw",
              "title": "CFD Simulation — Convergence Context"
            }
          ],
          "resources": [
            {
              "title": "Ansys Meshing Best Practices",
              "url": "https://www.ansys.com/resource-center/body-of-knowledge/meshing",
              "type": "doc"
            }
          ],
          "xp": 45
        }
      ]
    },
    {
      "block": 3,
      "slot": "11:00–14:00",
      "label": "🎯 Design Optimization & Pareto Front",
      "tasks": [
        {
          "id": "d2-b3-t1",
          day: 2,
          "block": 3,
          "slot": "11:00–12:30",
          "title": "Design Optimization — Objectives, Constraints, Variables",
          "emoji": "🎯",
          "category": "Optimization",
          "learn": "DESIGN OPTIMISATION: computational technique to find best design given objectives and constraints through iterative search. Your notes: 'Swapping inputs & outputs — give target and ask model for inputs.' Can be component or system level. MULTI-OBJECTIVE: often conflicting objectives. Examples from notes: (1) Seal — lowest leakage, mass ≤ x kg. (2) Mug — max insulation, cost constraint. (3) Engine — min specific fuel consumption within safety margins. (4) Leaf seal — lowest leakage AND min heat at interface. Logistics example from notes: minimise delivery time + fuel cost; variables=routes/order; constraints=visit each customer once, fuel capacity, working hours.",
          "practice": "Write the optimisation problem statement for your antenna: OBJECTIVE = maximise RUL (or minimise degradation rate). VARIABLES = wind speed exposure, operating temperature. CONSTRAINTS = structural safety, data rate requirements. Compare to logistics example structure.",
          "exercises": [
            "Define design optimisation",
            "Optimization vs DoE — what's the difference?",
            "Write optimisation problem for antenna project",
            "Logistics example — objectives, variables, constraints",
            "What is multi-objective optimisation?"
          ],
          "checklist": [
            "Defined optimisation clearly",
            "Wrote antenna optimisation problem",
            "Know logistics example from notes",
            "Understand objectives vs constraints",
            "Can explain 'swap inputs and outputs'"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Optimization Workflow"
            }
          ],
          "resources": [
            {
              "title": "Kreyszig Ch.22 — Gradient Method / Optimization",
              "url": "https://www.bau.edu.jo/UserPortal/UserProfile/PostsAttach/59003_3812_1.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d2-b3-t2",
          day: 2,
          "block": 3,
          "slot": "12:30–14:00",
          "title": "Pareto Front, Global vs Local Minimum",
          "emoji": "📉",
          "category": "Optimization",
          "learn": "PARETO FRONT (your notes p.3): collection of optimal solutions between CONFLICTING objectives — feasible vs unfeasible designs, boundary = Pareto front. Example: stress vs mass — you cannot minimise both simultaneously; Pareto front shows trade-off curve. GLOBAL MINIMUM vs LOCAL MINIMUM: the challenge of optimisation is finding the GLOBAL minimum (absolute best). Local minimum may be 'good enough' in some engineering problems. Method of steepest descent (gradient method) from Kreyszig Ch.22. CATEGORICAL VARIABLE (notes): discrete values. UNCERTAINTY QUANTIFICATION (notes): nominal value + distribution variation.",
          "practice": "Sketch stress-vs-mass Pareto front with feasible cloud and boundary line. Mark a local minimum and global minimum on a 1D curve. For antenna: is wind-vs-temp a Pareto trade-off? (No — they're degradation drivers, not conflicting design objectives. But operating envelope IS a constraint boundary.)",
          "exercises": [
            "Define Pareto front with 'conflicting objectives'",
            "Global vs local minimum — explain",
            "Sketch Pareto front stress vs mass",
            "Define categorical variable",
            "Define uncertainty quantification from notes"
          ],
          "checklist": [
            "Drew Pareto front sketch",
            "Explained global vs local minimum",
            "Know categorical variable definition",
            "Understand UQ definition",
            "Can distinguish DoE from optimisation"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "Optimization + DoE in Simulation"
            }
          ],
          "resources": [
            {
              "title": "Computational Approaches for Aerospace Design — Keane",
              "url": "https://books.google.de/books?id=dMeitxe-ilgC",
              "type": "doc"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 4,
      "slot": "14:00–17:00",
      "label": "🎲 Uncertainty, Monte Carlo & Pugh Matrix",
      "tasks": [
        {
          "id": "d2-b4-t1",
          day: 2,
          "block": 4,
          "slot": "14:00–15:30",
          "title": "Monte Carlo & Uncertainty Propagation",
          "emoji": "🎲",
          "category": "DoE",
          "learn": "MONTE CARLO (your notes p.7): computational technique using RANDOM SAMPLING for complex deterministic problems (e.g. multi-objective optimisation). Each input gets a PROBABILITY DISTRIBUTION (Gaussian or rectangular) → stochastic set of inputs → many deterministic runs. Useful for highly coupled physics or many input uncertainties. UNCERTAINTY QUANTIFICATION: identify sources, estimate input uncertainties, propagate to output uncertainties. Types: statistical (random noise) vs systematic (bias/offset from test setup). Propagation: x₁±δx₁ → effect on R; combined via ROOT SUM SQUARE (RSS). Robust design = low sensitivity of outputs to input variation.",
          "practice": "Explain Monte Carlo in 3 sentences. Give example: wind speed follows Weibull distribution at tower site → sample 1000 values → run RUL model 1000 times → get RUL distribution. Define 'stochastic set of inputs' from your notes.",
          "exercises": [
            "Define Monte Carlo method",
            "What is a stochastic set of inputs?",
            "Statistical vs systematic uncertainty",
            "What is root sum square combination?",
            "What makes a design 'robust'?"
          ],
          "checklist": [
            "Defined Monte Carlo clearly",
            "Explained stochastic inputs",
            "Know UQ types",
            "Understand RSS combination",
            "Connected to antenna wind variability"
          ],
          "youtube": [
            {
              "id": "PD_0QjEyQJk",
              "title": "Statistical Methods — Minitab Context"
            }
          ],
          "resources": [
            {
              "title": "Moffat — Experimental Uncertainty Paper",
              "url": "http://fluidos-lfa.usuarios.rdc.puc-rio.br/metexp-pos/Paper_Moffat.pdf",
              "type": "paper"
            }
          ],
          "xp": 50
        },
        {
          "id": "d2-b4-t2",
          day: 2,
          "block": 4,
          "slot": "15:30–17:00",
          "title": "Pugh Matrix & Data Matching",
          "emoji": "📋",
          "category": "Functional",
          "learn": "PUGH MATRIX (your notes p.5): decision-making tool to compare multiple concepts against criteria by scoring them. Use when choosing between design alternatives early in conceptual design. DATA MATCHING = MODEL CALIBRATION (your notes p.3) — tuning parameters to match experimental data. Example from lecture: calibrate simulation models using experimental test results. For your project: calibrating f_wind exponent (1.6) and Arrhenius coefficient (15°C doubling) would require field failure data — acknowledge this as limitation/future work in presentation.",
          "practice": "Create a 3-concept × 5-criteria Pugh matrix for antenna monitoring approaches: (A) periodic climber inspection, (B) drone photogrammetry only, (C) full digital twin with RUL. Score +/−/S (same). Identify winner. Write 2 sentences on calibration limitations of your RUL model.",
          "exercises": [
            "Define Pugh matrix purpose",
            "Data matching = what?",
            "Create Pugh matrix for 3 monitoring concepts",
            "What parameters would you calibrate in RUL model?",
            "Acknowledge model limitations for Prof"
          ],
          "checklist": [
            "Defined Pugh matrix",
            "Created 3×5 Pugh matrix",
            "Know data matching = calibration",
            "Identified RUL calibration limits",
            "Prepared honest limitation statement"
          ],
          "youtube": [],
          "resources": [
            {
              "title": "Pugh Matrix — Concept Selection",
              "url": "https://www.designsociety.org/publication/28700/design_studies",
              "type": "paper"
            }
          ],
          "xp": 45
        }
      ]
    },
    {
      "block": 5,
      "slot": "17:00–20:00",
      "label": "🤖 Surrogate Models & AI in Engineering",
      "tasks": [
        {
          "id": "d2-b5-t1",
          day: 2,
          "block": 5,
          "slot": "17:00–18:30",
          "title": "Surrogate Models & Surrogate-Based Optimization",
          "emoji": "🤖",
          "category": "Surrogate",
          "learn": "SURROGATE MODEL (notes p.2 & p.4): dataset from high-fidelity model, approximated for faster runs. SURROGATE-BASED OPTIMISATION: optimise on surrogate (cheap), then validate on high-fidelity model. AI IN ENGINEERING (notes p.7): Wing aerodynamics — inputs=wing geometry, outputs=lift/drag coefficients; AI predicts CFD results faster with acceptable accuracy. ML as surrogate on simulation datasets — particularly for optimisation loops needing thousands of runs. Your analytical RUL model is already a low-fidelity surrogate of full FEA fatigue analysis — explain this hierarchy to Prof.",
          "practice": "Draw surrogate hierarchy: FEA (high-fidelity, slow) → analytical RUL (medium) → response surface (fast). Explain when you'd add ML on top. Answer: 'Could you replace your RUL model with ML?' — Yes but need training data from FEA/experiments, lose physics interpretability.",
          "exercises": [
            "Define surrogate model",
            "Define surrogate-based optimisation",
            "Wing aerodynamics AI example — inputs/outputs",
            "Is your RUL model a surrogate? Of what?",
            "ML surrogate pros and cons"
          ],
          "checklist": [
            "Defined surrogate model clearly",
            "Drew fidelity hierarchy",
            "Know wing aerodynamics example",
            "Justified analytical model choice",
            "Can answer ML replacement question"
          ],
          "youtube": [
            {
              "id": "64N2BY747Cw",
              "title": "CFD Simulation — High-Fidelity Base Model"
            }
          ],
          "resources": [
            {
              "title": "Tao et al. 2019 — Digital Twin in Industry (IEEE)",
              "url": "https://ieeexplore.ieee.org/document/8477107",
              "type": "paper"
            }
          ],
          "xp": 50
        },
        {
          "id": "d2-b5-t2",
          day: 2,
          "block": 5,
          "slot": "18:30–20:00",
          "title": "Agile & Software Development Cycle",
          "emoji": "🔄",
          "category": "Tools",
          "learn": "AGILE (notes p.7): iterative and incremental project management — flexibility, customer collaboration, rapid value delivery. Key contrast to waterfall. SOFTWARE DEV CYCLE (notes p.5): (1) Planning, (2) Analysis, (3) Design, (4) Implementation, (5) Testing & integration, (6) Maintenance. Homework reference: Paper slide 204. For simulation software: VERIFICATION happens in Testing phase. Connect: your Jupyter notebook development followed stages — Planning (objective), Analysis (RUL physics), Design (DoE matrix), Implementation (Python code), Testing (sanity checks at 5/15/35 m/s), Maintenance (extend with real sensor data).",
          "practice": "List 6 software dev cycle stages from memory. Map your notebook development to each stage. Define Agile in one sentence. Prof may ask: 'How is simulation software development different from app development?' — Answer: verification against analytical solutions is critical.",
          "exercises": [
            "List 6 software development stages",
            "Define Agile from notes",
            "Map notebook to 6 stages",
            "Where does verification fit in dev cycle?",
            "Agile vs waterfall — one difference"
          ],
          "checklist": [
            "Memorised 6 dev cycle stages",
            "Mapped notebook to stages",
            "Defined Agile",
            "Know verification in testing phase",
            "Prepared Agile answer"
          ],
          "youtube": [],
          "resources": [
            {
              "title": "Agile Manifesto",
              "url": "https://agilemanifesto.org/",
              "type": "doc"
            }
          ],
          "xp": 40
        }
      ]
    },
    {
      "block": 6,
      "slot": "20:00–23:00",
      "label": "🎯 Day 2 Boss — DoE + HEEDS Oral Exam",
      "tasks": [
        {
          "id": "d2-b6-t1",
          day: 2,
          "block": 6,
          "slot": "20:00–21:30",
          "title": "DoE & HEEDS Oral Drill — Professor Trap Questions",
          "emoji": "🎤",
          "category": "ALL",
          "learn": "High-probability Prof questions Day 2: 'What is a full factorial DoE?' 'Why not screening for your antenna?' 'What is a Pareto chart?' 'Explain HEEDS workflow.' 'What is the dominant factor in your project?' 'Global vs local minimum?' 'Monte Carlo — when do you use it?' Practice PERFECT answers: Full factorial = all combinations, 4×10=40 runs. Screening = when many factors, few runs. Pareto = ranks factor impact. Dominant = wind speed (~3.5× temperature). HEEDS = automates DoE+optimisation across tools.",
          "practice": "30-minute oral drill with timer. Answer each question in ≤45 seconds with NO filler words. Record and review. Write backup answers for: 'Why full factorial?' → Only 2 factors, 40 runs is cheap for analytical model, captures all interactions.",
          "exercises": [
            "Answer: What is full factorial DoE?",
            "Answer: Dominant factor in antenna project?",
            "Answer: HEEDS vs manual Python workflow?",
            "Answer: Pareto front vs Pareto chart?",
            "Answer: When to use Monte Carlo?"
          ],
          "checklist": [
            "Completed 30-min oral drill",
            "Recorded and reviewed answers",
            "Wrote perfect answer sheet",
            "No filler words in definitions",
            "Ready for DoE/HEEDS questions"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS Review"
            },
            {
              "id": "_Rgue-7KDww",
              "title": "DoE Process Review"
            }
          ],
          "resources": [
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 60
        },
        {
          "id": "d2-b6-t2",
          day: 2,
          "block": 6,
          "slot": "21:30–23:00",
          "title": "Re-run Antenna Notebook + Annotate Every Cell",
          "emoji": "💻",
          "category": "Project",
          "learn": "Open DigitalTwin_Antenna_RUL.ipynb. Run ALL cells. Annotate in your notes what EACH cell proves: Cell 4 = RUL formula, Cell 6 = 40-run design matrix, Cell 8 = RUL vs temp curves, Cell 10 = 3D response surface, Cell 12 = sensitivity deltas, Cell 14 = Pareto bar chart, Cell 16 = operating envelope contours. Know exact numbers: RUL at (5m/s, 20°C)=7300 days=20 years. RUL at (35m/s, 65°C)=41 days. Wind/temp ratio≈3.5×. Recommended ops: wind≤12 m/s, temp≤30°C → RUL>10 years.",
          "practice": "Run notebook end-to-end. Write a 1-sentence explanation per cell. Memorise the 3 RUL sanity-check numbers. Be able to derive RUL formula from scratch on paper: RUL = L_nom / (f_wind × f_temp × 24).",
          "exercises": [
            "Run all notebook cells successfully",
            "RUL at (5,20) = ? days",
            "RUL at (35,65) = ? days",
            "Wind/temp impact ratio = ?",
            "Recommended operating point = ?"
          ],
          "checklist": [
            "Ran full notebook",
            "Annotated every cell",
            "Memorised 3 key RUL numbers",
            "Can derive formula on paper",
            "Know operating envelope recommendation"
          ],
          "youtube": [],
          "resources": [
            {
              "title": "DigitalTwin_Antenna_RUL.ipynb",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            },
            {
              "title": "DigitalTwin_Antenna_RUL.pptx",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.pptx",
              "type": "doc"
            }
          ],
          "xp": 60
        }
      ]
    }
  ]
};
