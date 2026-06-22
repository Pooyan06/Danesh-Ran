import { FireIcon } from "@/app/_assets/Icons";

export default function HotTopics() {
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

  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-5">
      <div className="text-brand-2 mb-4 flex items-center space-x-1 font-semibold">
        <FireIcon size={1.4} />
        <p>نویسندگان پر استناد این ماه</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <p
            className="bg-brand-9 text-brand-2 hover:bg-brand-2 hover:text-brand-1 cursor-pointer rounded-full px-3.5 py-2 duration-300"
            key={topic}
          >
            {topic}
          </p>
        ))}
      </div>
    </div>
  );
}
