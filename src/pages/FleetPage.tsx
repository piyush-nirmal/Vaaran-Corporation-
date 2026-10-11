import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { EquipmentGrid } from '../components/EquipmentGrid';
import { ArrowRight, Download, Phone } from 'lucide-react';
import { companyConfig } from '../data/content';

interface FleetPageProps {
  onOpenCapabilityModal: () => void;
}

export const FleetPage: FC<FleetPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
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
          <>
            <Link
              to="/rfp-portal"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-md shadow-orange-500/15 hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              <span>Reserve Machinery in RFP</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-vrnNavy" />
              <span>Fleet Dispatch: {companyConfig.phone}</span>
            </a>
            <button
              type="button"
              onClick={onOpenCapabilityModal}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-vrnNavy" />
              <span>Download Fleet Specs (PDF)</span>
            </button>
          </>
        }
      />

      {/* Main Machinery Roster Grid & Filtering */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <EquipmentGrid />
      </div>

      {/* Urgent Equipment Dispatch Banner */}
      <div className="bg-slate-50 border-t border-slate-200/90 py-16">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-heading">
              Require emergency machinery dispatch to your corridor?
            </h3>
            <p className="text-sm text-slate-600 font-body">
              Our heavy machinery logistics desk maintains a 4-hour rapid swap SLA for active project sites.
            </p>
          </div>
          <a
            href={`tel:${companyConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-xs transition-all shrink-0"
          >
            <Phone className="w-4 h-4 text-vrnOrange" />
            <span>Call Logistics Desk: {companyConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
