import "./index.css";
import List from "./List";
import { useFetchTodosQuery, useFetchUsersQuery } from "../../store/api";

const TodoList = () => {
  const { data: todos = [] } = useFetchTodosQuery();

  return (
    <div className="todo__container">
      <p>Number of todos fetched: {todos.length}</p>
      <ul className="todo__list">
        <List tasks={todos} />
      </ul>
    </div>
  );
};

export default TodoList;
