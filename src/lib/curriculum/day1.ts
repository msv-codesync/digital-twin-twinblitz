import type { DayPlan } from "./types";

export const day1: DayPlan = 
{
  day: 1,
  date: "2026-06-08",
  "title": "Digital Twin Theory Foundations",
  "subtitle": "Prof. Nasti class notes pages 1–2 — definitions she will grill you on",
  "theme": "Master every definition before touching HEEDS or your project",
  "blocks": [
    {
      "block": 1,
      "slot": "05:00–08:00",
      "label": "📘 Digital Twin Core (your handwritten p.1)",
      "tasks": [
        {
          "id": "d1-b1-t1",
          day: 1,
          "block": 1,
          "slot": "05:00–06:30",
          "title": "Digital Twin Definition & 5-Stage Lifecycle",
          "emoji": "🔄",
          "category": "Theory",
          "learn": "Prof. Nasti's exact definition: 'The digital twin is the digital representation of a physical product throughout its lifecycle — the virtual product.' The engineering product lifecycle has FIVE stages connected in order: (1) Design & Analysis, (2) Manufacture, (3) Build & Assembly, (4) Experimental Testing, (5) Service. At EACH stage the digital twin lets you optimise and de-risk the real product by simulating behaviour for specific operating conditions. Feeding real operational data into a system-level simulation creates a unique virtual model per real product. CRITICAL exam trap: 'The digital twin does NOT replace experimental testing.' Simulation cost << experimental cost, but both are needed. The core is a fully coupled multi-disciplinary, multi-fidelity PARAMETRIC simulation model.",
          "practice": "Draw the 5-stage lifecycle arrow diagram from memory. Under each stage write ONE digital-twin use case (as-designed calibration, as-built factory simulation, as-used health monitoring). Say the definition aloud 3× without reading. Open AIAA position paper — find the three lifecycle stages they use (as-designed, as-built, as-used/maintained) and map them to Prof's 5 stages.",
          "exercises": [
            "Recite the digital twin definition verbatim",
            "List all 5 lifecycle stages in order",
            "Name 3 as-designed / as-built / as-used use cases from AIAA paper",
            "Explain why DT does NOT replace experimental testing",
            "What sits at the core of every digital twin?"
          ],
          "checklist": [
            "Watch Rolls-Royce Intelligent Engine video",
            "Watch Siemens digital twin video",
            "Draw 5-stage lifecycle from memory",
            "Read AIAA Definition & Value paper intro",
            "Can explain DT to a non-expert in 60 seconds"
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
              "id": "HftDI09LVI0",
              "title": "ASME — Digital Twin Cities"
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
              "title": "ISO/IEC 30173 Digital Twin Terminology",
              "url": "https://www.iso.org/standard/77808.html",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d1-b1-t2",
          day: 1,
          "block": 1,
          "slot": "06:30–08:00",
          "title": "Virtual vs Real Product + Fidelity vs Accuracy",
          "emoji": "⚖️",
          "category": "Theory",
          "learn": "Your notes circle 'Accuracy VS Fidelity' — know the difference cold. FIDELITY = level of detail/realism in mirroring physical assets (can mean geometry fidelity OR model accuracy depending on context). ACCURACY = how close predictions are to reality (geometry, behaviour, dynamics). Trade-off: RUN TIME vs ACCURACY — higher fidelity models take longer. The product lifecycle introduces variations the twin must capture: manufacturing variations, assembly/build tolerances, product as-designed vs as-built, real operating conditions, aspects of physics NOT captured by simulation. Parametric geometry (CAD) lets you simulate as-designed AND as-manufactured. Geometry idealisation is always needed before simulation.",
          "practice": "Make a 2-column table: Fidelity vs Accuracy with 3 examples each. Draw virtual product ↔ real product diagram with arrows showing manufacturing variations, operating conditions, and missed physics. Explain the runtime-accuracy trade-off with a concrete example (coarse mesh = fast but less accurate).",
          "exercises": [
            "Define fidelity in YOUR words (2 meanings)",
            "Define accuracy in YOUR words",
            "Draw virtual↔real product diagram with 4 variation sources",
            "Give example of runtime vs accuracy trade-off",
            "Why is parametric geometry essential?"
          ],
          "checklist": [
            "Understand fidelity vs accuracy distinction",
            "Draw virtual vs real diagram from notes",
            "Explain runtime-accuracy trade-off aloud",
            "Read lecture slide on geometry idealisation",
            "Can answer: 'What is fidelity?' without hesitation"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "Ansys — Car Crash Simulation (fidelity example)"
            },
            {
              "id": "z_g-ov61DNw",
              "title": "Building Ventilation CFD Simulation"
            },
            {
              "id": "cHThndE20oI",
              "title": "Heat Transfer Simulation — Cup of Tea"
            }
          ],
          "resources": [
            {
              "title": "NASA Systems Engineering Handbook",
              "url": "https://www.nasa.gov/connect/ebooks/nasa-systems-engineering-handbook",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 2,
      "slot": "08:00–11:00",
      "label": "🔬 Modelling Approaches & I/O (handwritten p.2)",
      "tasks": [
        {
          "id": "d1-b2-t1",
          day: 1,
          "block": 2,
          "slot": "08:00–09:30",
          "title": "Physics-Based vs Empirical Modelling",
          "emoji": "🧮",
          "category": "Theory",
          "learn": "Two fundamental approaches: (1) PHYSICS-BASED — exploits laws of physics, starts from first principles, defines mathematical relationships governing system behaviour. (2) EMPIRICAL — starts from real-world observations/experimental data, uses statistical methods to extract behaviour. Physics-based suits simple/fully-understood physics. Empirical/data-driven suits data-rich problems (ML). In practice BOTH matter — even physics models need experimental validation. A model is a REPRESENTATION of reality; some physics may be missed or unknown → calibration fixes this. Models are characterised by INPUT-OUTPUT relationships. Typical INPUTS: geometric parameters (dimensions), operating conditions/constraints (ambient temperature), operating envelope. Typical OUTPUTS: measurable attributes (metal temperature), derived attributes (efficiency requiring post-processing).",
          "practice": "For the 5G antenna from your project: list 3 inputs and 3 outputs. For motorcycle traction control from class notes: list inputs (front/rear wheel speed, throttle, lean angle) and ideal responses. Classify each as physics-based or empirical: CFD, curve fitting, Arrhenius aging, neural network surrogate.",
          "exercises": [
            "Define physics-based modelling",
            "Define empirical modelling",
            "List 3 typical inputs and 3 outputs for any model",
            "What is an operating envelope?",
            "When would you pick empirical over physics-based?"
          ],
          "checklist": [
            "Can define both modelling types",
            "Listed I/O for antenna project",
            "Listed I/O for traction control P-diagram",
            "Understand operating envelope concept",
            "Read physics vs empirical lecture slide"
          ],
          "youtube": [
            {
              "id": "64N2BY747Cw",
              "title": "Rocket CFD Simulation"
            },
            {
              "id": "pcLg6C_WlHg",
              "title": "Bridge Aeroelastic Flutter Simulation"
            }
          ],
          "resources": [
            {
              "title": "Advanced Engineering Mathematics — Kreyszig",
              "url": "https://www.bau.edu.jo/UserPortal/UserProfile/PostsAttach/59003_3812_1.pdf",
              "type": "doc"
            }
          ],
          "xp": 45
        },
        {
          "id": "d1-b2-t2",
          day: 1,
          "block": 2,
          "slot": "09:30–11:00",
          "title": "Engineering Design Process + Model Coupling",
          "emoji": "🔗",
          "category": "Theory",
          "learn": "Design process is ITERATIVE: Idea → Conceptual Design → Preliminary Design → Detailed Design → Release for Manufacture. At each level: System → Subsystems → Components. Process automation & simulation-driven design are multidisciplinary, integrated, multi-fidelity. Risk level drives accuracy and fidelity needed. MODEL COUPLING (your notes): 'Solving two or more models together in an iterative loop, because one's outputs are others' inputs — INTERDEPENDENT, cannot be solved independently.' Example from notes — Smart Building HVAC: Occupancy↑ → Heat generation↑ → HVAC cooling demand↑ → Energy consumption↑. Models: Thermal, Occupancy, Airflow, Energy — coupled causal chain. Rolls-Royce seal example: seals sit at intersection of air system, thermal physics, flight loads.",
          "practice": "Draw the design process funnel (idea → release). Draw the HVAC coupling chain with 4 models and arrows. Explain in 3 sentences why coupled models need iterative loops. From your antenna project: what models would couple in a full tower digital twin (structural FEA + thermal + wind load + RUL prognostics)?",
          "exercises": [
            "List 4 design process stages after 'idea'",
            "Define model coupling with the word 'interdependent'",
            "Draw HVAC coupling chain from class notes",
            "Why can't coupled models be solved independently?",
            "Give one coupling example from your antenna project"
          ],
          "checklist": [
            "Drew design process stages from memory",
            "Drew HVAC coupling diagram",
            "Can define model coupling verbatim",
            "Connected coupling to antenna project",
            "Watched coupled systems video"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "Rolls-Royce — Multi-disciplinary Engine (coupling context)"
            }
          ],
          "resources": [
            {
              "title": "ASME GT2020 — Adele Nasti Seal Design Paper",
              "url": "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2020/84188/V07CT14A023/1095072",
              "type": "paper"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 3,
      "slot": "11:00–14:00",
      "label": "✅ Verification & Validation Deep Dive (exam traps)",
      "tasks": [
        {
          "id": "d1-b3-t1",
          day: 1,
          "block": 3,
          "slot": "11:00–12:30",
          "title": "Verification vs Validation — Know the Exact Wording",
          "emoji": "✅",
          "category": "V&V",
          "learn": "This is Prof. Nasti's favourite trap question. VERIFICATION: 'Have I done the maths right?' — checks software implementation against expected results from the algorithm. Aims for ZERO error in code. Applies to simulation software development. VALIDATION: 'Have I done the right maths?' — checks model predictions against real-world behaviour. Aims for ACCEPTABLE delta (subjective). Most common validation: against experimental test data OR against higher-fidelity model. Model CALIBRATION: adjusting internal model parameters to match experimental data — incorporates missed physics. DATA MATCHING = model calibration (your notes). Measurement uncertainty: e.g. d = 35.0 (±0.1) → manufacturing tolerance. ASME PTC 19.1 governs test uncertainty.",
          "practice": "Write on paper: Verification = ___ / Validation = ___. Create 3 exam-style Q&A cards. Example: 'You compare CFD to wind tunnel — is that V or V?' (Validation). 'You check FEA code against analytical beam solution — V or V?' (Verification). Practice saying answers in complete sentences — Prof fails vague answers.",
          "exercises": [
            "State verification question ('Have I done the maths right?')",
            "State validation question ('Have I done the right maths?')",
            "Define model calibration",
            "What is data matching?",
            "What does ±0.1 mean in d=35.0(±0.1)?"
          ],
          "checklist": [
            "Memorised V vs V definitions word-for-word",
            "Created 5 V/V practice questions",
            "Can explain calibration vs validation",
            "Read ASME PTC 19.1 overview",
            "Practiced oral answers aloud"
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
            }
          ],
          "xp": 55
        },
        {
          "id": "d1-b3-t2",
          day: 1,
          "block": 3,
          "slot": "12:30–14:00",
          "title": "Least Squares, Curve Fitting & Surrogate Intro",
          "emoji": "📈",
          "category": "V&V",
          "learn": "CURVE FITTING: generate curve as close to data as possible — empirical model creation. LEAST SQUARE METHOD: estimates model parameters by MINIMISING Σ(yᵢ − f(xᵢ))² — sum of squared residuals between measured data and model predictions. Used for model calibration/data matching. INTERPOLATION: prediction WITHIN measured boundaries. EXTRAPOLATION: prediction OUTSIDE known range (higher uncertainty). SURROGATE MODEL (your notes p.2 & p.4): dataset generated from high-fidelity model, approximated for faster runs. Surrogate-based OPTIMISATION: run optimisation on surrogate instead of expensive model, then return to main model for accurate solution. Geometry idealisation levels: simplified 3D, 2D slice, 1D vector — all must stay in sync with master CAD model.",
          "practice": "On paper: write the least-squares formula Σ(yᵢ−f(xᵢ))² and explain each term. Fit a line by hand to 3 data points. Explain when interpolation is safe vs when extrapolation is dangerous. For your antenna RUL model: is it physics-based or surrogate? (Physics-based analytical — but could have surrogate wrapper for full FEA).",
          "exercises": [
            "Write least-squares residual formula",
            "Define interpolation vs extrapolation",
            "Define surrogate model from your notes",
            "What is surrogate-based optimisation?",
            "Name 3 geometry idealisation levels"
          ],
          "checklist": [
            "Wrote least-squares formula from memory",
            "Can explain interpolation vs extrapolation",
            "Defined surrogate model clearly",
            "Linked to antenna RUL model type",
            "Understand geometry idealisation levels"
          ],
          "youtube": [
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — PCA Step-by-Step (math foundation)"
            }
          ],
          "resources": [
            {
              "title": "Kreyszig Ch.22 — Least Squares / Optimization",
              "url": "https://www.bau.edu.jo/UserPortal/UserProfile/PostsAttach/59003_3812_1.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 4,
      "slot": "14:00–17:00",
      "label": "🏗️ Digital Twin Stages & Integrated Design",
      "tasks": [
        {
          "id": "d1-b4-t1",
          day: 1,
          "block": 4,
          "slot": "14:00–15:30",
          "title": "As-Designed / As-Built / As-Used Stages",
          "emoji": "🏭",
          "category": "Theory",
          "learn": "Your handwritten p.6 notes three twin stages: AS-DESIGNED — before physical object exists (3D CAD, material properties). AS-BUILT — after manufacturing (manufacturing records, QC, BOM). AS-USED/MAINTAINED — during operation (live sensor data, temperature, power output). AIAA adds use cases per stage: As-designed → calibration, performance monitoring, design optimisation. As-built → factory simulation, material & process modelling. As-used → health monitoring, condition-based maintenance, failure analysis, anomaly detection, end-of-life decisions. Your antenna project spans: drone photogrammetry (as-built geometry) + RUL model (as-used predictive maintenance).",
          "practice": "Map your antenna project to all 3 stages with specific data sources. Draw a timeline: design → manufacture → deploy → operate showing what data feeds the twin at each point. Prepare 30-second explanation for Prof: 'Where does my project sit in the lifecycle?'",
          "exercises": [
            "Define as-designed, as-built, as-used",
            "List 3 use cases per stage from AIAA",
            "Map antenna project to all 3 stages",
            "What data feeds as-used twin for antenna?",
            "How does drone 3D scan fit in?"
          ],
          "checklist": [
            "Mapped project to 3 twin stages",
            "Read AIAA use case table",
            "Prepared lifecycle explanation",
            "Understand as-built vs as-designed",
            "Can explain predictive maintenance"
          ],
          "youtube": [
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens Digital Twin — Lifecycle"
            },
            {
              "id": "HftDI09LVI0",
              "title": "Digital Twin Cities — ASME"
            }
          ],
          "resources": [
            {
              "title": "AIAA Digital Twin Definition & Value",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "Grieves & Vickers 2017 — Digital Twin Springer",
              "url": "https://link.springer.com/chapter/10.1007/978-3-319-38756-4_36",
              "type": "paper"
            }
          ],
          "xp": 50
        },
        {
          "id": "d1-b4-t2",
          day: 1,
          "block": 4,
          "slot": "15:30–17:00",
          "title": "Process Automation & Integrated Design Systems",
          "emoji": "⚙️",
          "category": "HEEDS",
          "learn": "PROCESS AUTOMATION (your notes p.2): brings the design process itself into software — links multiple simulation tools via automated data transfers = INTEGRATED DESIGN SYSTEMS (simulation framework). Benefits: speed up process, improve product attributes. This is exactly what HEEDS + iSight do. Software tools from your notes: CAD=NX, FEA=Ansys/Abaqus/Nastran, contact=LS-Dyna, mesh-free=Simsolid, automation=HyperWorks, OPTIMISATION=HEEDS+iSight. HEEDS = Multi-disciplinary design exploration — Design of Experiments + optimisation + process automation in one workflow. Prof connects this to Rolls-Royce seal optimisation (ASME GT2020 paper she authored).",
          "practice": "List all 8 software tools from your class notes with their purpose. Explain process automation in one sentence. Open HEEDS getting started guide — identify: Design Space, Response Surface, Optimisation workflow. Connect: your antenna DoE notebook IS a manual version of what HEEDS automates.",
          "exercises": [
            "Define process automation from notes",
            "What are Integrated Design Systems?",
            "List HEEDS + iSight purpose",
            "Name 4 FEA tools from notes",
            "How does your notebook relate to HEEDS?"
          ],
          "checklist": [
            "Listed all software tools from notes",
            "Read HEEDS getting started guide intro",
            "Can explain process automation",
            "Connected notebook to HEEDS workflow",
            "Watched HEEDS overview video"
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
              "title": "HEEDS Product Page — Siemens",
              "url": "https://www.plm.automation.siemens.com/global/en/products/simcenter/HEEDS.html",
              "type": "doc"
            },
            {
              "title": "HEEDS Getting Started Guide PDF",
              "url": "/Users/msv/Downloads/HEEDSGettingStartedGuide.pdf",
              "type": "doc"
            },
            {
              "title": "ASME GT2020 Nasti Seal Paper",
              "url": "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2020/84188/V07CT14A023/1095072",
              "type": "paper"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 5,
      "slot": "17:00–20:00",
      "label": "📐 Functional Modeling Preview (motorcycle notes)",
      "tasks": [
        {
          "id": "d1-b5-t1",
          day: 1,
          "block": 5,
          "slot": "17:00–18:30",
          "title": "Functional Modeling + Motorcycle Traction FFD",
          "emoji": "🏍️",
          "category": "Functional",
          "learn": "FUNCTIONAL MODELLING: technique to capture key functionalities of a system and their interactions — abstraction to understand relationships and identify improvements. Your class notes — Racing Motorcycle Traction Control FFD: Goals: protect rider, communicate grip level (maximize grip crossed out!). Section 1.0 Monitor: sliding, lean angle, steering angle, brake pressure, suspension state, track position. Compare user settings: engine braking, allowed lean, interference level, power mode, suspension. Change outputs: throttle, fueling, lean, steering, brakes, suspension behaviour. Make prediction: further track layout, traction level. Feedback loop arrow from prediction back to compare/adjust. This is a FUNCTIONAL FLOW DIAGRAM — NOT software architecture.",
          "practice": "Redraw the motorcycle FFD from your handwritten notes from memory. For each of the 4 columns write 1 sentence explaining data flow. Prof may ask: 'Is functional modelling the same as software architecture?' Answer: NO — it's an abstraction of the real problem. Prepare this answer.",
          "exercises": [
            "Define functional modelling",
            "Redraw motorcycle traction FFD from memory",
            "List all 6 monitored inputs (Section 1.0)",
            "List all 6 adjustable outputs",
            "What does the prediction feedback loop do?"
          ],
          "checklist": [
            "Redrew FFD from handwritten notes",
            "Can define functional modelling",
            "Know exam trap: FFD ≠ software architecture",
            "Listed all inputs and outputs",
            "Explained feedback loop"
          ],
          "youtube": [
            {
              "id": "8u6dYTuBymA",
              "title": "Simulation-Driven Design Context"
            }
          ],
          "resources": [
            {
              "title": "NASA Systems Engineering — Functional Analysis",
              "url": "https://www.nasa.gov/connect/ebooks/nasa-systems-engineering-handbook",
              "type": "doc"
            }
          ],
          "xp": 45
        },
        {
          "id": "d1-b5-t2",
          day: 1,
          "block": 5,
          "slot": "18:30–20:00",
          "title": "P-Diagram — Rear Wheel Traction Control",
          "emoji": "📊",
          "category": "Functional",
          "learn": "P-DIAGRAM (Parameter Diagram) from your notes: Center process = 'Regulate rear wheel traction.' INPUTS (left): front wheel speed, rear wheel speed, throttle position, engine speed, lean angle. NOISE FACTORS (top): road conditions, tire wear/pressure, temperature, load, sudden inputs. CONTROL FACTORS (bottom): allowed slip, TC sensitivity level, torque reduction limits. IDEAL RESPONSE (top-right): traction maintained, smooth torque delivery, stable vehicle, minimal impact on inputs. ERROR STATE (bottom-right): excessive rear slip, jerky throttle, unstable vehicle, TC too late. 4-step operational flow from notes: (1) Sense operating conditions, (2) Evaluate traction level (calculate slip, compare threshold), (3) Control available forces (reduce input, limit power), (4) Provide system feedback (indicator, log data).",
          "practice": "Draw the complete P-diagram from memory with all 5 zones. Write the 4-step L0-L2 operational flow. Practice explaining: 'What is a noise factor vs control factor?' — Noise = uncontrolled environment; Control = what the system can tune.",
          "exercises": [
            "Draw P-diagram with all 5 zones from memory",
            "List 4-step operational flow L0-L2",
            "Define noise factors (3 examples)",
            "Define control factors (3 examples)",
            "Ideal response vs error state — 2 examples each"
          ],
          "checklist": [
            "Drew P-diagram from handwritten notes",
            "Memorised 4-step operational flow",
            "Can explain noise vs control factors",
            "Practiced oral explanation",
            "Compared P-diagram to FFD"
          ],
          "youtube": [],
          "resources": [
            {
              "title": "AIAG/VDA FMEA Handbook (P-diagram context)",
              "url": "https://www.aiag.org/quality/automotive-core-tools",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 6,
      "slot": "20:00–23:00",
      "label": "🎯 Day 1 Boss — Oral Exam Drill",
      "tasks": [
        {
          "id": "d1-b6-t1",
          day: 1,
          "block": 6,
          "slot": "20:00–21:30",
          "title": "Day 1 Flashcard Oral Exam — All Definitions",
          "emoji": "🎤",
          "category": "ALL",
          "learn": "Prof. Nasti fails vague answers on the LAST attempt. Drill every Day 1 definition as a complete sentence answer. Key phrases she expects: 'digital representation throughout lifecycle', 'does not replace experimental testing', 'Have I done the maths right?' vs 'Have I done the right maths?', 'iterative loop' for coupling, 'interdependent', 'operating envelope', 'first principles' vs 'observations from real world'. Time yourself: 60 seconds per definition. If you hesitate, restart.",
          "practice": "Record yourself answering 15 questions aloud. Play back — flag any 'um' or incomplete sentences. Write perfect answers for: What is a digital twin? What is model coupling? Verification vs validation? Physics vs empirical? What is process automation?",
          "exercises": [
            "Answer 'What is a digital twin?' in 30 seconds",
            "Answer V vs V without mixing them up",
            "Define model coupling with 'interdependent'",
            "Explain fidelity vs accuracy",
            "List 5 lifecycle stages in order"
          ],
          "checklist": [
            "Recorded 15 oral answers",
            "Fixed all hesitant definitions",
            "Wrote perfect answer sheet",
            "Practiced with timer",
            "Ready for Prof's definition traps"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "Rolls-Royce — Review intelligent engine context"
            },
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens DT — Review lifecycle"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Exam Guidelines PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Exam_Guidelines.pdf",
              "type": "doc"
            }
          ],
          "xp": 60
        },
        {
          "id": "d1-b6-t2",
          day: 1,
          "block": 6,
          "slot": "21:30–23:00",
          "title": "Day 1 Written Drill — Exercises from Lecture PDF",
          "emoji": "📝",
          "category": "ALL",
          "learn": "Complete AIAA Exercise 1 from lecture slides: (1) What digital twin use case has value for a company? (2) What products could have a digital twin? (3) Ideas for final exam. Your answer for (1): predictive maintenance of telecom infrastructure using drone-derived geometry + physics-based RUL — saves climber visits, reduces outages. For (2): aero engines, smart buildings, racing motorcycles, centrifuges, injection molding machines. Review Technology Readiness Levels — NASA 1-9 scale. Your project is roughly TRL 4-5 (validated in lab/simulation, not yet deployed at scale).",
          "practice": "Write full answers to all 3 AIAA exercise questions. Read NASA TRL page and justify TRL 4-5 for your project. Draft your 200-word value proposition paragraph for the presentation.",
          "exercises": [
            "Answer AIAA Exercise 1 three questions in writing",
            "Define TRL and place your project on scale",
            "Write 200-word 'why my use case matters' paragraph",
            "List 5 references for presentation",
            "Review exam criteria: depth, breadth, creativity"
          ],
          "checklist": [
            "Completed AIAA exercise answers",
            "Know TRL level for project",
            "Wrote use-case value paragraph",
            "Read exam guidelines completely",
            "Listed presentation references"
          ],
          "youtube": [
            {
              "id": "9UpMeDO0A04",
              "title": "Digital Twin Use Cases Overview"
            }
          ],
          "resources": [
            {
              "title": "DigitalTwin Exam Guidelines",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Exam_Guidelines.pdf",
              "type": "doc"
            },
            {
              "title": "NASA TRL Scale",
              "url": "https://www.nasa.gov/directorates/heo/scan/engineering/technology/technology_readiness_level",
              "type": "doc"
            },
            {
              "title": "DigitalTwin Lectures Exercises PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_Exercises.pdf",
              "type": "doc"
            }
          ],
          "xp": 55
        }
      ]
    }
  ]
};
