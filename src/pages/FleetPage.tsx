import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { EquipmentGrid } from '../components/EquipmentGrid';
import { ArrowRight, Download, Phone } from 'lucide-react';
import { companyConfig } from '../data/content';
import { SeoHead } from '../components/SeoHead';

interface FleetPageProps {
  onOpenCapabilityModal: () => void;
}

export const FleetPage: FC<FleetPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Industrial Machinery & Equipment Fleet | Varan Corporation"
        description="Explore Varan Corporation's specialized machinery fleet: mobile airless spray plants, pressurized abrasive blasting rigs, AWS D1.1 welding stations, and high-altitude aluminum access systems."
        keywords="industrial coating machinery, airless spray plants, sand blasting rigs, MIG TIG welding stations, aluminum scaffolding, contractor fleet India, Varan Corporation equipment"
      />
      {/* Engineered Page Header */}
      <PageHeader
        badgeNumber="02"
        badgeName="HEAVY ASSET DECK & LOGISTICS"
        title="Industrial Machinery & Field"
        highlightWord="Fleet"
        description="Owned and maintained heavy equipment yard including Graco King airless spray rigs, automated blast-wheel systems, CNC plasma gantries, and certified modular scaffolding ready for immediate corridor mobilization."
        breadcrumbs={[
          { label: 'Fleet & Machinery' }
        ]}
        metrics={[
          { label: 'Mobilized Units', value: '42', unit: 'Assets' },
          { label: 'Calibration Record', value: '100%', unit: 'Verified' },
          { label: 'Downtime SLA', value: '< 4h', unit: 'Rapid Swap' },
          { label: 'Operator Compliance', value: 'PASARA', unit: 'Certified' },
        ]}
        actions={
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
            <Link
              to="/rfp-portal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-sm hover:shadow-md transition-all text-center btn-smooth"
            >
              <span>Reserve Machinery in RFP</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading transition-colors text-center btn-smooth"
            >
              <Phone className="w-3.5 h-3.5 text-vrnOrange" />
              <span>Fleet Dispatch: {companyConfig.phone}</span>
            </a>
            <button
              type="button"
              onClick={onOpenCapabilityModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading transition-colors cursor-pointer text-center btn-smooth"
            >
              <Download className="w-4 h-4 text-vrnNavy" />
              <span>Download Fleet Specs (PDF)</span>
            </button>
          </div>
        }
      />

      {/* Main Machinery Roster Grid & Filtering */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <EquipmentGrid />
      </div>

      {/* Fleet Allocation Callout Banner */}
      <div className="bg-slate-50 border-t border-slate-200/90 py-16">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-heading">
              Require specific equipment on site?
            </h3>
            <p className="text-sm text-slate-600 font-body">
              Select airless rigs, abrasive blasting pots, or certified access towers directly in your bid configuration.
            </p>
          </div>
          <Link
            to="/rfp-portal"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shrink-0 shadow-xs transition-colors"
          >
            <span>Configure Fleet in RFP</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
