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
    <header className="bg-brand-1 border-brand-7 flex w-full items-center justify-between border-b px-15 py-3">
      <div className="flex-1/3">
        <Link className="text-brand-2 flex items-center gap-2" href="/">
          <Image src={Logo} width={60} height={60} alt="دانشران" />
          <h1 className="text-2xl font-bold"> دانشران</h1>
        </Link>
      </div>

      <div className="flex flex-1/3 items-center justify-end gap-3">
        <div className="text-brand-8 hover:text-brand-2 hover:bg-brand-11 ml-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full duration-300">
          <MoonIcon size={2} />
        </div>

        {pathname.slice(1) === "login" ? (
          <Link href="/singup" className="flex items-center gap-2">
            <Button type={1}>
              <PlusIcon size={1.2} />
              عضویت
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
