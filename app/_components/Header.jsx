import Logo from "@/public/Logo2.webp";
import Image from "next/image";
import Link from "next/link";
import { LuSearch, LuUser } from "react-icons/lu";

export default function Header() {
  return (
    <header className="bg-brand-2 z-1 flex h-20 w-full items-center justify-between rounded-b-3xl px-10">
      <Link href="/">
        <Image src={Logo} alt="لوگو" className="w-27" />
      </Link>
      <div className="flex gap-5">
        <LuSearch size={33} className="text-brand-5" />
        <Link href="/profile">
          <LuUser size={35} className="text-brand-5" />
        </Link>
      </div>
    </header>
  );
}
