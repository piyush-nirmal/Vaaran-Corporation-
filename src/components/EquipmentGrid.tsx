import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { ShieldCheck, X, ArrowRight, MessageSquare } from 'lucide-react';
import { 
  equipmentData, 
  equipmentCategoryLabels, 
  type EquipmentItem 
} from '../data/content';
import { track } from '../services/analytics';
import { useWhatsApp } from '../context/WhatsAppContext';
import { TiltCard } from './ui/TiltCard';
import { SectionLabel } from './ui/SectionLabel';

export const EquipmentGrid: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [inspectedItem, setInspectedItem] = useState<EquipmentItem | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const { openWhatsApp } = useWhatsApp();

  const filteredItems = selectedFilter === 'all'
    ? equipmentData
    : equipmentData.filter(item => item.category === selectedFilter);

  const handleFilterChange = (key: string) => {
    setSelectedFilter(key);
    track('filter_change', { type: 'equipment_category', filter: key });
  };

  const handleOpenModal = (item: EquipmentItem) => {
    setInspectedItem(item);
    track('machine_modal_open', {
      machineId: item.id,
      machineName: item.name,
      capacity: item.capacity,
    });
  };

  // Keyboard accessibility: Escape to close modal
  useEffect(() => {
    if (!inspectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setInspectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => modalCloseBtnRef.current?.focus(), 50);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectedItem]);

  const handleAllocateToRFP = () => {
    if (inspectedItem) {
      track('cta_click', {
        location: 'equipment_modal_allocate',
        machine: inspectedItem.name,
      });
    }
    setInspectedItem(null);
    const rfp = document.getElementById('rfp-quote');
    if (rfp) {
      rfp.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChatWhatsApp = () => {
    if (!inspectedItem) return;
    openWhatsApp(
      `Hi Varan Corporation, I am interested in mobilizing equipment: ${inspectedItem.name} (${inspectedItem.capacity}) for our project.`,
      'equipment_modal'
    );
  };

  return (
    <div className="space-y-8">
      
      {/* Section Header with Clean Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <SectionLabel number="02" name="MACHINERY FLEET" className="mb-2" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-[-0.02em] font-heading">
            Operational Fleet & Machinery Deck
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-body leading-relaxed">
            Mechanized asset inventory deployed for municipal transit, surface preparation, and structural erection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-slate-100 border border-slate-200/80 rounded-xl shrink-0" role="group" aria-label="Fleet Categories">
          {Object.entries(equipmentCategoryLabels).map(([key, label]) => {
            const isSelected = selectedFilter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleFilterChange(key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                  isSelected
                    ? 'bg-vrnNavy text-white shadow-xs'
                    : 'text-slate-600 hover:text-vrnNavy hover:bg-slate-200/60'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Equipment Cards with 3D Tilt Effect (Task 4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <TiltCard
            key={item.id}
            maxTilt={6}
            tabIndex={0}
            role="button"
            aria-label={`Inspect ${item.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenModal(item);
              }
            }}
            onClick={() => handleOpenModal(item)}
            className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-vrnNavy hover:shadow-navy-lg transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy h-full"
          >
            {/* Visual Media Header with loading="lazy" */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Status Badge with Animated Pulse Dot */}
              <div className="absolute top-3 right-3">
                <span className={`inline-flex items-center gap-1.5 text-[12px] font-body font-medium px-2.5 py-1 rounded-full border backdrop-blur-md ${
                  item.availability === 'Active Deployment'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-vrnNavy border-slate-300'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    item.availability === 'Active Deployment' ? 'bg-emerald-500 animate-pulse' : 'bg-cyan-500'
                  }`} />
                  <span>{item.availability}</span>
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-500">
                  <span className="font-mono font-bold">{item.capacity}</span> Available
                </div>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-vrnNavy transition-colors mt-0.5 leading-snug font-heading">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-sans">
                  {item.application}
                </p>
              </div>

              {/* Unboxed Metadata Parameters */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-500">Rating</span>
                  <span className="text-slate-900 font-bold font-mono text-xs">{item.pressureRating}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-slate-500">Standard</span>
                  <span className="text-vrnNavy font-bold text-xs font-mono truncate max-w-[130px]">{item.certifications}</span>
                </div>
              </div>

              {/* Interactive Inspect Cue */}
              <div className="pt-2 flex items-center justify-between text-xs text-vrnNavy font-bold">
                <span className="text-[11px]">Inspect Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Machinery Technical Inspector Modal */}
      {inspectedItem && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="machinery-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setInspectedItem(null);
          }}
        >
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full text-slate-900 overflow-hidden shadow-2xl space-y-0">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div>
                <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-vrnNavy">
                  Machinery Inspection Dossier
                </span>
                <h3 id="machinery-modal-title" className="text-xl font-black text-vrnNavy mt-1 font-display">
                  {inspectedItem.name}
                </h3>
              </div>
              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={() => setInspectedItem(null)}
                aria-label="Close machinery modal"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={inspectedItem.image}
                  alt={inspectedItem.name}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono font-bold text-vrnNavy border border-slate-200">
                  {inspectedItem.capacity}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[12px] font-body font-medium text-slate-500 uppercase tracking-[0.04em]">Pressure / Load</span>
                  <span className="text-sm font-bold text-vrnNavy block font-mono">{inspectedItem.pressureRating}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[12px] font-body font-medium text-slate-500 uppercase tracking-[0.04em]">Flow Rate / Capacity</span>
                  <span className="text-sm font-bold text-vrnNavy block font-mono">{inspectedItem.flowOutput}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-700" />
                  <span>Compliance: {inspectedItem.certifications}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Deployed under strict HSE supervision with certified operators, calibrated pressure safety valves, and daily maintenance logs.
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleChatWhatsApp}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold uppercase text-vrnNavy transition-colors cursor-pointer flex items-center justify-center gap-2 font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleAllocateToRFP}
                  className="py-3 px-4 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-xs font-black uppercase text-slate-950 transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange"
                >
                  <span>Attach to RFP</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
