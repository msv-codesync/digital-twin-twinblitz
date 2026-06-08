import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "./db";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "twinblitz-secret-change-in-production"
);
export const COOKIE = "twinblitz_session";
const LEGACY_COOKIE = "todoz_session";

export type SessionUser = {
  id: number;
  email: string;
  name: string;
};

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function register(email: string, password: string, name: string) {
  const existing = await getUserByEmail(email);
  if (existing) throw new Error("Email already registered");
  if (password.length < 6) throw new Error("Password must be at least 6 characters");
  const hash = await hashPassword(password);
  return createUser(email, hash, name);
}

export async function login(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) throw new Error("Invalid email or password");
  const valid = await verifyPassword(password, user.password_hash);
  if (!valid) throw new Error("Invalid email or password");
  return { id: user.id, email: user.email, name: user.name };
}

async function createToken(user: SessionUser) {
  return new SignJWT({
    sub: String(user.id),
    email: user.email,
    name: user.name,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(SECRET);
}

function applySessionCookie(res: NextResponse, token: string) {
  res.cookies.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  res.cookies.delete(LEGACY_COOKIE);
}

/** Set session cookie on a JSON response (required for Route Handlers in Next.js) */
export async function authResponse(user: SessionUser, data: object, status = 200) {
  const token = await createToken(user);
  const res = NextResponse.json(data, { status });
  applySessionCookie(res, token);
  return res;
}

export async function logoutResponse() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete(COOKIE);
  res.cookies.delete(LEGACY_COOKIE);
  return res;
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE);
  cookieStore.delete(LEGACY_COOKIE);
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token =
    cookieStore.get(COOKIE)?.value ?? cookieStore.get(LEGACY_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, SECRET);
    const userId = Number(payload.sub);
    const email = String(payload.email ?? "");
    const name = String(payload.name ?? "");

    if (!userId || !email) return null;

    return { id: userId, email, name };
  } catch {
    return null;
  }
}

export async function requireUser() {
  const user = await getSession();
  if (!user) throw new Error("Unauthorized");
  return user;
}
