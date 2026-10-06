interface SectionLabelProps {
  number: string;
  name: string;
  className?: string;
}

export const SectionLabel = ({ number, name, className = '' }: SectionLabelProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-body font-medium tracking-[0.04em] text-vrnNavy uppercase bg-vrnNavy/5 border border-vrnNavy/15 px-3 py-1 rounded">
        <span className="font-mono text-xs font-semibold">{number}</span>
        <span className="text-slate-300">/</span>
        <span>{name}</span>
      </div>
      <div className="h-[1px] bg-slate-200 flex-1 max-w-[120px]" aria-hidden="true" />
    </div>
  );
};
