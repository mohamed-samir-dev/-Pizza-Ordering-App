'use client'
import React from 'react';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';

export const CartPage: React.FC = () => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const { showToast } = useToast();

  const handleCheckout = () => {
    showToast('Order placed successfully! 🍕', 'success', 4000);
    clearCart();
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Cart cleared', 'info');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800">
      {/* Navigation Bar */}
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
            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {items.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Order Items</h2>
              {items.map((item) => (
                <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-orange-500">
                            {item.price}
                          </span>
                          <span className="text-gray-400">each</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <Minus className="w-5 h-5 text-gray-400" />
                          </button>
                          <span className="text-white font-semibold text-lg min-w-12 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <Plus className="w-5 h-5 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Delivery Fee</span>
                    <span>$3.99</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span className="text-orange-500">
                        ${(totalPrice + 3.99 + totalPrice * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};