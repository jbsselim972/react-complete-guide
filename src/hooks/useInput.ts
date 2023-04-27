import { useState, ChangeEvent } from "react";

const useInput = (isValid: boolean) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {};
};
