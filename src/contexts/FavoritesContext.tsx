'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { saveFavoritesToStorage, loadFavoritesFromStorage } from '@/utils/localStorage';

export interface FavoriteItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
  totalFavorites: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    setFavorites(loadFavoritesFromStorage());
  }, []);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(prev => {
      const updated = [...prev, item];
      saveFavoritesToStorage(updated);
      return updated;
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavorites(prev => {
      const updated = prev.filter(item => item.id !== id);
      saveFavoritesToStorage(updated);
      return updated;
    });
  };

  const isFavorite = (id: number) => {
    return favorites.some(item => item.id === id);
  };

  const totalFavorites = favorites.length;

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      totalFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};