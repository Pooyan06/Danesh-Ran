export default function SectionHeader({ step, title, description }) {
  return (
    <div className="flex items-center gap-7">
      <div className="bg-brand-9 border-brand-10 text-brand-2 flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold">
        {step}
      </div>

      <div>
        <p className="mb-1 text-[1.15rem] font-semibold">{title}</p>

        <p className="text-brand-4 text-[0.83rem]">{description}</p>
      </div>
    </div>
  );
}
