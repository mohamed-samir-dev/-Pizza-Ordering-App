'use client'
import React from 'react';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function EmptyFavorites() {
  return (
    <div className="text-center py-20">
      <Heart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">No favorites yet</h2>
      <p className="text-gray-500 mb-8">Start adding pizzas to your favorites by clicking the heart icon!</p>
      <Link 
        href="/"
        className="inline-flex items-center space-x-2 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        <span>Browse Menu</span>
      </Link>
    </div>
  );
}