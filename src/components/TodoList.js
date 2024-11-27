import { useTodo } from "../context/TodoContext";
import { memo } from "react";

const TodoList = memo(function TodoList() {
  const { state, dispatch } = useTodo();

  const filteredTasks = state.tasks.filter((task) =>
    task.text.toLowerCase().includes(state.filter.toLowerCase())
  );
  console.log("TodoList rendered");
  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className={task.completed ? "completed" : ""}
          onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
