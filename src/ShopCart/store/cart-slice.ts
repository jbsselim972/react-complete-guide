import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../components/Cart/CartItem";
import { Product } from "../components/Product/Products";

export type CartState = {
  items: Item[];
  totalQuantity: number;
  totalAmount: number;
};

const initalState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find((i) => i.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem) {
        state.totalAmount = state.totalAmount - existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
