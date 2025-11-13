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
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 sticky top-32">
      <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal ({totalItems} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <div className="flex justify-between text-xl font-bold text-white">
            <span>Total</span>
            <span className="text-orange-500">
              ${finalTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onCheckout}
        className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        <CreditCard className="w-5 h-5" />
        <span>Proceed to Checkout</span>
      </button>
      
      <Link 
        href="/"
        className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Continue Shopping</span>
      </Link>
    </div>
  );
}