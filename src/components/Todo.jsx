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
    <span>
      <span
        style={{
          textDecoration: todo.completado ? "line-through" : "none",
        }}
      >
        {todo.texto}
      </span>

      <div>
        <button onClick={completar}>✔</button>
        <button onClick={eliminar}>✖</button>
      </div>
    </span>
  );
}

export default Todo;