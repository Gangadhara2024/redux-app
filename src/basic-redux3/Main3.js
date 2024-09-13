import { Provider, useDispatch, useSelector } from "react-redux";
import store3 from "./store3";

const Age = () => {
  const age = useSelector((state) => state.age);
  const count = useSelector((item) => item.count);
  // const { age, count } = useSelector((state) => state);

  return (
    <div className="box">
      <h2>count: {count} </h2>
      <h1>Age: {age} </h1>
    </div>
  );
};
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incAge = () => {
    dispatch({ type: "inc_age" });
  };

  const incCount = () => {
    dispatch({ type: "inc_count" });
  };
  return (
    <div className="box">
      <h1>count: {count} </h1>
      <button onClick={incAge}>increment age</button>
      <button onClick={incCount}>increment count</button>
    </div>
  );
};
export const Main3 = () => {
  return (
    <Provider store={store3}>
      <Age />
      <Counter />
    </Provider>
  );
};
// here we subscribe to age in useSelector, so Age component gets re-rendered when changes. remaining counter component will not re-render.
