import { useState, Children, cloneElement } from "react";

const Counter = ({ children, initialState = 0, steps = 1 }) => {
  const [count, setCount] = useState(initialState);
  const newComponents = Children.map(children, (child) => {
    return cloneElement(child, { count, setCount, steps, initialState });
  });

  return (
    <div style={{ display: "flex" }}>
      {newComponents.map((child) => (
        <div style={{ padding: "5px" }}>{child}</div>
      ))}
    </div>
  );
};

const Increment = ({ setCount, steps }) => {
  return <button onClick={() => setCount((prev) => prev + steps)}>+</button>;
};
const Display = ({ count }) => {
  return <div>{count}</div>;
};
const Decrement = ({ setCount, steps }) => {
  return <button onClick={() => setCount((prev) => prev - steps)}> -</button>;
};
const Reset = ({ setCount, initialState }) => {
  return (
    <button onClick={() => setCount((prev) => initialState)}>Reset</button>
  );
};

Counter.display = Display;
Counter.increment = Increment;
Counter.decrement = Decrement;
Counter.reset = Reset;

export default Counter;
