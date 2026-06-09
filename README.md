# TwinBlitz — Digital Twin Exam Prep Sprint

Mobile-first study app for **Prof. Dr. Adele Nasti**'s *Modeling, Simulation and Digital Twin* final exam.

**3 days × 18 hours** · **42 tasks** + **HEEDS 18hr course** (16 tasks, all 8 guide examples) · Full Prof. Nasti syllabus: all **12 official quiz questions**, **Exercises 1–12**, FEM Ch.31, HEEDS guide, Simcenter labs, + your **Antenna RUL** project.

## Quick start (local)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) → Register → **HEEDS tab** for the 18hr HEEDS-only course, or **Today** for the 3-day exam sprint.

No env vars needed locally — SQLite at `data/twinblitz.db`.

## Production (Vercel)

1. Push to GitHub `main`
2. Import repo in Vercel
3. Set env vars:
   - `AUTH_SECRET` — random 32+ char string (required)
   - `TURSO_DATABASE_URL` + `TURSO_AUTH_TOKEN` (recommended), or Upstash Redis via Vercel integration

## Curriculum structure

| Day | Focus |
|-----|-------|
| 1 | Official Quiz Q1–12 + Exercise 1 (Hooke's law) + Exercise 2 (AIAA paper) |
| 2 | DoE, HEEDS (coil spring + multi-obj), Pugh/FMEA, Exercises 4–6, Rolls-Royce seals |
| 3 | FEM Ch.31, Simcenter Exercises 7–9, ML Exercises 10–12, Antenna RUL + mock exam |

**Syllabus sources read:** `DigitalTwin_Lectures_ProfAdeleNasti.pdf` (212 pp), `DigitalTwin_Lectures_Exercises.pdf`, `HEEDSGettingStartedGuide.pdf`, `Chapter 31 FEM.pptx`, handwritten notes, class `power_supply/` thermal case.

Categories: `Theory`, `V&V`, `DoE`, `Optimization`, `HEEDS`, `Surrogate`, `Functional`, `Project`, `Tools`

## Your project materials

- Notebook: `DigitalTwin_Antenna_RUL.ipynb`
- Presentation: `DigitalTwin_Antenna_RUL.pptx`
- Class notes: handwritten photos in project folder
- Lecture PDF: `DigitalTwin_Lectures_ProfAdeleNasti.pdf`

## YouTube links

All video IDs are verified from **Prof. Nasti's lecture slides** (Rolls-Royce, Siemens, HEEDS, JMP, StatQuest PCA) plus oEmbed-checked educational videos.

## Auth

Session cookie: `twinblitz_session` (httpOnly JWT, 30 days)

## Tech stack

Next.js 15 · TypeScript · Tailwind v4 · bcryptjs + jose · libSQL/SQLite or Upstash Redis
