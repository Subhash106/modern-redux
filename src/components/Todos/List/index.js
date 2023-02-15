import Task from "./Task";

const List = (props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} {...task} />
      ))}
    </>
  );
};

export default List;
