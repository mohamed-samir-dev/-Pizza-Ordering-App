'use client'
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function SearchButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/#menu')}
      className="hidden lg:flex p-2 rounded-lg transition-colors duration-300 group cursor-pointer "
      aria-label="Search pizzas"
    >
      <FiSearch className="w-5 h-5 text-gray-300 group-hover:text-white" />
    </button>
  );
}