import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const CountUp = ({
  value,
  duration = 1.6,
  className = '',
  prefix = '',
  suffix = '',
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  
  const stringVal = String(value);

  const [displayValue, setDisplayValue] = useState<string>(() => {
    const match = stringVal.replace(/,/g, '').match(/[\d.]+/);
    return !match ? stringVal : '0';
  });

  useEffect(() => {
    const match = stringVal.replace(/,/g, '').match(/[\d.]+/);
    if (!match || !isInView) {
      return;
    }

    const targetNum = parseFloat(match[0]);
    const isDecimal = match[0].includes('.');
    const decimalPlaces = isDecimal ? match[0].split('.')[1].length : 0;
    const hasCommas = stringVal.includes(',');

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let frameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNum = targetNum * easedProgress;

      let formattedNumber: string;
      if (isDecimal) {
        formattedNumber = currentNum.toFixed(decimalPlaces);
      } else {
        formattedNumber = Math.round(currentNum).toString();
      }

      if (hasCommas) {
        formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      const replaced = stringVal.replace(match[0], formattedNumber);
      setDisplayValue(replaced);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      }
    };

    frameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [stringVal, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};
