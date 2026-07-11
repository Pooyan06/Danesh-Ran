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
    <section className="mt-12 mb-6 space-y-6 overflow-x-hidden px-4 sm:mt-18 sm:mb-10 sm:space-y-10 sm:px-0">
      <AboutUshHeader />
      <hr className="text-brand-7 -mx-4 w-screen sm:-mx-15" />
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
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
      <div className="bg-brand-2 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white sm:h-18 sm:w-18 sm:text-3xl">
        <UsersIcon size={1.6} />
      </div>
      <p className="text-brand-2 text-2xl font-bold sm:text-4xl">
        درباره <span className="text-brand-3">دانشران</span>
      </p>
      <p className="text-brand-4 max-w-full px-4 text-center text-sm sm:max-w-150 sm:px-0 sm:text-base">
        دانشران یک پلتفرم علمی باز است که با هدف ترویج دانش و ارتباط پژوهشگران
        ایرانی راه‌اندازی شده است. ما به دنبال ایجاد فضایی شفاف و مشارکتی برای
        انتشار مقالات علمی هستیم.
      </p>
    </div>
  );
}

function AboutMissionVision() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
      <div className="border-brand-7 flex-1/2 space-y-3 rounded-xl border bg-white p-6 duration-300 hover:-translate-y-1 hover:shadow-md sm:space-y-4 sm:p-8">
        <div className="bg-brand-9 text-brand-2 flex h-12 w-12 items-center justify-center rounded-full sm:h-13 sm:w-13">
          <TargetIcon size={1.6} />
        </div>
        <p className="text-lg font-semibold sm:text-xl">چشم انداز</p>
        <p className="text-brand-4 text-sm sm:text-base">
          تبدیل شدن به مرجع اصلی انتشار و تبادل مقالات علمی در ایران و ایجاد
          بستری برای همکاری‌های بین‌رشته‌ای.
        </p>
      </div>
      <div className="border-brand-7 flex-1/2 space-y-3 rounded-xl border bg-white p-6 duration-300 hover:-translate-y-1 hover:shadow-md sm:space-y-4 sm:p-8">
        <div className="bg-brand-9 text-brand-2 flex h-12 w-12 items-center justify-center rounded-full sm:h-13 sm:w-13">
          <FlaghIcon size={1.4} />
        </div>
        <p className="text-lg font-semibold sm:text-xl">رسالت</p>
        <p className="text-brand-4 text-sm sm:text-base">
          دسترسی آزاد به دانش، توانمندسازی پژوهشگران جوان و تسهیل فرایند داوری و
          انتشار با حفظ کیفیت و شفافیت.
        </p>
      </div>
    </div>
  );
}

function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-5">
      <div className="border-brand-7 text-brand-8 flex flex-1 flex-col items-center gap-1 rounded-xl border bg-white p-3 duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-1/4 sm:gap-2 sm:p-5">
        <UsersIcon size={1.4} />
        <p className="text-brand-2 text-xl font-bold sm:text-3xl">۱۲،۴۰۰+</p>
        <p className="text-center text-xs sm:text-sm">کاربران فعال</p>
      </div>
      <div className="border-brand-7 text-brand-8 flex flex-1 flex-col items-center gap-1 rounded-xl border bg-white p-3 duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-1/4 sm:gap-2 sm:p-5">
        <FileTextIcon size={1.4} />
        <p className="text-brand-2 text-xl font-bold sm:text-3xl">۳،۲۰۰+</p>
        <p className="text-center text-xs sm:text-sm">مقالات منتشر شده</p>
      </div>
      <div className="border-brand-7 text-brand-8 flex flex-1 flex-col items-center gap-1 rounded-xl border bg-white p-3 duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-1/4 sm:gap-2 sm:p-5">
        <BookmarkIcon size={1.4} />
        <p className="text-brand-2 text-xl font-bold sm:text-3xl">۸۹۰+</p>
        <p className="text-center text-xs sm:text-sm">نویسندگان</p>
      </div>
      <div className="border-brand-7 text-brand-8 flex flex-1 flex-col items-center gap-1 rounded-xl border bg-white p-3 duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-1/4 sm:gap-2 sm:p-5">
        <GlobIcon size={1.4} />
        <p className="text-brand-2 text-xl font-bold sm:text-3xl">۴۵+</p>
        <p className="text-center text-xs sm:text-sm">دانشگاه و مؤسسه</p>
      </div>
    </div>
  );
}

