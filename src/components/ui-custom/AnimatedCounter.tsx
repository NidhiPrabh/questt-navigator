
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className,
  decimals = 0,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const startTime = performance.now();
          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = progress * end;
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(countRef.current);

    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef} className={cn("font-bold", className)}>
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
