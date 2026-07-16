import supabase from "./supabase";

export async function getArticlesFromDB({ limit, page } = {}) {
  let query = supabase
    .from("articles")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  if (page) {
    const pageSize = limit ?? 10;
    const startRange = (page - 1) * pageSize;
    const endRange = startRange + pageSize - 1;

    query = query.range(startRange, endRange);
  }

  const { data: articles, error, count } = await query;

  return {
    articles,
    count,
    error,
  };
}

export async function getArticleById({ id }) {
  let { data: article, error } = await supabase
    .from("articles")
    .select("*,sections(*),comments(*)")
    .eq("id", id)
    .single();

  return { article, error };
}

export async function insertArticle({
  tag,
  title,
  author,
  date,
  abstract,
  views,
  likes,
}) {
  const { data: article } = await supabase
    .from("articles")
    .insert({
      tag,
      title,
      author,
      date,
      abstract,
      views,
      likes,
    })
    .select()
    .single();

  return article;
}
