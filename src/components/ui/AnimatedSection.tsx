import { type ReactNode, type FC } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  distance = 24,
  ...rest
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier curve
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
