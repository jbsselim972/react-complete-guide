import { FC, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Product/Products";

import "./ShopCart.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import useHttp from "../shared/hooks/use-http";
import { uiActions } from "./store/ui-slice";
import Notification from "../shared/UI/Notification";

const ShopCart: FC = () => {
  const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useHttp();
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    sendRequest({
      url: import.meta.env.VITE_BACKEND_URL + "/cart.json",
      method: "PUT",
      body: cart,
    });
  }, [cart, sendRequest]);

  useEffect(() => {
    console.log("render");
    if (isLoading && !error) {
      dispatch(
        uiActions.showNotification({
          title: "Sending...",
          status: "pending",
          message: "Sending cart data...",
        })
      );
    } else if (!error && !isLoading) {
      dispatch(
        uiActions.showNotification({
          title: "Success",
          status: "success",
          message: "Sent cart data successfully",
        })
      );
    }

    if (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          status: "error",
          message: "Sending cart data failed",
        })
      );
    }
  }, [isLoading, dispatch, error]);

  return (
    <Layout>
      {notification && <Notification {...notification} />}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default ShopCart;
