import { ArrowBackIcon, SearchIcon } from "@/app/_assets/Icons";

export default function SearchBar() {
  return (
    <div className="flex w-full justify-center pt-5">
      <div className="border-brand-7 focus-within:border-brand-2 text-brand-4 flex h-14 w-9/10 items-center gap-2 rounded-2xl border bg-white px-2 py-3 transition-all duration-300 outline-none">
        <SearchIcon size={1.5} />
        <input
          name="search"
          type="text"
          className="placeholder:text-brand-4 text-brand-8 w-full outline-none"
          placeholder="جست و جوی مقاله، نویسنده یا موضوع..."
          dir="rtl"
        />
        <div className="hover:text-brand-2 text-brand-4 hover:bg-brand-11 ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full duration-300">
          <ArrowBackIcon size={1.3} />
        </div>
      </div>
    </div>
  );
}
