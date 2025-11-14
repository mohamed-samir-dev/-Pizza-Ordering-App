'use client'
import { Heart } from "lucide-react";
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCartGuard } from '@/hooks/auth/useCartGuard';

export default function FavoritesButton() {
  const { totalFavorites } = useFavorites();
  const { checkAuthAndNavigate } = useCartGuard();

  const handleFavoritesClick = () => {
    checkAuthAndNavigate('/favorites');
  };

  return (
    <button 
      onClick={handleFavoritesClick}
      className="relative hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 group cursor-pointer"
    >
      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
      {totalFavorites > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
          {totalFavorites}
        </span>
      )}
    </button>
  );
}