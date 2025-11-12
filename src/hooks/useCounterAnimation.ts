import { useEffect, useState, useRef } from 'react';

export const useCounterAnimation = (targets: number[], delay: number = 1500, duration: number = 2000) => {
  const [counters, setCounters] = useState<number[]>(targets.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    const animateCounter = (target: number, index: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = target;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(start);
            return newCounters;
          });
        }
      }, 16);
    };

    const delayTimer = setTimeout(() => {
      targets.forEach((target, index) => {
        animateCounter(target, index);
      });
      hasAnimated.current = true;
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [targets, delay, duration]);

  return counters;
};