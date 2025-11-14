'use client'
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../../../../hooks';

export default function MobileUserProfile() {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!currentUser) return null;

  return (
    <div className="space-y-3">
      <div className="text-center text-gray-300 text-sm">
        Hi, {currentUser.name}
      </div>
      <button
        onClick={handleLogout}
        className="w-full bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <FiLogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </div>
  );
}