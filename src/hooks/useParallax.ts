import { useState, useEffect, RefObject } from 'react';

export function useParallax(ref: RefObject<HTMLElement>) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = rect.top / window.innerHeight;
        setScrollY(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return { scrollY };
}