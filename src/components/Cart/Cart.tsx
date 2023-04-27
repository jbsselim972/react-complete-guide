import React, { useState, useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttp from "../../hooks/useHttp";

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isLoading, error, sendRequest } = useHttp();
  const { items, totalAmount, addItem, removeItem, clearCart } =
    useContext(CartContext);
  const totalAmountFixed = `${totalAmount.toFixed(2)} €`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item: Meal) => {
    addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = async (userData: UserData) => {
    await sendRequest({
      url: import.meta.env.VITE_BACKEND_URL + "/orders.json",
      method: "POST",
      body: JSON.stringify({ user: userData, orderedItems: items }),
    });
    setSubmitted(true);
    clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmountFixed}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingContent = <p>Sending order data...</p>;
  const orderSubmitted = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {isLoading && isSubmittingContent}
      {!isLoading && !error && !submitted && cartModalContent}
      {!isLoading && !error && submitted && orderSubmitted}
      {!isLoading && error && <p>{error}</p>}
    </Modal>
  );
};

export default Cart;
