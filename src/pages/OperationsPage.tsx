import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { ServiceTabs } from '../components/ServiceTabs';
import { ArrowRight, Download } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';

interface OperationsPageProps {
  onOpenCapabilityModal: () => void;
}

export const OperationsPage: FC<OperationsPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Our Services & Operations | Civil, Painting & Fabrication | Varan Corporation"
        description="Explore Varan Corporation's 4 core disciplines: Commercial & Specialized Painting, Civil Works & Infrastructure, Structural Fabrication & Safety Netting, and Urban Roadway Beautification."
        keywords="commercial painting, industrial painting, marine protective coating, anti-carbonation, toll plaza civil works, RCC, road maintenance, structural steel fabrication, marine safety nets, urban beautification"
      />
      {/* Engineered Page Header */}
      <PageHeader
        badgeNumber="01"
        badgeName="OPERATIONS & METHODOLOGY"
        title="Comprehensive Infrastructure Execution"
        highlightWord="Capabilities"
        description="Specialized civil infrastructure, commercial & industrial painting, heavy structural fabrication, and urban roadway beautification services across India."
        breadcrumbs={[
          { label: 'Operations & Capabilities' }
        ]}
        metrics={[
          { label: 'Industry Experience', value: '25+', unit: 'Years' },
          { label: 'Executed Projects', value: '₹30+', unit: 'Crore' },
          { label: 'Marine Elevation', value: '100', unit: 'Ft Sea' },
          { label: 'Permanent Workforce', value: '150+', unit: 'Personnel' },
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
        <AnimatedSection direction="up" delay={0.1}>
          <ServiceTabs />
        </AnimatedSection>
      </div>

      {/* Next Step Callout */}
      <div className="bg-slate-50 border-t border-slate-200/90 py-16">
        <AnimatedSection direction="up" delay={0.15}>
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shrink-0 shadow-xs transition-colors btn-smooth"
            >
              <span>Proceed to RFP Portal</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
