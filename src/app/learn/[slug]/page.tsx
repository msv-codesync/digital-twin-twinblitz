import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { DeepTopicView } from "@/components/DeepTopicView";
import { DEEP_TOPICS, getDeepTopic } from "@/lib/deep-guide";

type Props = { params: Promise<{ slug: string }> };

export default async function LearnTopicPage({ params }: Props) {
  const user = await getSession();
  if (!user) redirect("/login");

  const { slug } = await params;
  const topic = getDeepTopic(slug);
  if (!topic) notFound();

  const idx = DEEP_TOPICS.findIndex((t) => t.slug === slug);
  const prev = idx > 0 ? DEEP_TOPICS[idx - 1] : null;
  const next = idx < DEEP_TOPICS.length - 1 ? DEEP_TOPICS[idx + 1] : null;

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <Link href="/learn" className="text-sm text-violet-400">
          ← All topics
        </Link>
        <p className="text-xs text-[var(--muted)] mt-2 uppercase tracking-wide">{topic.group}</p>
        <h1 className="text-lg font-bold mt-1 leading-snug">{topic.title}</h1>
        <p className="text-sm text-[var(--muted)] mt-1">{topic.subtitle}</p>
      </header>

      <div className="px-5">
        <DeepTopicView topic={topic} />
      </div>

      <nav className="px-5 mt-8 flex gap-3">
        {prev ? (
          <Link href={`/learn/${prev.slug}`} className="flex-1 glass rounded-xl p-3 text-xs">
            ← {prev.title.slice(0, 28)}…
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="flex-1 glass rounded-xl p-3 text-xs text-right"
          >
            {next.title.slice(0, 28)}… →
          </Link>
        ) : null}
      </nav>

      <BottomNav />
    </main>
  );
}
