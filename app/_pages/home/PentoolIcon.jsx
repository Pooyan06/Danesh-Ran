import { PenToolIcon } from "@/app/_assets/Icons";

export default function PentoolIcon() {
  return (
    <div className="flex w-full justify-center">
      <div className="bg-brand-5 hover:border-brand-3 text-brand-3 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-[#E6DFD3] transition-all duration-300 hover:scale-110 hover:border-2 sm:h-23 sm:w-23">
        <PenToolIcon size={2} />
      </div>
    </div>
  );
}
