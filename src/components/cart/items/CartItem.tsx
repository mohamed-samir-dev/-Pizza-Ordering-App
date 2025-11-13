"use client";
import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { CartItemProps } from "@/types/cart/cart";

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemoveItem,
}: CartItemProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
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
          <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{item.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-orange-500">
                {item.price}
              </span>
              <span className="text-gray-400">each</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Minus className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-white font-semibold text-lg min-w-12 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => onRemoveItem(item.id)}
          className="p-2 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
