import React, { useState } from "react";

const Todoinput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    addTodo(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default Todoinput;
