'use client'
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../../../../hooks';

export default function UserProfile() {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!currentUser) return null;

  return (
    <div className="hidden lg:flex items-center space-x-3">
      <span className="text-gray-300 text-sm">Hi, {currentUser.name}</span>
      <button 
        onClick={handleLogout}
        className="bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer"
      >
        <FiLogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </div>
  );
}