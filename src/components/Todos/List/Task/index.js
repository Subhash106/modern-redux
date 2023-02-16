import "./task.css";

const Task = (props) => {
  const { title } = props;
  return (
    <div className="task">
      <p className="task__title">{title}</p>
    </div>
  );
};

export default Task;
