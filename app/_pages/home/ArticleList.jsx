import ArticleCard from "./ArticleCard";
import { FileTextIcon } from "@/app/_assets/Icons";

export default function ArticleList() {
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

  return (
    <div className="space-y-4">
      <div className="text-brand-2 flex items-center gap-1">
        <FileTextIcon size={1.3} />
        <p className="font-semibold">مقالات جدید</p>
      </div>
      <div className="flex flex-col space-y-5">
        {articles.map((article) => (
          <ArticleCard
            tag={article.tag}
            title={article.title}
            author={article.author}
            date={article.date}
            views={article.views}
            likes={article.likes}
            key={article.id}
          >
            {article.abstract}
          </ArticleCard>
        ))}
      </div>
    </div>
  );
}
