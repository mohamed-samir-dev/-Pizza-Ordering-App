'use client'
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';
import CartHeader from '../items/CartHeader';
import EmptyCart from './EmptyCart';
import CartItem from '../items/CartItem';
import OrderSummary from '../order/OrderSummary';

export const CartPage: React.FC = () => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart();
  const { showToast } = useToast();

  const handleCheckout = () => {
    showToast('Order placed successfully! 🍕', 'success', 4000);
    clearCart();
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800">
      <CartHeader 
        totalItems={totalItems}
        hasItems={items.length > 0}
        onClearCart={handleClearCart}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Order Items</h2>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeItem}
                />
              ))}
            </div>

            <div className="xl:col-span-1">
              <OrderSummary
                totalItems={totalItems}
                totalPrice={totalPrice}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};