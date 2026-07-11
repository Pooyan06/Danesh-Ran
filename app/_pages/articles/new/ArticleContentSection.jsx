import Input from "@/app/_components/Input";
import SectionHeader from "./SectionHeader";
import { InfoIcon } from "@/app/_assets/Icons";
import ContentEditorSection from "./ContentEditorSection";

export default function ArticleContentSection() {
  return (
    <div className="border-brand-7 space-y-5 border-b border-dashed pb-5 sm:space-y-7 sm:pb-7">
      <SectionHeader
        step="۲"
        title="چکیده و محتوای مقاله"
        description="خلاصه و متن کامل پژوهش شما"
      />
      <SummarySection />
      <ContentEditorSection />
    </div>
  );
}

function SummarySection() {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-medium sm:text-sm">
          چکیده <span className="text-red-600">*</span>
        </p>
        <p className="text-brand-4 text-[0.7rem] font-medium sm:text-[0.8rem]">
          ۰ / ۳۰۰
        </p>
      </div>
      <Input
        type="area"
        placeholder="خلاصه‌ای جامع و دقیق از مقاله خود بنویسید..."
        style={{ height: 100, minHeight: 80 }}
        className="text-xs sm:text-sm"
      />
      <p className="text-brand-4 mt-2 flex items-center gap-1 text-[0.7rem] sm:mt-3 sm:text-[0.8rem]">
        <InfoIcon size={1.5} />
        حداقل ۵ کاراکتر — حداکثر ۱۵۰ کاراکتر
      </p>
    </div>
  );
}
