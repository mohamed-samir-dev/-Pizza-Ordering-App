import Image from "next/image";
import { HeroImageProps } from "@/types/hero";

export const HeroImage = ({ src, alt }: HeroImageProps) => {
  return (
    <div className="relative h-96 lg:h-[500px] aspect-square -ml-8 sm:mx-auto lg:mx-0 rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};