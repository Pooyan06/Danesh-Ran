"use client";

import { useState } from "react";

import {
  AtomIcon,
  BarchartIcon,
  BrainCircuitIcon,
  CogIcon,
  DnaIcon,
  MoreHorizontalIcON,
  StethOscopeIcon,
  UsersIcon,
} from "@/app/_assets/Icons";

const categories = [
  { id: 1, title: "هوش مصنوعی", icon: <BrainCircuitIcon size={1.7} /> },
  { id: 2, title: "زیست شناسی", icon: <DnaIcon size={1.6} /> },
  { id: 3, title: "فیزیک", icon: <AtomIcon size={1.5} /> },
  { id: 4, title: "علوم داده", icon: <BarchartIcon size={1.4} /> },
  { id: 5, title: "مهندسی", icon: <CogIcon size={1.4} /> },
  { id: 6, title: "پزشکی", icon: <StethOscopeIcon size={2.3} /> },
  { id: 7, title: "علوم انسانی", icon: <UsersIcon size={1.5} /> },
  { id: 8, title: "سایر", icon: <MoreHorizontalIcON size={1.6} /> },
];

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <fieldset>
      <legend className="mb-2 text-xs font-medium sm:mb-3 sm:text-sm">
        عنوان دسته بندی <span className="text-red-600">*</span>
      </legend>

      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
        role="radiogroup"
        aria-label="انتخاب دسته بندی مقاله"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            icon={category.icon}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}

        <input type="hidden" name="categoryId" value={selectedCategory ?? ""} />
      </div>
    </fieldset>
  );
}

function CategoryCard({ id, title, icon, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border py-3 duration-200 sm:py-5 ${
        active
          ? "bg-brand-11 border-brand-2 "
          : "bg-brand-1 border-brand-7 hover:bg-brand-5 hover:border-brand-6"
      }`}
      role="radio"
      aria-checked={active}
      aria-label={`انتخاب دسته ${title}`}
      tabIndex={active ? 0 : -1}
    >
      <div className="scale-90 sm:scale-100">{icon}</div>
      <span className="text-brand-4 text-[0.65rem] font-semibold sm:text-[0.8rem]">
        {title}
      </span>
    </button>
  );
}
