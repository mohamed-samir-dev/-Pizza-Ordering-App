'use client'
import { HeroContent, StatsSection, HeroImage } from '../hero/index';

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-gray-900 via-black to-gray-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
     <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <HeroContent />
            <StatsSection />
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}