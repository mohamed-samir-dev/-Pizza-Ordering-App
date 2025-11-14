'use client'
import React from 'react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';
import FavoritesHeader from '@/components/favorites/items/FavoritesHeader';
import EmptyFavorites from '@/components/favorites/display/EmptyFavorites';
import FavoritesList from '@/components/favorites/display/FavoritesList';

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
    });
  };

  const handleRemoveFromFavorites = (id: number, name: string) => {
    removeFromFavorites(id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <FavoritesHeader favoritesCount={favorites.length} />
        
        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
          <FavoritesList
            favorites={favorites}
            onAddToCart={handleAddToCart}
            onRemoveFromFavorites={handleRemoveFromFavorites}
          />
        )}
      </div>
    </div>
  );
}