interface MenuHeaderProps {
  hottestDishRef: React.RefObject<HTMLSpanElement | null>;
}

export const MenuHeader = ({ hottestDishRef }: MenuHeaderProps) => {
  return (
    <div className="text-center mb-8 sm:mb-12 px-4">
      <h1 className="text-[#f1f1f1] text-2xl sm:text-2xl lg:text-4xl font-bold">
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