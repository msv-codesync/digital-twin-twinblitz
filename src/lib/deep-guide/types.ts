export type DeepVideo = {
  id: string;
  title: string;
  duration?: string;
};

export type PracticeQA = {
  question: string;
  answer: string;
};

export type DeepTopic = {
  slug: string;
  order: number;
  group: "course" | "exercise" | "notes";
  title: string;
  subtitle: string;
  source: string;
  pdfRef?: string;
  remember: string;
  analogy: string;
  plainAnswer: string;
  profSays: string;
  sayInExam: string;
  videos: DeepVideo[];
  practice: PracticeQA[];
  noteImage?: string;
  noteLabel?: string;
};
