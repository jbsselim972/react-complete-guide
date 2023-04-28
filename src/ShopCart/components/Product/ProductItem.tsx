import { FC } from "react";
import Card from "../../../shared/UI/Card";
import classes from "./ProductItem.module.css";
import { Product } from "./Products";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem: FC<Product> = ({ id, title, price, description }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card className={classes["item-card"]}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
