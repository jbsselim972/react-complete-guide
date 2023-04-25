import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem: React.FC<Meal> = ({ id, name, description, price }) => {
  const priceFmt = `${price.toFixed(2)} €`;
  const { addItem } = useContext(CartContext);

  const addToCartHandler = (amount: number) => {
    addItem({
      id,
      name,
      description,
      price,
      amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{priceFmt}</div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
