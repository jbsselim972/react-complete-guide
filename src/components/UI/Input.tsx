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

const Input: React.FC<InputProps> = ({ label, input }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
