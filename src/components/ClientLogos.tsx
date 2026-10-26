import React from 'react';

import msrdcImg from '../assets/images/clients/msrdc.png';
import pwdImg from '../assets/images/clients/pwd.png';
import nhaiImg from '../assets/images/clients/nhai.png';
import ltImg from '../assets/images/clients/lt.png';
import hccImg from '../assets/images/clients/hcc.png';
import nccImg from '../assets/images/clients/ncc.png';
import hmmImg from '../assets/images/clients/hmm.png';
import mepImg from '../assets/images/clients/mep.png';
import roadwayImg from '../assets/images/clients/roadway.png';
import pragatiImg from '../assets/images/clients/pragati.png';
import apcoImg from '../assets/images/clients/apco.png';
import tataImg from '../assets/images/clients/tata.png';
import godrejImg from '../assets/images/clients/godrej.png';
import amulImg from '../assets/images/clients/amul.png';
import ashmiImg from '../assets/images/clients/ashmi.png';
import saiImg from '../assets/images/clients/sai.png';

interface LogoProps {
  className?: string;
  variant?: 'watermark' | 'badge';
}

/**
 * 1. MSRDC (Maharashtra State Road Development Corporation)
 * Full vibrant colors: Official Marine Blue (#1B5EA8)
 */
export const MsrdcLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Dotted Circle */}
      <circle
        cx="60"
        cy="48"
        r="38"
        stroke="#1B5EA8"
        strokeWidth="2.5"
        strokeDasharray="3 3"
      />
      {/* Inner Solid Circle */}
      <circle
        cx="60"
        cy="48"
        r="34"
        stroke="#1B5EA8"
        strokeWidth="2"
      />

      {/* Cable-Stayed Bridge Tower (Bandra-Worli Sea Link) */}
      <path
        d="M57 20 L63 20 L66 62 H54 Z"
        fill="#1B5EA8"
      />
      <rect x="53" y="38" width="14" height="2.5" fill="#1B5EA8" />

      {/* Stay Cables Left */}
      <line x1="58" y1="24" x2="36" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="58" y1="28" x2="42" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="58" y1="32" x2="48" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="58" y1="36" x2="52" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Stay Cables Right */}
      <line x1="62" y1="24" x2="84" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="28" x2="78" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="32" x2="72" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="36" x2="68" y2="62" stroke="#1B5EA8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Bridge Deck */}
      <rect x="30" y="62" width="60" height="3.5" rx="1" fill="#1B5EA8" />

      {/* Pier Legs */}
      <line x1="40" y1="65.5" x2="38" y2="76" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="65.5" x2="48" y2="76" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="70" y1="65.5" x2="72" y2="76" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="80" y1="65.5" x2="82" y2="76" stroke="#1B5EA8" strokeWidth="2.5" strokeLinecap="round" />

      {/* Water Ripple Base */}
      <path
        d="M34 78 Q47 75 60 78 Q73 81 86 78"
        stroke="#1B5EA8"
        strokeWidth="2"
        fill="none"
      />

      {/* Bold MSRDC Typography */}
      <text
        x="60"
        y="104"
        textAnchor="middle"
        fill="#1B5EA8"
        fontFamily="'Arial Black', Impact, sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="2.5"
      >
        MSRDC
      </text>
    </svg>
  );
};

/**
 * 2. PWD Maharashtra (Public Works Department)
 * Full vibrant colors: 24-point golden sunburst (#D97706, #F59E0B, #FEF3C7) and rich amber (#B45309).
 */
