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

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onSelectedYear={filterChangedHandler}
        />
        {expenses.map((expense, id) => (
          <>
            {console.log(expense)}
            <ExpenseItem key={id} {...expense} />
          </>
        ))}
      </Card>
    </>
  );
};

export default Expenses;
