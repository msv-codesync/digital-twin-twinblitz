import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getNotes, saveNote } from "@/lib/db";

export async function GET(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const taskId = new URL(req.url).searchParams.get("taskId") ?? undefined;
  const notes = await getNotes(user.id, taskId);
  return NextResponse.json({ notes });
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { taskId, content } = await req.json();
  await saveNote(user.id, taskId ?? null, content);
  return NextResponse.json({ ok: true });
}
