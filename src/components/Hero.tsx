import { useState } from 'react';
import type { FC } from 'react';
import { ArrowRight, HardHat, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';
import heroViaductImg from '../assets/images/hero_infrastructure_viaduct_1791032354735.jpg';
import transitCoatingImg from '../assets/images/metro_transit_coating_1791032395039.jpg';
import steelFabImg from '../assets/images/structural_steel_fabrication_1791032383584.jpg';

interface ProjectMilestone {
  id: string;
  name: string;
  corridor: string;
  coatingSpec: string;
  metricLabel: string;
  metricValue: string;
  safetyStatus: string;
  image: string;
  stage: string;
}

const milestones: ProjectMilestone[] = [
  {
    id: 'metro-line-3',
    name: 'Mumbai Metro Line 3 Corridor',
    corridor: 'Elevated Viaduct Span 14–28',
    coatingSpec: 'Sa 2.5 Near-White Blast · 180µm Polyurethane',
    metricLabel: 'Coating Area',
    metricValue: '45,000 m²',
    safetyStatus: '100% Zero-Incident Logged',
    image: heroViaductImg,
    stage: 'Phase IV Active',
  },
  {
    id: 'highway-gantry',
    name: 'Western Expressway High-Speed Gantries',
    corridor: 'KM 18.2 Toll Plaza Alignment',
    coatingSpec: 'AWS D1.1 Certified Welds · Epoxy MIO Barrier',
    metricLabel: 'Steel Tonnage',
    metricValue: '18,500 MT',
    safetyStatus: 'HSE Safety Cleared',
    image: steelFabImg,
    stage: 'Fabrication Verified',
  },
  {
    id: 'bkc-transit',
    name: 'BKC Intermodal Corporate Terminal',
    corridor: 'Sky-Gantry Elevation 180 ft',
    coatingSpec: 'Dual-Coat Fluoropolymer · Wind-Load Rated',
    metricLabel: 'Curtain Truss',
    metricValue: '12.4 km Line',
    safetyStatus: 'Structural Signoff Logged',
    image: transitCoatingImg,
    stage: 'Site Mobilization',
  },
];

export const Hero: FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<ProjectMilestone>(milestones[0]);

  return (
    <div className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      
      {/* Subtle Architectural Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #203182 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />
      
      {/* Luminous Brand Color Accents */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-vrnCyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-vrnOrange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Unboxed Metadata Trust Marker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-500 font-mono">
              <span className="text-vrnNavy font-bold">Varan Corporation</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-vrnOrange font-bold">ISO 9001:2015</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-vrnCyan-dark font-bold">Sa 2.5 Specification</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-vrnNavy font-display">
                Industrial Execution. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vrnOrange via-amber-500 to-vrnCyan-dark">
                  Structural Precision.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed font-sans">
                Engineering contractor deploying high-volume protective coatings, certified structural gantry fabrication, and transit workforce logistics across high-density Indian infrastructure corridors.
              </p>
            </div>

            {/* Action Buttons using VRN Logo Colors */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button 
                type="button"
                onClick={() => document.getElementById('rfp-quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-vrnOrange hover:bg-vrnOrange-hover text-white font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Initiate Technical RFP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                type="button"
                onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-slate-300 bg-white hover:bg-slate-50 text-vrnNavy hover:text-vrnNavy-dark font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xs flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <HardHat className="w-4 h-4 text-vrnCyan-dark" />
                <span>Explore Fleet & Machinery</span>
              </button>
            </div>

            {/* Real Quantitative Proof Bar on Clean White Base */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60">
                <div className="font-mono text-2xl font-extrabold text-vrnNavy tabular-nums tracking-tight">45,000<span className="text-vrnOrange text-base ml-0.5">m²</span></div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Coating Deployed</div>
              </div>
              <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60">
                <div className="font-mono text-2xl font-extrabold text-vrnNavy tabular-nums tracking-tight">18,500<span className="text-slate-400 text-base ml-0.5">MT</span></div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Steel Fabricated</div>
              </div>
              <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60">
                <div className="font-mono text-2xl font-extrabold text-vrnCyan-dark tabular-nums tracking-tight">Sa 2.5</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Blast Standard</div>
              </div>
              <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60">
                <div className="font-mono text-2xl font-extrabold text-emerald-600 tabular-nums tracking-tight">100%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">HSE Compliance</div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Project Showcase & Live Telemetry HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/60 group">
              
              {/* Media Visual Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src={selectedMilestone.image}
                  alt={selectedMilestone.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Measured Light-To-Dark Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div className="bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-md text-vrnNavy font-bold text-[11px]">
                    {selectedMilestone.stage}
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/90 text-white px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Certified</span>
                  </div>
                </div>

                {/* Bottom Details HUD */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                  <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
                    {selectedMilestone.corridor}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {selectedMilestone.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-200 font-mono">
                    <Gauge className="w-3.5 h-3.5 text-vrnOrange shrink-0" />
                    <span className="truncate">{selectedMilestone.coatingSpec}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Milestone Selector Bar */}
              <div className="p-4 bg-white border-t border-slate-100 space-y-3">
                <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 flex items-center justify-between font-mono">
                  <span>Active Operational Sectors</span>
                  <span className="text-vrnCyan-dark font-medium">Select to inspect</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {milestones.map((m) => {
                    const isActive = m.id === selectedMilestone.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMilestone(m)}
                        className={`text-left p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-vrnNavy-tint border-vrnNavy text-vrnNavy shadow-xs'
                            : 'bg-slate-50 border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-[10px] font-mono text-slate-500 uppercase truncate">
                          {m.metricLabel}
                        </div>
                        <div className="text-xs font-bold text-vrnNavy mt-0.5 truncate">
                          {m.metricValue}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button 
                  type="button"
                  onClick={() => document.getElementById('rfp-quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-1 py-2 px-3 text-xs font-bold text-vrnNavy hover:text-vrnOrange flex items-center justify-center gap-1.5 transition-colors cursor-pointer group/btn"
                >
                  <span>Attach {selectedMilestone.name} parameters to RFP</span>
                  <ChevronRight className="w-3.5 h-3.5 text-vrnOrange group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
