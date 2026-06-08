"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Today", icon: "⚡" },
  { href: "/days", label: "Days", icon: "📅" },
  { href: "/notes", label: "Notes", icon: "📝" },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-[var(--border)] z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {tabs.map((t) => {
          const active = path === t.href || (t.href !== "/" && path.startsWith(t.href));
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors ${
                active ? "text-indigo-400" : "text-[var(--muted)]"
              }`}
            >
              <span className="text-xl">{t.icon}</span>
              <span className="text-xs font-medium">{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
