import { useReducer } from "react";
import CartContext from "./cart-context";

const ADD = "ADD";
const REMOVE = "REMOVE";
const CLEAR = "CLEAR";

interface CartState {
  items: Meal[];
  totalAmount: number;
}

class AddItemAction {
  readonly type = ADD;
  constructor(public item: Meal) {}
}

class RemoveItemAction {
  readonly type = REMOVE;
  constructor(public id: string) {}
}

class ClearCartAction {
  readonly type = CLEAR;
}

type Action = AddItemAction | RemoveItemAction | ClearCartAction;

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: Action) => {
  switch (action.type) {
    case ADD: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount! + action.item.amount!,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        ...state,
        items: updatedItems,
        totalAmount:
          state.totalAmount + action.item.price * action.item.amount!,
      };
    }
    case REMOVE: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems: Meal[];
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount
            ? existingItem.amount - 1
            : existingItem.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case CLEAR:
      return { ...state, ...defaultCartState };
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item: Meal) => {
    dispatchCart(new AddItemAction(item));
  };

  const removeItemFromCart = (id: string) => {
    dispatchCart(new RemoveItemAction(id));
  };

  const clearCartHandler = () => {
    dispatchCart(new ClearCartAction());
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
