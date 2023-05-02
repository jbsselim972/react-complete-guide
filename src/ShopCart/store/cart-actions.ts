import { Dispatch } from "react";
import { CartState, cartActions } from "./cart-slice";
import { AnyAction } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const fetchData = async () => {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
          totalAmount: cartData.totalAmount || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart: CartState) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          title: "Success",
          status: "success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          status: "error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
