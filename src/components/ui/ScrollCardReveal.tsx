import React, { type ReactNode, type FC } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

export interface ScrollCardRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scaleInitial?: number;
  className?: string;
}

/**
 * Yocket-inspired progressive scroll reveal card.
 * Employs restrained upward motion (24-32px), subtle scale settling (0.985 -> 1),
 * smooth opacity fade-in, and an engineered ease-out curve.
 * Automatically respects prefers-reduced-motion.
 */
export const ScrollCardReveal: FC<ScrollCardRevealProps> = ({
  children,
  delay = 0,
  duration = 0.58,
  yOffset = 28,
  scaleInitial = 0.988,
  className = '',
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: scaleInitial }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth progressive deceleration curve
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
