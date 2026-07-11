import Link from "next/link";
import {
  ArrowIcon,
  DateRangeIcon,
  EyeIcon,
  HeartIcon,
  UserIcon,
} from "@/app/_assets/Icons";

export default function ArticleCard({
  id,
  tag,
  title,
  author,
  date,
  views,
  likes,
  children,
}) {
  return (
    <div className="border-brand-7 w-full space-y-3 rounded-2xl border bg-white p-4 sm:space-y-4 sm:p-5">
      <div>
        <span className="bg-brand-5 text-brand-4 inline rounded-full p-1.5 text-[0.75rem] font-medium sm:p-2 sm:text-[0.9rem]">
          {tag}
        </span>
      </div>
      <div>
        <Link href={`/articles/${id}`}>
          <h2 className="inline text-base font-bold sm:text-lg md:text-xl">
            {title}
          </h2>
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 text-[0.8rem] sm:gap-0 sm:space-x-2 sm:text-[0.9rem]">
        <div className="text-brand-4 flex items-center gap-1">
          <UserIcon size={1.1} />
          <span>{author}</span>
        </div>
        <div className="text-brand-4 flex items-center gap-1">
          <DateRangeIcon />
          <span>{date}</span>
        </div>
      </div>
      <div>
        <p className="text-brand-4 text-sm sm:text-base">{children}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex space-x-5 text-[0.8rem] sm:text-[0.9rem]">
          <div className="text-brand-4 flex items-center gap-1">
            <EyeIcon size={1} />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1 text-red-400">
            <HeartIcon size={1} />
            <span>{likes}</span>
          </div>
        </div>
        <Link
          href={`/articles/${id}`}
          className="group text-brand-2 hover:text-brand-3 flex cursor-pointer items-center gap-2 duration-300"
          aria-label={`مطالعه ادامه مطلب مقاله ${title}`}
        >
          <span className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1 sm:text-base">
            ادامه مطلب
          </span>
          <ArrowIcon size={1} />
        </Link>
      </div>
    </div>
  );
}