export const PwdMaharashtraLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 24-Point Serrated Sunburst Gear Outer Rim */}
      <path
        d="M60 6 L64 12 L71 9 L73 16 L81 15 L81 22 L89 23 L87 30 L95 33 L91 40 L98 44 L92 50 L98 56 L91 60 L95 67 L87 70 L89 77 L81 78 L81 85 L73 84 L71 91 L64 88 L60 94 L56 88 L49 91 L47 84 L39 85 L39 78 L31 77 L33 70 L25 67 L29 60 L22 56 L28 50 L22 44 L29 40 L25 33 L33 30 L31 23 L39 22 L39 15 L47 16 L49 9 L56 12 Z"
        fill="#FEF3C7"
        stroke="#D97706"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Inner Concentric Circle */}
      <circle cx="60" cy="50" r="32" stroke="#D97706" strokeWidth="2" />
      <circle cx="60" cy="50" r="28" stroke="#B45309" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* Ashoka Pillar / Lamp Motif at Top */}
      <path d="M57 26 L63 26 L62 33 H58 Z" fill="#B45309" />
      <circle cx="60" cy="25" r="2.5" fill="#B45309" />
      <rect x="54" y="33" width="12" height="2" rx="0.5" fill="#B45309" />

      {/* Center PWD Typography */}
      <text
        x="60"
        y="48"
        textAnchor="middle"
        fill="#B45309"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="2"
      >
        PWD
      </text>

      {/* Triple-Arch Bridge with Pier Foundations */}
      <line x1="38" y1="52" x2="82" y2="52" stroke="#B45309" strokeWidth="2" />
      <path
        d="M40 64 C40 56 48 56 48 64 C48 56 60 56 60 64 C60 56 72 56 72 64 C72 56 80 56 80 64"
        stroke="#B45309"
        strokeWidth="2"
        fill="none"
      />
      <line x1="36" y1="64" x2="84" y2="64" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />

      {/* Water Ripple Waves */}
      <path
        d="M42 68 Q51 66 60 68 Q69 70 78 68"
        stroke="#D97706"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Bottom Label */}
      <text
        x="60"
        y="110"
        textAnchor="middle"
        fill="#B45309"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="10"
        letterSpacing="2"
      >
        MAHARASHTRA
      </text>
    </svg>
  );
};

/**
 * 3. National Highways Authority of India (NHAI)
 * Full vibrant colors: Royal Highway Blue (#004694) & Highway Yellow (#FFCC00) with perspective road.
 */
export const HighwayAuthorityLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Highway Surface */}
      <path
        d="M26 40 C42 42 78 70 106 58 L114 68 C80 84 40 56 22 52 Z"
        fill="#94A3B8"
      />

      {/* Primary Curving Blue Highway Carriageway Ribbon */}
      <path
        d="M18 42 C40 38 78 52 110 80 L102 96 C70 66 34 56 12 58 Z"
        fill="#004694"
      />

      {/* Yellow Dividing Median Stripe */}
      <path
        d="M15 50 C36 47 74 59 106 88"
        stroke="#FFCC00"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* White NHAI Text inside Blue Ribbon */}
      <g transform="rotate(18 52 58)">
        <text
          x="44"
          y="56"
          fill="#FFFFFF"
          fontFamily="'Arial Black', Impact, sans-serif"
          fontWeight="900"
          fontSize="11"
          letterSpacing="1.5"
        >
          NHAI
        </text>
      </g>

      {/* Lower NHAI Label Badge */}
      <text
        x="60"
        y="112"
        textAnchor="middle"
        fill="#004694"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="15"
        letterSpacing="2.5"
      >
        NHAI
      </text>
    </svg>
  );
};

/**
 * 4. Larsen & Toubro (L&T)
 * Full vibrant colors: Navy Blue circle (#004B87) with crisp white L&T monogram mark inside.
 */
export const LtLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Navy Blue Circle */}
      <circle cx="60" cy="54" r="46" fill="#004B87" />

      {/* Stylized L&T Corporate Monogram Mark (White) */}
      {/* Letter 'L' */}
      <path
        d="M34 30 H44 V66 H62 V76 H34 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />

      {/* Ampersand '&' and 'T' ligature */}
      <path
        d="M62 30 H88 V40 H78 V76 H68 V40 H62 Z"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      {/* Interlocking Ampersand Loop */}
      <path
        d="M48 48 C48 42 54 40 58 44 C62 48 56 58 48 62 C42 64 38 58 40 52 C42 46 50 46 56 52"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom Text */}
      <text
        x="60"
        y="114"
        textAnchor="middle"
        fill="#004B87"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="11"
        letterSpacing="1.5"
      >
        L&T
      </text>
    </svg>
  );
};

/**
 * 5. Hindustan Construction Company (HCC)
 * Full vibrant colors: Vibrant Green arrow (#00A651) + Deep Teal letters (#1C5B70).
 */
