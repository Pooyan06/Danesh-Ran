import {
  CommentIcon,
  DateRangeIcon,
  DownloadIcon,
  EyeIcon,
  HeartIcon,
  SendIcon,
  UserIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";

export default function ArticleMain({ article }) {
  return (
    <article className="border-brand-7 flex-3/4 space-y-4 rounded-2xl border bg-white p-4 sm:space-y-5 sm:p-6 lg:p-10">
      <ArticleHeadline article={article} />
      <hr className="text-brand-7 w-full" />
      <ArticleContent article={article} />
      <hr className="text-brand-7 w-full" />
      <CommentsSection article={article} />
    </article>
  );
}

function ArticleHeadline({ article }) {
  return (
    <header className="space-y-2 sm:space-y-3">
      <span className="bg-brand-5 text-brand-4 inline-block rounded-full p-1.5 text-[0.75rem] font-medium sm:p-2 sm:text-[0.9rem]">
        {article.tag}
      </span>
      <h1 className="text-xl font-bold sm:text-2xl">{article.title}</h1>
      <div className="text-brand-4 flex flex-wrap gap-2 text-[0.75rem] sm:gap-4 sm:text-[0.9rem]">
        <div className="flex items-center gap-1 pt-1">
          <UserIcon size={1.1} />
          <span>{article.author}</span>
        </div>
        <div className="flex gap-1 pt-1">
          <DateRangeIcon />
          <span>{article.date}</span>
        </div>
        <div className="flex gap-1 pt-1">
          <EyeIcon size={1} />
          <span>{article.views}</span>
        </div>
        <button
          className="hover:bg-brand-11 flex cursor-pointer gap-1 rounded-full px-2 pt-1 duration-150"
          aria-label={`پسندیدن مقاله (${article.likes} پسند)`}
        >
          <HeartIcon size={1} />
          <span>{article.likes}</span>
        </button>
      </div>
    </header>
  );
}

function ArticleContent({ article }) {
  return (
    <section className="space-y-5 sm:space-y-7" aria-label="محتوا مقاله">
      {article.abstract && <ArticleAbstract abstract={article.abstract} />}
      {article.sections.map((section, i) => (
        <ArticleText
          title={section.title}
          content={section.content}
          list={section.list}
          key={i}
        />
      ))}
      <PdfDownload />
    </section>
  );
}

function ArticleAbstract({ abstract }) {
  return (
    <div className="border-brand-3 bg-brand-1 rounded-2xl border-r-4 p-3 text-sm sm:p-4 sm:text-base">
      <strong>چكيده:</strong> {abstract}
    </div>
  );
}

function ArticleText({ title = "", content, list = [] }) {
  return (
    <section className="mb-4 space-y-2 sm:mb-6">
      {title && (
        <h2 className="text-brand-2 text-primary text-lg font-semibold sm:text-xl">
          {title}
        </h2>
      )}
      <div className="text-sm sm:text-base [&_li]:mb-1 [&_p]:mb-3 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pr-6">
        <p>{content}</p>
        {list.length > 0 && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function PdfDownload() {
  return (
    <div className="bg-brand-1 border-brand-7 hover:border-brand-3 flex flex-col gap-3 rounded-xl border px-3 py-3 duration-300 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-4">
      <div className="flex flex-wrap gap-1 text-sm sm:text-base">
        <span>
          نسخه <span className="text-brand-4">۱.۲</span>
        </span>
        <span>- PDF</span>
        <span>
          <span className="text-brand-4">۴.۳</span> مگابايت
        </span>
      </div>
      <div>
        <Button type={1} size="small" aria-label="دانلود فایل PDF مقاله">
          <DownloadIcon size={1.4} />
          <span className="text-xs sm:text-sm">دانلود</span>
        </Button>
      </div>
    </div>
  );
}

function CommentsSection({ article }) {
  return (
    <section aria-label="بخش نظرات">
      <h2 className="text-brand-2 mb-4 flex items-center gap-1 text-lg font-bold sm:mb-6 sm:text-xl">
        <CommentIcon size={1.2} />
        نظرات
      </h2>
      <div>
        <Input type="area" placeholder="نظر خود را بنويسيد..." />
        <div className="mt-2 flex flex-col gap-2 sm:mt-1 sm:flex-row sm:items-center sm:gap-3">
          <Button size="small">
            <SendIcon size={1.2} />
            <span className="text-xs sm:text-sm">ارسال نظر</span>
          </Button>
          <p className="text-brand-4 text-xs sm:text-sm">
            با ثبت نظر، با قوانین جامعه موافقت می‌کنید.
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-9">
        {article.comments.map((comment, i) => (
          <div className="my-4 space-y-4 sm:my-5 sm:space-y-5" key={comment.id}>
            <CommentItem author={comment.author} date={comment.date}>
              {comment.text}
            </CommentItem>
            {i < article.comments.length - 1 && (
              <hr className="text-brand-7 w-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CommentItem({ author, date, children }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="from-brand-2 to-brand-3 text-brand-1 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br text-sm font-bold sm:h-10 sm:w-10 sm:text-base">
        {author[0]}
      </div>
      <div className="space-y-1 sm:space-y-2">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className="text-xs font-semibold sm:text-sm">{author}</span>
          <span className="text-brand-4 text-[0.7rem] font-medium sm:text-[0.800rem]">
            {date} روز پيش
          </span>
        </div>
        <div className="text-xs sm:text-sm">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
