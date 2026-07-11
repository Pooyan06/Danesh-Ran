import PentoolIcon from "./PentoolIcon";
import Button from "@/app/_components/Button";
import SearchBar from "@/app/_components/SearchBar";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mt-18 mb-10 flex flex-col items-center justify-center gap-7 text-center">
      <div className="space-y-1">
        <h4 className="text-brand-2 text-[2.4rem] font-semibold max-sm:text-[1.8rem]">
          دانش خود را منتشر کنید
        </h4>
        <h4 className="text-brand-3 text-[2.6rem] font-semibold max-sm:text-[2rem]">
          همراه با جامعه علمی ایران
        </h4>
      </div>
      <p className="text-brand-4 text-[1.2rem] font-normal max-sm:px-2 max-sm:text-[1rem]">
        ثبت نام کنید، مقاله آپلود کنید و از بازخورد متخصصان بهره مند شوید.
      </p>
      <div className="w-full max-sm:px-2">
        <div className="flex items-center justify-center max-sm:flex-col max-sm:gap-2 sm:space-x-4">
          <Link href="/articles/new" className="max-sm:w-full">
            <Button type={1}>شروع انتشار</Button>
          </Link>
          <Link href="/articles" className="max-sm:w-full">
            <Button type={2}>
              <p className="font-medium">مشاهده مقاله</p>
            </Button>
          </Link>
        </div>
      </div>
      <Link href="/articles/new">
        <PentoolIcon />
      </Link>
      <SearchBar />
    </section>
  );
}
