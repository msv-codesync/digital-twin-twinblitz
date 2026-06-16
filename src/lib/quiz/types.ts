export type QuizQuestion = {
  id: string;
  deck: string;
  topic: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  source: string;
};

export type QuizAnswerRecord = {
  selectedIndex: number;
  correct: boolean;
  answeredAt: string;
};

export type QuizDeck = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  source: string;
};

export type QuizStats = {
  total: number;
  answered: number;
  correct: number;
  pct: number;
  byDeck: Record<string, { total: number; answered: number; correct: number; pct: number }>;
};
