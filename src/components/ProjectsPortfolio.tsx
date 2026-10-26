import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { 
  projectSectorCategories, 
  type ProjectItem 
} from '../data/content';
import { track } from '../services/analytics';
import { useWhatsApp } from '../context/WhatsAppContext';
import { useContent } from '../context/ContentContext';
import { SectionLabel } from './ui/SectionLabel';

export const ProjectsPortfolio: FC = () => {
  const navigate = useNavigate();
  const { projects } = useContent();
  const [activeSector, setActiveSector] = useState<typeof projectSectorCategories[number]>('All Sectors');
  const [dossierProject, setDossierProject] = useState<ProjectItem | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const { openWhatsApp } = useWhatsApp();

  const filteredProjects = activeSector === 'All Sectors'
    ? projects
    : projects.filter(p => p.sector === activeSector);

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
    navigate('/rfp-portal');
  };

  return (
    <div className="space-y-8">
      
      {/* Header and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#E2E9F4] pb-4 sm:pb-6">
        <div>
          <SectionLabel number="03" name="CASE STUDIES" className="mb-1.5 sm:mb-2" />
          <h2 className="text-xl sm:text-3xl font-semibold text-[#20242D] tracking-[-0.02em] font-heading">
            Projects & Infrastructure Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-xl font-body leading-relaxed">
            Selected major works completed for transit authorities, highways, and enterprise campuses.
          </p>
        </div>

        {/* Segmented Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl shrink-0 -mx-1 px-1" role="group" aria-label="Project Sectors">
          {projectSectorCategories.map((sector) => {
            const isSelected = activeSector === sector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => handleFilterChange(sector)}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] ${
                  isSelected
                    ? 'bg-[#3F73F5] text-white shadow-xs'
                    : 'text-[#687386] hover:text-[#3F73F5] hover:bg-white'
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with Smooth AnimatePresence + Layout Animation */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
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
              className="group relative bg-white border border-[#E2E9F4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs hover:border-[#3F73F5] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
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
                  <span className="text-[12px] font-body font-medium text-[#3F73F5] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#E2E9F4] shadow-xs">
                    {project.sector}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#3F73F5] bg-[#EAF2FF]/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#3F73F5]/25 shadow-xs">
                    {project.timeline}
                  </span>
                </div>

                {/* Floating "View Dossier" hover chip on image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-[#3F73F5] text-white text-xs font-bold font-heading uppercase tracking-wider shadow-lg shadow-[#3F73F5]/30 flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                    <span>Inspect Case Dossier</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </div>

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#65B5FF] text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#65B5FF] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug font-heading">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Parameters */}
              <div className="p-3.5 sm:p-5 bg-[#F8FAFF] border-t border-[#E2E9F4] flex items-center justify-between">
                <div>
                  <span className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#687386] block">
                    {project.metricLabel}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#3F73F5] font-mono">
                    {project.metric}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#3F73F5] group-hover:text-[#2454C6] transition-colors font-heading">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDossierProject(null);
          }}
        >
          <div className="bg-white border border-[#E2E9F4] rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto text-[#20242D] shadow-2xl space-y-0">
            
            <div className="p-4 sm:p-6 border-b border-[#E2E9F4] flex items-start justify-between bg-[#F8FAFF]">
              <div>
                <span className="text-[11px] sm:text-[12px] font-body font-medium uppercase tracking-[0.04em] text-[#3F73F5]">
                  {dossierProject.sector} Milestone
                </span>
                <h3 id="dossier-modal-title" className="text-lg sm:text-xl font-bold text-[#20242D] mt-0.5 sm:mt-1 font-heading">
                  {dossierProject.title}
                </h3>
                <p className="text-xs text-[#687386] mt-0.5 flex items-center gap-1 font-body">
                  <MapPin className="w-3.5 h-3.5 text-[#3F73F5]" />
                  <span>{dossierProject.location}</span>
                </p>
              </div>
              <button
                ref={modalCloseBtnRef}
                type="button"
                onClick={() => setDossierProject(null)}
                aria-label="Close project dossier"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[#687386] hover:text-[#20242D] hover:bg-[#EAF2FF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              <div className="relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E9F4] bg-slate-100">
                <img
                  src={dossierProject.image}
                  alt={dossierProject.title}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                <div className="p-2.5 sm:p-3 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-body font-medium text-[#687386] uppercase tracking-[0.04em]">Total Execution Scale</span>
                  <span className="text-xs sm:text-sm font-bold text-[#3F73F5] block font-mono">{dossierProject.metric}</span>
                </div>
                <div className="p-2.5 sm:p-3 bg-[#F8FAFF] border border-[#E2E9F4] rounded-xl space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-body font-medium text-[#687386] uppercase tracking-[0.04em]">Turnaround Speed</span>
                  <span className="text-xs sm:text-sm font-bold text-[#3F73F5] block font-mono">{dossierProject.timeline}</span>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2 text-xs text-[#20242D] bg-[#F8FAFF] p-3.5 sm:p-4 rounded-xl border border-[#E2E9F4] font-body">
                <div>
                  <strong className="text-[#20242D] font-heading">Coating & Engineering Spec:</strong> {dossierProject.specification}
                </div>
                <div>
                  <strong className="text-[#20242D] font-heading">Substrate Alignment:</strong> {dossierProject.substrate}
                </div>
                <div className="flex items-center gap-1.5 text-[#3F73F5] font-bold pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#3F73F5]" />
                  <span>Compliance Audit: {dossierProject.safetyStatus}</span>
                </div>
              </div>

              {/* Contextual WhatsApp and Request Bid CTA */}
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
                  onClick={handleRequestBid}
                  className="min-h-[44px] py-2.5 px-5 rounded-xl bg-[#3F73F5] hover:bg-[#2454C6] text-xs font-bold uppercase text-white transition-all shadow-md shadow-[#3F73F5]/25 flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5]"
                >
                  <span>Request Similar RFP</span>
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
