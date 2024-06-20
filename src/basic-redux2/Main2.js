import { createContext, useContext } from "react";
import store2 from './store2';

const ReduxContext = createContext();

const Age = () => {
  const { getState, dispatch } = useContext(ReduxContext);

  const incAge = () => {
    dispatch({ type: "inc_age" });
  };
  return (
    <div>
      <h1>{getState().age}</h1>
      <button onClick={incAge}>increment-age</button>
    </div>
  );
};
export const Main2 = () => {
  return (
    <ReduxContext.Provider value={store2}>
      <Age />
    </ReduxContext.Provider>
  );
};
