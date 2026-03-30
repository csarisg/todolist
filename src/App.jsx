import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <Form setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;