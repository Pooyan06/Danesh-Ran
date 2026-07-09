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
    <div className="border-brand-7 w-full space-y-4 rounded-2xl border bg-white p-5">
      <div>
        <p className="bg-brand-5 text-brand-4 inline rounded-full p-2 text-[0.9rem] font-medium">
          {tag}
        </p>
      </div>
      <div>
        <Link href={`/articles/${id}`}>
          <h3 className="inline font-bold">{title}</h3>
        </Link>
      </div>
      <div className="flex space-x-2 text-[0.9rem]">
        <div className="text-brand-4 flex gap-1">
          <UserIcon size={1.3} />
          <p>{author}</p>
        </div>
        <div className="text-brand-4 flex gap-1">
          <DateRangeIcon />
          <p>{date}</p>
        </div>
      </div>
      <div>
        <p className="text-brand-4">{children}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-5 text-[0.9rem]">
          <div className="text-brand-4 flex gap-1">
            <EyeIcon size={1.1} />
            <p>{views}</p>
          </div>
          <div className="flex gap-1 text-red-400">
            <HeartIcon size={1.1} />
            <p>{likes}</p>
          </div>
        </div>
        <Link href={`/articles/${id}`}>
          <div className="group text-brand-2 hover:text-brand-3 flex cursor-pointer items-center space-x-2 duration-300">
            <p className="font-semibold transition-transform duration-300 group-hover:translate-x-1">
              ادامه مطلب
            </p>
            <ArrowIcon size={1.1} />
          </div>
        </Link>
      </div>
    </div>
  );
}
