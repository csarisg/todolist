function Todo({ todo, setTodos }) {
  const completar = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completado: !t.completado } : t
      )
    );
  };

  const eliminar = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      <span style={{
        textDecoration: todo.completado ? "line-through" : "none"
      }}>
        {todo.texto}
      </span>

      <button onClick={completar}>✔</button>
      <button onClick={eliminar}>🗑</button>
    </div>
  );
}

export default Todo;