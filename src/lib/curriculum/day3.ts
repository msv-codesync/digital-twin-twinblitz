import type { DayPlan } from "./types";

export const day3: DayPlan = 
{
  "day": 3,
  "date": "2026-06-10",
  "title": "FEM, Simcenter Labs, Project & Exam Presentation",
  "subtitle": "Chapter 31 FEM + Exercises 7–12 + Antenna RUL project + PCA/surrogate",
  "theme": "Close every gap — FEA theory, hands-on exercises, project fluency, presentation",
  "blocks": [
    {
      "block": 1,
      "slot": "05:00–07:30",
      "label": "🔬 FEM Ch31 — Discretization & Element Equations",
      "tasks": [
        {
          "id": "d3-b1-t1",
          "day": 3,
          "block": 1,
          "slot": "05:00–06:15",
          "title": "FEM Discretization, Elements & Nodes",
          "emoji": "🔬",
          "category": "FEA",
          "learn": "FEM Ch31 (Prof. Nasti / Kreyszig): Unlike finite-difference pointwise grids, FEM divides domain into simply shaped ELEMENTS (1D line, 2D triangle/quad, 3D brick). Nodes = intersection points of element boundaries; sides = nodal lines/planes. DISCRETIZATION step divides solution domain — better for irregular geometry, unusual BCs, heterogeneous composition (gasket Fig 31.1). Values of unknown can be generated continuously across domain rather than isolated points. General FEM steps: (1) Discretization, (2) Element equations, (3) Assembly, (4) BCs, (5) Solution, (6) Postprocessing.",
          "practice": "Sketch 1D line element with nodes x1, x2. Sketch 2D triangular element (Fig 31.9). List all 6 FEM steps from Sec 31.1. Explain why FEM beats finite-difference for irregular gasket geometry.",
          "exercises": [
            "List 6 FEM steps (31.1)",
            "Define discretization",
            "Node vs element — difference?",
            "1D vs 2D element examples",
            "Why FEM for irregular geometry?"
          ],
          "checklist": [
            "6 steps memorised",
            "1D and 2D elements sketched",
            "Gasket example explained",
            "Ch31 slides reviewed",
            "Linked to Simcenter Exercises 7–9"
          ],
          "youtube": [
            {
              "id": "pcLg6C_WlHg",
              "title": "Structural FEM Simulation Overview"
            },
            {
              "id": "8u6dYTuBymA",
              "title": "FEA Discretization Context"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — FEM Ch31",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 52
        },
        {
          "id": "d3-b1-t2",
          "day": 3,
          "block": 1,
          "slot": "06:15–07:30",
          "title": "Shape Functions & [k]{u}={F}",
          "emoji": "📐",
          "category": "FEA",
          "learn": "ELEMENT EQUATIONS: choose approximation function — polynomials common. 1D linear: u(x) = a₀ + a₁x (Eq 31.1), must pass nodal values at x1, x2. Shape/interpolation functions (Fig 31.3) express u at any point via nodal values. Methods: direct approach, weighted residuals, variational — outcome like curve fitting to PDE. Element equations → linear system [k]{u} = {F} (Eq 31.9): [k] = element stiffness/property matrix, {u} = nodal unknowns, {F} = external nodal loads. Some systems nonlinear; Ch31 examples linear. Optimal fit minimises PDE residual in weighted sense.",
          "practice": "For 1D linear element write u(x)=a₀+a₁x and explain nodal boundary conditions. Define [k], {u}, {F} in one sentence each. Connect shape functions to Quiz Q10 curve fitting — same maths, different target (PDE not data).",
          "exercises": [
            "Write 1D linear approximation u(x)",
            "Define shape/interpolation functions",
            "Write [k]{u}={F} — define each term",
            "Three element equation methods",
            "Link to curve fitting concept"
          ],
          "checklist": [
            "Equation 31.1 written",
            "[k]{u}={F} defined",
            "Shape functions understood",
            "PDE vs data fitting noted",
            "Ready for heated rod example"
          ],
          "youtube": [
            {
              "id": "pcLg6C_WlHg",
              "title": "FEA Shape Functions Context"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Ch31 Element Equations",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 2,
      "slot": "07:30–10:00",
      "label": "🔥 FEM Ch31 — Assembly, Heated Rod, 2D, Postprocessing",
      "tasks": [
        {
          "id": "d3-b2-t1",
          "day": 3,
          "block": 2,
          "slot": "07:30–08:45",
          "title": "Assembly & 1D Heated Rod",
          "emoji": "🔥",
          "category": "FEA",
          "learn": "ASSEMBLY (Sec 31.2.3): global numbering scheme defines topology/connectivity (Table 31.1). Element equations written in global coordinates, added sequentially → total system matrix (Fig 31.7). HEATED ROD (Fig 31.4): 1D steady-state, fixed end temperatures, uniform heat source — four equal elements, five nodes. Even without PDEs in full detail, rod demonstrates all FEM steps unencumbered. Solution via LU decomposition; banded matrices for efficiency. Result (Fig 31.8): FEM captures trend, exact match AT NODES; interior discrepancy due to linear shape functions.",
          "practice": "Draw heated rod with 4 elements, 5 nodes. Write assembly concept in 3 sentences. Explain why FEM matches exact solution at nodes but not necessarily between nodes.",
          "exercises": [
            "Assembly step — 3 sentences",
            "Global numbering — why important?",
            "Heated rod setup (BCs, source)",
            "Exact at nodes — why?",
            "Linear shape function limitation"
          ],
          "checklist": [
            "Rod diagram drawn",
            "Assembly explained",
            "Fig 31.8 behaviour understood",
            "Banded matrix note taken",
            "1D application complete"
          ],
          "youtube": [
            {
              "id": "cHThndE20oI",
              "title": "Heat Transfer FEM — Heated Rod"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Ch31 Heated Rod",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d3-b2-t2",
          "day": 3,
          "block": 2,
          "slot": "08:45–10:00",
          "title": "2D Triangular Elements & Postprocessing",
          "emoji": "📊",
          "category": "FEA",
          "learn": "2D PROBLEMS (Sec 31.3): extend FEM conceptually — same steps, more bookkeeping. Triangular elements common (Fig 31.9). Linear approximate function over triangle (Fig 31.10) with interpolation functions (b)–(d). Numbering scheme critical for bandedness (Fig 31.11 heated plate). BCs and assembly more complex in 2D/3D but conceptually same. POSTPROCESSING: display tabular/graphical results; compute secondary variables (stress, flux). Fig 31.12 2D solution corresponds to prior finite-difference plate solution. Simcenter Exercises 7–9 apply 2D/3D thermal and structural postprocessing.",
          "practice": "Sketch triangular element with three nodes. List postprocessing outputs for thermal PCB (Exercise 7): temperature field, heat flux, hotspot under chip. Connect heated plate numbering (Fig 31.11) to mesh convergence study from Day 2.",
          "exercises": [
            "2D triangular element sketched",
            "Postprocessing — 3 output types",
            "Numbering affects bandedness?",
            "Secondary variables — examples",
            "Link to Simcenter thermal PCB"
          ],
          "checklist": [
            "Triangle element drawn",
            "Postprocessing list complete",
            "2D vs 1D bookkeeping noted",
            "Simcenter tutorial opened",
            "Mesh convergence linked"
          ],
          "youtube": [
            {
              "id": "z_g-ov61DNw",
              "title": "2D Thermal Simulation — Postprocessing"
            },
            {
              "id": "cHThndE20oI",
              "title": "Temperature Field Visualization"
            }
          ],
          "resources": [
            {
              "title": "Simcenter 3D Tutorials",
              "url": "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials.html#uid:index_advanced_sim_tutorial",
              "type": "doc"
            }
          ],
          "xp": 52
        }
      ]
    },
    {
      "block": 3,
      "slot": "10:00–12:30",
      "label": "🌡️ Exercises 7–8 — Simcenter Thermal & Response Dynamics",
      "tasks": [
        {
          "id": "d3-b3-t1",
          "day": 3,
          "block": 3,
          "slot": "10:00–11:15",
          "title": "Exercise 7 — Simcenter Thermal PCB Analysis",
          "emoji": "🌡️",
          "category": "FEA",
          "learn": "Exercise 7: Finite Element Analysis with Simcenter 3D. Tutorial base at Simcenter 3D tutorials index. Specific exercise: Thermal modelling — Analysing a Printed Circuit Board with a chip (xid1688538). Additional Nastran getting started PDF. Workflow: import CAD → mesh PCB + chip → thermal BCs (power dissipation hotspot) → solve → postprocess temperature field. Links Quiz Q9 geometry idealisation (chip detail vs board simplification) and Quiz Q8 V&V (correlate hotspot prediction to thermocouple test).",
          "practice": "Open Simcenter thermal PCB tutorial. Document workflow steps: geometry, mesh, materials, BCs, solve, postprocess. Even if software unavailable, write step list from tutorial PDF. Identify one verification and one validation action for PCB model.",
          "exercises": [
            "Simcenter tutorial URL bookmarked",
            "PCB thermal workflow — 6 steps",
            "Hotspot BC definition",
            "Postprocess: max temp location",
            "One V and one V action listed"
          ],
          "checklist": [
            "Tutorial steps documented",
            "Idealisation choices noted",
            "V&V actions identified",
            "Nastran PDF located",
            "Linked to Ch31 postprocessing"
          ],
          "youtube": [
            {
              "id": "cHThndE20oI",
              "title": "Thermal FEA — PCB Context"
            },
            {
              "id": "z_g-ov61DNw",
              "title": "Electronics Cooling Simulation"
            }
          ],
          "resources": [
            {
              "title": "Simcenter 3D Tutorials",
              "url": "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials.html#uid:index_advanced_sim_tutorial",
              "type": "doc"
            },
            {
              "title": "Simcenter Nastran Getting Started",
              "url": "https://docs.plm.automation.siemens.com/data_services/resources/scnastran/2020_1/help/tdoc/en_US/pdf/getting_started.pdf",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 7",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d3-b3-t2",
          "day": 3,
          "block": 3,
          "slot": "11:15–12:30",
          "title": "Exercise 8 — Response Dynamics FEM + Transient",
          "emoji": "📳",
          "category": "FEA",
          "learn": "Exercise 8: Response Dynamics with Simcenter 3D. Two parts: (1) Setting up the FEM (xid1677563), (2) Analyzing a transient event (xid1677679). Transient = time-dependent response (impact, vibration pulse) vs steady-state heated rod. FEM setup: mesh, material damping, constraints. Transient: time stepping, record displacement/acceleration history. Connects to Quiz Q5 coupling (structural ↔ thermal ↔ dynamic). Antenna tower: wind gust = transient load — steady RUL model vs transient FEA refinement.",
          "practice": "Document Exercise 8 two-part workflow. Contrast steady-state (heated rod) vs transient (response dynamics). For antenna: when would transient FEA matter vs analytical RUL?",
          "exercises": [
            "Exercise 8 Part 1 — FEM setup steps",
            "Exercise 8 Part 2 — transient analysis",
            "Steady vs transient — difference",
            "Output: time history of ?",
            "Antenna — transient relevance?"
          ],
          "checklist": [
            "Both tutorial links saved",
            "Steady vs transient explained",
            "Time history outputs listed",
            "Antenna connection made",
            "Dynamic FEA vocabulary ready"
          ],
          "youtube": [
            {
              "id": "pcLg6C_WlHg",
              "title": "Structural Dynamics FEM"
            },
            {
              "id": "64N2BY747Cw",
              "title": "Transient Simulation Context"
            }
          ],
          "resources": [
            {
              "title": "Simcenter 3D Tutorials — Response Dynamics",
              "url": "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials.html#uid:index_advanced_sim_tutorial",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 8",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 4,
      "slot": "12:30–15:00",
      "label": "🔗 Exercises 9–10 — FEA/Test Correlation & ML Onramp",
      "tasks": [
        {
          "id": "d3-b4-t1",
          "day": 3,
          "block": 4,
          "slot": "12:30–13:45",
          "title": "Exercise 9 — Correlate FEA with Test Results",
          "emoji": "🔗",
          "category": "V&V",
          "learn": "Exercise 9: Correlate structural analysis results with test solution (Simcenter tutorial xid1731225). This IS model VALIDATION (Quiz Q8): 'Have I done the right maths?' — compare FEA predictions to strain gauge / DIC / modal test data. Process: run FEA → run physical test → overlay results → quantify delta → calibrate if needed (Quiz Q7) → re-validate. ASME PTC 19.1 uncertainty on test data. Correlation metrics: MAC (modal), strain error %, Coefficient of Determination R².",
          "practice": "Write validation workflow for antenna bracket: FEA modal analysis vs shaker test. List three metrics to compare. If delta too large: which parameters to calibrate first (Young's modulus, damping, boundary conditions)?",
          "exercises": [
            "Exercise 9 workflow — 5 steps",
            "Validation vs calibration order",
            "Three correlation metrics",
            "ASME uncertainty role",
            "Antenna bracket validation plan"
          ],
          "checklist": [
            "Workflow documented",
            "Metrics listed",
            "Calibration parameters identified",
            "V&V definitions applied",
            "Tutorial link saved"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "FEA Model Validation"
            },
            {
              "id": "pcLg6C_WlHg",
              "title": "Test-Correlation Workflow"
            }
          ],
          "resources": [
            {
              "title": "Simcenter 3D Tutorials — Correlation",
              "url": "https://docs.plm.automation.siemens.com/tdoc/nx/1872/simcenter_3d_tutorials.html#uid:index_advanced_sim_tutorial",
              "type": "doc"
            },
            {
              "title": "ASME PTC 19.1 — Test Uncertainty",
              "url": "https://www.asme.org/codes-standards/find-codes-standards/ptc-19-1-test-uncertainty",
              "type": "paper"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 9",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 58
        },
        {
          "id": "d3-b4-t2",
          "day": 3,
          "block": 4,
          "slot": "13:45–15:00",
          "title": "Exercise 10 — MATLAB Machine Learning Onramp",
          "emoji": "🤖",
          "category": "ML",
          "learn": "Exercise 10: MATLAB Machine Learning Onramp (MathWorks tutorial). Introduces supervised learning workflow: import data → preprocess → select features → train model → evaluate. Connects to Quiz Q6 empirical models and Day 2 surrogate models. ML as surrogate on simulation datasets — wing aerodynamics example from notes: inputs = wing geometry, outputs = lift/drag; AI predicts CFD faster. For antenna: ML could surrogate RUL surface from 40-run DoE — but physics interpretability trade-off.",
          "practice": "Complete ML Onramp OR document its module list. Answer: 'Could ML replace your RUL formula?' — Yes with enough FEA/field data; lose physics interpretability; need validation on held-out data. List supervised vs unsupervised — PCA (Day 3 block 7) is unsupervised.",
          "exercises": [
            "ML Onramp modules listed/completed",
            "Supervised learning workflow — 5 steps",
            "ML as surrogate — pros/cons",
            "Antenna: ML on 40-run data?",
            "Supervised vs unsupervised"
          ],
          "checklist": [
            "Onramp started or modules mapped",
            "Surrogate connection made",
            "Interpretability trade-off stated",
            "Validation requirement noted",
            "Linked to Exercise 11 prognosis"
          ],
          "youtube": [
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — ML Foundations"
            },
            {
              "id": "FgakZw6K1QQ",
              "title": "StatQuest — PCA (unsupervised contrast)"
            }
          ],
          "resources": [
            {
              "title": "MATLAB Machine Learning Onramp",
              "url": "https://de.mathworks.com/learn/tutorials/machine-learning-onramp.html",
              "type": "tool"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 10",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 5,
      "slot": "15:00–17:30",
      "label": "⚡ Exercises 11–12 — Bearing Prognosis & DRL Pump",
      "tasks": [
        {
          "id": "d3-b5-t1",
          "day": 3,
          "block": 5,
          "slot": "15:00–16:15",
          "title": "Exercise 11 — Wind Turbine Bearing Prognosis",
          "emoji": "⚡",
          "category": "ML",
          "learn": "Exercise 11: Diagnostics and Degradation Models with MATLAB — Wind Turbine High-Speed Bearing Prognosis example + exponentialdegradationmodel reference. Prognostics = predict RUL from degradation signals — DIRECT parallel to your antenna RUL project. Exponential degradation model: parametric fit to health index trend. Compare physics-based antenna RUL (Arrhenius × wind fatigue) vs data-driven bearing prognosis. Both answer: 'When will it fail?' Prof may ask you to compare approaches in Q&A.",
          "practice": "Read bearing prognosis example outline. Map its workflow to antenna: sensor data → health index → degradation model → RUL forecast. Write 3 sentences comparing physics-based vs data-driven prognostics for antenna towers.",
          "exercises": [
            "Exercise 11 workflow — 4 steps",
            "exponentialdegradationmodel purpose",
            "Prognostics vs diagnostics",
            "Parallel to antenna RUL project",
            "Physics vs data-driven — 3 sentences"
          ],
          "checklist": [
            "Bearing example read",
            "Workflow mapped to antenna",
            "Comparison written",
            "Degradation model defined",
            "Q&A answer prepared"
          ],
          "youtube": [
            {
              "id": "9UpMeDO0A04",
              "title": "Predictive Maintenance — Prognostics Context"
            }
          ],
          "resources": [
            {
              "title": "MATLAB Wind Turbine Bearing Prognosis",
              "url": "https://de.mathworks.com/help/predmaint/ug/wind-turbine-high-speed-bearing-prognosis.html",
              "type": "doc"
            },
            {
              "title": "exponentialdegradationmodel",
              "url": "https://de.mathworks.com/help/predmaint/ref/exponentialdegradationmodel.html",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 11",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 52
        },
        {
          "id": "d3-b5-t2",
          "day": 3,
          "block": 5,
          "slot": "16:15–17:30",
          "title": "Exercise 12 — DRL Pong & Pump Feature Analysis",
          "emoji": "🎮",
          "category": "ML",
          "learn": "Exercise 12: Deep reinforcement learning — Playing Pong with DRL (File Exchange 87939) + pump diagnostics feature analysis (predmaint help). DRL: agent learns control policy through reward — different from supervised ML. Pump feature analysis: time-domain and frequency-domain features for fault classification — connects to PCA vibration monitoring (centrifuge example). For digital twin: DRL could optimise maintenance scheduling; feature analysis selects sensors for tower monitoring.",
          "practice": "Skim DRL Pong example — identify agent, environment, reward. Skim pump feature analysis — list 3 features (RMS, kurtosis, band energy). Write one sentence each: how DRL and feature analysis relate to digital twin operation phase.",
          "exercises": [
            "DRL — agent/environment/reward",
            "Pump — 3 diagnostic features",
            "DRL vs supervised ML",
            "Feature analysis before ML training",
            "Digital twin operation phase link"
          ],
          "checklist": [
            "DRL concepts noted",
            "3 pump features listed",
            "Contrasted with supervised ML",
            "Connected to as-used twin",
            "Exercise 12 links saved"
          ],
          "youtube": [
            {
              "id": "HMOI_lkzW08",
              "title": "StatQuest — Machine Learning Overview"
            }
          ],
          "resources": [
            {
              "title": "MATLAB DRL Pong Example",
              "url": "https://de.mathworks.com/matlabcentral/fileexchange/87939-playing-pong-with-deep-reinforcement-learning",
              "type": "tool"
            },
            {
              "title": "Pump Feature Analysis",
              "url": "https://de.mathworks.com/help/predmaint/ug/analyze-and-select-features-for-pump-diagnostics.html",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 12",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 48
        }
      ]
    },
    {
      "block": 6,
      "slot": "17:30–20:00",
      "label": "📡 Student Project — Antenna RUL Digital Twin",
      "tasks": [
        {
          "id": "d3-b6-t1",
          "day": 3,
          "block": 6,
          "slot": "17:30–18:45",
          "title": "Project Narrative — Drone Pipeline & RUL Physics",
          "emoji": "📡",
          "category": "Project",
          "learn": "YOUR PROJECT (must be fluent): Industrial context — drone-based 2D imagery → 3D photogrammetric reconstruction of telecom towers (USA telecom client, ~€220K contract). Drone delivers GEOMETRY (as-built twin). Notebook adds PHYSICS — predictive RUL = true digital twin. Module: Modelling, Simulation and Digital Twin, Prof. Dr. Adele Nasti. Objective: predict Remaining Useful Life of 5G/6G telecom tower antenna under wind speed and operating temperature using DoE methodology (HEEDS-style MDAO). Value: predictive maintenance, fewer climber visits, reduced outages, lower OPEX.",
          "practice": "Practice 2-minute pitch WITHOUT slides: Problem → Approach → Results → Value. Drone pipeline FIRST (breadth), RUL model SECOND (depth). Answer: 'What is YOUR creative contribution?' → Combined industrial geometry pipeline with original physics-based RUL model and full DoE analysis.",
          "exercises": [
            "2-minute pitch memorised",
            "Drone pipeline — what it provides",
            "RUL model — what it adds",
            "Creative contribution answer",
            "Business value — 3 bullets"
          ],
          "checklist": [
            "Pitch practiced aloud",
            "Industrial context numbers known",
            "Problem→approach→results flow",
            "Creativity answer ready",
            "Notebook intro reviewed"
          ],
          "youtube": [
            {
              "id": "9UpMeDO0A04",
              "title": "Digital Twin Predictive Maintenance"
            },
            {
              "id": "9CcbYQ5QA70",
              "title": "Rolls-Royce — Industrial DT Example"
            }
          ],
          "resources": [
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            },
            {
              "title": "Liu et al. 2021 — UAV Photogrammetry Telecom",
              "url": "https://doi.org/10.1016/j.autcon.2021.103780",
              "type": "paper"
            }
          ],
          "xp": 58
        },
        {
          "id": "d3-b6-t2",
          "day": 3,
          "block": 6,
          "slot": "18:45–20:00",
          "title": "RUL Formula, 40-Run DoE, Envelope & 9 References",
          "emoji": "🧮",
          "category": "Project",
          "learn": "RUL (days) = L_nom / (f_wind × f_temp × H_day). L_nom = 175,200 h ≈ 20 yr. f_wind(v) = (v/5)^1.6. f_temp(T) = 2^((T−20)/15). H_day = 24. SANITY: (5,20)→7300 d = 20 yr; (15,35)→629 d; (35,65)→41 d. DoE: 4 wind [5,15,25,35] × 10 temp [20…65] = 40 runs FULL FACTORIAL. Sensitivity: wind ≈ 3.5× temp. Operating envelope: wind≤12 m/s AND temp≤30°C → RUL>10 yr. NINE REFERENCES: (1) AIAA 2020, (2) Grieves & Vickers 2017, (3) Tao IEEE 2019, (4) Montgomery DoE, (5) Jardine prognostics, (6) Liu UAV photogrammetry, (7) Kapteyn 2021, (8) ISO/IEC 30173, (9) Siemens HEEDS 2024.",
          "practice": "Derive RUL formula on blank paper. Hand-calculate (5,20) and (35,65). Run notebook cells 4–16. For each of 9 references write one-sentence contribution. Build references slide.",
          "exercises": [
            "RUL formula from memory",
            "RUL at (5,20) and (35,65) by hand",
            "40-run matrix — factor levels",
            "Wind/temp ratio ≈ 3.5×",
            "9 references with one-line contribution"
          ],
          "checklist": [
            "Formula derived on paper",
            "Sanity checks verified",
            "Notebook run complete",
            "9 refs with contributions",
            "Envelope limits memorised"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Response Surface Review"
            },
            {
              "id": "_Rgue-7KDww",
              "title": "DoE — 40-Run Factorial"
            }
          ],
          "resources": [
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            },
            {
              "title": "AIAA 2020 Position Paper",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "Kapteyn 2021 — Nature Comp Sci",
              "url": "https://doi.org/10.1038/s43588-021-00119-1",
              "type": "paper"
            }
          ],
          "xp": 65
        }
      ]
    },
    {
      "block": 7,
      "slot": "20:00–23:00",
      "label": "📊 PCA, Surrogate & Final Mock Exam",
      "tasks": [
        {
          "id": "d3-b7-t1",
          "day": 3,
          "block": 7,
          "slot": "20:00–21:30",
          "title": "PCA — Six Steps from Prof's Notes",
          "emoji": "📊",
          "category": "Surrogate",
          "learn": "PCA = unsupervised linear transformation identifying patterns via feature correlation. Uses: FEATURE EXTRACTION and DIMENSIONALITY REDUCTION ('reducing columns'). Avoid overfitting with sparse data. Mechanism: direction of MAXIMAL VARIANCE. Step 0: NORMALIZE data. Step 1: Covariance matrix — diagonal = variance (maximize), off-diagonal = covariance (→0, decorrelate). Step 2: Eigenvalues λ and eigenvectors v: det(T−λI)=0, Tv=λv. Step 3: Order eigenvalues descending. Step 4: Projection matrix P = (v⁽¹⁾…v⁽ᵏ⁾), size n×k. Step 5: Transform: (m×n) × (n×k) = (m×k). Centrifuge example: 20 vibration features → PC1=energy, PC2=imbalance, PC3=bearing.",
          "practice": "Execute PCA by hand on 3×2 toy dataset. List all 6 steps (0–5). Watch StatQuest and confirm each step. Practice 30-second PCA explanation. Exam answer: PCA is UNSUPERVISED — no labels needed.",
          "exercises": [
            "List PCA steps 0–5",
            "Covariance diagonal vs off-diagonal",
            "Eigenvalue equation",
            "Matrix dimensions (m×n)×(n×k)",
            "Centrifuge 3 PC meanings"
          ],
          "checklist": [
            "6 steps from memory",
            "Toy PCA by hand",
            "StatQuest videos watched",
            "Unsupervised property known",
            "Connected to vibration monitoring"
          ],
          "youtube": [
            {
              "id": "FgakZw6K1QQ",
              "title": "StatQuest — PCA Step-by-Step"
            },
            {
              "id": "HMOI_lkzW08",
              "title": "StatQuest — PCA Main Ideas"
            },
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — PCA Full Walkthrough"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — PCA Notes",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d3-b7-t2",
          "day": 3,
          "block": 7,
          "slot": "21:30–23:00",
          "title": "Surrogate Models & Full Mock Exam",
          "emoji": "🏆",
          "category": "ALL",
          "learn": "SURROGATE MODEL (notes p.2 & p.4): dataset from high-fidelity model, approximated for faster runs. SURROGATE-BASED OPTIMISATION: optimise on surrogate (cheap), validate on high-fidelity model. Hierarchy: FEA (slow) → analytical RUL (medium) → response surface/ML (fast). AI in engineering: wing aerodynamics — ML predicts CFD lift/drag. FINAL MOCK EXAM: 15 min present + 10 min Q&A on ALL topics. Criteria: depth, breadth, creativity, literature, presentation. Drill 25 trap questions from Days 1–3. Presentation ≤12 min, 11 slides, demo notebook.",
          "practice": "Draw surrogate fidelity hierarchy for antenna project. Run full mock exam: present aloud 15 min, Q&A 10 min from random trap list. Record, review, fix weak answers. Sleep — memory consolidation matters.",
          "exercises": [
            "Define surrogate model",
            "Define surrogate-based optimisation",
            "Draw fidelity hierarchy for antenna",
            "15-min mock presentation timed",
            "10-min Q&A — 5 random trap Qs answered"
          ],
          "checklist": [
            "Surrogate hierarchy drawn",
            "Mock exam recorded",
            "Weak answers fixed",
            "Presentation ≤12 min",
            "Confident for exam"
          ],
          "youtube": [
            {
              "id": "64N2BY747Cw",
              "title": "High-Fidelity CFD Base Model"
            },
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS Surrogate Optimization"
            },
            {
              "id": "9CcbYQ5QA70",
              "title": "Presentation Inspiration — Rolls-Royce"
            }
          ],
          "resources": [
            {
              "title": "Your Antenna RUL Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            },
            {
              "title": "AIAA Digital Twin Definition & Value",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 65
        }
      ]
    }
  ]
};
