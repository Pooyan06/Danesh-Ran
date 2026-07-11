import { PlusIcon } from "@/app/_assets/Icons";

export default function PostArticle() {
  return (
    <div className="border-brand-7 text-brand-4 hover:text-brand-2 hover:border-brand-2 flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed bg-white p-6 duration-300 hover:-translate-y-1.5 sm:gap-3 sm:p-10">
      <PlusIcon size={1.6} />
      <p className="text-lg font-semibold sm:text-xl">ارسال مقاله جدید</p>
      <p className="text-center text-sm sm:text-base">
        مقاله خود را با جامعه به اشتراک بگذارید
      </p>
    </div>
  );
}
