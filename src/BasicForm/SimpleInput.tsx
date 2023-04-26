import { FormEvent, MutableRefObject, useRef, useState } from "react";

import classes from "./SimpleInput.module.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(
    null
  ) as MutableRefObject<HTMLInputElement>;

  const nameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setNameTouched(true);
    if (enteredName.trim() !== "") {
      setNameIsValid(true);
      return;
    }

    setNameIsValid(false);
  };

  const inputIsInvalid = !nameIsValid && nameTouched;
  const inputClasses = `${classes.control} ${
    inputIsInvalid ? classes.invalid : ""
  }`;
  return (
    <div className={classes.app}>
      <form onSubmit={formSubmitHandler}>
        <div className={inputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            onChange={nameChangeHandler}
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
