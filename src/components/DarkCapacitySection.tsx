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
    <section className="relative bg-vrnNavy-deep text-white py-20 sm:py-24 overflow-hidden border-y border-vrnNavy/40">
      
      {/* Engineered Grid Texture on Dark */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" aria-hidden="true" />
      
      {/* Ambient Cyan and Orange Glows */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-vrnCyan/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-vrnOrange/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Top Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>{darkBandContent.sectionLabel}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
              {darkBandContent.headline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
              {darkBandContent.subtext}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
            <MagneticButton
              onClick={handleRequestBid}
              className="w-full bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-black text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange"
            >
              <span>Request Priority Bid</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </MagneticButton>

            <button
              type="button"
              onClick={handleCall}
              className="w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Dispatch Wire</span>
            </button>
          </div>
        </div>

        {/* 4 Quantitative Scale Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
          {darkBandContent.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1} variant="fadeUp">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs space-y-2 hover:bg-white/10 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
                  <CountUp value={stat.value} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Regulatory Footer Guarantee */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Guaranteed compliance with Central & State Public Procurement Rules (PPR).</span>
          </div>
          <span className="text-slate-400 text-[11px]">
            Audited SLA: ISO 9001:2015 · PASARA · DGR
          </span>
        </div>

      </div>
    </section>
  );
};
