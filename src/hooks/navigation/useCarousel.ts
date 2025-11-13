import { useState } from "react";

export const useCarousel = (totalItems: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(1, totalItems - 3);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
  };

  return { currentIndex, nextSlide, prevSlide };
};