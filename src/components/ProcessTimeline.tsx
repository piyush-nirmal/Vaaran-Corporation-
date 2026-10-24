import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { processTimelineSteps } from '../data/content';
import { SectionLabel } from './ui/SectionLabel';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StageTheme {
  step: string;
  bgWash: string;
  border: string;
  badgeBg: string;
  specPill: string;
  subtitleText: string;
  gateText: string;
  gateBg: string;
  arrowColor: string;
}

const stagePastelThemes: StageTheme[] = [
  {
    step: '01',
    bgWash: 'from-[#F0F5FF] via-[#F8FAFF] to-white',
    border: 'border-[#D9E5F7] hover:border-[#3F73F5]',
    badgeBg: 'bg-[#3F73F5]',
    specPill: 'bg-[#EBF2FE] text-[#1E4FD9] border-[#D0E0FB]',
    subtitleText: 'text-[#2557DE]',
    gateText: 'text-[#1E4FD9]',
    gateBg: 'bg-[#EBF2FE]',
    arrowColor: 'text-[#3F73F5]',
  },
  {
    step: '02',
    bgWash: 'from-[#FFF8EE] via-[#FFFBF6] to-white',
    border: 'border-[#F2E4D2] hover:border-[#E67E22]',
    badgeBg: 'bg-[#E67E22]',
    specPill: 'bg-[#FEF3E2] text-[#B45309] border-[#FCE1C2]',
    subtitleText: 'text-[#C2620A]',
    gateText: 'text-[#B45309]',
    gateBg: 'bg-[#FEF3E2]',
    arrowColor: 'text-[#E67E22]',
  },
  {
    step: '03',
    bgWash: 'from-[#F1FBF5] via-[#F8FCF9] to-white',
    border: 'border-[#CFECDB] hover:border-[#10B981]',
    badgeBg: 'bg-[#059669]',
    specPill: 'bg-[#E7F8EF] text-[#065F46] border-[#BCEDD3]',
    subtitleText: 'text-[#047857]',
    gateText: 'text-[#065F46]',
    gateBg: 'bg-[#E7F8EF]',
    arrowColor: 'text-[#059669]',
  },
  {
    step: '04',
    bgWash: 'from-[#F8F4FD] via-[#FAF7FE] to-white',
    border: 'border-[#E7DEF8] hover:border-[#7C3AED]',
    badgeBg: 'bg-[#7C3AED]',
    specPill: 'bg-[#F2EDFD] text-[#5B21B6] border-[#E1D3FB]',
    subtitleText: 'text-[#6D28D9]',
    gateText: 'text-[#5B21B6]',
    gateBg: 'bg-[#F2EDFD]',
    arrowColor: 'text-[#7C3AED]',
  },
  {
    step: '05',
    bgWash: 'from-[#EFF9FB] via-[#F6FCFD] to-white',
    border: 'border-[#CCE8EE] hover:border-[#0284C7]',
    badgeBg: 'bg-[#0284C7]',
    specPill: 'bg-[#E2F5F9] text-[#075985] border-[#B7E5EE]',
    subtitleText: 'text-[#0369A1]',
    gateText: 'text-[#075985]',
    gateBg: 'bg-[#E2F5F9]',
    arrowColor: 'text-[#0284C7]',
  },
];

export const ProcessTimeline: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <SectionLabel number="01B" name="EXECUTION PIPELINE" className="mb-2" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#20242D] tracking-tight font-heading">
            Contractor Methodology & Inspection Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-2xl font-body">
            Rigorous 5-stage quality protocol from initial chloride titration to final statutory sign-off and multi-year handover dossier.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EAF2FF] border border-[#D6E4F7] text-[#2454C6] text-xs font-mono font-semibold shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#3F73F5]" />
          <span>ISO & SSPC Certified Workflow</span>
        </div>
      </div>

      {/* Pipeline Progression Ribbon (Desktop) with Pastel Stage Accents */}
      <div className="hidden xl:block p-4 rounded-2xl bg-[#F8FAFF] border border-[#E2E9F4]">
        <div className="grid grid-cols-5 items-center gap-2 text-xs">
          {processTimelineSteps.map((step, idx) => {
            const theme = stagePastelThemes[idx] || stagePastelThemes[0];
            return (
              <div key={`ribbon-${step.step}`} className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span className={`w-6 h-6 rounded-md ${theme.badgeBg} text-white flex items-center justify-center font-mono font-bold text-[11px] shadow-xs shrink-0`}>
                    {step.step}
                  </span>
                  <span className="font-heading font-semibold text-[#20242D] truncate">
                    {step.title.split('&')[0].trim()}
                  </span>
                </div>
                {idx < processTimelineSteps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0 mx-1" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5-Stage Responsive Grid with Pastel Business Aesthetic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
        {processTimelineSteps.map((step, index) => {
          const theme = stagePastelThemes[index] || stagePastelThemes[0];

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.985 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative bg-gradient-to-b ${theme.bgWash} border ${theme.border} rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4`}
            >
              {/* Top Bar: Step Number & Specification Standard */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className={`w-10 h-10 rounded-xl ${theme.badgeBg} text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0`}>
                    {step.step}
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${theme.specPill} border px-2.5 py-1 rounded-md text-right leading-tight max-w-[160px] shadow-2xs`}>
                    {step.specStandard}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1.5 pt-1">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider ${theme.subtitleText} block`}>
                    {step.subtitle}
                  </span>
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#20242D] font-heading leading-snug">
                    {step.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs text-[#687386] leading-relaxed font-body">
                  {step.description}
                </p>
              </div>

              {/* Quality Gate Checkpoint Footer */}
              <div className="pt-3 border-t border-[#E2E9F4]/80 flex items-center justify-between text-[11px] font-mono font-semibold">
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md ${theme.gateBg} ${theme.gateText}`}>
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">QA/QC Checkpoint</span>
                </div>
                <span className="text-[#687386] font-medium text-[10px]">
                  Gate 0{index + 1}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
