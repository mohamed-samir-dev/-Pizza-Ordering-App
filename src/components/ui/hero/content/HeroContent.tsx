"use client";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
      <div className="space-y-4 sm:space-y-6">
        <h4 className="text-2xl sm:text-4xl md:text-5xl  font-bold leading-tight">
          Savor Signature Dishes Every Time, With{" "}
          <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Lightning-Fast Delivery
          </span>{" "}
          to Your Doorstep! 🍕
        </h4>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Experience the fastest delivery of healthy, delicious food. Order your
          favorite meals anytime, anywhere with just a few clicks.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
        <button className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Get Started
        </button>
        <Link
          href="#"
          className="border-2 border-gray-600 hover:border-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-orange-500/10 text-center"
        >
          How To Order
        </Link>
      </div>
    </div>
  );
}
