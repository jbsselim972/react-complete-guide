import React, { FormEvent, useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm: React.FC<{
  id: string;
  onAddToCart: (amount: number) => void;
}> = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    if (
      enteredAmount &&
      (enteredAmount.trim().length === 0 ||
        +enteredAmount < 1 ||
        +enteredAmount > 5)
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(+enteredAmount!);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
