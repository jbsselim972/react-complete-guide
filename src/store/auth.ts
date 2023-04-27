import { createSlice } from "@reduxjs/toolkit";

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {
    email: "",
    password: "",
  },
};

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    email: string;
    password: string;
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
