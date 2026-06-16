import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { HeedsPracticeSections } from "@/components/HeedsPracticeSections";

export default async function HeedsPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <p className="text-xs font-semibold text-orange-400 tracking-wide">HEEDS MDO · hands-on</p>
        <h1 className="text-xl font-bold mt-1">⚙️ HEEDS Practice</h1>
        <p className="text-sm text-[var(--muted)] mt-2">
          Bullets + arrows only. Run the 8 guide examples · mirror each step on your antenna project.
        </p>
      </header>

      <section className="px-5 mb-5 flex gap-2 flex-wrap">
        <a
          href="/heeds/HEEDSGettingStartedGuide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs glass rounded-lg px-3 py-2 text-orange-300"
        >
          PDF guide ↗
        </a>
        <Link href="/project" className="text-xs glass rounded-lg px-3 py-2 text-cyan-300">
          Antenna PPT →
        </Link>
        <Link href="/exam" className="text-xs glass rounded-lg px-3 py-2 text-violet-300">
          Exam Q →
        </Link>
      </section>

      <HeedsPracticeSections />

      <BottomNav />
    </main>
  );
}
