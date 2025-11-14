'use client'
import React from 'react';
import { CreditCard, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {OrderSummaryProps} from '@/types/cart/cart'


export default function OrderSummary({ totalItems, totalPrice, onCheckout }: OrderSummaryProps) {
  const deliveryFee = 3.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + deliveryFee + tax;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 xl:sticky xl:top-32">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Order Summary</h3>
      
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <div className="flex justify-between text-gray-300 text-sm sm:text-base">
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300 text-sm sm:text-base">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300 text-sm sm:text-base">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-600 pt-3 sm:pt-4">
          <div className="flex justify-between text-lg sm:text-xl font-bold text-white">
            <span>Total</span>
            <span className="text-orange-500">
              ${finalTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onCheckout}
        className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
      >
        <CreditCard className="w-4 h-4 sm:w-5 sm:h-4" />
        <span>Proceed to Checkout</span>
      </button>
      
      <Link 
        href="/"
        className="w-full mt-3 sm:mt-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Continue Shopping</span>
      </Link>
    </div>
  );
}