function AboutTeam() {
  return (
    <div>
      <div className="text-brand-2 flex items-center gap-2">
        <UsersIcon size={1.4} />
        <p className="text-lg font-semibold sm:text-xl">تیم دانشران</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:flex sm:gap-5">
        <div className="border-brand-7 hover:border-brand-3 flex h-auto w-full flex-col items-center justify-evenly rounded-xl border bg-white p-4 duration-300 hover:-translate-y-1 hover:shadow-md sm:h-50 sm:w-60 sm:p-5">
          <div className="from-brand-2 to-brand-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br text-xl font-bold text-white sm:h-18 sm:w-18 sm:text-2xl">
            پ
          </div>
          <div>
            <p className="mb-0.5 text-center text-sm font-semibold sm:mb-1 sm:text-base">
              پویان فرهادی
            </p>
            <p className="text-brand-4 text-center text-xs sm:text-sm">
              مدیر پروژه
            </p>
          </div>
        </div>
        <div className="border-brand-7 hover:border-brand-3 flex h-auto w-full flex-col items-center justify-evenly rounded-xl border bg-white p-4 duration-300 hover:-translate-y-1 hover:shadow-md sm:h-50 sm:w-60 sm:p-5">
          <div className="from-brand-2 to-brand-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br text-xl font-bold text-white sm:h-18 sm:w-18 sm:text-2xl">
            س
          </div>
          <div>
            <p className="mb-0.5 text-center text-sm font-semibold sm:mb-1 sm:text-base">
              سارا حسینی
            </p>
            <p className="text-brand-4 text-center text-xs sm:text-sm">
              مدیر علمی
            </p>
          </div>
        </div>
        <div className="border-brand-7 hover:border-brand-3 flex h-auto w-full flex-col items-center justify-evenly rounded-xl border bg-white p-4 duration-300 hover:-translate-y-1 hover:shadow-md sm:h-50 sm:w-60 sm:p-5">
          <div className="from-brand-2 to-brand-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br text-xl font-bold text-white sm:h-18 sm:w-18 sm:text-2xl">
            ع
          </div>
          <div>
            <p className="mb-0.5 text-center text-sm font-semibold sm:mb-1 sm:text-base">
              علی کریمی
            </p>
            <p className="text-brand-4 text-center text-xs sm:text-sm">
              توسعه‌دهنده ارشد
            </p>
          </div>
        </div>
        <div className="border-brand-7 hover:border-brand-3 flex h-auto w-full flex-col items-center justify-evenly rounded-xl border bg-white p-4 duration-300 hover:-translate-y-1 hover:shadow-md sm:h-50 sm:w-60 sm:p-5">
          <div className="from-brand-2 to-brand-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br text-xl font-bold text-white sm:h-18 sm:w-18 sm:text-2xl">
            ن
          </div>
          <div>
            <p className="mb-0.5 text-center text-sm font-semibold sm:mb-1 sm:text-base">
              نرگس علوی
            </p>
            <p className="text-brand-4 text-center text-xs sm:text-sm">
              کارشناس محتوا
            </p>
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
        <HeartIcon size={1.4} />
        <p className="text-lg font-semibold sm:text-xl">ارزش های ما</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-5">
        {values.map((value) => (
          <div
            className="border-brand-7 hover:border-brand-3 flex w-full rounded-xl border bg-white p-4 duration-300 sm:p-5"
            key={value.title}
          >
            <div className="w-8 sm:w-10">{value.icon}</div>
            <div>
              <p className="text-sm font-semibold sm:text-base">
                {value.title}
              </p>
              <p className="text-brand-4 mt-0.5 text-[0.8rem] sm:mt-1 sm:text-[0.9rem]">
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
    <div className="to-brand-2 flex w-full flex-col items-center gap-3 rounded-xl bg-linear-to-br from-[#1a4d4c] p-6 sm:gap-4 sm:p-10">
      <p className="text-xl font-semibold text-white sm:text-2xl">
        به جامعه علمی دانشران بپیوندید
      </p>
      <p className="mb-2 text-center text-sm text-white opacity-80 sm:mb-3 sm:text-base">
        با عضویت در دانشران، مقالات خود را منتشر کنید و از بازخورد متخصصان
        بهره‌مند شوید.
      </p>
      <Link href={"/singup"}>
        <Button type={4} size="small">
          ثبت نام رایگان
        </Button>
      </Link>
    </div>
  );
}
