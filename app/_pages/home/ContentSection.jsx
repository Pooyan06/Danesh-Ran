import PostArticle from "./PostArticle";
import ArticleList from "@/app/_components/ArticleList";
import HotTopics from "@/app/_components/HotTopics";
import PopularAuthors from "@/app/_components/PopularAuthors";
import { FileTextIcon } from "@/app/_assets/Icons";
import Link from "next/link";

export default async function ContentSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/articles`, {
    next: {
      revalidate: 3600,
    },
  });

  const { articles } = await res.json();

  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <div className="flex-3/4 space-y-5 max-lg:w-full">
        <div className="text-brand-2 flex items-center gap-1">
          <FileTextIcon size={1.3} />
          <p className="font-semibold">مقالات جدید</p>
        </div>
        <ArticleList articles={articles} />
        <Link href="/articles/new">
          <PostArticle />
        </Link>
      </div>
      <div className="sticky top-20 h-fit space-y-5 max-lg:relative max-lg:top-0 max-lg:w-full lg:flex-1/4">
        <PopularAuthors />
        <HotTopics />
      </div>
    </section>
  );
}
