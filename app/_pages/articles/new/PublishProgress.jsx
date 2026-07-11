export default function PublishProgress() {
  return (
    <div className="border-brand-7 flex flex-col items-center rounded-xl border bg-white p-4 sm:p-5">
      <ProgressBar />
      <p className="text-brand-4 mt-2 text-xs sm:text-sm">پیشرفت تکمیل فرم</p>
      <StepsList />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[conic-gradient(var(--color-brand-2)_0%,var(--color-brand-7)_0%)] sm:h-20 sm:w-20">
      <div className="text-brand-2 flex h-13 w-13 items-center justify-center rounded-full bg-white text-sm font-bold sm:h-17 sm:w-17 sm:text-base">
        ۰%
      </div>
    </div>
  );
}

const steps = [
  {
    title: "اطلاعات پایه",
    description: "عنوان، دسته و کلمات کلیدی",
  },
  {
    title: "چکیده و محتوا",
    description: "متن کامل مقاله",
  },
  {
    title: "پیوست‌ها",
    description: "فایل‌های PDF (اختیاری)",
  },
  {
    title: "تأیید و ارسال",
    description: "پذیرش قوانین انتشار",
  },
];

function StepsList() {
  return (
    <div className="mt-4 w-full space-y-1 sm:mt-5">
      {steps.map((step, i) => (
        <Step
          key={step.title}
          step={i}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}

function Step({ step, title, description }) {
  return (
    <div className="hover:bg-brand-9 relative flex h-auto min-h-10 cursor-pointer items-center gap-2 rounded-md p-1.5 duration-300 sm:min-h-12">
      <div className="border-brand-7 relative z-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 bg-white text-xs font-semibold text-[#747474] sm:h-9 sm:w-9 sm:text-sm">
        {step + 1}
        {steps.length > step + 1 && (
          <hr className="from-brand-6 via-brand-8 absolute top-full left-1/2 h-4 w-px -translate-x-1/2 bg-linear-to-b to-transparent sm:h-6" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-xs font-medium sm:text-sm">{title}</div>
        <div className="truncate text-[0.6rem] text-[#747474] sm:text-[0.7rem] lg:text-[0.75rem]">
          {description}
        </div>
      </div>
    </div>
  );
}
