export default function ArticlesPagination() {
  return (
    <div className="flex justify-center gap-3">
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-not-allowed rounded-md border px-3 py-1.5 text-sm font-semibold opacity-50 duration-300">
        قبلی
      </div>

      <div className="border-brand-2 text-brand-1 bg-brand-2 cursor-pointer rounded-md border px-4 py-1.5 text-sm font-semibold duration-300">
        1
      </div>
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-4 py-1.5 text-sm font-semibold duration-300">
        2
      </div>
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-4 py-1.5 text-sm font-semibold duration-300">
        3
      </div>
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-3 py-1.5 text-sm font-semibold duration-300">
        بعدی
      </div>
    </div>
  );
}
