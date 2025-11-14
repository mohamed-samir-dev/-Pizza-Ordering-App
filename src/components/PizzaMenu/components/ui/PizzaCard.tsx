import { ShoppingBasket, Star, Heart } from "lucide-react";
import Image from "next/image";
import { PizzaCardProps } from "@/types/components/PizzaMenu";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useToast } from "@/contexts/ToastContext";
import { useState } from "react";

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const { addItem } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const { showToast } = useToast();
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

  const handleToggleFavorite = () => {
    if (isFavorite(pizza.id)) {
      removeFromFavorites(pizza.id);
    } else {
      addToFavorites({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        image: pizza.image,
        description: pizza.description,
      });
    }
  };

  return (
    <div
      key={pizza.id}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 px-2 sm:px-4"
    >
      <div
        className="rounded-lg p-3 sm:p-4 relative hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col"
        style={{ backgroundColor: "#191c1f" }}
      >
        {/* Heart Icon */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <button onClick={handleToggleFavorite}>
            <Heart
              className={`w-5 h-5 sm:w-6 sm:h-6 cursor-pointer transition-colors ${
                isFavorite(pizza.id)
                  ? 'text-red-500 fill-current'
                  : 'text-gray-400 hover:text-red-500'
              }`}
            />
          </button>
        </div>

        {/* Pizza Image */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={pizza.image}
            alt={pizza.name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pizza Info */}
        <div className="text-left flex-1 flex flex-col min-h-0">
          <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 line-clamp-2 break-words">
            {pizza.name}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 break-words flex-1">
            {pizza.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1 min-w-0 flex-1">
              <div className="flex items-center gap-0.5 flex-shrink-0">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              </div>
              <span className="text-orange-500 text-sm sm:text-base lg:text-lg font-bold ml-1 truncate">
                {pizza.price}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`transition-all duration-300 flex-shrink-0 ml-2 ${
                isAdding ? 'scale-95 opacity-75' : 'hover:scale-110'
              }`}
            >
              {isAdding ? (
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingBasket className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
