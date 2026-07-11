import { ArrowBackIcon, SearchIcon } from "@/app/_assets/Icons";

export default function SearchBar() {
  return (
    <div className="flex w-full justify-center pt-5 max-sm:pt-3">
      <div className="border-brand-7 focus-within:border-brand-2 text-brand-4 flex h-12 w-full items-center gap-2 rounded-2xl border bg-white px-2 py-3 transition-all duration-300 outline-none sm:h-14 sm:w-9/10">
        <SearchIcon size={1.2} />
        <input
          name="search"
          type="search"
          className="placeholder:text-brand-4 text-brand-8 w-full text-sm outline-none sm:text-base"
          placeholder="جست و جوی مقاله، نویسنده یا موضوع..."
          dir="rtl"
          aria-label="جستجوی مقالات، نویسندگان و موضوعات"
          autoComplete="off"
        />
        <button
          type="submit"
          aria-label="جستجو"
          className="hover:text-brand-2 text-brand-4 hover:bg-brand-11 ml-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full duration-300 sm:h-8 sm:w-8"
        >
          <ArrowBackIcon size={1.1} />
        </button>
      </div>
    </div>
  );
}
