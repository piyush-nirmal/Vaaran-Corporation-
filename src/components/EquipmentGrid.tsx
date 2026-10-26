import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, X, ArrowRight, MessageSquare } from 'lucide-react';
import { 
  equipmentData, 
  equipmentCategoryLabels, 
  type EquipmentItem 
} from '../data/content';
import { track } from '../services/analytics';
import { useWhatsApp } from '../context/WhatsAppContext';
import { TiltCard } from './ui/TiltCard';

export const EquipmentGrid: FC = () => {
  const navigate = useNavigate();
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
    navigate('/rfp-portal');
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#E2E9F4] pb-4 sm:pb-6">
        <div>
          <h2 className="text-xl sm:text-3xl font-semibold text-[#20242D] tracking-[-0.02em] font-heading">
            Operational Fleet & Machinery Deck
          </h2>
          <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-xl font-body leading-relaxed">
            Mechanized asset inventory deployed for municipal transit, surface preparation, and structural erection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl shrink-0 -mx-1 px-1" role="group" aria-label="Fleet Categories">
          {Object.entries(equipmentCategoryLabels).map(([key, label]) => {
            const isSelected = selectedFilter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleFilterChange(key)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] ${
                  isSelected
                    ? 'bg-[#3F73F5] text-white shadow-xs'
                    : 'text-[#687386] hover:text-[#3F73F5] hover:bg-white'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Equipment Cards with 3D Tilt Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
            className="group relative bg-white border border-[#E2E9F4] rounded-2xl overflow-hidden hover:border-[#3F73F5] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] h-full shadow-xs"
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
                    ? 'bg-[#EAF2FF] text-[#3F73F5] border-[#3F73F5]/25'
                    : 'bg-white text-[#20242D] border-[#E2E9F4]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    item.availability === 'Active Deployment' ? 'bg-[#3F73F5] animate-pulse' : 'bg-[#65B5FF]'
                  }`} />
                  <span>{item.availability}</span>
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386]">
                  <span className="font-mono font-bold text-[#3F73F5]">{item.capacity}</span> Available
                </div>
                <h3 className="text-base font-semibold text-[#20242D] group-hover:text-[#3F73F5] transition-colors mt-0.5 leading-snug font-heading">
                  {item.name}
                </h3>
                <p className="text-xs text-[#687386] mt-1 line-clamp-2 leading-relaxed font-body">
                  {item.application}
                </p>
              </div>

              {/* Unboxed Metadata Parameters */}
              <div className="pt-3 border-t border-[#E2E9F4] space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-[#687386]">
                  <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386]">Rating</span>
                  <span className="text-[#20242D] font-bold font-mono text-xs">{item.pressureRating}</span>
                </div>
                <div className="flex justify-between items-center text-[#687386]">
                  <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386]">Standard</span>
                  <span className="text-[#3F73F5] font-bold text-xs font-mono truncate max-w-[130px]">{item.certifications}</span>
                </div>
              </div>

              {/* Interactive Inspect Cue */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#3F73F5] font-bold">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setInspectedItem(null);
          }}
        >
          <div className="bg-white border border-[#E2E9F4] rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto text-[#20242D] shadow-2xl space-y-0">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-[#E2E9F4] flex items-start justify-between bg-[#F8FAFF]">
              <div>
                <span className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#3F73F5]">
                  Machinery Inspection Dossier
                </span>
                <h3 id="machinery-modal-title" className="text-lg sm:text-xl font-bold text-[#20242D] mt-0.5 sm:mt-1 font-heading">
                  {inspectedItem.name}
                </h3>
              </div>
              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={() => setInspectedItem(null)}
                aria-label="Close machinery modal"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[#687386] hover:text-[#20242D] hover:bg-[#EAF2FF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E9F4] bg-slate-100">
                <img
                  src={inspectedItem.image}
                  alt={inspectedItem.name}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-white/95 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[11px] sm:text-xs font-mono font-bold text-[#3F73F5] border border-[#E2E9F4]">
                  {inspectedItem.capacity}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div className="p-2.5 sm:p-3 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-body font-medium text-[#687386] uppercase tracking-[0.04em]">Pressure / Load</span>
                  <span className="text-xs sm:text-sm font-bold text-[#3F73F5] block font-mono">{inspectedItem.pressureRating}</span>
                </div>
                <div className="p-2.5 sm:p-3 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-body font-medium text-[#687386] uppercase tracking-[0.04em]">Flow Rate / Capacity</span>
                  <span className="text-xs sm:text-sm font-bold text-[#3F73F5] block font-mono">{inspectedItem.flowOutput}</span>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#3F73F5] font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#3F73F5]" />
                  <span>Compliance: {inspectedItem.certifications}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#687386] leading-relaxed font-body">
                  Deployed under strict HSE supervision with certified operators, calibrated pressure safety valves, and daily maintenance logs.
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-1 sm:pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleChatWhatsApp}
                  className="min-h-[44px] py-2.5 px-4 rounded-xl bg-white hover:bg-[#F8FAFF] border border-[#E2E9F4] text-xs font-bold uppercase text-[#20242D] transition-colors cursor-pointer flex items-center justify-center gap-2 font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleAllocateToRFP}
                  className="min-h-[44px] py-2.5 px-4 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-xs font-bold uppercase text-white transition-all shadow-md shadow-[#3F73F5]/25 flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
                >
                  <span>Attach to RFP</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
