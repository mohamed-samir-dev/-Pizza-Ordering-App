"use client";

import { MenuHeader } from "./components/MenuHeader";
import { PizzaCarousel } from "./components/PizzaCarousel";
import { useAnnotation } from "../../hooks/useAnnotation";
import { useCarousel } from "../../hooks/useCarousel";
import { pizzas } from "./data/pizzas";

export default function PizzaMenu() {
  const { hottestDishRef } = useAnnotation();
  const { currentIndex, nextSlide, prevSlide } = useCarousel(pizzas.length);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-6 sm:py-8 lg:py-12 px-2">
      <MenuHeader hottestDishRef={hottestDishRef} />
      <PizzaCarousel 
        pizzas={pizzas}
        currentIndex={currentIndex}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}