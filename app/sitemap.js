// app/sitemap.js

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
  // تنظیم آدرس پایه سایت
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const today = new Date().toISOString();

  // ساخت صفحات استاتیک (همیشه انجام می‌شود)
  const staticPagesMap = staticPages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: today,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  let articlePages = [];

  // بررسی می‌کنیم که در زمان build نیستیم
  const isBuildTime = process.env.NEXT_PHASE === "phase-production-build";

  // فقط در زمان runtime یا development، مقالات را دریافت کن
  if (!isBuildTime) {
    try {
      const res = await fetch(`${baseUrl}/api/articles`, {
        next: {
          revalidate: 3600,
        },
        // اگر API بیش از ۵ ثانیه طول کشید، timeout کند
        signal: AbortSignal.timeout(5000),
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch articles. Status: ${res.status}`);
      }

      const result = await res.json();
      const articles = result.articles || [];

      // ساخت صفحات مقالات
      articlePages = articles.map((article) => ({
        url: `${baseUrl}/articles/${article.id}`,
        lastModified:
          article.updated_at || article.created_at || article.date || today,
        changeFrequency: "weekly",
        priority: 0.8,
      }));

      if (process.env.NODE_ENV === "development") {
        console.log(`📊 Sitemap: ${articles.length} articles included`);
      }
    } catch (error) {
      console.warn(
        "⚠️ Sitemap: Could not fetch articles, using static pages only",
      );
      if (process.env.NODE_ENV === "development") {
        console.warn("Error details:", error.message);
      }
    }
  } else {
    console.log("🔨 Build time: Skipping API calls for sitemap");
  }

  return [...staticPagesMap, ...articlePages];
}
