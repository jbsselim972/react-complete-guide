import { createStore } from "redux";

export interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialState = {
  counter: 0,
  showCounter: true,
};

export const DECREMENT = "[Counter] DECREMENT";
export const INCREMENT = "[Counter] INCREMENT";
export const INCREMENT5 = "[Counter] INCREMENT5";
export const TOGGLE = "[Counter] TOGGLE";

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

export class ToggleAction {
  readonly type = TOGGLE;
  constructor(public amount: number) {}
}

export type CounterActions =
  | IncrementAction
  | DecrementAction
  | IncrementBy5Action
  | ToggleAction;

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
    case TOGGLE:
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
