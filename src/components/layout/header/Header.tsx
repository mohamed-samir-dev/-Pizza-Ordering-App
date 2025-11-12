'use client'
import React from 'react';
import Logo from './branding/Logo';
import Navigation from './navigation/Navigation';
import ActionButtons from './actions/ActionButtons';
import MobileMenu from './mobile/MobileMenu';
import { useHeader } from '../../../hooks';

export default function Header() {
  const { isMenuOpen, cartCount, toggleMenu, closeMenu } = useHeader(3);

  return (
    <header className="bg-linear-to-r from-gray-900 via-black to-gray-800 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <Navigation />
          <ActionButtons 
            cartCount={cartCount}
            isMenuOpen={isMenuOpen}
            onMenuToggle={toggleMenu}
          />
        </div>
        <MobileMenu 
          isOpen={isMenuOpen}
          onClose={closeMenu}
          cartCount={cartCount}
        />
      </div>
    </header>
  );
}