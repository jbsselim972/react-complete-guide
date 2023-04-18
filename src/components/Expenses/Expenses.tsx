import React from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

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

  console.log(expenses);
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSelectedYear={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
