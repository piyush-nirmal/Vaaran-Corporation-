import type { FC } from 'react';
import { motion } from 'framer-motion';
import { processTimelineSteps } from '../data/content';
import { SectionLabel } from './ui/SectionLabel';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

import step1Img from '../assets/images/process/step1_inspection.jpg';
import step2Img from '../assets/images/process/step2_blasting.jpg';
import step3Img from '../assets/images/process/step3_coating.jpg';
import step4Img from '../assets/images/process/step4_inspection.jpg';
import step5Img from '../assets/images/process/step5_handover.jpg';

interface StageTheme {
  step: string;
  image: string;
  border: string;
  badgeBg: string;
  specColor: string;
  specBorder: string;
  accentText: string;
  glow: string;
  statusTag: string;
}

const stageThemes: StageTheme[] = [
  {
    step: '01',
    image: step1Img,
    border: 'border-slate-200/50 hover:border-white hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]',
    badgeBg: 'bg-blue-600 shadow-blue-500/30',
    specColor: 'text-blue-300',
    specBorder: 'border-blue-400/40',
    accentText: 'text-blue-400',
    glow: 'bg-blue-500/25',
    statusTag: 'Site Logged',
  },
  {
    step: '02',
    image: step2Img,
    border: 'border-slate-200/50 hover:border-white hover:shadow-[0_0_24px_rgba(245,158,11,0.35)]',
    badgeBg: 'bg-amber-600 shadow-amber-500/30',
    specColor: 'text-amber-300',
    specBorder: 'border-amber-400/40',
    accentText: 'text-amber-400',
    glow: 'bg-amber-500/25',
    statusTag: 'Surface Ready',
  },
  {
    step: '03',
    image: step3Img,
    border: 'border-slate-200/50 hover:border-white hover:shadow-[0_0_24px_rgba(16,185,129,0.35)]',
    badgeBg: 'bg-emerald-600 shadow-emerald-500/30',
    specColor: 'text-emerald-300',
    specBorder: 'border-emerald-400/40',
    accentText: 'text-emerald-400',
    glow: 'bg-emerald-500/25',
    statusTag: 'Coating Cured',
  },
  {
    step: '04',
    image: step4Img,
    border: 'border-slate-200/50 hover:border-white hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]',
    badgeBg: 'bg-purple-600 shadow-purple-500/30',
    specColor: 'text-purple-300',
    specBorder: 'border-purple-400/40',
    accentText: 'text-purple-300',
    glow: 'bg-purple-500/25',
    statusTag: 'QA Passed',
  },
  {
    step: '05',
    image: step5Img,
    border: 'border-slate-200/50 hover:border-white hover:shadow-[0_0_24px_rgba(6,182,212,0.35)]',
    badgeBg: 'bg-cyan-600 shadow-cyan-500/30',
    specColor: 'text-cyan-300',
    specBorder: 'border-cyan-400/40',
    accentText: 'text-cyan-400',
    glow: 'bg-cyan-500/25',
    statusTag: 'Signed Off',
  },
];

export const ProcessTimeline: FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <SectionLabel number="01B" name="OUR PROCESS" className="mb-2" />
          <h3 className="text-xl sm:text-2xl font-bold text-[#20242D] tracking-tight font-heading">
            How We Deliver Your Project
          </h3>
          <p className="text-xs sm:text-sm text-[#687386] mt-1 max-w-2xl font-body">
            A disciplined, quality-controlled execution model from preliminary site audit to final engineering handover.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EAF2FF] border border-[#D6E4F7] text-[#2454C6] text-xs font-heading font-semibold shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#3F73F5]" />
          <span>Strict Quality Standards</span>
        </div>
      </div>

      {/* 5-Stage Responsive Grid with Clearly Visible Images & Light Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
        {processTimelineSteps.map((step, index) => {
          const theme = stageThemes[index] || stageThemes[0];

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative bg-slate-950 border ${theme.border} rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 overflow-hidden isolate`}
            >
              {/* Highly Visible Background Image */}
              <img
                src={theme.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 pointer-events-none -z-20"
              />

              {/* Translucent Black Fog Gradient Overlay - Keeps image clear while ensuring text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/25 pointer-events-none -z-10" />

              {/* Subtle Ambient Color Glow */}
              <div
                className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-10 ${theme.glow}`}
              />

              {/* Top Bar: Single Step Indicator (01) & Spec Standard */}
              <div className="space-y-3.5 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <div className={`w-10 h-10 rounded-xl ${theme.badgeBg} text-white flex items-center justify-center font-heading font-extrabold text-base shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0`}>
                    {step.step}
                  </div>
                  <span className={`text-[11px] font-heading font-semibold bg-slate-900/85 backdrop-blur-md ${theme.specColor} border ${theme.specBorder} px-2.5 py-1 rounded-md text-right leading-tight max-w-[160px] shadow-sm`}>
                    {step.specStandard}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1.5 pt-1">
                  <span className={`text-[11px] font-heading font-bold uppercase tracking-wider ${theme.accentText} block drop-shadow-xs`}>
                    {step.subtitle}
                  </span>
                  <h4 className="text-sm sm:text-[15px] font-bold text-white font-heading leading-snug tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {step.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[12.5px] text-white/90 leading-relaxed font-body font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
                  {step.description}
                </p>
              </div>

              {/* Functional Milestone Tag Footer */}
              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-heading relative z-10">
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/20 ${theme.accentText} font-semibold text-[11px]`}>
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{theme.statusTag}</span>
                </div>
                <span className="text-emerald-300 font-semibold text-[11px] inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 px-2.5 py-0.5 rounded shadow-xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