export const HccLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Green Forward Construction Arrow / Chevron */}
      <polygon
        points="14,46 32,46 38,54 32,62 14,62 20,54"
        fill="#00A651"
      />

      {/* Bold Uppercase 'HCC' in Deep Teal */}
      {/* 'H' */}
      <path
        d="M42 34 H52 V50 H64 V34 H74 V74 H64 V58 H52 V74 H42 Z"
        fill="#1C5B70"
      />
      {/* First 'C' */}
      <path
        d="M104 42 C100 36 94 34 86 34 C74 34 66 43 66 54 C66 65 74 74 86 74 C94 74 100 71 104 66 L98 58 C95 62 91 64 86 64 C80 64 76 60 76 54 C76 48 80 44 86 44 C91 44 95 46 98 50 Z"
        fill="#1C5B70"
        transform="translate(14,0)"
      />
      {/* Second 'C' */}
      <path
        d="M104 42 C100 36 94 34 86 34 C74 34 66 43 66 54 C66 65 74 74 86 74 C94 74 100 71 104 66 L98 58 C95 62 91 64 86 64 C80 64 76 60 76 54 C76 48 80 44 86 44 C91 44 95 46 98 50 Z"
        fill="#1C5B70"
        transform="translate(42,0)"
      />

      {/* Subtext */}
      <text
        x="70"
        y="92"
        textAnchor="middle"
        fill="#1C5B70"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="7.5"
        letterSpacing="1"
      >
        HINDUSTAN CONSTRUCTION
      </text>
    </svg>
  );
};

/**
 * 6. NCC Limited
 * Full vibrant colors: Crimson Red (#C8102E) & Royal Blue (#0033A0) shield with Gold (#D4AF37) wreath & scroll.
 */
export const NccLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left Shield Half (Red) */}
      <path
        d="M60 14 C44 14 30 22 26 30 L26 64 C26 84 50 98 60 102 Z"
        fill="#C8102E"
      />
      {/* Right Shield Half (Blue) */}
      <path
        d="M60 14 C76 14 90 22 94 30 L94 64 C94 84 70 98 60 102 Z"
        fill="#0033A0"
      />
      {/* Shield Border (Gold) */}
      <path
        d="M60 14 C44 14 30 22 26 30 L26 64 C26 84 50 98 60 102 C70 98 94 84 94 64 L94 30 C90 22 76 14 60 14 Z"
        stroke="#D4AF37"
        strokeWidth="3"
        fill="none"
      />

      {/* Golden Laurel Wreath */}
      <circle cx="60" cy="54" r="18" stroke="#D4AF37" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M44 54 C44 44 52 38 60 38 C68 38 76 44 76 54 C76 64 68 70 60 70 C52 70 44 64 44 54 Z" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.8" />

      {/* NCC Gold Lettering */}
      <text
        x="60"
        y="59"
        textAnchor="middle"
        fill="#D4AF37"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="1"
      >
        NCC
      </text>

      {/* Golden Scroll Banner across bottom */}
      <path
        d="M34 88 Q60 82 86 88 L84 94 Q60 88 36 94 Z"
        fill="#D4AF37"
      />
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fill="#000000"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="5"
        letterSpacing="0.8"
      >
        NCC LIMITED
      </text>
    </svg>
  );
};

/**
 * 7. HMM Infra Limited
 * Full vibrant colors: Deep Teal wordmark (#085F75).
 */
export const HmmLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 'H' */}
      <path d="M22 28 H32 V46 H44 V28 H54 V70 H44 V54 H32 V70 H22 Z" fill="#085F75" />

      {/* 'i' with large round dot */}
      <circle cx="62" cy="34" r="5" fill="#085F75" />
      <rect x="58" y="44" width="8" height="26" fill="#085F75" />

      {/* First 'M' */}
      <path d="M72 28 H82 L89 50 L96 28 H106 V70 H98 V42 L92 60 H86 L80 42 V70 H72 Z" fill="#085F75" />

      {/* Second 'M' */}
      <path d="M110 28 H120 L127 50 L134 28 H144 V70 H136 V42 L130 60 H124 L118 42 V70 H110 Z" fill="#085F75" transform="translate(-4,0)" />

      {/* HMM INFRA LIMITED Subtext */}
      <text
        x="70"
        y="88"
        textAnchor="middle"
        fill="#085F75"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="8"
        letterSpacing="1.5"
      >
        HMM INFRA LIMITED
      </text>
    </svg>
  );
};

/**
 * 8. MEP Infrastructure
 * Full vibrant colors: Red (#DC2626), Navy (#1E3A8A), Green (#059669) flyover arches.
 */
