import React, { useState } from "react";
// Lifting up the state

const NestedWithoutStateLifting = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default NestedWithoutStateLifting;
