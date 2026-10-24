import { useState } from 'react';
import type { FC } from 'react';
import { servicesData } from '../data/services';
import { 
  Paintbrush, 
  Layers, 
  Hammer, 
  Users, 
  ArrowRight, 
  Sliders,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { track } from '../services/analytics';
import { LayeredCoatingGraphic } from './ui/LayeredCoatingGraphic';
import { ProcessTimeline } from './ProcessTimeline';
import { SectionLabel } from './ui/SectionLabel';
import { CountUp } from './ui/CountUp';

// Photos for bento grid cards
import viaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import gantryImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import civilImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';

const iconMap: Record<string, any> = {
  Paintbrush,
  Layers,
  Hammer,
  Users,
  Sparkles,
};

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

  // Interactive Technical Coating Spec Simulator State
  const [coatingThickness, setCoatingThickness] = useState<number>(180);
  const [blastStandard, setBlastStandard] = useState<'Sa 2.5' | 'Sa 3.0'>('Sa 2.5');
  const [topcoatType, setTopcoatType] = useState<'Aliphatic PU' | 'Fluoropolymer'>('Aliphatic PU');

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

  const handleAttachToRFP = () => {
    track('simulator_apply_to_rfp', {
      service: activeService.title,
      coatingThickness,
      blastStandard,
      topcoatType,
    });
    const el = document.getElementById('rfp-quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
            <SectionLabel number="01A" name="CAPABILITY DISCIPLINES" className="mb-1.5 sm:mb-2" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#20242D] tracking-tight font-heading">
              Four Specialized Engineering Divisions
            </h3>
            <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-xl font-body leading-relaxed">
              Single-contract mobilization across surface preparation, gantry fabrication, and site logistics.
            </p>
          </div>
          <span className="text-xs font-mono text-[#3F73F5] font-medium hidden sm:inline">
            Click division to inspect live parameters ↓
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Large Flagship Tile (Col Span 7) */}
          <div
            onClick={() => handleCategorySwitch(flagshipCategory.id)}
            className={`lg:col-span-7 relative rounded-2xl sm:rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-between group shadow-xs hover:shadow-md hover-card-smooth ${
              activeCategoryId === flagshipCategory.id
                ? 'border-[#3F73F5] ring-2 ring-[#3F73F5]/20'
                : 'border-[#E2E9F4] hover:border-[#3F73F5]/40'
            }`}
          >
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
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#3F73F5] text-white text-[10px] sm:text-[11px] font-body font-semibold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Flagship Division</span>
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-white bg-black/40 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded border border-white/20">
                45,000 m² Completed
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 space-y-2.5 sm:space-y-3 text-white">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-[11px] font-body font-medium uppercase tracking-wider text-[#65B5FF] block">
                  01 / HIGH-DENSITY CORRIDORS
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>ISO 12944 C5-I Specification</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform">
                  <span>Inspect Parameters</span>
                  <ArrowRight className="w-4 h-4 text-[#65B5FF]" />
                </div>
              </div>
            </div>
          </div>

          {/* 3 Smaller Complementary Tiles (Col Span 5 Stack) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {secondaryCategories.map((cat, idx) => {
              const Icon = iconMap[cat.icon as keyof typeof iconMap] || Layers;
              const isSelected = activeCategoryId === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCategorySwitch(cat.id)}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex-1 flex flex-col justify-between group shadow-xs hover:shadow-md hover-card-smooth ${
                    isSelected
                      ? 'bg-[#3F73F5] text-white border-[#3F73F5]'
                      : 'bg-[#F8FAFF] hover:bg-white border-[#E2E9F4] text-[#20242D]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF2FF] text-[#3F73F5]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-body font-medium uppercase tracking-wider block ${
                          isSelected ? 'text-white/80' : 'text-[#687386]'
                        }`}>
                          0{idx + 2} / Division
                        </span>
                        <h4 className={`text-base font-semibold font-heading ${
                          isSelected ? 'text-white' : 'text-[#20242D] group-hover:text-[#3F73F5]'
                        }`}>
                          {cat.title}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-white' : 'text-[#687386] group-hover:text-[#3F73F5]'
                    }`} />
                  </div>

                  <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-white/90' : 'text-[#687386]'
                  }`}>
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 2. Interactive Operational Workbench (Sub-portfolio + Simulator Sandbox) */}
      <div className="bg-white border border-[#E2E9F4] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xs space-y-5 sm:space-y-8">
        
        {/* Active Division Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-[#E2E9F4] gap-3 sm:gap-4">
          <div>
            <div className="text-[10px] sm:text-[11px] font-body font-medium uppercase tracking-wider text-[#3F73F5]">
              Active Division Scope
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
                      ? 'bg-[#3F73F5] text-white shadow-xs'
                      : 'bg-[#F8FAFF] hover:bg-[#EAF2FF] text-[#20242D] border border-[#E2E9F4]'
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Workbench - Minimal & Aligned at Exact Same Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Left Column: Scope Details, Deliverables & Coating Schematic */}
          <div className="lg:col-span-6 bg-[#F8FAFF] border border-[#E2E9F4] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 shadow-xs flex flex-col justify-between h-full space-y-3.5 sm:space-y-4">
            
            {/* Top: Specification Title & Minimal Sector Tags */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h5 className="text-lg sm:text-xl font-bold text-[#20242D] font-heading">
                  {activeService.title} Specification
                </h5>
                <span className="text-[10px] font-mono text-[#3F73F5] font-bold bg-[#EAF2FF] px-2 py-0.5 rounded border border-[#D0E2FF] shrink-0">
                  Engineering Spec
                </span>
              </div>
              <p className="text-xs text-[#687386] line-clamp-2 font-body leading-relaxed">
                {activeService.description}
              </p>
              
              {/* Minimal Sector Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {activeService.targetSectors.map((sector, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-white border border-[#E2E9F4] text-[11px] font-semibold text-[#20242D] shadow-2xs"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: 3 Compact Metric Cards */}
            <div className="grid grid-cols-3 gap-2">
              {activeService.metrics.map((m, i) => (
                <div key={i} className="bg-white p-2.5 sm:p-3 rounded-xl border border-[#E2E9F4] shadow-2xs flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#687386] truncate">
                    {m.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#3F73F5] font-mono tabular-nums mt-0.5">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Schematic Diagram: Multi-Tier Barrier Architecture */}
            <div className="flex-1 flex flex-col justify-center">
              <LayeredCoatingGraphic
                totalDft={coatingThickness}
                blastStandard={blastStandard}
                topcoatType={topcoatType}
              />
            </div>

            {/* Bottom: Minimal Deliverables / QA Verification Strip */}
            <div className="p-3 bg-white rounded-xl border border-[#E2E9F4] text-xs text-[#20242D] flex items-center justify-between font-body shadow-2xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3F73F5] shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">ISO 12944 C5-M · Sa 2.5/3.0 Verified</span>
              </div>
              <span className="text-[10px] font-mono text-[#2454C6] font-bold bg-[#EAF2FF] px-2 py-0.5 rounded border border-[#D0E2FF]">
                100% QA/QC
              </span>
            </div>

          </div>

          {/* Right Column: Coating Simulator Sandbox with Number Tweening */}
          <div className="lg:col-span-6 bg-[#F8FAFF] border border-[#E2E9F4] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 shadow-xs flex flex-col justify-between h-full space-y-3.5 sm:space-y-4">
            
            {/* Header: Simulator title and live-calculation indicator */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E9F4]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#EAF2FF] text-[#3F73F5] flex items-center justify-center">
                  <Sliders className="w-3.5 h-3.5 text-[#3F73F5]" />
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#20242D] font-heading uppercase tracking-wider">
                  Coating Specification Simulator
                </h5>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#2454C6] bg-white px-2.5 py-1 rounded-lg border border-[#D0E2FF] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                <span>Live Calculations</span>
              </span>
            </div>

            {/* Interactive Controls (Minimal, Clean) */}
            <div className="space-y-3">
              
              {/* 1. Dry Film Thickness Slider */}
              <div className="space-y-2 p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E2E9F4] shadow-2xs">
                <div className="flex justify-between items-center gap-2">
                  <label htmlFor="dft-slider" className="font-bold text-[#20242D] text-xs font-heading">
                    Dry Film Thickness (DFT)
                  </label>
                  <span className="font-mono font-extrabold text-[#3F73F5] text-xs sm:text-sm bg-[#EAF2FF] px-2.5 py-0.5 rounded-lg border border-[#D0E2FF] shadow-xs shrink-0">
                    {coatingThickness} µm
                  </span>
                </div>

                <input
                  id="dft-slider"
                  type="range"
                  min={120}
                  max={300}
                  step={20}
                  value={coatingThickness}
                  aria-label="Dry Film Thickness slider"
                  aria-valuemin={120}
                  aria-valuemax={300}
                  aria-valuenow={coatingThickness}
                  onChange={(e) => setCoatingThickness(Number(e.target.value))}
                  className="w-full accent-[#3F73F5] h-2 bg-[#E2E9F4] rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
                />

                {/* Quick Preset Buttons */}
                <div className="grid grid-cols-4 gap-1.5 pt-0.5">
                  {[
                    { val: 120, label: '120 µm' },
                    { val: 200, label: '200 µm' },
                    { val: 240, label: '240 µm' },
                    { val: 300, label: '300 µm' },
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      type="button"
                      onClick={() => setCoatingThickness(preset.val)}
                      className={`text-[10px] font-mono font-semibold py-1 rounded-md transition-colors cursor-pointer text-center ${
                        coatingThickness === preset.val
                          ? 'bg-[#3F73F5] text-white shadow-2xs'
                          : 'bg-[#F8FAFF] hover:bg-[#EAF2FF] text-[#687386] border border-[#E2E9F4]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2 & 3. Blast Profile and Topcoat Formulation Side by Side */}
              <div className="grid grid-cols-2 gap-2.5">
                
                {/* Blast Profile */}
                <div className="p-3 rounded-2xl bg-white border border-[#E2E9F4] space-y-1.5 shadow-2xs">
                  <span className="text-[11px] font-bold text-[#20242D] block font-heading">
                    Blast Profile
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(['Sa 2.5', 'Sa 3.0'] as const).map((std) => {
                      const isSelected = blastStandard === std;
                      return (
                        <button
                          key={std}
                          type="button"
                          onClick={() => setBlastStandard(std)}
                          className={`py-1.5 px-1 rounded-lg text-center font-mono text-[11px] font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#3F73F5] text-white shadow-2xs'
                              : 'bg-[#F8FAFF] hover:bg-[#EAF2FF] text-[#475569] border border-[#E2E9F4]'
                          }`}
                        >
                          {std}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Topcoat Formulation */}
                <div className="p-3 rounded-2xl bg-white border border-[#E2E9F4] space-y-1.5 shadow-2xs">
                  <span className="text-[11px] font-bold text-[#20242D] block font-heading">
                    Topcoat
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'Aliphatic PU', label: 'PU (UV)' },
                      { id: 'Fluoropolymer', label: 'FEVE' },
                    ].map((opt) => {
                      const isSelected = topcoatType === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setTopcoatType(opt.id as 'Aliphatic PU' | 'Fluoropolymer')}
                          className={`py-1.5 px-1 rounded-lg text-center font-medium text-[11px] transition-all cursor-pointer truncate ${
                            isSelected
                              ? 'bg-[#3F73F5] text-white font-bold shadow-2xs'
                              : 'bg-[#F8FAFF] hover:bg-[#EAF2FF] text-[#475569] border border-[#E2E9F4]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* 4. Output Performance Matrix */}
              <div className="p-3 sm:p-3.5 bg-white border border-[#E2E9F4] rounded-2xl space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#3F73F5] tracking-wider block">
                    Calculated Specification Matrix
                  </span>
                  <span className="text-[10px] font-mono text-[#687386]">ASTM B117 / ISO 4624</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-[#F8FAFF] rounded-xl border border-[#E2E9F4]">
                    <span className="text-[10px] font-body font-medium text-[#687386] block">Service Life</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#3F73F5] block mt-0.5">
                      {coatingThickness >= 240 ? '25+ Yrs' : coatingThickness >= 180 ? '15–20 Yrs' : '10 Yrs'}
                    </span>
                  </div>

                  <div className="p-2.5 bg-[#F8FAFF] rounded-xl border border-[#E2E9F4]">
                    <span className="text-[10px] font-body font-medium text-[#687386] block">Salt Spray</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#3F73F5] block mt-0.5">
                      <CountUp value={coatingThickness >= 200 ? '3,000h' : '2,000h'} />
                    </span>
                  </div>

                  <div className="p-2.5 bg-[#F8FAFF] rounded-xl border border-[#E2E9F4]">
                    <span className="text-[10px] font-body font-medium text-[#687386] block">Adhesion</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#3F73F5] block mt-0.5">
                      {blastStandard === 'Sa 3.0' ? '5B / 12 MPa' : '4B / 9 MPa'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Primary Call to Action */}
            <div className="pt-1 space-y-1.5">
              <button
                type="button"
                onClick={handleAttachToRFP}
                className="w-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white font-bold text-xs uppercase tracking-[0.06em] py-3.5 lg:h-[48px] px-5 rounded-xl transition-all shadow-md shadow-blue-600/25 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Apply Specification to RFP</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#687386] px-1">
                <span>ISO 12944 Part 5 C5-M</span>
                <span>Engineering Baseline</span>
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
