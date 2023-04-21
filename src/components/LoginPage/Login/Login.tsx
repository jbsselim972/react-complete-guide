import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "m"
);

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

const emailReducer = (state: State, action: Action) => {
  switch (action.type) {
    case USER_INPUT:
      return {
        ...state,
        value: action.payload,
        isValid: emailRegex.test(action.payload),
      };

    case INPUT_BLUR:
      return { ...state, isValid: emailRegex.test(state.value) };
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
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

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
    if (formIsValid) authContext.onLogin(email, password);
    else if (!emailIsValid) {
      emailInputRef.current?.focus();
    } else {
      passwordInputRef.current?.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          type="email"
          label="E-Mail"
          isValid={emailIsValid ?? null}
          value={email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          type="password"
          label="Password"
          isValid={passwordIsValid ?? null}
          value={password}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
