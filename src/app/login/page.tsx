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
      <div className="text-center mb-8 animate-slide-up">
        <div className="text-5xl mb-3">🔬</div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          TwinBlitz
        </h1>
        <p className="text-[var(--muted)] text-sm mt-2">3 days · 18hr/day · Prof. Nasti exam prep</p>
      </div>
      <DbStatusBanner />
      <AuthForm mode="login" />
      <p className="text-sm text-[var(--muted)] mt-6">
        New?{" "}
        <Link href="/register" className="text-indigo-400 font-medium">
          Create account
        </Link>
      </p>
    </main>
  );
}
