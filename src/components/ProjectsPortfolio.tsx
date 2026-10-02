import { useState } from 'react';
import type { FC } from 'react';
import { Briefcase, MapPin, ShieldCheck, Wrench } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  sector: 'Transit Infrastructure' | 'Commercial Branding' | 'Civil Works';
  metric: string;
  image: string;
  location: string;
  equipment: string;
  safetyStatus: string;
}

const projectsData: Project[] = [
  {
    id: 'metro-viaduct',
    title: 'Metro Line Viaduct Structural Coating',
    sector: 'Transit Infrastructure',
    metric: '45,000 sq.m.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    location: 'Mumbai Metro Line 3 Corridor',
    equipment: 'Airless Spray Plants & Blasting Rigs',
    safetyStatus: '100% OSHA Compliant',
  },
  {
    id: 'highway-gantry',
    title: 'High-Speed Expressway Gantry Fabrication',
    sector: 'Civil Works',
    metric: '12 Units Installed',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    location: 'Western Express Highway Toll Plaza',
    equipment: 'Structural Welding Stations & Gantries',
    safetyStatus: 'Structural Certification Logged',
  },
  {
    id: 'acp-display',
    title: 'Corporate ACP Display & Sky-Sign Setup',
    sector: 'Commercial Branding',
    metric: '180 ft Elevation',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    location: 'Bandra-Kurla Complex Corporate HQ',
    equipment: 'Aluminum Scaffolding Systems & LED CNC letters',
    safetyStatus: 'High-Altitude Safety Verified',
  },
];

const categories = ['All', 'Transit Infrastructure', 'Commercial Branding', 'Civil Works'] as const;

export const ProjectsPortfolio: FC = () => {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>('All');

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter((p) => p.sector === activeTab);

  return (
    <div className="bg-white border border-gray-200/60 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-950/5">
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200/60 pb-6 mb-8 gap-4">
        <div>
          <span className="text-apcoRed font-bold tracking-widest text-xs uppercase block mb-1">
            Varan Corporation
          </span>
          <h2 className="text-2xl font-bold uppercase text-apcoBlue tracking-wide">
            Projects Portfolio
          </h2>
          <p className="text-xs text-apcoMuted uppercase tracking-wider font-semibold mt-1">
            Explore execution milestones and structural setups across municipal & private sectors.
          </p>
        </div>
      </div>

      {/* Filter Tabs Navigation */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-200/60 mb-8">
        {categories.map((cat) => {
          const isActive = activeTab === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 border rounded-lg ${
                isActive
                  ? 'bg-apcoBlue text-white border-transparent shadow-md shadow-slate-950/10'
                  : 'bg-white text-apcoMuted hover:text-apcoBlue hover:bg-gray-50 border-gray-200/60 shadow-sm'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/60 shadow-md aspect-[4/3] w-full bg-slate-950 cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />

            {/* Base Overlay Gradient (Always Visible for Contrast) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10"></div>

            {/* Default Unhovered Typography Title info */}
            <div className="absolute bottom-6 left-6 right-6 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
              <span className="text-[10px] uppercase font-bold text-white tracking-widest bg-apcoRed px-2.5 py-1 rounded-md mb-2 inline-block">
                {project.sector}
              </span>
              <h3 className="text-base font-bold uppercase text-white tracking-wide leading-snug">
                {project.title}
              </h3>
            </div>

            {/* Premium Glassmorphic Overlay (Slides/Fades in on Hover) */}
            <div className="absolute inset-0 z-30 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 border border-white/10 rounded-2xl">
              <div className="space-y-4 text-white">
                <div>
                  <span className="text-[10px] uppercase font-bold text-white tracking-widest bg-apcoRed px-2 py-0.5 rounded">
                    {project.sector}
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-wide mt-2 leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-apcoRed flex-shrink-0" />
                    <span className="text-slate-300">
                      <strong className="text-white">Location:</strong> {project.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-apcoRed flex-shrink-0" />
                    <span className="text-slate-300">
                      <strong className="text-white">Metric:</strong> {project.metric}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-apcoRed flex-shrink-0" />
                    <span className="text-slate-300">
                      <strong className="text-white">Assets:</strong> {project.equipment}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">
                      <strong className="text-white">Status:</strong> {project.safetyStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
