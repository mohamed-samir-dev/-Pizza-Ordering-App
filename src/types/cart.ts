export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  quantity: number;
  size?: 'Small' | 'Medium' | 'Large';
}

export interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
}