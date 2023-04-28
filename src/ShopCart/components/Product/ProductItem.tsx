import { FC } from "react";
import Card from "../../../shared/UI/Card";
import classes from "./ProductItem.module.css";
import { Product } from "./Products";

const ProductItem: FC<Product> = ({ title, price, description }) => {
  return (
    <li className={classes.item}>
      <Card className={classes["item-card"]}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
