import { createStore } from "redux";

export interface State {
  counter: number;
}

const initialState = {
  counter: 0,
};

class Decrement {
  readonly type = "DECREMENT";
}

class Increment {
  readonly type = "INCREMENT";
}

type Action = Increment | Decrement;
export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
