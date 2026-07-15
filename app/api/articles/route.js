import { NextResponse } from "next/server";
import { getArticlesFromDB } from "@/app/_services/articles";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  const { articles, count, error } = await getArticlesFromDB({
    limit,
    page,
  });

  return NextResponse.json({
    articles,
    count,
    error,
  });
}
