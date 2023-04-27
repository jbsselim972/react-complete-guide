import { FC } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Product/Products";

const Shop: FC = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default Shop;
