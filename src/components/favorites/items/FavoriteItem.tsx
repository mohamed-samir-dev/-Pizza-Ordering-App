'use client'
import React from 'react';
import { Heart, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import {FavoriteItemProps} from '@/types/favorites/favorites'


export default function FavoriteItem({ item, onAddToCart, onRemoveFromFavorites }: FavoriteItemProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={item.image}
          alt={item.name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white">{item.name}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">{item.price}</span>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onRemoveFromFavorites(item.id, item.name)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </button>
            
            <button
              onClick={() => onAddToCart(item)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ShoppingBasket className="w-5 h-5 text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}