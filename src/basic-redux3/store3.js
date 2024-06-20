import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialstate = {
  count: 10,
  age: 26,
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "inc_age": {
      return { ...state, age: state.age + 1 };
    }
    case "inc_count": {
      return { ...state, count: state.count + 1 };
    }
    default:
      return state;
  }
};
const store3 = legacy_createStore(reducer, composeWithDevTools());
export default store3;
