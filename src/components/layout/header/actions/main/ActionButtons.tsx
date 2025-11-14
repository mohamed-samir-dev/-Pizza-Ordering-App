'use client'
import { ActionButtonsProps } from '@/types';
import { useAuth } from '@/hooks';
import SearchButton from '../search/SearchButton';
import FavoritesButton from '../shopping/FavoritesButton';
import CartButton from '../shopping/CartButton';
import LoginButton from '../auth/LoginButton';
import UserProfile from '../auth/UserProfile';
import MobileMenuButton from '../navigation/MobileMenuButton';

export default function ActionButtons({ isMenuOpen, onMenuToggle }: Omit<ActionButtonsProps, 'cartCount'>) {
  const { currentUser } = useAuth();

  return (
    <div className="flex items-center space-x-4">
      <SearchButton />
      <FavoritesButton />
      <CartButton />
      {currentUser ? <UserProfile /> : <LoginButton />}
      <MobileMenuButton isMenuOpen={isMenuOpen} onMenuToggle={onMenuToggle} />
    </div>
  );
}