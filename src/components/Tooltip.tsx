const Tooltip = ({ title }: { title: string }) => {
  return (
    <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition duration-300 absolute bg-slate-600 text-white rounded-sm px-4 py-1 bottom-full left-1/2 -translate-x-1/2 z-50 select-none pointer-events-none">
      <p className="whitespace-nowrap">{title}</p>
      <div className="absolute w-3 h-3 bg-slate-600 transform rotate-45 rounded-xs -bottom-1 z-0 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};

export default Tooltip;
