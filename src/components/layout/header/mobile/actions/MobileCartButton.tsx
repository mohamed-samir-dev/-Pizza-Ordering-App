'use client'
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '@/contexts/CartContext';
import { useCartGuard } from '@/hooks/auth/useCartGuard';

interface MobileCartButtonProps {
  onClose: () => void;
}

export default function MobileCartButton({ onClose }: MobileCartButtonProps) {
  const { totalItems } = useCart();
  const { checkAuthAndNavigate } = useCartGuard();

  const handleCartClick = () => {
    if (checkAuthAndNavigate('/cart')) {
      onClose();
    }
  };

  return (
    <button 
      onClick={handleCartClick}
      className="relative w-full bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-gray-300 hover:text-white"
    >
      <FiShoppingCart className="w-4 h-4" />
      <span>Basket</span>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
          {totalItems}
        </span>
      )}
    </button>
  );
}