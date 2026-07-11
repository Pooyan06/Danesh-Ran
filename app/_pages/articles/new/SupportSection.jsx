import { LifeBuoyIcon } from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";

export default function SupportSection() {
  return (
    <div className="border-brand-7 space-y-4 rounded-xl border bg-white p-4 sm:space-y-5 sm:p-5">
      <div className="flex items-center justify-center gap-2 font-semibold">
        <LifeBuoyIcon size={1.3} />
        <p className="text-sm sm:text-base">سوالی دارید؟</p>
      </div>
      <p className="text-brand-4 text-center text-xs sm:text-sm">
        تیم پشتیبانی دانشران آماده پاسخگویی به سوالات شماست.
      </p>
      <Button type={2} size="full">
        <span className="text-xs sm:text-sm">تماس با پشتیبانی</span>
      </Button>
    </div>
  );
}
