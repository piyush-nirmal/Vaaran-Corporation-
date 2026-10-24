import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { companyConfig } from '../../data/content';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  badgeNumber?: string;
  badgeName?: string;
  title: string;
  highlightWord?: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  metrics?: Array<{
    label: string;
    value: string;
    unit?: string;
  }>;
}

export const PageHeader: FC<PageHeaderProps> = ({
  badgeNumber,
  badgeName,
  title,
  highlightWord,
  description,
  actions,
  metrics,
}) => {
  return (
    <div className="relative bg-[#F8FAFF] border-b border-[#E2E9F4] pt-24 xs:pt-28 sm:pt-32 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
      {/* Subtle Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none" aria-hidden="true" />
      
      {/* Soft gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#F8FAFF]" aria-hidden="true" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end justify-between">
          
          {/* Main Title & Description */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {badgeNumber && badgeName && (
              <SectionLabel number={badgeNumber} name={badgeName} />
            )}

            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.025em] text-[#20242D] font-heading leading-[1.12] text-balance">
              {title}{' '}
              {highlightWord && (
                <span className="text-[#2563EB]">{highlightWord}</span>
              )}
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] text-[#64748B] max-w-2xl font-normal leading-[1.65] font-body">
              {description}
            </p>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {actions ? (
                actions
              ) : (
                <>
                  <Link
                    to="/rfp-portal"
                    className="group inline-flex items-center gap-2.5 px-6 py-3.5 lg:h-[48px] rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white font-bold text-xs uppercase tracking-[0.06em] shadow-md shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-heading border-t border-white/25"
                  >
                    <span>Request a Bid</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <a
                    href={`tel:${companyConfig.phoneRaw}`}
                    className="group inline-flex items-center gap-2.5 px-5.5 py-3.5 lg:h-[48px] rounded-xl bg-gradient-to-r from-[#047857] to-[#065F46] hover:from-[#059669] hover:to-[#047857] text-white font-bold text-xs uppercase tracking-[0.05em] shadow-md shadow-emerald-900/25 hover:shadow-xl hover:shadow-emerald-900/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-heading border-t border-white/20"
                  >
                    <div className="w-6 h-6 rounded-lg bg-white/15 text-white flex items-center justify-center group-hover:bg-white/25 group-hover:scale-105 transition-all duration-200">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>Direct Desk:</span>
                      <span className="font-mono font-bold text-emerald-200 tracking-normal text-xs">{companyConfig.phone}</span>
                    </div>
                    <span className="relative flex h-2 w-2 ml-0.5" title="Desk Active">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                    </span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Key Metrics: Inter tabular numerals */}
          {metrics && metrics.length > 0 && (
            <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 sm:gap-3">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2E9F4] shadow-xs overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:flex-wrap gap-0.5 sm:gap-x-1.5 leading-none">
                    <span className="text-lg sm:text-2xl lg:text-3xl font-bold font-heading tracking-tight text-[#3F73F5] tabular-nums">
                      {m.value}
                    </span>
                    {m.unit && (
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-[#687386] leading-tight">
                        {m.unit}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold font-body uppercase tracking-wider text-[#687386] mt-2 leading-snug break-words">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
