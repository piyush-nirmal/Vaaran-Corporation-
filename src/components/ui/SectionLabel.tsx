interface SectionLabelProps {
  number: string;
  name: string;
  className?: string;
}

export const SectionLabel = ({ number, name, className = '' }: SectionLabelProps) => {
  return (
    <div className={`inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase ${className}`}>
      <span className="font-mono text-vrnOrange bg-orange-50/90 border border-orange-200/80 px-2 py-0.5 rounded text-[11px] font-semibold">
        {number}
      </span>
      <span className="text-slate-700 tracking-[0.05em] text-[11px] sm:text-xs">{name}</span>
      <div className="h-[1px] bg-slate-200 w-8 sm:w-12 shrink-0" aria-hidden="true" />
    </div>
  );
};
