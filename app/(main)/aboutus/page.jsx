import {
  AwardIcon,
  BookmarkIcon,
  FileTextIcon,
  FlaghIcon,
  GlobIcon,
  HandSHakeIcon,
  HeartIcon,
  LockIcon,
  ShieldCheckIcon,
  TargetIcon,
  UsersIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Link from "next/link";

export const metadata = {
  title: "درباره ما",
};

export default function page() {
  return (
    <section className="mt-18 mb-10 space-y-10">
      <AboutUshHeader />
      <hr className="text-brand-7 -mx-15 w-screen" />
      <AboutMissionVision />
      <AboutStats />
      <AboutTeam />
      <AboutValues />
      <AboutCTA />
    </section>
  );
}

function AboutUshHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="bg-brand-2 flex h-18 w-18 items-center justify-center rounded-full text-3xl text-white">
        <UsersIcon />
      </div>
      <p className="text-brand-2 text-4xl font-bold">
        درباره <span className="text-brand-3">دانشران</span>
      </p>
      <p className="text-brand-4 max-w-150 text-center">
        دانشران یک پلتفرم علمی باز است که با هدف ترویج دانش و ارتباط پژوهشگران
        ایرانی راه‌اندازی شده است. ما به دنبال ایجاد فضایی شفاف و مشارکتی برای
        انتشار مقالات علمی هستیم.
      </p>
    </div>
  );
}

function AboutMissionVision() {
  return (
    <div className="flex gap-5">
      <div className="border-brand-7 flex-1/2 space-y-4 rounded-xl border bg-white p-8 duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-brand-9 text-brand-2 flex h-13 w-13 items-center justify-center rounded-full">
          <TargetIcon size={2} />
        </div>
        <p className="text-xl font-semibold">چشم انداز</p>
        <p className="text-brand-4">
          تبدیل شدن به مرجع اصلی انتشار و تبادل مقالات علمی در ایران و ایجاد
          بستری برای همکاری‌های بین‌رشته‌ای.
        </p>
      </div>
      <div className="border-brand-7 flex-1/2 space-y-4 rounded-xl border bg-white p-8 duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-brand-9 text-brand-2 flex h-13 w-13 items-center justify-center rounded-full">
          <FlaghIcon size={1.8} />
        </div>
        <p className="text-xl font-semibold">رسالت</p>
        <p className="text-brand-4">
          دسترسی آزاد به دانش، توانمندسازی پژوهشگران جوان و تسهیل فرایند داوری و
          انتشار با حفظ کیفیت و شفافیت.
        </p>
      </div>
    </div>
  );
}

function AboutStats() {
  return (
    <div className="flex gap-5">
      <div className="border-brand-7 text-brand-8 flex max-w-1/4 flex-1/4 flex-col items-center gap-2 rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
        <UsersIcon size={1.7} />
        <p className="text-brand-2 text-3xl font-bold">۱۲،۴۰۰+</p>
        <p className="text-sm">کاربران فعال</p>
      </div>
      <div className="border-brand-7 text-brand-8 flex max-w-1/4 flex-1/4 flex-col items-center gap-2 rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
        <FileTextIcon size={1.7} />
        <p className="text-brand-2 text-3xl font-bold">۳،۲۰۰+</p>
        <p className="text-sm">مقالات منتشر شده</p>
      </div>
      <div className="border-brand-7 text-brand-8 flex max-w-1/4 flex-1/4 flex-col items-center gap-2 rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
        <BookmarkIcon size={1.7} />
        <p className="text-brand-2 text-3xl font-bold">۸۹۰+</p>
        <p className="text-sm">نویسندگان</p>
      </div>
      <div className="border-brand-7 text-brand-8 flex max-w-1/4 flex-1/4 flex-col items-center gap-2 rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
        <GlobIcon size={1.7} />
        <p className="text-brand-2 text-3xl font-bold">۴۵+</p>
        <p className="text-sm">دانشگاه و مؤسسه</p>
      </div>
    </div>
  );
}

