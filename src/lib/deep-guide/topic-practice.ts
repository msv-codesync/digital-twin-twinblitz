import type { PracticeQA } from "./types";

/** Accurate oral-exam Q&A — answers from Prof. Nasti lectures & exercises PDF */
export const TOPIC_PRACTICE: Record<string, PracticeQA[]> = {
  "quiz-q1-digital-twin": [
    {
      question: "What is a digital twin?",
      answer:
        "The digital representation of a physical product throughout its lifecycle — the virtual product. It is a coupled parametric simulation updated with real operational data.",
    },
    {
      question: "Does a digital twin replace experimental testing?",
      answer:
        "No. Simulation de-risks decisions and is cheaper than many tests, but experimental testing is still required. The twin supports testing; it does not replace it.",
    },
    {
      question: "Give one industrial example Prof. Nasti cites.",
      answer: "Rolls-Royce Intelligent Engine — a unique virtual engine per real engine, updated with flight data across the lifecycle.",
    },
  ],
  "quiz-q2-lifecycle": [
    {
      question: "List the five product lifecycle stages in order.",
      answer:
        "Design & Analysis → Manufacture → Build & Assembly → Experimental Testing → Service.",
    },
    {
      question: "Which stage is ‘as-used’ with live sensor data?",
      answer: "Service — the product is operating in the field; the twin tracks real conditions.",
    },
  ],
  "quiz-q3-parametric": [
    {
      question: "Why is parametric geometry important for a digital twin?",
      answer:
        "One master model can represent as-designed and as-manufactured configurations. Change a parameter and geometry, mesh, and boundary conditions update automatically — needed for DoE and optimisation.",
    },
  ],
  "quiz-q4-accuracy-fidelity": [
    {
      question: "What is model accuracy?",
      answer: "How close model predictions are to what happens in the real world.",
    },
    {
      question: "What is model fidelity?",
      answer: "How detailed or realistic the model is — mesh fineness, physics complexity. High fidelity is not automatically high accuracy.",
    },
  ],
  "quiz-q5-coupling": [
    {
      question: "What does coupling mean in physics-based models?",
      answer:
        "Solving two or more models together in an iterative loop because one model’s outputs are another’s inputs — they are interdependent.",
    },
    {
      question: "Give the HVAC coupling chain from your notes.",
      answer: "Occupancy increases → heat generation increases → cooling demand increases → energy consumption increases.",
    },
  ],
  "quiz-q6-empirical-physics": [
    {
      question: "What is an empirical model?",
      answer:
        "A model built from observations and experimental data using statistics — curve fitting, regression, or machine learning.",
    },
    {
      question: "How does it differ from physics-based?",
      answer: "Physics-based models start from first principles (equations of nature). Empirical models learn patterns from data. Both are valid; often used together.",
    },
  ],
  "quiz-q7-validation-calibration": [
    {
      question: "What is model validation?",
      answer:
        "Checking whether model predictions match real-world behaviour — ‘Have I done the right maths?’ Compare to test data or higher-fidelity models.",
    },
    {
      question: "What is model calibration (data matching)?",
      answer:
        "Adjusting internal model parameters so outputs match known experimental data. Calibration tunes the model; it is a separate step from validation.",
    },
  ],
  "quiz-q8-verification-validation": [
    {
      question: "What is verification?",
      answer: "‘Have I done the maths right?’ — checking code and implementation against known analytical or benchmark solutions.",
    },
    {
      question: "What is validation?",
      answer: "‘Have I done the right maths?’ — checking whether the model represents physical reality (e.g. simulation vs wind tunnel).",
    },
    {
      question: "FEA compared to an analytical beam solution — which is this?",
      answer: "Verification — testing the solver implementation.",
    },
  ],
  "quiz-q9-idealisation": [
    {
      question: "What is geometry idealisation?",
      answer:
        "Simplifying complex CAD for simulation (3D → 2D slice → 1D rod) while keeping the physics you need. Reduces runtime; must stay linked to the master parametric model.",
    },
  ],
  "quiz-q10-curve-fitting": [
    {
      question: "What is curve fitting?",
      answer:
        "Finding a mathematical curve that lies as close as possible to measured data points — creates an empirical model used in calibration.",
    },
  ],
  "quiz-q11-least-squares": [
    {
      question: "How does least squares work?",
      answer:
        "Choose model parameters to minimise Σ(yᵢ − f(xᵢ))² — the sum of squared residuals between measurements and the model.",
    },
    {
      question: "For Hooke’s law in Exercise 1, what do you find?",
      answer: "Fit F = kx to the data; slope k is the spring constant in N/m after converting displacement from mm to metres.",
    },
  ],
  "quiz-q12-extrapolation": [
    {
      question: "What is extrapolation?",
      answer:
        "Predicting outside the range where you have measured or calibrated data — higher uncertainty than interpolation (inside the range).",
    },
    {
      question: "For your antenna DoE (5–35 m/s, 20–65 °C), what is a safe recommendation?",
      answer: "Stay inside the studied envelope: wind ≤ 12 m/s and temp ≤ 30 °C for RUL > 10 years — supported by the DoE results.",
    },
  ],
  "exercise-1-hooke": [
    {
      question: "What do you plot in Exercise 1?",
      answer: "Force (N) vs Displacement (mm) with ±0.5 mm uncertainty bars on displacement.",
    },
    {
      question: "How do you find spring constant k?",
      answer: "Fit F = kx using least squares; slope is k in N/m after converting mm to metres.",
    },
  ],
  "exercise-5-heeds": [
    {
      question: "List the six HEEDS workflow steps.",
      answer: "Process → Parameters → Tagging → Study → Run → POST.",
    },
    {
      question: "Example 5 coil spring study type?",
      answer: "DOE (Design of Experiments) — not optimisation.",
    },
  ],
  "exercise-9-correlation": [
    {
      question: "Exercise 9 is an example of which V&V concept?",
      answer: "Validation — comparing FEA results to physical test data.",
    },
  ],
};

export function getPracticeForTopic(slug: string, fallback: PracticeQA[] = []): PracticeQA[] {
  return TOPIC_PRACTICE[slug] ?? fallback;
}
