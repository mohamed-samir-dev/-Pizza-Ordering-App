'use client'
import { FiHeart } from 'react-icons/fi';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCartGuard } from '@/hooks/auth/useCartGuard';

interface MobileFavoritesButtonProps {
  onClose: () => void;
}

export default function MobileFavoritesButton({ onClose }: MobileFavoritesButtonProps) {
  const { totalFavorites } = useFavorites();
  const { checkAuthAndNavigate } = useCartGuard();

  const handleFavoritesClick = () => {
    if (checkAuthAndNavigate('/favorites')) {
      onClose();
    }
  };

  return (
    <button 
      onClick={handleFavoritesClick}
      className="relative w-full bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-gray-300 hover:text-white"
    >
      <FiHeart className="w-4 h-4" />
      <span>Favorites</span>
      {totalFavorites > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
          {totalFavorites}
        </span>
      )}
    </button>
  );
}