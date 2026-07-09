import Input from "@/app/_components/Input";
import {
  BookOpenIcon,
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

export default function page() {
  return (
    <div className="border-brand-7 my-10 flex w-4/6 overflow-hidden rounded-2xl border shadow-2xl">
      <div className="to-brand-2 flex flex-1/2 flex-col justify-center gap-4 bg-linear-to-br from-[#1a4d4c] p-10">
        <div className="mb-3">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white">
            <UsersIcon size={2} />
          </div>
          <h1 className="text-3xl font-bold text-white">
            به خانواده دانشران بپیوندید
          </h1>
          <p className="mt-3 text-white opacity-70">
            با ثبت‌نام در دانشران، به جامعه پژوهشگران متصل شوید و آثار خود را
            منتشر کنید.
          </p>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            دسترسی رایگان به مقالات
          </p>
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            انتشار آسان و سریع
          </p>
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            شبکه‌سازی با پژوهشگران
          </p>
          <p className="flex items-center gap-2 text-[0.95rem] text-white">
            <CheckCircleIcon size={2} />
            دریافت بازخورد حرفه‌ای
          </p>
        </div>
      </div>
      <div className="flex flex-1/2 flex-col justify-center gap-2 bg-white p-10">
        <p className="text-2xl font-bold">ثبت‌نام</p>
        <p className="text-sm opacity-60">
          برای عضویت، اطلاعات زیر را تکمیل کنید.
        </p>
        <div className="mt-3 space-y-3">
          <div className="flex justify-between">
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
          <p className="text-brand-4 text-xs">
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
        <label className="text-brand-8 my-2 flex items-center gap-1 text-[0.85rem]">
          <input type="checkbox" />
          شرایط و قوانین را{" "}
          <span className="text-brand-2 hover:text-brand-3 cursor-pointer hover:underline">
            می‌پذیرم
          </span>
        </label>
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
          <p className="text-[0.8rem] opacity-60">قبلاً ثبت‌نام کرده‌اید؟</p>
          <Link
            href="/singup"
            className="text-brand-2 hover:text-brand-3 text-[0.85rem] duration-150 hover:underline"
          >
            وارد شوید
          </Link>
        </div>
        <p className="text-brand-4 mt-1 text-[0.8rem]">
          با ثبت‌نام، با{" "}
          <span className="text-brand-2 cursor-pointer hover:underline">
            شرایط استفاده
          </span>{" "}
          و حریم{" "}
          <span className="text-brand-2 cursor-pointer hover:underline">
            خصوصی دانشران
          </span>{" "}
          موافقت می‌کنید.
        </p>
      </div>
    </div>
  );
}
