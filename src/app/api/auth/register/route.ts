import { NextResponse } from "next/server";
import { authResponse, register } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password || !name) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }
    const user = await register(email, password, name);
    return authResponse(user, { user });
  } catch (e) {
    console.error("Register error:", e);
    const msg = (e as Error).message;
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
