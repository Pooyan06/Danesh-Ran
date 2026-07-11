import SectionHeader from "./SectionHeader";
import { InfoIcon } from "@/app/_assets/Icons";
import ContentEditorSection from "./ContentEditorSection";
import Input from "@/app/_components/Input";

export default function ArticleContentSection() {
  return (
    <section className="border-brand-7 space-y-5 border-b border-dashed pb-5 sm:space-y-7 sm:pb-7">
      <SectionHeader
        step="۲"
        title="چکیده و محتوای مقاله"
        description="خلاصه و متن کامل پژوهش شما"
      />
      <SummarySection />
      <ContentEditorSection />
    </section>
  );
}

function SummarySection() {
  return (
    <div>
      <Input
        id="summary"
        type="area"
        label="چکیده"
        placeholder="خلاصه‌ای جامع و دقیق از مقاله خود بنویسید..."
        required
        aria-required="true"
      />
      <p className="text-brand-4 mt-2 flex items-center gap-1 text-[0.7rem] sm:mt-3 sm:text-[0.8rem]">
        <InfoIcon size={1.5} />
        حداقل ۵ کاراکتر — حداکثر ۱۵۰ کاراکتر
      </p>
    </div>
  );
}
