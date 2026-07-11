import { InstagramIcon, LinkedinIcon, TelegramIcon } from "../_assets/Icons";

export default function Footer() {
  return (
    <div className="border-brand-7 mt-10 border-t bg-white px-4 pt-6 pb-4 sm:px-6 md:px-10 lg:px-15 lg:pt-10 lg:pb-5">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:flex lg:gap-60">
        <div className="min-w-[140px] flex-1 sm:flex-none">
          <p className="text-brand-2 mb-3 text-sm font-semibold sm:text-base lg:mb-5">
            راهنما
          </p>
          <div className="space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              نحوه ارسال مقاله
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              راهنمای نویسندگان
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              سوالات متداول
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              تماس با پشتیبانی
            </p>
          </div>
        </div>

        <div className="min-w-[140px] flex-1 sm:flex-none">
          <p className="text-brand-2 mb-3 text-sm font-semibold sm:text-base lg:mb-5">
            قوانین انتشار
          </p>
          <div className="space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              مجوز Creative Commons
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              حقوق مالکیت فکری
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              اخلاق انتشار
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              شرایط استفاده
            </p>
          </div>
        </div>

        <div className="min-w-[140px] flex-1 sm:flex-none">
          <p className="text-brand-2 mb-3 text-sm font-semibold sm:text-base lg:mb-5">
            تماس با ما
          </p>
          <div className="space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              info@daneshran.ir
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              تهران، خیابان انقلاب
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer text-sm transition-colors duration-200 sm:text-base">
              021-12345678
            </p>
          </div>
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
          <p className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 cursor-pointer rounded-full p-1.5 transition-all duration-300 hover:scale-110 sm:p-2">
            <TelegramIcon size={1.2} />
          </p>
          <p className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 cursor-pointer rounded-full p-1.5 transition-all duration-300 hover:scale-110 sm:p-2">
            <InstagramIcon size={1.2} />
          </p>
          <p className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 cursor-pointer rounded-full p-1.5 transition-all duration-300 hover:scale-110 sm:p-2">
            <LinkedinIcon size={1.2} />
          </p>
        </div>
      </div>
    </div>
  );
}
