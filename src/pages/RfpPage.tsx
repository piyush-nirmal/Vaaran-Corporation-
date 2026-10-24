import type { FC } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { QuoteRequest } from '../components/QuoteRequest';
import { ShieldCheck, Phone } from 'lucide-react';
import { companyConfig, certificationBadges } from '../data/content';
import { SeoHead } from '../components/SeoHead';

export const RfpPage: FC = () => {
  return (
    <div className="w-full flex flex-col bg-[#F8FAFF]">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Get a Quote & Request Tender Bid | Varan Corporation"
        description="Request a formal engineering proposal or quote for commercial painting, civil works, structural fabrication, and urban beautification across India. 24-hour turnaround."
        keywords="Get a quote Varan Corporation, request tender bid, civil contracting quote, commercial painting estimate, structural fabrication tender, MSRDC, L&T, TATA tender"
      />
      {/* Engineered Page Header */}
      <PageHeader
        badgeNumber="04"
        badgeName="TECHNICAL TENDER CONFIGURATOR"
        title="Request a Structured Infrastructure"
        highlightWord="Bid"
        description="Configure your project parameters—sector, scale, surface blasting profile, coating dry film thickness (DFT), and required machinery fleet. Receive a verified reference token and formal engineering quote within 24 hours."
        breadcrumbs={[
          { label: 'RFP Portal' }
        ]}
        metrics={[
          { label: 'Guaranteed Turnaround', value: '< 24h', unit: 'Business Day' },
          { label: 'Formal Estimate', value: '100%', unit: 'Zero Obligation' },
          { label: 'Tracking Token', value: 'VRN-RFP', unit: 'Generated' },
          { label: 'Labor Code', value: '100%', unit: 'Compliant' },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-sm shadow-[#3F73F5]/25 transition-all min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Need Urgent Quote? {companyConfig.phone}</span>
            </a>
          </div>
        }
      />

      {/* Statutory Badges Bar */}
      <div className="w-full bg-white border-b border-[#E2E9F4] py-3.5 sm:py-4">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#687386] font-bold uppercase tracking-wider text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-[#3F73F5] shrink-0" />
            <span>Audited Statutory Compliance Standards:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {certificationBadges.map((cert) => (
              <span
                key={cert.id}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#EAF2FF] border border-[#3F73F5]/20 rounded-md font-bold text-[#3F73F5] text-[10px] sm:text-[11px]"
                title={cert.scope}
              >
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main RFP Configurator Stepper Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <QuoteRequest />
      </div>
    </div>
  );
};
