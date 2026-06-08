import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { addPracticeLog, getPracticeLogs } from "@/lib/db";

export async function GET(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const taskId = new URL(req.url).searchParams.get("taskId") ?? undefined;
  const logs = await getPracticeLogs(user.id, taskId);
  return NextResponse.json({ logs });
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { taskId, description, durationMinutes } = await req.json();
  await addPracticeLog(user.id, taskId, description, durationMinutes ?? 0);
  return NextResponse.json({ ok: true });
}
