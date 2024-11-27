import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import FilterTasks from "./components/FilterTasks";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo App</h1>
        <div className="todo-container">
          <AddTask />
          <FilterTasks />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
