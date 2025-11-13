export interface CartHeaderProps {
  totalItems: number;
  hasItems: boolean;
  onClearCart: () => void;
}
export interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    quantity: number;
  };
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}
export interface OrderSummaryProps {
  totalItems: number;
  totalPrice: number;
  onCheckout: () => void;
}
