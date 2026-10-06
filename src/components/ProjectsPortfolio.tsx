import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { 
  projectsData, 
  projectSectorCategories, 
  type ProjectItem 
} from '../data/content';
import { track } from '../services/analytics';
import { useWhatsApp } from '../context/WhatsAppContext';
import { SectionLabel } from './ui/SectionLabel';

export const ProjectsPortfolio: FC = () => {
  const [activeSector, setActiveSector] = useState<typeof projectSectorCategories[number]>('All Sectors');
  const [dossierProject, setDossierProject] = useState<ProjectItem | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const { openWhatsApp } = useWhatsApp();

  const filteredProjects = activeSector === 'All Sectors'
    ? projectsData
    : projectsData.filter(p => p.sector === activeSector);

  const handleFilterChange = (sector: typeof projectSectorCategories[number]) => {
    setActiveSector(sector);
    track('filter_change', { type: 'project_sector', sector });
  };

  const handleOpenDossier = (project: ProjectItem) => {
    setDossierProject(project);
    track('project_modal_open', {
      projectId: project.id,
      projectTitle: project.title,
      sector: project.sector,
    });
  };

  useEffect(() => {
    if (!dossierProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDossierProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => modalCloseBtnRef.current?.focus(), 50);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dossierProject]);

  const handleChatWhatsApp = () => {
    if (!dossierProject) return;
    openWhatsApp(
      `Hi, I'm interested in a project similar to ${dossierProject.title} (${dossierProject.location}).`,
      'project_modal'
    );
  };

  const handleRequestBid = () => {
    setDossierProject(null);
    track('cta_click', { location: 'project_modal_rfp', target: 'rfp-quote' });
    document.getElementById('rfp-quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      
      {/* Header and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <SectionLabel number="03" name="CASE STUDIES" className="mb-2" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-vrnNavy tracking-tight font-display">
            Projects & Infrastructure Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
            Selected major works completed for transit authorities, highways, and enterprise campuses.
          </p>
        </div>

        {/* Segmented Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-slate-100 border border-slate-200/80 rounded-xl shrink-0" role="group" aria-label="Project Sectors">
          {projectSectorCategories.map((sector) => {
            const isSelected = activeSector === sector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => handleFilterChange(sector)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                  isSelected
                    ? 'bg-vrnNavy text-white shadow-xs'
                    : 'text-slate-700 hover:text-vrnNavy hover:bg-slate-200/60'
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with Smooth AnimatePresence + Layout Animation (Task 4) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              key={project.id}
              tabIndex={0}
              role="button"
              aria-label={`Open case dossier for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenDossier(project);
                }
              }}
              onClick={() => handleOpenDossier(project)}
              className="group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-navy-sm hover:border-vrnNavy hover:shadow-navy-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
            >
              {/* Visual Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={375}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Badges Ribbon */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono font-bold text-vrnNavy bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                    {project.sector}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-900 bg-emerald-50/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-300 shadow-xs">
                    {project.timeline}
                  </span>
                </div>

                {/* Floating "View Dossier" hover chip on image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-vrnOrange text-slate-950 text-xs font-bold font-display uppercase tracking-wider shadow-lg shadow-orange-500/30 flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                    <span>Inspect Case Dossier</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-950" />
                  </span>
                </div>

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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

                <div className="flex items-center gap-1 text-xs font-bold text-vrnNavy group-hover:text-vrnOrange transition-colors font-display">
                  <span>View Case Dossier</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Dossier Modal with Backdrop Blur & Scale transition */}
      {dossierProject && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDossierProject(null);
          }}
        >
          <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full text-slate-900 overflow-hidden shadow-2xl space-y-0">
            
            <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
              <div>
                <span className="text-xs font-mono text-vrnNavy uppercase tracking-wider font-bold">
                  {dossierProject.sector} Milestone
                </span>
                <h3 id="dossier-modal-title" className="text-xl font-black text-vrnNavy mt-1 font-display">
                  {dossierProject.title}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 flex items-center gap-1 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{dossierProject.location}</span>
                </p>
              </div>
              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={() => setDossierProject(null)}
                aria-label="Close project dossier"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={dossierProject.image}
                  alt={dossierProject.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Total Execution Scale</span>
                  <span className="text-sm font-bold text-vrnNavy block font-mono">{dossierProject.metric}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Turnaround Speed</span>
                  <span className="text-sm font-bold text-emerald-800 block font-mono">{dossierProject.timeline}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-slate-50/70 p-4 rounded-xl border border-slate-200 font-sans">
                <div>
                  <strong className="text-slate-900 font-display">Coating & Engineering Spec:</strong> {dossierProject.specification}
                </div>
                <div>
                  <strong className="text-slate-900 font-display">Substrate Alignment:</strong> {dossierProject.substrate}
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold pt-1">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                  <span>Compliance Audit: {dossierProject.safetyStatus}</span>
                </div>
              </div>

              {/* Contextual WhatsApp and Request Bid CTA */}
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
                  onClick={handleRequestBid}
                  className="py-3 px-5 rounded-xl bg-vrnOrange hover:bg-vrnOrange-hover text-xs font-black uppercase text-slate-950 transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange"
                >
                  <span>Request Similar RFP</span>
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
