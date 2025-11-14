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
    <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:shadow-orange-500/20 transition-shadow duration-300">
          <Image
            src={item.image}
            alt={item.name}
            width={128}
            height={128}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex-1 min-w-0 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{item.name}</h3>
          <p className="text-gray-300 mb-4 line-clamp-2 text-sm sm:text-base leading-relaxed">{item.description}</p>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 gap-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {item.price}
              </span>
              <span className="text-gray-400 text-sm">each</span>
            </div>

            <div className="flex items-center bg-gray-700/50 rounded-xl p-1 space-x-1">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-2 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg transition-all duration-200 active:scale-95"
                disabled={item.quantity <= 1}
              >
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="bg-gray-600/50 rounded-lg px-4 py-2 min-w-12">
                <span className="text-white font-bold text-lg text-center block">
                  {item.quantity}
                </span>
              </div>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-orange-500/20 hover:text-orange-400 rounded-lg transition-all duration-200 active:scale-95"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-2 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg transition-all duration-200 active:scale-95"
              >
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
