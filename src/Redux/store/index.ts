import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
  showCounter: boolean;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: {
    email: string;
    password: string;
  };
};

export interface RootState {
  counter: CounterState;
  auth: AuthState;
}

const initialCounterState: CounterState = {
  counter: 0,
  showCounter: true,
};

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: {
    email: "",
    password: "",
  },
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
