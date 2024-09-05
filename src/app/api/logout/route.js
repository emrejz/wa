import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    { success: true },
    { status: 200, headers: { "content-type": "application/json" } }
  );
  response.cookies.delete("token");

  return response;
}
