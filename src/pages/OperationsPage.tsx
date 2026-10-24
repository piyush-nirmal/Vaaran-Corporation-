import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { ServiceTabs } from '../components/ServiceTabs';
import { ArrowRight, Download, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';

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
      
      {/* ------------------------------------------------------------- */}
      {/* 1. SERVICES & OPERATIONS OPENING HERO — METHODOLOGY & CAPACITY */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* 1. SERVICES & OPERATIONS OPENING HERO — METHODOLOGY & CAPACITY */}
      {/* ------------------------------------------------------------- */}
      <section className="relative bg-[#F8FAFF] border-b border-[#E2E9F4] pt-28 xs:pt-32 sm:pt-36 lg:pt-36 pb-12 sm:pb-16 lg:pb-16 overflow-hidden">
        {/* Engineering Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" aria-hidden="true" />
        
        {/* Soft Radial Ambient Accents */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#65B5FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#3F73F5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-[#F8FAFF]" aria-hidden="true" />

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description, Disciplines & Actions */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              {/* Spacious Headline with Natural Line Breaks */}
              <div className="space-y-2 sm:space-y-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1FF] border border-[#DCE4EF] text-xs font-semibold text-[#2864F0] font-heading w-fit">
                  Technical Service Sectors & Delivery
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#15315B] font-heading leading-[1.2]">
                  Comprehensive Infrastructure <br className="hidden sm:inline" />
                  <span className="text-[#2864F0]">Execution Capabilities</span>
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[#2864F0] tracking-normal leading-relaxed">
                  Multi-Disciplinary Civil Infrastructure, Protective Coatings & Heavy Fabrication
                </p>
              </div>

              {/* Supporting Description (Concise 2-3 lines) */}
              <p className="text-sm sm:text-base text-[#66748A] max-w-xl font-normal leading-relaxed font-body">
                Specialized civil infrastructure, commercial & industrial protective coating, heavy structural fabrication, and urban roadway beautification services across India.
              </p>

              {/* 4 Core Disciplines Preview Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {[
                  'Commercial & Industrial Painting',
                  'Civil Works & Toll Plazas',
                  'Structural Steel & Netting',
                  'Roadway Beautification'
                ].map((discipline, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 border border-[#DCE4EF] text-[11px] sm:text-xs font-semibold text-[#15315B] font-body shadow-2xs hover:border-[#2864F0]/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2864F0]" />
                    {discipline}
                  </span>
                ))}
              </div>

              {/* Standardized Primary & Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
                <Link
                  to="/rfp-portal"
                  className="inline-flex items-center justify-center gap-2 px-6 h-[46px] min-h-[46px] rounded-xl bg-[#2864F0] hover:bg-[#15315B] text-white font-semibold text-sm font-heading shadow-xs transition-colors w-full sm:w-auto shrink-0"
                >
                  <span>Request Bid on Operations</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenCapabilityModal}
                  className="inline-flex items-center justify-center gap-2 px-5 h-[46px] min-h-[46px] rounded-xl bg-[#15315B] hover:bg-[#202A38] text-white font-semibold text-sm font-heading shadow-xs transition-colors cursor-pointer w-full sm:w-auto shrink-0"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Technical PDF</span>
                </button>
              </div>

              {/* Technical Specifications Bar */}
              <div className="pt-4 border-t border-[#DCE4EF] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs font-medium text-[#66748A]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>ISO 12944 C5-I Specification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>Sa 2.5 Near-White Blast Profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#2864F0] shrink-0" />
                  <span>AWS D1.1 Structural Welding</span>
                </div>
              </div>
            </div>

            {/* Right Column: Industrial Delivery Showcase & Core Sectors */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[#DCE4EF] p-5 sm:p-6 shadow-xs space-y-4 sm:space-y-5">
                
                {/* Sector Capacity Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAF1FF]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#66748A] uppercase">
                      Engineering Deployment
                    </span>
                    <div className="text-xl font-bold font-heading text-[#15315B]">
                      Field Execution Standards
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EAF1FF] text-[#2864F0] border border-[#DCE4EF]">
                    ISO 12944 / AWS
                  </span>
                </div>

                {/* 2-Column Capability Focus */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <span className="text-[11px] font-mono text-[#66748A] uppercase tracking-wider block">
                      Rigging Elevation
                    </span>
                    <div className="text-2xl font-bold font-heading text-[#2864F0] mt-1">
                      100 Ft
                    </div>
                    <div className="text-xs text-[#202A38] font-medium mt-0.5">
                      Marine & Coastal Bridges
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF]">
                    <span className="text-[11px] font-mono text-[#66748A] uppercase tracking-wider block">
                      Surface Profile
                    </span>
                    <div className="text-2xl font-bold font-heading text-[#2864F0] mt-1">
                      Sa 2.5
                    </div>
                    <div className="text-xs text-[#202A38] font-medium mt-0.5">
                      Near-White Abrasive Blast
                    </div>
                  </div>
                </div>

                {/* Authentic Industrial Fabrication & Protective Coating Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/8] border border-[#DCE4EF]">
                  <img
                    src={steelFabImg}
                    alt="Varan Corporation structural steel fabrication and protective coating yard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15315B]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium flex items-center justify-between">
                    <span>Structural gantry fabrication & high-build epoxy application</span>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs">Verified Yard</span>
                  </div>
                </div>

                {/* Rapid Deployment Banner */}
                <div className="p-3 rounded-xl bg-[#F5F8FC] border border-[#DCE4EF] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2864F0] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#15315B] font-heading">
                      72-Hour Rapid Corridor Mobilization
                    </div>
                    <div className="text-[11px] text-[#66748A]">
                      Fast-track equipment allocation and site mobilization across transit corridors.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Operations Content: Bento Grid + Coating Sandbox + Process Timeline */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <AnimatedSection direction="up" delay={0.1}>
          <ServiceTabs />
        </AnimatedSection>
      </div>

      {/* Next Step Callout */}
      <div className="bg-[#F8FAFF] border-t border-[#E2E9F4] py-10 sm:py-16">
        <AnimatedSection direction="up" delay={0.15}>
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#20242D] font-heading">
                Ready to specify your project parameters?
              </h3>
              <p className="text-xs sm:text-sm text-[#687386] font-body">
                Apply chosen coating specifications directly to an actionable technical proposal.
              </p>
            </div>
            <Link
              to="/rfp-portal"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 lg:h-[48px] rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-[0.04em] font-heading shrink-0 shadow-sm shadow-blue-600/25 transition-all btn-smooth w-full sm:w-auto"
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
