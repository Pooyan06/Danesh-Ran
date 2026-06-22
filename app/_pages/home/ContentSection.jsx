import ArticleList from "./ArticleList";
import HotTopics from "./HotTopics";
import PopularAuthors from "./PopularAuthors";
import PostArticle from "./PostArticle";

export default function ContentSection() {
  return (
    <section className="flex min-h-screen gap-8">
      <div className="flex-3/4 space-y-5">
        <ArticleList />
        <PostArticle />
      </div>
      <div className="sticky top-20 h-fit flex-1/4 space-y-5">
        <PopularAuthors />
        <HotTopics />
      </div>
    </section>
  );
}
