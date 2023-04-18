import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

interface ExpenseProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpenseProps> = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = React.useState<string>("2023");
  const filterChangedHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent: JSX.Element | JSX.Element[] = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ));
  }

  console.log(expenses);
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSelectedYear={filterChangedHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
