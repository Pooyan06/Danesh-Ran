export default function ArticlesPagination() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-not-allowed rounded-md border px-2 py-1 text-xs font-semibold opacity-50 duration-300 sm:px-3 sm:py-1.5 sm:text-sm">
        قبلی
      </div>

      <div className="border-brand-2 text-brand-1 bg-brand-2 cursor-pointer rounded-md border px-3 py-1 text-xs font-semibold duration-300 sm:px-4 sm:py-1.5 sm:text-sm">
        1
      </div>
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-3 py-1 text-xs font-semibold duration-300 sm:px-4 sm:py-1.5 sm:text-sm">
        2
      </div>
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-3 py-1 text-xs font-semibold duration-300 sm:px-4 sm:py-1.5 sm:text-sm">
        3
      </div>
      <div className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-2 py-1 text-xs font-semibold duration-300 sm:px-3 sm:py-1.5 sm:text-sm">
        بعدی
      </div>
    </div>
  );
}
