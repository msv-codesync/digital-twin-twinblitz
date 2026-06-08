import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { getNotes } from "@/lib/db";
import { getTask } from "@/lib/curriculum";
import { BottomNav } from "@/components/BottomNav";

export default async function NotesPage() {
  const user = await getSession();
  if (!user) redirect("/login");

  const notes = (await getNotes(user.id)) as {
    id: number;
    task_id: string | null;
    content: string;
    updated_at: string;
  }[];

  return (
    <main className="min-h-dvh pb-24 max-w-lg mx-auto">
      <header className="px-5 pt-12 pb-4">
        <h1 className="text-xl font-bold">📝 Your Notes</h1>
        <p className="text-sm text-[var(--muted)]">Saved permanently — never erased</p>
      </header>

      <div className="px-5 space-y-3">
        {notes.length === 0 ? (
          <p className="text-[var(--muted)] text-sm text-center py-12">
            No notes yet. Open any task and start writing!
          </p>
        ) : (
          notes.map((n) => {
            const task = n.task_id ? getTask(n.task_id) : null;
            return (
              <div key={n.id} className="glass rounded-xl p-4">
                {task && (
                  <p className="text-xs text-indigo-400 mb-2">
                    {task.emoji} {task.title}
                  </p>
                )}
                <p className="text-sm whitespace-pre-wrap">{n.content}</p>
                <p className="text-xs text-[var(--muted)] mt-2">{n.updated_at}</p>
              </div>
            );
          })
        )}
      </div>

      <BottomNav />
    </main>
  );
}
