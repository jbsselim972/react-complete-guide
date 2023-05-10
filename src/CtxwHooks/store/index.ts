import { combineReducers } from "redux";
import productReducer from "./reducers/products";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
