interface SectionLabelProps {
  number: string;
  name: string;
  className?: string;
}

export const SectionLabel = ({ number, name, className = '' }: SectionLabelProps) => {
  return (
    <div className={`inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase ${className}`}>
      <span className="font-mono text-[#3F73F5] bg-[#EAF2FF] border border-[#3F73F5]/25 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
        {number}
      </span>
      <span className="text-[#20242D] font-semibold tracking-[0.05em] text-[11px] sm:text-xs">{name}</span>
      <div className="h-[1px] bg-[#E2E9F4] w-8 sm:w-12 shrink-0" aria-hidden="true" />
    </div>
  );
};
