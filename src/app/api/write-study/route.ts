import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getWriteProgress, saveWriteAnswer } from "@/lib/db";

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const progress = await getWriteProgress(user.id);
  return NextResponse.json({ progress });
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { answerKey, answer } = body as { answerKey?: string; answer?: string };

  if (!answerKey || typeof answer !== "string") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await saveWriteAnswer(user.id, answerKey, answer);
  return NextResponse.json({ ok: true });
}
