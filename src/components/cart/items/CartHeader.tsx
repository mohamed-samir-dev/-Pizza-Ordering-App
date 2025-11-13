'use client'
import React from 'react';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';
import Link from 'next/link';
import {CartHeaderProps}from '@/types/cart/cart'

export default function CartHeader({ totalItems, hasItems, onClearCart }: CartHeaderProps) {
  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Menu</span>
            </Link>
            <div className="h-6 w-px bg-gray-600" />
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-orange-500" />
              <h1 className="text-xl font-bold text-white">Shopping Cart</h1>
              <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                {totalItems}
              </span>
            </div>
          </div>
          {hasItems && (
            <button
              onClick={onClearCart}
              className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}