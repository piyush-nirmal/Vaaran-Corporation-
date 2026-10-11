import type { FC } from 'react';

export const AmbientGlassBackground: FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* Top Left Cyan/Sky Luminous Orb */}
      <div
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#8ACFF8]/18 via-[#00AEEF]/10 to-transparent blur-[110px] animate-pulse-subtle"
      />

      {/* Mid Right Subtle Navy Depth Glow */}
      <div
        className="absolute top-[35%] -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#0F2942]/6 via-[#203182]/8 to-transparent blur-[140px]"
      />

      {/* Lower Left Warm Amber/Orange Accent Orb */}
      <div
        className="absolute bottom-[15%] -left-32 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#F58220]/8 via-[#FDBA74]/10 to-transparent blur-[120px]"
      />
    </div>
  );
};
