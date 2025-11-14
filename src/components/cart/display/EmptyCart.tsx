'use client'
import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="text-center py-12 sm:py-16 lg:py-20 px-4">
      <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-600 mx-auto mb-4 sm:mb-6" />
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Your cart is empty</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">Add some delicious pizzas to get started!</p>
      <Link 
        href="/"
        className="inline-flex items-center space-x-2 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Continue Shopping</span>
      </Link>
    </div>
  );
}