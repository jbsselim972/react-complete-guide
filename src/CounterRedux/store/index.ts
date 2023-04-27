import { createStore } from "redux";

export interface State {
  counter: number;
}

const initialState = {
  counter: 0,
};

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";

export class DecrementAction {
  readonly type = DECREMENT;
}

export class IncrementAction {
  readonly type = INCREMENT;
}

export type CounterActions = IncrementAction | DecrementAction;

export const reducer = (
  state: State = initialState,
  action: CounterActions
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
