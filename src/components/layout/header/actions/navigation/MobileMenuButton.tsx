'use client'
import { FiMenu, FiX } from 'react-icons/fi';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function MobileMenuButton({ isMenuOpen, onMenuToggle }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onMenuToggle}
      className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
    </button>
  );
}