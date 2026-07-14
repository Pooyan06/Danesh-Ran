import supabase from "./supabase";

export async function insertComment({ article_id, author, text }) {
  const { data, error } = await supabase.from("comments").insert({
    article_id,
    author,
    text,
  });

  return { data, error };
}
