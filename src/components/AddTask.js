import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();
  console.log("AddTask rendered");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TASK", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
