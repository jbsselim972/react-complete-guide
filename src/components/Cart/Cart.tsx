import React, { useState, useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
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
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmountFixed}</span>
      </div>
      {isCheckout && <Checkout onClose={onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
