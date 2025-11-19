'use client'
import { FiSearch } from 'react-icons/fi';

export default function SearchButton() {
  return (
    <button 
      className="hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label="Search pizzas"
    >
      <FiSearch className="w-5 h-5 text-gray-300 group-hover:text-white" />
    </button>
  );
}