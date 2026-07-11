"use client";

import { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";

export default function MobileMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef(null);

  // بستن منو با کلیک خارج از آن
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // بستن منو با دکمه Escape
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  // جلوگیری از اسکرول body وقتی منو باز است
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-brand-8 hover:text-brand-2 p-1 md:hidden"
        aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          // آیکون X برای بستن
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // آیکون همبرگر برای باز کردن
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
        )}
      </button>

      {isOpen && (
        <div
          className="bg-brand-1 border-brand-7 absolute top-full right-0 left-0 z-50 border-b p-4 shadow-lg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="منوی موبایل"
        >
          <ul className="text-brand-8 flex flex-col gap-4 font-extrabold">
            <NavLink href="/">خانه</NavLink>
            <NavLink href="/articles">مقالات جدید</NavLink>
            <NavLink href="/aboutus">درباره ما</NavLink>
            <NavLink href="/contactus">تماس با ما</NavLink>
          </ul>
        </div>
      )}
    </div>
  );
}
