import Input from "@/app/_components/Input";
import SectionHeader from "./SectionHeader";
import { InfoIcon } from "@/app/_assets/Icons";
import ContentEditorSection from "./ContentEditorSection";

export default function ArticleContentSection() {
  return (
    <div className="border-brand-7 space-y-7 border-b border-dashed pb-7">
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
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">
          چکیده <span className="text-red-600">*</span>
        </p>
        <p className="text-brand-4 text-[0.8rem] font-medium">۰ / ۳۰۰</p>
      </div>
      <Input
        type="area"
        placeholder="خلاصه‌ای جامع و دقیق از مقاله خود بنویسید..."
        style={{ height: 120, minHeight: 100 }}
      />
      <p className="text-brand-4 flex items-center gap-1 text-[0.8rem]">
        <InfoIcon size={1.85} />
        حداقل ۵ کاراکتر — حداکثر ۱۵۰ کاراکتر
      </p>
    </div>
  );
}
