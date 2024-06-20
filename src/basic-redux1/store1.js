import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = function (state = { count: 10 }, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    // state.count--;
    return { count: state.count - 1 };
  }
  return state;
};
const store1 = legacy_createStore(reducer, composeWithDevTools());
export default store1;
// store.subscribe(function () {
//   console.log("subscriber");
// });
// console.log(store.getState());
// store.dispatch({ type: "decrement" });
// console.log(store.getState());
