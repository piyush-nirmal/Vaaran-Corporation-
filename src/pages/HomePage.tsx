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
    <div className="w-full flex flex-col bg-white">
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
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-vrnOrange uppercase tracking-wider block font-mono">
                  Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-heading mt-1">
                  Engineering Disciplines
                </h2>
              </div>

              <Link
                to="/operations"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-vrnNavy hover:text-vrnOrange transition-colors shrink-0"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* 4 Clean Division Cards with Smooth Stagger Animation */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisionHighlights.map((div) => (
              <StaggerItem key={div.id}>
                <Link
                  to="/operations"
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group h-full hover-card-smooth ${
                    div.isFlagship
                      ? 'bg-slate-950 text-white border-slate-900 shadow-lg shadow-slate-950/20'
                      : 'bg-slate-50 hover:bg-white border-slate-200/80 hover:border-vrnNavy/30 hover:shadow-md text-slate-900'
                  }`}
                >
                  <div className="space-y-3">
                    <span className={`text-xs font-mono font-medium ${div.isFlagship ? 'text-amber-400' : 'text-vrnOrange'}`}>
                      {div.highlightMetric}
                    </span>

                    <h3 className={`text-lg font-bold font-heading leading-snug ${div.isFlagship ? 'text-white' : 'text-slate-900 group-hover:text-vrnNavy'}`}>
                      {div.title}
                    </h3>

                    <p className={`text-xs leading-relaxed ${div.isFlagship ? 'text-slate-300' : 'text-slate-600'}`}>
                      {div.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-current/10 flex items-center justify-between">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${div.isFlagship ? 'text-slate-300' : 'text-vrnNavy'}`}>
                      Explore
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
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-vrnOrange uppercase tracking-wider block font-mono">
                  Fleet
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-heading mt-1">
                  Machinery & Equipment
                </h2>
              </div>

              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-vrnNavy hover:text-vrnOrange transition-colors shrink-0"
              >
                <span>Full Machinery Roster</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Clean 3 Fleet Cards with Stagger Reveal */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipmentData.slice(0, 3).map((item) => (
              <StaggerItem key={item.id}>
                <Link
                  to="/fleet"
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group hover-card-smooth h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-emerald-800 border border-slate-200 shadow-2xs">
                      {item.availability}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                        {item.capacity}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-vrnNavy transition-colors mt-0.5">
                        {item.name}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-vrnNavy group-hover:text-vrnOrange">
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
      <section className="py-16 lg:py-20 bg-white border-b border-slate-100 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-vrnOrange uppercase tracking-wider block font-mono">
                  Portfolio
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-heading mt-1">
                  Featured Projects
                </h2>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-vrnNavy hover:text-vrnOrange transition-colors shrink-0"
              >
                <span>View All Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Quick Projects Preview Grid with Stagger Reveal */}
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroMilestones.slice(0, 3).map((m) => (
              <StaggerItem key={m.id}>
                <Link
                  to="/projects"
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group hover-card-smooth h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-cyan-300 block">
                        {m.corridor}
                      </span>
                      <h3 className="text-base font-bold font-heading text-white">
                        {m.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between text-xs font-semibold text-vrnNavy group-hover:text-vrnOrange">
                    <span className="font-mono">{m.metricValue}</span>
                    <div className="flex items-center gap-1">
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

      {/* Dark Capacity Scale Stats */}
      <DarkCapacitySection />

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: MINIMAL CALLOUT BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-white w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-slate-950 text-white relative overflow-hidden shadow-xl border border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono font-medium text-vrnOrange uppercase tracking-wider">
                  Partner With Varan
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white">
                  Ready to Build Your Next Project?
                </h2>
                <p className="text-sm text-slate-300 font-normal">
                  Connect directly with our engineering team for proposal reviews, equipment allocation, and rapid site mobilization.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  to="/rfp-portal"
                  className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all btn-smooth"
                >
                  <span>Request a Bid</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};
