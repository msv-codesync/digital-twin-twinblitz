import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getTaskProgress, toggleTask } from "@/lib/db";

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const progress = await getTaskProgress(user.id);
  return NextResponse.json({ progress });
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { taskId, completed } = await req.json();
  await toggleTask(user.id, taskId, completed);
  const progress = await getTaskProgress(user.id);
  return NextResponse.json({ ok: true, progress });
}
