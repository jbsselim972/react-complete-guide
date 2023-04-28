import { FC } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ShopCart from "./ShopCart";

const Shop: FC = () => {
  return (
    <Provider store={store}>
      <ShopCart />
    </Provider>
  );
};

export default Shop;
