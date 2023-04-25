import React, { HTMLInputTypeAttribute } from "react";

import classes from "./Input.module.css";

type InputAttr = {
  type: string;
  id: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
};

interface InputProps {
  label: string;
  input: InputAttr;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ input, label }, ref) => {
    return (
      <div className={classes.input}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...input} />
      </div>
    );
  }
);

export default Input;
