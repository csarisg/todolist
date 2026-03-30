function Todo({ todo, setTodos }) {
  const eliminar = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      {todo.texto}
      <button onClick={eliminar}>🗑</button>
    </div>
  );
}

export default Todo;