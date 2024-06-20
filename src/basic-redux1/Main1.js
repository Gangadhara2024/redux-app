import { useEffect, useState } from "react";
import store1 from "./store1.js";
import "../App.css";

const Counter = () => {
  const [update, setUpdate] = useState(store1.getState());

  const increment = () => {
    store1.dispatch({ type: "increment" });
  };
  const decrement = () => {
    store1.dispatch({ type: "decrement" });
  };
  useEffect(() => {
    store1.subscribe(() => {
      setUpdate(store1.getState());
    });
  }, []);

  return (
    <div>
      <button onClick={increment}>increment</button>
      <h1>{update.count}</h1>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export const Main1 = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

// in order to get UI to update we used usestate(); to get UI to update when there is state change we use useEffect and subscribe to update.
// by using useEffect, component re-renders and increment gets updated to 11.
