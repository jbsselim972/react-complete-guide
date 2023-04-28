import { FC } from "react";
import Card from "../../../shared/UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart: FC = () => {
  return (
    <Card className={`${classes.cart} ${classes["cart-card"]}`}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
