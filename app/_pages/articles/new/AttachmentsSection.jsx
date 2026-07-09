"use client";

import { UploadCloudIcon, XIcon } from "@/app/_assets/Icons";
import { useState, useRef, useCallback } from "react";
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

  // فرمت کردن حجم فایل
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // اعتبارسنجی فایل
  const validateFile = (file) => {
    // بررسی فرمت PDF
    if (
      file.type !== "application/pdf" &&
      !file.name.toLowerCase().endsWith(".pdf")
    ) {
      return { valid: false, message: `فایل "${file.name}" فرمت PDF ندارد.` };
    }

    // بررسی حجم فایل
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        message: `فایل "${file.name}" بزرگتر از ${maxSizeMB} مگابایت است.`,
      };
    }

    // بررسی تکراری نبودن
    if (files.some((f) => f.name === file.name && f.size === file.size)) {
      return {
        valid: false,
        message: `فایل "${file.name}" قبلاً اضافه شده است.`,
      };
    }

    return { valid: true };
  };

  // پردازش فایل‌ها
  const handleFiles = (fileList) => {
    const filesArray = Array.from(fileList);
    const validFiles = [];
    setError(null);

    // بررسی تعداد فایل‌ها
    if (files.length + filesArray.length > maxFiles) {
      setError(`حداکثر ${maxFiles} فایل مجاز است.`);
      const remaining = maxFiles - files.length;
      filesArray.splice(remaining);
    }

    // اعتبارسنجی هر فایل
    for (const file of filesArray) {
      const validation = validateFile(file);
      if (!validation.valid) {
        setError(validation.message || "خطا در اعتبارسنجی فایل");
        continue;
      }
      validFiles.push(file);
    }

    // اضافه کردن فایل‌های معتبر
    if (validFiles.length > 0) {
      const newFiles = [...files, ...validFiles];
      setFiles(newFiles);
      if (onFilesChange) {
        onFilesChange(newFiles);
      }
    }
  };

  // حذف فایل
  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFilesChange) {
      onFilesChange(newFiles);
    }
  };

  // رویدادهای کشیدن و رها کردن
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

  // کلیک روی area برای باز کردن انتخاب فایل
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // تغییر فایل از input
  const handleFileInputChange = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
    // ریست کردن input برای امکان انتخاب مجدد
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="border-brand-7 space-y-4 border-b border-dashed pb-7">
      <SectionHeader
        step="۳"
        title=" پیوست‌ها"
        description="فایل‌های تکمیلی به‌صورت PDF (اختیاری)"
      />
      <div
        className={`group bg-brand-1 hover:bg-brand-9 hover:border-brand-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-7 duration-200 ${
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
          className={`text-brand-2 rounded-full p-4 transition-colors duration-200 ${
            isDragging ? "bg-brand-10" : "bg-brand-9 group-hover:bg-brand-10"
          }`}
        >
          <UploadCloudIcon size={2} />
        </div>
        <p className="font-semibold text-gray-800">
          فایل‌های PDF خود را اینجا بکشید و رها کنید
        </p>
        <p className="text-sm text-gray-500">— یا کلیک کنید تا انتخاب کنید —</p>
        <p className="mt-1 text-xs text-gray-400">
          حداکثر {maxFiles} فایل — هر فایل حداکثر {maxSizeMB} مگابایت
        </p>
      </div>

      {/* Input مخفی */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        multiple
        className="hidden"
        onChange={handleFileInputChange}
      />

      {/* نمایش خطا */}
      {error && (
        <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* لیست فایل‌ها */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${file.size}-${index}`}
              className="border-brand-7 hover:border-brand-3 hover:bg-brand-5 bg-brand-1 flex items-center justify-between rounded-xl border px-4 py-3 transition-colors duration-200"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="shring-0 rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-700 uppercase">
                  PDF
                </span>
                <span className="truncate text-sm font-medium text-gray-800">
                  {file.name}
                </span>
                <span className="shring-0 text-xs text-gray-500">
                  ({formatFileSize(file.size)})
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="shring-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-2xl font-light text-gray-400 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
                aria-label="حذف فایل"
              >
                <XIcon />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
