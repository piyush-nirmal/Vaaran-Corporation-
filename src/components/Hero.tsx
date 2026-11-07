import { useState, useRef, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Pause, Play } from 'lucide-react';
import { track } from '../services/analytics';
import { CountUp } from './ui/CountUp';
import { useContent } from '../context/ContentContext';

interface HeroProps {
  onOpenCapabilityModal?: () => void;
}

export interface HeroVideoSlide {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  category: string;
  src: string;
  fallbackSrc?: string;
  poster: string;
}

export const HERO_VIDEO_SLIDES: HeroVideoSlide[] = [
  {
    id: 'divider-painting',
    number: '01',
    title: 'Divider Painting & Highway Median Coating',
    shortLabel: 'Divider Painting',
    category: 'Commercial & Highway Painting',
    src: '/videos/divider-painting.webm',
    fallbackSrc: '/videos/highway-construction.webm',
    poster: '/images/divider-painting-real.jpg',
  },
  {
    id: 'worli-sealink',
    number: '02',
    title: 'Bandra–Worli Sea Link Marine Protective Coating',
    shortLabel: 'Worli Sea Link',
    category: '100 Ft Marine Offshore Barrier',
    src: '/videos/worli-sealink.webm',
    fallbackSrc: '/videos/highway-aerial.webm',
    poster: '/assets/hero_apco_expressway_dam_1791896243948.jpg',
  },
  {
    id: 'airoli-vashi-bridge',
    number: '03',
    title: 'Airoli–Vashi Bridge Infrastructure & Structural Coating',
    shortLabel: 'Airoli-Vashi Bridge',
    category: 'Creek Crossing Viaduct Protection',
    src: '/videos/airoli-vashi-bridge.webm',
    fallbackSrc: '/videos/highway-aerial.webm',
    poster: '/assets/hero_transit_tunnel_viaduct_1791896269073.jpg',
  },
  {
    id: 'roadart-greenery',
    number: '04',
    title: 'Road Art, Median Greenery & Roadside Landscaping',
    shortLabel: 'Road Art & Greenery',
    category: 'Urban & Roadway Beautification',
    src: '/videos/roadart-greenery.mp4',
    fallbackSrc: '/videos/highway-aerial.webm',
    poster: '/assets/hero_infrastructure_viaduct_1791032354735.jpg',
  },
];

export const Hero: FC<HeroProps> = () => {
  const { company, heroMetrics } = useContent();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const navigate = useNavigate();

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic cycling: precisely every 2000ms (2 seconds)
  useEffect(() => {
    if (!isVideoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_VIDEO_SLIDES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  // Ensure active video is playing
  useEffect(() => {
    const activeVideo = videoRefs.current[currentSlideIndex];
    if (activeVideo && isVideoPlaying) {
      activeVideo.play().catch(() => {});
    }
  }, [currentSlideIndex, isVideoPlaying]);

  const toggleVideoPlayback = useCallback(() => {
    setIsVideoPlaying((prev) => {
      const next = !prev;
      const activeVideo = videoRefs.current[currentSlideIndex];
      if (activeVideo) {
        if (next) {
          activeVideo.play().catch(() => {});
        } else {
          activeVideo.pause();
        }
      }
      return next;
    });
  }, [currentSlideIndex]);

  const handleRequestBid = () => {
    track('cta_click', { location: 'hero_primary', target: '/rfp-portal' });
    navigate('/rfp-portal');
  };

  const handleExploreProjects = () => {
    track('cta_click', { location: 'hero_secondary', target: '/projects' });
    navigate('/projects');
  };

  const activeSlide = HERO_VIDEO_SLIDES[currentSlideIndex];

  return (
    <section className="relative h-[100svh] min-h-[100svh] lg:h-[100dvh] w-full bg-[#0a0f1d] text-[#20242D] overflow-hidden flex flex-col justify-between border-b border-[#E2E9F4]">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC MULTI-VIDEO HERO BACKDROP (AUTOMATIC 2s ROTATION) */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none bg-slate-950">
        {HERO_VIDEO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
              }}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={slide.poster}
                className="w-full h-full object-cover object-center scale-[1.02]"
              >
                <source src={slide.src} />
                {slide.fallbackSrc && <source src={slide.fallbackSrc} />}
              </video>
            </div>
          );
        })}

        {/* Cinematic Vignette & Readability Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/25 pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* TOP-RIGHT CONTROLLER: PLAY/PAUSE + 4-STEP LIVE VIDEO INDICATORS */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute top-20 sm:top-24 md:top-28 right-4 sm:right-8 lg:right-12 z-30 flex flex-col items-end gap-2.5">
        
        {/* Floating pill: Live Aerial Status & Pause/Play */}
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.18)] border border-slate-200/90 text-slate-800 transition-all">
          <button
            type="button"
            onClick={toggleVideoPlayback}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer text-xs font-semibold"
            title={isVideoPlaying ? 'Pause video rotation' : 'Play video rotation'}
          >
            {isVideoPlaying ? (
              <Pause className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]/20" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]" />
            )}
            <span className="tabular-nums">
              {isVideoPlaying ? 'Live Aerial' : 'Paused'}
            </span>
          </button>

          <span className="w-1 h-1 rounded-full bg-slate-300" />

          {/* Current Active Label */}
          <span className="text-xs font-semibold text-[#2563EB] tracking-wide max-w-[140px] sm:max-w-[200px] truncate">
            {activeSlide.shortLabel}
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. MODERN BLUE & WHITE HERO CONTENT */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-3 sm:pb-6 relative z-10 flex-1 flex flex-col justify-center">
        
        <div className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8 my-auto">
          
          {/* Main Title & Tagline with Current Slide Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 md:space-y-5"
          >
            {/* Active Video Context Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-[#65B5FF] animate-ping" />
                <span className="font-mono">{activeSlide.number}</span>
                <span>/</span>
                <span>{activeSlide.title}</span>
              </motion.div>
            </AnimatePresence>

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

