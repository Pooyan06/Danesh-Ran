import supabase from "./supabase";

export async function insertSection({ article_id, title, content, type }) {
  const { data, error } = await supabase.from("sections").insert({
    article_id,
    title,
    content,
    type,
  });

  return { data, error };
}
