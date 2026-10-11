import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { ProjectsPortfolio } from '../components/ProjectsPortfolio';
import { ArrowRight, Download } from 'lucide-react';

interface ProjectsPageProps {
  onOpenCapabilityModal: () => void;
}

export const ProjectsPage: FC<ProjectsPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Engineered Page Header */}
      <PageHeader
        badgeNumber="03"
        badgeName="PROVEN DELIVERY RECORD"
        title="Documented Infrastructure Projects"
        highlightWord="Portfolio"
        description="Comprehensive case history of high-volume protective coatings, overhead transit viaducts, bridge girders, and structural gantry installations delivered for state authorities and major EPC contractors."
        breadcrumbs={[
          { label: 'Projects Desk' }
        ]}
        metrics={[
          { label: 'Executed Projects', value: '120+', unit: 'Sites' },
          { label: 'Transit Corridors', value: '14', unit: 'Spans' },
          { label: 'Safety Record', value: '100%', unit: 'Zero LTI' },
          { label: 'Statutory Audits', value: 'Zero', unit: 'Citations' },
        ]}
        actions={
          <>
            <Link
              to="/rfp-portal"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-md shadow-orange-500/15 hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              <span>Submit Similar Project RFP</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
            <button
              type="button"
              onClick={onOpenCapabilityModal}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-2xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-vrnNavy" />
              <span>Download Project Dossier</span>
            </button>
          </>
        }
      />

      {/* Main Documented Projects Gallery */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <ProjectsPortfolio />
      </div>

      {/* Tender Collaboration Banner */}
      <div className="bg-slate-50 border-t border-slate-200/90 py-16">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 font-heading">
              Executing a similar corridor project?
            </h3>
            <p className="text-sm text-slate-600 font-body">
              Contact our engineering desk for past case studies, methodology statements, and ISO 12944 specifications.
            </p>
          </div>
          <Link
            to="/rfp-portal"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-semibold text-xs uppercase tracking-[0.04em] font-heading shadow-xs transition-all shrink-0"
          >
            <span>Request Project Bid</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
