'use client'
import { useEffect, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useSearch } from '@/contexts/SearchContext';

export default function SearchModal() {
  const { searchTerm, setSearchTerm, isSearchOpen, setIsSearchOpen } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-4 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-semibold">Search Pizzas</h2>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search pizza names..."
            className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 "
          />
        </div>
        
        <div className="mt-4 text-sm text-gray-400">
          Type to filter pizzas by name
        </div>
      </div>
    </div>
  );
}