import Image from "next/image";
import { HeroImageProps } from "@/types/ui/hero";

export const HeroImage = ({ src, alt }: HeroImageProps) => {
  return (
    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] aspect-square mx-auto lg:mx-0 rounded-full overflow-hidden">
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