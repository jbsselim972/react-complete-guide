import { FC } from "react";
import Card from "../../../shared/UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Cart: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <Card className={`${classes.cart} ${classes["cart-card"]}`}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
