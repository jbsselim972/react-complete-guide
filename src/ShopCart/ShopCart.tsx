import { FC } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Product/Products";

import "./ShopCart.css";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./store";

const ShopCart: FC = () => {
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default ShopCart;
