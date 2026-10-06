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
import { SectionLabel } from './ui/SectionLabel';

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

  const line1Words = ['Industrial', 'Execution.'];
  const line2Words = ['Structural', 'Precision.'];

  return (
    <div className="relative min-h-[90vh] lg:h-screen lg:max-h-[1080px] bg-white text-slate-900 overflow-hidden border-b border-slate-200/90 flex flex-col justify-between">
      
      {/* Background Architectural Parallax Image with Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.11, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transform: `translateY(${scrollY * 0.12}px)`,
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

        {/* Soft Navy and White Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white" aria-hidden="true" />
        
        {/* Subtle Engineering Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-50" aria-hidden="true" />
      </div>

      {/* Main Hero Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-20 pb-2 relative z-10 my-auto flex-grow flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center py-2">
          
          {/* Left Column: Focused Value Proposition */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Section Index Marker */}
            <SectionLabel number="00" name="INFRASTRUCTURE GROUP" />

            {/* Display Headline: Barlow Condensed, weights 600/700, letter-spacing -0.01em, line-height 1.05 */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-bold tracking-[-0.01em] leading-[1.05] font-heading">
                <span className="block text-vrnNavy">
                  {line1Words.map((word, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <span className="block text-vrnOrange">
                  {line2Words.map((word, idx) => (
                    <motion.span
                      key={idx + 2}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: (idx + 2) * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </h1>

              {/* One-Line Subtext: Manrope, 16px minimum, line-height 1.6 */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-base sm:text-lg text-slate-700 max-w-2xl font-normal leading-[1.6] font-body"
              >
                Tier-1 contractor deploying high-volume protective coatings, certified gantry fabrication, and site logistics for high-density corridors.
              </motion.p>
            </div>

            {/* Primary & Secondary Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2 pt-0.5"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton
                  onClick={handleRequestBid}
                  className="bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-bold text-xs uppercase tracking-[0.04em] px-7 py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2.5 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange"
                >
                  <span>Request a Bid</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-200 group-hover:translate-x-1" />
                </MagneticButton>
                
                <button 
                  type="button"
                  onClick={handleDownloadProfile}
                  className="border-2 border-vrnNavy bg-white hover:bg-slate-50 text-vrnNavy hover:text-vrnNavy-dark font-bold text-xs uppercase tracking-[0.04em] px-6 py-3.5 rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                >
                  <Download className="w-4 h-4 text-vrnNavy" />
                  <span>Download Capability Profile</span>
                </button>
              </div>

              {/* Trust Line Under CTAs */}
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium font-body pt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Response within 24 hours · No obligation</span>
              </div>
            </motion.div>

            {/* Real Quantitative Proof Bar with 4 Identical Height Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 border-t border-slate-200/90 items-stretch">
              {heroMetrics.map((m, i) => (
                <div 
                  key={i} 
                  className="h-full flex flex-col justify-center px-3 py-2 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200/80 shadow-2xs"
                >
                  <div className="font-heading text-2xl sm:text-3xl font-bold text-vrnNavy tabular-nums tracking-[-0.01em] leading-[1.05] flex items-baseline gap-1">
                    <CountUp value={m.value} />
                    <span className="text-xs font-mono font-medium text-slate-500">{m.unit}</span>
                  </div>
                  <div className="text-[12px] sm:text-[13px] font-body font-medium tracking-[0.04em] text-slate-600 uppercase mt-0.5 whitespace-nowrap truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Telemetry Card with Smooth Image & HUD Morphing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-navy-lg group">
              
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
                <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                  <div className="text-[12px] font-body font-medium text-cyan-200 uppercase tracking-[0.04em]">
                    {selectedMilestone.corridor}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-[1.05] font-heading tracking-[-0.01em]">
                    {selectedMilestone.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-200 font-mono">
                    <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{selectedMilestone.coatingSpec}</span>
                  </div>
                </div>
              </div>

              {/* Photo Caption: Neutral descriptor stored in content.ts */}
              <div className="px-3.5 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[12px] font-body text-slate-600">
                <span className="truncate">
                  {selectedMilestone.photoCaption}
                </span>
                <span className="text-[11px] text-slate-500 uppercase tracking-[0.04em] shrink-0 ml-2 font-medium">
                  {selectedMilestone.isVerified ? 'Verified Project' : 'Indicative Asset'}
                </span>
              </div>

              {/* Interactive Milestone Selector Bar */}
              <div className="p-3.5 bg-white border-t border-slate-100 space-y-2.5">
                <div className="text-[12px] uppercase tracking-[0.04em] font-medium text-slate-700 flex items-center justify-between font-body">
                  <span>Corridor Telemetry</span>
                  <span className="text-vrnNavy font-bold">Select milestone</span>
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
                        className={`text-left p-2 rounded-xl border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy ${
                          isActive
                            ? 'bg-vrnNavy-tint border-vrnNavy text-vrnNavy shadow-xs'
                            : 'bg-slate-50 border-slate-200/80 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-[12px] font-body text-slate-700 uppercase font-medium tracking-[0.04em] truncate">
                          {m.metricLabel}
                        </div>
                        <div className="text-xs font-mono font-bold text-vrnNavy mt-0.5 truncate">
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
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-vrnNavy hover:bg-vrnNavy-dark text-white text-xs font-bold uppercase tracking-[0.04em] flex items-center justify-center gap-2 transition-all cursor-pointer font-heading shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnNavy"
                >
                  <span>Apply {selectedMilestone.name} parameters to RFP</span>
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
