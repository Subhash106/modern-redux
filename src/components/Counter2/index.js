import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../../store/counter";

function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Counter 2</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
