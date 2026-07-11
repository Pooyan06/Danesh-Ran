"use client";

import { MoonIcon, PlusIcon } from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/icon.png";
import Image from "next/image";

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-brand-1 border-brand-7 flex w-full items-center justify-between border-b px-4 py-2 sm:px-6 md:px-10 lg:px-15">
      <div className="flex-1/3">
        <Link
          className="text-brand-2 flex items-center gap-1 sm:gap-2"
          href="/"
        >
          <Image
            src={Logo}
            width={40}
            height={40}
            className="sm:h-[50px] sm:w-[50px] lg:h-[60px] lg:w-[60px]"
            alt="دانشران"
          />
          <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">دانشران</h1>
        </Link>
      </div>

      <div className="flex flex-1/3 items-center justify-end gap-1 sm:gap-2 lg:gap-3">
        <div className="text-brand-8 hover:text-brand-2 hover:bg-brand-11 ml-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full duration-300 sm:h-10 sm:w-10 lg:ml-5 lg:h-12 lg:w-12">
          <MoonIcon size={2} />
        </div>

        {pathname.slice(1) === "login" ? (
          <Link href="/singup" className="flex items-center gap-1 sm:gap-2">
            <Button type={1}>
              <PlusIcon size={1} />
              <span className="hidden sm:inline">عضویت</span>
            </Button>
          </Link>
        ) : (
          <Link href="/login" className="font-medium">
            <Button type={2}>ورود</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
