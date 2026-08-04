import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cog, Layers, Hammer, Activity, ArrowRight, X } from 'lucide-react';

interface EquipmentItem {
  id: string;
  name: string;
  capacity: string;
  application: string;
  availability: 'Active Deployment' | 'Ready in Yard' | 'Under Maintenance';
  safetyVerified: boolean;
  icon: 'spray' | 'blast' | 'weld' | 'scaffold';
  image: string;
}

const equipmentData: EquipmentItem[] = [
  {
    id: 'airless-spray',
    name: 'Heavy Duty Airless Spray Plants',
    capacity: '4 Units',
    application: 'High-volume infrastructure coating',
    availability: 'Active Deployment',
    safetyVerified: true,
    icon: 'spray',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sand-blasting',
    name: 'Mobile Sand Blasting Rigs',
    capacity: '2 Units',
    application: 'Heavy surface preparation (Sa 2.5 standard)',
    availability: 'Ready in Yard',
    safetyVerified: true,
    icon: 'blast',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'mig-tig-welding',
    name: 'Structural MIG/TIG Welding Stations',
    capacity: '8 Units',
    application: 'Heavy Display & Gantry steel fabrication',
    availability: 'Active Deployment',
    safetyVerified: true,
    icon: 'weld',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aluminum-scaffolding',
    name: 'Mobile Aluminum Scaffolding Systems',
    capacity: '2,500 sq.m.',
    application: 'High-altitude transit & viaduct works',
    availability: 'Ready in Yard',
    safetyVerified: true,
    icon: 'scaffold',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80',
  },
];

const iconMap = {
  spray: Activity,
  blast: Cog,
  weld: Hammer,
  scaffold: Layers,
};

export const EquipmentGrid: FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedId]);

  const selectedItem = equipmentData.find(item => item.id === selectedId);
  const SelectedIcon = selectedItem ? iconMap[selectedItem.icon] : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {equipmentData.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5 relative z-10"
            >
              {/* Minimal Initial State - Top: Image Section */}
              <div className="relative h-56 sm:h-52 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Minimal Initial State - Bottom: Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
                <h3 className="text-lg font-bold text-slate-800 leading-snug">
                  {item.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded State Overlay using Portal to escape stacking contexts */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedId && selectedItem && SelectedIcon && (
            <div className="fixed inset-0 flex items-center justify-center px-4 md:px-6" style={{ zIndex: 99999 }}>
              
              {/* Darkened blurred background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
              />
              
              {/* The Expanded Card Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 30, mass: 1 }}
                className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-gray-100 flex flex-col relative z-10 my-8 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center z-20 text-slate-700 hover:text-apcoRed hover:bg-white transition-all shadow-sm group"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Top: Image Section */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 inset-x-4 flex justify-between items-start z-10 pr-12">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm border ${
                      selectedItem.availability === 'Active Deployment' ? 'bg-white/95 text-green-600 border-green-100' :
                      selectedItem.availability === 'Ready in Yard' ? 'bg-white/95 text-blue-600 border-blue-100' :
                      'bg-white/95 text-amber-600 border-amber-100'
                    }`}>
                      {selectedItem.availability}
                    </span>
                    
                    {selectedItem.safetyVerified && (
                      <div className="bg-white/95 backdrop-blur-md p-2 rounded-full border border-gray-100 shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-slate-700" strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: Content Section */}
                <div className="p-8 md:p-10 flex flex-col relative bg-white">
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-7 right-10 w-14 h-14 bg-apcoRed rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-500/30">
                    <SelectedIcon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 leading-snug mb-4 pr-12">
                    {selectedItem.name}
                  </h3>
                  
                  {/* Extra Content */}
                  <div>
                    <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
                      {selectedItem.application}
                    </p>

                    {/* Specs Footer */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                          Capacity
                        </span>
                        <span className="text-base font-bold text-slate-800">
                          {selectedItem.capacity}
                        </span>
                      </div>
                      <button className="flex items-center gap-2 text-apcoRed hover:text-slate-900 transition-colors group/btn">
                        <span className="text-[11px] font-bold uppercase tracking-widest">Inquire</span>
                        <div className="w-8 h-8 rounded-full bg-red-50 group-hover/btn:bg-slate-100 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
