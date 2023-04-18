import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const toggleFormHandler = () => {
    setToggleForm((prevValue) => !prevValue);
  };

  return (
    <div className="new-expense">
      {!toggleForm && (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
      {toggleForm && (
        <ExpenseForm
          toggleForm={toggleFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
