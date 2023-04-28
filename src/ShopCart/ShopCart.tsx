import { FC } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Product/Products";

import "./ShopCart.css";

const ShopCart: FC = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default ShopCart;
