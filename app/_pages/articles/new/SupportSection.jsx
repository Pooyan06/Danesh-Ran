import { LifeBuoyIcon } from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";

export default function SupportSection() {
  return (
    <div className="border-brand-7 space-y-5 rounded-xl border bg-white p-5">
      <div className="flex items-center justify-center gap-2 font-semibold">
        <LifeBuoyIcon size={1.5} />
        <p>سوالی دارید؟</p>
      </div>
      <p className="text-brand-4 text-center text-sm">
        تیم پشتیبانی دانشران آماده پاسخگویی به سوالات شماست.
      </p>
      <Button type={2} size="full">
        تماس با پشتیبانی
      </Button>
    </div>
  );
}
