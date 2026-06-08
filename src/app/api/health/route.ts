import { NextResponse } from "next/server";
import { getDbBackend } from "@/lib/db";

export async function GET() {
  const backend = getDbBackend();
  const persistent = backend === "redis" || backend === "turso";
  return NextResponse.json({
    ok: persistent,
    backend,
    persistent,
    hint: persistent ? `Using ${backend}` : "Storage not persistent yet",
  });
}
