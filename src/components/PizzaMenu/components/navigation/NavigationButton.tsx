import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavigationButtonProps } from '@/types/components/PizzaMenu'


export const NavigationButton = ({ direction, onClick }: NavigationButtonProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const position = direction === "left" ? "left-1 sm:left-2 lg:left-4" : "right-1 sm:right-2 lg:right-4";

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} top-1/2 transform -translate-y-1/2 hover:bg-gray-800 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center z-10 transition-colors border border-gray-600`}
      style={{ backgroundColor: "#151515" }}
    >
      <Icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
    </button>
  );
};