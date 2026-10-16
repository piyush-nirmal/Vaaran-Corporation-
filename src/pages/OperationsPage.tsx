import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { ServiceTabs } from '../components/ServiceTabs';
import { ArrowRight, Download } from 'lucide-react';

interface OperationsPageProps {
  onOpenCapabilityModal: () => void;
}

export const OperationsPage: FC<OperationsPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Engineered Page Header */}
      <PageHeader
        badgeNumber="01"
        badgeName="OPERATIONS & METHODOLOGY"
        title="Comprehensive Infrastructure Execution"
        highlightWord="Capabilities"
        description="Deploying high-volume anti-corrosive coatings, precision highway gantry fabrication, structural civil barriers, and certified workforce logistics across mission-critical transit corridors."
        breadcrumbs={[
          { label: 'Operations & Capabilities' }
        ]}
        metrics={[
          { label: 'Surface Coated', value: '45,000', unit: 'm²' },
          { label: 'Steel Erected', value: '18,500', unit: 'MT' },
          { label: 'Certified Roster', value: '1,200+', unit: 'Personnel' },
          { label: 'Execution Quality', value: 'ISO 12944', unit: 'C5-I' },
        ]}
        actions={
          <>
            <Link
              to="/rfp-portal"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-sm hover:shadow-md transition-all"
            >
              <span>Request Bid on Operations</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <button
              type="button"
              onClick={onOpenCapabilityModal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-vrnNavy" />
              <span>Download Technical PDF</span>
            </button>
          </>
        }
      />

      {/* Main Operations Content: Bento Grid + Coating Sandbox + Process Timeline */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <ServiceTabs />
      </div>

      {/* Next Step Callout */}
      <div className="bg-slate-50 border-t border-slate-200/90 py-16">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-heading">
              Ready to specify your project parameters?
            </h3>
            <p className="text-sm text-slate-600 font-body">
              Apply chosen coating specifications directly to an actionable technical proposal.
            </p>
          </div>
          <Link
            to="/rfp-portal"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shrink-0 shadow-xs transition-colors"
          >
            <span>Proceed to RFP Portal</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
