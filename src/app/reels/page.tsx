import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getReelProgress } from "@/lib/db";
import { ReelsFeed } from "@/components/ReelsFeed";
import { REELS_FEED } from "@/lib/reels-feed";

export default async function ReelsPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const progress = await getReelProgress(user.id);

  return (
    <main className="h-dvh bg-black">
      <ReelsFeed
        reels={REELS_FEED}
        initialViewed={progress}
        initialCount={Object.keys(progress).length}
      />
    </main>
  );
}
