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

export const metadata = {
  title: "ورود به دانشران",
};

export default function page() {
  return (
    <div className="border-brand-7 my-10 flex w-3/5 overflow-hidden rounded-2xl border shadow-2xl">
      <div className="to-brand-2 flex flex-1/2 flex-col justify-center gap-4 bg-linear-to-br from-[#1a4d4c] p-10">
        <div className="mb-3">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white">
            <BookOpenIcon size={2} />
          </div>
          <h1 className="text-3xl font-bold text-white">دانشران</h1>
          <p className="mt-3 text-white opacity-70">
            پلتفرم انتشار مقالات علمی با رویکرد تعامل و همکاری پژوهشگران.
          </p>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            دسترسی به جدیدترین مقالات
          </p>
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            ارتباط با پژوهشگران برتر
          </p>
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            انتشار آسان آثار علمی
          </p>
        </div>
      </div>
      <div className="flex flex-1/2 flex-col justify-center gap-2 bg-white p-10">
        <p className="text-2xl font-bold">ورود به حساب</p>
        <p className="text-sm opacity-60">
          خوش آمدید! لطفاً اطلاعات خود را وارد کنید.
        </p>
        <div className="mt-3 space-y-3">
          <Input
            label="ایمیل"
            name="email"
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
        <div className="my-2 flex justify-between">
          <label className="text-brand-8 flex items-center gap-1 text-[0.85rem] opacity-60">
            <input type="checkbox" />
            مرا بخاطر بسپار
          </label>
          <p className="text-brand-2 hover:text-brand-3 cursor-pointer text-sm duration-150 hover:underline">
            رمز عبور را فراموش کرده‌اید؟
          </p>
        </div>
        <Button>
          <EnterIcon size={1.4} />
          ورود
        </Button>
        <div className="my-3 flex items-center gap-4">
          <hr className="text-brand-7 w-full" />
          <p className="text-brand-8 text-sm opacity-80">یا</p>
          <hr className="text-brand-7 w-full" />
        </div>
        <div className="flex gap-2">
          <Button size="full2" type={3}>
            <GoogleIcon size={1.4} />
            گوگل
          </Button>
          <Button size="full2" type={3}>
            <LinkedinIcon size={1.4} />
            لینکدین
          </Button>
        </div>
        <div className="mt-3 flex items-center justify-center gap-1">
          <p className="text-[0.8rem] opacity-60">حساب کاربری ندارید؟ </p>
          <Link
            href="/singup"
            className="text-brand-2 hover:text-brand-3 text-[0.85rem] duration-150 hover:underline"
          >
            همین حالا ثبت‌نام کنید
          </Link>
        </div>
      </div>
    </div>
  );
}
