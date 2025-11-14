'use client'
import { ShoppingBasket } from "lucide-react";
import { useCart } from '@/contexts/CartContext';
import { useCartGuard } from '@/hooks/auth/useCartGuard';

export default function CartButton() {
  const { totalItems } = useCart();
  const { checkAuthAndNavigate } = useCartGuard();

  const handleCartClick = () => {
    checkAuthAndNavigate('/cart');
  };

  return (
    <button 
      onClick={handleCartClick}
      className="relative hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 group cursor-pointer"
    >
      <ShoppingBasket className="w-8 h-8 sm:w-5 sm:h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
          {totalItems}
        </span>
      )}
    </button>
  );
}