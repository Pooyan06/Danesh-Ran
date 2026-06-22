import { BookOpen } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { MoonIcon, PlusIcon } from "../_assets/Icons";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="bg-brand-1 border-brand-7 fixed z-1000 flex w-full items-center justify-between border-b px-15 py-3">
      <div className="flex-1/3">
        <Link className="text-brand-2 flex gap-2" href="/">
          <BookOpen size={30} />
          <h1 className="text-2xl font-bold"> دانشران</h1>
        </Link>
      </div>
      <nav>
        <ul className="text-brand-8 flex gap-5 font-extrabold">
          <NavLink href="/">خانه</NavLink>
          <NavLink href="/articles">مقالات جدید</NavLink>
          <NavLink href="/aboutus">درباره ما</NavLink>
          <NavLink href="/contactus">تماس با ما</NavLink>
        </ul>
      </nav>
      <div className="flex flex-1/3 items-center justify-end gap-3">
        <div className="text-brand-8 hover:text-brand-2 hover:bg-brand-9 ml-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full duration-300">
          <MoonIcon size={2} />
        </div>

        <Button type={1}>
          <p className="flex items-center gap-2">
            <PlusIcon size={1.2} />
            عضویت
          </p>
        </Button>
        <Button type={2}>
          <p className="font-medium">ورود</p>
        </Button>
      </div>
    </header>
  );
}
