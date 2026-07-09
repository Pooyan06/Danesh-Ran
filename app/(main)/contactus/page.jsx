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

export const metadata = {
  title: "تماس با ما",
};

export default function page() {
  return (
    <section className="mt-18 mb-10 space-y-10">
      <ContactHero />
      <hr className="text-brand-7 -mx-15 flex w-screen" />
      <div className="flex items-start gap-10">
        <ContactForm />
        <div className="max-w-1/2 flex-1/2 space-y-8">
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
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="bg-brand-2 flex h-18 w-18 items-center justify-center rounded-full text-3xl text-white">
        <PhoneCallIcon />
      </div>
      <p className="text-brand-2 text-4xl font-bold">تماس با ما</p>
      <p className="text-brand-4 max-w-150 text-center">
        ما همواره پاسخگوی سوالات، نظرات و پیشنهادهای شما هستیم.
      </p>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="border-brand-7 max-w-1/2 flex-1/2 space-y-6 rounded-xl border bg-white p-10">
      <div>
        <div className="flex items-center gap-2">
          <MessageIcon size={1.7} />
          <p className="text-xl font-semibold">ارسال پیام</p>
        </div>
        <p className="text-brand-4 mt-3 text-[0.9rem]">
          پس از دریافت، در سریع‌ترین زمان ممکن پاسخ خواهیم داد.
        </p>
      </div>
      <div className="space-y-5">
        <Input
          label="نام و نام خانوادگی"
          icon={<UserIcon size={1.7} />}
          required={true}
          placeholder="پویان فرهادی"
        />
        <Input
          label="ایمیل"
          icon={<EmailIcon size={1.4} />}
          required={true}
          placeholder="farhadipooyan.1385@gmail.com"
        />
        <Input
          label="موضوع"
          icon={<TagIcon size={1.4} />}
          required={true}
          placeholder="farhadipooyan.1385@gmail.com"
        />
        <Input
          type="area"
          icon={<FileTextIcon size={1.4} />}
          label="پیام"
          required={true}
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="flex space-x-5">
        <Button>
          <SendIcon size={1.1} />
          ارسال پیام
        </Button>
        <Button type={2}>
          <XIcon size={1.3} /> پاک کردن
        </Button>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="border-brand-7 space-y-6 rounded-xl border bg-white p-10">
      <div>
        <div className="text-brand-2 flex items-center gap-2">
          <InfoIcon size={1.7} />
          <p className="text-xl font-semibold">ارسال پیام</p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-10 w-10 items-center justify-center rounded-full">
          <MapPinIcon size={1.5} />
        </div>
        <div>
          <p className="text-brand-4 text-sm">آدرس</p>
          <p>تهران، خیابان انقلاب، پلاک ۱۲۳، طبقه ۴</p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-10 w-10 items-center justify-center rounded-full">
          <PhoneIcon size={1.3} />
        </div>
        <div>
          <p className="text-brand-4 text-sm">تلفن</p>
          <p className="hover:text-brand-3 cursor-pointer duration-150 hover:underline">
            ۰۲۱-۱۲۳۴۵۶۷۸
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-10 w-10 items-center justify-center rounded-full">
          <EmailIcon size={1.3} />
        </div>
        <div>
          <p className="text-brand-4 text-sm">ايميل</p>
          <p className="hover:text-brand-3 cursor-pointer duration-150 hover:underline">
            info@daneshran.ir
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="bg-brand-9 text-brand-2 flex h-10 w-10 items-center justify-center rounded-full">
          <ClockIcon size={1.5} />
        </div>
        <div>
          <p className="text-brand-4 text-sm">ساعت کاری</p>
          <p>شنبه تا چهارشنبه ۹:۰۰ تا ۱۸:۰۰</p>
        </div>
      </div>
    </div>
  );
}

function ContactSocial() {
  return (
    <div className="border-brand-7 space-y-6 rounded-xl border bg-white p-10">
      <div className="text-brand-2 flex items-center gap-2">
        <ShareIcon size={1.8} />
        <p className="text-xl font-semibold">شبکه‌های اجتماعی</p>
      </div>
      <div className="space-x-3">
        <Button size="small" type={2}>
          <TelegramIcon size={1.5} />
          تلگرام
        </Button>
        <Button size="small" type={2}>
          <InstagramIcon size={1.5} />
          اينستاگرام
        </Button>
        <Button size="small" type={2}>
          <LinkedinIcon size={1.5} />
          لينكدين
        </Button>
      </div>
    </div>
  );
}

function ContactMap() {
  return (
    <div className="border-brand-7 hover:border-brand-4 flex flex-col items-center justify-center space-y-3 rounded-xl border bg-white p-10 duration-300">
      <div className="bg-brand-9 text-brand-2 flex h-13 w-13 items-center justify-center rounded-full">
        <MapIcon size={1.7} />
      </div>
      <div>
        <p className="text-brand-4 font-semibold">موقعیت مکانی دانشران</p>
        <p className="text-brand-4 mt-2 text-sm opacity-80">
          تهران، خیابان انقلاب، پلاک ۱۲۳
        </p>
      </div>
      <div className="text-brand-4 border-brand-7 flex w-full items-center justify-center rounded-xl border p-20 text-sm">
        📍 نقشه تعاملی — به‌زودی
      </div>
    </div>
  );
}
