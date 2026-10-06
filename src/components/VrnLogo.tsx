import type { FC } from 'react';

interface VrnLogoProps {
  className?: string;
  size?: number;
}

export const VrnLogo: FC<VrnLogoProps> = ({ className = 'w-9 h-9', size }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Varan Corporation Logo"
    >
      <defs>
        {/* Prismatic Rainbow Gradient for the Infinity Symbol */}
        <linearGradient id="vrnInfinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E11D48" />
          <stop offset="20%" stopColor="#9333EA" />
          <stop offset="45%" stopColor="#00AEEF" />
          <stop offset="70%" stopColor="#10B981" />
          <stop offset="88%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F58220" />
        </linearGradient>

        <filter id="vrnShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Outer Royal Navy Triangle */}
      <path
        d="M 60 12 L 109 104 L 11 104 Z"
        stroke="#23348C"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="white"
      />

      {/* Rainbow Infinity Symbol Above VRN */}
      <g filter="url(#vrnShadow)">
        <path
          d="M 60 36 C 53 27, 42 27, 42 36 C 42 45, 53 45, 60 36 C 67 27, 78 27, 78 36 C 78 45, 67 45, 60 36 Z"
          fill="none"
          stroke="url(#vrnInfinityGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Bold Orange 'VRN' Acronym */}
      <text
        x="60"
        y="66"
        fill="#F58220"
        fontSize="21"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        VRN
      </text>

      {/* Cyan Inverted Outer Chevron */}
      <path
        d="M 32 63 L 60 97 L 88 63"
        stroke="#00AEEF"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Magenta/Violet Inverted Inner Chevron */}
      <path
        d="M 39 71 L 60 93 L 81 71"
        stroke="#8D217B"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
