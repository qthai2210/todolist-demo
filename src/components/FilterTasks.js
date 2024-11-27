import { useTodo } from "../context/TodoContext";

function FilterTasks() {
  const { state, dispatch } = useTodo();
  console.log("FilterTasks rendered");
  return (
    <div className="filter-tasks">
      <input
        type="text"
        placeholder="Filter tasks..."
        value={state.filter}
        onChange={(e) =>
          dispatch({ type: "SET_FILTER", payload: e.target.value })
        }
      />
    </div>
  );
}

export default FilterTasks;
