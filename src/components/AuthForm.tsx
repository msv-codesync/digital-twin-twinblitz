"use client";

import { useState } from "react";

type Mode = "login" | "register";

export function AuthForm({ mode }: { mode: Mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
        credentials: "same-origin",
        signal: controller.signal,
      });

      let data: { error?: string; user?: unknown } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error("Server error — try again in a moment");
      }

      if (!res.ok) {
        const msg = data.error || "Something went wrong";
        if (mode === "login" && msg.includes("Invalid email or password")) {
          throw new Error(
            "Account not found. Click Create account below — old accounts may have been wiped on deploy."
          );
        }
        throw new Error(msg);
      }

      if (!data.user) {
        throw new Error("Server did not return user — try again");
      }

      // Full page navigation ensures cookie is applied before dashboard loads
      window.location.assign("/");
    } catch (err) {
      if ((err as Error).name === "AbortError") {
        setError("Request timed out. Check your connection and try again.");
      } else {
        setError((err as Error).message);
      }
      setLoading(false);
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      {mode === "register" && (
        <div>
          <label className="text-sm text-[var(--muted)] mb-1 block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)] outline-none disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
      )}
      <div>
        <label className="text-sm text-[var(--muted)] mb-1 block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          autoComplete="email"
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)] outline-none disabled:opacity-50"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className="text-sm text-[var(--muted)] mb-1 block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          minLength={6}
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface2)] border border-[var(--border)] focus:border-[var(--accent)] outline-none disabled:opacity-50"
          placeholder="Min 6 characters"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold disabled:opacity-50 pulse-glow"
      >
        {loading ? "Please wait…" : mode === "login" ? "Sign in 🚀" : "Create account 🔥"}
      </button>
    </form>
  );
}
