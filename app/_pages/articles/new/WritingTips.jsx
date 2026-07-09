import { CheckIcon, LightBulbIcon } from "@/app/_assets/Icons";

const tips = [
  "عنوانی دقیق، رسا و کوتاه انتخاب کنید.",
  "چکیده باید هدف، روش و نتیجه را پوشش دهد.",
  "از منابع و ارجاعات معتبر استفاده کنید.",
  "پیش از ارسال، یک‌بار پیش‌نمایش را بررسی کنید.",
];

export default function WritingTips() {
  return (
    <div className="border-brand-7 rounded-xl border bg-white p-5">
      <div className="flex items-center gap-2">
        <LightBulbIcon size={1.7} />
        <p className="font-semibold">نکات نگارش مقاله</p>
      </div>
      <div className="text-brand-4 mt-4 space-y-3 text-sm">
        {tips.map((tip) => (
          <div className="flex items-start gap-2 leading-6" key={tip}>
            <CheckIcon size={1.7} />
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
