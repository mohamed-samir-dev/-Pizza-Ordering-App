"use client";

import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MenuHeader } from "./components/ui/MenuHeader";
import { PizzaCarousel } from "./components/navigation/PizzaCarousel";
import { useAnnotation } from "../../hooks/ui/useAnnotation";
import { useCarousel } from "../../hooks/navigation/useCarousel";
import { useSwipeNavigation } from "../../hooks/navigation/useSwipeNavigation";
import { pizzas } from "./data/pizzas";

export default function PizzaMenu() {
  const { hottestDishRef } = useAnnotation();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPizzas = useMemo(() => {
    if (!searchTerm.trim()) return pizzas;
    return pizzas.filter(pizza => 
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  const { currentIndex, nextSlide, prevSlide } = useCarousel(filteredPizzas.length);
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
      id="menu"
      className="bg-black min-h-screen flex flex-col items-center justify-center py-6 sm:py-8 lg:py-12 px-2"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <MenuHeader hottestDishRef={hottestDishRef} />
      
      <div className="w-full max-w-md mx-auto mb-8">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search pizza names..."
            className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>
      <PizzaCarousel 
        pizzas={filteredPizzas}
        currentIndex={currentIndex}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
      {searchTerm && (
        <div className="mt-4 text-center">
          <span className="text-gray-400 text-sm">
            Showing {filteredPizzas.length} result{filteredPizzas.length !== 1 ? 's' : ''} for `&ldquo;`{searchTerm}`&ldquo;`
          </span>
        </div>
      )}
      <div className="mt-4 text-gray-400 text-sm text-center">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  );
}