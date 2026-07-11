"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`text-brand-2 hover:bg-brand-11 relative flex cursor-pointer justify-center rounded-md px-3 py-2 text-sm text-nowrap duration-300 sm:px-4 sm:py-3 sm:text-base ${
          isActive && "bg-brand-11"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {isActive && (
          <span className="bg-brand-3 absolute bottom-1 h-0.75 w-4/5 rounded-full"></span>
        )}

        {children}
      </Link>
    </li>
  );
}
