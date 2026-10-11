import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const GlassScrollTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100)));
      }

      setIsVisible(currentScroll > 260);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.15 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-24 lg:bottom-24 right-5 sm:right-6 z-40 flex items-center group pointer-events-auto"
        >
          {/* Tooltip on hover */}
          <div className="hidden sm:block mr-2.5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white/90 backdrop-blur-md rounded-md shadow-md border border-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Scroll to top ({Math.round(scrollProgress)}%)
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Smooth scroll back to top"
            className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/75 hover:bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_rgba(15,41,66,0.12)] hover:shadow-[0_12px_32px_rgba(15,41,66,0.18)] hover:scale-105 active:scale-95 transition-all duration-200 text-slate-700 hover:text-vrnNavy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vrnCyan"
          >
            {/* Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
              viewBox="0 0 44 44"
            >
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-slate-200/50"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-vrnCyan transition-all duration-150"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Up Arrow Icon */}
            <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
