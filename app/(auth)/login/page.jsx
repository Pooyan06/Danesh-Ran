import Input from "@/app/_components/Input";
import {
  BookOpenIcon,
  CheckCircleIcon,
  EmailIcon,
  EnterIcon,
  GoogleIcon,
  LinkedinIcon,
  LockIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "ورود به دانشران",
  description:
    "به حساب کاربری خود در دانشران وارد شوید و به مقالات علمی دسترسی پیدا کنید.",
  keywords: ["ورود", "لاگین", "حساب کاربری", "دانشران", "ورود به دانشران"],
  authors: [{ name: "پویان فرهادی" }],
  robots: "noindex, follow",
  openGraph: {
    title: "ورود به حساب کاربری | دانشران",
    description:
      "به حساب کاربری خود در دانشران وارد شوید و به مقالات علمی دسترسی پیدا کنید.",
    type: "website",
    locale: "fa_IR",
    siteName: "دانشران",
    url: `${siteUrl}/login`,
    images: [
      {
        url: `${siteUrl}/daneshran.webp`,
        width: 1200,
        height: 630,
        alt: "ورود به دانشران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ورود به حساب کاربری | دانشران",
    description:
      "به حساب کاربری خود در دانشران وارد شوید و به مقالات علمی دسترسی پیدا کنید.",
    images: [`${siteUrl}/daneshran.webp`],
  },
};

export default function page() {
  return (
    <div className="border-brand-7 my-6 flex w-full flex-col overflow-hidden rounded-2xl border shadow-2xl sm:my-10 sm:w-11/12 lg:w-4/5 lg:flex-row xl:w-3/5">
      <div className="to-brand-2 flex flex-1/2 flex-col justify-center gap-4 bg-linear-to-br from-[#1a4d4c] p-6 sm:p-8 md:p-10">
        <div className="mb-3">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white sm:mb-6 sm:h-16 sm:w-16">
            <BookOpenIcon size={2} />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">دانشران</h1>
          <p className="mt-2 text-sm text-white opacity-70 sm:mt-3 sm:text-base">
            پلتفرم انتشار مقالات علمی با رویکرد تعامل و همکاری پژوهشگران.
          </p>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            دسترسی به جدیدترین مقالات
          </p>
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            ارتباط با پژوهشگران برتر
          </p>
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            انتشار آسان آثار علمی
          </p>
        </div>
      </div>
      <div className="flex flex-1/2 flex-col justify-center gap-2 bg-white p-6 sm:p-8 md:p-10">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
          ورود به حساب
        </h2>
        <p className="text-xs text-gray-500 sm:text-sm">
          خوش آمدید! لطفاً اطلاعات خود را وارد کنید.
        </p>
        <div className="mt-3 space-y-4">
          <Input
            label="ایمیل"
            name="email"
            type="email"
            placeholder="example@daneshran.ir"
            icon={<EmailIcon size={1.6} />}
          />
          <Input
            type="password"
            label="رمز عبور"
            name="password"
            placeholder="••••••••"
            icon={<LockIcon size={1.6} />}
          />
        </div>
        <div className="my-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <label className="text-brand-8 flex cursor-pointer items-center gap-1.5 text-[0.75rem] opacity-60 transition-opacity hover:opacity-80 sm:text-[0.85rem]">
            <input type="checkbox" className="accent-brand-2 h-4 w-4" />
            مرا بخاطر بسپار
          </label>
          <p className="text-brand-2 hover:text-brand-3 cursor-pointer text-xs font-medium duration-150 hover:underline sm:text-sm">
            رمز عبور را فراموش کرده‌اید؟
          </p>
        </div>
        <Button size="small" type={1}>
          <EnterIcon size={1.4} />
          ورود
        </Button>
        <div className="my-2 flex items-center gap-4">
          <hr className="text-brand-7 w-full" />
          <p className="text-brand-8 text-xs font-medium opacity-60 sm:text-sm">
            یا
          </p>
          <hr className="text-brand-7 w-full" />
        </div>
        <div className="flex gap-3">
          <Button size="full2" type={3}>
            <GoogleIcon size={1.4} />
            <span className="text-xs font-medium sm:text-sm">گوگل</span>
          </Button>
          <Button size="full2" type={3}>
            <LinkedinIcon size={1.4} />
            <span className="text-xs font-medium sm:text-sm">لینکدین</span>
          </Button>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1">
          <p className="text-[0.7rem] text-gray-500 sm:text-[0.8rem]">
            حساب کاربری ندارید؟{" "}
          </p>
          <Link
            href="/singup"
            className="text-brand-2 hover:text-brand-3 text-[0.75rem] font-semibold duration-150 hover:underline sm:text-[0.85rem]"
          >
            همین حالا ثبت‌نام کنید
          </Link>
        </div>
      </div>
    </div>
  );
}
