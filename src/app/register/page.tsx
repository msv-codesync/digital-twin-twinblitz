import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { AuthForm } from "@/components/AuthForm";
import { DbStatusBanner } from "@/components/DbStatusBanner";

export default async function RegisterPage() {
  const user = await getSession();
  if (user) redirect("/");

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 pb-8">
      <div className="text-center mb-8 animate-slide-up">
        <div className="text-5xl mb-3">🚀</div>
        <h1 className="text-2xl font-bold">Join TwinBlitz</h1>
        <p className="text-[var(--muted)] text-sm mt-2">Learn embedded, NFC, AI, IoT from scratch</p>
      </div>
      <DbStatusBanner />
      <AuthForm mode="register" />
      <p className="text-sm text-[var(--muted)] mt-6">
        Have account?{" "}
        <Link href="/login" className="text-indigo-400 font-medium">
          Login
        </Link>
      </p>
    </main>
  );
}
