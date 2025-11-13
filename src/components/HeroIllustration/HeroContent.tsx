import { ShoppingCart, Star } from "lucide-react";
import { Alex_Brush } from "@next/font/google";
import { HeroContentProps } from "@/types/hero";
import { FeatureCard } from "./FeatureCard";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export const HeroContent = ({ todayRef }: HeroContentProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Get Started <span ref={todayRef}>Today!</span>
        </h2>
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed ${alexBrush.className}`}
        >
          Everything you need to build an amazing food restaurant
          responsive website.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Our services offer the convenience of enjoying
          restaurant-quality meals from the comfort of your own home. With
          a few taps on your phone or clicks on your computer, you can
          explore a wide range of cuisines and dishes tailored to your
          preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FeatureCard
          icon={ShoppingCart}
          title="Food Order"
          description="Food is the necessity of life, it provides nutrition, sustenance and growth to the human body."
          iconBgColor="bg-orange-500/20"
          iconColor="text-orange-400"
        />
        <FeatureCard
          icon={Star}
          title="Promote Restaurant"
          description="Food can be classified into cereals, pulses, nuts and oil seeds, vegetables and more."
          iconBgColor="bg-red-500/20"
          iconColor="text-red-400"
        />
      </div>
    </div>
  );
};