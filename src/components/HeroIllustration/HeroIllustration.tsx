"use client";
import { useHeroAnnotation } from "../../hooks/useHeroAnnotation";
import { HeroImage } from "./HeroImage";
import { HeroContent } from "./HeroContent";
import { BackgroundEffects } from "./BackgroundEffects";

const HeroIllustration = () => {
  const { todayRef } = useHeroAnnotation();
  return (
    <section className="bg-linear-to-r from-gray-900 via-black to-gray-800 text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroImage
            src="https://github.com/mohamed-samir-dev/my-assets/blob/master/Lucid_Origin_I_want_a_highly_detailed_3D_illustration_of_an_el_2.webp?raw=true"
            alt="Delicious pizza hero image"
          />
          <HeroContent todayRef={todayRef} />
        </div>
      </div>
    </section>
  );
};

export default HeroIllustration;
