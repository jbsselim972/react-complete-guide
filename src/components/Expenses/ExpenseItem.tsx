import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem: React.FC<Expense> = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{amount} €</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
