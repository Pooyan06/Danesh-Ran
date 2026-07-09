export default function ArticlesFilter() {
  return (
    <div className="flex items-center">
      <div>
        <p className="text-brand-4 ml-3">دسته بندی:</p>
      </div>
      <div className="flex gap-2">
        <p className="bg-brand-2 text-brand-1 cursor-pointer rounded-full px-3 py-1">
          همه
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-3 py-1 duration-300 hover:bg-[#1e5d5c2b]">
          هوش مصنوعی
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-3 py-1 duration-300 hover:bg-[#1e5d5c2b]">
          زیست شناسی
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-3 py-1 duration-300 hover:bg-[#1e5d5c2b]">
          فیزیک
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-3 py-1 duration-300 hover:bg-[#1e5d5c2b]">
          علوم داده
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-3 py-1 duration-300 hover:bg-[#1e5d5c2b]">
          مهندسی
        </p>
        <p className="bg-brand-11 text-brand-4 hover:text-brand-2 cursor-pointer rounded-full px-3 py-1 duration-300 hover:bg-[#1e5d5c2b]">
          پزشکی
        </p>
      </div>
    </div>
  );
}
