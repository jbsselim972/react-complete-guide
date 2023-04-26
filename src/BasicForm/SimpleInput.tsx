import { FormEvent, useState } from "react";

import classes from "./SimpleInput.module.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const inputIsInvalid = !nameIsValid && nameTouched;

  const nameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const nameBlurHandler = (event: FormEvent<HTMLInputElement>) => {
    setNameTouched(true);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setNameTouched(true);
    if (!nameIsValid) {
      return;
    }
    setEnteredName("");
    setNameTouched(false);
  };

  const inputClasses = `${classes["form-control"]} ${
    inputIsInvalid ? classes.invalid : ""
  }`;
  return (
    <div className={classes.app}>
      <form onSubmit={formSubmitHandler}>
        <div className={inputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {inputIsInvalid && (
            <p className={classes["error-text"]}>Name must not be empty.</p>
          )}
        </div>
        <div className={classes["form-actions"]}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInput;
