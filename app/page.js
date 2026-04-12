import Link from "next/link";
import HotTopics from "./_components/HotTopics";
import Image from "next/image";
import Post1 from "@/public/images/post1.jpg";

export default function Page() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center p-5 px-10">
      <HotTopics />
      <div className="grid w-full flex-1 grid-cols-3 grid-rows-2 gap-3">
        <ArticleCard col_start={1} row_start={1} />
        <ArticleCard col_start={1} row_start={2} />
        <ArticleCard type={2} col_start={2} row_start={1} />
        <ArticleCard col_start={3} row_start={1} />
        <ArticleCard col_start={3} row_start={2} />
      </div>
    </main>
  );
}

function ArticleCard({ type = 1, col_start, row_start, href = "/" }) {
  const gridStyle = {
    gridColumnStart: col_start,
    gridRowStart: row_start,
  };

  if (type === 2) {
    gridStyle.gridRowEnd = "span 2";
  }

  if (type === 1)
    return (
      <Link
        href={href}
        className="bg-brand-2 relative flex items-center justify-center overflow-hidden rounded-2xl"
        style={gridStyle}
        draggable={false}
      >
        <div className="h-full w-full">
          <div className="text-brand-1 absolute bottom-0 z-50 m-3 flex flex-col items-start">
            <h3 className="mb-1 rounded-full bg-[#00000045] p-2 backdrop-blur-sm">
              قیمت گوشی روزانه رکورد خود را می شکند
            </h3>
            <p className="rounded-full bg-[#00000045] p-2 text-sm text-[#d6d6d6] backdrop-blur-xs">
              <span>پویان فرهادی</span> | <span>27 فروردین 1405</span>
            </p>
          </div>
          <Image
            src={Post1}
            alt="پست 1"
            fill
            className="z-0 object-cover object-top"
            placeholder="blur"
            draggable={false}
          />
        </div>
      </Link>
    );

  if (type === 2)
    return (
      <Link
        href={href}
        className="bg-brand-2 relative flex items-center justify-center overflow-hidden rounded-2xl"
        style={gridStyle}
        draggable={false}
      >
        <div className="h-full w-full">
          <div className="text-brand-1 absolute bottom-0 z-50 m-3 flex flex-col items-start">
            <h3 className="mb-1 rounded-full bg-[#00000045] p-2 backdrop-blur-sm">
              قیمت گوشی روزانه رکورد خود را می شکند
            </h3>
            <p className="rounded-full bg-[#00000045] p-2 text-sm text-[#d6d6d6] backdrop-blur-xs">
              <span>پویان فرهادی</span> | <span>27 فروردین 1405</span>
            </p>
          </div>
          <Image
            src={Post1}
            alt="پست 1"
            fill
            className="z-0 object-cover object-top"
            placeholder="blur"
            draggable={false}
          />
        </div>
      </Link>
    );

  return null;
}
