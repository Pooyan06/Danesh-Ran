export default function PublishProgress() {
  return (
    <div className="border-brand-7 flex flex-col items-center rounded-xl border bg-white p-5">
      <ProgressBar />
      <p className="text-brand-4 mt-2 text-sm">پیشرفت تکمیل فرم</p>
      <StepsList />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[conic-gradient(var(--color-brand-2)_0%,var(--color-brand-7)_0%)]">
      <div className="text-brand-2 flex h-17 w-17 items-center justify-center rounded-full bg-white font-bold">
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
    <div className="mt-5 w-full space-y-1">
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
    <div className="hover:bg-brand-9 relative flex h-12 cursor-pointer items-center gap-2 rounded-md p-1 duration-300">
      <div className="border-brand-7 relative z-1 flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white text-sm font-semibold text-[#747474]">
        {step + 1}
        {steps.length > step + 1 && (
          <hr className="from-brand-6 via-brand-8 absolute top-full left-1/2 h-6 w-px -translate-x-1/2 bg-linear-to-b to-transparent" />
        )}
      </div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-[0.75rem] text-[#747474]">{description}</div>
      </div>
    </div>
  );
}
