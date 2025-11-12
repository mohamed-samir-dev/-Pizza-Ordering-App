import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

export const useAnnotation = () => {
  const hottestDishRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hottestDishRef.current) {
      const annotation = annotate(hottestDishRef.current, {
        type: "circle",
        color: "#ff6b35",
        strokeWidth: 4,
        iterations: 2,
        animationDuration: 2000,
        padding: 15,
      });

      const timer = setTimeout(() => {
        annotation.show();
      }, 1500);

      return () => {
        clearTimeout(timer);
        annotation.hide();
      };
    }
  }, []);

  return { hottestDishRef };
};