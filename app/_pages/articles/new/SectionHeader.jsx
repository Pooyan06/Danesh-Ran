export default function SectionHeader({ step, title, description }) {
  return (
    <div className="flex items-center gap-3 sm:gap-7">
      <div className="bg-brand-9 border-brand-10 text-brand-2 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold sm:h-10 sm:w-10 sm:text-base">
        {step}
      </div>

      <div>
        <p className="mb-0.5 text-[1rem] font-semibold sm:mb-1 sm:text-[1.15rem]">
          {title}
        </p>

        <p className="text-brand-4 text-[0.75rem] sm:text-[0.83rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
