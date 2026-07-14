import { getArticles } from "./_services/articles";

export const revalidate = 3600;

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

const staticPages = [
  {
    path: "",
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    path: "articles",
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    path: "articles/new",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "aboutus",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "contactus",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    path: "login",
    changeFrequency: "never",
    priority: 0.1,
  },
  {
    path: "signup",
    changeFrequency: "never",
    priority: 0.1,
  },
];

export default async function sitemap() {
  let articles = [];

  try {
    const { articles: result } = await getArticles();
    articles = result || [];

    if (process.env.NODE_ENV === "development") {
      console.log(`📊 Sitemap: ${articles.length} articles included`);
    }
  } catch (error) {
    console.error("❌ Error fetching articles for sitemap:", error);
    articles = [];
  }

  const today = new Date().toISOString().split("T")[0];

  const staticPagesMap = staticPages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // صفحات داینامیک (مقالات)
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.id}`,
    lastModified:
      article.updated_at || article.created_at || article.date || today,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPagesMap, ...articlePages];
}
