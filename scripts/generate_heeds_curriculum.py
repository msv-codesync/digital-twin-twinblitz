#!/usr/bin/env python3
"""Generate src/lib/curriculum/heeds-day.ts — 18hr HEEDS MDO scratch-to-hero course."""
import json
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "src/lib/curriculum/heeds-day.ts"

HEEDS_PDF = "https://www.plm.automation.siemens.com/global/en/products/simcenter/HEEDS.html"
MSU_LAB = "https://www.egr.msu.edu/classes/me475/averillr/Lab1/HEEDS.pdf"
SIEMENS_DOCS = "https://docs.sw.siemens.com/documents/101442/105714"

YT = {
    "heeds": ("HvF_3Rok8RY", "HEEDS — Multi-Disciplinary Design Exploration"),
    "isight": ("SwgtZp4Jcjs", "Isight — Process Automation Overview"),
    "doe": ("_Rgue-7KDww", "JMP — Design of Experiments Process"),
    "opt": ("9x9LYvErnwk", "DoE + Optimization in Simulation"),
}

def yt(k):
    i, t = YT[k]
    return {"id": i, "title": t}

def res(title, url, type_="doc"):
    return {"title": title, "url": url, "type": type_}

def task(id_, block, slot, title, emoji, learn, practice, exercises, checklist, youtube, resources, xp):
    return {
        "id": id_, "day": 1, "block": block, "slot": slot, "title": title, "emoji": emoji,
        "category": "HEEDS", "learn": learn, "practice": practice, "exercises": exercises,
        "checklist": checklist, "youtube": youtube, "resources": resources, "xp": xp,
    }

def block(n, slot, label, tasks):
    return {"block": n, "slot": slot, "label": label, "tasks": tasks}

SLOTS = [
    ("05:00–07:30", "05:00–06:15", "06:15–07:30"),
    ("07:30–10:00", "07:30–08:45", "08:45–10:00"),
    ("10:00–12:30", "10:00–11:15", "11:15–12:30"),
    ("12:30–15:00", "12:30–13:45", "13:45–15:00"),
    ("15:00–17:30", "15:00–16:15", "16:15–17:30"),
    ("17:30–20:00", "17:30–18:45", "18:45–20:00"),
    ("20:00–22:30", "20:00–21:15", "21:15–22:30"),
    ("22:30–23:00", "22:30–22:45", "22:45–23:00"),
]

