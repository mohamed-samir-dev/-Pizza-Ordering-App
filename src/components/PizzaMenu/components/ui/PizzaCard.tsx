import { ShoppingBasket, Star } from "lucide-react";
import Image from "next/image";
import { PizzaCardProps } from "@/types/components/PizzaMenu";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      image: pizza.image,
      description: pizza.description,
    });
    
    // Brief animation feedback
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <div
      key={pizza.id}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-2 sm:px-4"
    >
      <div
        className="rounded-lg p-2 sm:p-4 relative hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        style={{ backgroundColor: "#191c1f" }}
      >
        {/* Heart Icon */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Pizza Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
          <Image
            src={pizza.image}
            alt={pizza.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pizza Info */}
        <div className="text-left">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
            {pizza.name}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3">
            {pizza.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <span className="text-orange-500 text-base sm:text-lg font-bold ml-1 sm:ml-2">
                {pizza.price}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`transition-all duration-300 ${
                isAdding ? 'scale-95 opacity-75' : 'hover:scale-110'
              }`}
            >
              {isAdding ? (
                <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingBasket className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
