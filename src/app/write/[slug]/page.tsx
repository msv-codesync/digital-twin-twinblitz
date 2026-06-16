import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { BottomNav } from "@/components/BottomNav";
import { WriteStudyForm } from "@/components/WriteStudyForm";
import { getWriteProgress } from "@/lib/db";
import { WRITE_TOPICS, getWriteTopic } from "@/lib/write-study/bank";

type Props = { params: Promise<{ slug: string }> };

export default async function WriteTopicPage({ params }: Props) {
  const user = await getSession();
  if (!user) redirect("/login");

  const { slug } = await params;
  const topic = getWriteTopic(slug);
  if (!topic) notFound();

  const progress = await getWriteProgress(user.id);
  const idx = WRITE_TOPICS.findIndex((t) => t.slug === slug);
  const prev = idx > 0 ? WRITE_TOPICS[idx - 1] : null;
  const next = idx < WRITE_TOPICS.length - 1 ? WRITE_TOPICS[idx + 1] : null;

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <Link href="/write" className="text-sm text-emerald-400">
          ← All topics
        </Link>
        <h1 className="text-lg font-bold mt-2 leading-snug">{topic.title}</h1>
        <p className="text-xs text-[var(--muted)] mt-1">Cover the box — write from memory</p>
      </header>

      <div className="px-5">
        <WriteStudyForm topic={topic} studentName={user.name} initialProgress={progress} />
      </div>

      <nav className="px-5 mt-8 flex gap-3">
        {prev ? (
          <Link href={`/write/${prev.slug}`} className="flex-1 glass rounded-xl p-3 text-xs">
            ← Prev
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link href={`/write/${next.slug}`} className="flex-1 glass rounded-xl p-3 text-xs text-right">
            Next →
          </Link>
        ) : null}
      </nav>

      <BottomNav />
    </main>
  );
}
