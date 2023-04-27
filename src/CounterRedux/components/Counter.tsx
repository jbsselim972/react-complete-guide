import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { DECREMENT, INCREMENT, INCREMENT5, CounterState } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector<CounterState, number>((state) => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: INCREMENT5, amount: 5 });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
