import Todo from "./Todo";

const TodoList = ({ tasks, checkTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          title={task.title}
          checkTask={checkTask}
          id={task.id}
          status={task.status}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
