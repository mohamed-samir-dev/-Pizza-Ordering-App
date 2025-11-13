'use client'
import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';

export const CartSidebar: React.FC = () => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart, isCartOpen, toggleCart } = useCart();
  const { showToast } = useToast();

  const handleCheckout = () => {
    showToast('Order placed successfully! 🍕', 'success', 4000);
    clearCart();
    toggleCart();
  };

  const handleClearCart = () => {
    clearCart();
    showToast('Cart cleared', 'info');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={toggleCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-bold text-white">Your Cart</h2>
              <span className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                {totalItems}
              </span>
            </div>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-2">Add some delicious pizzas to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-sm truncate">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-orange-500 font-bold">
                            {item.price}
                          </span>
                          
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                            >
                              <Minus className="w-4 h-4 text-gray-400" />
                            </button>
                            <span className="text-white font-semibold min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                            >
                              <Plus className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-gray-700 rounded transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-700 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Total:</span>
                <span className="text-2xl font-bold text-orange-500">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={handleClearCart}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};