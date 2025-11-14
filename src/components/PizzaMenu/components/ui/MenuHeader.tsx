interface MenuHeaderProps {
  hottestDishRef: React.RefObject<HTMLSpanElement | null>;
}

export const MenuHeader = ({ hottestDishRef }: MenuHeaderProps) => {
  return (
    <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 md:px-6">
      <h1 className="text-[#f1f1f1] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
        Our New{" "}
        <span 
          ref={hottestDishRef}
          className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
        >
          Hottest Dish
        </span>
      </h1>
    </div>
  );
};