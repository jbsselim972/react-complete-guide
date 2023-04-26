import { FormEvent, useState } from "react";

import classes from "./SimpleInput.module.css";
import useInput from "../hooks/use-input";

const SimpleInput: React.FC = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: inputNameChangeHandler,
    inputBlurHandler: inputNameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputIsInvalid,
    valueChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) formIsValid = true;

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
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
            onChange={inputNameChangeHandler}
            onBlur={inputNameBlurHandler}
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
            onChange={inputEmailChangeHandler}
            onBlur={inputEmailBlurHandler}
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
