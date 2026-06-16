"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Reel } from "@/lib/reels-feed";
import { GAMEPLAY_LOOP_ID, REELS_FEED, reelTagColor } from "@/lib/reels-feed";

type Props = {
  reels: Reel[];
  initialViewed: Record<string, string>;
  initialCount: number;
};

export function ReelsFeed({ reels, initialViewed, initialCount }: Props) {
  const [viewed, setViewed] = useState(initialCount);
  const savedRef = useRef(new Set(Object.keys(initialViewed)));
  const containerRef = useRef<HTMLDivElement>(null);

  const markViewed = useCallback(async (reelId: string) => {
    if (savedRef.current.has(reelId)) return;
    savedRef.current.add(reelId);
    setViewed(savedRef.current.size);
    try {
      await fetch("/api/reels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reelId }),
      });
    } catch {
      /* offline ok */
    }
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const id = (e.target as HTMLElement).dataset.reelId;
            if (id) markViewed(id);
          }
        });
      },
      { root, threshold: [0.6] }
    );

    root.querySelectorAll("[data-reel-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reels, markViewed]);

  const loopSrc = `https://www.youtube.com/embed/${GAMEPLAY_LOOP_ID}?autoplay=1&mute=1&loop=1&playlist=${GAMEPLAY_LOOP_ID}&controls=0&modestbranding=1&playsinline=1&rel=0`;

  return (
    <div className="relative h-dvh w-full max-w-lg mx-auto bg-black overflow-hidden">
      {/* Fixed gameplay loop — study reel style */}
      <div className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto h-[36dvh] z-0 pointer-events-none">
        <iframe
          src={loopSrc}
          title="Gameplay loop"
          className="w-full h-full border-0 opacity-90"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/60" />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 max-w-lg mx-auto z-30 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-white">Exam Reels</p>
            <p className="text-[10px] text-white/60">
              {viewed}/{reels.length} learned · swap Instagram for this
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/quiz/mix"
              className="text-[10px] px-2.5 py-1 rounded-full bg-violet-600/90 text-white font-medium"
            >
              Quiz
            </Link>
            <Link
              href="/learn"
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/15 text-white font-medium"
            >
              Learn
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll feed */}
      <div
        ref={containerRef}
        className="h-dvh overflow-y-scroll snap-y snap-mandatory scrollbar-hide relative z-10"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {reels.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} total={reels.length} />
        ))}
      </div>
    </div>
  );
}

function ReelCard({ reel, index, total }: { reel: Reel; index: number; total: number }) {
  const color = reelTagColor(reel.tag);

  return (
    <section
      data-reel-id={reel.id}
      className="min-h-dvh snap-start snap-always flex flex-col justify-between px-4 pt-16 pb-[38dvh] relative"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(160deg, ${color}33 0%, #0a0a12 45%, #000 100%)`,
        }}
      />
      {reel.noteImage && (
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src={`/class-notes/${reel.noteImage}`}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 max-w-md">
        <span
          className="self-start text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
          style={{ background: `${color}44`, color }}
        >
          {reel.tag}
        </span>

        <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">{reel.hook}</h2>

        <div
          className="rounded-2xl p-4 border backdrop-blur-md"
          style={{ borderColor: `${color}55`, background: "rgba(0,0,0,0.55)" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide mb-1" style={{ color }}>
            Remember
          </p>
          <p className="text-lg font-bold text-white leading-snug">{reel.remember}</p>
        </div>

        <p className="text-sm text-white/85 leading-relaxed drop-shadow">{reel.bite}</p>

        {reel.youtubeId && (
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-video max-h-[140px] w-full">
            <iframe
              src={`https://www.youtube.com/embed/${reel.youtubeId}?rel=0&modestbranding=1`}
              title="Concept"
              className="w-full h-full"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          {reel.learnSlug && (
            <Link
              href={`/learn/${reel.learnSlug}`}
              className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20"
            >
              Deep dive →
            </Link>
          )}
          {reel.quizDeck && (
            <Link
              href={`/quiz/${reel.quizDeck}`}
              className="text-xs px-3 py-1.5 rounded-full bg-violet-600/80 text-white"
            >
              Test me →
            </Link>
          )}
        </div>
      </div>

      {/* Swipe hint */}
      <div className="relative z-10 text-center pb-2">
        <p className="text-[10px] text-white/40 animate-pulse">
          {index < total - 1 ? "↑ scroll for next · gameplay keeps running" : "🎓 Go crush the exam"}
        </p>
        <p className="text-[10px] text-white/25 mt-1">
          {index + 1} / {total}
        </p>
      </div>
    </section>
  );
}
