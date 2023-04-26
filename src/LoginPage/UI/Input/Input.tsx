import React, { useImperativeHandle, useRef } from "react";

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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, isValid, value, onChange, onBlur }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const activate = () => {
      inputRef.current?.focus();
    };

    // useImperativeHandle(ref, () => ({
    //   start() {
    //     return { focus: activate };
    //   },
    // }));

    useImperativeHandle(ref, () => {
      return { focus: activate };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type || "text"}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
