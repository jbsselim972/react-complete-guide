import { FormEvent } from "react";
import useInput from "../hooks/use-input";
import classes from "./SimpleInput.module.css";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.includes("@");

const BasicForm: React.FC = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) return;

    resetFirstName();
    resetLastName();
    resetEmail();
  };
  const firstNameClasses = firstNameHasError
    ? [classes["form-control"], classes.invalid].join(" ")
    : classes["form-control"];

  const lastNameClasses = lastNameHasError
    ? [classes["form-control"], classes.invalid].join(" ")
    : classes["form-control"];

  const emailClasses = emailHasError
    ? [classes["form-control"], classes.invalid].join(" ")
    : classes["form-control"];

  return (
    <div className={classes.app}>
      <form onSubmit={submitHandler}>
        <div className={classes["control-group"]}>
          <div className={firstNameClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className={classes["error-text"]}>
                Please enter a valid First Name.
              </p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className={classes["error-text"]}>
                Please enter a valid Last Name.
              </p>
            )}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes["error-text"]}>Please enter a valid Email.</p>
          )}
        </div>
        <div className={classes["form-control"]}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
