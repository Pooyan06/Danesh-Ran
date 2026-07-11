const baseUrl = "https://daneshran.ir";

// لیست تمام صفحات ثابت
const pages = [
  {
    path: "",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority: 1.0,
  },
  {
    path: "articles",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    path: "articles/new",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "aboutus",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "contactus",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    path: "login",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "never",
    priority: 0.1,
  },
  {
    path: "singup",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "never",
    priority: 0.1,
  },
];

// دیتای مقالات (برای صفحات داینامیک)
const articles = [
  { id: 1, date: "2024-03-25" },
  { id: 2, date: "2024-03-22" },
  { id: 3, date: "2024-03-20" },
  { id: 4, date: "2024-03-18" },
  { id: 5, date: "2024-03-15" },
  { id: 6, date: "2024-03-12" },
];

export default function sitemap() {
  // صفحات ثابت
  const staticPages = pages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // صفحات داینامیک (مقالات)
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.id}`,
    lastModified: article.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
