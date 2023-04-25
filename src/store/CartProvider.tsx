import { useReducer } from "react";
import CartContext from "./cart-context";

const ADD = "ADD";
const REMOVE = "REMOVE";

interface CartState {
  items: any[];
  totalAmount: number;
}

class ActionAdd {
  readonly type = ADD;
  constructor(public item: any) {}
}

class ActionRemove {
  readonly type = REMOVE;
  constructor(public id: string) {}
}

type Action = ActionAdd | ActionRemove;

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case "ADD": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        totalAmount: state.totalAmount - action.item.price,
      };
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item: Meal) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
