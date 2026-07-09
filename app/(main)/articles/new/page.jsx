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

export default function page() {
  return (
    <section className="mt-18 mb-10">
      <PublishHeader />
      <hr className="text-brand-7 -mx-15 mt-10 w-screen" />
      <ArticleEditorLayout />
    </section>
  );
}

function PublishHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="bg-brand-2 flex h-18 w-18 items-center justify-center rounded-full text-3xl text-white">
        <PenToolIcon />
      </div>
      <p className="text-brand-2 text-4xl font-bold">
        ارسال <span className="text-brand-3">مقاله</span> جدید
      </p>
      <p className="text-brand-4">
        دانش و یافته‌های پژوهشی خود را با جامعه علمی دانشران به اشتراک بگذارید.
      </p>
      <div className="border-brand-10 bg-brand-9 text-brand-2 flex gap-1 rounded-full border px-3 py-1 text-sm font-semibold">
        <ShieldCheckIcon size={1.5} /> انتشار امن و حرفه‌ای
      </div>
    </div>
  );
}

function ArticleEditorLayout() {
  return (
    <div className="mx-30 mt-10 flex items-start justify-center gap-6">
      <PublishSidebar />
      <PublishForm />
    </div>
  );
}

// ////////////////////////////////////////// Publish Sidebar //////////////////////////////////////////

function PublishSidebar() {
  return (
    <div className="sticky top-20 h-fit flex-[0.25] space-y-5">
      <PublishProgress />
      <WritingTips />
      <SupportSection />
    </div>
  );
}

// ////////////////////////////////////////// Publish Form //////////////////////////////////////////

function PublishForm() {
  return (
    <div className="border-brand-7 flex-[0.75] space-y-6 rounded-xl border bg-white p-7">
      <div className="border-brand-7 border-b pb-8">
        <div className="flex justify-between">
          <p className="flex gap-3 text-[1.32rem] font-semibold">
            <FileTextIcon size={1.15} />
            اطلاعات مقاله
          </p>
          <p className="bg-brand-9 hover:bg-brand-5 text-brand-2 flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold duration-300">
            <InfoIcon size={1.7} />
            راهنمای انتشار
          </p>
        </div>
        <p className="text-brand-4 text-sm">
          لطفاً تمام فیلدهای ضروری را با دقت تکمیل کنید.
        </p>
      </div>
      <TitleSection />
      <ArticleContentSection />
      <AttachmentsSection />
      <TermsAgreementSection />
      <div className="mt-10 space-x-3">
        <Button>
          <SendIcon size={1.1} />
          ارسال مقاله
        </Button>
        <Button type={2}>
          <SaveIcon size={1.2} />
          پيش نويس
        </Button>
      </div>
    </div>
  );
}

function TitleSection() {
  return (
    <div className="border-brand-7 space-y-7 border-b border-dashed pb-7">
      <SectionHeader
        step="۱"
        title="اطلاعات پایه"
        description="عنوان، دسته‌بندی و کلمات کلیدی مقاله"
      />
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">
            عنوان مقاله <span className="text-red-600">*</span>
          </p>
          <p className="text-brand-4 text-[0.8rem] font-medium">۰ / ۱۵۰</p>
        </div>
        <Input placeholder="عنوان جذاب و دقیق برای مقاله خود انتخاب کنید..." />
        <p className="text-brand-4 mt-3 flex items-center gap-1 text-[0.8rem]">
          <InfoIcon size={1.85} />
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
    <div className="space-y-5">
      <SectionHeader
        step="۴"
        title="تأیید نهایی و ارسال"
        description="پذیرش قوانین انتشار و ثبت مقاله"
      />
      <div>
        <label className="text-brand-8 space-x-1 text-[0.9rem] font-medium">
          <input type="checkbox" className="h-4 w-4" />
          قوانین انتشار مقاله را مطالعه کرده و{" "}
          <span className="text-brand-2 hover:text-brand-3 cursor-pointer duration-150 hover:underline">
            می‌پذیرم
          </span>{" "}
          <span className="text-red-600">*</span>
        </label>
      </div>
    </div>
  );
}
