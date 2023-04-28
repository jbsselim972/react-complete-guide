import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NotificationType } from "../../shared/UI/Notification";

export type UIState = {
  cartIsVisible: boolean;
  notification: NotificationType | null;
};

const initalState: UIState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initalState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: PayloadAction<NotificationType>) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
