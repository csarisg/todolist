import { useState } from "react";

function Form({ setTodos }) {
  const [input, setInput] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), texto: input, completado: false }
    ]);

    setInput("");
  };

  return (
    <form onSubmit={agregarTarea}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>➕</button>
    </form>
  );
}

export default Form;