import ArticleCard from "./ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-5">
        {articles.map((article) => (
          <ArticleCard
            id={article.id}
            tag={article.tag}
            title={article.title}
            author={article.author}
            date={article.date}
            views={article.views}
            likes={article.likes}
            key={article.id}
          >
            {article.abstract}
          </ArticleCard>
        ))}
      </div>
    </div>
  );
}
