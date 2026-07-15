import { InstagramIcon, LinkedinIcon, TelegramIcon } from "../_assets/Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-brand-7 mt-10 border-t bg-white px-4 pt-6 pb-4 sm:px-6 md:px-10 lg:px-15 lg:pt-10 lg:pb-5">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:flex lg:gap-60">
        <div className="min-w-[140px] flex-1 sm:flex-none">
          <h4 className="text-brand-2 mb-3 text-sm font-semibold sm:text-base lg:mb-5">
            راهنما
          </h4>
          <ul className="space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                نحوه ارسال مقاله
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                راهنمای نویسندگان
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                تماس با پشتیبانی
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-[140px] flex-1 sm:flex-none">
          <h4 className="text-brand-2 mb-3 text-sm font-semibold sm:text-base lg:mb-5">
            قوانین انتشار
          </h4>
          <ul className="space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                مجوز Creative Commons
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                حقوق مالکیت فکری
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                اخلاق انتشار
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                شرایط استفاده
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-35 flex-1 sm:flex-none">
          <h4 className="text-brand-2 mb-3 text-sm font-semibold sm:text-base lg:mb-5">
            تماس با ما
          </h4>
          <ul className="space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            <li>
              <a
                href="mailto:info@daneshran.ir"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                info@daneshran.ir
              </a>
            </li>
            <li>
              <address className="text-brand-4 text-sm not-italic sm:text-base">
                تهران، خیابان انقلاب
              </address>
            </li>
            <li>
              <a
                href="tel:+982112345678"
                className="text-brand-4 hover:text-brand-2 text-sm transition-colors duration-200 sm:text-base"
              >
                ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="text-brand-7 my-5 sm:my-6 lg:my-7" />

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-right">
          <p className="text-brand-4 text-xs leading-relaxed sm:text-[0.8rem] lg:text-[0.9rem]">
            © ۱۴۰۴ دانشران — تمامی حقوق محفوظ است. محتوا تحت مجوز CC BY-SA 4.0
            منتشر می‌شود.
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3">
          <a
            href="https://t.me/daneshran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 rounded-full p-1.5 transition-all duration-300 hover:scale-110 sm:p-2"
            aria-label="تلگرام دانشران"
          >
            <TelegramIcon size={1.2} />
          </a>
          <a
            href="https://instagram.com/daneshran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 rounded-full p-1.5 transition-all duration-300 hover:scale-110 sm:p-2"
            aria-label="اینستاگرام دانشران"
          >
            <InstagramIcon size={1.2} />
          </a>
          <a
            href="https://linkedin.com/company/daneshran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 rounded-full p-1.5 transition-all duration-300 hover:scale-110 sm:p-2"
            aria-label="لینکدین دانشران"
          >
            <LinkedinIcon size={1.2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
