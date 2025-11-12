import { useState } from 'react';
import { HeaderState } from '../types/header';

export const useHeader = (initialCartCount: number = 0): HeaderState & {
  toggleMenu: () => void;
  closeMenu: () => void;
  setCartCount: (count: number) => void;
} => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(initialCartCount);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return {
    isMenuOpen,
    cartCount,
    toggleMenu,
    closeMenu,
    setCartCount,
  };
};