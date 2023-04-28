import { createSlice } from "@reduxjs/toolkit";

export type UIState = {
  cartIsVisible: boolean;
};

const initalState: UIState = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initalState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
