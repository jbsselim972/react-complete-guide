import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem: React.FC<Expense> = ({ title, amount, date }) => {
  const [newTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{newTitle}</h2>
        </div>
        <div className="expense-item__price">{amount} €</div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
