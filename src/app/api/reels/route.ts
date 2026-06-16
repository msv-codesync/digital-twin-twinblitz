import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getReelProgress, saveReelView } from "@/lib/db";
import { REELS_TOTAL } from "@/lib/reels-feed";

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const progress = await getReelProgress(user.id);
  const viewed = Object.keys(progress).length;

  return NextResponse.json({
    progress,
    viewed,
    total: REELS_TOTAL,
    pct: Math.round((viewed / REELS_TOTAL) * 100),
  });
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { reelId } = (await req.json()) as { reelId?: string };
  if (!reelId) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  await saveReelView(user.id, reelId);
  const progress = await getReelProgress(user.id);

  return NextResponse.json({
    ok: true,
    progress,
    viewed: Object.keys(progress).length,
    total: REELS_TOTAL,
  });
}
