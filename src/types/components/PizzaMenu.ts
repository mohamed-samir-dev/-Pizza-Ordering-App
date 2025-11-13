export interface Pizza {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
  }
  
  export interface PizzaCardProps {
    pizza: Pizza;
  }

  export interface PizzaCarouselProps {
    pizzas: Pizza[];
    currentIndex: number;
    onNext: () => void;
    onPrev: () => void;
  }

  export interface NavigationButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
  }