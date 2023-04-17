import React from "react";
import "./ExpenseItem.css";

const ExpenseItem: React.FC<{
  title: string;
  amount: number;
  date: Date;
}> = ({ title, amount, date }) => {
  return (
    <>
      <div className="expense-item">
        <div>{date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{amount}€</div>
      </div>
    </>
  );
};

export default ExpenseItem;
