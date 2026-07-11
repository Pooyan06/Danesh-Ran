import Input from "@/app/_components/Input";
import {
  CheckCircleIcon,
  EmailIcon,
  EnterIcon,
  GoogleIcon,
  LinkedinIcon,
  LockIcon,
  UserIcon,
  UsersIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  title: "ثبت نام در دانشران",
  description:
    "در دانشران ثبت نام کنید و به جامعه پژوهشگران ایران بپیوندید. مقالات خود را منتشر کنید و از بازخورد متخصصان بهره‌مند شوید.",
  keywords: [
    "ثبت نام",
    "عضویت",
    "ایجاد حساب کاربری",
    "دانشران",
    "ثبت نام دانشران",
  ],
  authors: [{ name: "پویان فرهادی" }],
  robots: "noindex, follow",
  openGraph: {
    title: "ثبت نام در دانشران | به جامعه پژوهشگران بپیوندید",
    description:
      "در دانشران ثبت نام کنید و به جامعه پژوهشگران ایران بپیوندید. مقالات خود را منتشر کنید و از بازخورد متخصصان بهره‌مند شوید.",
    type: "website",
    locale: "fa_IR",
    siteName: "دانشران",
    url: `${siteUrl}/singup`,
    images: [
      {
        url: `${siteUrl}/daneshran.webp`,
        width: 1200,
        height: 630,
        alt: "ثبت نام در دانشران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ثبت نام در دانشران | به جامعه پژوهشگران بپیوندید",
    description:
      "در دانشران ثبت نام کنید و به جامعه پژوهشگران ایران بپیوندید. مقالات خود را منتشر کنید و از بازخورد متخصصان بهره‌مند شوید.",
    images: [`${siteUrl}/daneshran.webp`],
  },
};

export default function page() {
  return (
    <div className="border-brand-7 my-6 flex w-full flex-col overflow-hidden rounded-2xl border shadow-2xl sm:my-10 sm:w-11/12 md:w-4/6 lg:flex-row">
      <div className="to-brand-2 flex flex-1/2 flex-col justify-center gap-4 bg-linear-to-br from-[#1a4d4c] p-6 sm:p-8 md:p-10">
        <div className="mb-3">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white sm:mb-6 sm:h-16 sm:w-16">
            <UsersIcon size={2} />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            به خانواده دانشران بپیوندید
          </h1>
          <p className="mt-2 text-sm text-white opacity-70 sm:mt-3 sm:text-base">
            با ثبت‌نام در دانشران، به جامعه پژوهشگران متصل شوید و آثار خود را
            منتشر کنید.
          </p>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            دسترسی رایگان به مقالات
          </p>
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            انتشار آسان و سریع
          </p>
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            شبکه‌سازی با پژوهشگران
          </p>
          <p className="flex items-center gap-2 text-[0.85rem] text-white sm:text-[0.95rem]">
            <CheckCircleIcon size={2} />
            دریافت بازخورد حرفه‌ای
          </p>
        </div>
      </div>
      <div className="flex flex-1/2 flex-col justify-center gap-2 bg-white p-6 sm:p-8 md:p-10">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">ثبت‌نام</h2>
        <p className="text-xs text-gray-500 sm:text-sm">
          برای عضویت، اطلاعات زیر را تکمیل کنید.
        </p>
        <div className="mt-3 space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Input
              label="نام"
              name="first_name"
              placeholder="پویان"
              icon={<UserIcon size={1.6} />}
            />
            <Input
              label="نام خانوادگی"
              name="last_name"
              placeholder="فرهادی"
              icon={<UserIcon size={1.6} />}
            />
          </div>
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
          <p className="text-brand-4 -mt-2 text-xs">
            حداقل ۶ کاراکتر (ترکیب حروف و اعداد توصیه می‌شود)
          </p>
          <Input
            type="password"
            label="تکرار رمز عبور"
            name="confirm_password"
            placeholder="••••••••"
            icon={<LockIcon size={1.6} />}
          />
        </div>
        <label className="text-brand-8 my-2 flex cursor-pointer items-center gap-1.5 text-[0.75rem] transition-opacity hover:opacity-80 sm:text-[0.85rem]">
          <input type="checkbox" className="accent-brand-2 h-4 w-4" />
          شرایط و قوانین را{" "}
          <span className="text-brand-2 hover:text-brand-3 cursor-pointer font-medium hover:underline">
            می‌پذیرم
          </span>
        </label>
        <Button size="small" type={1}>
          <EnterIcon size={1.4} />
          ثبت‌نام
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
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
          <p className="text-[0.7rem] text-gray-500 sm:text-[0.8rem]">
            قبلاً ثبت‌نام کرده‌اید؟
          </p>
          <Link
            href="/login"
            className="text-brand-2 hover:text-brand-3 text-[0.75rem] font-semibold duration-150 hover:underline sm:text-[0.85rem]"
          >
            وارد شوید
          </Link>
        </div>
        <p className="text-brand-4 mt-1 text-center text-[0.7rem] sm:text-[0.8rem]">
          با ثبت‌نام، با{" "}
          <span className="text-brand-2 cursor-pointer font-medium hover:underline">
            شرایط استفاده
          </span>{" "}
          و{" "}
          <span className="text-brand-2 cursor-pointer font-medium hover:underline">
            حریم خصوصی
          </span>{" "}
          دانشران موافقت می‌کنید.
        </p>
      </div>
    </div>
  );
}
