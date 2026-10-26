import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { 
  ArrowRight, 
  CheckCircle2,
  ShieldCheck,
  Truck,
  Clock,
  PhoneCall
} from 'lucide-react';
import { track } from '../services/analytics';
import { ProcessTimeline } from './ProcessTimeline';
import { SectionLabel } from './ui/SectionLabel';

// Photos for bento grid cards
import viaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import gantryImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import civilImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';

const divisionImages: Record<string, string> = {
  'commercial-industrial-painting': viaductImg,
  'civil-works-infrastructure': civilImg,
  'structural-fabrication-safety': gantryImg,
  'urban-roadway-beautification': facilityImg,
  'painting-coating': viaductImg,
  'display-fabrication': gantryImg,
  'civil-structures': civilImg,
  'manpower-solutions': facilityImg,
};

export const ServiceTabs: FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(servicesData[0].id);
  const activeCategory = servicesData.find(cat => cat.id === activeCategoryId) || servicesData[0];
  
  const [activeServiceId, setActiveServiceId] = useState<string>(activeCategory.services[0].id);
  const activeService = activeCategory.services.find(s => s.id === activeServiceId) || activeCategory.services[0];

  const handleCategorySwitch = (catId: string) => {
    setActiveCategoryId(catId);
    track('filter_change', { type: 'service_category', category: catId });
    const cat = servicesData.find(c => c.id === catId);
    if (cat && cat.services.length > 0) {
      setActiveServiceId(cat.services[0].id);
    }
  };

  const handleServiceSwitch = (srvId: string) => {
    setActiveServiceId(srvId);
    track('filter_change', { type: 'service_subportfolio', service: srvId });
  };

  // Flagship tile is painting-coating (first item)
  const flagshipCategory = servicesData[0];
  const secondaryCategories = servicesData.slice(1);

  return (
    <div className="space-y-10 sm:space-y-16">
      
      {/* 1. Bento Grid Architecture (Task 4: 1 Large Flagship Tile + 3 Smaller Complementary Tiles) */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <SectionLabel number="01A" name="WHAT WE DO" className="mb-1.5 sm:mb-2" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#20242D] tracking-tight font-heading">
              Our Core Services
            </h3>
            <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-xl font-body leading-relaxed">
              From heavy painting and steel fabrication to road civil works and city beautification—all handled under one trusted team.
            </p>
          </div>
          <span className="text-xs font-mono text-[#3F73F5] font-medium hidden sm:inline">
            Click any service to view details ↓
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Large Flagship Tile (Col Span 7) */}
          <div
            onClick={() => handleCategorySwitch(flagshipCategory.id)}
            className={`lg:col-span-7 relative rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between group overflow-hidden border ${
              activeCategoryId === flagshipCategory.id
                ? 'border-[#2864F0] ring-2 ring-[#2864F0]/30 shadow-lg'
                : 'border-[#E2EAF8] hover:border-[#2864F0]/60 shadow-xs hover:shadow-md'
            }`}
          >
            <div className="relative w-full h-full flex flex-col justify-between">
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={divisionImages[flagshipCategory.id]}
                  alt={flagshipCategory.title}
                  width={700}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/20" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2864F0] text-white text-[10px] sm:text-[11px] font-heading font-semibold uppercase tracking-wider shadow-xs border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>Flagship Division // ISO Spec</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                  45,000 m² Completed
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 space-y-2.5 sm:space-y-3 text-white">
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#65B5FF] block">
                    DIVISION 01 // COATINGS &amp; ANTI-CORROSION
                  </span>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white font-heading group-hover:text-[#65B5FF] transition-colors">
                    {flagshipCategory.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-xl font-body leading-relaxed">
                  {flagshipCategory.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-xs shadow-emerald-400/50" />
                    <span>MoRTH &amp; IRC Standard Protective Systems</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                    <span>Inspect Division</span>
                    <ArrowRight className="w-4 h-4 text-[#65B5FF]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Smaller Complementary Tiles (Col Span 5 Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {secondaryCategories.map((cat, idx) => {
              const isSelected = activeCategoryId === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategorySwitch(cat.id)}
                  className={`relative rounded-2xl transition-all duration-300 cursor-pointer flex-1 flex flex-col group overflow-hidden border ${
                    isSelected
                      ? 'border-[#2864F0] ring-2 ring-[#2864F0]/30 shadow-md bg-white'
                      : 'border-[#E2EAF8] hover:border-[#2864F0]/50 shadow-2xs hover:shadow-sm bg-white'
                  }`}
                >
                  <div className={`relative w-full h-full p-4 sm:p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#15315B] to-[#1E3A8A] text-white'
                      : 'bg-white text-[#20242D]'
                  }`}>

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
                          isSelected 
                            ? 'bg-white/20 text-white border-white/30' 
                            : 'bg-[#F0F5FF] text-[#2864F0] border-[#DCE4EF]'
                        }`}>
                          DIV // 0{idx + 2}
                        </span>
                        <div>
                          <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider block ${
                            isSelected ? 'text-blue-200' : 'text-[#687386]'
                          }`}>
                            Infrastructure Discipline
                          </span>
                          <h4 className={`text-base font-bold font-heading transition-colors ${
                            isSelected ? 'text-white' : 'text-[#15315B] group-hover:text-[#2864F0]'
                          }`}>
                            {cat.title}
                          </h4>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-[#F0F5FF] text-[#2864F0] group-hover:bg-[#2864F0] group-hover:text-white'
                      }`}>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    <p className={`relative z-10 text-xs mt-2.5 line-clamp-2 leading-relaxed ${
                      isSelected ? 'text-blue-100' : 'text-[#64748B]'
                    }`}>
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 2. Interactive Operational Workbench (Sub-portfolio + Simulator Sandbox) */}
      <div className="relative p-[1.5px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-200/70 via-slate-100 to-indigo-200/70 shadow-xs">
        <div className="bg-gradient-to-b from-white via-[#FCFDFF] to-white rounded-[14.5px] sm:rounded-[22.5px] p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-8">
        
        {/* Active Division Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-[#E2E9F4] gap-3 sm:gap-4">
          <div>
            <div className="text-[10px] sm:text-[11px] font-body font-medium uppercase tracking-wider text-[#3F73F5]">
              Selected Service
            </div>
            <h4 className="text-lg sm:text-2xl font-semibold text-[#20242D] font-heading mt-0.5">
              {activeCategory.title}
            </h4>
          </div>

          {/* Sub-portfolio Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0 -mx-1 px-1">
            {activeCategory.services.map((service) => {
              const isCurrent = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceSwitch(service.id)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] ${
                    isCurrent
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-xs'
                      : 'bg-gradient-to-br from-[#F8FAFF] to-[#EFF6FF] hover:from-[#EAF2FF] hover:to-[#DCEBFF] text-[#20242D] border border-blue-100'
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Service Capabilities & Capacity Card (Option 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Column: Scope, Key Deliverables & Sectors (Col span 7) */}
          <div className="lg:col-span-7 relative p-[1.5px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-300/80 via-slate-200 to-indigo-300/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-full h-full bg-gradient-to-br from-white via-[#F8FBFF] to-[#EFF6FF] rounded-[14.5px] sm:rounded-[22.5px] p-5 sm:p-7 flex flex-col justify-between space-y-6">
            
            {/* Top: Service Title, Overview & Sectors */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3F73F5] bg-gradient-to-r from-[#EAF2FF] to-[#DCEBFF] px-2.5 py-1 rounded-md border border-[#D0E2FF]">
                  Service Scope & Deliverables
                </span>
                <span className="text-xs text-[#059669] font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Pan-India
                </span>
              </div>

              <div>
                <h5 className="text-xl sm:text-2xl font-bold text-[#20242D] font-heading">
                  {activeService.title}
                </h5>
                <p className="text-sm text-[#4A5568] font-body leading-relaxed mt-1.5">
                  {activeService.description}
                </p>
              </div>

              {/* Sectors Served Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs font-semibold text-[#687386] mr-1">Built for:</span>
                {activeService.targetSectors.map((sector, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-blue-100 text-xs font-medium text-[#20242D] shadow-2xs"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Deliverables Checklist (Visual & Easy to read) */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase text-[#687386] tracking-wider block">
                What We Deliver On-Site
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.keyDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-r from-white to-blue-50/40 border border-blue-100 hover:border-blue-300 transition-colors shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#3F73F5] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#20242D] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Metrics Strip */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {activeService.metrics.map((m, i) => (
                <div key={i} className="bg-gradient-to-b from-white to-blue-50/50 p-3 rounded-xl border border-blue-100 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#687386] block truncate">
                    {m.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#3F73F5] font-heading mt-0.5 block truncate">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            </div>
          </div>

          {/* Right Column: Machinery, Safety & Fast Quote Card (Col span 5) */}
          <div className="lg:col-span-5 relative p-[1.5px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-400/80 via-sky-200 to-indigo-400/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-full h-full bg-gradient-to-br from-white via-[#F5F9FF] to-[#EBF3FF] rounded-[14.5px] sm:rounded-[22.5px] p-5 sm:p-7 flex flex-col justify-between space-y-6">
            
            {/* Header: Field Capacity */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3F73F5] block">
                Execution Guarantee
              </span>
              <h5 className="text-lg sm:text-xl font-bold text-[#20242D] font-heading">
                Turnkey Equipment & Crews
              </h5>
              <p className="text-xs text-[#687386] leading-relaxed">
                We deploy our own specialized machinery, scaffolding, and safety-certified workforce.
              </p>
            </div>

            {/* 3 Value & Equipment Highlights */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-blue-50/50 border border-blue-100/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EAF2FF] to-[#DCEBFF] text-[#3F73F5] flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/50">
                  <ShieldCheck className="w-4 h-4 text-[#3F73F5]" />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-[#20242D]">10 to 25 Year Protection</h6>
                  <p className="text-[11px] text-[#687386] mt-0.5 leading-relaxed">
                    Long-lasting industrial barrier against rust, water leakage, and harsh weather.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-blue-50/50 border border-blue-100/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EAF2FF] to-[#DCEBFF] text-[#3F73F5] flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/50">
                  <Truck className="w-4 h-4 text-[#3F73F5]" />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-[#20242D]">Specialized Boom Lifts & Spray Rigs</h6>
                  <p className="text-[11px] text-[#687386] mt-0.5 leading-relaxed">
                    Access heights up to 100 ft safely on highways, flyovers, and sea links.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-white to-blue-50/50 border border-blue-100/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EAF2FF] to-[#DCEBFF] text-[#3F73F5] flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/50">
                  <Clock className="w-4 h-4 text-[#3F73F5]" />
                </div>
                <div>
                  <h6 className="text-xs font-bold text-[#20242D]">Night-Shift & Zero-Disruption Work</h6>
                  <p className="text-[11px] text-[#687386] mt-0.5 leading-relaxed">
                    Smooth work schedules that keep traffic moving and meet tight handover deadlines.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Area */}
            <div className="pt-2 space-y-2.5">
              <Link
                to="/rfp-portal"
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white font-bold text-xs uppercase tracking-[0.06em] py-3.5 px-5 rounded-xl transition-all shadow-md shadow-blue-600/25 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer font-heading"
              >
                <span>Request Site Inspection & Quote</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <div className="flex items-center justify-between text-[11px] text-[#687386] px-1 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <PhoneCall className="w-3 h-3 text-[#3F73F5]" />
                  Direct Desk: +91 8104158309
                </span>
                <span>Fast 24h Response</span>
              </div>
            </div>

            </div>
          </div>

        </div>

        </div>
      </div>

      {/* 3. Horizontal Scroll-Snap Process Timeline (Task 4) */}
      <ProcessTimeline />

    </div>
  );
};
