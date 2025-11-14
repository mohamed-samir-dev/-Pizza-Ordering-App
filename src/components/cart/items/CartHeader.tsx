'use client'
import React from 'react';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';
import Link from 'next/link';
import {CartHeaderProps}from '@/types/cart/cart'

export default function CartHeader({ totalItems, hasItems, onClearCart }: CartHeaderProps) {
  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
            <Link 
              href="/"
              className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-white transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-sm sm:text-base">Back to Menu</span>
              <span className="sm:hidden text-sm">Back</span>
            </Link>
            <div className="h-4 sm:h-6 w-px bg-gray-600" />
            <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 shrink-0" />
              <h1 className="text-lg sm:text-xl font-bold text-white truncate">Shopping Cart</h1>
              <span className="bg-orange-500 text-white text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shrink-0">
                {totalItems}
              </span>
            </div>
          </div>
          {hasItems && (
            <button
              onClick={onClearCart}
              className="flex items-center space-x-1 sm:space-x-2 text-red-400 hover:text-red-300 transition-colors shrink-0"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline text-sm sm:text-base">Clear All</span>
              <span className="sm:hidden text-sm">Clear</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}