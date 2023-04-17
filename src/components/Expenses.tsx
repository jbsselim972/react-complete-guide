import React from "react";
import ExpenseItem from "./ExpenseItem";

interface ExpenseProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpenseProps> = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} {...{ title, amount, date }} />
      ))}
    </div>
  );
};

export default Expenses;
