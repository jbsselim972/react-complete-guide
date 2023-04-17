import React from "react";
import "./ExpenseItem.css";

const ExpenseItem: React.FC<{
  title: string;
  amount: number;
  date: Date;
}> = ({ title, amount, date }) => {
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const day = date.toLocaleString("fr-FR", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <>
      <div className="expense-item">
        <div>
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{amount} €</div>
      </div>
    </>
  );
};

export default ExpenseItem;
