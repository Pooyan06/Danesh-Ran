export default function Button({ children, onClick, type }) {
  const types = {
    1: { default: "bg-brand-2 text-white" },
    2: { default: "text-brand-2 border-2 border-brand-2" },
  };

  return (
    <button
      className={`rounded-xl px-5 py-3 ${type && types?.[type].default} cursor-pointer transition-all duration-300 hover:shadow-[inset_0_0px_100px_rgba(0,0,0,0.08)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
