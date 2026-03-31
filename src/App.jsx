import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const data = localStorage.getItem("tareas");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [filtro, setFiltro] = useState("todas");
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(todos));
  }, [todos]);

  const tareasFiltradas = todos.filter((todo) => {
    if (filtro === "completadas") return todo.completado;
    if (filtro === "incompletas") return !todo.completado;
    return true;
  });

  return (
    <div className={modoOscuro ? "app dark" : "app"}>
      <h1>Todo List</h1>

      <button onClick={() => setModoOscuro(!modoOscuro)}>
        🌙
      </button>

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