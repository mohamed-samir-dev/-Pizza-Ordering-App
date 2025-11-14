import { CartItem } from '@/types/cart';
import { FavoriteItem } from '@/contexts/FavoritesContext';

const CART_STORAGE_KEY = 'pizza-cart';
const FAVORITES_STORAGE_KEY = 'pizza-favorites';

export const saveCartToStorage = (items: CartItem[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }
};

export const loadCartFromStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export const saveFavoritesToStorage = (items: FavoriteItem[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(items));
  }
};

export const loadFavoritesFromStorage = (): FavoriteItem[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};