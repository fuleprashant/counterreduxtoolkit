import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  // console.log("the counter is", counter);

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export default App;