export const MepLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Triple Highway Overpass Arches */}
      <path d="M16 56 C28 26 70 20 98 44" stroke="#DC2626" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <path d="M24 64 C38 34 78 30 104 54" stroke="#1E3A8A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M32 72 C48 42 84 40 108 64" stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* MEP Typography */}
      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#1E3A8A"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="2.5"
      >
        MEP
      </text>
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fill="#1E3A8A"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="6.5"
        letterSpacing="1.5"
      >
        INFRASTRUCTURE
      </text>
    </svg>
  );
};

/**
 * 9. Roadway Solutions (RSIIL)
 * Full vibrant colors: Slate Cog (#475569) + Emerald Green Infinity Loop (#10B981) + Dark Text (#0F172A).
 */
export const RoadwayLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mechanical Cog / Gear on Left */}
      <circle cx="28" cy="48" r="16" fill="none" stroke="#475569" strokeWidth="3.5" />
      <circle cx="28" cy="48" r="6" fill="#475569" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="26"
          y="28"
          width="4"
          height="5"
          fill="#475569"
          transform={`rotate(${angle} 28 48)`}
        />
      ))}

      {/* Green Infinity Roadway Loop above text */}
      <path
        d="M52 38 C42 26 42 16 54 16 C66 16 72 38 84 38 C96 38 96 26 84 26 C72 26 66 48 54 48 C42 48 42 38 52 38 Z"
        stroke="#10B981"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="54" cy="22" r="2" fill="#10B981" />
      <circle cx="84" cy="32" r="2" fill="#10B981" />

      {/* Bold "Roadway Solutions" Typography */}
      <text
        x="80"
        y="58"
        textAnchor="start"
        fill="#0F172A"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="0.5"
      >
        Roadway
      </text>
      <text
        x="80"
        y="72"
        textAnchor="start"
        fill="#0F172A"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="12"
        letterSpacing="0.5"
      >
        Solutions
      </text>
    </svg>
  );
};

/**
 * 10. Pragati Infra
 * Full vibrant colors: Infrastructure Blue (#1E40AF) and Teal (#0D9488).
 */
export const PragatiLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="60,18 90,66 76,66 60,40 44,66 30,66" fill="#1E40AF" />
      <polygon points="60,44 76,72 68,72 60,58 52,72 44,72" fill="#0D9488" />
      <line x1="26" y1="76" x2="94" y2="76" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />

      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#1E40AF"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="14.5"
        letterSpacing="2"
      >
        PRAGATI
      </text>
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fill="#0D9488"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="8"
        letterSpacing="2.5"
      >
        INFRA
      </text>
    </svg>
  );
};

/**
 * 11. Apco Infratech
 * Full vibrant colors: Vibrant Green (#16A34A) with white crosscut.
 */
export const ApcoLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="60,12 98,78 78,78 60,46 42,78 22,78"
        fill="#16A34A"
      />
      <polygon
        points="60,34 76,70 66,70 60,58 54,70 44,70"
        fill="#FFFFFF"
      />

      <text
        x="60"
        y="96"
        textAnchor="middle"
        fill="#16A34A"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="18"
        letterSpacing="2.5"
      >
        APCO
      </text>
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fill="#16A34A"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="7.5"
        letterSpacing="2"
      >
        INFRATECH
      </text>
    </svg>
  );
};

/**
 * 12. TATA Group
 * Full vibrant colors: Official TATA Blue oval (#004B9B) with White split fountain 'T' inside.
 */
export const TataLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Blue Rounded Oval Frame */}
      <ellipse cx="60" cy="50" rx="44" ry="34" fill="#004B9B" />

      {/* Iconic Branching Bifurcated 'T' Fountain (White) */}
      <path
        d="M38 36 C44 36 52 42 56 56 L56 68 L64 68 L64 56 C68 42 76 36 82 36 C74 40 68 50 66 62 L66 70 L54 70 L54 62 C52 50 46 40 38 36 Z"
        fill="#FFFFFF"
      />
      <line x1="60" y1="38" x2="60" y2="70" stroke="#FFFFFF" strokeWidth="2.5" />

      {/* Bold TATA Typography */}
      <text
        x="60"
        y="106"
        textAnchor="middle"
        fill="#004B9B"
        fontFamily="Helvetica, Arial, sans-serif"
        fontWeight="900"
        fontSize="21"
        letterSpacing="4"
      >
        TATA
      </text>
    </svg>
  );
};

