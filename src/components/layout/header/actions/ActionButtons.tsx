'use client'
import { FiSearch, FiUser, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { ActionButtonsProps } from '../../../../types';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../hooks';
import { ShoppingBasket } from "lucide-react";

export default function ActionButtons({ cartCount, isMenuOpen, onMenuToggle }: ActionButtonsProps) {
  const router = useRouter();
  const { currentUser, logout } = useAuth();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center space-x-4">
      <button className="hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 group cursor-pointer">
        <FiSearch className="w-5 h-5 text-gray-300 group-hover:text-white" />
      </button>
      
      <button className="relative hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 group cursor-pointer">
      <ShoppingBasket className="w-8 h-8 sm:w-5 sm:h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
      {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            {cartCount}
          </span>
        )}
      </button>
      
      {currentUser ? (
        <div className="hidden lg:flex items-center space-x-3">
          <span className="text-gray-300 text-sm">Hi, {currentUser.name}</span>
          <button 
            onClick={handleLogout}
            className="bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2  cursor-pointer"
          >
            <FiLogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      ) : (
        <button 
          onClick={handleLogin}
          className="hidden lg:flex bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl items-center space-x-2  cursor-pointer"
        >
          <FiUser className="w-4 h-4" />
          <span>Login</span>
        </button>
      )}
      
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
      >
        {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>
    </div>
  );
}