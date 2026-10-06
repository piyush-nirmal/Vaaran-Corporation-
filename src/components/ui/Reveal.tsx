import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn, clipReveal } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'clipReveal';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const Reveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration,
  className = '',
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  const variantMap = {
    fadeUp,
    fadeIn,
    scaleIn,
    clipReveal,
  };

  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{
        delay,
        ...(duration ? { duration } : {}),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
