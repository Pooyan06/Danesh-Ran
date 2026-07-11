import {
  FileTextIcon,
  InfoIcon,
  PenToolIcon,
  SaveIcon,
  SendIcon,
  ShieldCheckIcon,
} from "@/app/_assets/Icons";
import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import ArticleContentSection from "@/app/_pages/articles/new/ArticleContentSection";
import AttachmentsSection from "@/app/_pages/articles/new/AttachmentsSection";
import CategorySection from "@/app/_pages/articles/new/CategorySection";
import PublishProgress from "@/app/_pages/articles/new/PublishProgress";
import SectionHeader from "@/app/_pages/articles/new/SectionHeader";
import SupportSection from "@/app/_pages/articles/new/SupportSection";
import TagsSection from "@/app/_pages/articles/new/TagsSection";
import WritingTips from "@/app/_pages/articles/new/WritingTips";

export const metadata = {
  title: "نوشتن مقاله جدید",
};

export default function page() {
  return (
    <section className="mt-12 mb-6 overflow-x-hidden px-3 sm:mt-18 sm:mb-10 sm:px-4 md:px-6 lg:px-0">
      <PublishHeader />
      <hr className="text-brand-7 -mx-3 mt-6 w-screen sm:-mx-4 sm:mt-10 md:-mx-6 lg:-mx-15" />
      <ArticleEditorLayout />
    </section>
  );
}

function PublishHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
      <div className="bg-brand-2 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white sm:h-18 sm:w-18 sm:text-3xl">
        <PenToolIcon size={1.6} />
      </div>
      <p className="text-brand-2 text-2xl font-bold sm:text-4xl">
        ارسال <span className="text-brand-3">مقاله</span> جدید
      </p>
      <p className="text-brand-4 text-center text-sm sm:text-base">
        دانش و یافته‌های پژوهشی خود را با جامعه علمی دانشران به اشتراک بگذارید.
      </p>
      <div className="border-brand-10 bg-brand-9 text-brand-2 flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold sm:px-3 sm:py-1 sm:text-sm">
        <ShieldCheckIcon size={1.2} /> انتشار امن و حرفه‌ای
      </div>
    </div>
  );
}

function ArticleEditorLayout() {
  return (
    <div className="mt-6 flex flex-col gap-6 sm:mt-10 lg:flex-row lg:gap-6 xl:mx-30">
      <PublishSidebar />
      <PublishForm />
    </div>
  );
}

function PublishSidebar() {
  return (
    <div className="space-y-5 lg:sticky lg:top-20 lg:h-fit lg:flex-[0.25]">
      <PublishProgress />
      <WritingTips />
      <SupportSection />
    </div>
  );
}

function PublishForm() {
  return (
    <div className="border-brand-7 flex-[0.75] space-y-6 rounded-xl border bg-white p-4 sm:p-5 md:p-6 lg:p-7">
      <div className="border-brand-7 border-b pb-6 sm:pb-8">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-[1rem] font-semibold sm:gap-3 sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.32rem]">
            <FileTextIcon size={1} />
            اطلاعات مقاله
          </p>
          <p className="bg-brand-9 hover:bg-brand-5 text-brand-2 flex cursor-pointer items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold duration-300 sm:px-3 sm:py-2 sm:text-sm">
            <InfoIcon size={1.2} />
            <span className="hidden sm:inline">راهنمای انتشار</span>
            <span className="sm:hidden">راهنما</span>
          </p>
        </div>
        <p className="text-brand-4 text-xs sm:text-sm">
          لطفاً تمام فیلدهای ضروری را با دقت تکمیل کنید.
        </p>
      </div>
      <TitleSection />
      <ArticleContentSection />
      <AttachmentsSection />
      <TermsAgreementSection />
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-0 sm:space-x-3 md:mt-10">
        <Button size="small">
          <SendIcon size={1} />
          <span className="text-xs sm:text-sm">ارسال مقاله</span>
        </Button>
        <Button type={2} size="small">
          <SaveIcon size={1.1} />
          <span className="text-xs sm:text-sm">پيش نويس</span>
        </Button>
      </div>
    </div>
  );
}

function TitleSection() {
  return (
    <div className="border-brand-7 space-y-5 border-b border-dashed pb-5 sm:space-y-7 sm:pb-7">
      <SectionHeader
        step="۱"
        title="اطلاعات پایه"
        description="عنوان، دسته‌بندی و کلمات کلیدی مقاله"
      />
      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium sm:text-sm">
            عنوان مقاله <span className="text-red-600">*</span>
          </p>
          <p className="text-brand-4 text-[0.7rem] font-medium sm:text-[0.8rem]">
            ۰ / ۱۵۰
          </p>
        </div>
        <Input placeholder="عنوان جذاب و دقیق برای مقاله خود انتخاب کنید..." />
        <p className="text-brand-4 mt-2 flex items-center gap-1 text-[0.7rem] sm:mt-3 sm:text-[0.8rem]">
          <InfoIcon size={1.5} />
          حداقل ۵ کاراکتر — حداکثر ۱۵۰ کاراکتر
        </p>
      </div>
      <CategorySection />
      <TagsSection />
    </div>
  );
}

function TermsAgreementSection() {
  return (
    <div className="space-y-4 sm:space-y-5">
      <SectionHeader
        step="۴"
        title="تأیید نهایی و ارسال"
        description="پذیرش قوانین انتشار و ثبت مقاله"
      />
      <div>
        <label className="text-brand-8 flex flex-wrap items-center gap-1 text-[0.75rem] font-medium sm:space-x-1 sm:text-[0.85rem] md:text-[0.9rem]">
          <input type="checkbox" className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>قوانین انتشار مقاله را مطالعه کرده و</span>
          <span className="text-brand-2 hover:text-brand-3 cursor-pointer duration-150 hover:underline">
            می‌پذیرم
          </span>
          <span className="text-red-600">*</span>
        </label>
      </div>
    </div>
  );
}
