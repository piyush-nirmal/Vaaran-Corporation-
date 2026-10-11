import type { FC } from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap } from 'lucide-react';
import { darkBandContent, companyConfig } from '../data/content';
import { CountUp } from './ui/CountUp';
import { MagneticButton } from './ui/MagneticButton';
import { Reveal } from './ui/Reveal';
import { track } from '../services/analytics';

export const DarkCapacitySection: FC = () => {
  const handleRequestBid = () => {
    track('cta_click', { location: 'dark_capacity_band', target: 'rfp-quote' });
    document.getElementById('rfp-quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    track('call_click', { location: 'dark_capacity_band' });
    window.location.href = `tel:${companyConfig.phoneRaw}`;
  };

  return (
    <section className="relative bg-slate-50 text-slate-900 py-20 sm:py-24 overflow-hidden border-y border-slate-200">
      
      {/* Engineered Grid Texture on Dark (Reused for light with adjusted opacity) */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-10 pointer-events-none mix-blend-overlay" aria-hidden="true" />
      
      {/* Ambient Glows */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#8ACFF8]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-[#8ACFF8]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-slate-600 uppercase">
              <Zap className="w-3.5 h-3.5 text-[#8ACFF8]" />
              <span>{darkBandContent.sectionLabel}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-[-0.02em] text-slate-900 font-heading leading-[1.15] text-balance">
              {darkBandContent.headline}
            </h2>

            <p className="text-base text-slate-600 max-w-2xl font-body leading-[1.65]">
              {darkBandContent.subtext}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
            <MagneticButton
              onClick={handleRequestBid}
              className="w-full bg-gradient-to-r from-[#8ACFF8] to-sky-300 hover:to-sky-400 text-slate-900 font-semibold text-xs uppercase tracking-[0.04em] py-4 px-6 rounded-xl transition-all shadow-sm shadow-[#8ACFF8]/20 flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ACFF8]"
            >
              <span>Request Priority Bid</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </MagneticButton>

            <button
              type="button"
              onClick={handleCall}
              className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-[0.04em] py-3.5 px-6 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              <Phone className="w-3.5 h-3.5 text-[#8ACFF8]" />
              <span>Direct Dispatch Wire</span>
            </button>
          </div>
        </div>

        {/* 4 Quantitative Scale Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-200/80">
          {darkBandContent.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1} variant="fadeUp">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl sm:text-4xl font-semibold text-slate-900 font-heading tracking-tight leading-none tabular-nums">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-2">
                  <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8ACFF8] font-body">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-body">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Regulatory Footer Guarantee */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 text-[12px] text-slate-600 font-body shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 font-medium">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="text-slate-700">Guaranteed compliance with Central & State Public Procurement Rules (PPR).</span>
          </div>
          <span className="text-slate-500 text-[12px]">
            Audited SLA: ISO 9001:2015 · PASARA · DGR
          </span>
        </div>

      </div>
    </section>
  );
};
