'use client'
import { MobileMenuProps } from '../../../../types';
import { useAuth } from '../../../../hooks';
import MobileNavigation from './navigation/MobileNavigation';
import MobileSearchButton from './actions/MobileSearchButton';
import MobileFavoritesButton from './actions/MobileFavoritesButton';
import MobileCartButton from './actions/MobileCartButton';
import MobileLoginButton from './auth/MobileLoginButton';
import MobileUserProfile from './auth/MobileUserProfile';

export default function MobileMenu({
  isOpen,
  onClose,
  // cartCount = 0,
}: MobileMenuProps) {
  const { currentUser } = useAuth();

  return (
    <div
      className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="py-4 space-y-4 border-t border-gray-700/50 text-center">
        <MobileNavigation onClose={onClose} />
        <div className="px-4 pt-4 border-t border-gray-700/50 space-y-3">
          <MobileSearchButton />
          <MobileFavoritesButton onClose={onClose} />
          <MobileCartButton onClose={onClose} />
          {currentUser ? (
            <MobileUserProfile />
          ) : (
            <MobileLoginButton onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
