"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../_assets/Icons";

export default function Input({
  label,
  name,
  type,
  placeholder = "",
  icon = "",
  required = false,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);

  if (type === "password")
    return (
      <div>
        <label
          htmlFor={name}
          className="mb-1.5 flex items-center gap-1 text-xs sm:mb-2 sm:text-[0.92rem]"
        >
          {icon} {label}{" "}
          {required === true && <span className="text-red-600">*</span>}
        </label>
        <div className="bg-brand-1 border-brand-7 focus-within:border-brand-2 flex h-10 w-full items-center rounded-md border text-sm duration-300 sm:h-11">
          <input
            type={isVisible === false ? "password" : "text"}
            name={name}
            placeholder={placeholder}
            className="h-full w-full p-2 text-xs outline-none sm:p-3 sm:text-sm"
            required={required}
            {...props}
          />
          <span
            className="text-brand-4 hover:text-brand-2 hover:bg-brand-9 ml-1 cursor-pointer rounded-full p-1 duration-300 sm:ml-2"
            onClick={() => setIsVisible((c) => !c)}
          >
            {isVisible === false ? (
              <EyeIcon size={1.4} />
            ) : (
              <EyeOffIcon size={1.4} />
            )}
          </span>
        </div>
      </div>
    );

  if (type === "area")
    return (
      <div>
        <label
          htmlFor={name}
          className="mb-1.5 flex items-center gap-1 text-xs sm:mb-2 sm:text-[0.92rem]"
        >
          {icon} {label}
          {required === true && <span className="text-red-600">*</span>}
        </label>
        <textarea
          className="bg-brand-1 border-brand-7 focus:border-brand-2 h-16 min-h-12 w-full rounded-lg border p-2 text-xs duration-300 outline-none sm:h-20 sm:min-h-15 sm:rounded-xl sm:text-sm"
          name={name}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </div>
    );

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 flex items-center gap-1 text-xs sm:mb-2 sm:text-[0.92rem]"
      >
        {icon} {label}
        {required === true && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-brand-1 border-brand-7 focus:border-brand-2 h-10 w-full rounded-md border p-2 text-xs duration-300 outline-none sm:h-11 sm:p-3 sm:text-sm"
        required={required}
        {...props}
      />
    </div>
  );
}
