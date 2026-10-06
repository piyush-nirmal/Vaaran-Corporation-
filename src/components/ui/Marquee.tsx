import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export const Marquee = ({
  children,
  className = '',
  pauseOnHover = true,
}: MarqueeProps) => {
  return (
    <div className={`overflow-hidden relative flex select-none ${className}`}>
      {/* Mask edges for smooth fade */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div
        className={`flex shrink-0 items-center gap-6 animate-marquee ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-6 animate-marquee ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};
