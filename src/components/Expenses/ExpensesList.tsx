import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses }) => {
  if (expenses.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;

  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
