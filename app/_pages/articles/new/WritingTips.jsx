import { CheckIcon, LightBulbIcon } from "@/app/_assets/Icons";

const tips = [
  "عنوانی دقیق، رسا و کوتاه انتخاب کنید.",
  "چکیده باید هدف، روش و نتیجه را پوشش دهد.",
  "از منابع و ارجاعات معتبر استفاده کنید.",
  "پیش از ارسال، یک‌بار پیش‌نمایش را بررسی کنید.",
];

export default function WritingTips() {
  return (
    <aside className="border-brand-7 rounded-xl border bg-white p-4 sm:p-5">
      <div className="flex items-center gap-2">
        <LightBulbIcon size={1.4} />
        <h3 className="text-sm font-semibold sm:text-base">نکات نگارش مقاله</h3>
      </div>
      <ul className="text-brand-4 mt-3 space-y-2 text-xs sm:mt-4 sm:space-y-3 sm:text-sm">
        {tips.map((tip) => (
          <li
            className="flex items-start gap-1.5 leading-5 sm:gap-2 sm:leading-6"
            key={tip}
          >
            <CheckIcon size={1.4} />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
