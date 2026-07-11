import {
  BookmarkIcon,
  CommentIcon,
  CopyIcon,
  FileTextIcon,
  HeartIcon,
  InfoIcon,
  LinkIcon,
  ShaireIcon2,
  ShareIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import ArticleMain from "@/app/_pages/articles/[articles]/ArticleMain";

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
    sections: [
      {
        title: "",
        content:
          "پردازش زبان طبیعی (NLP) یکی از حوزه‌های پرکاربرد هوش مصنوعی است که در سال‌های اخیر با ظهور روش‌های یادگیری عمیق تحولی شگرف یافته است. زبان فارسی با ویژگی‌های صرفی و نحوی خاص خود، چالش‌های منحصربه‌فردی را برای مدل‌های زبانی ایجاد می‌کند.",
        type: "text",
      },
      {
        title: "۱. مقدمه",
        content:
          "در این پژوهش، ما به مرور نظام‌مند روش‌های مبتنی بر شبکه‌های عصبی عمیق برای پردازش متون فارسی پرداخته‌ایم. داده‌های مورد استفاده شامل پیکره‌های استاندارد فارسی و مجموعه‌های خبری بزرگ هستند.",
        type: "text",
      },
      {
        title: "۲. روش‌شناسی",
        content:
          "رویکرد اصلی مبتنی بر معماری Transformer و مدل‌های از پیش‌آموزش‌دیده مانند BERT و GPT است. ما عملکرد این مدل‌ها را در وظایفی چون تشخیص موجودیت‌های نام‌دار، تحلیل احساسات و ترجمه ماشینی ارزیابی کرده‌ایم.",
        type: "text",
        list: [
          "استفاده از پیکره همشهری و پیکره متون حقوقی",
          "آموزش مدل با بهینه‌ساز Adam و نرخ یادگیری تطبیقی",
          "ارزیابی با معیارهای دقت، F1 و BLEU",
        ],
      },
      {
        title: "۳. نتایج",
        content:
          "نتایج نشان می‌دهد که مدل‌های مبتنی بر Transformer با دقت بالایی قادر به تشخیص مفاهیم پیچیده در زبان فارسی هستند. همچنین چالش‌هایی مانند نبودن منابع آموزشی کافی و تنوع گویشی مورد بحث قرار گرفته است.",
        type: "text",
      },
      {
        title: "۴. نتیجه‌گیری",
        content:
          "با توجه به یافته‌ها، استفاده از یادگیری عمیق در پردازش زبان فارسی راهگشا بوده و نیاز به توسعه مجموعه‌های داده‌ی متنوع‌تر احساس می‌شود.",
        type: "text",
      },
    ],
    comments: [
      {
        id: 1,
        author: "نرگس کریمی",
        date: 2,
        text: "مقاله بسیار مفیدی بود. تشکر از نویسنده محترم.",
      },
      {
        id: 2,
        author: "مهرداد صفوی",
        date: 5,
        text: "آیا امکان دسترسی به کدهای پیاده‌سازی وجود دارد؟",
      },
      {
        id: 3,
        author: "فاطمه زارع",
        date: 7,
        text: "بسیار عالی. منتظر مقالات بیشتر در این حوزه هستیم.",
      },
      {
        id: 4,
        author: "دکتر سعید رضایی",
        date: 3,
        text: "نکات بسیار خوبی مطرح شده. به خصوص در بخش روش‌شناسی.",
      },
      {
        id: 5,
        author: "مریم حسینی",
        date: 4,
        text: "آیا این روش برای سایر زبان‌های مشابه فارسی نیز قابل تعمیم است؟",
      },
    ],
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
    sections: [
      {
        title: "",
        content:
          "تنوع ژنتیکی یکی از مهم‌ترین مؤلفه‌های بقای گونه‌ها در مواجهه با تغییرات محیطی است. ایران با تنوع اقلیمی و توپوگرافی خاص خود، میزبان گونه‌های گیاهی منحصربه‌فردی است که حفاظت از آن‌ها نیازمند درک عمیق ساختار ژنتیکی آن‌هاست.",
        type: "text",
      },
      {
        title: "۱. مقدمه",
        content:
          "تغییرات اقلیمی و تخریب زیستگاه‌ها، تنوع زیستی را در سراسر جهان تهدید می‌کند. گونه‌های گیاهی بومی ایران به دلیل سازگاری با شرایط خاص اقلیمی، از اهمیت ویژه‌ای برخوردارند. مطالعه تنوع ژنتیکی این گونه‌ها می‌تواند راهکارهای مؤثری برای حفاظت آن‌ها ارائه دهد.",
        type: "text",
      },
      {
        title: "۲. روش‌شناسی",
        content:
          "در این مطالعه از نشانگرهای مولکولی SSR و ISSR برای تحلیل تنوع ژنتیکی ۲۰ جمعیت از گونه‌های گیاهی بومی استفاده شد. نمونه‌برداری از مناطق مختلف ایران انجام و داده‌ها با استفاده از نرم‌افزارهای تخصصی تحلیل شدند.",
        type: "text",
        list: [
          "استخراج DNA از بافت برگ گیاهان",
          "استفاده از ۱۵ جفت آغازگر SSR",
          "تجزیه و تحلیل داده‌ها با نرم‌افزارهای GenAlEx و Structure",
        ],
      },
      {
        title: "۳. نتایج",
        content:
          "یافته‌ها نشان داد که تنوع ژنتیکی نسبتاً بالایی در جمعیت‌های مورد مطالعه وجود دارد. تفاوت‌های معناداری بین جمعیت‌های مناطق مختلف مشاهده شد که می‌تواند ناشی از عوامل محیطی و جغرافیایی باشد.",
        type: "text",
      },
      {
        title: "۴. نتیجه‌گیری",
        content:
          "نتایج این مطالعه بر لزوم تدوین برنامه‌های حفاظتی مبتنی بر داده‌های ژنتیکی تأکید دارد. حفاظت از گونه‌های گیاهی بومی نیازمند رویکردی جامع و مبتنی بر شواهد علمی است.",
        type: "text",
      },
    ],
    comments: [
      {
        id: 1,
        author: "دکتر محسن رضایی",
        date: 3,
        text: "بسیار مقاله مفیدی بود. تشکر از دکتر احمدی عزیز.",
      },
      {
        id: 2,
        author: "زهرا موسوی",
        date: 6,
        text: "آیا داده‌های این پژوهش قابل دسترس است؟",
      },
      {
        id: 3,
        author: "احسان کریمی",
        date: 8,
        text: "نکات بسیار خوبی در مورد اهمیت تنوع ژنتیکی مطرح شده.",
      },
    ],
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
    sections: [
      {
        title: "",
        content:
          "دینامیک سیالات در مقیاس میکرو یکی از حوزه‌های پیشرفته مهندسی است که کاربردهای گسترده‌ای در تشخیص پزشکی و آزمایش‌های بالینی دارد. ریزتراشه‌های زیستی به عنوان ابزارهای نوین در این حوزه مطرح هستند.",
        type: "text",
      },
      {
        title: "۱. مقدمه",
        content:
          "سیستم‌های میکروسیالی با قابلیت کنترل دقیق جریان سیالات، انقلابی در روش‌های تشخیصی ایجاد کرده‌اند. شبیه‌سازی عددی این سیستم‌ها می‌تواند به بهینه‌سازی عملکرد آن‌ها کمک کند.",
        type: "text",
      },
      {
        title: "۲. روش‌شناسی",
        content:
          "در این پژوهش از روش حل عددی حجم محدود برای شبیه‌سازی جریان سیال در کانال‌های میکرو استفاده شده است. معادلات ناویر-استوکس با شرایط مرزی مناسب حل شدند.",
        type: "text",
        list: [
          "استفاده از نرم‌افزار اوپن‌فوم",
          "مدل‌سازی با مش‌بندی تطبیقی",
          "اعتبارسنجی با داده‌های تجربی",
        ],
      },
      {
        title: "۳. نتایج",
        content:
          "نتایج شبیه‌سازی تطابق خوبی با داده‌های تجربی نشان داد. الگوهای جریان و توزیع فشار در کانال‌های میکرو به دقت پیش‌بینی شد.",
        type: "text",
      },
      {
        title: "۴. نتیجه‌گیری",
        content:
          "مدل عددی ارائه شده می‌تواند به عنوان یک ابزار کارآمد در طراحی بهینه ریزتراشه‌های زیستی مورد استفاده قرار گیرد.",
        type: "text",
      },
    ],
    comments: [
      {
        id: 1,
        author: "دکتر علی نوروزی",
        date: 2,
        text: "شبیه‌سازی بسیار دقیقی انجام شده. استفاده از OpenFOAM انتخاب خوبی بوده.",
      },
      {
        id: 2,
        author: "سارا جعفری",
        date: 4,
        text: "آیا این مدل برای سیالات غیرنیوتنی هم قابل استفاده است؟",
      },
      {
        id: 3,
        author: "رضا محمدی",
        date: 6,
        text: "مقاله بسیار کاربردی در حوزه پزشکی",
      },
    ],
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
    sections: [
      {
        title: "",
        content:
          "شبکه‌های اجتماعی علمی به عنوان یکی از منابع مهم برای شناسایی روندهای پژوهشی نوظهور شناخته می‌شوند. تحلیل این شبکه‌ها می‌تواند به محققان در انتخاب مسیرهای تحقیقاتی کمک کند.",
        type: "text",
      },
      {
        title: "۱. مقدمه",
        content:
          "در عصر داده‌های بزرگ، شناسایی سریع روندهای پژوهشی نوظهور اهمیت ویژه‌ای دارد. شبکه‌های اجتماعی علمی مانند ResearchGate و Twitter، بستر مناسبی برای تحلیل این روندها هستند.",
        type: "text",
      },
      {
        title: "۲. روش‌شناسی",
        content:
          "در این مطالعه از روش‌های تحلیل شبکه و متن‌کاوی برای استخراج الگوهای هم‌نویسندگی و موضوعات داغ استفاده شده است. داده‌ها از پایگاه‌های Scopus و Web of Science گردآوری شد.",
        type: "text",
        list: [
          "استخراج داده از پایگاه Scopus",
          "تحلیل شبکه با نرم‌افزار Gephi",
          "شناسایی خوشه‌های موضوعی با الگوریتم Louvain",
        ],
      },
      {
        title: "۳. نتایج",
        content:
          "پنج خوشه موضوعی اصلی شامل یادگیری ماشین، داده‌های بزرگ، اینترنت اشیا، هوش مصنوعی و امنیت سایبری شناسایی شد. رشد سالانه مقاله‌ها در این حوزه‌ها قابل توجه است.",
        type: "text",
      },
      {
        title: "۴. نتیجه‌گیری",
        content:
          "تحلیل شبکه‌های اجتماعی علمی ابزاری قدرتمند برای شناسایی روندهای پژوهشی نوظهور است و می‌تواند به سیاست‌گذاری علمی کمک کند.",
        type: "text",
      },
    ],
    comments: [
      {
        id: 1,
        author: "دکتر احمدیان",
        date: 1,
        text: "روش تحلیل شبکه بسیار جذاب و کارآمد است.",
      },
      {
        id: 2,
        author: "سعید قاسمی",
        date: 3,
        text: "آیا این روش برای سایر حوزه‌های علمی هم قابل استفاده است؟",
      },
      {
        id: 3,
        author: "مریم زمانی",
        date: 5,
        text: "داده‌های استفاده شده جامع و کامل بوده است.",
      },
      {
        id: 4,
        author: "دکتر عزیزی",
        date: 7,
        text: "مقاله بسیار راهگشا برای پژوهشگران جوان است.",
      },
    ],
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
    sections: [
      {
        title: "",
        content:
          "بخش ساختمان یکی از بزرگترین مصرف‌کنندگان انرژی در جهان است. ساختمان‌های هوشمند با استفاده از فناوری‌های IoT و روش‌های بهینه‌سازی می‌توانند مصرف انرژی را به طور قابل توجهی کاهش دهند.",
        type: "text",
      },
      {
        title: "۱. مقدمه",
        content:
          "با توجه به بحران انرژی و افزایش قیمت‌ها، بهینه‌سازی مصرف انرژی در ساختمان‌ها به یکی از چالش‌های اصلی مهندسان تبدیل شده است. الگوریتم‌های تکاملی می‌توانند راهکارهای مؤثری در این زمینه ارائه دهند.",
        type: "text",
      },
      {
        title: "۲. روش‌شناسی",
        content:
          "در این پژوهش از الگوریتم ژنتیک برای بهینه‌سازی پارامترهای کنترلی سیستم‌های HVAC و روشنایی استفاده شده است. شبیه‌سازی در نرم‌افزار EnergyPlus انجام شد.",
        type: "text",
        list: [
          "مدل‌سازی ساختمان در EnergyPlus",
          "پیاده‌سازی الگوریتم ژنتیک در متلب",
          "ارزیابی با سناریوهای مختلف آب‌وهوایی",
        ],
      },
      {
        title: "۳. نتایج",
        content:
          "نتایج نشان داد که الگوریتم ژنتیک می‌تواند مصرف انرژی را تا ۳۲ درصد نسبت به حالت پایه کاهش دهد. هم‌چنین آسایش حرارتی ساکنین به طور قابل قبولی حفظ شد.",
        type: "text",
      },
      {
        title: "۴. نتیجه‌گیری",
        content:
          "رویکرد ارائه شده می‌تواند در ساختمان‌های هوشمند جدید و نیز بهینه‌سازی ساختمان‌های موجود مورد استفاده قرار گیرد.",
        type: "text",
      },
    ],
    comments: [
      {
        id: 1,
        author: "دکتر نیک‌آیین",
        date: 2,
        text: "ترکیب الگوریتم ژنتیک با IoT بسیار جذاب و کاربردی است.",
      },
      {
        id: 2,
        author: "علی اکبری",
        date: 4,
        text: "نتایج کاهش ۳۲ درصدی خیلی قابل توجه است.",
      },
      {
        id: 3,
        author: "زهرا رضایی",
        date: 6,
        text: "آیا این روش برای ساختمان‌های بلندمرتبه هم کاربرد دارد؟",
      },
    ],
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
    sections: [
      {
        title: "",
        content:
          "اختلالات اضطرابی از شایع‌ترین مشکلات روانپزشکی هستند که تأثیر قابل توجهی بر کیفیت زندگی بیماران دارند. درمان‌های ترکیبی جدید می‌توانند اثربخشی بیشتری نسبت به روش‌های سنتی داشته باشند.",
        type: "text",
      },
      {
        title: "۱. مقدمه",
        content:
          "اختلالات اضطرابی با شیوع حدود ۲۵ درصد در جمعیت عمومی، بار اقتصادی و روانی زیادی بر جامعه تحمیل می‌کنند. درمان شناختی-رفتاری (CBT) یکی از مؤثرترین روش‌های درمانی است، اما ترکیب آن با روش‌های دیگر می‌تواند اثربخشی را افزایش دهد.",
        type: "text",
      },
      {
        title: "۲. روش‌شناسی",
        content:
          "این مطالعه کارآزمایی بالینی تصادفی بر روی ۲۰۰ بیمار مبتلا به اختلال اضطراب فراگیر انجام شد. بیماران به دو گروه درمان CBT و گروه ترکیبی CBT با نوروفیدبک تقسیم شدند.",
        type: "text",
        list: [
          "مداخله به مدت ۱۲ جلسه هفتگی",
          "استفاده از پرسشنامه‌های استاندارد ارزیابی",
          "پیگیری تا ۶ ماه پس از درمان",
        ],
      },
      {
        title: "۳. نتایج",
        content:
          "گروه ترکیبی کاهش معنادارتری در نمرات اضطراب نسبت به گروه CBT تنها نشان داد (۰٫۰۰۱ > p). هم‌چنین عود علائم در گروه ترکیبی به طور قابل توجهی کمتر بود.",
        type: "text",
      },
      {
        title: "۴. نتیجه‌گیری",
        content:
          "ترکیب نوروفیدبک با CBT می‌تواند به عنوان یک رویکرد درمانی مؤثر در اختلالات اضطرابی توصیه شود و بهبودی پایدارتری را به همراه داشته باشد.",
        type: "text",
      },
    ],
    comments: [
      {
        id: 1,
        author: "دکتر رضایی",
        date: 1,
        text: "مقاله بسیار مهمی در حوزه روانپزشکی",
      },
      {
        id: 2,
        author: "فائزه کریمی",
        date: 3,
        text: "نتایج بسیار امیدوارکننده است. آیا این روش برای سایر اختلالات هم قابل استفاده است؟",
      },
      {
        id: 3,
        author: "دکتر محمدی",
        date: 5,
        text: "استفاده از نوروفیدبک در کنار CBT واقعاً نوآورانه است.",
      },
      {
        id: 4,
        author: "سارا زمانی",
        date: 7,
        text: "با تشکر از تیم پژوهشی برای این مطالعه ارزشمند",
      },
    ],
  },
];

