export interface FavoritesListProps {
  favorites: any[];
  onAddToCart: (item: any) => void;
  onRemoveFromFavorites: (id: number, name: string) => void;
}
export interface FavoriteItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
  };
  onAddToCart: (item: any) => void;
  onRemoveFromFavorites: (id: number, name: string) => void;
}
export interface FavoritesHeaderProps {
  favoritesCount: number;
}
