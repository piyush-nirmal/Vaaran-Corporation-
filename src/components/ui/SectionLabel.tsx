interface SectionLabelProps {
  number: string;
  name: string;
  className?: string;
}

export const SectionLabel = ({ number, name, className = '' }: SectionLabelProps) => {
  return (
    <div className={`inline-flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase ${className}`}>
      <span className="font-mono text-orange-700 bg-orange-100/90 border border-orange-300 px-2 py-0.5 rounded text-[11px] font-bold">
        {number}
      </span>
      <span className="text-slate-900 tracking-[0.06em] text-[11px] sm:text-xs font-bold">{name}</span>
      <div className="h-[1.5px] bg-slate-300 w-8 sm:w-12 shrink-0" aria-hidden="true" />
    </div>
  );
};
