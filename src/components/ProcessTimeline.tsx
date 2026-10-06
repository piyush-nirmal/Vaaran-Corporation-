import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { processTimelineSteps } from '../data/content';
import { SectionLabel } from './ui/SectionLabel';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const ProcessTimeline: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <div ref={containerRef} className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <SectionLabel number="01B" name="EXECUTION PIPELINE" className="mb-2" />
          <h3 className="text-xl sm:text-2xl font-extrabold text-vrnNavy tracking-tight font-display">
            Contractor Methodology & Inspection Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-sans">
            Rigorous 5-stage quality protocol from initial chloride titration to final statutory sign-off.
          </p>
        </div>
        <div className="text-[11px] font-mono text-slate-500 hidden sm:flex items-center gap-1.5 shrink-0">
          <span>Scroll to explore stages</span>
          <ChevronRight className="w-3.5 h-3.5 text-vrnNavy" />
        </div>
      </div>

      {/* Progress Track Line */}
      <div className="relative">
        <div className="hidden lg:block absolute top-7 left-8 right-8 h-[2px] bg-slate-200" aria-hidden="true">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
            className="h-full bg-gradient-to-r from-vrnNavy via-vrnOrange to-vrnCyan"
          />
        </div>

        {/* Horizontal Scroll-Snap Container */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none">
          {processTimelineSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] shrink-0 snap-start bg-slate-50 hover:bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-navy-md hover:border-vrnNavy/30 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-vrnNavy text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:bg-vrnOrange group-hover:text-slate-950 transition-colors">
                  {step.step}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                  {step.specStandard}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-vrnNavy font-bold block">
                  {step.subtitle}
                </span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-vrnNavy transition-colors mt-0.5 font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Audited QA/QC Checkpoint</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
