import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = todos.filter((todo) => {
    if (filtro === "completadas") return todo.completado;
    if (filtro === "incompletas") return !todo.completado;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>

      <Form setTodos={setTodos} />

      <select onChange={(e) => setFiltro(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="incompletas">Incompletas</option>
      </select>

      <TodoList todos={tareasFiltradas} setTodos={setTodos} />
    </div>
  );
}

export default App;