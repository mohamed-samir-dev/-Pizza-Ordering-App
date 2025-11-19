import { RoughNotation } from "react-rough-notation";
import { chefs } from './data';
import ChefCard from './ChefCard';

const OurChief = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
        Meet Our{" "}
        <RoughNotation type="circle" show={true} color="#ff6b35">
          Best Team
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        {chefs.map((chef, index) => (
          <ChefCard key={index} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default OurChief;
