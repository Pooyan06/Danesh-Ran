import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <section className="space-y-4" aria-label="لیست مقالات">
      <div className="flex flex-col space-y-5">
        {articles.map((article) => (
          <article key={article.id}>
            <ArticleCard
              id={article.id}
              tag={article.tag}
              title={article.title}
              author={article.author}
              date={article.date}
              views={article.views}
              likes={article.likes}
            >
              {article.abstract}
            </ArticleCard>
          </article>
        ))}
      </div>
    </section>
  );
}
