import React, { ChangeEvent, useState, FormEvent } from "react";

import "./ExpenseForm.css";

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.valueAsNumber);
  };

  const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount: amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount(0);
    setDate("");
  };

  const clearHandler = () => {
    setTitle("");
    setAmount(0);
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={clearHandler}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
