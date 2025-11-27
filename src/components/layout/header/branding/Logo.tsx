'use client'
import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-3 group cursor-pointer"
      aria-label="Pizza Express - Go to homepage"
    >
      <div className="text-lg lg:text-2xl font-bold">
        <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Pizza
        </span>
        <span className="text-white ml-1">Express</span>
      </div>
    </Link>
  );
}