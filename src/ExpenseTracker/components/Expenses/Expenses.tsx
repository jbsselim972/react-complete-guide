import React from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../../../shared/UI/Card";

import classes from "./Expenses.module.css";

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
  return (
    <>
      <Card className={classes.expenses}>
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
