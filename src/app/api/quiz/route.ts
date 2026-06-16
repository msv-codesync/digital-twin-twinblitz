import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getQuizProgress, saveQuizAnswer } from "@/lib/db";
import { computeQuizStats, getQuestion, QUIZ_TOTAL } from "@/lib/quiz";

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const progress = await getQuizProgress(user.id);
  const stats = computeQuizStats(progress);

  return NextResponse.json({ progress, stats, total: QUIZ_TOTAL });
}

export async function POST(req: Request) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { questionId, selectedIndex } = body as {
    questionId?: string;
    selectedIndex?: number;
  };

  if (!questionId || selectedIndex == null || selectedIndex < 0 || selectedIndex > 3) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const question = getQuestion(questionId);
  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  const correct = selectedIndex === question.correctIndex;
  await saveQuizAnswer(user.id, questionId, selectedIndex, correct);

  const progress = await getQuizProgress(user.id);
  const stats = computeQuizStats(progress);

  return NextResponse.json({
    ok: true,
    correct,
    correctIndex: question.correctIndex,
    explanation: question.explanation,
    progress,
    stats,
  });
}
