import { createClient, type Client } from "@libsql/client";
import { Redis } from "@upstash/redis";
import path from "path";
import fs from "fs";

export type User = {
  id: number;
  email: string;
  name: string;
};

type UserRow = User & { password_hash: string };

const DATA_DIR = path.join(process.cwd(), "data");
const LOCAL_DB = path.join(DATA_DIR, "twinblitz.db");

let sqlClient: Client | null = null;
let schemaReady: Promise<void> | null = null;
let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (url && token) {
    redis = new Redis({ url, token });
    return redis;
  }
  return null;
}

function useRedis() {
  return Boolean(getRedis());
}

function getSqlClient(): Client {
  if (!sqlClient) {
    const tursoUrl = process.env.TURSO_DATABASE_URL;
    const tursoToken = process.env.TURSO_AUTH_TOKEN;

    if (tursoUrl) {
      sqlClient = createClient({ url: tursoUrl, authToken: tursoToken });
    } else if (process.env.VERCEL) {
      // Ephemeral fallback — accounts may not survive cold starts until Turso/Redis is configured
      console.warn("[TwinBlitz] No persistent DB — set TURSO_DATABASE_URL or Upstash Redis on Vercel");
      sqlClient = createClient({ url: "file:/tmp/twinblitz.db" });
    } else {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
      sqlClient = createClient({ url: `file:${LOCAL_DB}` });
    }
  }
  return sqlClient;
}

async function ensureSqlSchema() {
  if (!schemaReady) {
    schemaReady = initSqlSchema();
  }
  await schemaReady;
}

