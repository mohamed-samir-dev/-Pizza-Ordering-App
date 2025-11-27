'use client'
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function MobileSearchButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/#menu')}
      className="w-full bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-gray-300 hover:text-white"
    >
      <FiSearch className="w-4 h-4" />
      <span>Search</span>
    </button>
  );
}