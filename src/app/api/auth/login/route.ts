import { NextResponse } from "next/server";
import { authResponse, login } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }
    const user = await login(email, password);
    return authResponse(user, { user });
  } catch (e) {
    console.error("Login error:", e);
    return NextResponse.json({ error: (e as Error).message }, { status: 401 });
  }
}
