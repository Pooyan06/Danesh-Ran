import { NextResponse } from "next/server";
import { getArticleById } from "@/app/_services/articles";

export async function GET(request, { params }) {
  const { id } = await params;

  const { article, error } = await getArticleById({ id });

  return NextResponse.json({
    article,
    error,
  });
}
