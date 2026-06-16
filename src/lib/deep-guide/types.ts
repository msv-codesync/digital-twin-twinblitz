export type DeepVideo = {
  id: string;
  title: string;
};

export type DeepTopic = {
  slug: string;
  order: number;
  group: "quiz" | "exercise" | "notes";
  title: string;
  subtitle: string;
  source: string;
  remember: string;
  analogy: string;
  plainAnswer: string;
  profSays: string;
  examTip: string;
  videos: DeepVideo[];
  noteImage?: string;
  noteLabel?: string;
  pdfPage?: string;
};