/**
 * 13. Godrej
 * Full vibrant colors: Flowing signature cursive script in official Magenta (#9333EA), Blue (#0284C7), and Green (#10B981).
 */
export const GodrejLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 140 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 'G' loop */}
      <path
        d="M26 36 C22 26 32 18 42 26 C48 32 40 48 26 52 C18 54 14 46 16 38 C18 26 34 18 52 22 C62 24 66 32 60 42 C56 48 46 54 36 54 C24 54 20 44 24 34"
        stroke="#9333EA"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 'o' loop */}
      <ellipse cx="64" cy="42" rx="7" ry="8" stroke="#9333EA" strokeWidth="4" fill="none" />

      {/* 'd' stem and loop */}
      <ellipse cx="80" cy="42" rx="7" ry="8" stroke="#0284C7" strokeWidth="4" fill="none" />
      <path d="M87 16 L87 50" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />

      {/* 'r' curve */}
      <path d="M96 50 L96 36 C96 32 100 30 105 33" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />

      {/* 'e' loop */}
      <path d="M109 42 C109 34 119 34 119 40 C119 46 109 48 109 48 C113 50 119 49 121 46" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />

      {/* 'j' descender with sweeping dot */}
      <path d="M127 34 L127 58 C127 70 116 72 108 67" stroke="#10B981" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="127" cy="22" r="3" fill="#10B981" />

      {/* Baseline accent flourish */}
      <line x1="22" y1="74" x2="128" y2="74" stroke="#9333EA" strokeWidth="2" strokeDasharray="6 3" opacity="0.6" />
    </svg>
  );
};

/**
 * 14. Amul (GCMMF)
 * Full vibrant colors: Red badge (#DC2626), Butter girl face (#FED7AA), hair (#1E3A8A), White text (#FFFFFF), Green ribbon (#15803D).
 */
export const AmulLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 130 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Red Rounded Rectangle Body */}
      <rect x="8" y="10" width="114" height="66" rx="8" fill="#DC2626" />

      {/* Amul Butter Girl Head Illustration on Left */}
      <circle cx="28" cy="34" r="11" fill="#FED7AA" />
      <path d="M22 28 C22 20 34 18 36 28 C38 24 38 20 40 22 C42 26 38 32 38 34" fill="#1E3A8A" />
      <ellipse cx="38" cy="22" rx="3.5" ry="5" fill="#DC2626" />
      <path d="M18 45 C18 40 38 40 38 45 Z" fill="#FFFFFF" />

      {/* White Cursive "Amul" Wordmark */}
      <text
        x="76"
        y="44"
        textAnchor="middle"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fontFamily="'Century Gothic', 'VAG Rounded BT', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="1"
      >
        Amul
      </text>

      {/* Green Slogan Ribbon at Bottom */}
      <rect x="12" y="58" width="106" height="14" rx="3" fill="#15803D" />
      <text
        x="65"
        y="68"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="7"
        letterSpacing="0.8"
      >
        The Taste of India
      </text>
    </svg>
  );
};

/**
 * 15. ASHMI Group
 * Full vibrant colors: Red-Orange triangular geometric 'A' (#C2410C) with White cut and dashed arc.
 */
export const AshmiLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dashed Circular Arc around 'A' */}
      <path
        d="M26 68 C22 42 38 20 60 20 C82 20 98 42 94 68"
        stroke="#C2410C"
        strokeWidth="2.5"
        strokeDasharray="4 3"
        fill="none"
      />

      {/* Stylized Geometric Red-Orange 'A' */}
      <polygon
        points="60,24 88,74 72,74 60,52 48,74 32,74"
        fill="#C2410C"
      />
      {/* Inner White Cutout */}
      <polygon
        points="60,40 68,58 52,58"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="1"
      />

      {/* ASHMI Typography */}
      <text
        x="60"
        y="95"
        textAnchor="middle"
        fill="#C2410C"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="2.5"
      >
        ASHMI
      </text>
      <text
        x="60"
        y="107"
        textAnchor="middle"
        fill="#C2410C"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="8"
        letterSpacing="2"
      >
        GROUP
      </text>
    </svg>
  );
};

/**
 * 16. Sai Enterprises
 * Full vibrant colors: Architectural Orange hexagon (#EA580C) with highway curves.
 */
