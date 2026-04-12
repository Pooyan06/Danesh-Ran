"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HotTopics() {
  const hotTopics = [
    { label: "هوش مصنوعی", href: "" },
    { label: "اسپیکر", href: "" },
    { label: "گوشی", href: "" },
    { label: "تبلت", href: "" },
    { label: "تلویزیون", href: "" },
    { label: "واقعیت مجازی", href: "" },
    { label: "کشاورزی", href: "" },
    { label: "دام داری", href: "" },
    { label: "پنل خورشیدی", href: "" },
    { label: "جوش کاری", href: "" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="flex w-full items-center justify-center gap-2 pb-5">
      <p className="text-[1.15rem] font-medium text-nowrap text-red-400">
        داغ ترین ها:
      </p>
      <div className="bg-brand-2 w-full overflow-hidden rounded-full p-2">
        <Slider {...settings}>
          {hotTopics.map((topic) => (
            <div key={topic.label}>
              <Link href={topic.href || "/"} draggable="false">
                <div className="bg-brand-1 text-brand-4 mx-1 rounded-full py-1 text-center whitespace-nowrap">
                  {topic.label}
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
