import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export const useHeroAnnotation = () => {
  const todayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (todayRef.current) {
      const annotation = annotate(todayRef.current, {
        type: "circle",
        color: "#ff6b35",
        strokeWidth: 3,
        iterations: 2,
        animationDuration: 3000,
        padding: 13,
        multiline: true,
      });

      const timer = setTimeout(() => {
        annotation.show();
      }, 800);

      return () => {
        clearTimeout(timer);
        annotation.hide();
      };
    }
  }, []);

  return { todayRef };
};