"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <li
        className={`text-brand-2 hover:bg-brand-9 relative flex cursor-pointer justify-center rounded-md px-4 py-3 ${pathname === href && "bg-brand-9"}`}
      >
        {pathname === href && (
          <span className="bg-brand-3 absolute bottom-1 h-0.75 w-4/5 rounded-full"></span>
        )}

        {children}
      </li>
    </Link>
  );
}
