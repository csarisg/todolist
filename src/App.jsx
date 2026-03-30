import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;