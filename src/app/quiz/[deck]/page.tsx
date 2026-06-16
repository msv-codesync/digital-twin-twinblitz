import { redirect, notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getQuizProgress } from "@/lib/db";
import { BottomNav } from "@/components/BottomNav";
import { QuizPlayer } from "@/components/QuizPlayer";
import { getDeckQuestions, QUIZ_BANK, QUIZ_DECKS } from "@/lib/quiz";

type Props = { params: Promise<{ deck: string }> };

export default async function QuizDeckPage({ params }: Props) {
  const user = await getSession();
  if (!user) redirect("/login");

  const { deck: deckId } = await params;

  let questions = getDeckQuestions(deckId);
  let title: string = QUIZ_DECKS.find((d) => d.id === deckId)?.title ?? deckId;

  if (deckId === "mix") {
    questions = [...QUIZ_BANK].sort(() => Math.random() - 0.5);
    title = "Mixed Exam Drill";
  }

  if (!questions.length) notFound();

  const progress = await getQuizProgress(user.id);

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <h1 className="text-lg font-bold">{title ?? deckId}</h1>
        <p className="text-xs text-[var(--muted)] mt-1">
          Tap an answer — saves immediately to your account
        </p>
      </header>

      <div className="px-5">
        <QuizPlayer
          deckId={deckId === "mix" ? "mix" : deckId}
          deckTitle={title ?? deckId}
          questions={questions}
          initialProgress={progress}
        />
      </div>

      <BottomNav />
    </main>
  );
}
