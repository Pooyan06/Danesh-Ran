export const revalidate = 3600;

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
];

export default async function sitemap() {
  let articles = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch articles. Status: ${res.status}`);
    }

    const result = await res.json();

    articles = result.articles || [];

    if (process.env.NODE_ENV === "development") {
      console.log(`📊 Sitemap: ${articles.length} articles included`);
    }
  } catch (error) {
    console.error("❌ Error fetching articles for sitemap:", error);

    articles = [];
  }

  const today = new Date().toISOString();

  const staticPagesMap = staticPages.map((page) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const articlePages = articles.map((article) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.id}`,
    lastModified:
      article.updated_at || article.created_at || article.date || today,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPagesMap, ...articlePages];
}
