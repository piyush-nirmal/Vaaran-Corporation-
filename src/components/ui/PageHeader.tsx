import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { companyConfig } from '../../data/content';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  badgeNumber: string;
  badgeName: string;
  title: string;
  highlightWord?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
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
  breadcrumbs,
  actions,
  metrics,
}) => {
  return (
    <div className="relative bg-slate-50 border-b border-slate-200/90 pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Subtle Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" aria-hidden="true" />
      
      {/* Soft gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-slate-50" aria-hidden="true" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation: Manrope 12-13px */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-[12px] sm:text-[13px] font-body text-slate-500">
          <Link to="/" className="hover:text-vrnNavy transition-colors font-medium">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-vrnNavy transition-colors font-medium">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-bold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          
          {/* Main Title & Description */}
          <div className="lg:col-span-8 space-y-4">
            <SectionLabel number={badgeNumber} name={badgeName} />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.01em] text-vrnNavy font-heading leading-[1.05]">
              {title}{' '}
              {highlightWord && (
                <span className="text-vrnOrange">{highlightWord}</span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-3xl font-normal leading-[1.6] font-body">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold text-xs uppercase tracking-[0.04em] shadow-sm hover:shadow-md transition-all font-heading"
                  >
                    <span>Request a Bid</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </Link>
                  <a
                    href={`tel:${companyConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-bold text-xs uppercase tracking-[0.04em] transition-colors font-heading"
                  >
                    <Phone className="w-3.5 h-3.5 text-vrnOrange" />
                    <span>Direct Desk: {companyConfig.phone}</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Key Metrics: Barlow Condensed big stats, JetBrains Mono units, Manrope labels */}
          {metrics && metrics.length > 0 && (
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-heading tracking-[-0.01em] leading-[1.05] text-vrnNavy">
                    {m.value}
                    {m.unit && <span className="text-xs font-mono font-medium text-slate-500 ml-1.5">{m.unit}</span>}
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-medium font-body uppercase tracking-[0.04em] text-slate-600 mt-0.5 truncate">
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
