const Tooltip = ({ title }: { title: string }) => {
  return (
    <div className="opacity-0 group-hover:opacity-100 absolute bg-slate-600 text-white rounded-sm px-4 py-1">
      <p>{title}</p>
    </div>
  );
};

export default Tooltip;
