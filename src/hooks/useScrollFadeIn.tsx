import { useCallback, useEffect, useRef } from "react";

export const useScrollMove = ({ x = 450, duration = 1, delay = 0 }) => {
  const dom = useRef<any>();

  const handleScroll = useCallback(
    ([entry]) => {
      const { current }: { current: any } = dom;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.marginLeft = `${x}px !important`;
        current.style.transitionDelay = `${delay}s`;
      }
    },
    [delay, duration, x]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      // threshold : 노출 비율 0.7 = 70% 정도 도출되었을 때 나타남
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
  };
};
