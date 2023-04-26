import { FormEvent, useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && touched;

  const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const inputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };
  return {
    value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
