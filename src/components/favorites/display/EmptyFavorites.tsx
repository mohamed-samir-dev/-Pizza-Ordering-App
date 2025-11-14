'use client'
import React from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function EmptyFavorites() {
  return (
    <div className="text-center py-12 sm:py-16 md:py-20 px-4">
      <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-600 mx-auto mb-4 sm:mb-6" />
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-3 sm:mb-4">No favorites yet</h2>
      <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto">Start adding pizzas to your favorites by clicking the heart icon!</p>
      <Link 
        href="/"
        className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
      >
        <span>Browse Menu</span>
      </Link>
    </div>
  );
}