async function initSqlSchema() {
  const db = getSqlClient();
  await db.batch([
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS task_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      task_id TEXT NOT NULL,
      completed INTEGER DEFAULT 0,
      completed_at TEXT,
      UNIQUE(user_id, task_id)
    )`,
    `CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      task_id TEXT,
      content TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS practice_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      task_id TEXT NOT NULL,
      description TEXT NOT NULL,
      duration_minutes INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS user_stats (
      user_id INTEGER PRIMARY KEY,
      xp INTEGER DEFAULT 0,
      streak INTEGER DEFAULT 0,
      last_active_date TEXT
    )`,
  ]);
}

// ─── Redis backend ───────────────────────────────────────────────

async function redisNextUserId(r: Redis): Promise<number> {
  return r.incr("twinblitz:counter:user_id");
}

export async function createUser(
  email: string,
  passwordHash: string,
  name: string
): Promise<User> {
  const normalizedEmail = email.toLowerCase().trim();
  const normalizedName = name.trim();

  const r = getRedis();
  if (r) {
    const existing = await r.get<UserRow>(`twinblitz:user:email:${normalizedEmail}`);
    if (existing) throw new Error("Email already registered");

    const id = await redisNextUserId(r);
    const row: UserRow = {
      id,
      email: normalizedEmail,
      password_hash: passwordHash,
      name: normalizedName,
    };
    await r.set(`twinblitz:user:email:${normalizedEmail}`, row);
    await r.set(`twinblitz:user:id:${id}`, row);
    await r.set(`twinblitz:stats:${id}`, { xp: 0, streak: 0, last_active_date: null });
    await r.set(`twinblitz:progress:${id}`, {});
    return { id, email: normalizedEmail, name: normalizedName };
  }

  await ensureSqlSchema();
  const db = getSqlClient();
  const result = await db.execute({
    sql: "INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)",
    args: [normalizedEmail, passwordHash, normalizedName],
  });
  const userId = Number(result.lastInsertRowid);
  await db.execute({
    sql: "INSERT INTO user_stats (user_id, xp, streak) VALUES (?, 0, 0)",
    args: [userId],
  });
  return { id: userId, email: normalizedEmail, name: normalizedName };
}

export async function getUserByEmail(email: string): Promise<UserRow | undefined> {
  const normalizedEmail = email.toLowerCase().trim();
  const r = getRedis();
  if (r) {
    const row = await r.get<UserRow>(`twinblitz:user:email:${normalizedEmail}`);
    return row ?? undefined;
  }

  await ensureSqlSchema();
  const result = await getSqlClient().execute({
    sql: "SELECT id, email, password_hash, name FROM users WHERE email = ?",
    args: [normalizedEmail],
  });
  if (result.rows.length === 0) return undefined;
  const row = result.rows[0];
  return {
    id: Number(row.id),
    email: String(row.email),
    password_hash: String(row.password_hash),
    name: String(row.name),
  };
}

export async function getUserById(id: number): Promise<User | undefined> {
  const r = getRedis();
  if (r) {
    const row = await r.get<UserRow>(`twinblitz:user:id:${id}`);
    if (!row) return undefined;
    return { id: row.id, email: row.email, name: row.name };
  }

  await ensureSqlSchema();
  const result = await getSqlClient().execute({
    sql: "SELECT id, email, name FROM users WHERE id = ?",
    args: [id],
  });
  if (result.rows.length === 0) return undefined;
  const row = result.rows[0];
  return { id: Number(row.id), email: String(row.email), name: String(row.name) };
}

export async function toggleTask(userId: number, taskId: string, completed: boolean) {
  const r = getRedis();
  if (r) {
    const key = `twinblitz:progress:${userId}`;
    const progress = (await r.get<Record<string, boolean>>(key)) ?? {};
    progress[taskId] = completed;
    await r.set(key, progress);
    if (completed) await addXp(userId, 25);
    return;
  }

  await ensureSqlSchema();
  const db = getSqlClient();
  const existing = await db.execute({
    sql: "SELECT id FROM task_progress WHERE user_id = ? AND task_id = ?",
    args: [userId, taskId],
  });

  if (existing.rows.length > 0) {
    await db.execute({
      sql: "UPDATE task_progress SET completed = ?, completed_at = ? WHERE user_id = ? AND task_id = ?",
      args: [completed ? 1 : 0, completed ? new Date().toISOString() : null, userId, taskId],
    });
  } else {
    await db.execute({
      sql: "INSERT INTO task_progress (user_id, task_id, completed, completed_at) VALUES (?, ?, ?, ?)",
      args: [userId, taskId, completed ? 1 : 0, completed ? new Date().toISOString() : null],
    });
  }
  if (completed) await addXp(userId, 25);
}

export async function getTaskProgress(userId: number): Promise<Record<string, boolean>> {
  const r = getRedis();
  if (r) {
    return (await r.get<Record<string, boolean>>(`twinblitz:progress:${userId}`)) ?? {};
  }

  await ensureSqlSchema();
  const result = await getSqlClient().execute({
    sql: "SELECT task_id, completed FROM task_progress WHERE user_id = ?",
    args: [userId],
  });
  return Object.fromEntries(
    result.rows.map((row) => [String(row.task_id), Number(row.completed) === 1])
  );
}

export async function saveNote(userId: number, taskId: string | null, content: string) {
  const r = getRedis();
  if (r) {
    const key = taskId
      ? `twinblitz:note:${userId}:${taskId}`
      : `twinblitz:note:${userId}:global`;
    await r.set(key, { content, updated_at: new Date().toISOString() });
    return;
  }

  await ensureSqlSchema();
  const db = getSqlClient();
  const existing = taskId
    ? await db.execute({
        sql: "SELECT id FROM notes WHERE user_id = ? AND task_id = ?",
        args: [userId, taskId],
      })
    : await db.execute({
        sql: "SELECT id FROM notes WHERE user_id = ? AND task_id IS NULL",
        args: [userId],
      });

  if (existing.rows.length > 0) {
    await db.execute({
      sql: "UPDATE notes SET content = ?, updated_at = datetime('now') WHERE id = ?",
      args: [content, existing.rows[0].id],
    });
  } else {
    await db.execute({
      sql: "INSERT INTO notes (user_id, task_id, content) VALUES (?, ?, ?)",
      args: [userId, taskId, content],
    });
  }
}

export async function getNotes(userId: number, taskId?: string) {
  const r = getRedis();
  if (r) {
    if (taskId) {
      const note = await r.get<{ content: string; updated_at: string }>(
        `twinblitz:note:${userId}:${taskId}`
      );
      if (!note) return undefined;
      return { id: 0, content: note.content, updated_at: note.updated_at };
    }
    const keys = await r.keys(`twinblitz:note:${userId}:*`);
    const notes = [];
    for (const key of keys) {
      const note = await r.get<{ content: string; updated_at: string }>(key);
      if (!note) continue;
      const tid = key.replace(`twinblitz:note:${userId}:`, "");
      notes.push({
        id: 0,
        task_id: tid === "global" ? null : tid,
        content: note.content,
        updated_at: note.updated_at,
      });
    }
    return notes.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
  }

  await ensureSqlSchema();
  const db = getSqlClient();
  if (taskId) {
    const result = await db.execute({
      sql: "SELECT * FROM notes WHERE user_id = ? AND task_id = ?",
      args: [userId, taskId],
    });
    if (result.rows.length === 0) return undefined;
    const row = result.rows[0];
    return {
      id: Number(row.id),
      content: String(row.content),
      updated_at: String(row.updated_at),
    };
  }
  const result = await db.execute({
    sql: "SELECT * FROM notes WHERE user_id = ? ORDER BY updated_at DESC",
    args: [userId],
  });
  return result.rows.map((row) => ({
    id: Number(row.id),
    task_id: row.task_id != null ? String(row.task_id) : null,
    content: String(row.content),
    updated_at: String(row.updated_at),
  }));
}

export async function addPracticeLog(
  userId: number,
  taskId: string,
  description: string,
  durationMinutes: number
) {
  const r = getRedis();
  if (r) {
    const key = `twinblitz:practice:${userId}`;
    const logs =
      (await r.get<
        { task_id: string; description: string; duration_minutes: number; created_at: string }[]
      >(key)) ?? [];
    logs.unshift({
      task_id: taskId,
      description,
      duration_minutes: durationMinutes,
      created_at: new Date().toISOString(),
    });
    await r.set(key, logs.slice(0, 50));
    await addXp(userId, 15);
    return;
  }

  await ensureSqlSchema();
  await getSqlClient().execute({
    sql: "INSERT INTO practice_logs (user_id, task_id, description, duration_minutes) VALUES (?, ?, ?, ?)",
    args: [userId, taskId, description, durationMinutes],
  });
  await addXp(userId, 15);
}

export async function getPracticeLogs(userId: number, taskId?: string) {
  const r = getRedis();
  if (r) {
    const logs =
      (await r.get<
        { task_id: string; description: string; duration_minutes: number; created_at: string }[]
      >(`twinblitz:practice:${userId}`)) ?? [];
    return taskId ? logs.filter((l) => l.task_id === taskId) : logs;
  }

  await ensureSqlSchema();
  const db = getSqlClient();
  const result = taskId
    ? await db.execute({
        sql: "SELECT * FROM practice_logs WHERE user_id = ? AND task_id = ? ORDER BY created_at DESC",
        args: [userId, taskId],
      })
    : await db.execute({
        sql: "SELECT * FROM practice_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 50",
        args: [userId],
      });
  return result.rows;
}

async function addXp(userId: number, amount: number) {
  const today = new Date().toISOString().split("T")[0];
  const r = getRedis();
  if (r) {
    const key = `twinblitz:stats:${userId}`;
    const stats = (await r.get<{
      xp: number;
      streak: number;
      last_active_date: string | null;
    }>(key)) ?? { xp: 0, streak: 0, last_active_date: null };

    let streak = stats.streak;
    if (stats.last_active_date !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];
      streak = stats.last_active_date === yesterdayStr ? streak + 1 : 1;
    }
    await r.set(key, {
      xp: stats.xp + amount,
      streak,
      last_active_date: today,
    });
    return;
  }

  await ensureSqlSchema();
  const result = await getSqlClient().execute({
    sql: "SELECT xp, streak, last_active_date FROM user_stats WHERE user_id = ?",
    args: [userId],
  });
  if (result.rows.length === 0) return;

  const row = result.rows[0];
  let streak = Number(row.streak);
  const lastActive = row.last_active_date ? String(row.last_active_date) : null;

  if (lastActive !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];
    streak = lastActive === yesterdayStr ? streak + 1 : 1;
  }

  await getSqlClient().execute({
    sql: "UPDATE user_stats SET xp = xp + ?, streak = ?, last_active_date = ? WHERE user_id = ?",
    args: [amount, streak, today, userId],
  });
}

export async function getUserStats(userId: number) {
  const r = getRedis();
  if (r) {
    return (
      (await r.get<{
        xp: number;
        streak: number;
        last_active_date: string | null;
      }>(`twinblitz:stats:${userId}`)) ?? { xp: 0, streak: 0, last_active_date: null }
    );
  }

  await ensureSqlSchema();
  const result = await getSqlClient().execute({
    sql: "SELECT xp, streak, last_active_date FROM user_stats WHERE user_id = ?",
    args: [userId],
  });
  if (result.rows.length === 0) return undefined;
  const row = result.rows[0];
  return {
    xp: Number(row.xp),
    streak: Number(row.streak),
    last_active_date: row.last_active_date ? String(row.last_active_date) : null,
  };
}

export function getDbBackend(): "redis" | "turso" | "local" | "ephemeral" {
  if (useRedis()) return "redis";
  if (process.env.TURSO_DATABASE_URL) return "turso";
  if (!process.env.VERCEL) return "local";
  return "ephemeral";
}
