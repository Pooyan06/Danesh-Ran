import Button from "@/app/_components/Button";
import PentoolIcon from "./PentoolIcon";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="mt-18 mb-10 flex flex-col items-center justify-center gap-7 text-center">
      <div className="space-y-1">
        <h4 className="text-brand-2 text-[2.4rem] font-semibold">
          دانش خود را منتشر کنید
        </h4>
        <h4 className="text-brand-3 text-[2.6rem] font-semibold">
          همراه با جامعه علمی ایران
        </h4>
      </div>
      <p className="text-brand-4 text-[1.2rem] font-normal">
        ثبت نام کنید، مقاله آپلود کنید و از بازخورد متخصصان بهره مند شوید.
      </p>
      <div className="w-full">
        <div className="space-x-4">
          <Button type={1}>شروع انتشار</Button>
          <Button type={2}>
            <p className="font-medium">مشاهده مقاله</p>
          </Button>
        </div>
      </div>
      <PentoolIcon />
      <SearchBar />
    </section>
  );
}
