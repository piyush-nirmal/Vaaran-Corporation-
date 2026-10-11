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
    <div className="relative bg-white text-slate-900 border-b border-slate-200/90 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 min-h-[50vh] lg:min-h-[58vh] flex flex-col justify-center overflow-hidden">
      
      {/* Background CAD Grid & Atmospheric Brand Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        {/* Sky-Blue Brand Atmospheric Radial Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,_rgba(138,207,248,0.35),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,_rgba(32,49,130,0.08),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_95%,_rgba(245,130,32,0.04),_transparent_45%)]" />

        {/* Soft Ambient Orbs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8ACFF8]/25 blur-[140px] rounded-full" />
        <div className="absolute top-1/4 -right-24 w-[520px] h-[520px] bg-sky-200/35 blur-[125px] rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[300px] bg-slate-200/40 blur-[100px] rounded-full" />

        {/* Architectural SVG Precision CAD Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pageHeaderGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(32, 49, 130, 0.08)" strokeWidth="1" />
              <path d="M 0 5 L 0 0 L 5 0" fill="none" stroke="rgba(138, 207, 248, 0.85)" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pageHeaderGrid)" />
          
          {/* Subtle Vector Elevation Trace */}
          <path
            d="M -100,180 C 300,140 600,260 1100,200 C 1400,160 1700,230 2000,180"
            fill="none"
            stroke="rgba(138, 207, 248, 0.4)"
            strokeWidth="1.2"
            strokeDasharray="5 5"
          />
        </svg>

        {/* Technical Margin Tags */}
        <div className="absolute top-28 left-6 text-[10px] font-mono tracking-widest text-slate-400/60 uppercase hidden xl:block">
          CAD // SPEC-MATRIX · PAN-INDIA
        </div>
        <div className="absolute top-28 right-8 text-[10px] font-mono tracking-widest text-slate-400/60 uppercase hidden xl:block">
          PASARA // CERTIFIED · ISO 12944
        </div>

        {/* Gradient Mask for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/40 to-white/95" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Elevated Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xs text-[12px] font-body text-slate-700">
          <Link to="/" className="hover:text-vrnNavy transition-colors font-semibold text-slate-600 hover:text-slate-900">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-vrnNavy transition-colors font-semibold text-slate-600 hover:text-slate-900">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-slate-950 font-bold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Title, Description & Actions */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            <SectionLabel number={badgeNumber} name={badgeName} />

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-0.025em] text-slate-950 font-heading leading-[1.12] text-balance">
                {title}{' '}
                {highlightWord && (
                  <span className="text-[#0F2942] font-bold">{highlightWord}</span>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-medium leading-[1.65] font-body">
                {description}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              {actions ? (
                actions
              ) : (
                <>
                  <Link
                    to="/rfp-portal"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold text-xs uppercase tracking-[0.04em] shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all font-heading"
                  >
                    <span>Request a Bid</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </Link>
                  <a
                    href={`tel:${companyConfig.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-[0.04em] shadow-2xs transition-colors font-heading"
                  >
                    <Phone className="w-4 h-4 text-vrnNavy" />
                    <span>Direct Desk: {companyConfig.phone}</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Quantitative Telemetry Proof Cards */}
          {metrics && metrics.length > 0 && (
            <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white backdrop-blur-md border border-slate-300 shadow-2xs hover:border-vrnNavy/50 hover:shadow-navy-xs transition-all duration-200 relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8ACFF8] via-sky-500 to-[#0F2942] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading tracking-tight leading-none text-[#0F2942] tabular-nums flex items-baseline gap-1.5">
                    {m.value}
                    {m.unit && <span className="text-xs font-mono font-bold text-slate-700">{m.unit}</span>}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold font-body uppercase tracking-wider text-slate-700 mt-2.5 truncate">
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
