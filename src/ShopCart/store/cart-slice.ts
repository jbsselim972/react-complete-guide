import { createSlice } from "@reduxjs/toolkit";

export type CartState = {
  cartIsVisible: boolean;
};

const initalState: CartState = {
  cartIsVisible: false,
};

const cartSlice = createSlice({
  name: "ui",
  initialState: initalState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
