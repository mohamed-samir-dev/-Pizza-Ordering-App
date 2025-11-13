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
    showToast('Cart cleared', 'info');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800">
      <CartHeader 
        totalItems={totalItems}
        hasItems={items.length > 0}
        onClearCart={handleClearCart}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Order Items</h2>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeItem}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
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