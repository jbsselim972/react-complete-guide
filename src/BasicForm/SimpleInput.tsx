import { FormEvent, MutableRefObject, useRef, useState } from "react";

import classes from "./SimpleInput.module.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(
    null
  ) as MutableRefObject<HTMLInputElement>;

  const nameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    // nameInputRef.current.value = ""; // Dont manipulate the DOM
    setEnteredName("");
  };

  return (
    <div className={classes.app}>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="name">Your Name</label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>
        <div className={classes["form-actions"]}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleInput;
