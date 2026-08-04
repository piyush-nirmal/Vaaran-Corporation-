import { useState } from 'react';
import type { FC } from 'react';
import { Briefcase, MapPin, Wrench } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  sector: 'Marine & High-Rise Painting' | 'Civil Infrastructure' | 'Structural & Metro Works';
  client: string;
  metric: string;
  image: string;
  location: string;
  equipment: string;
  safetyStatus: string;
}

const projectsData: Project[] = [
  {
    id: 'bandra-worli-sea-link',
    title: 'Bandra–Worli Sea Link Marine Coating',
    sector: 'Marine & High-Rise Painting',
    client: 'MSRDC',
    metric: '100 Ft Elevation Above Sea',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    location: 'Mumbai Sea Link Corridor',
    equipment: 'Marine Safety Net Rigs & High-Elevation Cradles',
    safetyStatus: 'Anti-Carbonation Certified',
  },
  {
    id: 'vashi-flyover-lt',
    title: 'Vashi Flyover Protective Coating',
    sector: 'Marine & High-Rise Painting',
    client: 'Larsen & Toubro (L&T)',
    metric: 'Full Viaduct Protective Coating',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    location: 'Vashi Flyover, Navi Mumbai',
    equipment: 'Airless Spray Systems & Boom Lifts',
    safetyStatus: '100% Weather Resistant',
  },
  {
    id: 'bandra-versova-infra',
    title: 'Bandra–Versova Infrastructure Painting',
    sector: 'Marine & High-Rise Painting',
    client: 'Apco Infratech',
    metric: 'Express Infrastructure Scope',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    location: 'Bandra–Versova Coastal Corridor',
    equipment: 'Scaffolding & Structural Painting Rigs',
    safetyStatus: 'Site Clearances Approved',
  },
  {
    id: 'metro-rail-corridor-tata',
    title: 'Metro Rail Corridor Vikhroli–Ghatkopar & BKC',
    sector: 'Structural & Metro Works',
    client: 'TATA Group',
    metric: 'Metro Track & Station Structure',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    location: 'Vikhroli–Ghatkopar & BKC Metro',
    equipment: 'Steel Fabrication & Track Safety Nets',
    safetyStatus: 'TATA Safety Audit Passed',
  },
  {
    id: 'delhi-toll-infra',
    title: 'Delhi Toll Infrastructure Civil Construction',
    sector: 'Civil Infrastructure',
    client: 'MEP Infrastructure',
    metric: 'Toll Plaza Civil & Canopy Setup',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    location: 'Delhi Expressway Entry Corridor',
    equipment: 'Heavy Concrete Paving & Steel Fabrication Rigs',
    safetyStatus: 'Structural Clearance Logged',
  },
  {
    id: 'goa-bridge-project',
    title: 'Goa Infrastructure Bridge Painting',
    sector: 'Marine & High-Rise Painting',
    client: 'State Public Works',
    metric: 'Bridge Span Protective System',
    image: 'https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?auto=format&fit=crop&w=800&q=80',
    location: 'Goa River Bridge Structure',
    equipment: 'Sand Blasting & Anti-Carbonation Rigs',
    safetyStatus: 'ISO 9001 Standard Executed',
  },
];

const categories = ['All', 'Marine & High-Rise Painting', 'Civil Infrastructure', 'Structural & Metro Works'] as const;

const esteemedClients = [
  { name: 'MSRDC', type: 'Government' },
  { name: 'Larsen & Toubro (L&T)', type: 'Infrastructure Giant' },
  { name: 'TATA Group', type: 'Corporate' },
  { name: 'Godrej', type: 'Corporate' },
  { name: 'Amul (GCMMF)', type: 'Corporate' },
  { name: 'Apco Infratech', type: 'Infrastructure' },
  { name: 'MEP Infrastructure', type: 'Toll Operator' },
  { name: 'HCC', type: 'Infrastructure' },
  { name: 'NCC Limited', type: 'Infrastructure' },
  { name: 'HMM Infra Limited', type: 'Fabrication' },
  { name: 'Roadway Solutions', type: 'Highways' },
  { name: 'Pragati Infra', type: 'Civil Engineering' },
];

const getSectorPastelTheme = (sector: string) => {
  switch (sector) {
    case 'Marine & High-Rise Painting':
      return {
        bg: 'bg-sky-100',
        text: 'text-sky-800',
        border: 'border-sky-200',
        icon: 'text-sky-400',
      };
    case 'Civil Infrastructure':
      return {
        bg: 'bg-amber-100',
        text: 'text-amber-800',
        border: 'border-amber-200',
        icon: 'text-amber-400',
      };
    case 'Structural & Metro Works':
      return {
        bg: 'bg-rose-100',
        text: 'text-rose-800',
        border: 'border-rose-200',
        icon: 'text-rose-400',
      };
    default:
      return {
        bg: 'bg-slate-800',
        text: 'text-white',
        border: 'border-slate-800',
        icon: 'text-white',
      };
  }
};

export const ProjectsPortfolio: FC = () => {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>('All');

  const filteredProjects = activeTab === 'All'
    ? projectsData
    : projectsData.filter((p) => p.sector === activeTab);

  return (
    <div className="space-y-24">
      {/* Sleek Glass Filter Tabs with Pastel Themes */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto bg-white p-2.5 rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {categories.map((cat) => {
          const isActive = activeTab === cat;
          const theme = getSectorPastelTheme(cat);
          
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500 rounded-full border ${
                isActive
                  ? `${theme.bg} ${theme.text} ${theme.border} shadow-sm`
                  : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const theme = getSectorPastelTheme(project.sector);
          return (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 aspect-[4/5] w-full bg-white cursor-pointer transition-all duration-700 border border-slate-100/50"
            >
              {/* Project Image */}
              <div className="absolute inset-0 p-4 transition-all duration-700 group-hover:p-0">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden group-hover:rounded-none transition-all duration-700 bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Premium Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>

              {/* Default Unhovered Title info */}
              <div className="absolute bottom-10 left-10 right-10 z-20 transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug drop-shadow-sm bg-white/95 backdrop-blur-md px-6 py-5 rounded-2xl inline-block max-w-[95%] shadow-lg">
                  {project.title}
                </h3>
              </div>

              {/* Info Reveal on Hover */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                <div className="space-y-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                  <div>
                    <span className={`text-[10px] uppercase font-bold tracking-[0.2em] px-3.5 py-1.5 rounded-full border shadow-sm inline-block ${theme.bg} ${theme.text} ${theme.border}`}>
                      {project.client}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight mt-6 leading-snug text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4 pt-6 mt-4 border-t border-white/20 text-xs font-medium tracking-wide text-slate-300">
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-4 h-4 flex-shrink-0 ${theme.icon}`} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wrench className={`w-4 h-4 flex-shrink-0 ${theme.icon}`} />
                      <span className="line-clamp-1">{project.metric}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className={`w-4 h-4 flex-shrink-0 ${theme.icon}`} />
                      <span className="line-clamp-1">{project.equipment}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Esteemed Clients - Ultra Minimal */}
      <div className="pt-32 border-t border-slate-200/60 text-center">
        <h3 className="text-sm font-bold uppercase text-slate-400 tracking-[0.3em] mb-12">
          Trusted By Industry Leaders
        </h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {esteemedClients.map((client, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
            >
              <div className="text-xl font-bold text-slate-700 tracking-tight group-hover:text-apcoBlue transition-colors">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
