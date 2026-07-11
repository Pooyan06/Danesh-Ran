export default function AuthorsCards({ name, view }) {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <div className="bg-brand-2 flex h-8 w-8 items-center justify-center rounded-full text-sm text-white sm:h-10 sm:w-10 sm:text-base">
        {name[0]}
      </div>
      <div>
        <div className="text-sm font-medium sm:text-base">{name}</div>
        <div className="text-brand-4 text-xs sm:text-sm">{view} ارجاع</div>
      </div>
    </div>
  );
}
