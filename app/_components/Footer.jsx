import { InstagramIcon, LinkedinIcon, TelegramIcon } from "../_assets/Icons";

export default function Footer() {
  return (
    <div className="border-brand-7 mt-10 border-t bg-white px-15 pt-10 pb-5">
      <div className="flex gap-60">
        <div>
          <p className="text-brand-2 mb-5 font-semibold">راهنما</p>
          <div className="space-y-3.5">
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              نحوه ارسال مقاله
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              راهنمای نویسندگان
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              سوالات متداول
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              تماس با پشتیبانی
            </p>
          </div>
        </div>
        <div>
          <p className="text-brand-2 mb-5 font-semibold">قوانین انتشار</p>
          <div className="space-y-3.5">
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              مجوز Creative Commons
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              حقوق مالکیت فکری
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              اخلاق انتشار
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              شرایط استفاده
            </p>
          </div>
        </div>
        <div>
          <p className="text-brand-2 mb-5 font-semibold">تماس با ما</p>
          <div className="space-y-3.5">
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              info@daneshran.ir
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              تهران، خیابان انقلاب
            </p>
            <p className="text-brand-4 hover:text-brand-2 cursor-pointer">
              021-12345678
            </p>
          </div>
        </div>
      </div>
      <hr className="text-brand-7 my-7" />
      <div className="flex justify-between">
        <div>
          <p className="text-brand-4 text-[0.9rem]">
            © ۱۴۰۴ دانشران — تمامی حقوق محفوظ است. محتوا تحت مجوز CC BY-SA 4.0
            منتشر می‌شود.
          </p>
        </div>
        <div className="flex gap-3">
          <p className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 cursor-pointer rounded-full p-2 duration-300">
            <TelegramIcon size={1.3} />
          </p>
          <p className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 cursor-pointer rounded-full p-2 duration-300">
            <InstagramIcon size={1.3} />
          </p>
          <p className="text-brand-2 bg-brand-11 hover:text-brand-1 hover:bg-brand-2 cursor-pointer rounded-full p-2 duration-300">
            <LinkedinIcon size={1.3} />
          </p>
        </div>
      </div>
    </div>
  );
}
