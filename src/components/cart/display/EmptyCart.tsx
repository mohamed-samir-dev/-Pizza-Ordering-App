'use client'
import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="text-center py-20">
      <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
      <p className="text-gray-400 text-lg mb-8">Add some delicious pizzas to get started!</p>
      <Link 
        href="/"
        className="inline-flex items-center space-x-2 bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Continue Shopping</span>
      </Link>
    </div>
  );
}