import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (count, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    if (!isTriggered) return;

    const timers = [];
    for (let i = 0; i < count; i++) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * delay);
      timers.push(timer);
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isTriggered, count, delay]);

  return [visibleItems, setIsTriggered];
};
