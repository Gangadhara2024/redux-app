import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  count: 10,
  age: 26,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc_age": {
      return { ...state, age: state.age + 1 };
    }
    default:
      return state;
  }
};
const store2 = legacy_createStore(reducer, composeWithDevTools());
export default store2;
