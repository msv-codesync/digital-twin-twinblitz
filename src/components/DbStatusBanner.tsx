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

  if (!backend) return null;

  if (backend === "redis" || backend === "turso" || backend === "local") {
    return (
      <div className="w-full max-w-sm mb-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
        ✓ Data saves ({backend})
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mb-4 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm">
      <p className="font-medium text-amber-300">⚠️ Create a new account</p>
      <p className="text-[var(--muted)] mt-1 text-xs">
        Server storage is temporary — use <strong>Register</strong>, not login, if
        your old account stopped working.
      </p>
    </div>
  );
}