plan = {
    "day": 1,
    "date": "2026-06-08",
    "title": "HEEDS MDO — Scratch to Hero",
    "subtitle": "Full Getting Started Guide · all 8 examples · 18 hours",
    "theme": "Install → UI → Process Automation → Exploration → Examples 1–8 → Prof. Nasti exam-ready",
    "blocks": [
        block(1, SLOTS[0][0], "🚀 Block 1 — Install HEEDS & Learn the UI",
            [
                task("heeds-b1-t1", 1, SLOTS[0][1], "Install HEEDS MDO + Create Your First Project Folder", "💿",
                    "HEEDS® MDO 2404 is Siemens' multidisciplinary design optimization package. Prof. Nasti's Exercise 5 requires HEEDS installed per campusnet guidelines. INSTALL PATHS: Windows default C:\\HEEDS\\MDO\\Version\\ · Linux /opt/HEEDS/MDO/Version/. EXAMPLES live in Examples/ subfolder (Function, Beam, Truss, Spring, etc.). BEFORE ANY PROJECT: create a dedicated write-permission folder — each .heeds project saves alongside tagged files. Launch HEEDS → File → New → save as FunctionEx.heeds. TWO HIGH-LEVEL TASKS in every project: (1) Process Automation = Process + Parameters + Tagging, (2) Exploration = Study + Run. The tab bar shows: File | Process | Parameters | Tagging | Study | Run.",
                    "On campus PC: open HEEDS from Start menu. Create folder C:\\Users\\You\\HEEDS_Projects\\Day1\\. Launch HEEDS → File → New → Save As FunctionEx.heeds in that folder. Tour the UI: left tree (Process_1 → Analysis_1), center Process View, Ribbon tools. Screenshot each tab name. If no license: read PDF pages 15–27 and write the 6 tab names from memory.",
                    ["Find HEEDS install path on your machine", "Create HEEDS_Projects/Day1 folder", "Save blank project FunctionEx.heeds", "Name the 2 high-level HEEDS tasks", "Name all 6 main tabs"],
                    ["HEEDS launches successfully", "Project folder created", "FunctionEx.heeds saved", "UI screenshot or sketch done", "Watched HEEDS overview video"],
                    [yt("heeds")],
                    [res("HEEDS Getting Started Guide (class PDF)", "/heeds/HEEDSGettingStartedGuide.pdf", "doc"),
                     res("Siemens HEEDS Product Page", HEEDS_PDF, "doc"),
                     res("MSU HEEDS Lab Guide", MSU_LAB, "doc")], 55),
                task("heeds-b1-t2", 1, SLOTS[0][2], "HEEDS Vocabulary — Variables, Responses, Studies", "📖",
                    "MASTER THIS VOCABULARY (Prof. Nasti will use these exact words): VARIABLE = design parameter HEEDS changes (continuous, discrete, categorical). RESPONSE = output extracted from analysis files (mass, stress, deflection). BASELINE DESIGN = your starting point — input/output files before optimization. FEASIBLE DESIGN = meets all constraints (may be poor). OBJECTIVE = what you maximize or minimize. CONSTRAINT = limit (≥ or ≤). STUDY TYPES: (1) Parameter Optimization, (2) DOE — Screening/Response Surface, (3) Robustness, (4) Reliability, (5) Evaluation. PERFORMANCE RATING = HEEDS score during optimization only (not DOE). DESIGN SPACE = combined range of all variables. PROCESS AUTOMATION links analysis executable + input file + output file via TAGGING.",
                    "Make flashcards: Variable / Response / Baseline / Feasible / Objective / Constraint / Study type. For each study type write one sentence when you'd use it. Connect to your antenna notebook: variables=wind,temp · responses=RUL_days · study=DOE full factorial.",
                    ["Define Variable vs Response", "Define baseline design", "List 5 study types", "What is tagging?", "Map antenna project to HEEDS vocabulary"],
                    ["10 flashcards written", "Antenna mapping done", "Can explain feasible vs optimal", "Know performance rating applies only to optimization", "Read HEEDS guide Part 1 intro"],
                    [yt("heeds"), yt("isight")],
                    [res("HEEDS Guide Part 1 — Intro", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 50),
            ]),
        block(2, SLOTS[1][0], "🎯 Block 2 — Optimization Theory (Guide Part 1)",
            [
                task("heeds-b2-t1", 2, SLOTS[1][1], "Define an Optimization Problem in HEEDS Terms", "🎯",
                    "OPTIMIZATION = making a design as good as possible under constraints. Every HEEDS problem needs: (1) OBJECTIVE(S) — maximize or minimize (strength, minimize weight/cost). (2) CONSTRAINTS — feasibility limits (stress ≤ allowable, mass ≤ X kg). (3) BASELINE DESIGN — reference point. (4) VARIABLES — what HEEDS changes within min/max bounds. TRAP: objective and constraint can SWAP — minimize weight WITH constraint on load capacity vs maximize load WITH constraint on weight. Both valid. FEASIBLE ≠ OPTIMAL. HEEDS searches hundreds of designs overnight using hybrid search algorithms — manual iteration cannot match this.",
                    "Write optimization problem for coil spring: OBJECTIVE = minimize mass. CONSTRAINT = shear_stress ≤ allowable AND deflection ≤ limit. VARIABLES = coil_diam, wire_diam, num_coils. Repeat for your antenna: OBJECTIVE = maximize RUL. CONSTRAINTS = wind ≤ 12 m/s, temp ≤ 30°C.",
                    ["4 parts of every optimization problem", "Feasible vs optimal — explain", "Spring optimization problem written", "Antenna optimization problem written", "Why manual search fails"],
                    ["Written both optimization problem statements", "Understand objective/constraint swap", "Read HEEDS guide p.2-5", "Can answer Prof's optimization definition"],
                    [yt("opt")],
                    [res("Kreyszig Ch.22 — Gradient Method", "https://www.bau.edu.jo/UserPortal/UserProfile/PostsAttach/59003_3812_1.pdf", "doc")], 55),
                task("heeds-b2-t2", 2, SLOTS[1][2], "Process Automation Deep Dive — Process · Parameters · Tagging", "⚙️",
                    "PROCESS AUTOMATION has 3 sub-tasks: (1) PROCESS — link executable (function.exe, spring.exe) + command options (spring.in spring.out) + input/output files. (2) PARAMETERS — define Variables (min, baseline, max) and Responses (tagged from output). Variable types: Continuous, Discrete, Categorical. (3) TAGGING — connect variable names to specific cells/lines in input file; connect response names to output file values. HEEDS uses baseline input file as TEMPLATE — each run copies and modifies tagged values. Without correct tagging, HEEDS changes nothing and every run gives identical results. SAVE PROJECT after each sub-task.",
                    "Open HEEDS guide pages 7-11. Draw flowchart: Baseline files → Process (exe) → Parameters (vars/responses) → Tagging (file links) → Study → Run → HEEDS POST. List the 8 steps every example follows: New project → Process → Parameters → Tagging → Study → Run → POST → Log files.",
                    ["3 sub-tasks of Process Automation", "What does tagging do?", "Variable types in HEEDS", "8-step workflow for every example", "Why save after each step?"],
                    ["Drew Process Automation flowchart", "Listed 8-step workflow", "Understand tagging purpose", "Read guide pages 7-11"],
                    [yt("heeds")],
                    [res("HEEDS Guide — Process Automation", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 55),
            ]),
        block(3, SLOTS[2][0], "📐 Block 3 — Example 1: Simple Function (Full 8 Steps)",
            [
                task("heeds-b3-t1", 3, SLOTS[2][1], "Example 1 Steps 1–4 — Function.exe Process Setup", "📐",
                    "EXAMPLE 1: Simple Function Problem. Test function f(x) piecewise — global minimum at x=3.661925, f(x)=-2.44985. FILES in Examples/Function/: function.in, function.out, function.exe. STEP 1: New project → save FunctionEx.heeds. STEP 2 PROCESS: Analysis_1 → Execution command = function.exe → Files tab add function.in + function.out (click Continue without auto-tagging). STEP 3 PARAMETERS: Add continuous variable x, min=0, baseline=5, max=6. Add response f tagged from output. STEP 4 TAGGING: Open function.in → tag x to the input value cell. Open function.out → tag response f to output value.",
                    "DO THIS IN HEEDS if licensed: complete Steps 1-4 for Function example. If no license: open Examples/Function/function.in and function.out in text editor — identify which line holds x and which holds f(x). Write exact tagging locations. Calculate f(5) by hand from piecewise formula.",
                    ["Example 1 file locations", "Execution command for function.exe", "Variable x bounds 0-6", "Global minimum x value from guide", "What gets tagged in .in and .out?"],
                    ["Steps 1-4 completed or documented", "Tagged file locations identified", "Global min x memorized", "Project saved as FunctionEx.heeds"],
                    [yt("heeds")],
                    [res("HEEDS Guide Example 1", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 60),
                task("heeds-b3-t2", 3, SLOTS[2][2], "Example 1 Steps 5–8 — Optimize, Run, HEEDS POST", "📊",
                    "STEP 5 STUDY: Study tab → Study type = Parameter Optimization. Set objective: minimize f. Set variable bounds. Choose search algorithm (defaults OK for learning). STEP 6 RUN: Run tab → click Run → monitor variable/response plots live. STEP 7 HEEDS POST: After run → open POST → History plot (convergence), 2D Relation, 3D Relation, Parallel coordinates, Design Table. Best design highlighted vs baseline (black). STEP 8: Review log files in project folder. VERIFY: optimized x should approach 3.662 and f approach -2.45. If not — check tagging.",
                    "Run optimization (or simulate expected result). In HEEDS POST generate: History, 2D Relation, Parallel plot. Screenshot best design vs baseline. Write 3 sentences interpreting History plot: 'HEEDS converged because...'",
                    ["Study type for Example 1?", "Expected optimal x and f(x)", "3 plot types in HEEDS POST", "Best design vs baseline colors", "What if results don't converge?"],
                    ["Study defined (optimization)", "Run completed or simulated", "3 POST plots reviewed", "Results match expected minimum", "Log files located"],
                    [yt("heeds")],
                    [res("Siemens HEEDS Documentation", SIEMENS_DOCS, "doc")], 60),
            ]),
        block(4, SLOTS[3][0], "🔩 Block 4 — Example 2: Cantilever Beam",
            [
                task("heeds-b4-t1", 4, SLOTS[3][1], "Example 2 — Beam Process, Parameters, Tagging", "🔩",
                    "EXAMPLE 2: Cantilevered Beam. FILES in Examples/Beam/. Objective: minimize beam weight subject to stress/deflection constraints. Variables include beam width, height, length (discrete variable set for baseline demonstrated in guide). Responses: mass, stress, deflection extracted via tagging. KEY NEW CONCEPT: DISCRETE VARIABLE SET — define specific allowed values rather than continuous range. Process identical to Example 1 but with structural analysis executable. Tagging beam.in with width, height, length; beam.out with mass, stress, deflection.",
                    "Follow guide Steps 1-4 for Cantilever Beam. Document all variables with min/baseline/max table. Note difference from Example 1: structural responses + discrete variable option. Sketch cantilever loading diagram.",
                    ["Example 2 folder path", "List beam variables", "List beam responses", "What is discrete variable set?", "How is beam diff from function?"],
                    ["Beam Steps 1-4 done or documented", "Variable table written", "Discrete variable concept understood", "beam.in/out tagging locations found"],
                    [yt("heeds")],
                    [res("HEEDS Guide Example 2 — Cantilever Beam", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 55),
                task("heeds-b4-t2", 4, SLOTS[3][2], "Example 2 — Optimize Beam + POST Parallel Plot", "📈",
                    "STEPS 5-8 Beam: Optimization study with constraints stress ≤ allowable, deflection ≤ limit, objective minimize mass. HEEDS POST: Parallel plot shows multiple designs — feasible in green, infeasible in red, baseline black, optimum highlighted. Review log files for convergence history. EXAM TIP: Prof may ask 'How does HEEDS show infeasible designs?' — Parallel plot and Constraint Violation plot.",
                    "Complete beam optimization run. Generate Parallel plot and Constraint Violation plot in POST. Identify: which variable most affects mass? (preview of sensitivity/DoE).",
                    ["Beam constraints in study", "Colors on Parallel plot", "Objective for beam example", "What does infeasible mean in POST?", "Review log file purpose"],
                    ["Beam optimization run complete", "Parallel plot generated", "Infeasible vs feasible identified", "Log file reviewed"],
                    [yt("opt")],
                    [res("HEEDS Guide Example 2 Steps 5-8", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 55),
            ]),
        block(5, SLOTS[4][0], "🏗️ Block 5 — Example 3: 3-Bar Truss + Animation",
            [
                task("heeds-b5-t1", 5, SLOTS[4][1], "Example 3 — 3-Bar Truss Setup (Steps 1–5)", "🏗️",
                    "EXAMPLE 3: 3-Bar Truss Mechanism in Examples/Truss/. Classic structural optimization — minimize weight of 3-bar truss subject to stress constraints at nodes. Variables: cross-sectional areas A1, A2, A3. Responses: weight, stresses. Multi-variable tagging in truss.in. Study: parameter optimization. This example teaches multi-variable structural problems — foundation for real FEA-linked HEEDS workflows (Ansys, Nastran, Simcenter).",
                    "Complete Truss Steps 1-5. Document 3 areas and 3 stress responses. Draw truss geometry from guide figure. Connect to lecture: this is component-level optimization before system-level digital twin.",
                    ["Truss example folder", "3 variables (areas)", "Stress responses", "Truss geometry sketched", "Link to FEA workflow"],
                    ["Truss Steps 1-5 complete", "Geometry drawn", "All tags documented"],
                    [yt("heeds")],
                    [res("HEEDS Guide Example 3 — 3-Bar Truss", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 55),
                task("heeds-b5-t2", 5, SLOTS[4][2], "Example 3 — Run Truss + Animate in POST", "🎬",
                    "STEP 8 SPECIAL: Animate the plot in HEEDS POST — visualizes truss deformation across designs. Steps 6-7: Run optimization, open POST, use animation feature. This is unique to truss example — shows design evolution graphically. EXAM: 'What does HEEDS POST animation show?' — how design geometry/response changes across iterations.",
                    "Run truss study. In POST: animate plot. Screenshot first, middle, last frame. Write caption for each.",
                    ["Animation feature in POST", "Run converged?", "Best vs baseline weight reduction", "3 animation frames captured"],
                    ["Truss run complete", "Animation viewed", "Screenshots saved", "Weight reduction noted"],
                    [yt("heeds")],
                    [res("HEEDS Guide Example 3 Step 8 Animation", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 55),
            ]),
        block(6, SLOTS[5][0], "🌀 Block 6 — Example 4: Coil Spring DoE (Prof. Exercise 5!)",
            [
                task("heeds-b6-t1", 6, SLOTS[5][1], "Example 4 — Coil Spring DoE Setup (CRITICAL FOR EXAM)", "🌀",
                    "★ PROF. NASTI EXERCISE 5 ★ Example 4: DOE Study of Coil Spring — Examples/Spring/. PROBLEM: 10 lb force on coil spring. VARIABLES (factors): coil_diam (0.25–1.3, baseline 1), wire_diam (0.05–0.2, baseline 0.1), num_coils (2–15, baseline 5). RESPONSES: deflection, shear_stress, frequency, mass. EQUATIONS in spring.exe: deflection=80·coil_diam³·num_coils/(wire_diam⁴·G); shear_stress=8k·10·coil_diam/(π·wire_diam³); frequency=88248·wire_diam/(2π·num_coils·coil_diam²); mass=¼(2+num_coils)π²·coil_diam·wire_diam²·7.38e-4. PROCESS: spring.exe, command spring.in spring.out. TAG spring.in cells A4,A6,A8 for all 3 variables. TAG spring.out for all 4 responses.",
                    "BUILD SpringEx.heeds — complete Steps 1-4 exactly as guide. Copy variable table into notes. Run spring.exe manually once — verify spring.out values. This is the EXACT workflow Prof expects you to describe in exam.",
                    ["3 spring variables with bounds", "4 spring responses", "spring.exe command line", "Tagging cells in spring.in", "Full factorial 2-level = how many runs?"],
                    ["SpringEx.heeds Steps 1-4 done", "Variable table copied", "Manual spring.exe run verified", "Tagging screenshots"],
                    [yt("doe"), yt("heeds")],
                    [res("HEEDS Guide Example 4 — Coil Spring", "/heeds/HEEDSGettingStartedGuide.pdf", "doc"),
                     res("Arora — Introduction to Optimum Design", "https://www.elsevier.com/books/introduction-to-optimum-design/arora/978-0-12-373602-0", "doc"),
                     res("Prof Exercise 5 in Lectures PDF", "/heeds/DigitalTwin_Lectures_Exercises.pdf", "doc")], 65),
                task("heeds-b6-t2", 6, SLOTS[5][2], "Example 4 — Run DOE + Response Surface in POST", "📊",
                    "STEP 5 STUDY TYPE: DOE — Screening/Response Surface (NOT optimization!). Methods: add all 3 factors A,B,C. Sampling: Full factorial 2-level → 2³ = 8 runs. NO performance plot during DOE (performance = optimization only). STEP 6 RUN. STEP 7 POST: Main effects plots, interaction plots, 3D response surface, Pareto of factor influence. MAP TO ANTENNA: your 4×10 factorial = 40 runs — same logic, more factors levels. Prof asks: 'Why DoE before optimization?' — identify key drivers first, reduce blind search.",
                    "Run spring DOE (8 runs). In POST: generate Main Effects for mass and shear_stress. Identify dominant factor. Compare to antenna sensitivity (wind > temp). Prepare 60-sec exam answer: 'Walk me through coil spring DoE in HEEDS.'",
                    ["Study type = ?", "Full factorial 2³ = ? runs", "Why no performance plot in DOE?", "Dominant factor on shear_stress?", "DoE vs Optimization study type"],
                    ["DOE study defined and run", "Main effects plot generated", "Dominant factor identified", "60-sec oral answer practiced", "Linked to antenna 40-run DoE"],
                    [yt("doe"), yt("heeds")],
                    [res("Your Antenna RUL Notebook", "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb", "tool")], 65),
            ]),
        block(7, SLOTS[6][0], "🎲 Block 7 — Examples 5–6: Robustness + Multi-Objective",
            [
                task("heeds-b7-t1", 7, SLOTS[6][1], "Example 5 — Robustness & Reliability Studies", "🎲",
                    "EXAMPLE 5: Robustness and Reliability (copy beam project). RELIABILITY STUDY: assign probability distributions to variables (Gaussian, uniform) → Monte Carlo sampling → estimate failure probability. ROBUSTNESS STUDY: measure output variation when inputs vary within tolerance. Continuous variables NOT varied in robustness/reliability — only statistical distributions. Connect to lecture: Uncertainty Quantification, Monte Carlo, robust design = low output sensitivity. Prof's definition: 'A design is robust if it shows low sensitivity to input variation.'",
                    "Copy beam project → add reliability study (guide Steps 1-6). Document: which distribution for which variable? Write 3 sentences linking to Monte Carlo from class notes.",
                    ["Reliability vs robustness in HEEDS", "Are variables varied or distributions?", "Link to Monte Carlo lecture", "Link to UQ lecture", "Failure probability output"],
                    ["Example 5 steps reviewed", "Reliability study setup documented", "Monte Carlo connection written", "Robust design definition memorized"],
                    [yt("heeds")],
                    [res("HEEDS Guide Example 5", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 55),
                task("heeds-b7-t2", 7, SLOTS[6][2], "Example 6 — Multi-Objective Optimization + Pareto Front", "⚖️",
                    "EXAMPLE 6: Multi-Objective Optimization. HEEDS generates PARETO SET — non-dominated designs where improving one objective worsens another. POST shows Pareto front plot. Conflicting objectives: e.g. minimize mass AND minimize deflection. Prof's Pareto front definition: 'Collection of optimal solutions between conflicting objectives.' EXAM: 'Show me Pareto front from HEEDS' — open Example 6 POST, screenshot trade-off curve. Link to lecture stress vs mass Pareto sketch.",
                    "Run or review Example 6. Generate Pareto front plot in POST. Mark 3 designs on front: min mass, min deflection, knee point. Write which you'd pick for aircraft vs bridge and why.",
                    ["What is Pareto set in HEEDS?", "Example 6 conflicting objectives", "Point on Pareto front = ?", "Knee point meaning", "Link to lecture Pareto sketch"],
                    ["Pareto front plot generated", "3 designs marked", "Knee point identified", "Exam definition memorized"],
                    [yt("opt"), yt("heeds")],
                    [res("HEEDS Guide Example 6 — Multi-Objective", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 60),
            ]),
        block(8, SLOTS[7][0], "🏆 Block 8 — Examples 7–8 + Exam Boss",
            [
                task("heeds-b8-t1", 8, SLOTS[7][1], "Examples 7–8 — Curve Fitting + Taguchi RPD", "📈",
                    "EXAMPLE 7: Population Modeling / Curve Fitting — fit surrogate model to data population. Links to lecture least-squares and surrogate models. EXAMPLE 8: Pipe Network with Taguchi Robust Parameter Design (RPD) — Taguchi methods for robust design using orthogonal arrays. Combined with Example 5 gives full robustness toolkit. For exam: know that HEEDS supports Taguchi, full factorial, Latin hypercube (from lecture) as sampling methods.",
                    "Skim Examples 7-8 in guide. For each write: objective, method, one key output plot. Add to master table: Ex1=optimization, Ex2=constrained opt, Ex3=truss, Ex4=DOE, Ex5=reliability, Ex6=multi-obj, Ex7=curve fit, Ex8=Taguchi.",
                    ["Example 7 purpose", "Example 8 Taguchi method", "8-example summary table", "Taguchi vs full factorial", "Surrogate link to lecture"],
                    ["Examples 7-8 skimmed", "8-example table complete", "Taguchi concept understood"],
                    [yt("heeds")],
                    [res("HEEDS Guide Examples 7-8", "/heeds/HEEDSGettingStartedGuide.pdf", "doc")], 50),
                task("heeds-b8-t2", 8, SLOTS[7][2], "HEEDS Exam Boss — Oral + Link to Antenna Project", "🎤",
                    "FINAL ORAL DRILL — answer in ≤45 sec each: (1) What is HEEDS? (2) Process Automation 3 steps? (3) Tagging purpose? (4) Study types? (5) DOE vs Optimization difference? (6) Coil spring variables/responses? (7) Full factorial 2³ runs? (8) Pareto front in Example 6? (9) Reliability vs robustness? (10) Map antenna notebook to HEEDS workflow. PRESENTATION LINE: 'I replicated HEEDS MDO workflow in Python — Design Space (wind×temp) → DoE (40 runs) → Response Surface (3D plot) → Operating Envelope (contours) — identical to SpringEx.heeds Example 4.'",
                    "Record 10 oral answers. Open antenna notebook side-by-side with HEEDS SpringEx. Present 2-min 'HEEDS workflow' to camera. Checklist all 8 examples completed or documented.",
                    ["10 oral answers recorded", "2-min HEEDS presentation", "Antenna ↔ HEEDS mapping slide", "All 8 examples in table", "Ready for Prof. Nasti HEEDS questions"],
                    ["Oral drill complete", "Presentation recorded", "Antenna mapping clear", "8-example table done", "Confident for exam"],
                    [yt("heeds"), yt("doe")],
                    [res("HEEDS Getting Started Guide — Full PDF", "/heeds/HEEDSGettingStartedGuide.pdf", "doc"),
                     res("Antenna RUL Notebook", "file:///Users/msv/Desktop/Desktop%20Wizzz/digital%20twin1/DigitalTwin_Antenna_RUL.ipynb", "tool"),
                     res("DigitalTwin Exam Guidelines", "/heeds/DigitalTwin_Exam_Guidelines.pdf", "doc")], 65),
            ]),
    ],
}

lines = [
    'import type { DayPlan } from "./types";',
    "",
    "/** 18-hour HEEDS MDO scratch-to-hero — all 8 examples from Getting Started Guide 2404 */",
    "export const heedsDay: DayPlan = ",
    json.dumps(plan, indent=2, ensure_ascii=False) + ";",
    "",
]
OUT.write_text("\n".join(lines), encoding="utf-8")
total = sum(len(b["tasks"]) for b in plan["blocks"])
print(f"Wrote {OUT.name} — {total} tasks, {total*55} approx XP")
