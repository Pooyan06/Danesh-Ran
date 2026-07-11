import AuthorsCards from "../_pages/home/AuthorsCards";
import { UsersIcon } from "@/app/_assets/Icons";

export default function PopularAuthors() {
  const authors = [
    { name: "دکتر علی محمدی", view: 245 },
    { name: "دکتر زهرا حسینی", view: 198 },
    { name: "دکتر سارا احمدی", view: 167 },
    { name: "دکتر محمد کریمی", view: 142 },
  ];

  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="text-brand-2 mb-4 flex items-center space-x-1 font-semibold">
        <UsersIcon size={1.2} />
        <p className="text-sm sm:text-base">نویسندگان پر استناد این ماه</p>
      </div>
      <div>
        {authors.map((author, i) => (
          <div className="space-y-2" key={author.name}>
            <AuthorsCards
              name={author.name}
              view={author.view}
              key={author.name}
            />
            {i !== authors.length - 1 && <hr className="text-brand-7 mb-2" />}
          </div>
        ))}
      </div>
    </div>
  );
}
