import { FeatureCardProps } from "@/types/ui/hero";

export const FeatureCard = ({ icon: Icon, title, description, iconBgColor, iconColor }: FeatureCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-3 sm:mb-4">
        <div className={`p-2 ${iconBgColor} rounded-lg`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm sm:text-base text-gray-400">
        {description}
      </p>
    </div>
  );
};