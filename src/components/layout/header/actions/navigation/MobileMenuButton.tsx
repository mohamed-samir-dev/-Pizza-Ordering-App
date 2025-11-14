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
      className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
    >
      {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
    </button>
  );
}