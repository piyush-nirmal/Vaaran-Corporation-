import type { FC } from 'react';
import { PageHeader } from '../components/ui/PageHeader';
import { QuoteRequest } from '../components/QuoteRequest';
import { ShieldCheck, Phone } from 'lucide-react';
import { companyConfig, certificationBadges } from '../data/content';

export const RfpPage: FC = () => {
  return (
    <div className="w-full flex flex-col bg-slate-50">
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
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider font-display shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-vrnOrange" />
              <span>Need Urgent Quote? {companyConfig.phone}</span>
            </a>
          </div>
        }
      />

      {/* Statutory Badges Bar */}
      <div className="w-full bg-white border-b border-slate-200/90 py-4">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Audited Statutory Compliance Standards:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {certificationBadges.map((cert) => (
              <span
                key={cert.id}
                className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md font-bold text-vrnNavy text-[11px]"
                title={cert.scope}
              >
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main RFP Configurator Stepper Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <QuoteRequest />
      </div>
    </div>
  );
};
