import type { DayPlan } from "./types";

export const day1: DayPlan = 
{
  "day": 1,
  "date": "2026-06-08",
  "title": "Digital Twin Foundations — Quiz Q1–12",
  "subtitle": "Prof. Nasti Exercises PDF — every definition she will trap you on",
  "theme": "Master Quiz Q1–12 verbatim before Hooke's law lab and AIAA paper",
  "blocks": [
    {
      "block": 1,
      "slot": "05:00–07:30",
      "label": "📘 Quiz Q1–Q2 — Digital Twin & Lifecycle",
      "tasks": [
        {
          "id": "d1-b1-t1",
          "day": 1,
          "block": 1,
          "slot": "05:00–06:15",
          "title": "Quiz Q1 — What Is the Digital Twin?",
          "emoji": "🔄",
          "category": "Theory",
          "learn": "Prof. Nasti's exact exam answer for Quiz Q1: 'The digital twin is the digital representation of a physical product throughout its lifecycle — the virtual product.' CRITICAL trap: students say 'a copy of the product' or 'a 3D model' — both are WRONG. The twin spans the ENTIRE lifecycle, not just design. The core is a fully coupled multi-disciplinary, multi-fidelity PARAMETRIC simulation model. Feeding real operational data into a system-level simulation creates a unique virtual model per real product. AIAA (Dec 2020) aligns: digital twin = virtual representation sufficient to meet lifecycle use cases. Prof fails anyone who says the digital twin REPLACES experimental testing — simulation cost << experimental cost, but BOTH are needed. Rolls-Royce Intelligent Engine is the canonical industrial example she cites.",
          "practice": "Write the definition on paper without looking — three attempts until word-perfect. Open the AIAA position paper executive summary and highlight every sentence containing 'lifecycle'. Record a 30-second oral answer. Compare your wording to Prof's: if you omitted 'throughout its lifecycle' or 'parametric', rewrite.",
          "exercises": [
            "Recite digital twin definition verbatim (Prof's wording)",
            "State why '3D CAD model alone' is NOT a digital twin",
            "Name the core of every digital twin (coupled parametric simulation)",
            "Explain why DT does NOT replace experimental testing",
            "Give one Rolls-Royce / AIAA lifecycle use case"
          ],
          "checklist": [
            "Watched Rolls-Royce Intelligent Engine video",
            "Read AIAA paper introduction",
            "Definition written from memory 3×",
            "Oral 30-sec answer recorded",
            "Can explain to non-expert in 60 seconds"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "Rolls-Royce — Pioneering the Intelligent Engine"
            },
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens — Digital Twin"
            },
            {
              "id": "9UpMeDO0A04",
              "title": "Digital Twin Explained — Industry Overview"
            }
          ],
          "resources": [
            {
              "title": "AIAA Digital Twin: Definition & Value (Dec 2020)",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "DigitalTwin Lectures & Exercises PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d1-b1-t2",
          "day": 1,
          "block": 1,
          "slot": "06:15–07:30",
          "title": "Quiz Q2 — Product Lifecycle Key Steps",
          "emoji": "🔁",
          "category": "Theory",
          "learn": "Quiz Q2 asks: 'What are the key steps of a product lifecycle?' Prof. Nasti lists FIVE stages in order: (1) Design & Analysis, (2) Manufacture, (3) Build & Assembly, (4) Experimental Testing, (5) Service. At EACH stage the digital twin lets you optimise and de-risk the real product by simulating behaviour for specific operating conditions. AIAA maps three twin stages onto this: AS-DESIGNED (before physical object — 3D CAD, material properties), AS-BUILT (after manufacturing — QC records, BOM), AS-USED/MAINTAINED (during operation — live sensor data). Exam trap: do NOT confuse lifecycle stages with software development stages (Planning→Maintenance) — those come on Day 2. Another trap: 'Release for Manufacture' is a design-process milestone, not a lifecycle stage in Prof's five.",
          "practice": "Draw the five-stage arrow diagram from memory. Under each stage write one digital-twin use case. Map AIAA as-designed / as-built / as-used onto Prof's five stages in a second column. Time yourself: list all five stages in ≤10 seconds.",
          "exercises": [
            "List all 5 lifecycle stages in correct order",
            "One DT use case per stage",
            "Map AIAA 3 stages to Prof's 5 stages",
            "Distinguish lifecycle vs design process",
            "Why is 'Service' the as-used stage?"
          ],
          "checklist": [
            "Drew 5-stage diagram from memory",
            "Mapped AIAA stages",
            "Listed stages in ≤10 seconds",
            "Watched Siemens lifecycle video",
            "No confusion with software dev cycle"
          ],
          "youtube": [
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens Digital Twin — Lifecycle"
            },
            {
              "id": "HftDI09LVI0",
              "title": "ASME — Digital Twin Cities"
            }
          ],
          "resources": [
            {
              "title": "AIAA Digital Twin Definition & Value",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "NASA TRL Scale",
              "url": "https://www.nasa.gov/directorates/heo/scan/engineering/technology/technology_readiness_level",
              "type": "doc"
            }
          ],
          "xp": 48
        }
      ]
    },
    {
      "block": 2,
      "slot": "07:30–10:00",
      "label": "📐 Quiz Q3–Q4 — Parametric Geometry & Accuracy",
      "tasks": [
        {
          "id": "d1-b2-t1",
          "day": 1,
          "block": 2,
          "slot": "07:30–08:45",
          "title": "Quiz Q3 — Parametric Geometry Modelling",
          "emoji": "📐",
          "category": "Theory",
          "learn": "Quiz Q3: 'Why is parametric geometry modelling important to develop the concept of digital twin?' Answer: parametric CAD lets you simulate BOTH as-designed AND as-manufactured configurations from ONE master model — change a dimension parameter and the entire geometry, mesh, and boundary conditions update automatically. Without parametric geometry you cannot efficiently explore design space (DoE), run optimisation, or capture manufacturing variations (tolerances d = 35.0 ± 0.1 mm). The digital twin must stay synchronised with the real product across lifecycle stages; parametric models are the backbone. Geometry idealisation (simplified 3D, 2D slice, 1D beam) still derives from the parametric master — never a disconnected sketch. Prof trap: parametric ≠ just '3D CAD' — it means design variables drive geometry AND downstream simulation automatically.",
          "practice": "Open NX or any parametric CAD mental model: list 5 parameters for a telecom antenna mount (bracket thickness, bolt spacing, material). Explain how changing one parameter propagates to FEA mesh. Write 3 sentences answering Q3 for the oral exam.",
          "exercises": [
            "Define parametric geometry in exam-ready prose",
            "Why needed for as-designed AND as-manufactured?",
            "Link parametric geometry to DoE/optimisation",
            "Give antenna project parameter example",
            "Parametric vs static CAD — difference?"
          ],
          "checklist": [
            "Answered Q3 in complete sentences",
            "Listed 5 antenna parameters",
            "Linked to design space exploration",
            "Understand geometry idealisation hierarchy",
            "No 'just 3D CAD' trap answer"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "Ansys — Simulation-Driven Design"
            },
            {
              "id": "z_g-ov61DNw",
              "title": "Building Ventilation CFD — Geometry Context"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Quiz Q3",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 52
        },
        {
          "id": "d1-b2-t2",
          "day": 1,
          "block": 2,
          "slot": "08:45–10:00",
          "title": "Quiz Q4 — What Is Model Accuracy?",
          "emoji": "⚖️",
          "category": "Theory",
          "learn": "Quiz Q4: 'What is the accuracy of a model?' Prof. Nasti: ACCURACY = how close model predictions are to reality — covering geometry accuracy, behavioural accuracy, and dynamic accuracy. This is DISTINCT from FIDELITY (level of detail/realism in mirroring physical assets). Trade-off: RUN TIME vs ACCURACY — higher fidelity models take longer. The product lifecycle introduces variations the twin must capture: manufacturing variations, assembly tolerances, as-designed vs as-built differences, real operating conditions, aspects of physics NOT captured by simulation. Measurement uncertainty (e.g. d = 35.0 ± 0.1) reflects manufacturing tolerance — governed by ASME PTC 19.1 for test uncertainty. Exam trap: students define accuracy as 'how detailed the model is' — that is fidelity, not accuracy.",
          "practice": "Make a two-column table: Fidelity vs Accuracy with 3 examples each. Draw virtual product ↔ real product with four variation sources. Give concrete runtime-accuracy example: coarse FEA mesh = fast but less accurate stress prediction.",
          "exercises": [
            "Define accuracy (Prof's three aspects)",
            "Define fidelity — two meanings from notes",
            "Runtime vs accuracy trade-off example",
            "What does d = 35.0 (±0.1) mean?",
            "Accuracy vs fidelity — exam trap?"
          ],
          "checklist": [
            "Table drawn from memory",
            "Virtual↔real diagram complete",
            "Oral answer ≤30 seconds",
            "Read ASME PTC 19.1 overview",
            "Never confuse fidelity with accuracy"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "Ansys — Car Crash Simulation (fidelity)"
            },
            {
              "id": "cHThndE20oI",
              "title": "Heat Transfer Simulation — Accuracy Context"
            }
          ],
          "resources": [
            {
              "title": "ASME PTC 19.1 — Test Uncertainty",
              "url": "https://www.asme.org/codes-standards/find-codes-standards/ptc-19-1-test-uncertainty",
              "type": "paper"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 3,
      "slot": "10:00–12:30",
      "label": "🔗 Quiz Q5–Q6 — Coupling & Empirical Modelling",
      "tasks": [
        {
          "id": "d1-b3-t1",
          "day": 1,
          "block": 3,
          "slot": "10:00–11:15",
          "title": "Quiz Q5 — Coupling in Physics-Based Models",
          "emoji": "🔗",
          "category": "Theory",
          "learn": "Quiz Q5: 'What does coupling mean in the context of physics-based models?' Prof. Nasti: MODEL COUPLING = 'Solving two or more models together in an iterative loop, because one's outputs are others' inputs — INTERDEPENDENT, cannot be solved independently.' Example — Smart Building HVAC: Occupancy↑ → Heat generation↑ → HVAC cooling demand↑ → Energy consumption↑. Models: Thermal, Occupancy, Airflow, Energy — coupled causal chain. Rolls-Royce seal case: seals sit at intersection of air system, thermal physics, flight loads — Prof's own ASME GT2020 paper. Exam trap: coupling ≠ simply 'connecting two software tools' (that is process automation). Coupling means physics interdependence requiring iterative solution.",
          "practice": "Draw the HVAC coupling chain with four models and directed arrows. Explain in three sentences why coupled models need iterative loops. For antenna tower digital twin: list four models that would couple (structural FEA + thermal + wind load + RUL prognostics).",
          "exercises": [
            "Define coupling with word 'interdependent'",
            "Draw HVAC coupling chain",
            "Why can't coupled models be solved independently?",
            "Coupling vs process automation — difference?",
            "Antenna project coupling example"
          ],
          "checklist": [
            "HVAC diagram from memory",
            "Definition verbatim",
            "Distinguished coupling from automation",
            "Rolls-Royce seal context noted",
            "Oral answer practiced"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "Rolls-Royce — Multi-disciplinary Engine"
            },
            {
              "id": "z_g-ov61DNw",
              "title": "Building HVAC Simulation Context"
            }
          ],
          "resources": [
            {
              "title": "ASME GT2020 — Adele Nasti Seal Design Paper",
              "url": "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2020/84188/V07CT14A023/1095072",
              "type": "paper"
            }
          ],
          "xp": 55
        },
        {
          "id": "d1-b3-t2",
          "day": 1,
          "block": 3,
          "slot": "11:15–12:30",
          "title": "Quiz Q6 — What Is an Empirical Model?",
          "emoji": "📊",
          "category": "Theory",
          "learn": "Quiz Q6: 'What is an empirical model?' Prof. Nasti: EMPIRICAL modelling starts from real-world observations and experimental data, using statistical methods to extract behaviour — curve fitting, regression, ML surrogates. Contrast PHYSICS-BASED: exploits laws of physics from first principles. Physics-based suits simple/fully-understood physics; empirical suits data-rich problems. In practice BOTH matter — even physics models need experimental validation. A model is a REPRESENTATION of reality; missed physics → calibration fixes this. Typical INPUTS: geometric parameters, operating conditions, operating envelope. Typical OUTPUTS: measurable attributes (temperature) or derived attributes (efficiency). Exam trap: empirical ≠ 'wrong' or 'less scientific' — it is the correct choice when physics is too complex or data is abundant.",
          "practice": "Classify each as physics-based or empirical: CFD, curve fitting, Arrhenius aging, neural network surrogate, Hooke's law spring. For 5G antenna project: list 3 inputs and 3 outputs. Define operating envelope.",
          "exercises": [
            "Define empirical modelling (Prof's words)",
            "Define physics-based modelling",
            "3 inputs + 3 outputs for any model",
            "What is an operating envelope?",
            "When pick empirical over physics-based?"
          ],
          "checklist": [
            "Both definitions memorised",
            "Classification exercise done",
            "Antenna I/O listed",
            "Operating envelope explained",
            "Physics vs empirical — no value judgement"
          ],
          "youtube": [
            {
              "id": "64N2BY747Cw",
              "title": "Rocket CFD — Physics-Based"
            },
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — Data-Driven Foundations"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Quiz Q6",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 48
        }
      ]
    },
    {
      "block": 4,
      "slot": "12:30–15:00",
      "label": "✅ Quiz Q7–Q8 — Validation, Calibration & V&V",
      "tasks": [
        {
          "id": "d1-b4-t1",
          "day": 1,
          "block": 4,
          "slot": "12:30–13:45",
          "title": "Quiz Q7 — Validation vs Calibration",
          "emoji": "🎯",
          "category": "V&V",
          "learn": "Quiz Q7: 'What is the difference between model validation and model calibration?' VALIDATION: checks model predictions against real-world behaviour — 'Have I done the RIGHT maths?' Aims for ACCEPTABLE delta (subjective). Most common: compare to experimental test data OR higher-fidelity model. MODEL CALIBRATION (DATA MATCHING in your notes): adjusting internal model parameters to match experimental data — incorporates missed physics. Sequence trap Prof uses: you may calibrate THEN validate, but calibration is NOT validation. Calibration tunes parameters; validation assesses whether the tuned model agrees with independent reality. Example: calibrate wind exponent 1.6 in RUL model using field failures, then validate against held-out tower data.",
          "practice": "Write three exam Q&A cards: (1) calibrate then validate — order matters? (2) Is curve fitting calibration? (Yes — parameter estimation.) (3) Can you validate without calibrating? (Yes — physics-first models.) Practice complete-sentence oral answers.",
          "exercises": [
            "Define model calibration / data matching",
            "Define model validation",
            "Calibration vs validation — key difference",
            "Can calibration replace validation?",
            "Antenna RUL calibration example"
          ],
          "checklist": [
            "Q7 answer word-perfect",
            "5 practice Q&A cards created",
            "Oral answers aloud",
            "ASME uncertainty context noted",
            "No mixing calibration with validation"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "Model Validation in Simulation"
            }
          ],
          "resources": [
            {
              "title": "ASME PTC 19.1 — Test Uncertainty",
              "url": "https://www.asme.org/codes-standards/find-codes-standards/ptc-19-1-test-uncertainty",
              "type": "paper"
            },
            {
              "title": "DigitalTwin Lectures PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 58
        },
        {
          "id": "d1-b4-t2",
          "day": 1,
          "block": 4,
          "slot": "13:45–15:00",
          "title": "Quiz Q8 — Verification vs Validation",
          "emoji": "✅",
          "category": "V&V",
          "learn": "Quiz Q8: 'What is the difference between verification and validation?' Prof. Nasti's favourite trap. VERIFICATION: 'Have I done the maths right?' — checks software implementation against expected results from the algorithm. Aims for ZERO error in code. Applies to simulation software development. VALIDATION: 'Have I done the right maths?' — checks model predictions against real-world behaviour. Examples: CFD vs wind tunnel = VALIDATION. FEA code vs analytical beam solution = VERIFICATION. Comparing two CFD codes = neither alone — context matters. V&V happens in software Testing phase of dev cycle. Prof fails vague answers — practice complete sentences.",
          "practice": "Create five V/V exam cards with answers. Record 60-second oral drill. Memory hook: Verification = code/maths correct; Validation = physics/model correct. Never say 'V&V' as one blob — Prof separates them.",
          "exercises": [
            "Verification question verbatim",
            "Validation question verbatim",
            "CFD vs wind tunnel — V or V?",
            "FEA vs analytical beam — V or V?",
            "What does ±0.1 mean in d=35.0(±0.1)?"
          ],
          "checklist": [
            "V vs V memorised word-for-word",
            "5 exam cards with answers",
            "Oral drill recorded",
            "Read ASME PTC 19.1 overview",
            "Complete sentences only"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "Model Validation in Simulation"
            },
            {
              "id": "pcLg6C_WlHg",
              "title": "Structural Simulation — V&V Context"
            }
          ],
          "resources": [
            {
              "title": "ASME PTC 19.1 — Test Uncertainty",
              "url": "https://www.asme.org/codes-standards/find-codes-standards/ptc-19-1-test-uncertainty",
              "type": "paper"
            }
          ],
          "xp": 60
        }
      ]
    },
    {
      "block": 5,
      "slot": "15:00–17:30",
      "label": "📈 Quiz Q9–Q10 — Geometry Idealisation & Curve Fitting",
      "tasks": [
        {
          "id": "d1-b5-t1",
          "day": 1,
          "block": 5,
          "slot": "15:00–16:15",
          "title": "Quiz Q9 — Geometry Idealisation",
          "emoji": "🏗️",
          "category": "Theory",
          "learn": "Quiz Q9: 'What does geometry idealisation mean and why is it useful?' Geometry idealisation = simplifying complex CAD geometry before simulation while preserving physics of interest. Levels from notes: simplified 3D solid, 2D plane strain/stress slice, 1D beam/rod idealisation — ALL must stay synchronised with master parametric CAD. Useful because: (1) reduces mesh count and runtime, (2) removes irrelevant geometric detail (fillets, logos), (3) enables appropriate physics (2D symmetry, 1D thermal rod). Exam trap: idealisation ≠ 'bad model' — it is engineering judgement. Wrong idealisation (3D when 2D sufficient) wastes compute; wrong reduction (1D when stress concentrations matter) loses accuracy. Heated rod in FEM Ch31 is deliberate 1D idealisation.",
          "practice": "Sketch antenna tower: full 3D CAD → 2D frame slice → 1D beam for deflection check. For each level state what physics is kept vs dropped. Write Q9 answer in 4 sentences for oral exam.",
          "exercises": [
            "Define geometry idealisation",
            "Name 3 idealisation levels",
            "Why useful — 3 reasons",
            "Must stay synced with master CAD?",
            "Heated rod — why 1D idealisation OK?"
          ],
          "checklist": [
            "3-level hierarchy drawn",
            "Q9 oral answer written",
            "Antenna idealisation example",
            "Linked to FEM Ch31 rod",
            "Idealisation ≠ inaccuracy trap avoided"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "Simulation Geometry Preparation"
            },
            {
              "id": "cHThndE20oI",
              "title": "1D Heat Transfer — Idealisation"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Quiz Q9",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d1-b5-t2",
          "day": 1,
          "block": 5,
          "slot": "16:15–17:30",
          "title": "Quiz Q10 — What Is Curve Fitting?",
          "emoji": "📈",
          "category": "V&V",
          "learn": "Quiz Q10: 'What is curve fitting?' CURVE FITTING = generating a curve as close to experimental data as possible — empirical model creation from observations. Used for model calibration / data matching. Connects to Hooke's law Exercise 1: plot Force vs Displacement, fit line, extract spring constant k. Prof expects you to know fitting is NOT validation — you fit parameters, then validate predictions on new data. Interpolation (within data range) vs extrapolation (outside — Quiz Q12) follows from fitted curve. Surrogate models (Day 2–3) extend curve fitting to multi-dimensional response surfaces.",
          "practice": "Using Exercise 1 spring data (0.1 N → 7.3 mm through 1.5 N → 99.8 mm, uncertainty ±0.5 mm): plot by hand, identify linear region, state that curve fitting will yield k. Preview least squares for Q11.",
          "exercises": [
            "Define curve fitting (Prof's words)",
            "Link curve fitting to calibration",
            "Exercise 1 — linear relationship expected?",
            "Fitting vs validation — difference?",
            "Connection to surrogate models"
          ],
          "checklist": [
            "Q10 definition memorised",
            "Spring data plotted on paper",
            "Linear F vs x relationship identified",
            "Linked to Exercise 1",
            "Calibration chain understood"
          ],
          "youtube": [
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — Fitting a Line to Data"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Exercise 1 Data",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "IIT Data Analysis Using Graphs",
              "url": "https://www.iit.edu/sites/default/files/2019-12/data_analysis.pdf",
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
      "label": "📐 Quiz Q11–Q12 — Least Squares & Extrapolation",
      "tasks": [
        {
          "id": "d1-b6-t1",
          "day": 1,
          "block": 6,
          "slot": "17:30–18:45",
          "title": "Quiz Q11 — Least Squares Method",
          "emoji": "📐",
          "category": "V&V",
          "learn": "Quiz Q11: 'What is the least square method and how does it work?' LEAST SQUARES estimates model parameters by MINIMISING Σ(yᵢ − f(xᵢ))² — sum of squared residuals between measured data and model predictions. Each term (yᵢ − f(xᵢ)) is a residual; squaring penalises large errors and makes calculus tractable. Used for curve fitting and model calibration. For Hooke's law: f(x) = kx, minimise Σ(Fᵢ − kxᵢ)² to find spring constant k in SI units (N/m after converting mm→m). Prof trap: least squares ≠ 'make line pass through all points' — overdetermined systems have no exact fit. Measurement uncertainty ±0.5 mm on displacement affects confidence in k.",
          "practice": "Write formula Σ(yᵢ−f(xᵢ))² and explain each symbol. Fit line by hand to three spring data points. Calculate k roughly from slope. State units conversion mm→m for SI.",
          "exercises": [
            "Write least-squares residual formula",
            "Explain why residuals are squared",
            "Apply to Hooke's law f(x)=kx",
            "Overdetermined system — meaning?",
            "Effect of ±0.5 mm uncertainty?"
          ],
          "checklist": [
            "Formula from memory",
            "Hand calculation for k",
            "Units conversion explicit",
            "Connected to Exercise 1",
            "Oral explanation ≤45 sec"
          ],
          "youtube": [
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — Linear Regression & Least Squares"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Exercise 1",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "Hooke's Law Reference",
              "url": "https://phys.org/news/2015-02-law.html",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d1-b6-t2",
          "day": 1,
          "block": 6,
          "slot": "18:45–20:00",
          "title": "Quiz Q12 — What Does Extrapolation Mean?",
          "emoji": "⚠️",
          "category": "V&V",
          "learn": "Quiz Q12: 'What does extrapolation mean?' EXTRAPOLATION = predicting OUTSIDE the range of measured/calibrated data — higher uncertainty than INTERPOLATION (within range). Dangerous for empirical models: fitted curve may diverge from true physics beyond data. Example: spring data only to 1.5 N — predicting at 5 N is extrapolation; linear Hooke assumption may fail (plastic deformation). For antenna RUL: DoE spans wind 5–35 m/s and temp 20–65°C — predicting at 40 m/s is extrapolation. Prof expects you to recommend staying inside operating envelope (wind≤12, temp≤30) rather than extrapolating.",
          "practice": "On same spring plot, mark interpolation zone (0.1–1.5 N) vs extrapolation zone (beyond 1.5 N). Write two sentences on risk. For antenna: identify when envelope plot stays inside vs outside DoE bounds.",
          "exercises": [
            "Define extrapolation vs interpolation",
            "Why extrapolation is higher risk",
            "Spring example — beyond 1.5 N",
            "Antenna RUL extrapolation example",
            "Operating envelope avoids extrapolation?"
          ],
          "checklist": [
            "Both definitions memorised",
            "Zones marked on spring plot",
            "Antenna bounds identified",
            "Risk stated in complete sentences",
            "Linked to Day 3 envelope plot"
          ],
          "youtube": [
            {
              "id": "9x9LYvErnwk",
              "title": "Simulation — Stay Within Valid Range"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Quiz Q12",
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
        }
      ]
    },
    {
      "block": 7,
      "slot": "20:00–23:00",
      "label": "🧪 Exercises 1–2 — Hooke's Law Lab & AIAA Paper",
      "tasks": [
        {
          "id": "d1-b7-t1",
          "day": 1,
          "block": 7,
          "slot": "20:00–21:30",
          "title": "Exercise 1 — Hooke's Law Spring Data Analysis",
          "emoji": "🧪",
          "category": "V&V",
          "learn": "Exercise 1 from Prof. Nasti's PDF: Physics-based vs empirical modelling — demonstrate physics via experiment, understand trends, fit curve to data. Design experiment validating Hooke's law. Data: Force (N) vs Displacement (mm) with ±0.5 mm uncertainty — 15 points from 0.1 N/7.3 mm to 1.5 N/99.8 mm. Tasks: (1) Plot data — relationship between dependent (displacement) and independent (force) variables. (2) Fit appropriate curve — predict spring constant k in SI units (N/m). Expect near-linear F–x; least squares on f(x)=kx. Convert mm to m before k calculation. This exercise IS Quiz Q10–Q11 in practice — Prof may ask k value in oral exam.",
          "practice": "Plot all 15 data points with error bars ±0.5 mm (Excel/Python/paper). Fit line via least squares. Compute k in N/m. Sanity check: R² or visual linearity. Write 2 sentences on physics-based (Hooke) vs empirical (fitted line) interpretation.",
          "exercises": [
            "Plot Force vs Displacement with uncertainty bars",
            "Identify relationship (linear expected)",
            "Fit curve and compute k in SI (N/m)",
            "Show least squares working",
            "Physics-based vs empirical — 2 sentences"
          ],
          "checklist": [
            "All 15 points plotted",
            "k calculated in N/m",
            "Least squares shown",
            "Error bars included",
            "Ready to defend k in oral exam"
          ],
          "youtube": [
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — Fitting Hooke's Law Data"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Lectures PDF — Exercise 1",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            },
            {
              "title": "Hooke's Law — phys.org",
              "url": "https://phys.org/news/2015-02-law.html",
              "type": "doc"
            },
            {
              "title": "IIT Data Analysis Using Graphs",
              "url": "https://www.iit.edu/sites/default/files/2019-12/data_analysis.pdf",
              "type": "doc"
            }
          ],
          "xp": 65
        },
        {
          "id": "d1-b7-t2",
          "day": 1,
          "block": 7,
          "slot": "21:30–23:00",
          "title": "Exercise 2 — AIAA Digital Twin White Paper",
          "emoji": "📄",
          "category": "Theory",
          "learn": "Exercise 2: Read AIAA white paper 'Digital Twin: Definition and Value' (Dec 2020). Answer: (1) What is in YOUR view a digital twin? (2) What use of digital twin could have value for a company? (3) Examples of products that could have a digital twin? Prof says language is technical — understand main ideas, not every sentence. Your exam answer for (1) must align with Quiz Q1 definition. For (2): predictive maintenance of telecom infrastructure using drone geometry + physics RUL — saves climber visits, reduces outages (~€220K industrial context). For (3): aero engines, smart buildings, racing motorcycles, centrifuges, injection molding, 5G antenna towers.",
          "practice": "Read AIAA executive summary and Section on Definition. Write full answers to all three questions in complete paragraphs. Map AIAA as-designed/as-built/as-used to your antenna project. Prepare for Lecture 2 open discussion format — Prof asks follow-ups.",
          "exercises": [
            "Answer Q1 — your view of digital twin (align with Prof)",
            "Answer Q2 — valuable company use case",
            "Answer Q3 — five product examples",
            "Reference AIAA lifecycle stages",
            "Connect to antenna RUL project"
          ],
          "checklist": [
            "AIAA paper skimmed/read",
            "Three written answers complete",
            "Antenna project mapped to AIAA",
            "TRL 4–5 justified for project",
            "Discussion-ready paragraphs"
          ],
          "youtube": [
            {
              "id": "9UpMeDO0A04",
              "title": "Digital Twin Use Cases Overview"
            },
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens — Digital Twin Value"
            }
          ],
          "resources": [
            {
              "title": "AIAA Digital Twin: Definition & Value (Dec 2020)",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "NASA TRL Scale",
              "url": "https://www.nasa.gov/directorates/heo/scan/engineering/technology/technology_readiness_level",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures PDF — Exercise 2",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 62
        }
      ]
    }
  ]
};
