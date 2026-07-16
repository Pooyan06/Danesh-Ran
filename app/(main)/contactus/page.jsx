import {
  ClockIcon,
  EmailIcon,
  FileTextIcon,
  InfoIcon,
  InstagramIcon,
  LinkedinIcon,
  MapIcon,
  MapPinIcon,
  MessageIcon,
  PhoneCallIcon,
  PhoneIcon,
  SendIcon,
  ShareIcon,
  TagIcon,
  TelegramIcon,
  UserIcon,
  XIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "دانشران",
  description:
    "با تیم پشتیبانی دانشران در ارتباط باشید. سوالات، نظرات و پیشنهادهای خود را با ما در میان بگذارید.",
  keywords: [
    "تماس با دانشران",
    "پشتیبانی دانشران",
    "ارتباط با ما",
    "آدرس دانشران",
    "تلفن دانشران",
    "ایمیل دانشران",
  ],
  authors: [{ name: "پویان فرهادی" }],
  openGraph: {
    title: "تماس با ما | دانشران",
    description:
      "با تیم پشتیبانی دانشران در ارتباط باشید. سوالات، نظرات و پیشنهادهای خود را با ما در میان بگذارید.",
    type: "website",
    locale: "fa_IR",
    siteName: "دانشران",
    url: `${siteUrl}/contactus`,
    images: [
      {
        url: `${siteUrl}/daneshran.png`,
        width: 1200,
        height: 630,
        alt: "تماس با دانشران",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تماس با ما | دانشران",
    description:
      "با تیم پشتیبانی دانشران در ارتباط باشید. سوالات، نظرات و پیشنهادهای خود را با ما در میان بگذارید.",
    images: [`${siteUrl}/daneshran.png`],
  },
};

export default function page() {
  return (
    <section className="mt-12 mb-6 space-y-6 overflow-x-hidden px-4 sm:mt-18 sm:mb-10 sm:space-y-10 sm:px-0">
      <ContactHero />
      <hr className="text-brand-7 -mx-4 w-screen sm:-mx-15" />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <ContactForm />
        <div className="flex-1/2 space-y-6 lg:space-y-8">
          <ContactInfo />
          <ContactSocial />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}

function ContactHero() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
      <div className="bg-brand-2 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white sm:h-18 sm:w-18 sm:text-3xl">
        <PhoneCallIcon size={1.3} />
      </div>
      <h1 className="text-brand-2 text-2xl font-bold sm:text-4xl">
        تماس با ما
      </h1>
      <p className="text-brand-4 max-w-full px-2 text-center text-sm sm:max-w-150 sm:px-0 sm:text-base">
        ما همواره پاسخگوی سوالات، نظرات و پیشنهادهای شما هستیم.
      </p>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="border-brand-7 flex-1/2 space-y-6 rounded-xl border bg-white p-6 sm:p-8 lg:p-10">
      <div>
        <div className="flex items-center gap-2">
          <MessageIcon size={1.4} />
          <h2 className="text-lg font-semibold sm:text-xl">ارسال پیام</h2>
        </div>
        <p className="text-brand-4 mt-2 text-[0.8rem] sm:mt-3 sm:text-[0.9rem]">
          پس از دریافت، در سریع‌ترین زمان ممکن پاسخ خواهیم داد.
        </p>
      </div>
      <div className="space-y-4 sm:space-y-5">
        <Input
          label="نام و نام خانوادگی"
          icon={<UserIcon size={1.4} />}
          required={true}
          placeholder="پویان فرهادی"
        />
        <Input
          label="ایمیل"
          icon={<EmailIcon size={1.2} />}
          required={true}
          placeholder="farhadipooyan.1385@gmail.com"
        />
        <Input
          label="موضوع"
          icon={<TagIcon size={1.2} />}
          required={true}
          placeholder="موضوع پیام"
        />
        <Input
          type="area"
          icon={<FileTextIcon size={1.2} />}
          label="پیام"
          required={true}
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:space-x-5">
        <Button size="small">
          <SendIcon size={1.1} />
          ارسال پیام
        </Button>
        <Button type={2} size="small">
          <XIcon size={1.3} /> پاک کردن
        </Button>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="border-brand-7 space-y-4 rounded-xl border bg-white p-6 sm:space-y-6 sm:p-8 lg:p-10">
      <div>
        <div className="text-brand-2 flex items-center gap-2">
          <InfoIcon size={1.4} />
          <h2 className="text-lg font-semibold sm:text-xl">اطلاعات تماس</h2>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 sm:mt-8">
        <div className="bg-brand-9 text-brand-2 flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10">
          <MapPinIcon size={1.3} />
        </div>
        <div>
          <p className="text-brand-4 text-xs sm:text-sm">آدرس</p>
          <p className="text-sm sm:text-base">
            تهران، خیابان انقلاب، پلاک ۱۲۳، طبقه ۴
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10">
          <PhoneIcon size={1.1} />
        </div>
        <div>
          <p className="text-brand-4 text-xs sm:text-sm">تلفن</p>
          <p className="hover:text-brand-3 cursor-pointer text-sm duration-150 hover:underline sm:text-base">
            ۰۲۱-۱۲۳۴۵۶۷۸
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10">
          <EmailIcon size={1.1} />
        </div>
        <div>
          <p className="text-brand-4 text-xs sm:text-sm">ايميل</p>
          <p className="hover:text-brand-3 cursor-pointer text-sm duration-150 hover:underline sm:text-base">
            info@daneshran.ir
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10">
          <ClockIcon size={1.3} />
        </div>
        <div>
          <p className="text-brand-4 text-xs sm:text-sm">ساعت کاری</p>
          <p className="text-sm sm:text-base">شنبه تا چهارشنبه ۹:۰۰ تا ۱۸:۰۰</p>
        </div>
      </div>
    </div>
  );
}

function ContactSocial() {
  return (
    <div className="border-brand-7 space-y-4 rounded-xl border bg-white p-6 sm:space-y-6 sm:p-8 lg:p-10">
      <div className="text-brand-2 flex items-center gap-2">
        <ShareIcon size={1.5} />
        <h2 className="text-lg font-semibold sm:text-xl">شبکه‌های اجتماعی</h2>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-0 sm:space-x-3">
        <a href="https://t.me/pooyan_f" aria-label="تلگرام دانشران">
          <Button size="small" type={2}>
            <TelegramIcon size={1.2} />
            <span className="text-xs sm:text-sm">تلگرام</span>
          </Button>
        </a>
        <a
          href="https://www.instagram.com/pooyan_f06"
          aria-label="اینستاگرام دانشران"
        >
          <Button size="small" type={2}>
            <InstagramIcon size={1.2} />
            <span className="text-xs sm:text-sm">اينستاگرام</span>
          </Button>
        </a>
        <a
          href="https://linkedin.com/company/daneshran"
          aria-label="لینکدین دانشران"
        >
          <Button size="small" type={2}>
            <LinkedinIcon size={1.2} />
            <span className="text-xs sm:text-sm">لينكدين</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

function ContactMap() {
  return (
    <div className="border-brand-7 hover:border-brand-4 flex flex-col items-center justify-center space-y-2 rounded-xl border bg-white p-6 duration-300 sm:space-y-3 sm:p-8 lg:p-10">
      <div className="bg-brand-9 text-brand-2 flex h-11 w-11 items-center justify-center rounded-full sm:h-13 sm:w-13">
        <MapIcon size={1.4} />
      </div>
      <div>
        <h3 className="text-center text-sm font-semibold sm:text-base">
          موقعیت مکانی دانشران
        </h3>
        <p className="text-brand-4 mt-1 text-center text-xs opacity-80 sm:mt-2 sm:text-sm">
          تهران، خیابان انقلاب، پلاک ۱۲۳
        </p>
      </div>
      <div className="text-brand-4 border-brand-7 flex w-full items-center justify-center rounded-xl border p-10 text-xs sm:p-15 sm:text-sm lg:p-20">
        📍 نقشه تعاملی — به‌زودی
      </div>
    </div>
  );
}
