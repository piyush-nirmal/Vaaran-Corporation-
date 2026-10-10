import { motion } from 'framer-motion';

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

  // Normalized pixel heights for visual diagram
  const primerHeight = Math.max(20, Math.round((primerDft / 300) * 80));
  const intermediateHeight = Math.max(26, Math.round((intermediateDft / 300) * 110));
  const topcoatHeight = Math.max(22, Math.round((topcoatDft / 300) * 90));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-white space-y-4 shadow-navy-md">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <span className="text-[12px] font-body font-medium uppercase tracking-[0.04em] text-amber-400 block">
            Coating Cross-Section Schematic
          </span>
          <h5 className="text-xs font-bold font-display uppercase tracking-wider text-slate-200">
            Multi-Tier Barrier Architecture
          </h5>
        </div>
        <div className="text-right">
          <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded border border-white/20">
            Total {totalDft} µm
          </span>
        </div>
      </div>

      {/* Layer Stack Diagram */}
      <div className="relative w-full rounded-xl overflow-hidden border border-white/15 bg-slate-950 flex flex-col justify-end p-3.5 space-y-1">
        
        {/* Layer 3: Topcoat */}
        <motion.div
          animate={{ height: topcoatHeight }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="w-full rounded-lg bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 px-3 py-1 flex items-center justify-between text-xs text-slate-950 font-bold shadow-sm"
        >
          <div className="flex items-center gap-1.5 truncate font-body">
            <span className="w-2 h-2 rounded-full bg-slate-950/40" />
            <span className="truncate">Tier 3: {topcoatType}</span>
          </div>
          <span className="shrink-0 font-mono text-xs">{topcoatDft} µm</span>
        </motion.div>

        {/* Layer 2: Intermediate MIO Barrier */}
        <motion.div
          animate={{ height: intermediateHeight }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="w-full rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-3 py-1 flex items-center justify-between text-xs text-white font-bold shadow-sm"
        >
          <div className="flex items-center gap-1.5 truncate font-body">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="truncate">Tier 2: High-Build Epoxy MIO</span>
          </div>
          <span className="shrink-0 text-cyan-200 font-mono text-xs">{intermediateDft} µm</span>
        </motion.div>

        {/* Layer 1: Zinc-Rich Primer */}
        <motion.div
          animate={{ height: primerHeight }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="w-full rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 px-3 py-1 flex items-center justify-between text-xs text-slate-950 font-bold shadow-sm"
        >
          <div className="flex items-center gap-1.5 truncate font-body">
            <span className="w-2 h-2 rounded-full bg-slate-950/40" />
            <span className="truncate">Tier 1: Zinc-Rich Primer</span>
          </div>
          <span className="shrink-0 font-mono text-xs">{primerDft} µm</span>
        </motion.div>

        {/* Substrate: Steel Profile */}
        <div className="w-full h-11 rounded-lg bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 border-t-2 border-dashed border-amber-400/80 px-3 py-1 flex items-center justify-between text-xs text-slate-200">
          <div className="flex items-center gap-1.5 truncate font-body">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="truncate">Steel Substrate Profile ({blastStandard})</span>
          </div>
          <span className="text-xs font-mono text-slate-300">Peak 65 µm</span>
        </div>

      </div>

      {/* Cross-section Legend Footer */}
      <div className="grid grid-cols-2 gap-2 text-[12px] font-body text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-cyan-400" />
          <span>UV & Chemical Barrier</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-amber-500" />
          <span>Cathodic Galvanic Shield</span>
        </div>
      </div>
    </div>
  );
};
