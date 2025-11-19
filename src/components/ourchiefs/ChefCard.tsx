import Image from "next/image";
import { Chef } from './types';

interface ChefCardProps {
  chef: Chef;
}

const ChefCard = ({ chef }: ChefCardProps) => {
  return (
    <div className="relative group w-full">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src={chef.image}
          alt={`${chef.name}, ${chef.level} chef at Pizza Express`}
          width={300}
          height={320}
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4">
          <h3 className="text-white font-bold text-base sm:text-lg">{chef.name}</h3>
          <p className="text-orange-200 text-xs sm:text-sm">{chef.level}</p>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;