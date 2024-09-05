import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const data = await fetch(
      process.env.WA_API_URL +
        "?q=" +
        body.city +
        ",tr&appid=" +
        process.env.WA_API_KEY
    );
    if (!data.ok) {
      throw new Error(data.statusText);
    }
    const jsonData = await data.json();
    return NextResponse.json(
      { data: jsonData },
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error?.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
