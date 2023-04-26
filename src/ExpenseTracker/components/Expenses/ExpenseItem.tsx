import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../../../shared/UI/Card";

import classes from "./ExpenseItem.module.css";

const ExpenseItem: React.FC<Expense> = ({ title, amount, date }) => {
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate date={date} />
        <div className={classes["expense-item__description"]}>
          <h2>{title}</h2>
        </div>
        <div className={classes["expense-item__price"]}>{amount} €</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
