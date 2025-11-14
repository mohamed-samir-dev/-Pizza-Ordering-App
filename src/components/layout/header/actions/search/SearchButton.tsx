'use client'
import { FiSearch } from 'react-icons/fi';

export default function SearchButton() {
  return (
    <button className="hidden lg:flex p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 group cursor-pointer">
      <FiSearch className="w-5 h-5 text-gray-300 group-hover:text-white" />
    </button>
  );
}