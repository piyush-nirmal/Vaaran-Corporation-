import { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Pause, Play } from 'lucide-react';
import { heroMetrics } from '../data/content';
import { track } from '../services/analytics';
import { CountUp } from './ui/CountUp';

interface HeroProps {
  onOpenCapabilityModal: () => void;
}

export const Hero: FC<HeroProps> = () => {
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
    <section className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden flex flex-col justify-between">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC FULL-SCREEN DRONE VIDEO BACKDROP */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero_apco_expressway_dam_1791896243948.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          <source src="/videos/highway-aerial.webm" type="video/webm" />
          <source src="/videos/highway-construction.webm" type="video/webm" />
        </video>

        {/* Minimal gradient scrims - preserving maximum video visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* Video Play/Pause floating toggle in top-right below navbar */}
      <div className="absolute top-28 right-6 sm:right-10 z-20">
        <button
          type="button"
          onClick={toggleVideoPlayback}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/50 hover:bg-slate-950/80 backdrop-blur-md text-white/80 hover:text-white border border-white/10 text-xs font-mono transition-all cursor-pointer"
          title={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? <Pause className="w-3 h-3 text-vrnOrange" /> : <Play className="w-3 h-3 text-vrnOrange" />}
          <span className="hidden sm:inline">{isVideoPlaying ? 'Live Aerial' : 'Paused'}</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. MINIMALIST, HIGH-AESTHETIC HERO CONTENT */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12 pt-36 pb-16 relative z-10 flex-1 flex flex-col justify-end">
        
        <div className="max-w-3xl space-y-6">
          
          {/* Main Title: 50% Reduced Font Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold tracking-tight text-white font-heading leading-tight text-balance">
              Building India’s Modern{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-vrnOrange">
                Highways
              </span>
            </h1>

            {/* Tagline: 50% Reduced Font Size */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-normal tracking-wide">
              Highways · Bridges · Tunnels · Structural Steel
            </p>
          </motion.div>

          {/* Clean Proportional CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-center gap-3 pt-1"
          >
            <button
              type="button"
              onClick={handleRequestBid}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-vrnOrange hover:bg-vrnOrange-hover text-slate-950 font-heading font-semibold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnOrange hover:gap-2.5"
            >
              <span>Request a Bid</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            <button
              type="button"
              onClick={handleExploreProjects}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full border border-white/25 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-heading font-medium text-xs uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            </button>
          </motion.div>

        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. SUBTLE FROSTED STATS BAR AT BASE OF HERO */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full border-t border-white/15 bg-slate-950/70 backdrop-blur-md py-4 relative z-10">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            {heroMetrics.map((m, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 border-r border-white/10 last:border-none pr-3"
              >
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight leading-none flex items-baseline gap-1">
                  <CountUp value={m.value} />
                  <span className="text-xs font-mono font-semibold text-amber-400">{m.unit}</span>
                </div>
                <div className="text-[11px] sm:text-xs font-medium tracking-wider text-slate-300 uppercase leading-tight">
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
