import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import Card from "../../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";
import AuthContext from "../store/auth-context";

interface State {
  value: string;
  isValid: boolean | null;
}

const USER_INPUT = "USER_INPUT";
const INPUT_BLUR = "INPUT_BLUR";
class InputAction {
  readonly type = USER_INPUT;
  constructor(public payload: string) {}
}

class ValidateAction {
  readonly type = INPUT_BLUR;
}

type Action = InputAction | ValidateAction;

const emailReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case USER_INPUT:
      return {
        ...state,
        value: action.payload,
        isValid: action.payload.includes("@"),
      };
    case INPUT_BLUR:
      return { ...state, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: null };
  }
};

const passwordReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case "INPUT_BLUR":
      return { ...state, isValid: state.value.trim().length > 6 };
    default:
      return { value: "", isValid: null };
  }
};

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState<boolean | null>();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>();
  const [formIsValid, setFormIsValid] = useState(false);

  const [{ value: email, isValid: emailIsValid }, dispatchEmail] = useReducer(
    emailReducer,
    {
      value: "",
      isValid: null,
    }
  );
  const [{ value: password, isValid: passwordIsValid }, dispatchPassword] =
    useReducer(passwordReducer, {
      value: "",
      isValid: null,
    });

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFormIsValid(emailIsValid! && passwordIsValid!);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail(new InputAction(event.target.value));
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword(new InputAction(event.target.value));
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail(new ValidateAction());
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword(new ValidateAction());
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    authContext.onLogin(email, password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
