'use client'
import React from 'react';
import { Heart, ShoppingBasket, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';

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
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
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
                {favorites.length}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">{item.price}</span>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleRemoveFromFavorites(item.id, item.name)}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Heart className="w-5 h-5 text-red-500 fill-current" />
                      </button>
                      
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <ShoppingBasket className="w-5 h-5 text-orange-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}