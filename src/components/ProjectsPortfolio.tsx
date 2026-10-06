import { useState } from 'react';
import type { FC } from 'react';
import { MapPin, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import transitCoatingImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';
import facilityImg from '../assets/images/industrial_facility_hub_1791032407824.jpg';

interface Project {
  id: string;
  title: string;
  sector: 'Transit Infrastructure' | 'Commercial & Industrial' | 'Civil Highways';
  metric: string;
  metricLabel: string;
  image: string;
  location: string;
  specification: string;
  timeline: string;
  substrate: string;
  safetyStatus: string;
}

const projectsData: Project[] = [
  {
    id: 'metro-viaduct',
    title: 'Metro Line 3 Viaduct Structural Protective Coating',
    sector: 'Transit Infrastructure',
    metric: '45,000 m²',
    metricLabel: 'Surface Treated',
    image: transitCoatingImg,
    location: 'Mumbai Metro Line 3 Corridor',
    specification: 'Sa 2.5 Blast · 180µm Polyurethane Topcoat · ISO 12944 C5',
    timeline: 'Completed in 90 Days',
    substrate: 'Pre-stressed Reinforced Concrete (RCC) & Steel Brackets',
    safetyStatus: '100% Zero-Incident Logged',
  },
  {
    id: 'highway-gantry',
    title: 'High-Speed Expressway Gantry Alignment & Fabrication',
    sector: 'Civil Highways',
    metric: '18,500 MT',
    metricLabel: 'Structural Steel',
    image: steelFabImg,
    location: 'Western Express Highway Toll Concourse',
    specification: 'AWS D1.1 Full Penetration Welds · Hot-Dip Galvanized Base',
    timeline: '60-Day Turnaround',
    substrate: 'High-Strength Structural Hollow Sections (SHS)',
    safetyStatus: 'Structural Certification Logged',
  },
  {
    id: 'bkc-intermodal',
    title: 'BKC Intermodal Corporate Terminal & Sky-Sign Architecture',
    sector: 'Commercial & Industrial',
    metric: '180 ft',
    metricLabel: 'Elevation Reached',
    image: heroViaductImg,
    location: 'Bandra-Kurla Complex Corporate Park',
    specification: 'Modular Scaffolding Access · Wind Shear Tested (180 km/h)',
    timeline: 'Delivered 2 Weeks Ahead',
    substrate: 'Aluminium Composite Facades & Structural Trusses',
    safetyStatus: 'High-Altitude Safety Clearance',
  },
  {
    id: 'industrial-staging',
    title: 'Central Logistics Staging & Fleet Maintenance Hangar',
    sector: 'Commercial & Industrial',
    metric: '12,000 m²',
    metricLabel: 'Epoxy Decking',
    image: facilityImg,
    location: 'Bhiwandi Freight & Distribution Hub',
    specification: 'Self-Leveling Heavy Traffic Polyurethane Screed',
    timeline: '45 Days Full Execution',
    substrate: 'M35 Heavy Vehicle Industrial Flooring',
    safetyStatus: 'HSE Safety Audit Approved',
  },
];

const sectorCategories = ['All Sectors', 'Transit Infrastructure', 'Civil Highways', 'Commercial & Industrial'] as const;

export const ProjectsPortfolio: FC = () => {
  const [activeSector, setActiveSector] = useState<typeof sectorCategories[number]>('All Sectors');
  const [dossierProject, setDossierProject] = useState<Project | null>(null);

  const filteredProjects = activeSector === 'All Sectors'
    ? projectsData
    : projectsData.filter(p => p.sector === activeSector);

  return (
    <div className="space-y-8">
      
      {/* Header and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-vrnOrange font-bold">
            Documented Engineering Deployments
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight mt-1 font-display">
            Projects & Infrastructure Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
            Selected major works completed for transit authorities, highways, and enterprise campuses.
          </p>
        </div>

        {/* Segmented Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-slate-100 border border-slate-200/80 rounded-xl shrink-0">
          {sectorCategories.map((sector) => {
            const isSelected = activeSector === sector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setActiveSector(sector)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap font-display ${
                  isSelected
                    ? 'bg-vrnNavy text-white shadow-xs'
                    : 'text-slate-600 hover:text-vrnNavy hover:bg-slate-200/60'
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setDossierProject(project)}
            className="group relative bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-vrnNavy hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Unboxed Metadata Ribbon on Image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono font-bold text-vrnNavy bg-white/95 backdrop-blur-md px-2.5 py-1 rounded border border-slate-200">
                  {project.sector}
                </span>
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-300">
                  {project.timeline}
                </span>
              </div>

              {/* Bottom Card Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-vrnOrange shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-200 transition-colors font-display">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Card Footer Parameters */}
            <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">
                  {project.metricLabel}
                </span>
                <span className="text-base font-extrabold text-vrnNavy font-mono">
                  {project.metric}
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-vrnOrange group-hover:text-vrnOrange-hover transition-colors font-display">
                <span>View Case Dossier</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Dossier Modal */}
      {dossierProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full text-slate-900 overflow-hidden shadow-2xl space-y-0">
            
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div>
                <span className="text-xs font-mono text-vrnOrange uppercase tracking-wider font-bold">
                  {dossierProject.sector} Milestone
                </span>
                <h3 className="text-xl font-black text-vrnNavy mt-1 font-display">
                  {dossierProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-vrnOrange" />
                  <span>{dossierProject.location}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDossierProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={dossierProject.image}
                  alt={dossierProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Total Execution Scale</span>
                  <span className="text-sm font-bold text-vrnNavy block font-mono">{dossierProject.metric}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Turnaround Speed</span>
                  <span className="text-sm font-bold text-emerald-700 block font-mono">{dossierProject.timeline}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 bg-slate-50/70 p-4 rounded-xl border border-slate-200 font-sans">
                <div>
                  <strong className="text-slate-900 font-display">Coating & Engineering Spec:</strong> {dossierProject.specification}
                </div>
                <div>
                  <strong className="text-slate-900 font-display">Substrate Alignment:</strong> {dossierProject.substrate}
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold pt-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Compliance Audit: {dossierProject.safetyStatus}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setDossierProject(null)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold uppercase text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close Dossier
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDossierProject(null);
                    document.getElementById('rfp-quote')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-2.5 px-5 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-xs font-bold uppercase text-white transition-all shadow-md cursor-pointer font-display"
                >
                  Request Similar Scope RFP
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
