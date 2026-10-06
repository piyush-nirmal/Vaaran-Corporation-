import { useState } from 'react';
import type { FC } from 'react';
import { ShieldCheck, X, ArrowRight } from 'lucide-react';
import sprayRigImg from '../assets/images/machinery_airless_spray_1791032370111.jpg';
import fabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import transitImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';

interface EquipmentItem {
  id: string;
  name: string;
  category: 'coating' | 'blasting' | 'welding' | 'access';
  capacity: string;
  application: string;
  availability: 'Active Deployment' | 'Ready in Yard' | 'Scheduled';
  pressureRating: string;
  flowOutput: string;
  certifications: string;
  image: string;
}

const equipmentData: EquipmentItem[] = [
  {
    id: 'airless-spray',
    name: 'Heavy Industrial Airless Spray Plants',
    category: 'coating',
    capacity: '4 Mobile Units',
    application: 'High-volume infrastructure & viaduct coating',
    availability: 'Active Deployment',
    pressureRating: '3,300 PSI (227 Bar)',
    flowOutput: '8.3 Liters / Min Continuous',
    certifications: 'ATEX Zone 1 Explosion Proof',
    image: sprayRigImg,
  },
  {
    id: 'sand-blasting',
    name: 'Mobile Pressurized Sand Blasting Rigs',
    category: 'blasting',
    capacity: '2 Heavy Rigs',
    application: 'Sa 2.5 and Sa 3.0 surface profile preparation',
    availability: 'Ready in Yard',
    pressureRating: '175 CFM @ 125 PSI',
    flowOutput: '450 sq.ft. / Hour',
    certifications: 'ASME Section VIII Pressure Vessel',
    image: facilityImg,
  },
  {
    id: 'mig-tig-welding',
    name: 'Structural MIG / TIG Inverter Stations',
    category: 'welding',
    capacity: '8 Heavy Stations',
    application: 'Display gantries, trusses, and structural joint fabrication',
    availability: 'Active Deployment',
    pressureRating: '400 Amp @ 60% Duty Cycle',
    flowOutput: '0.8mm – 1.6mm Wire Feed',
    certifications: 'AWS D1.1 Structural Certified',
    image: fabImg,
  },
  {
    id: 'aluminum-scaffolding',
    name: 'Modular Aluminum High-Altitude Systems',
    category: 'access',
    capacity: '2,500 m² Decking',
    application: 'Elevated transit viaducts and sky-gantry work',
    availability: 'Ready in Yard',
    pressureRating: 'Safe Working Load 200 kg/m²',
    flowOutput: 'Up to 24m Elevation Reach',
    certifications: 'EN 1004 & OSHA Compliant',
    image: transitImg,
  },
];

const categoryLabels: Record<string, string> = {
  all: 'All Fleet Assets',
  coating: 'Coating Plants',
  blasting: 'Abrasive Blasting',
  welding: 'Welding Stations',
  access: 'Access Systems',
};

export const EquipmentGrid: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [inspectedItem, setInspectedItem] = useState<EquipmentItem | null>(null);

  const filteredItems = selectedFilter === 'all'
    ? equipmentData
    : equipmentData.filter(item => item.category === selectedFilter);

  const handleAllocate = () => {
    setInspectedItem(null);
    const rfp = document.getElementById('rfp-quote');
    if (rfp) {
      rfp.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Section Header with Clean Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-vrnOrange font-bold">
            Certified Contractor Fleet
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
            Operational Fleet & Machinery Deck
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
            Mechanized asset inventory deployed for municipal transit, surface preparation, and structural erection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-slate-100 border border-slate-200/80 rounded-xl shrink-0">
          {Object.entries(categoryLabels).map(([key, label]) => {
            const isSelected = selectedFilter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedFilter(key)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap font-display ${
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

      {/* Grid of Equipment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setInspectedItem(item)}
            className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-vrnNavy hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            {/* Visual Media Header */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border backdrop-blur-md ${
                  item.availability === 'Active Deployment'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-cyan-50 text-vrnCyan-dark border-cyan-300'
                }`}>
                  {item.availability}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono font-semibold uppercase text-slate-400">
                  {item.capacity} Available
                </div>
                <h3 className="text-base font-bold text-vrnNavy group-hover:text-vrnOrange transition-colors mt-0.5 leading-snug font-display">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-sans">
                  {item.application}
                </p>
              </div>

              {/* Unboxed Metadata Parameters */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between items-center text-slate-500">
                  <span className="text-[10px] uppercase font-semibold">Rating</span>
                  <span className="text-slate-800 font-bold">{item.pressureRating}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500">
                  <span className="text-[10px] uppercase font-semibold">Cert</span>
                  <span className="text-vrnCyan-dark font-bold text-[11px] truncate max-w-[130px]">{item.certifications}</span>
                </div>
              </div>

              {/* Interactive Inspect Cue */}
              <div className="pt-2 flex items-center justify-between text-xs text-vrnNavy font-bold group-hover:text-vrnOrange transition-colors">
                <span className="text-[11px]">Inspect Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Machinery Technical Inspector Modal (Light Theme) */}
      {inspectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full text-slate-900 overflow-hidden shadow-2xl space-y-0">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div>
                <span className="text-xs font-mono text-vrnOrange uppercase tracking-wider font-bold">
                  Machinery Inspection Dossier
                </span>
                <h3 className="text-xl font-black text-vrnNavy mt-1 font-display">
                  {inspectedItem.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectedItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={inspectedItem.image}
                  alt={inspectedItem.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono font-bold text-vrnNavy border border-slate-200">
                  {inspectedItem.capacity}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Pressure / Load</span>
                  <span className="text-sm font-bold text-vrnNavy block">{inspectedItem.pressureRating}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Flow Rate / Capacity</span>
                  <span className="text-sm font-bold text-vrnCyan-dark block">{inspectedItem.flowOutput}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Compliance: {inspectedItem.certifications}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-sans">
                  Deployed under strict HSE supervision with certified operators, calibrated pressure safety valves, and daily maintenance logs.
                </p>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setInspectedItem(null)}
                  className="w-1/2 py-3 px-4 rounded-xl border border-slate-200 text-xs font-bold uppercase text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
                <button
                  type="button"
                  onClick={() => handleAllocate()}
                  className="w-1/2 py-3 px-4 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-xs font-bold uppercase text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-display"
                >
                  <span>Attach to RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
