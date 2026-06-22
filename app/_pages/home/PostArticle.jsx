import { PlusIcon } from "@/app/_assets/Icons";

export default function PostArticle() {
  return (
    <div className="border-brand-7 text-brand-4 hover:text-brand-2 hover:border-brand-2 flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed bg-white p-10 duration-300 hover:-translate-y-1.5">
      <PlusIcon size={1.9} />
      <p className="text-xl font-semibold">ارسال مقاله جدید</p>
      <p>مقاله خود را با جامعه به اشتراک بگذارید</p>
    </div>
  );
}
