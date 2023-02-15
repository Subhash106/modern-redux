import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>My To to list</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
      {/* <CreateTask /> */}
      <TodoList />
    </div>
  );
}

export default App;
