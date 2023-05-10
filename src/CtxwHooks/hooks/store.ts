import { useEffect, useState } from "react";

type Listeners = Array<React.Dispatch<React.SetStateAction<State>>>;
export type DispatchAction = (actionIdentifier: string, payload: any) => void;
export type Actions = {
  [key: string]: (curState: State, payload: any) => any;
};
export type State = { products: Product[] };
let globalState: State;
let listeners: Listeners = [];
let actions: Actions;

export const useStore = (): [State, DispatchAction] => {
  const setState = useState(globalState)[1];

  const dispatch: DispatchAction = (actionIdentifier: string, payload: any) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions: Actions, initialState: State) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
