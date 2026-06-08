# TwinBlitz — Digital Twin Exam Prep Sprint

Mobile-first study app for **Prof. Dr. Adele Nasti**'s *Modeling, Simulation and Digital Twin* final exam.

**3 days × 18 hours** · **36 tasks** · Theory from handwritten class notes + your **5G/6G Antenna RUL** project.

## Quick start (local)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) → Register → start Day 1.

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
| 1 | Digital twin theory, V&V, coupling, functional modeling (class notes p.1–2) |
| 2 | DoE, HEEDS, optimization, Monte Carlo, surrogate models |
| 3 | PCA, Antenna RUL project deep-dive, presentation + Q&A prep |

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
