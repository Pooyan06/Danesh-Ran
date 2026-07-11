export default function ArticlesFilter() {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
      <div>
        <p className="text-brand-4 ml-0 text-sm sm:ml-3 sm:text-base">
          دسته بندی:
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        <p className="bg-brand-2 text-brand-1 cursor-pointer rounded-full px-2.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm">
          همه
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          هوش مصنوعی
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          زیست شناسی
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          فیزیک
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          علوم داده
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          مهندسی
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-2.5 py-0.5 text-xs duration-300 hover:bg-[#1e5d5c2b] sm:px-3 sm:py-1 sm:text-sm">
          پزشکی
        </p>
      </div>
    </div>
  );
}