function AboutTeam() {
  return (
    <div>
      <div className="text-brand-2 flex items-center gap-2">
        <UsersIcon size={1.7} />
        <p className="text-xl font-semibold">تیم دانشران</p>
      </div>
      <div className="mt-5 flex gap-5">
        <div className="border-brand-7 hover:border-brand-3 flex h-50 w-60 flex-col items-center justify-evenly rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="from-brand-2 to-brand-3 flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br text-2xl font-bold text-white">
            پ
          </div>
          <div>
            <p className="mb-1 text-center font-semibold">پویان فرهادی</p>
            <p className="text-brand-4 text-center text-sm">مدیر پروژه</p>
          </div>
        </div>
        <div className="border-brand-7 hover:border-brand-3 flex h-50 w-60 flex-col items-center justify-evenly rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="from-brand-2 to-brand-3 flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br text-2xl font-bold text-white">
            س
          </div>
          <div>
            <p className="mb-1 text-center font-semibold">سارا حسینی</p>
            <p className="text-brand-4 text-center text-sm">مدیر علمی</p>
          </div>
        </div>
        <div className="border-brand-7 hover:border-brand-3 flex h-50 w-60 flex-col items-center justify-evenly rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="from-brand-2 to-brand-3 flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br text-2xl font-bold text-white">
            ع
          </div>
          <div>
            <p className="mb-1 text-center font-semibold">علی کریمی</p>
            <p className="text-brand-4 text-center text-sm">توسعه‌دهنده ارشد</p>
          </div>
        </div>
        <div className="border-brand-7 hover:border-brand-3 flex h-50 w-60 flex-col items-center justify-evenly rounded-xl border bg-white p-5 duration-300 hover:-translate-y-1 hover:shadow-md">
          <div className="from-brand-2 to-brand-3 flex h-18 w-18 items-center justify-center rounded-full bg-linear-to-br text-2xl font-bold text-white">
            ن
          </div>
          <div>
            <p className="mb-1 text-center font-semibold">نرگس علوی</p>
            <p className="text-brand-4 text-center text-sm">کارشناس محتوا</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    icon: <ShieldCheckIcon size={1.7} />,
    title: "شفافیت",
    description: "همه فرایندهای داوری و انتشار به‌صورت شفاف و قابل پیگیری است.",
  },
  {
    icon: <HandSHakeIcon size={1.7} />,
    title: "همکاری",
    description:
      "ما به تعامل و همکاری بین پژوهشگران و دانشگاه‌ها اعتقاد داریم.",
  },
  {
    icon: <AwardIcon size={1.7} />,
    title: "کیفیت",
    description: "داوری دقیق و استانداردهای علمی بالا، اولویت اصلی ماست.",
  },
  {
    icon: <LockIcon size={1.7} />,
    title: "حریم خصوصی",
    description:
      "اطلاعات پژوهشگران و مقالات با بالاترین سطح امنیت محافظت می‌شود.",
  },
];

function AboutValues() {
  return (
    <div>
      <div className="text-brand-2 flex items-center gap-2">
        <HeartIcon size={1.7} />
        <p className="text-xl font-semibold">ارزش های ما</p>
      </div>
      <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-5">
        {values.map((value) => (
          <div
            className="border-brand-7 hover:border-brand-3 flex w-full rounded-xl border bg-white p-5 duration-300"
            key={value.title}
          >
            <div className="w-10">{value.icon}</div>
            <div>
              <p className="font-semibold">{value.title}</p>
              <p className="text-brand-4 mt-1 text-[0.9rem]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutCTA() {
  return (
    <div className="to-brand-2 flex w-full flex-col items-center gap-4 rounded-xl bg-linear-to-br from-[#1a4d4c] p-10">
      <p className="text-2xl font-semibold text-white">
        به جامعه علمی دانشران بپیوندید
      </p>
      <p className="mb-3 text-white opacity-80">
        با عضویت در دانشران، مقالات خود را منتشر کنید و از بازخورد متخصصان
        بهره‌مند شوید.
      </p>
      <Link href={"/singup"}>
        <Button type={4}>ثبت نام رایگان</Button>
      </Link>
    </div>
  );
}
