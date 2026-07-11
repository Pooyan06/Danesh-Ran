export default function Button({
  children,
  onClick,
  type = 1,
  size = "default",
}) {
  const types = {
    1: "bg-brand-2 text-white border-2 border-brand-2 hover:shadow-[inset_0_0px_100px_rgba(0,0,0,0.1)]",
    2: "text-brand-2 border-2 border-brand-2 bg-transparent hover:bg-brand-9",
    3: "text-brand-4 border-1 border-brand-7 bg-transparent hover:border-brand-2 hover:text-brand-2 hover:shadow-[inset_0_0px_100px_rgba(0,0,0,0.08)]",
    4: "text-brand-2 bg-white hover:bg-brand-3 hover:text-white hover:shadow-[inset_0_0px_100px_rgba(0,0,0,0.08)]",
  };

  const sizes = {
    default:
      "px-3 py-2 text-sm rounded-lg sm:px-5 sm:py-3 sm:text-base sm:rounded-xl",
    small: "px-2 py-1 text-xs rounded-md sm:px-3 sm:py-1.5 sm:text-sm",
    large:
      "px-4 py-3 text-base rounded-lg sm:px-7 sm:py-4 sm:text-lg sm:rounded-xl",
    full: "w-full rounded-lg py-2 text-xs sm:rounded-xl sm:py-2 sm:text-sm",
    full2: "w-full rounded-md py-2 text-xs sm:rounded-md sm:py-2 sm:text-sm",
  };

  return (
    <button
      className={`${types[type] || types[1]} ${sizes[size] || sizes.default} cursor-pointer font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-1">{children}</div>
    </button>
  );
}
