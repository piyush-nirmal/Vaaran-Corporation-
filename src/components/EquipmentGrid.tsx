import type { FC } from 'react';
import { Wrench, ShieldCheck, Cog, Layers, Hammer, Activity } from 'lucide-react';

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
  return (
    <div className="bg-white border border-gray-200/60 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-950/5">
      {/* Component Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200/60 pb-6 mb-8 gap-4">
        <div>
          <span className="text-apcoRed font-bold tracking-widest text-xs uppercase block mb-1">
            Varan Corporation
          </span>
          <h2 className="text-2xl font-bold uppercase text-apcoBlue tracking-wide">
            Heavy Machinery & Fleet
          </h2>
          <p className="text-xs text-apcoMuted uppercase tracking-wider font-semibold mt-1">
            Active industrial assets certified for Mumbai transit & infrastructure operations.
          </p>
        </div>
        <div className="flex items-center gap-2 text-apcoBlue bg-slate-50 border border-gray-200/60 px-4 py-2 rounded-lg text-xs font-bold uppercase self-start md:self-auto relative z-10">
          <Wrench className="w-4 h-4 text-apcoRed" />
          <span>Fleet Capacity: 3,000+ Units Combined</span>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentData.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-slate-950 border border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[280px]"
            >
              {/* Background Image Watermark with premium dark linear gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-all duration-500"></div>
              </div>

              {/* Card content stacked above background */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Header & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-900 border border-slate-800 text-blue-400 rounded-xl group-hover:text-blue-300 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        item.availability === 'Active Deployment'
                          ? 'bg-green-950/50 text-green-400 border-green-900/50'
                          : item.availability === 'Ready in Yard'
                          ? 'bg-blue-950/50 text-blue-400 border-blue-900/50'
                          : 'bg-yellow-950/50 text-yellow-400 border-yellow-900/50'
                      }`}
                    >
                      {item.availability}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-bold text-white text-base uppercase tracking-wide mb-2 group-hover:text-blue-100 transition-colors">
                    {item.name}
                  </h3>
                  
                  {/* Specs List */}
                  <div className="space-y-2 mt-4 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400 font-medium uppercase tracking-wider text-[10px]">Operational Volume</span>
                      <span className="font-extrabold text-blue-400 uppercase tracking-wide">{item.capacity}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800/80">
                      <span className="text-slate-400 font-medium uppercase tracking-wider text-[10px]">Primary Application</span>
                      <span className="font-extrabold text-blue-400 uppercase tracking-wide text-right max-w-[180px] line-clamp-1">{item.application}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {item.safetyVerified && (
                    <div className="flex items-center gap-1.5 text-[10px] text-green-400 font-bold uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-green-400" />
                      <span>Safety Logged</span>
                    </div>
                  )}
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Asset ID: {item.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
