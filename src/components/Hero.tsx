import { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Pause, Play } from 'lucide-react';
import { track } from '../services/analytics';
import { CountUp } from './ui/CountUp';
import { useContent } from '../context/ContentContext';

interface HeroProps {
  onOpenCapabilityModal: () => void;
}

export const Hero: FC<HeroProps> = () => {
  const { company, heroMetrics } = useContent();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  };

  const handleRequestBid = () => {
    track('cta_click', { location: 'hero_primary', target: '/rfp-portal' });
    navigate('/rfp-portal');
  };

  const handleExploreProjects = () => {
    track('cta_click', { location: 'hero_secondary', target: '/projects' });
    navigate('/projects');
  };

  return (
    <section className="relative h-[100svh] min-h-[100svh] lg:h-[100dvh] w-full bg-[#F8FAFF] text-[#20242D] overflow-hidden flex flex-col justify-between border-b border-[#E2E9F4]">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC FULL-SCREEN DRONE VIDEO BACKDROP WITH BRIGHT VIBRANT FEEL */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero_apco_expressway_dam_1791896243948.jpg"
          className="w-full h-full object-cover object-center"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          <source src="/videos/highway-aerial.webm" type="video/webm" />
          <source src="/videos/highway-construction.webm" type="video/webm" />
        </video>
      </div>

      {/* Video Play/Pause floating toggle in top-right well below navbar */}
      <div className="absolute top-24 sm:top-28 md:top-32 right-4 sm:right-8 lg:right-12 z-30">
        <button
          type="button"
          onClick={toggleVideoPlayback}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-[0_4px_16px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] border border-slate-200/90 text-xs font-semibold transition-all cursor-pointer backdrop-blur-md active:scale-95"
          title={isVideoPlaying ? 'Pause live aerial video' : 'Play live aerial video'}
        >
          {isVideoPlaying ? <Pause className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]/20" /> : <Play className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]" />}
          <span className="text-xs font-semibold">{isVideoPlaying ? 'Live Aerial' : 'Paused'}</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. MODERN BLUE & WHITE HERO CONTENT */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-3 sm:pb-6 relative z-10 flex-1 flex flex-col justify-center">
        
        <div className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8 my-auto">
          
          {/* Main Title & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 md:space-y-5"
          >


            <h1 className="text-[27px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold tracking-tight text-white font-heading leading-[1.18] sm:leading-[1.12] text-balance drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              {company.headline || 'Building Infrastructure, Enhancing Horizons.'}
            </h1>

            {/* Sub-headline */}
            <p className="text-[13px] sm:text-base md:text-lg lg:text-[17px] text-white/95 font-normal tracking-wide max-w-2xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
              {company.subHeadline || 'Trusted Civil Construction, Commercial Painting, and Specialized Structural Fabrication Services Across India.'}
            </p>
          </motion.div>

          {/* Clean Proportional CTAs in Primary Blue and Clean White */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-3 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={handleRequestBid}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-8 h-[46px] lg:h-[48px] min-h-[46px] rounded-xl sm:rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-heading font-semibold text-[13.5px] lg:text-[14.5px] tracking-wide shadow-md shadow-blue-600/30 hover:shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F73F5] active:scale-[0.99] border-t border-white/20"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              type="button"
              onClick={handleExploreProjects}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 lg:px-7 h-[46px] lg:h-[48px] min-h-[46px] rounded-xl sm:rounded-full border border-white/70 hover:border-white bg-white/95 hover:bg-white text-[#0F172A] font-heading font-semibold text-[13.5px] lg:text-[14.5px] tracking-wide transition-all cursor-pointer shadow-sm hover:shadow-md backdrop-blur-md active:scale-[0.99]"
            >
              <span>View Our Projects</span>
              <ChevronRight className="w-4 h-4 text-[#2563EB]" />
            </button>
          </motion.div>

        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. LIGHTEST BLUE ACCENT STATS BAR AT BASE OF HERO */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full border-t border-[#E2EAF8] bg-[#F8FAFD]/95 backdrop-blur-md py-3 sm:py-4 relative z-10 shadow-sm shrink-0">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 sm:gap-6 items-center">
            {heroMetrics.map((m, i) => (
              <div 
                key={i} 
                className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-2.5 md:gap-3.5 border-r border-[#E2E9F4] last:border-none pr-3"
              >
                <div className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold text-[#2563EB] tabular-nums tracking-tight leading-none flex items-baseline gap-1 shrink-0">
                  <CountUp value={m.value} />
                  <span className="text-[11px] sm:text-sm font-semibold text-[#65B5FF]">{m.unit}</span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#687386] uppercase leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
