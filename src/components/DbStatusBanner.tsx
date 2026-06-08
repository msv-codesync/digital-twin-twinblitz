"use client";

import { useEffect, useState } from "react";

export function DbStatusBanner() {
  const [backend, setBackend] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setBackend(d.backend))
      .catch(() => setBackend("unknown"));
  }, []);

  if (!backend || backend === "local" || backend === "redis" || backend === "turso") {
    return null;
  }

  return (
    <div className="w-full max-w-sm mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm">
      <p className="font-medium text-amber-300">Ephemeral database</p>
      <p className="text-[var(--muted)] mt-1">
        Progress may reset on cold starts. Set TURSO_DATABASE_URL or Upstash Redis on Vercel for
        persistence.
      </p>
    </div>
  );
}
