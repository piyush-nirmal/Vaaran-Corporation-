import type { FC } from 'react';
import modernLogo from '../assets/Varan modernLogo.png';

interface VrnLogoProps {
  className?: string;
  size?: number;
  alt?: string;
}

export const VrnLogo: FC<VrnLogoProps> = ({ 
  className = '', 
  size, 
  alt = 'Varan Corporation Modern Logo' 
}) => {
  return (
    <img
      src={modernLogo}
      alt={alt}
      className={`object-contain inline-block select-none shrink-0 ${className}`}
      style={size ? { height: `${size}px`, width: 'auto' } : undefined}
      loading="eager"
      decoding="async"
    />
  );
};
