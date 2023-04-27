import { createContext } from "react";

interface Context {
  items: Meal[];
  totalAmount: number;
  addItem: (item: Meal) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
const CartContext = createContext<Context>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
