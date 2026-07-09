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
    <div>
      <p className="mb-3 text-sm font-medium">کلمات کلیدی</p>

      <Input
        placeholder="کلمه را تایپ کنید و Enter بزنید..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <p className="text-brand-4 mt-3 flex items-center gap-1 text-[0.8rem]">
        <InfoIcon size={1.85} />
        برای ثبت هر کلمه کلیدی، Enter یا کاما را بزنید — حداکثر ۸ کلمه
      </p>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="bg-brand-5 text-brand-2 flex items-center gap-2 rounded-full px-3 py-1 text-sm transition"
            >
              <span>{tag}</span>
              <span
                className="hover:text-brand-2 text-brand-4 cursor-pointer text-base leading-none duration-150"
                onClick={() => removeTag(tag)}
              >
                <XIcon />
              </span>
            </button>
          ))}
        </div>
      )}

      <input type="hidden" name="tags" value={JSON.stringify(tags)} />
    </div>
  );
}
