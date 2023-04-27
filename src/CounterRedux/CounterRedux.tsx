import { Provider } from "react-redux";
import Counter from "./components/Counter";

import "./CounterRedux.css";
import store from "./store";

function CounterRedux() {
  return (
    <Provider store={store}>
      <Counter />;
    </Provider>
  );
}

export default CounterRedux;
