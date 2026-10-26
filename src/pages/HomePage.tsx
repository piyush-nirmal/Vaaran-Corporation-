import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { DarkCapacitySection } from '../components/DarkCapacitySection';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { divisionHighlights, heroMilestones, equipmentData } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';

interface HomePageProps {
  onOpenCapabilityModal: () => void;
}

export const HomePage: FC<HomePageProps> = ({ onOpenCapabilityModal }) => {
  return (
    <div className="w-full flex flex-col bg-[#F8FAFD]">
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="Varan Corporation | Building Infrastructure, Enhancing Horizons"
        description="Trusted Civil Construction, Commercial Painting, and Specialized Structural Fabrication Services Across India. 'Work is Worship' (कर्म ही पूजा है) - Founded 1997."
        keywords="Varan Corporation, civil construction, commercial painting, specialized structural fabrication, marine protective coating, Bandra Worli Sea Link, Delhi toll infrastructure, 29 flyovers, Goa bridge painting, safety netting, India"
      />

      {/* Full-Bleed Drone Video Hero */}
      <Hero onOpenCapabilityModal={onOpenCapabilityModal} />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: CORE CAPABILITIES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFD] border-b border-[#E2EAF8] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] tracking-tight font-heading">
                  Engineering Disciplines
                </h2>
              </div>

              <Link
                to="/operations"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3F73F5] hover:text-[#2454C6] transition-colors shrink-0"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>

          {/* 4 Clean Division Cards with Smooth Stagger Animation in Blue & White */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {divisionHighlights.map((div, idx) => (
              <StaggerItem key={div.id}>
                <Link
                  to="/operations"
                  className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group h-full hover-card-smooth ${
                    div.isFlagship
                      ? 'bg-[#15315B] text-white border-[#15315B] shadow-md hover:shadow-xl'
                      : 'bg-white hover:bg-[#F8FAFD] border-[#E2EAF8] hover:border-[#2864F0]/40 hover:shadow-md text-[#15315B]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2.5 border-b border-current/15">
                      <span className={`text-[11px] font-mono font-bold tracking-wider ${div.isFlagship ? 'text-sky-300' : 'text-[#2864F0]'}`}>
                        DIVISION 0{idx + 1}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${div.isFlagship ? 'bg-white/10 text-white border border-white/20' : 'bg-[#EAF1FF] text-[#2864F0] border border-[#DCE4EF]'}`}>
                        {div.highlightMetric}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold font-heading leading-snug ${div.isFlagship ? 'text-white' : 'text-[#15315B] group-hover:text-[#2864F0] transition-colors'}`}>
                      {div.title}
                    </h3>

                    <p className={`text-xs leading-relaxed ${div.isFlagship ? 'text-slate-300' : 'text-[#66748A]'}`}>
                      {div.summary}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-5 mt-4 border-t border-current/10 flex items-center justify-between">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${div.isFlagship ? 'text-white' : 'text-[#2864F0]'}`}>
                      Inspect Sector
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: FLEET & ASSETS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F1F6FE] border-b border-[#DCE8F8] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold text-[#2563EB] uppercase tracking-wider block font-mono bg-[#E0ECFD] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md w-fit mb-1.5 sm:mb-2 border border-[#D0E2FC]">
                  Fleet
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] tracking-tight font-heading mt-0.5">
                  Machinery & Equipment
                </h2>
              </div>

              <Link
                to="/fleet"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3F73F5] hover:text-[#2454C6] transition-colors shrink-0"
              >
                <span>Full Machinery Roster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Clean 3 Fleet Cards in Soft White-Blue with Light Borders */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {equipmentData.slice(0, 3).map((item) => (
              <StaggerItem key={item.id}>
                <Link
                  to="/fleet"
                  className="bg-white/95 rounded-2xl overflow-hidden border border-[#DCE8F8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group hover-card-smooth h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EBF2FC]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold text-[#2563EB] border border-[#DCE8F8] shadow-xs">
                      {item.availability}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#687386]">
                        {item.capacity}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#20242D] font-heading group-hover:text-[#2563EB] transition-colors mt-0.5">
                        {item.name}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-[#E8F0FA] flex items-center justify-between text-xs font-semibold text-[#2563EB] group-hover:text-[#1D4ED8]">
                      <span>View Specifications</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: KEY PROJECTS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFD] border-b border-[#E2EAF8] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold text-[#2563EB] uppercase tracking-wider block font-mono bg-[#E0ECFD] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md w-fit mb-1.5 sm:mb-2 border border-[#D0E2FC]">
                  Portfolio
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold text-[#20242D] tracking-tight font-heading mt-0.5">
                  Featured Projects
                </h2>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3F73F5] hover:text-[#2454C6] transition-colors shrink-0"
              >
                <span>View All Featured Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Quick Projects Preview Grid with Stagger Reveal */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {heroMilestones.slice(0, 3).map((m) => (
              <StaggerItem key={m.id}>
                <Link
                  to="/projects"
                  className="bg-white/95 rounded-2xl overflow-hidden border border-[#DCE8F8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group hover-card-smooth h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EBF2FC]">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20242D]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white">
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#65B5FF] block">
                        {m.corridor}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-heading text-white truncate">
                        {m.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 flex items-center justify-between text-xs font-semibold text-[#20242D] group-hover:text-[#2563EB] transition-colors">
                    <span className="font-mono text-[#687386] text-[11px] sm:text-xs">{m.metricValue}</span>
                    <div className="flex items-center gap-1 text-[#2563EB]">
                      <span>Project Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* Dark Capacity Scale Stats -> Now Bright Capacity Scale Stats */}
      <DarkCapacitySection />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: CALLOUT BANNER IN PRIMARY BLUE GRADIENT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 sm:py-20 bg-[#F1F6FE] w-full">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="p-6 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white relative overflow-hidden shadow-xl shadow-blue-600/20 border border-blue-400/30 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2 sm:space-y-2.5 max-w-2xl relative z-10 text-center md:text-left">
                <span className="text-[11px] sm:text-xs font-mono font-semibold text-sky-200 uppercase tracking-wider bg-white/15 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md">
                  Partner With Varan
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-[34px] font-bold font-heading text-white">
                  Ready to Build Your Next Project?
                </h2>
                <p className="text-xs sm:text-base text-white/90 font-normal">
                  Connect directly with our engineering team for proposal reviews, equipment allocation, and rapid site mobilization.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto relative z-10">
                <Link
                  to="/rfp-portal"
                  className="w-full md:w-auto py-3.5 px-8 lg:h-[48px] rounded-xl sm:rounded-full bg-white hover:bg-[#F8FAFF] active:scale-98 text-[#2563EB] hover:text-[#1D4ED8] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all btn-smooth"
                >
                  <span>Request a Bid</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};
