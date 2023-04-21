import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem: React.FC<Meal> = ({ name, description, price }) => {
  const priceFmt = `${price.toFixed(2)} €`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{priceFmt}</div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
