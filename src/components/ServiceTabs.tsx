import { useState } from 'react';
import type { FC } from 'react';
import { servicesData } from '../data/services';
import { 
  Paintbrush, 
  Layers, 
  Hammer, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Sliders,
  Sparkles
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

const iconMap = {
  Paintbrush,
  Layers,
  Hammer,
  Users,
};

const divisionImages: Record<string, string> = {
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
    <div className="space-y-16">
      
      {/* 1. Bento Grid Architecture (Task 4: 1 Large Flagship Tile + 3 Smaller Complementary Tiles) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <SectionLabel number="01A" name="CAPABILITY DISCIPLINES" className="mb-2" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-vrnNavy tracking-tight font-display">
              Four Specialized Engineering Divisions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
              Single-contract mobilization across surface preparation, gantry fabrication, and site logistics.
            </p>
          </div>
          <span className="text-xs font-mono text-vrnNavy font-bold hidden sm:inline">
            Click division to inspect live parameters ↓
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Large Flagship Tile (Col Span 7) */}
          <div
            onClick={() => handleCategorySwitch(flagshipCategory.id)}
            className={`lg:col-span-7 relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between group shadow-navy-sm hover:shadow-navy-lg ${
              activeCategoryId === flagshipCategory.id
                ? 'border-vrnNavy ring-2 ring-vrnNavy/20'
                : 'border-slate-200/90 hover:border-vrnNavy/40'
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
            <div className="relative z-10 p-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-vrnOrange text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3 text-slate-950" />
                <span>Flagship Division</span>
              </div>
              <span className="text-xs font-mono text-cyan-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                45,000 m² Completed
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3 text-white">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                  01 / HIGH-DENSITY CORRIDORS
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-amber-300 transition-colors">
                  {flagshipCategory.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-xl font-sans">
                {flagshipCategory.description}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-white/20">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>ISO 12944 C5-I Specification</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-vrnOrange group-hover:translate-x-1 transition-transform">
                  <span>Inspect Parameters</span>
                  <ArrowRight className="w-4 h-4 text-vrnOrange" />
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
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex-1 flex flex-col justify-between group shadow-2xs hover:shadow-navy-md ${
                    isSelected
                      ? 'bg-vrnNavy text-white border-vrnNavy'
                      : 'bg-white hover:bg-slate-50 border-slate-200/90 text-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${
                        isSelected ? 'bg-white/10 text-amber-400' : 'bg-slate-100 text-vrnNavy'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                          isSelected ? 'text-cyan-300' : 'text-slate-500'
                        }`}>
                          0{idx + 2} / Division
                        </span>
                        <h4 className={`text-base font-bold font-display ${
                          isSelected ? 'text-white' : 'text-vrnNavy group-hover:text-vrnNavy-light'
                        }`}>
                          {cat.title}
                        </h4>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-vrnNavy'
                    }`} />
                  </div>

                  <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-slate-200' : 'text-slate-600'
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
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 lg:p-8 shadow-navy-sm space-y-8">
        
        {/* Active Division Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-vrnNavy font-bold">
              Active Division Scope
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-vrnNavy font-display mt-0.5">
              {activeCategory.title}
            </h4>
          </div>

          {/* Sub-portfolio Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            {activeCategory.services.map((service) => {
              const isCurrent = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceSwitch(service.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                    isCurrent
                      ? 'bg-vrnNavy text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scope Details & Technical Deliverables */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h5 className="text-base font-bold text-vrnNavy font-display">
                {activeService.title} Specification
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {activeService.description}
              </p>
            </div>

            {/* Target Sectors */}
            <div className="pt-2 border-t border-slate-200/80">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                Approved Municipal & Enterprise Sectors
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 font-sans">
                {activeService.targetSectors.map((sector, i) => (
                  <span key={i} className="inline-flex items-center">
                    <span className="font-semibold text-slate-800">{sector}</span>
                    {i < activeService.targetSectors.length - 1 && (
                      <span aria-hidden="true" className="mx-2 text-slate-300">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="pt-2 border-t border-slate-200/80">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                Standard Engineering Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.keyDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                    <Check className="w-3.5 h-3.5 text-vrnNavy shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-200/80">
              {activeService.metrics.map((m, i) => (
                <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[10px] font-mono uppercase text-slate-500 truncate">
                    {m.label}
                  </div>
                  <div className="text-sm font-extrabold text-vrnNavy font-mono tabular-nums mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Animated Layered Graphic (Task 5: responds live to DFT slider) */}
            <div className="pt-2">
              <LayeredCoatingGraphic
                totalDft={coatingThickness}
                blastStandard={blastStandard}
                topcoatType={topcoatType}
              />
            </div>

          </div>

          {/* Right Column: Coating Simulator Sandbox with Number Tweening */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vrnNavy font-mono">
                  <Sliders className="w-4 h-4 text-vrnNavy" />
                  <span>Coating Specification Simulator</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-vrnNavy bg-white px-2 py-0.5 rounded border border-slate-200">
                  Live Calculations
                </span>
              </div>

              {/* Interactive Controls */}
              <div className="space-y-4">
                
                {/* Dry Film Thickness Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label htmlFor="dft-slider" className="font-bold text-slate-800">Dry Film Thickness (DFT) Spec</label>
                    <span className="font-mono font-bold text-vrnNavy text-sm bg-white px-2.5 py-0.5 rounded border border-slate-200 shadow-2xs">
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
                    className="w-full accent-vrnNavy h-2 bg-slate-200 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>120 µm (Standard)</span>
                    <span>200 µm (Corridor)</span>
                    <span>300 µm (Marine C5)</span>
                  </div>
                </div>

                {/* Substrate Prep Selector */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-800 block">Abrasive Blast Profile</span>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-label="Blast Profile Standards">
                    {(['Sa 2.5', 'Sa 3.0'] as const).map((std) => (
                      <button
                        key={std}
                        type="button"
                        onClick={() => setBlastStandard(std)}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                          blastStandard === std
                            ? 'bg-vrnNavy text-white border-vrnNavy shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-vrnNavy'
                        }`}
                      >
                        {std} Standard {std === 'Sa 2.5' ? '(Near-White)' : '(White Metal)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topcoat Formulation */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-800 block">Topcoat Formulation</span>
                  <div className="grid grid-cols-2 gap-2" role="group" aria-label="Topcoat Formulations">
                    {(['Aliphatic PU', 'Fluoropolymer'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTopcoatType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                          topcoatType === type
                            ? 'bg-vrnNavy text-white border-vrnNavy shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-vrnNavy'
                        }`}
                      >
                        {type} {type === 'Aliphatic PU' ? '(UV Standard)' : '(Ultra-Life)'}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Output Performance Matrix with Number Tweening */}
              <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-xs">
                <div className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                  Calculated Specification Matrix
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-mono text-slate-500 block">Estimated service life</span>
                    <span className="font-mono text-sm font-bold text-emerald-700 block mt-0.5">
                      {coatingThickness >= 240 ? '25+ Yrs' : coatingThickness >= 180 ? '15–20 Yrs' : '10 Yrs'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-mono text-slate-500 block">Salt Spray Resistance</span>
                    <span className="font-mono text-sm font-bold text-vrnNavy block mt-0.5">
                      <CountUp value={coatingThickness >= 200 ? '3,000h' : '2,000h'} />
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                    <span className="text-[10px] font-mono text-slate-500 block">Tensile Adhesion</span>
                    <span className="font-mono text-sm font-bold text-vrnNavy block mt-0.5">
                      {blastStandard === 'Sa 3.0' ? '5B / 12 MPa' : '4B / 9 MPa'}
                    </span>
                  </div>
                </div>

                {/* Mandatory Compliance Disclaimer directly under results */}
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-slate-600 font-sans leading-relaxed">
                  <p className="font-semibold text-slate-700">
                    Indicative estimate. Final performance subject to site assessment and specification.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-700 font-medium pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complies with ISO 12944 Part 5 C5-Industrial atmospheric rating</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleAttachToRFP}
                  className="w-full bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider py-4 px-4 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                >
                  <span>Apply {activeService.title} Specs to RFP Form</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
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
