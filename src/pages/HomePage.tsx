import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { DarkCapacitySection } from '../components/DarkCapacitySection';
import { LeadershipQuoteCard } from '../components/LeadershipQuoteCard';
import { 
  ArrowRight, 
  FileText, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { divisionHighlights, heroMilestones, equipmentData } from '../data/content';
import { SectionLabel } from '../components/ui/SectionLabel';

interface HomePageProps {
  onOpenCapabilityModal: () => void;
}

export const HomePage: FC<HomePageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Flagship Hero Section */}
      <Hero onOpenCapabilityModal={onOpenCapabilityModal} />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: OPERATIONS & CAPABILITIES TEASER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <SectionLabel number="01" name="DIVISION OVERVIEW" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vrnNavy tracking-tight font-display">
                Four Specialized Engineering <span className="text-vrnOrange">Divisions</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Engineered surface protection, heavy structural gantry erection, precision barrier fabrication, and licensed site technical teams.
              </p>
            </div>

            <Link
              to="/operations"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider font-display shadow-xs transition-all hover:gap-3 shrink-0"
            >
              <span>Explore All Capabilities & Sandbox</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* 4 Division Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisionHighlights.map((div) => (
              <div
                key={div.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  div.isFlagship
                    ? 'bg-vrnNavy text-white border-vrnNavy shadow-navy-md'
                    : 'bg-slate-50 hover:bg-white border-slate-200/90 hover:border-vrnNavy/40 hover:shadow-navy-sm text-slate-800'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${
                      div.isFlagship ? 'bg-white/15 text-cyan-300' : 'bg-slate-200/70 text-slate-600'
                    }`}>
                      {div.isFlagship ? 'Flagship Division' : 'Core Discipline'}
                    </span>
                    <span className={`font-mono text-xs font-bold ${div.isFlagship ? 'text-amber-400' : 'text-vrnOrange'}`}>
                      {div.highlightMetric}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-display leading-snug ${div.isFlagship ? 'text-white' : 'text-vrnNavy'}`}>
                    {div.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-sans ${div.isFlagship ? 'text-slate-300' : 'text-slate-600'}`}>
                    {div.summary}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-current/10">
                  <Link
                    to="/operations"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-display group-hover:gap-2 transition-all ${
                      div.isFlagship ? 'text-white' : 'text-vrnNavy hover:text-vrnOrange'
                    }`}
                  >
                    <span>Division Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: FLEET & ASSETS TEASER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <SectionLabel number="02" name="MACHINERY DECK" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vrnNavy tracking-tight font-display">
                Heavy Machinery & Dedicated <span className="text-vrnOrange">Yard Fleet</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Over 42 heavy contractor units mobilized across rail and expressway corridors with real-time calibration compliance.
              </p>
            </div>

            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider font-display shadow-xs transition-all hover:gap-3 shrink-0"
            >
              <span>Inspect Full Machinery Roster</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Quick 3 Fleet Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipmentData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-navy-sm transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-emerald-700 border border-slate-200 shadow-2xs">
                    {item.availability}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono font-bold uppercase text-slate-500">
                      {item.category.toUpperCase()} · {item.capacity}
                    </div>
                    <h3 className="text-lg font-bold text-vrnNavy font-display group-hover:text-vrnOrange transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {item.application}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{item.certifications}</span>
                    <Link to="/fleet" className="font-bold text-vrnNavy hover:text-vrnOrange flex items-center gap-1 font-sans">
                      Specs <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: PROJECTS DESK TEASER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <SectionLabel number="03" name="PROVEN TRACK RECORD" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vrnNavy tracking-tight font-display">
                Executed Infrastructure <span className="text-vrnOrange">Milestones</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                Documented site case studies across elevated viaducts, expressway corridors, and transit hubs.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider font-display shadow-xs transition-all hover:gap-3 shrink-0"
            >
              <span>View All 120+ Documented Projects</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Quick Projects Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroMilestones.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-navy-sm transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono font-bold uppercase text-cyan-300 block">
                      {m.corridor}
                    </span>
                    <h3 className="text-base font-bold font-display text-white">
                      {m.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">{m.metricLabel}:</span>
                    <span className="font-bold text-vrnNavy">{m.metricValue}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 line-clamp-1">
                    {m.coatingSpec}
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <Link to="/projects" className="text-xs font-bold text-vrnNavy hover:text-vrnOrange flex items-center justify-between group/link font-display">
                      <span>Explore Project Specs</span>
                      <ChevronRight className="w-4 h-4 group-link-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Governance Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <LeadershipQuoteCard />
        </div>
      </section>

      {/* Dark High-Contrast Section */}
      <DarkCapacitySection />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: RFP CALLOUT BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white border-b border-slate-200/90 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-navy-lg border border-slate-800">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-vrnOrange/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-vrnCyan/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive Technical Stepper</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
                  Configure Your Project Parameters in Our <span className="text-vrnOrange">RFP Portal</span>
                </h2>
                <p className="text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Select your infrastructure corridor, define required DFT and surface blasting profile, configure fleet assets, and receive a formal technical bid within 24 hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ISO 12944 Compliant</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Audit Token</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero Obligation</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/rfp-portal"
                  className="w-full py-4 px-6 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 font-display transition-all"
                >
                  <span>Launch RFP Portal</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenCapabilityModal}
                  className="w-full py-3.5 px-6 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-display transition-all"
                >
                  <span>Download Capability PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
