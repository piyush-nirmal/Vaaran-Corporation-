import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Network, ArrowRight } from 'lucide-react';

interface SitemapSection {
  title: string;
  links: { label: string; path: string; desc: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Navigation Pages',
    links: [
      { label: 'HOME', path: '/', desc: 'Company overview, executive metrics, and active corridor highlights.' },
      { label: 'ABOUT US', path: '/about', desc: 'Corporate history, ISO certifications, HSE protocols, and leadership.' },
      { label: 'PROJECTS', path: '/projects', desc: 'Case studies of executed metro viaducts, expressways, and transit hubs.' },
      { label: 'CAREERS', path: '/careers', desc: 'Current openings for QA/QC inspectors, safety officers, and engineers.' },
      { label: 'PHOTO GALLERY', path: '/gallery', desc: 'High-definition photo archive of field equipment and surface treatments.' },
      { label: 'SITE MAP', path: '/sitemap', desc: 'Complete architectural directory of pages across Varan Corporation.' },
      { label: 'CONTACT US', path: '/contact', desc: 'Branch offices, technical inquiries, telephone desk, and location maps.' },
    ],
  },
  {
    title: 'Operations & Engineering Disciplines',
    links: [
      { label: 'Surface Protection & Painting', path: '/operations', desc: 'Anti-carbonation, zinc silicates, and aliphatic polyurethanes.' },
      { label: 'Structural Steel Gantry Fabrication', path: '/operations', desc: 'Certified submerged arc welding and overhead cantilever gantries.' },
      { label: 'Fleet & Heavy Machinery Roster', path: '/fleet', desc: '42+ mobilized contractor units, Graco airless rigs, and blast pots.' },
      { label: 'Interactive Technical Stepper', path: '/rfp-portal', desc: 'Configure paint specification, DFT range, and project corridor parameters.' },
    ],
  },
  {
    title: 'Bid Desk & Client Services',
    links: [
      { label: 'Project RFP Submission Desk', path: '/rfp-portal', desc: 'Instant corridor bid requests with 24-hour turnaround.' },
      { label: 'General Technical Inquiry', path: '/contact', desc: 'Direct communications with senior engineering teams.' },
      { label: 'Direct Phone Desk (+91 22 4567 8900)', path: '/contact', desc: 'Immediate dispatch coordination for active corridors.' },
    ],
  },
];

export const SitemapPage: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Sitemap Hero */}
      <section className="pt-32 pb-16 bg-[#0F2942] text-white relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#8ACFF8] font-mono text-xs uppercase tracking-wider">
            <Network className="w-3.5 h-3.5" />
            <span>ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-3xl leading-tight">
            Complete Website <span className="text-[#8ACFF8]">Site Map</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-body leading-relaxed">
            Navigate all corporate pages, engineering divisions, active corridors, and enquiry portals from this index.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sitemapData.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading border-b border-slate-200 pb-3 flex items-center gap-3">
                <span className="text-sm font-mono text-[#0F2942] bg-sky-100 px-2 py-0.5 rounded">0{idx + 1}</span>
                <span>{section.title}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    to={link.path}
                    className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#0F2942] hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 group-hover:text-[#0F2942] transition-colors font-heading text-base">
                          {link.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F2942] group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        {link.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                      {link.path}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
