"use client";

import { useState } from "react";
import NavLink from "./NavLink";

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-brand-8 hover:text-brand-2 p-1 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-brand-1 border-brand-7 absolute top-full right-0 left-0 z-50 border-b p-4 shadow-lg md:hidden">
          <ul className="text-brand-8 flex flex-col gap-4 font-extrabold">
            <NavLink href="/">خانه</NavLink>
            <NavLink href="/articles">مقالات جدید</NavLink>
            <NavLink href="/aboutus">درباره ما</NavLink>
            <NavLink href="/contactus">تماس با ما</NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
