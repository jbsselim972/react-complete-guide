import { createStore } from "redux";

export interface CounterState {
  counter: number;
}

const initialState = {
  counter: 0,
};

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const INCREMENT5 = "INCREMENT5";

export class DecrementAction {
  readonly type = DECREMENT;
}

export class IncrementAction {
  readonly type = INCREMENT;
}

export class IncrementBy5Action {
  readonly type = INCREMENT5;
  constructor(public amount: number) {}
}

export type CounterActions =
  | IncrementAction
  | DecrementAction
  | IncrementBy5Action;

export const reducer = (
  state: CounterState = initialState,
  action: CounterActions
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT5:
      return { ...state, counter: state.counter + action.amount };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
