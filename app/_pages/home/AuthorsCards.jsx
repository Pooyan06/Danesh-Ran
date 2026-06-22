export default function AuthorsCards({ name, view }) {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <div className="bg-brand-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
        {name[0]}
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-brand-4 text-sm">{view} ارجاع</div>
      </div>
    </div>
  );
}
