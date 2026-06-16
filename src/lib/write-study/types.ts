export type WriteTopic = {
  slug: string;
  title: string;
  group: "course" | "exercise" | "notes";
  questions: string[];
};

export type WriteAnswerRecord = {
  answer: string;
  updatedAt: string;
};

export type WriteProgress = Record<string, WriteAnswerRecord>;
