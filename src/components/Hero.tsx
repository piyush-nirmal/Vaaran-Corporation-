import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, CheckCircle2, Gauge, ChevronDown } from 'lucide-react';
import { 
  heroMilestones, 
  heroMetrics, 
  clientPartners, 
  type HeroMilestone 
} from '../data/content';
import { track } from '../services/analytics';
import { CountUp } from './ui/CountUp';
import { MagneticButton } from './ui/MagneticButton';
import { Marquee } from './ui/Marquee';

interface HeroProps {
  onOpenCapabilityModal: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenCapabilityModal }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<HeroMilestone>(heroMilestones[0]);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestBid = () => {
    track('cta_click', { location: 'hero_primary', target: '/rfp-portal' });
    navigate('/rfp-portal');
  };

  const handleApplyParametersToRFP = () => {
    track('cta_click', { 
      location: 'hero_corridor_apply_rfp', 
      corridor: selectedMilestone.name, 
      target: '/rfp-portal' 
    });
    navigate('/rfp-portal');
  };

  const handleDownloadProfile = () => {
    track('cta_click', { location: 'hero_lead_magnet', target: 'capability_modal' });
    onOpenCapabilityModal();
  };

  return (
    <div className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200/90 flex flex-col">
      
      {/* Dynamic Rich Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Architectural Parallax Milestone Image Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={selectedMilestone.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </motion.div>
        </AnimatePresence>

        {/* 1. Brand Sky-Blue & Atmospheric Color Auras */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_18%,_rgba(138,207,248,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_30%,_rgba(32,49,130,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,_rgba(245,130,32,0.05),_transparent_45%)]" />

        {/* 2. Soft Ambient Blur Orbs */}
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] bg-[#8ACFF8]/25 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-sky-200/35 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[300px] bg-slate-200/40 blur-[100px] rounded-full pointer-events-none" />

        {/* 3. Architectural CAD Vector Graphics & Elevation Traces */}
        <svg className="absolute inset-0 w-full h-full opacity-35" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cadGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(32, 49, 130, 0.08)" strokeWidth="1" />
              {/* Corner Crosshairs */}
              <path d="M 0 5 L 0 0 L 5 0" fill="none" stroke="rgba(138, 207, 248, 0.7)" strokeWidth="1.2" />
            </pattern>
            <linearGradient id="vectorLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8ACFF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#203182" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F58220" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Background CAD Grid */}
          <rect width="100%" height="100%" fill="url(#cadGrid)" />

          {/* Structural Elevation Curved Line Trace */}
          <path
            d="M -100,220 C 300,180 600,340 1100,260 C 1400,210 1700,310 2000,240"
            fill="none"
            stroke="url(#vectorLineGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M -100,280 C 400,240 700,400 1200,300 C 1500,250 1800,370 2100,290"
            fill="none"
            stroke="rgba(138, 207, 248, 0.25)"
            strokeWidth="1"
          />

          {/* Precision Nodes / Crosshairs at Strategic Coordinates */}
          <g stroke="#203182" strokeWidth="1.2" opacity="0.4">
            {/* Top Left Target Mark */}
            <line x1="80" y1="120" x2="100" y2="120" />
            <line x1="90" y1="110" x2="90" y2="130" />
            <circle cx="90" cy="120" r="14" fill="none" stroke="#8ACFF8" strokeWidth="1" strokeDasharray="3 3" />

            {/* Center Right Target Mark */}
            <line x1="920" y1="180" x2="940" y2="180" />
            <line x1="930" y1="170" x2="930" y2="190" />
            
            {/* Bottom Left Target Mark */}
            <line x1="440" y1="620" x2="460" y2="620" />
            <line x1="450" y1="610" x2="450" y2="630" />
          </g>
        </svg>

        {/* 4. Engineering Grid Labels in Margin */}
        <div className="absolute top-28 left-6 text-[10px] font-mono tracking-widest text-slate-400/60 uppercase pointer-events-none hidden xl:block">
          SYS // CAD-GRID [28°14'N] · TIER-1 CORRIDOR
        </div>
        <div className="absolute top-28 right-8 text-[10px] font-mono tracking-widest text-slate-400/60 uppercase pointer-events-none hidden xl:block">
          ELEVATION +14.8M · ISO 12944 // COMPLIANT
        </div>

        {/* 5. Soft White Gradient Overlay Scrim for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" aria-hidden="true" />
      </div>

      {/* Main Hero Container with Generous Whitespace */}
      <div className="w-full min-h-screen max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 relative z-10 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Focused Value Proposition & Refined Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-orange-800 bg-orange-100/90 border border-orange-300 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-vrnOrange" />
                <span>INFRASTRUCTURE CONTRACTING</span>
              </span>
              <span className="text-slate-600 font-semibold text-xs hidden sm:inline">
                National Highway & Transit Corridors
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-950 font-heading">
                Industrial Execution.<br />
                <span className="text-[#0F2942]">Structural </span>
                <span className="text-[#D96B00]">Precision.</span>
              </h1>

              {/* Subtext: Concise, punchy */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed font-body">
                Certified contractor delivering high-volume industrial coatings, structural steel fabrication, and dedicated site teams for transit infrastructure.
              </p>
            </div>

            {/* Primary & Secondary Hero CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton
                  onClick={handleRequestBid}
                  className="bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 cursor-pointer font-heading"
                >
                  <span>Request Bid / Enquiry</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </MagneticButton>
                
                <button 
                  type="button"
                  onClick={handleDownloadProfile}
                  className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-[0.04em] px-6 py-4 rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2942]"
                >
                  <Download className="w-4 h-4 text-[#0F2942]" />
                  <span>Download Capability Profile</span>
                </button>
              </div>

              {/* Trust Line Under CTAs */}
              <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold font-body pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Response within 24 hours · Certified ISO 12944 & PASARA compliance</span>
              </div>
            </div>

            {/* Real Quantitative Proof Bar with 4 Clean Minimal Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/90 items-stretch">
              {heroMetrics.map((m, i) => (
                <div 
                  key={i} 
                  className="h-full flex flex-col justify-center px-4 py-3 bg-white backdrop-blur-md rounded-xl border border-slate-300 shadow-2xs hover:border-vrnNavy/40 hover:shadow-navy-xs transition-all duration-200"
                >
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-[#0F2942] tabular-nums tracking-tight leading-none flex items-baseline gap-1">
                    <CountUp value={m.value} />
                    <span className="text-xs font-mono font-bold text-slate-700">{m.unit}</span>
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-body font-bold tracking-[0.03em] text-slate-700 uppercase mt-1 whitespace-nowrap truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Telemetry Card with Smooth Image & HUD Morphing */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight Halo around Telemetry Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#8ACFF8]/40 via-sky-300/20 to-vrnNavy/15 rounded-[22px] blur-xl opacity-80 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-navy-lg group">
              
              {/* Media Visual Container with crossfade */}
              <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedMilestone.id}
                    src={selectedMilestone.image}
                    alt={selectedMilestone.name}
                    width={640}
                    height={380}
                    loading="eager"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Measured Light-To-Dark Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                
                {/* Top Badges (Only rendered if flagged as verified in content.ts) */}
                {selectedMilestone.isVerified && (
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div className="bg-white/95 backdrop-blur-md border border-slate-200 px-2.5 py-1 rounded-md text-vrnNavy font-medium text-[12px] font-body tracking-[0.04em]">
                      {selectedMilestone.stage}
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-600 text-white px-2.5 py-1 rounded-md text-[12px] font-medium font-body shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>HSE Cleared</span>
                    </div>
                  </div>
                )}

                {/* Bottom Details HUD with smooth text transition */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="text-[11px] font-body font-medium text-cyan-200 uppercase tracking-wider">
                    {selectedMilestone.corridor}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug font-heading tracking-tight">
                    {selectedMilestone.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 font-mono">
                    <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{selectedMilestone.coatingSpec}</span>
                  </div>
                </div>
              </div>

              {/* Photo Caption: Neutral descriptor stored in content.ts */}
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-body text-slate-600">
                <span className="truncate text-[11px] sm:text-xs">
                  {selectedMilestone.photoCaption}
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider shrink-0 ml-2 font-medium">
                  {selectedMilestone.isVerified ? 'Verified Project' : 'Indicative Asset'}
                </span>
              </div>

              {/* Interactive Milestone Selector Bar */}
              <div className="p-4 bg-white border-t border-slate-100 space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-700 flex items-center justify-between font-body">
                  <span>Corridor Telemetry</span>
                  <span className="text-vrnNavy font-semibold text-[11px]">Select milestone</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {heroMilestones.map((m) => {
                    const isActive = m.id === selectedMilestone.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMilestone(m)}
                        aria-pressed={isActive}
                        className={`text-left p-2.5 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                          isActive
                            ? 'bg-vrnNavy/5 border-vrnNavy text-vrnNavy shadow-xs'
                            : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-[11px] font-body text-slate-500 uppercase font-medium tracking-wider truncate">
                          {m.metricLabel}
                        </div>
                        <div className="text-xs font-mono font-semibold text-vrnNavy mt-0.5 truncate">
                          {m.metricValue}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Full-width "Apply parameters to RFP" Button */}
                <button 
                  type="button"
                  onClick={handleApplyParametersToRFP}
                  className="w-full mt-1 py-3 px-4 rounded-xl bg-[#091535] hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer font-heading shadow-sm"
                >
                  <span>Select Corridor Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Client Logo Strip: "Sectors we serve", chip text 12px min */}
      <div className="w-full border-t border-slate-200/90 bg-slate-50/70 py-2.5 relative z-10">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 mb-1.5 flex items-center justify-between text-[12px] sm:text-[13px] font-body uppercase tracking-[0.04em] text-slate-500 font-medium">
          <span>Sectors we serve</span>
          <span className="hidden sm:inline text-slate-400">Pan-India Transit Corridors</span>
        </div>

        <Marquee pauseOnHover={true} className="py-0.5">
          {clientPartners.map((client) => (
            <div
              key={client.id}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-vrnNavy/40 transition-all duration-200 cursor-default shrink-0 group"
            >
              <span className="text-[12px] sm:text-[13px] font-body font-medium tracking-[0.04em] text-slate-700 group-hover:text-vrnNavy transition-colors grayscale group-hover:grayscale-0">
                {client.placeholderText}
              </span>
              <span className="text-[12px] font-body text-slate-500">
                · {client.category}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Scroll Down Indicator (fades out on scroll) */}
      {scrollY < 50 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-0.5 pointer-events-none text-slate-400"
        >
          <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-vrnNavy" />
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};
