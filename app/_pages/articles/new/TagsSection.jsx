"use client";

import { useState } from "react";
import { InfoIcon, XIcon } from "@/app/_assets/Icons";
import Input from "@/app/_components/Input";

const MAX_TAGS = 8;

export default function TagsSection() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  function addTag() {
    const value = inputValue.trim();

    if (!value) return;
    if (tags.includes(value)) return;
    if (tags.length >= MAX_TAGS) return;

    setTags((prev) => [...prev, value]);
    setInputValue("");
  }

  function removeTag(tag) {
    setTags((prev) => prev.filter((t) => t !== tag));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  }

  return (
    <fieldset>
      <legend className="mb-2 text-xs font-medium sm:mb-3 sm:text-sm">
        کلمات کلیدی
      </legend>

      <Input
        id="tags-input"
        placeholder="کلمه را تایپ کنید و Enter بزنید..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="ورودی کلمات کلیدی"
        aria-describedby="tags-hint"
      />

      <p
        id="tags-hint"
        className="text-brand-4 mt-2 flex items-center gap-1 text-[0.7rem] sm:mt-3 sm:text-[0.8rem]"
      >
        <InfoIcon size={1.5} />
        برای ثبت هر کلمه کلیدی، Enter یا کاما را بزنید — حداکثر ۸ کلمه
      </p>

      {tags.length > 0 && (
        <ul
          className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2"
          aria-label="لیست کلمات کلیدی"
        >
          {tags.map((tag) => (
            <li key={tag} className="list-none">
              <span className="bg-brand-5 text-brand-2 flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs transition sm:gap-2 sm:px-3 sm:py-1 sm:text-sm">
                <span>{tag}</span>
                <button
                  type="button"
                  className="hover:text-brand-2 text-brand-4 cursor-pointer text-sm leading-none duration-150 sm:text-base"
                  onClick={() => removeTag(tag)}
                  aria-label={`حذف کلمه کلیدی ${tag}`}
                >
                  <XIcon size={1.2} />
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <input type="hidden" name="tags" value={JSON.stringify(tags)} />
    </fieldset>
  );
}
