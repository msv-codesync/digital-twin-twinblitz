import { QUIZ_BANK } from "./bank";
import { QUIZ_DECKS } from "./decks";
import type { QuizAnswerRecord, QuizStats } from "./types";

export { QUIZ_BANK, getQuestion, getDeckQuestions, getQuestionMap } from "./bank";
export { QUIZ_DECKS } from "./decks";
export type { QuizQuestion, QuizAnswerRecord, QuizDeck, QuizStats } from "./types";

export const QUIZ_TOTAL = QUIZ_BANK.length;

export function computeQuizStats(
  progress: Record<string, QuizAnswerRecord>
): QuizStats {
  const byDeck: QuizStats["byDeck"] = {};

  for (const deck of QUIZ_DECKS) {
    const qs = QUIZ_BANK.filter((q) => q.deck === deck.id);
    const answered = qs.filter((q) => progress[q.id]);
    const correct = answered.filter((q) => progress[q.id]?.correct);
    byDeck[deck.id] = {
      total: qs.length,
      answered: answered.length,
      correct: correct.length,
      pct: answered.length ? Math.round((correct.length / answered.length) * 100) : 0,
    };
  }

  const answeredIds = Object.keys(progress);
  const correctCount = answeredIds.filter((id) => progress[id]?.correct).length;

  return {
    total: QUIZ_TOTAL,
    answered: answeredIds.length,
    correct: correctCount,
    pct: answeredIds.length ? Math.round((correctCount / answeredIds.length) * 100) : 0,
    byDeck,
  };
}
