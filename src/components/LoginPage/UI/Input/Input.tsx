import React from "react";

import classes from "./Input.module.css";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  isValid: boolean | null;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  value,
  isValid,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
