import React, { FormEvent, useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value: string) => value.trim() === "";
const isFiveChars = (value: string) => value.trim().length >= 5;

const Checkout: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formInputValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;
  const streetInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const postalCodeInputRef =
    useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const cityInputRef = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  const confirmHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const cityIsValid = !isEmpty(city);
    const postalCodeIsValid = !isEmpty(postalCode) && isFiveChars(postalCode);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;
    if (formIsValid) {
      return;
    }
  };

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div
        className={`${classes.control} ${
          !formInputValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="name" />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.postalCode && classes.invalid
        }`}
      >
        <label htmlFor="postalcode">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postalcode" />
        {!formInputValidity.postalCode && (
          <p>Please enter a Postal Code (5 characters long)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.city && <p>Please enter a City!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
