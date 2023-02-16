import Task from "./Task";

const List = (props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.map(({ title, id }) => (
        <Task key={id} title={title} />
      ))}
    </>
  );
};

export default List;
