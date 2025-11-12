import { NavigationButton } from "./NavigationButton";
import { PizzaCard } from "./PizzaCard";
import { PizzaCarouselProps } from "../types";



export const PizzaCarousel = ({ pizzas, currentIndex, onNext, onPrev }: PizzaCarouselProps) => {
  const getTransformValue = () => {
    // Mobile: 100% (1 item), SM: 50% (2 items), LG: 33.33% (3 items), XL: 25% (4 items)
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return currentIndex * 100;
      if (window.innerWidth < 1024) return currentIndex * 50;
      if (window.innerWidth < 1280) return currentIndex * 33.33;
    }
    return currentIndex * 25;
  };

  return (
    <div
      className="relative w-full max-w-7xl rounded-2xl p-4 sm:p-6 lg:p-8 mx-4"
      style={{ backgroundColor: "#070708" }}
    >
      <NavigationButton direction="left" onClick={onPrev} />
      <NavigationButton direction="right" onClick={onNext} />

      <div className="overflow-hidden px-8 sm:px-12 lg:px-16 py-4">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${getTransformValue()}%)` }}
        >
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};