"use client";

import { useEffect } from "react";
import { MenuHeader } from "./components/ui/MenuHeader";
import { PizzaCarousel } from "./components/navigation/PizzaCarousel";
import { useAnnotation } from "../../hooks/ui/useAnnotation";
import { useCarousel } from "../../hooks/navigation/useCarousel";
import { useSwipeNavigation } from "../../hooks/navigation/useSwipeNavigation";
import { pizzas } from "./data/pizzas";

export default function PizzaMenu() {
  const { hottestDishRef } = useAnnotation();
  const { currentIndex, nextSlide, prevSlide } = useCarousel(pizzas.length);
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeNavigation(nextSlide, prevSlide);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="bg-black min-h-screen flex flex-col items-center justify-center py-6 sm:py-8 lg:py-12 px-2"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <MenuHeader hottestDishRef={hottestDishRef} />
      <PizzaCarousel 
        pizzas={pizzas}
        currentIndex={currentIndex}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
      <div className="mt-4 text-gray-400 text-sm text-center">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  );
}