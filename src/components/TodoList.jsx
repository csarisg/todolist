import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;