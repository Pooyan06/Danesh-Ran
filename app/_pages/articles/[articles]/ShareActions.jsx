"use client";

import { usePathname } from "next/navigation";
import { CopyIcon, ShareIcon, ShaireIcon2 } from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";

function ShareActions({ fullUrl }) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const currentUrl = fullUrl || `${baseUrl}${pathname}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
    } catch (error) {
      // روش جایگزین برای مرورگرهای قدیمی
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title || "دانشران",
          text: "مطالعه این مقاله در دانشران",
          url: currentUrl,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error sharing:", error);
        }
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <h2 className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
        <ShareIcon size={1.4} aria-hidden="true" />
        <span className="text-sm sm:text-base">اشتراک‌گذاری</span>
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <Button size="full" type={2} onClick={handleCopyLink}>
          <CopyIcon size={1.2} aria-hidden="true" />
          <span className="text-xs sm:text-sm">کپی لینک</span>
        </Button>
        <Button size="full" type={2} onClick={handleShare}>
          <ShaireIcon2 size={1.2} aria-hidden="true" />
          <span className="text-xs sm:text-sm">اشتراک</span>
        </Button>
      </div>
    </section>
  );
}

export default ShareActions;
