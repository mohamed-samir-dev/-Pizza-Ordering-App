'use client'
import React from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {FavoritesHeaderProps} from '@/types/favorites/favorites';

export default function FavoritesHeader({ favoritesCount }: FavoritesHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <Link 
          href="/"
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </Link>
        <div className="flex items-center space-x-3">
          <Heart className="w-8 h-8 text-red-500" />
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
            {favoritesCount}
          </span>
        </div>
      </div>
    </div>
  );
}