'use client'
import React from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {FavoritesHeaderProps} from '@/types/favorites/favorites';

export default function FavoritesHeader({ favoritesCount }: FavoritesHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Link 
          href="/"
          className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
          <h1 className="text-sm sm:text-2xl md:text-3xl font-bold">My Favorites</h1>
          <span className="bg-red-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
            {favoritesCount}
          </span>
        </div>
      </div>
    </div>
  );
}