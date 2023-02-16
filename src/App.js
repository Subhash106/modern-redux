import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store/counter";
import todoReducer from "./store/todo";

import "./App.css";
import TodoList from "./components/Todos";
import Counter2 from "./components/Counter2";
import { apiSlice } from "./store/api";
import Users from "./components/Users";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
        <Counter2 />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
