export default function ArticlesFilter() {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
      <div>
        <span className="text-brand-4 ml-0 text-sm sm:ml-3 sm:text-base">
          دسته بندی:
        </span>
      </div>
      <div
        className="flex flex-wrap gap-1.5 sm:gap-2"
        role="group"
        aria-label="فیلتر دسته بندی مقالات"
      >
        <button className="bg-brand-2 text-brand-1 cursor-pointer rounded-full px-2.5 py-0.5 text-xs transition-colors duration-300 hover:opacity-80 sm:px-3 sm:py-1 sm:text-sm">
          همه
        </button>
        <button className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          هوش مصنوعی
        </button>
        <button className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          زیست شناسی
        </button>
        <button className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          فیزیک
        </button>
        <button className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          علوم داده
        </button>
        <button className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          مهندسی
        </button>
        <button className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          پزشکی
        </button>
      </div>
    </div>
  );
}
