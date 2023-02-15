const Task = (props) => {
  const { title, description } = props;
  return (
    <div className="task">
      <h2 className="task__title">{title}</h2>
      <div className="task__description">{description}</div>
    </div>
  );
};

export default Task;