export async function generateMetadata({ params }) {
  const { articles: articleIdParam } = await params;
  const articleId = Number(articleIdParam);

  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return {
      title: "مقاله یافت نشدن",
      description: "مقاله مورد نظر در دانشران یافت نشد",
    };
  }

  return {
    title: `${article.title} | دانشران`,
    description: article.abstract,
    keywords: [article.tag, "مقاله علمی", "دانشران", "پژوهش"],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.abstract,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: [article.tag],
      siteName: "دانشران",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.abstract,
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    articles: String(article.id),
  }));
}

export default async function page({ params }) {
  const { articles: article_id } = await params;

  const currentArticle = articles.find((article) => article.id == article_id);

  if (!currentArticle) {
    return (
      <section className="mt-12 mb-6 px-4 sm:mt-18 sm:mb-10 sm:px-0">
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 sm:text-3xl">
              مقاله یافت نشد
            </h2>
            <p className="text-brand-4 mt-2 text-sm sm:text-base">
              مقاله‌ای با این شناسه وجود ندارد.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 mb-6 px-4 sm:mt-18 sm:mb-10 sm:px-0">
      <section>
        <div className="flex w-full flex-col items-center justify-center gap-3 text-center sm:gap-5">
          <div>
            <h4 className="text-brand-2 flex items-center gap-2 text-[1.6rem] font-bold sm:gap-3 sm:text-[2rem]">
              <FileTextIcon size={1.6} />
              مشاهده مقاله
            </h4>
          </div>
          <p className="text-brand-4 text-sm font-normal sm:text-base">
            متن کامل مقاله را مطالعه کنید و با جامعه علمی تعامل داشته باشید.
          </p>
          <hr className="text-brand-7 w-screen" />
        </div>
        <div className="mt-6 flex min-h-screen flex-col gap-6 sm:mt-10 sm:gap-8 lg:flex-row">
          <ArticleMain article={currentArticle} />
          <div className="space-y-5 lg:sticky lg:top-20 lg:h-fit lg:flex-1/4">
            <ArticleInfo />
            <ShareActions />
            <ArticleActions />
            <RelatedArticles />
          </div>
        </div>
      </section>
    </section>
  );
}

function ArticleInfo() {
  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
        <InfoIcon size={1.3} />
        <p className="text-sm sm:text-base">اطلاعات مقاله</p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2 text-xs font-semibold sm:text-sm">
          <p className="text-brand-4 text-xs sm:text-sm">شناسه</p>
          <p>DAN-۲۰۲۴-۱۲۳</p>
        </div>
        <hr className="text-brand-7 mb-2" />
        <div className="flex items-center justify-between space-y-2 text-xs font-semibold sm:text-sm">
          <p className="text-brand-4 text-xs sm:text-sm">نوع</p>
          <p>مروری</p>
        </div>
        <hr className="text-brand-7 mb-2" />
        <div className="flex items-center justify-between space-y-2 text-xs font-semibold sm:text-sm">
          <p className="text-brand-4 text-xs sm:text-sm">زبان</p>
          <p>فارسی</p>
        </div>
        <hr className="text-brand-7 mb-2" />
        <div className="flex items-center justify-between space-y-2 text-xs font-semibold sm:text-sm">
          <p className="text-brand-4 text-xs sm:text-sm">تعداد صفحات</p>
          <p>18</p>
        </div>
        <hr className="text-brand-7 mb-2" />
        <div className="flex items-center justify-between space-y-2 text-xs font-semibold sm:text-sm">
          <p className="text-brand-4 text-xs sm:text-sm">وضعیت</p>
          <p className="text-brand-2">تایید شده</p>
        </div>
      </div>
    </div>
  );
}

