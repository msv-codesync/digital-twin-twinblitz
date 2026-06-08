import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AuthForm } from "@/components/AuthForm";
import { DbStatusBanner } from "@/components/DbStatusBanner";

export default async function LoginPage() {
  const user = await getSession();
  if (user) redirect("/");

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 pb-8">
      <div className="text-center mb-6 animate-slide-up max-w-sm">
        <div className="text-5xl mb-3">📡</div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Digital Twin Exam Sprint
        </h1>
        <p className="text-sm font-medium text-indigo-300 mt-2">
          Prof. Dr. Adele Nasti
        </p>
        <p className="text-[var(--muted)] text-xs mt-1">
          Modeling, Simulation &amp; Digital Twin
        </p>
        <div className="mt-4 text-left text-xs text-[var(--muted)] space-y-1 glass rounded-xl p-4">
          <p>📘 3 days × 18 hrs · 42 tasks</p>
          <p>✅ All 12 official quiz questions</p>
          <p>🧪 Exercises 1–12 + HEEDS + FEM</p>
          <p>📡 Your Antenna RUL project prep</p>
        </div>
      </div>
      <DbStatusBanner />
      <AuthForm mode="login" />
      <p className="text-sm text-[var(--muted)] mt-6">
        First time here?{" "}
        <Link href="/register" className="text-indigo-400 font-medium">
          Create account →
        </Link>
      </p>
    </main>
  );
}
