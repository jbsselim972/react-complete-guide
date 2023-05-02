import { FC, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Product/Products";

import "./ShopCart.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import Notification from "../shared/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
let isInitial = true;
const ShopCart: FC = () => {
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) dispatch<any>(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {notification && <Notification {...notification} />}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default ShopCart;
