'use client'
import React from 'react';
import FavoriteItem from '../items/FavoriteItem';
import {FavoritesListProps} from '@/types/favorites/favorites';


export default function FavoritesList({ favorites, onAddToCart, onRemoveFromFavorites }: FavoritesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
      {favorites.map((item) => (
        <FavoriteItem
          key={item.id}
          item={item}
          onAddToCart={onAddToCart}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      ))}
    </div>
  );
}