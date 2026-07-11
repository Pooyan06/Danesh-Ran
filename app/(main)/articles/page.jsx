import { FileTextIcon } from "@/app/_assets/Icons";
import ArticleList from "@/app/_components/ArticleList";
import HotTopics from "@/app/_components/HotTopics";
import PopularAuthors from "@/app/_components/PopularAuthors";
import SearchBar from "@/app/_components/SearchBar";
import ArticlesFilter from "@/app/_pages/articles/ArticlesFilter";
import ArticlesPagination from "@/app/_pages/articles/ArticlesPagination";

export const metadata = {
  title: "مقالات جدید",
};

const articles = [
  {
    id: 1,
    tag: "هوش مصنوعی",
    title: "یادگیری عمیق در پردازش زبان طبیعی فارسی: مرور نظام‌مند",
    author: "دکتر علی محمدی",
    date: "۲۵ اسفند ۱۴۰۳",
    abstract:
      "در این مقاله به بررسی جامع روش‌های یادگیری عمیق برای پردازش زبان فارسی پرداخته شده و چالش‌های خاص این زبان تحلیل می‌شود.",
    views: 1240,
    likes: 89,
  },
  {
    id: 2,
    tag: "زیست‌شناسی",
    title: "بررسی تنوع ژنتیکی گونه‌های بومی ایران با رویکرد حفاظتی",
    author: "دکتر سارا احمدی",
    date: "۲۲ اسفند ۱۴۰۳",
    abstract:
      "مطالعه‌ای بر روی گونه‌های گیاهی بومی فلات ایران و تحلیل ژنتیکی برای حفظ تنوع زیستی در برابر تغییرات اقلیمی.",
    views: 870,
    likes: 64,
  },
  {
    id: 3,
    tag: "فیزیک",
    title: "شبیه‌سازی عددی دینامیک سیالات در ریزتراشه‌های زیستی",
    author: "دکتر محمد کریمی",
    date: "۲۰ اسفند ۱۴۰۳",
    abstract:
      "ارائه مدل عددی جدید برای تحلیل رفتار سیالات در مقیاس میکرو با کاربرد در تشخیص پزشکی.",
    views: 1560,
    likes: 112,
  },
  {
    id: 4,
    tag: "علوم داده",
    title: "تحلیل شبکه‌های اجتماعی علمی: شناسایی روندهای پژوهشی نوظهور",
    author: "دکتر زهرا حسینی",
    date: "۱۸ اسفند ۱۴۰۳",
    abstract:
      "با استفاده از داده‌کاوی و تحلیل شبکه، روندهای پژوهشی در پنج سال اخیر در حوزه علوم داده شناسایی شده است.",
    views: 2100,
    likes: 175,
  },
  {
    id: 5,
    tag: "مهندسی",
    title: "بهینه‌سازی مصرف انرژی در ساختمان‌های هوشمند با الگوریتم ژنتیک",
    author: "دکتر امیر رضایی",
    date: "۱۵ اسفند ۱۴۰۳",
    abstract:
      "ارائه یک چارچوب مبتنی بر الگوریتم ژنتیک برای کاهش ۳۰ درصدی مصرف انرژی در ساختمان‌های مجهز به IoT.",
    views: 930,
    likes: 72,
  },
  {
    id: 6,
    tag: "پزشکی",
    title: "اثربخشی درمان ترکیبی شناختی-رفتاری در اختلالات اضطرابی",
    author: "دکتر نرگس علوی",
    date: "۱۲ اسفند ۱۴۰۳",
    abstract:
      "کارآزمایی بالینی تصادفی با ۲۰۰ بیمار نشان‌دهنده اثربخشی بالای ترکیب CBT با نوروفیدبک است.",
    views: 1800,
    likes: 145,
  },
];

export default function page() {
  return (
    <section className="mt-12 mb-6 px-4 sm:mt-18 sm:mb-10 sm:px-0">
      <div className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-5">
        <div>
          <h4 className="text-brand-2 flex gap-2 text-[1.6rem] font-bold sm:gap-3 sm:text-[2rem]">
            <FileTextIcon size={1.6} />
            مقالات جدید
          </h4>
        </div>
        <p className="text-brand-4 text-sm font-normal sm:text-base">
          جدیدترین دستاوردهای علمی و پژوهشی جامعه دانشران را مرور کنید.
        </p>
        <hr className="text-brand-7 w-screen" />
      </div>
      <div className="mt-4 sm:mt-6">
        <SearchBar />
      </div>
      <div className="mt-6 flex min-h-screen flex-col gap-6 sm:mt-10 sm:gap-8 lg:flex-row">
        <div className="flex-3/4 space-y-4 sm:space-y-5">
          <div className="text-brand-2 flex items-center gap-1">
            <FileTextIcon size={1.1} />
            <p className="text-base font-semibold sm:text-lg">
              جدید ترین مقالات
            </p>
          </div>
          <ArticlesFilter />
          <hr className="text-brand-7 w-full" />
          <ArticleList articles={articles} />
          <hr className="text-brand-7 w-full" />
          <ArticlesPagination />
        </div>
        <div className="space-y-5 lg:sticky lg:top-20 lg:h-fit lg:flex-1/4">
          <PopularAuthors />
          <HotTopics />
        </div>
      </div>
    </section>
  );
}
