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
    <div className="border-brand-7 flex-3/4 space-y-5 rounded-2xl border bg-white p-10">
      <ArticleHeadline article={article} />
      <hr className="text-brand-7 w-full" />
      <ArticleContent article={article} />
      <hr className="text-brand-7 w-full" />
      <CommentsSection article={article} />
    </div>
  );
}

function ArticleHeadline({ article }) {
  return (
    <div className="space-y-3">
      <h4 className="bg-brand-5 text-brand-4 inline-block rounded-full p-2 text-[0.9rem] font-medium">
        {article.tag}
      </h4>
      <h2 className="text-2xl font-bold">{article.title}</h2>
      <div className="text-brand-4 flex gap-4 text-[0.9rem]">
        <div className="flex items-center gap-1 pt-1">
          <UserIcon size={1.3} />
          <p>{article.author}</p>
        </div>
        <div className="flex gap-1 pt-1">
          <DateRangeIcon />
          <p>{article.date}</p>
        </div>
        <div className="flex gap-1 pt-1">
          <EyeIcon size={1.1} />
          <p>{article.views}</p>
        </div>
        <div className="hover:bg-brand-11 flex cursor-pointer gap-1 rounded-full px-2 pt-1 duration-150">
          <HeartIcon size={1.1} />
          <p>{article.likes}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function ArticleContent({ article }) {
  return (
    <div className="space-y-7">
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
    </div>
  );
}

function ArticleAbstract({ abstract }) {
  return (
    <div className="border-brand-3 bg-brand-1 rounded-2xl border-r-4 p-4">
      چكيده: {abstract}
    </div>
  );
}

function ArticleText({ title = "", content, list = [] }) {
  return (
    <div className="mb-6 space-y-2">
      {title && (
        <h3 className="text-brand-2 text-primary text-xl font-semibold">
          {title}
        </h3>
      )}
      <div className="[&_li]:mb-1 [&_p]:mb-4 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pr-6">
        <p>{content}</p>
        {list.length > 0 && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function PdfDownload() {
  return (
    <div className="bg-brand-1 border-brand-7 hover:border-brand-3 flex items-center justify-between rounded-xl border px-4 py-4 duration-300">
      <div className="flex gap-1">
        <p>
          نسخه <span className="text-brand-4">۱.۲</span>
        </p>
        <span>- PDF</span>
        <p>
          <span className="text-brand-4">۴.۳</span> مگابايت
        </p>
      </div>
      <div>
        <Button type={1} size="small">
          <DownloadIcon size={1.6} />
          دانلود
        </Button>
      </div>
    </div>
  );
}

function CommentsSection({ article }) {
  return (
    <div>
      <p className="text-brand-2 mb-6 flex items-center gap-1 text-xl font-bold">
        <CommentIcon size={1.4} />
        نظرات
      </p>
      <div>
        <Input type="area" placeholder="نظر خود را بنويسيد..." />
        <div className="mt-1 flex items-center gap-3">
          <Button size="small">
            <SendIcon size={1.3} />
            ارسال نظر
          </Button>
          <p className="text-brand-4 text-sm">
            با ثبت نظر، با قوانین جامعه موافقت می‌کنید.
          </p>
        </div>
      </div>
      <div className="mt-9">
        {article.comments.map((comment, i) => (
          <div className="my-5 space-y-5" key={comment.id}>
            <CommentItem author={comment.author} date={comment.date}>
              {comment.text}
            </CommentItem>
            {i < article.comments.length - 1 && (
              <hr className="text-brand-7 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CommentItem({ author, date, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="from-brand-2 to-brand-3 text-brand-1 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br font-bold">
        {author[0]}
      </div>
      <div className="space-y-2">
        <div className="flex gap-3">
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-brand-4 text-[0.800rem] font-medium">
            {date} روز پيش
          </p>
        </div>
        <div className="text-sm">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
