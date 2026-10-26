import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface LayeredCoatingGraphicProps {
  totalDft: number; // e.g. 120 to 300 µm
  blastStandard: 'Sa 2.5' | 'Sa 3.0';
  topcoatType: 'Aliphatic PU' | 'Fluoropolymer';
}

export const LayeredCoatingGraphic = ({
  totalDft,
  blastStandard,
  topcoatType,
}: LayeredCoatingGraphicProps) => {
  // Proportional breakdown based on total DFT
  const primerDft = Math.round(totalDft * 0.28);
  const intermediateDft = Math.round(totalDft * 0.42);
  const topcoatDft = totalDft - primerDft - intermediateDft;

  // Normalized pixel heights for visual diagram with comfortable readable heights
  const primerHeight = Math.max(28, Math.round((primerDft / 300) * 85));
  const intermediateHeight = Math.max(34, Math.round((intermediateDft / 300) * 115));
  const topcoatHeight = Math.max(28, Math.round((topcoatDft / 300) * 95));

  return (
    <div className="bg-white border border-[#E2E9F4] rounded-2xl p-3 sm:p-4 text-[#20242D] space-y-2 sm:space-y-2.5 shadow-2xs">
      {/* Header with Title, Subtitle, and Prominent Total DFT badge */}
      <div className="flex items-center justify-between pb-2 border-b border-[#E2E9F4] gap-2">
        <div className="space-y-0.5 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3F73F5] shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#3F73F5] truncate">
              Protective Coating Layers
            </span>
          </div>
          <h5 className="text-xs sm:text-sm font-bold font-heading text-[#20242D] truncate">
            How We Protect Steel & Metal Surfaces
          </h5>
        </div>
        <div className="text-right shrink-0">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-[#2454C6] bg-[#EAF2FF] px-2 sm:px-2.5 py-1 rounded-lg border border-[#D0E2FF] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3F73F5] animate-pulse" />
            <span>Thickness: {totalDft} µm</span>
          </span>
        </div>
      </div>

      {/* Layer Stack Diagram (Atmospheric Topcoat down to Steel Substrate) */}
      <div className="relative w-full rounded-xl overflow-hidden border border-[#E2E9F4] bg-[#F8FAFF] p-2 sm:p-3.5 space-y-1.5">
        
        {/* Tier 3: Topcoat (Sky Blue Accent) */}
        <motion.div
          animate={{ height: topcoatHeight }}
          transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          className="w-full rounded-lg bg-[#65B5FF] px-2.5 sm:px-3.5 py-1 sm:py-1.5 flex items-center justify-between text-[11px] sm:text-xs text-white font-medium shadow-xs"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white shrink-0" />
            <span className="font-bold text-white truncate font-body">Layer 3: {topcoatType}</span>
            <span className="hidden md:inline-block text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-mono font-semibold">
              Sun & Rain Protection
            </span>
          </div>
          <span className="shrink-0 font-mono font-bold text-white text-[11px] sm:text-xs pl-2">{topcoatDft} µm</span>
        </motion.div>

        {/* Tier 2: Intermediate MIO Barrier (Deep Blue) */}
        <motion.div
          animate={{ height: intermediateHeight }}
          transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          className="w-full rounded-lg bg-[#2454C6] px-2.5 sm:px-3.5 py-1 sm:py-1.5 flex items-center justify-between text-[11px] sm:text-xs text-white font-medium shadow-xs"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/70 shrink-0" />
            <span className="font-bold text-white truncate font-body">Layer 2: Epoxy Moisture Shield</span>
            <span className="hidden md:inline-block text-[10px] bg-white/15 text-white/90 px-2 py-0.5 rounded font-mono font-semibold">
              Waterproof Barrier
            </span>
          </div>
          <span className="shrink-0 font-mono font-bold text-[#EAF2FF] text-[11px] sm:text-xs pl-2">{intermediateDft} µm</span>
        </motion.div>

        {/* Tier 1: Zinc-Rich Primer (Medium Primary Blue) */}
        <motion.div
          animate={{ height: primerHeight }}
          transition={{ type: 'spring', stiffness: 240, damping: 24 }}
          className="w-full rounded-lg bg-[#3F73F5] px-2.5 sm:px-3.5 py-1 sm:py-1.5 flex items-center justify-between text-[11px] sm:text-xs text-white font-medium shadow-xs"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/80 shrink-0" />
            <span className="font-bold text-white truncate font-body">Layer 1: Zinc Anti-Rust Primer</span>
            <span className="hidden md:inline-block text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-mono font-semibold">
              Rust Prevention
            </span>
          </div>
          <span className="shrink-0 font-mono font-bold text-white text-[11px] sm:text-xs pl-2">{primerDft} µm</span>
        </motion.div>

        {/* Steel Substrate Base (Restrained Steel-Grey with Anchor Profile) */}
        <div className="w-full min-h-[34px] sm:min-h-[40px] rounded-lg bg-[#E2E8F0] border-t-2 border-dashed border-[#94A3B8] px-2.5 sm:px-3.5 py-1 flex items-center justify-between text-[11px] sm:text-xs text-[#20242D]">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2 h-2 rounded-sm bg-[#64748B] shrink-0" />
            <span className="font-bold text-[#334155] font-body truncate">
              Base: Shot-Blasted Steel Metal
            </span>
          </div>
          <span className="shrink-0 text-[10px] sm:text-xs font-mono font-bold text-[#475569] pl-1.5">{blastStandard} Profile</span>
        </div>

      </div>

      {/* Cross-section Legend Footer with Meaningful Color Blocks */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5 pt-0.5 text-[10px] sm:text-[11px] font-mono text-[#687386]">
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-sm bg-[#65B5FF] shrink-0" />
          <span className="truncate">Topcoat</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-sm bg-[#2454C6] shrink-0" />
          <span className="truncate">Epoxy Barrier</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-sm bg-[#3F73F5] shrink-0" />
          <span className="truncate">Anti-Rust Primer</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-sm bg-[#64748B] shrink-0" />
          <span className="truncate">Clean Steel Base</span>
        </div>
      </div>
    </div>
  );
};
