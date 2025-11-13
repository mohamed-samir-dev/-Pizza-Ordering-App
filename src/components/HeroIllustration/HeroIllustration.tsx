"use client";
import Image from "next/image";
import { ShoppingCart, Star, Clock } from "lucide-react";
import { Alex_Brush } from "@next/font/google";
import { annotate } from "rough-notation";
import { useEffect, useRef } from "react";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

const HeroIllustration = () => {
  const todayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (todayRef.current) {
      const annotation = annotate(todayRef.current, {
        type: "circle",
        color: "#ff6b35",
        strokeWidth: 3,
        iterations: 2,
        animationDuration: 3000,
        padding: 13,
        multiline: true,
      });

      const timer = setTimeout(() => {
        annotation.show();
      }, 800);

      return () => {
        clearTimeout(timer);
        annotation.hide();
      };
    }
  }, []);
  return (
    <section className="bg-linear-to-r from-gray-900 via-black to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] aspect-square mx-auto lg:mx-0 rounded-full overflow-hidden ">
            <Image
              src="https://github.com/mohamed-samir-dev/my-assets/blob/master/Lucid_Origin_I_want_a_highly_detailed_3D_illustration_of_an_el_2.webp?raw=true"
              alt="Delicious pizza hero image"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get Started <span ref={todayRef}>Today!</span>
              </h2>
              <p
                className={`text-2xl text-gray-300 leading-relaxed ${alexBrush.className}`}
              >
                Everything you need to build an amazing food restaurant
                responsive website.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our services offer the convenience of enjoying
                restaurant-quality meals from the comfort of your own home. With
                a few taps on your phone or clicks on your computer, you can
                explore a wide range of cuisines and dishes tailored to your
                preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <ShoppingCart className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Food Order
                  </h3>
                </div>
                <p className="text-gray-400">
                  Food is the necessity of life, it provides nutrition,
                  sustenance and growth to the human body.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Star className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Promote Restaurant
                  </h3>
                </div>
                <p className="text-gray-400">
                  Food can be classified into cereals, pulses, nuts and oil
                  seeds, vegetables and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIllustration;
