import Link from "next/link";

export default function Navigation() {
  const topics = [
    { href: "/topic/technology", label: "تکنولوژی" },
    { href: "/topic/science", label: "علم و دانش" },
    { href: "/topic/health", label: "سلامت" },
    { href: "/topic/culture&art", label: "فرهنگ و هنر" },
    { href: "/topic/economy", label: "اقتصاد" },
    { href: "/topic/lifestyle", label: "سبک زندگی" },
  ];

  return (
    <div className="relative bottom-1 z-0 flex w-full items-center justify-center">
      <div className="bg-brand-3 flex h-15 w-[98%] items-center rounded-b-3xl">
        <nav>
          <ul className="text-brand-5 text-md flex gap-7 px-35">
            {topics.map((topic) => (
              <li key={topic.href}>
                <Link href={topic.href}>{topic.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
