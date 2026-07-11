import { LifeBuoyIcon } from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Link from "next/link";

export default function SupportSection() {
  return (
    <aside className="border-brand-7 space-y-4 rounded-xl border bg-white p-4 sm:space-y-5 sm:p-5">
      <div className="flex items-center justify-center gap-2 font-semibold">
        <LifeBuoyIcon size={1.3} />
        <h3 className="text-sm sm:text-base">سوالی دارید؟</h3>
      </div>
      <p className="text-brand-4 text-center text-xs sm:text-sm">
        تیم پشتیبانی دانشران آماده پاسخگویی به سوالات شماست.
      </p>
      <Link href="/contactus">
        <Button type={2} size="full" aria-label="تماس با پشتیبانی دانشران">
          <span className="text-xs sm:text-sm">تماس با پشتیبانی</span>
        </Button>
      </Link>
    </aside>
  );
}
