import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2, Building2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { ProjectsPortfolio } from '../components/ProjectsPortfolio';
import metroProjectImg from '../assets/images/metro_transit_coating_1791032395039.jpg';

interface ProjectsPageProps {
  onOpenCapabilityModal: () => void;
}

export const ProjectsPage: FC<ProjectsPageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Documented Infrastructure Projects | Varan Corporation"
        description="Review landmark project deliveries across India: Bandra–Worli Sea Link marine coating, Goa bridge painting, Delhi toll civil works, 29 flyovers, Vashi flyover, and Metro Rail corridor."
        keywords="Bandra Worli Sea Link marine coating, Goa bridge painting, Delhi toll civil infrastructure, 29 flyovers coating, Vashi flyover, Bandra Versova, TATA metro rail corridor, MSRDC, L&T, MEP Infrastructure"
      />
      
      {/* ------------------------------------------------------------- */}
      {/* 1. PROJECTS OPENING HERO — PORTFOLIO SHOWCASE & DELIVERY */}
      {/* ------------------------------------------------------------- */}
      {/* 1. PROJECTS OPENING HERO — PORTFOLIO SHOWCASE & DELIVERY */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFF] border-b border-[#E2E9F4] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-16 overflow-hidden">
        {/* Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" aria-hidden="true" />
        
        {/* Soft Radial Ambient Accents */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#65B5FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#3F73F5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#F8FAFF]" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Narrative, Chips, Actions & Key Metrics */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* High-Impact Portfolio Headline & Aligned Category Tag */}
              <div className="space-y-2 sm:space-y-2.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2864F0]" />
                  <span className="text-xs font-semibold text-[#2864F0] font-heading">
                    EPC & Infrastructure Portfolio
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#15315B] font-heading leading-[1.2]">
                  Documented Infrastructure <br className="hidden sm:inline" />
                  <span className="text-[#2864F0]">Projects Portfolio</span>
                </h1>

                <p className="text-sm sm:text-base font-semibold text-[#2864F0] tracking-normal leading-relaxed">
                  State Authorities, High-Speed Transit Corridors & Major EPC Contracts
                </p>
              </div>

              {/* Supporting Portfolio Description (Concise 2-3 lines) */}
              <p className="text-sm sm:text-base text-[#66748A] max-w-xl font-normal leading-relaxed font-body">
                Comprehensive case history of high-volume protective coatings, overhead transit viaducts, bridge girders, and structural gantry installations delivered for state authorities and major EPC contractors.
              </p>

              {/* Landmark Delivery Reference Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {[
                  'Bandra–Worli Sea Link',
                  'Goa Bridge Marine Painting',
                  'Delhi Toll Infrastructure',
                  '29 Flyovers Corridor'
                ].map((landmark, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DCE4EF] text-[11px] sm:text-xs font-semibold text-[#15315B] font-body shadow-2xs hover:border-[#2864F0]/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2864F0]" />
                    {landmark}
                  </span>
                ))}
              </div>

              {/* Standardized Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <Link
                  to="/rfp-portal"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[46px] min-h-[46px] rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-sm font-heading shadow-xs transition-colors w-full sm:w-auto shrink-0"
                >
                  <span>Submit Project RFP</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenCapabilityModal}
                  className="inline-flex items-center justify-center gap-2 px-5 h-[46px] min-h-[46px] rounded-xl bg-[#15315B] hover:bg-[#202A38] text-white font-semibold text-sm font-heading shadow-xs transition-colors cursor-pointer w-full sm:w-auto shrink-0"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Project Dossier</span>
                </button>
              </div>

              {/* Integrated 4-Metric Statistics Grid */}
              <div className="pt-4 border-t border-[#DCE4EF] grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="p-3 rounded-xl bg-white/95 border border-[#DCE4EF] shadow-2xs hover:border-[#2864F0]/30 transition-colors">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold font-heading text-[#2864F0]">₹30+</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#66748A]">Cr</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#15315B] mt-0.5 leading-snug">
                    Executed Projects
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/95 border border-[#DCE4EF] shadow-2xs hover:border-[#2864F0]/30 transition-colors">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold font-heading text-[#2864F0]">25+</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#66748A]">Yrs</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#15315B] mt-0.5 leading-snug">
                    Experience
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/95 border border-[#DCE4EF] shadow-2xs hover:border-[#2864F0]/30 transition-colors">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold font-heading text-[#2864F0]">100</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#66748A]">Ft</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#15315B] mt-0.5 leading-snug">
                    Marine Elevation
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/95 border border-[#DCE4EF] shadow-2xs hover:border-[#2864F0]/30 transition-colors">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold font-heading text-[#2864F0]">150+</span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#66748A]">Staff</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#15315B] mt-0.5 leading-snug">
                    Permanent Staff
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Architectural Showcase Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#DCE4EF] overflow-hidden shadow-xs group space-y-0">
                {/* Real Infrastructure Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={metroProjectImg}
                    alt="Varan Corporation transit infrastructure and marine protective coating delivery"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/90 via-[#15315B]/30 to-transparent" />
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DCE4EF] shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#2864F0]" />
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#15315B] uppercase">
                      Featured Delivery Showcase
                    </span>
                  </div>

                  {/* Floating Bottom Project Details */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 z-10 space-y-1.5 text-white">
                    <div className="text-base sm:text-lg font-bold font-heading text-white">
                      Bandra–Worli Sea Link & Rail Transit Viaducts
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-white/90">
                      <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs">
                        Sa 2.5 Near-White Blast
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs">
                        ISO 12944 C5-I Marine Spec
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#2864F0] text-white">
                        Verified Handover
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Bar: Assurance & Client Portfolio */}
                <div className="p-3.5 sm:p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#66748A]">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#2864F0] shrink-0" />
                    <span className="font-medium text-[#202A38]">Delivery: MSRDC, L&T, TATA & EPCs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2864F0] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2864F0]" />
                    <span>Zero-Incident Track Record</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Documented Projects Gallery */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <ProjectsPortfolio />
      </div>

      {/* Tender Collaboration Banner */}
      <div className="bg-[#F8FAFF] border-t border-[#E2E9F4] py-10 sm:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-2xl font-semibold text-[#20242D] font-heading">
              Executing a transit rail or highway package?
            </h3>
            <p className="text-xs sm:text-sm text-[#687386] font-body">
              Engage our technical estimating desk for sub-contracting quotes, methodology audits, and plant allocation.
            </p>
          </div>
          <Link
            to="/rfp-portal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 lg:h-[48px] rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-[0.04em] font-heading shrink-0 shadow-sm shadow-blue-600/25 transition-all text-center"
          >
            <span>Request Tender Bid</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
