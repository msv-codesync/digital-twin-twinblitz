import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";

const NOTES = [
  { file: "PHOTO-2026-04-27-12-02-20 7.jpg", label: "p.1 — Digital Twin definition, lifecycle, coupling" },
  { file: "PHOTO-2026-04-27-12-02-20 8.jpg", label: "p.2 — V&V, calibration, surrogate, least squares" },
  { file: "PHOTO-2026-04-27-12-02-19 5.jpg", label: "p.3 — DoE, optimization, Pareto, Monte Carlo" },
  { file: "PHOTO-2026-04-27-12-02-18 2.jpg", label: "p.4 — PCA steps 0–5, surrogate models" },
  { file: "PHOTO-2026-04-27-12-02-19 6.jpg", label: "p.5 — Mesh convergence, HEEDS, FMEA, Agile" },
  { file: "PHOTO-2026-04-27-12-02-19 7.jpg", label: "p.6 — Motorcycle traction FFD" },
  { file: "PHOTO-2026-04-27-12-02-19 8.jpg", label: "p.7 — DT stages, HVAC coupling, logistics DoE" },
  { file: "PHOTO-2026-04-27-12-02-20 5.jpg", label: "p.8 — P-diagram rear wheel traction" },
  { file: "PHOTO-2026-04-27-12-02-20 6.jpg", label: "p.9 — Monte Carlo, AI surrogate, Agile" },
];

export default async function MaterialsPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <Link href="/" className="text-sm text-indigo-400">
          ← Today
        </Link>
        <h1 className="text-xl font-bold mt-2">📷 Class Notes</h1>
        <p className="text-sm text-[var(--muted)]">
          Your handwritten notes — study these alongside each task
        </p>
      </header>

      <div className="px-5 space-y-6">
        {NOTES.map((n) => (
          <section key={n.file} className="glass rounded-2xl overflow-hidden">
            <p className="px-4 py-3 text-sm font-medium text-indigo-300">{n.label}</p>
            <Image
              src={`/class-notes/${n.file}`}
              alt={n.label}
              width={800}
              height={1200}
              className="w-full h-auto"
              unoptimized
            />
          </section>
        ))}
      </div>

      <BottomNav />
    </main>
  );
}
