import "./index.css";
import List from "./List";

const TodoList = () => {
  const tasks = [
    { title: "Task title 1", description: "Task description 1" },
    { title: "Task title 2", description: "Task description 2" },
  ];
  return (
    <div className="todo__container">
      <ul className="todo__list">
        <List tasks={tasks} />
      </ul>
    </div>
  );
};

export default TodoList;
