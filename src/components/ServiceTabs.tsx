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
  Sliders
} from 'lucide-react';

const iconMap = {
  Paintbrush,
  Layers,
  Hammer,
  Users,
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
    const cat = servicesData.find(c => c.id === catId);
    if (cat && cat.services.length > 0) {
      setActiveServiceId(cat.services[0].id);
    }
  };

  const handleAttachToRFP = () => {
    const el = document.getElementById('rfp-quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Category Tab Segmented Controller */}
      <div className="border-b border-slate-200 bg-slate-50/70 p-3 sm:p-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          {servicesData.map((category, idx) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] || Paintbrush;
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategorySwitch(category.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 font-display ${
                  isActive
                    ? 'bg-vrnNavy text-white shadow-sm'
                    : 'text-slate-600 hover:text-vrnNavy hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-vrnOrange' : 'text-slate-400'}`} />
                <span>0{idx + 1}. {category.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Capability Workbench */}
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Capability Sub-items (Col Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Division Intro */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-vrnOrange font-bold">
                Operational Division Focus
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
                {activeCategory.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                {activeCategory.description}
              </p>
            </div>

            {/* Service Pills / Interactive Filter Tabs */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block font-mono">
                Select Execution Portfolio
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCategory.services.map((service) => {
                  const isCurrent = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveServiceId(service.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'bg-vrnOrange-light border border-vrnOrange text-vrnOrange shadow-xs'
                          : 'bg-slate-100 border border-slate-200/60 text-slate-600 hover:bg-slate-200/70 hover:text-vrnNavy'
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Service Detailed Parameters */}
            <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-vrnNavy font-display">
                  {activeService.title} Scope
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {activeService.description}
                </p>
              </div>

              {/* Unboxed Metadata Sectors */}
              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 font-mono">
                  Target Municipal & Enterprise Sectors
                </span>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 font-sans">
                  {activeService.targetSectors.map((sector, i) => (
                    <span key={i} className="inline-flex items-center">
                      <span className="font-semibold text-slate-700">{sector}</span>
                      {i < activeService.targetSectors.length - 1 && (
                        <span aria-hidden="true" className="mx-2 text-slate-300">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantified Key Deliverables */}
              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                  Standard Technical Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeService.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <Check className="w-3.5 h-3.5 text-vrnCyan-dark shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-200/80">
                {activeService.metrics.map((m, i) => (
                  <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="text-[10px] font-mono uppercase text-slate-400 truncate">
                      {m.label}
                    </div>
                    <div className="text-sm font-extrabold text-vrnNavy font-mono tabular-nums mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Right Column: Live Interactive Spec Sandbox & Pre-flight Calculator (Col Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-vrnNavy font-mono">
                  <Sliders className="w-4 h-4 text-vrnOrange" />
                  <span>Technical Coating Specification Matrix</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-vrnCyan-dark bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                  Interactive Sandbox
                </span>
              </div>

              {/* Dynamic Interactive Controls */}
              <div className="space-y-5">
                
                {/* Dry Film Thickness (DFT) Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-700">Dry Film Thickness (DFT) Spec</span>
                    <span className="font-mono font-bold text-vrnOrange text-sm">{coatingThickness} µm</span>
                  </div>
                  <input
                    type="range"
                    min={120}
                    max={300}
                    step={20}
                    value={coatingThickness}
                    onChange={(e) => setCoatingThickness(Number(e.target.value))}
                    className="w-full accent-vrnOrange h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>120 µm (Standard)</span>
                    <span>200 µm (Heavy Corridor)</span>
                    <span>300 µm (Marine C5)</span>
                  </div>
                </div>

                {/* Substrate Prep Selector */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 block">Abrasive Blast Profile</span>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Sa 2.5', 'Sa 3.0'] as const).map((std) => (
                      <button
                        key={std}
                        type="button"
                        onClick={() => setBlastStandard(std)}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-colors cursor-pointer ${
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

                {/* Topcoat Chemistry Selector */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 block">Topcoat Chemistry Formulation</span>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Aliphatic PU', 'Fluoropolymer'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTopcoatType(type)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          topcoatType === type
                            ? 'bg-vrnCyan-light border-vrnCyan text-vrnCyan-dark shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-vrnCyan'
                        }`}
                      >
                        {type} {type === 'Aliphatic PU' ? '(UV Standard)' : '(Ultra-Life)'}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Live Calculated Matrix Output */}
              <div className="p-4 bg-white border border-slate-200/90 rounded-xl space-y-3 shadow-xs">
                <div className="text-[10px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                  Calculated Performance Matrix
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                    <span className="text-[10px] font-mono text-slate-500 block">Durability</span>
                    <span className="font-mono text-sm font-bold text-emerald-700">
                      {coatingThickness >= 240 ? '25+ Yrs' : coatingThickness >= 180 ? '15–20 Yrs' : '10 Yrs'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                    <span className="text-[10px] font-mono text-slate-500 block">Salt Spray</span>
                    <span className="font-mono text-sm font-bold text-vrnNavy">
                      {coatingThickness >= 200 ? '3,000h' : '2,000h'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                    <span className="text-[10px] font-mono text-slate-500 block">Adhesion</span>
                    <span className="font-mono text-sm font-bold text-vrnOrange">
                      {blastStandard === 'Sa 3.0' ? '5B / 12 MPa' : '4B / 9 MPa'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complies with ISO 12944 Part 5 C5-Industrial atmospheric rating</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAttachToRFP}
                  className="w-full bg-vrnNavy hover:bg-vrnNavy-dark text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/20 flex items-center justify-center gap-2 cursor-pointer font-display"
                >
                  <span>Apply {activeService.title} Specs to RFP Form</span>
                  <ArrowRight className="w-4 h-4 text-vrnOrange" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