function ShareActions() {
  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
        <ShareIcon size={1.4} />
        <p className="text-sm sm:text-base">اشتراک‌گذاری</p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <div>
          <Button size="full" type={2}>
            <CopyIcon size={1.2} />
            <span className="text-xs sm:text-sm">کپی لینک</span>
          </Button>
        </div>
        <div>
          <Button size="full" type={2}>
            <ShaireIcon2 size={1.2} />
            <span className="text-xs sm:text-sm">اشتراک</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ArticleActions() {
  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
        <BookmarkIcon size={1.3} />
        <p className="text-sm sm:text-base">اقدامات</p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        <div>
          <Button size="full">
            <BookmarkIcon size={1.2} />
            <span className="text-xs sm:text-sm">ذخیره مقاله</span>
          </Button>
        </div>
        <div>
          <Button size="full" type={2}>
            <CommentIcon size={1.2} />
            <span className="text-xs sm:text-sm">نظر</span>
          </Button>
        </div>
        <div>
          <Button size="full" type={2}>
            <HeartIcon size={1.2} />
            <span className="text-xs sm:text-sm">پسندیدن</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function RelatedArticles() {
  return (
    <div className="border-brand-7 rounded-2xl border bg-white p-4 sm:p-5">
      <div className="text-brand-2 mb-3 flex items-center space-x-1 font-semibold sm:mb-4">
        <LinkIcon size={1.3} />
        <p className="text-sm sm:text-base">مقالات مرتبط</p>
      </div>
      <div className="space-y-2">
        <p className="hover:text-brand-2 flex cursor-pointer items-center gap-2 text-xs duration-300 sm:text-sm">
          <FileTextIcon size={1.2} />
          مرور سیستماتیک روش‌های یادگیری نیمه‌نظارتی
        </p>
        <hr className="text-brand-7 mb-2" />
        <p className="hover:text-brand-2 flex cursor-pointer items-center gap-2 text-xs duration-300 sm:text-sm">
          <FileTextIcon size={1.2} />
          کاربرد شبکه‌های عصبی در ترجمه ماشینی فارسی
        </p>
        <hr className="text-brand-7 mb-2" />
        <p className="hover:text-brand-2 flex cursor-pointer items-center gap-2 text-xs duration-300 sm:text-sm">
          <FileTextIcon size={1.2} />
          چالش‌های پردازش زبان‌های کم‌منبع
        </p>
      </div>
    </div>
  );
}
