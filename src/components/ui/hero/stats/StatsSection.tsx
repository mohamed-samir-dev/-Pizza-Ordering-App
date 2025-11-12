'use client'
import { FiStar, FiTruck } from 'react-icons/fi';
import { Pizza } from 'lucide-react';
import { useCounterAnimation } from '../../../../hooks';

export default function StatsSection() {
  const [reviews, foodItems, restaurants] = useCounterAnimation([350000, 8000, 3000]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
      <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
        <div className="bg-yellow-500/20 p-2 rounded-full shrink-0">
          <FiStar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
        </div>
        <div className="min-w-0">
          <p className="text-xl sm:text-2xl font-bold">{reviews >= 1000 ? `${Math.floor(reviews/1000)}k+` : reviews}</p>
          <p className="text-xs sm:text-sm text-gray-400">Reviews (4.8★)</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
        <div className="bg-orange-500/20 p-2 rounded-full shrink-0">
          <Pizza className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
        </div>
        <div className="min-w-0">
          <p className="text-xl sm:text-2xl font-bold">{foodItems.toLocaleString()}+</p>
          <p className="text-xs sm:text-sm text-gray-400">Food Items</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10 sm:col-span-2 lg:col-span-1">
        <div className="bg-green-500/20 p-2 rounded-full shrink-0">
          <FiTruck className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
        </div>
        <div className="min-w-0">
          <p className="text-xl sm:text-2xl font-bold">{restaurants.toLocaleString()}+</p>
          <p className="text-xs sm:text-sm text-gray-400">Restaurants</p>
        </div>
      </div>
    </div>
  );
}