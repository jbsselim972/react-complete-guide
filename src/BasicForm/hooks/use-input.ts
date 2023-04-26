import { FormEvent, useReducer, useState } from "react";

interface inputState {
  value: string;
  isTouched: boolean;
}

const intialInputState = {
  value: "",
  isTouched: false,
};

const INPUT = "INPUT";
const BLUR = "BLUR";
const RESET = "RESET";
class InputAction {
  readonly type = INPUT;
  constructor(public value: string) {}
}

class BlurAction {
  readonly type = BLUR;
}

class ResetAction {
  readonly type = RESET;
}

type Action = InputAction | BlurAction | ResetAction;

const inputStateReducer = (state: inputState, action: Action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { ...state, isTouched: true };
    case "RESET":
      return { ...state, value: "", isTouched: false };
    default:
      return state;
  }
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    intialInputState
  );

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    dispatch(new InputAction(event.currentTarget.value));
  };

  const inputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
    dispatch(new BlurAction());
  };

  const reset = () => {
    dispatch(new ResetAction());
  };
  return {
    value: inputState.value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
