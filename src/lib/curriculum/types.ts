export type Category =
  | "ALL"
  | "Theory"
  | "V&V"
  | "DoE"
  | "Optimization"
  | "HEEDS"
  | "Surrogate"
  | "Functional"
  | "Project"
  | "Tools";

export type Resource = { title: string; url: string; type: "video" | "doc" | "tool" | "paper" };

export type Task = {
  id: string;
  day: number;
  block: number;
  slot: string;
  title: string;
  emoji: string;
  category: Category;
  learn: string;
  practice: string;
  exercises: string[];
  checklist: string[];
  youtube: { id: string; title: string }[];
  resources: Resource[];
  xp: number;
};

export type DayPlan = {
  day: number;
  date: string;
  title: string;
  subtitle: string;
  theme: string;
  blocks: { block: number; slot: string; label: string; tasks: Task[] }[];
};
