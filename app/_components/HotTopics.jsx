import { FireIcon } from "@/app/_assets/Icons";

const topics = [
  "هوش مصنوعی",
  "زیست شناسی",
  "فیزیک کوانتوم",
  "علوم داده",
  "مهندسی پزشکی",
  "نانو فناوری",
  "انرژی تجدیدپذیر",
  "روانشناسی",
];

export default function HotTopics() {
  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="text-brand-2 mb-4 flex items-center space-x-1 font-semibold">
        <FireIcon size={1.2} />
        <h3 className="text-sm sm:text-base">موضوعات داغ</h3>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {topics.map((topic) => (
          <span
            className="bg-brand-9 text-brand-2 hover:bg-brand-2 hover:text-brand-1 cursor-pointer rounded-full px-2.5 py-1.5 text-xs duration-300 sm:px-3.5 sm:py-2 sm:text-sm"
            key={topic}
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
