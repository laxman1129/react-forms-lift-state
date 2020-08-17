import React, { useState } from "react";
// Lifting up the state

const NestedWithStateLifting = () => {
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
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};

interface DemoProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = (props: DemoProps) => {
  return (
    <div>
      <CounterDeep
        count={props.count}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

const CounterDeep = (props: DemoProps) => {
  return (
    <div>
      <OneMoreLevelDown
        count={props.count}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

const OneMoreLevelDown = (props: DemoProps) => {
  return (
    <div>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
};

export default NestedWithStateLifting;