export const SaiLogo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hexagonal Geometric Crest */}
      <polygon
        points="60,16 94,36 94,76 60,96 26,76 26,36"
        stroke="#EA580C"
        strokeWidth="3.5"
        fill="none"
      />
      {/* S-curve Highway Ribbon */}
      <path
        d="M40 42 C56 36 68 48 60 56 C52 64 64 76 80 70"
        stroke="#EA580C"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* SAI Wordmark */}
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fill="#EA580C"
        fontFamily="'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="16"
        letterSpacing="2"
      >
        SAI
      </text>
    </svg>
  );
};

/**
 * Image-backed Logo Component factory
 */
export const createImageLogo = (
  imgSrc: string,
  alt: string,
  _FallbackSvg?: React.FC<LogoProps>
): React.FC<LogoProps> => {
  return ({ className = '', variant = 'badge' }) => {
    return (
      <img
        src={imgSrc}
        alt={alt}
        className={`object-contain transition-all duration-300 ${
          variant === 'watermark'
            ? 'w-full h-full drop-shadow-md select-none pointer-events-none'
            : 'max-h-full max-w-full drop-shadow-2xs'
        } ${className}`}
        loading="lazy"
      />
    );
  };
};

/**
 * Direct image map for all client logos
 */
export const clientLogoImages: Record<string, string> = {
  'MSRDC': msrdcImg,
  'PWD Maharashtra': pwdImg,
  'Statutory Highway Authorities': nhaiImg,
  'Larsen & Toubro (L&T)': ltImg,
  'HCC': hccImg,
  'NCC Limited': nccImg,
  'HMM Infra Limited': hmmImg,
  'MEP Infrastructure': mepImg,
  'Roadway Solutions': roadwayImg,
  'Pragati Infra': pragatiImg,
  'Apco Infratech': apcoImg,
  'TATA Group': tataImg,
  'Godrej': godrejImg,
  'Amul (GCMMF)': amulImg,
  'ASHMI': ashmiImg,
  'Sai Enterprises': saiImg,
};

export const getClientLogoImage = (name: string): string | null => {
  return clientLogoImages[name] || null;
};

/**
 * Master Registry mapping client names to their authentic Image Logo component.
 */
export const clientLogoMap: Record<string, React.FC<LogoProps>> = {
  // Tier 1 - Government
  'MSRDC': createImageLogo(msrdcImg, 'MSRDC', MsrdcLogo),
  'PWD Maharashtra': createImageLogo(pwdImg, 'PWD Maharashtra', PwdMaharashtraLogo),
  'Statutory Highway Authorities': createImageLogo(nhaiImg, 'NHAI', HighwayAuthorityLogo),

  // Tier 2 - National Infrastructure & EPC
  'Larsen & Toubro (L&T)': createImageLogo(ltImg, 'Larsen & Toubro', LtLogo),
  'HCC': createImageLogo(hccImg, 'Hindustan Construction Company', HccLogo),
  'NCC Limited': createImageLogo(nccImg, 'NCC Limited', NccLogo),
  'HMM Infra Limited': createImageLogo(hmmImg, 'HMM Infra Limited', HmmLogo),
  'MEP Infrastructure': createImageLogo(mepImg, 'MEP Infrastructure', MepLogo),
  'Roadway Solutions': createImageLogo(roadwayImg, 'Roadway Solutions', RoadwayLogo),
  'Pragati Infra': createImageLogo(pragatiImg, 'Pragati Infra', PragatiLogo),
  'Apco Infratech': createImageLogo(apcoImg, 'Apco Infratech', ApcoLogo),

  // Tier 3 - Corporate & Industrial
  'TATA Group': createImageLogo(tataImg, 'TATA Group', TataLogo),
  'Godrej': createImageLogo(godrejImg, 'Godrej', GodrejLogo),
  'Amul (GCMMF)': createImageLogo(amulImg, 'Amul', AmulLogo),
  'ASHMI': createImageLogo(ashmiImg, 'ASHMI Group', AshmiLogo),
  'Sai Enterprises': createImageLogo(saiImg, 'Sai Enterprises', SaiLogo),
};

/**
 * Helper to fetch a client logo component safely.
 */
export const getClientLogoComponent = (name: string): React.FC<LogoProps> | null => {
  return clientLogoMap[name] || null;
};
