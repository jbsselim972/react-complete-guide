import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

interface ExpenseProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpenseProps> = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} {...{ title, amount, date }} />
      ))}
    </Card>
  );
};

export default Expenses;
