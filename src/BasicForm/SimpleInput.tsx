import { FormEvent, useEffect, useState } from "react";

import classes from "./SimpleInput.module.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const emailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes("@");

  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const emailInputIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;
  if (nameIsValid && emailIsValid) formIsValid = true;

  const nameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const emailChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredEmail(event.currentTarget.value);
  };

  const nameBlurHandler = (event: FormEvent<HTMLInputElement>) => {
    setNameTouched(true);
  };

  const emailBlurHandler = (event: FormEvent<HTMLInputElement>) => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredEmail("");
    setNameTouched(false);
    setEmailTouched(false);
  };

  const nameInputClasses = `${classes["form-control"]} ${
    nameInputIsInvalid ? classes.invalid : ""
  }`;
  const emailInputClasses = `${classes["form-control"]} ${
    emailInputIsInvalid ? classes.invalid : ""
  }`;
  return (
    <div className={classes.app}>
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className={classes["error-text"]}>Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">Your E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className={classes["error-text"]}>Please enter a valid email.</p>
          )}
        </div>
        <div className={classes["form-actions"]}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInput;
