import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default createStore(counterReducer, applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "Increment" });
// store.dispatch({ type: "Decrement" });
// store.dispatch({ type: "Increment" });
