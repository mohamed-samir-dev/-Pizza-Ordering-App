"use client";
import { FiHeart } from "react-icons/fi";
import { Pizza } from "lucide-react";
import Image from "next/image";
import { annotate } from "rough-notation";
import { useEffect, useRef } from "react";

export default function HeroImage() {
  const scribbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scribbleRef.current) {
      const annotation = annotate(scribbleRef.current, {
        type: "circle",
        color: "#ff6b35",
        strokeWidth: 6,
        iterations: 2,
        animationDuration: 2000,
        padding: 20,
      });

      const timer = setTimeout(() => {
        annotation.show();
      }, 1000);

      return () => {
        clearTimeout(timer);
        annotation.hide();
      };
    }
  }, []);

  return (
    <div className="flex justify-center lg:justify-end mt-8 lg:-mt-15">
      <div className="relative">
        <div
          ref={scribbleRef}
          className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-2xl overflow-hidden"
        >
          <Image
            src="https://github.com/mohamed-samir-dev/my-assets/blob/master/ChatGPT%20Image%2011%20%D9%86%D9%88%D9%81%D9%85%D8%A8%D8%B1%202025%D8%8C%2006_45_40%20%D9%85-Photoroom.png?raw=true"
            alt="Delicious pizza hero image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute -top-4 sm:-top-6 -right-3 sm:-right-6 lg:right-9 bg-linear-to-r from-red-500 to-pink-500 rounded-full p-2 sm:p-3 shadow-lg">
          <FiHeart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>

        <div className="absolute bottom-2 sm:bottom-12 lg:bottom-20 -left-3 sm:-left-5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full p-2 sm:p-3 lg:p-4 shadow-lg">
          <Pizza className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
        </div>
      </div>
    </div>
  );
}
