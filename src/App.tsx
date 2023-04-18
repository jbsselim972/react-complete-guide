import { SetStateAction, useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(DUMMY_EXPENSES);

  useEffect(() => {
    // const sortedExpenses = expenses
    //   .sort((acc, expense) => acc.date.getTime() - expense.date.getTime())
    //   .reverse();
    // setExpenses(sortedExpenses);
  }, [expenses]);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      // console.log([expense, ...prevExpenses]);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
