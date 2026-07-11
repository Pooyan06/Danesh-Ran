export default function ArticlesPagination() {
  return (
    <nav
      aria-label="صفحه بندی مقالات"
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
    >
      <span className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-not-allowed rounded-md border px-2 py-1 text-xs font-semibold opacity-50 duration-300 sm:px-3 sm:py-1.5 sm:text-sm">
        قبلی
      </span>

      <a
        href="#"
        className="border-brand-2 text-brand-1 bg-brand-2 cursor-pointer rounded-md border px-3 py-1 text-xs font-semibold duration-300 sm:px-4 sm:py-1.5 sm:text-sm"
        aria-current="page"
        aria-label="صفحه 1 (صفحه فعلی)"
      >
        1
      </a>
      <a
        href="#"
        className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-3 py-1 text-xs font-semibold duration-300 sm:px-4 sm:py-1.5 sm:text-sm"
        aria-label="رفتن به صفحه 2"
      >
        2
      </a>
      <a
        href="#"
        className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-3 py-1 text-xs font-semibold duration-300 sm:px-4 sm:py-1.5 sm:text-sm"
        aria-label="رفتن به صفحه 3"
      >
        3
      </a>
      <a
        href="#"
        className="border-brand-7 hover:border-brand-2 hover:text-brand-2 text-brand-4 cursor-pointer rounded-md border px-2 py-1 text-xs font-semibold duration-300 sm:px-3 sm:py-1.5 sm:text-sm"
        aria-label="رفتن به صفحه بعدی"
      >
        بعدی
      </a>
    </nav>
  );
}
