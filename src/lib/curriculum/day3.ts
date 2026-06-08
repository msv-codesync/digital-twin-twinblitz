import type { DayPlan } from "./types";

export const day3: DayPlan = 
{
  day: 3,
  date: "2026-06-10",
  "title": "PCA, Project Mastery & Exam Presentation",
  "subtitle": "Handwritten p.4 PCA + your Antenna RUL project + 10-min presentation prep",
  "theme": "Close every gap — theory, code, and presentation",
  "blocks": [
    {
      "block": 1,
      "slot": "05:00–08:00",
      "label": "📊 PCA — Step by Step (handwritten p.4)",
      "tasks": [
        {
          "id": "d3-b1-t1",
          day: 3,
          "block": 1,
          "slot": "05:00–06:30",
          "title": "PCA Theory — All 6 Steps from Your Notes",
          "emoji": "📊",
          "category": "Surrogate",
          "learn": "PCA = unsupervised linear transformation identifying patterns via feature correlation. Primary uses: FEATURE EXTRACTION and DIMENSIONALITY REDUCTION ('reducing columns'). Why: avoid overfitting / too many parameters with sparse data. Mechanism: find direction of MAXIMAL VARIANCE. Your notes Step 0: NORMALIZE data. Step 1: Covariance matrix → diagonal = variance (maximize), off-diagonal = covariance (→0, decorrelate). Step 2: Find eigenvalues λ and eigenvectors v: det(T−λI)=0, Tv=λv. Step 3: Order eigenvalues descending (change reference frame). Step 4: Projection matrix P = (v⁽¹⁾, v⁽²⁾, ... v⁽ᵏ⁾), size n×k. Step 5: Transform: Old dataset (m×n) × P (n×k) = new dataset (m×k).",
          "practice": "Execute PCA by hand on a 3×2 toy dataset (3 samples, 2 features). Show covariance matrix, eigenvalues, projection. Then watch StatQuest and confirm each step matches your notes. Prof's centrifuge example: 20 vibration features → PCA1=overall energy, PCA2=imbalance, PCA3=bearing patterns.",
          "exercises": [
            "List all 6 PCA steps (0-5)",
            "What goes on covariance diagonal vs off-diagonal?",
            "Write eigenvalue equation",
            "Matrix dimensions: (m×n)×(n×k)=?",
            "Centrifuge example — 3 principal components meaning"
          ],
          "checklist": [
            "Listed all 6 PCA steps from notes",
            "Did toy PCA by hand",
            "Watched StatQuest PCA videos",
            "Know centrifuge example",
            "Can explain 'reducing columns'"
          ],
          "youtube": [
            {
              "id": "FgakZw6K1QQ",
              "title": "StatQuest — PCA Step-by-Step"
            },
            {
              "id": "HMOI_lkzW08",
              "title": "StatQuest — PCA Main Ideas in 5 Minutes"
            },
            {
              "id": "_UVHneBUBW0",
              "title": "StatQuest — PCA Full Walkthrough"
            }
          ],
          "resources": [
            {
              "title": "Eigenvalues/Eigenvectors — 3Blue1Brown",
              "url": "https://www.3blue1brown.com/lessons/eigenvalues",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d3-b1-t2",
          day: 3,
          "block": 1,
          "slot": "06:30–08:00",
          "title": "PCA Application — Vibration Monitoring Centrifuge",
          "emoji": "🔬",
          "category": "Surrogate",
          "learn": "Prof's PCA example (notes p.6): Vibration monitoring in centrifuge — 20 vibration features → PCA reduces to few principal components. PCA1 = overall vibration energy. PCA2 = imbalance or misalignment. PCA3 = bearing-related vibration patterns. This is condition monitoring for predictive maintenance — connects directly to your antenna RUL project (both are prognostics). Face recognition PCA example from lecture shows PCA works outside engineering too. Key exam answer: PCA is UNSUPERVISED — no labels needed.",
          "practice": "Write parallel between centrifuge PCA and antenna RUL: both reduce complex sensor data to actionable health indicators. Could you apply PCA to vibration data from antenna mounting brackets? Yes — extract dominant failure modes. Practice 30-second PCA explanation.",
          "exercises": [
            "Centrifuge example — 3 PC meanings",
            "Is PCA supervised or unsupervised?",
            "How does PCA connect to your project?",
            "Face recognition PCA — why it works",
            "When to use PCA vs full model?"
          ],
          "checklist": [
            "Explained centrifuge PCA example",
            "Connected PCA to prognostics/RUL",
            "Know unsupervised property",
            "Practiced 30-sec PCA explanation",
            "Compared PCA to DoE (different purposes)"
          ],
          "youtube": [
            {
              "id": "FgakZw6K1QQ",
              "title": "StatQuest — PCA Step-by-Step"
            }
          ],
          "resources": [
            {
              "title": "Jardine et al. 2006 — Machinery Diagnostics Review",
              "url": "https://doi.org/10.1016/j.ymssp.2005.09.012",
              "type": "paper"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 2,
      "slot": "08:00–11:00",
      "label": "📡 Antenna RUL Project — Physics & Formula",
      "tasks": [
        {
          "id": "d3-b2-t1",
          day: 3,
          "block": 2,
          "slot": "08:00–09:30",
          "title": "Project Story — Drone Pipeline to Digital Twin",
          "emoji": "📡",
          "category": "Project",
          "learn": "YOUR PROJECT NARRATIVE (must be fluent): Industrial context — drone-based 2D imagery → 3D photogrammetric reconstruction of telecom towers (USA telecom client, ~€220K contract). Drone gives GEOMETRY (as-built twin). Your notebook adds PHYSICS — predictive RUL model = true digital twin. Module: Modeling, Simulation and Digital Twin, Prof. Dr. Adele Nasti. Objective: predict Remaining Useful Life of 5G/6G telecom tower antenna under wind speed and operating temperature using DoE methodology (HEEDS-style MDAO). Value: predictive maintenance, fewer climber visits, reduced outages, lower OPEX.",
          "practice": "Practice 2-minute project pitch WITHOUT slides. Structure: Problem → Approach → Results → Value. Mention drone pipeline FIRST (breadth), then RUL model (depth). Prepare answer: 'What is YOUR creative contribution?' → Combined real industrial geometry pipeline with original physics-based RUL model and full DoE analysis.",
          "exercises": [
            "2-minute project pitch memorised",
            "What does drone pipeline provide?",
            "What does RUL model add?",
            "Creative contribution — your answer",
            "Business value in 3 bullet points"
          ],
          "checklist": [
            "Practiced 2-min pitch aloud",
            "Know industrial context numbers",
            "Clear problem→approach→results flow",
            "Prepared creativity answer",
            "Read full notebook intro cell"
          ],
          "youtube": [
            {
              "id": "9UpMeDO0A04",
              "title": "Digital Twin Predictive Maintenance Context"
            }
          ],
          "resources": [
            {
              "title": "Liu et al. 2021 — UAV Photogrammetry for Telecom Towers",
              "url": "https://doi.org/10.1016/j.autcon.2021.103780",
              "type": "paper"
            },
            {
              "title": "Your Notebook",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            },
            {
              "title": "Your Presentation PPTX",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.pptx",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d3-b2-t2",
          day: 3,
          "block": 2,
          "slot": "09:30–11:00",
          "title": "RUL Formula — Derive & Defend Every Term",
          "emoji": "🧮",
          "category": "Project",
          "learn": "RUL (days) = L_nom / (f_wind × f_temp × H_day). L_nom = 175,200 hours ≈ 20 years nominal antenna life. f_wind(v) = (v/5)^1.6 — wind fatigue accelerator, baseline 1.0 at v=5 m/s, exponent 1.6 from drag-fatigue scaling. f_temp(T) = 2^((T-20)/15) — Arrhenius thermal aging, rate doubles every 15°C, baseline 1.0 at 20°C. H_day = 24 (antennas operate 24/7). SANITY CHECKS: (5m/s, 20°C)→7300 days=20yr. (15m/s, 35°C)→629 days=1.7yr. (35m/s, 65°C)→41 days. Prof will ask: 'Why exponent 1.6?' → drag force scales ~v², fatigue damage accumulates nonlinearly. 'Why Arrhenius?' → standard thermal degradation model for electronics.",
          "practice": "Derive RUL formula on blank paper from memory. Calculate all 3 sanity-check values by hand (no calculator first, then verify). Write defence for each parameter choice. Prepare: 'What would you calibrate with field data?' → exponent 1.6, doubling temperature 15°C, nominal life 175200h.",
          "exercises": [
            "Write full RUL formula from memory",
            "Calculate RUL at (5, 20) by hand",
            "Calculate RUL at (35, 65) by hand",
            "Why exponent 1.6?",
            "Why Arrhenius with 15°C doubling?"
          ],
          "checklist": [
            "Derived formula on paper",
            "Hand-calculated 3 sanity checks",
            "Can defend every parameter",
            "Know calibration candidates",
            "No calculator needed for (5,20)"
          ],
          "youtube": [],
          "resources": [
            {
              "title": "Jardine — RUL Prognostics Review",
              "url": "https://doi.org/10.1016/j.ymssp.2005.09.012",
              "type": "paper"
            },
            {
              "title": "Your Notebook Cell 4",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 60
        }
      ]
    },
    {
      "block": 3,
      "slot": "11:00–14:00",
      "label": "📈 DoE Results — Sensitivity, Pareto, Operating Envelope",
      "tasks": [
        {
          "id": "d3-b3-t1",
          day: 3,
          "block": 3,
          "slot": "11:00–12:30",
          "title": "Full Factorial DoE — 40 Runs & Design Matrix",
          "emoji": "📋",
          "category": "DoE",
          "learn": "DoE setup: 4 wind levels [5, 15, 25, 35] m/s × 10 temperature levels [20, 25, ..., 65]°C = 40 design points. This is FULL FACTORIAL (all combinations). Design matrix columns: wind_ms, temp_C, rul_days, rul_years. Baseline: (5, 20)→7300 days = 20 years exactly (validates model). Worst case: (35, 65)→41 days ≈ 0.1 years. Prof may ask: 'Why 4 wind levels but 10 temperature levels?' → Temperature has finer resolution because Arrhenius is exponential — small T changes have large RUL impact at high temps.",
          "practice": "Recreate the design matrix header and first 5 rows from memory. Explain why 40 runs is manageable (analytical model, not FEA). Compare to Prof's injection molding example (3 inputs, multiple outputs).",
          "exercises": [
            "How many design points? Why?",
            "Wind levels and temp levels — list them",
            "Baseline result at (5, 20)?",
            "Worst case at (35, 65)?",
            "Why more temp levels than wind levels?"
          ],
          "checklist": [
            "Know 40-run design matrix",
            "Listed all factor levels",
            "Memorised baseline and worst case",
            "Can justify full factorial",
            "Compared to injection molding DoE"
          ],
          "youtube": [
            {
              "id": "_Rgue-7KDww",
              "title": "DoE Design Matrix — JMP"
            },
            {
              "id": "9x9LYvErnwk",
              "title": "DoE on Simulation Models"
            }
          ],
          "resources": [
            {
              "title": "Montgomery DoE Textbook",
              "url": "https://www.wiley.com/en-us/Design+and+Analysis+of+Experiments%2C+9th+Edition-p-9781119493918",
              "type": "doc"
            }
          ],
          "xp": 50
        },
        {
          "id": "d3-b3-t2",
          day: 3,
          "block": 3,
          "slot": "12:30–14:00",
          "title": "Sensitivity, Pareto & Operating Envelope",
          "emoji": "🗺️",
          "category": "Project",
          "learn": "Sensitivity method: hold temp at midpoint 42.5°C, sweep wind 5→35 m/s → ΔRUL_wind. Hold wind at midpoint 20 m/s, sweep temp 20→65°C → ΔRUL_temp. Result: wind impact ≈ 3.5× temperature impact. Pareto chart visualises this — wind bar much taller. Operating envelope: contour plot of RUL in years; recommend wind≤12 m/s AND temp≤30°C for RUL>10 years (star marker on plot). Key conclusion for presentation: WIND SPEED is dominant degradation factor — counterintuitive because engineers often focus on temperature for electronics.",
          "practice": "Redraw Pareto bar chart from memory with approximate values. Mark operating envelope safe zone. Prepare 30-second 'key findings' summary: (1) RUL prediction across design space, (2) wind dominant, (3) safe operating region defined.",
          "exercises": [
            "What is ΔRUL_wind (approx)?",
            "What is ΔRUL_temp (approx)?",
            "Wind/temp ratio?",
            "Operating envelope recommendation?",
            "Why is wind dominant counterintuitive?"
          ],
          "checklist": [
            "Redrew Pareto chart from memory",
            "Know operating envelope limits",
            "Memorised 3 key findings",
            "Can explain wind dominance",
            "Ran notebook cells 12-16"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Response Surface & Optimization"
            }
          ],
          "resources": [
            {
              "title": "Your Notebook Cells 12-16",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb",
              "type": "tool"
            }
          ],
          "xp": 55
        }
      ]
    },
    {
      "block": 4,
      "slot": "14:00–17:00",
      "label": "🎤 Presentation Structure & Literature",
      "tasks": [
        {
          "id": "d3-b4-t1",
          day: 3,
          "block": 4,
          "slot": "14:00–15:30",
          "title": "10-Minute Presentation — Slide-by-Slide Script",
          "emoji": "🎤",
          "category": "Project",
          "learn": "Exam format: 10-15 min presentation + 10 min Q&A on ALL course topics. Criteria: technical understanding, depth/breadth, creativity, literature review, presentation skills. Suggested slide flow: (1) Title + your name/matric, (2) Problem — telecom tower maintenance cost/safety, (3) Industrial context — drone pipeline, (4) Digital twin framework — as-built + as-used, (5) RUL physics model + formula, (6) DoE setup 40 runs, (7) Results — RUL curves, (8) Sensitivity/Pareto — wind dominant, (9) Operating envelope, (10) Conclusions + future work (sensor integration, ML, FEA validation), (11) References. Manage time: ~1 min/slide.",
          "practice": "Open your PPTX. Time yourself presenting. Cut anything over 12 minutes. For each slide write 3 bullet speaker notes. Practice transitions: 'Now that we've defined the model, let me show the DoE approach...'",
          "exercises": [
            "Present all slides in ≤12 minutes",
            "Speaker notes for each slide",
            "References slide with 5+ citations",
            "Future work slide honest limitations",
            "Demo ready: show notebook live or screenshots"
          ],
          "checklist": [
            "Timed presentation ≤12 min",
            "Speaker notes written",
            "References slide complete",
            "Practiced transitions",
            "Live demo or screenshots ready"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "Rolls-Royce — Example of Technical Presentation Style"
            }
          ],
          "resources": [
            {
              "title": "Exam Guidelines PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Exam_Guidelines.pdf",
              "type": "doc"
            },
            {
              "title": "Your PPTX",
              "url": "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.pptx",
              "type": "doc"
            }
          ],
          "xp": 55
        },
        {
          "id": "d3-b4-t2",
          day: 3,
          "block": 4,
          "slot": "15:30–17:00",
          "title": "References & Literature — Know Every Citation",
          "emoji": "📚",
          "category": "Project",
          "learn": "Your notebook references (know all 9): (1) AIAA 2020 Digital Twin Definition & Value, (2) Grieves & Vickers 2017 Springer, (3) Tao et al. 2019 IEEE, (4) Montgomery 2017 DoE textbook, (5) Jardine 2006 prognostics review, (6) Liu 2021 UAV photogrammetry telecom, (7) Kapteyn 2021 Nature Computational Science, (8) ISO/IEC 30173:2023, (9) Siemens HEEDS 2024. Prof tests literature review — be able to say WHAT each reference contributed in one sentence.",
          "practice": "For each of 9 references write: Author, Year, One-sentence contribution. Example: 'Montgomery 2017 — standard reference for Design of Experiments methodology used in our 40-run factorial study.' Practice: 'Why did you cite Kapteyn 2021?' → Probabilistic graphical model foundation for scalable digital twins.",
          "exercises": [
            "Name all 9 references",
            "One-sentence contribution for each",
            "Which ref supports DoE choice?",
            "Which ref supports digital twin definition?",
            "Which ref supports prognostics/RUL?"
          ],
          "checklist": [
            "Listed all 9 references from memory",
            "One-sentence contribution for each",
            "Can justify each citation",
            "No fake references",
            "Read AIAA paper executive summary"
          ],
          "youtube": [],
          "resources": [
            {
              "title": "AIAA 2020 Position Paper",
              "url": "https://www.aiaa.org/docs/default-source/uploadedfiles/issues-and-advocacy/policy-papers/digital-twin-institute-position-paper-(december-2020).pdf",
              "type": "paper"
            },
            {
              "title": "Kapteyn 2021 — Nature Comp Sci",
              "url": "https://doi.org/10.1038/s43588-021-00119-1",
              "type": "paper"
            },
            {
              "title": "ISO/IEC 30173:2023",
              "url": "https://www.iso.org/standard/77808.html",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 5,
      "slot": "17:00–20:00",
      "label": "❓ Q&A Trap Questions — Full Course Coverage",
      "tasks": [
        {
          "id": "d3-b5-t1",
          day: 3,
          "block": 5,
          "slot": "17:00–18:30",
          "title": "25 Professor Trap Questions — Perfect Answers",
          "emoji": "❓",
          "category": "ALL",
          "learn": "Prepare perfect answers for: (1) What is digital twin? (2) V vs V? (3) Model coupling? (4) Full factorial DoE? (5) HEEDS purpose? (6) Pareto chart? (7) Global vs local min? (8) Surrogate model? (9) PCA steps? (10) Monte Carlo? (11) Fidelity vs accuracy? (12) As-designed/built/used? (13) Process automation? (14) Pugh matrix? (15) Mesh convergence? (16) Agile? (17) Dominant factor in your project? (18) RUL formula? (19) Why not FEA? (20) Creative contribution? (21) Calibration limitations? (22) TRL of project? (23) Functional modelling? (24) P-diagram noise factors? (25) Does DT replace testing?",
          "practice": "Write perfect 2-3 sentence answer for each of 25 questions. No bullet fragments — complete sentences only. Quiz yourself random order. Any answer that takes >30 seconds to start = rewrite.",
          "exercises": [
            "Written perfect answer for Q1-13",
            "Written perfect answer for Q14-25",
            "Random-order self-quiz passed",
            "Each answer ≤3 sentences",
            "No hesitation on any question"
          ],
          "checklist": [
            "25 perfect answers written",
            "Random quiz passed",
            "Practiced aloud",
            "Fixed all weak answers",
            "Ready for 10-min Q&A"
          ],
          "youtube": [
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Quick Review"
            },
            {
              "id": "FgakZw6K1QQ",
              "title": "PCA — Quick Review"
            },
            {
              "id": "9CcbYQ5QA70",
              "title": "Digital Twin — Quick Review"
            }
          ],
          "resources": [
            {
              "title": "Handwritten Class Notes Photos",
              "url": "file:///Users/msv/Digital%20twin/",
              "type": "doc"
            }
          ],
          "xp": 60
        },
        {
          "id": "d3-b5-t2",
          day: 3,
          "block": 5,
          "slot": "18:30–20:00",
          "title": "Complementary Topics — Motorcycle, HVAC, Injection Molding",
          "emoji": "🔗",
          "category": "ALL",
          "learn": "Prof asks complementary questions beyond your presentation. Know these cold from class notes: Motorcycle traction FFD (4 sections + feedback loop). HVAC coupled models (occupancy→heat→cooling→energy). Injection molding DoE (temp, pressure, cooling time → weight, deviation, surface, cycle time). Logistics optimisation (time+fuel, routes, constraints). Line-on-line interference → almost no wear. Smart building digital twin. Secondary air system seals (Prof's Rolls-Royce paper). For each: 2-sentence summary ready.",
          "practice": "Write 2-sentence summary for each complementary example. Connect at least 2 back to your antenna project. Example: 'Injection molding DoE parallels our antenna study — both use factorial design to map process inputs to quality/life outputs.'",
          "exercises": [
            "2-sentence summary: motorcycle FFD",
            "2-sentence summary: HVAC coupling",
            "2-sentence summary: injection molding DoE",
            "2-sentence summary: logistics optimisation",
            "Connect 2 examples to antenna project"
          ],
          "checklist": [
            "All complementary examples summarised",
            "Connected 2+ to antenna project",
            "Reviewed handwritten notes photos",
            "Know seal design paper context",
            "No surprises in complementary Q&A"
          ],
          "youtube": [
            {
              "id": "ObGhB9CCHP8",
              "title": "Siemens — Smart Building Digital Twin"
            }
          ],
          "resources": [
            {
              "title": "Class Notes Photo 1",
              "url": "file:///Users/msv/Digital%20twin/PHOTO-2026-04-27-12-02-20%207.jpg",
              "type": "doc"
            },
            {
              "title": "Prof Nasti ASME Seal Paper",
              "url": "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2020/84188/V07CT14A023/1095072",
              "type": "paper"
            }
          ],
          "xp": 50
        }
      ]
    },
    {
      "block": 6,
      "slot": "20:00–23:00",
      "label": "🏆 Final Boss — Full Mock Exam",
      "tasks": [
        {
          "id": "d3-b6-t1",
          day: 3,
          "block": 6,
          "slot": "20:00–21:30",
          "title": "Full Mock Exam — 15 min Present + 10 min Q&A",
          "emoji": "🏆",
          "category": "ALL",
          "learn": "Simulate the real exam: Set timer 15 min. Present full slide deck aloud. Immediately follow with 10 min Q&A — have someone quiz you OR use random question list from d3-b5-t1. Grade yourself: Did you finish in time? Any typos? Did you demonstrate breadth (drone+DoE+lifecycle) AND depth (formula derivation)? Did you answer Q&A with complete sentences?",
          "practice": "Record full mock exam on phone. Watch back. Note every 'um', every vague answer, every time you looked unsure. Fix those specific gaps. Re-run mock until clean.",
          "exercises": [
            "15-min presentation completed in time",
            "10-min Q&A completed",
            "Self-graded against exam criteria",
            "Identified and fixed weak points",
            "Recording reviewed"
          ],
          "checklist": [
            "Full mock exam recorded",
            "Reviewed recording",
            "Fixed all weak points",
            "Second mock exam passed",
            "Confident for real exam"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "Technical Presentation Inspiration — Rolls-Royce"
            }
          ],
          "resources": [
            {
              "title": "Exam Guidelines",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Exam_Guidelines.pdf",
              "type": "doc"
            }
          ],
          "xp": 65
        },
        {
          "id": "d3-b6-t2",
          day: 3,
          "block": 6,
          "slot": "21:30–23:00",
          "title": "Final Review — Handwritten Notes + Rest",
          "emoji": "📖",
          "category": "ALL",
          "learn": "Last pass through ALL handwritten note photos in order (p.1→p.8). For each page, close the photo and write 5 keywords from memory. Then sleep — memory consolidation is real. You have 36 tasks, 18 hours/day × 3 days, every definition from Prof. Nasti's lectures, your full antenna project, and verified YouTube links. Trust the prep.",
          "practice": "Flip through all 9 handwritten note photos. Write 5 keywords per page from memory. Set out presentation clothes/device. Charge laptop. Notebook runs offline. You are ready.",
          "exercises": [
            "5 keywords from each of 9 note pages",
            "Presentation device charged",
            "Notebook runs without internet",
            "PPTX opens correctly",
            "Get proper sleep before exam"
          ],
          "checklist": [
            "Reviewed all handwritten notes",
            "Keywords written from memory",
            "Tech check complete",
            "Confident and rested",
            "Last attempt — you are ready"
          ],
          "youtube": [
            {
              "id": "9CcbYQ5QA70",
              "title": "You've got this — Intelligent Engine"
            },
            {
              "id": "HvF_3Rok8RY",
              "title": "HEEDS — Final confidence boost"
            }
          ],
          "resources": [
            {
              "title": "All Class Note Photos",
              "url": "file:///Users/msv/Digital%20twin/",
              "type": "doc"
            },
            {
              "title": "Prof Nasti Lecture PDF",
              "url": "file:///Users/msv/Downloads/OneDrive_1_6-8-2026/DigitalTwin_Lectures_ProfAdeleNasti.pdf",
              "type": "doc"
            }
          ],
          "xp": 50
        }
      ]
    }
  ]
};
