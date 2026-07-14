import supabase from "./supabase";

export async function getArticles() {
  let { data: articles, error } = await supabase.from("articles").select("*");

  return { articles, error };
}

export async function getArticleById(id) {
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
