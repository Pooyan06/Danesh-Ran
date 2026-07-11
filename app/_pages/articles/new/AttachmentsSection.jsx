"use client";

import { UploadCloudIcon, XIcon } from "@/app/_assets/Icons";
import { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";

export default function AttachmentsSection({
  onFilesChange,
  maxFiles = 5,
  maxSizeMB = 10,
  initialFiles = [],
}) {
  const [files, setFiles] = useState(initialFiles);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = maxSizeMB * 1024 * 1024;

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const validateFile = (file) => {
    if (
      file.type !== "application/pdf" &&
      !file.name.toLowerCase().endsWith(".pdf")
    ) {
      return { valid: false, message: `فایل "${file.name}" فرمت PDF ندارد.` };
    }

    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        message: `فایل "${file.name}" بزرگتر از ${maxSizeMB} مگابایت است.`,
      };
    }

    if (files.some((f) => f.name === file.name && f.size === file.size)) {
      return {
        valid: false,
        message: `فایل "${file.name}" قبلاً اضافه شده است.`,
      };
    }

    return { valid: true };
  };

  const handleFiles = (fileList) => {
    const filesArray = Array.from(fileList);
    const validFiles = [];
    setError(null);

    if (files.length + filesArray.length > maxFiles) {
      setError(`حداکثر ${maxFiles} فایل مجاز است.`);
      const remaining = maxFiles - files.length;
      filesArray.splice(remaining);
    }

    for (const file of filesArray) {
      const validation = validateFile(file);
      if (!validation.valid) {
        setError(validation.message || "خطا در اعتبارسنجی فایل");
        continue;
      }
      validFiles.push(file);
    }

    if (validFiles.length > 0) {
      const newFiles = [...files, ...validFiles];
      setFiles(newFiles);
      if (onFilesChange) {
        onFilesChange(newFiles);
      }
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFilesChange) {
      onFilesChange(newFiles);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="border-brand-7 space-y-4 border-b border-dashed pb-5 sm:pb-7">
      <SectionHeader
        step="۳"
        title=" پیوست‌ها"
        description="فایل‌های تکمیلی به‌صورت PDF (اختیاری)"
      />
      <div
        className={`group bg-brand-1 hover:bg-brand-9 hover:border-brand-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-3 py-5 text-center duration-200 sm:px-4 sm:py-7 ${
          isDragging
            ? "border-brand-2 bg-brand-9 scale-[1.01]"
            : "border-brand-7"
        }`}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div
          className={`text-brand-2 rounded-full p-3 transition-colors duration-200 sm:p-4 ${
            isDragging ? "bg-brand-10" : "bg-brand-9 group-hover:bg-brand-10"
          }`}
        >
          <UploadCloudIcon size={1.6} />
        </div>
        <p className="text-sm font-semibold text-gray-800 sm:text-base">
          فایل‌های PDF خود را اینجا بکشید و رها کنید
        </p>
        <p className="text-xs text-gray-500 sm:text-sm">
          — یا کلیک کنید تا انتخاب کنید —
        </p>
        <p className="mt-1 text-[0.6rem] text-gray-400 sm:text-xs">
          حداکثر {maxFiles} فایل — هر فایل حداکثر {maxSizeMB} مگابایت
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        multiple
        className="hidden"
        onChange={handleFileInputChange}
      />

      {error && (
        <div className="rounded-xl border border-red-300 bg-red-50 px-3 py-1.5 text-xs text-red-700 sm:px-4 sm:py-2 sm:text-sm">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${file.size}-${index}`}
              className="border-brand-7 hover:border-brand-3 hover:bg-brand-5 bg-brand-1 flex flex-col gap-2 rounded-xl border px-3 py-2 transition-colors duration-200 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-3"
            >
              <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
                <span className="shring-0 rounded bg-red-100 px-1.5 py-0.5 text-[8px] font-bold text-red-700 uppercase sm:text-[10px]">
                  PDF
                </span>
                <span className="truncate text-xs font-medium text-gray-800 sm:text-sm">
                  {file.name}
                </span>
                <span className="shring-0 text-[0.6rem] text-gray-500 sm:text-xs">
                  ({formatFileSize(file.size)})
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="shring-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-xl font-light text-gray-400 transition-colors duration-200 hover:bg-red-50 hover:text-red-600 sm:h-8 sm:w-8 sm:text-2xl"
                aria-label="حذف فایل"
              >
                <XIcon size={1.2} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
