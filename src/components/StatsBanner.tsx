import { type FC, useEffect, useRef } from 'react';
import { Award, CheckCircle2, Waves, Users } from 'lucide-react';
import { useInView, useMotionValue, animate } from 'framer-motion';

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); // Removed the -100px margin delay
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, {
        duration: 1.5, // Fast, fixed 1.5 second count up
        ease: "easeOut",
      });
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
  }, [motionValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

export const StatsBanner: FC = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      {/* Minimal Brand Heading */}
      <div className="flex justify-center mb-8">
        <h2 className="text-base md:text-lg font-black text-slate-800 tracking-[0.4em] uppercase">
          Varan Corporation
        </h2>
      </div>

      <div className="relative group/banner">
        {/* Main Banner Background - Enhanced Glassmorphism */}
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          {/* Inner highlight */}
          <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none"></div>
          
          {/* Ambient Aurora Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-apcoRed/20 rounded-full blur-[100px] opacity-0 group-hover/banner:opacity-100 transition-opacity duration-1000 mix-blend-screen pointer-events-none -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-apcoBlue/20 rounded-full blur-[100px] opacity-0 group-hover/banner:opacity-100 transition-opacity duration-1000 mix-blend-screen pointer-events-none translate-y-1/2"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5 py-8">
          
          {/* Card 1 */}
          <div className="group/card flex flex-col items-center text-center p-8 transition-all duration-500 cursor-default relative overflow-hidden">
            {/* Localized Hover Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-apcoRed/15 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none scale-150 group-hover/card:scale-100"></div>
            
            <div className="mb-5 text-slate-400 group-hover/card:text-apcoRed transition-colors duration-500 group-hover/card:-translate-y-1 transform relative z-10">
              <Award className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-2 relative z-10">
              <h3 className="text-5xl lg:text-6xl font-outfit font-light tracking-tighter bg-gradient-to-br from-white via-slate-200 to-slate-500 text-transparent bg-clip-text drop-shadow-sm group-hover/card:scale-105 transition-transform duration-500">
                <AnimatedNumber value={25} suffix="+" />
              </h3>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 group-hover/card:text-slate-300 transition-colors relative z-10">Years</span>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] group-hover/card:text-slate-400 transition-colors relative z-10">
              Pioneering infrastructure execution across India since 1997.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group/card flex flex-col items-center text-center p-8 transition-all duration-500 cursor-default relative overflow-hidden">
            {/* Localized Hover Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-apcoRed/15 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none scale-150 group-hover/card:scale-100"></div>
            
            <div className="mb-5 text-slate-400 group-hover/card:text-apcoRed transition-colors duration-500 group-hover/card:-translate-y-1 transform relative z-10">
              <CheckCircle2 className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-2 relative z-10">
              <h3 className="text-5xl lg:text-6xl font-outfit font-light tracking-tighter bg-gradient-to-br from-white via-slate-200 to-slate-500 text-transparent bg-clip-text drop-shadow-sm group-hover/card:scale-105 transition-transform duration-500">
                <AnimatedNumber value={30} prefix="₹" suffix="+" />
              </h3>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 group-hover/card:text-slate-300 transition-colors relative z-10">Crore</span>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] group-hover/card:text-slate-400 transition-colors relative z-10">
              High-value contracts delivered successfully nationwide.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group/card flex flex-col items-center text-center p-8 transition-all duration-500 cursor-default relative overflow-hidden">
            {/* Localized Hover Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-apcoRed/15 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none scale-150 group-hover/card:scale-100"></div>
            
            <div className="mb-5 text-slate-400 group-hover/card:text-apcoRed transition-colors duration-500 group-hover/card:-translate-y-1 transform relative z-10">
              <Waves className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-2 relative z-10">
              <h3 className="text-5xl lg:text-6xl font-outfit font-light tracking-tighter bg-gradient-to-br from-white via-slate-200 to-slate-500 text-transparent bg-clip-text drop-shadow-sm group-hover/card:scale-105 transition-transform duration-500">
                <AnimatedNumber value={100} />
              </h3>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 group-hover/card:text-slate-300 transition-colors relative z-10">Ft High</span>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] group-hover/card:text-slate-400 transition-colors relative z-10">
              Marine protective coating executed on Bandra-Worli Sea Link.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group/card flex flex-col items-center text-center p-8 transition-all duration-500 cursor-default relative overflow-hidden">
            {/* Localized Hover Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-apcoRed/15 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none scale-150 group-hover/card:scale-100"></div>
            
            <div className="mb-5 text-slate-400 group-hover/card:text-apcoRed transition-colors duration-500 group-hover/card:-translate-y-1 transform relative z-10">
              <Users className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-2 relative z-10">
              <h3 className="text-5xl lg:text-6xl font-outfit font-light tracking-tighter bg-gradient-to-br from-white via-slate-200 to-slate-500 text-transparent bg-clip-text drop-shadow-sm group-hover/card:scale-105 transition-transform duration-500">
                <AnimatedNumber value={150} suffix="+" />
              </h3>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 group-hover/card:text-slate-300 transition-colors relative z-10">Team</span>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] group-hover/card:text-slate-400 transition-colors relative z-10">
              In-house permanent workforce of certified technical specialists.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
