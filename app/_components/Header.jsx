"use client";

import { useState } from "react";
import Link from "next/link";
import { MoonIcon, PlusIcon } from "../_assets/Icons";
import Button from "./Button";
import NavLink from "./NavLink";
import Logo from "@/app/_assets/icon.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-1 border-brand-7 fixed z-1000 flex w-full items-center justify-between border-b px-4 py-2 sm:px-6 md:px-10 lg:px-15">
      <div className="flex-1/3">
        <Link
          className="text-brand-2 flex items-center gap-1 sm:gap-2"
          href="/"
          aria-label="صفحه اصلی دانشران"
        >
          <Image
            src={Logo}
            width={40}
            height={40}
            className="sm:h-12.5 sm:w-12.5 lg:h-15 lg:w-15"
            alt=""
          />
          <h1 className="text-xl font-bold sm:text-2xl">دانشران</h1>
        </Link>
      </div>

      <nav className="hidden md:block" aria-label="منوی اصلی">
        <ul className="text-brand-8 flex gap-3 font-extrabold lg:gap-5">
          <NavLink href="/">خانه</NavLink>
          <NavLink href="/articles">مقالات جدید</NavLink>
          <NavLink href="/aboutus">درباره ما</NavLink>
          <NavLink href="/contactus">تماس با ما</NavLink>
        </ul>
      </nav>

      <div className="flex flex-1/3 items-center justify-end gap-1 sm:gap-2 lg:gap-3">
        <button
          className="text-brand-8 hover:text-brand-2 hover:bg-brand-11 ml-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full duration-300 sm:h-10 sm:w-10 lg:ml-5 lg:h-12 lg:w-12"
          aria-label="تغییر تم"
        >
          <MoonIcon size={2} />
        </button>

        <div className="flex items-stretch gap-1 sm:gap-2 lg:gap-3">
          <Link href="/signup" className="flex flex-1">
            <Button
              type={1}
              className="flex w-full items-center justify-center gap-1 sm:gap-2"
            >
              <PlusIcon size={1} />
              <span className="hidden sm:inline">عضویت</span>
            </Button>
          </Link>
          <Link href="/login" className="flex flex-1">
            <Button
              type={2}
              className="flex w-full items-center justify-center"
            >
              ورود
            </Button>
          </Link>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
}
