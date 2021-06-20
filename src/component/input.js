import React, { useState } from "react";

function Index({ input, setInput, edit, data, addTodoToMain }) {
  const handleChange = (e) => {
    if (!e.target.value) return;
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (!input) return;
    addTodoToMain([
      ...data,
      {
        id: data.length + 1,
        task: input,
        status: false,
      },
    ]);
  };

  const editTodo = () => {
    if (!edit) return;
    setInput();
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => addTodo()}>Add</button>
      {edit && <button onClick={() => editTodo()}>Edit</button>}
    </div>
  );
}

export default Index;
