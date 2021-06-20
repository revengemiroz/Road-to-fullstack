import React from "react";

function Index({ setInput, setEdit, array, setData }) {
  const deleteTodo = (id) => {
    if (!id) return;
    const newData = array?.filter((data) => data.id !== id);
    setData(newData);
  };

  const editTodo = (todo) => {
    if (!todo) return;
    setEdit(true);
    setInput(todo?.text);
  };

  return (
    <div>
      <ul>
        {array?.map((todo) => (
          <li key={todo?.id}>
            <span>{todo.task}</span>
            <button onClick={() => editTodo(todo?.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
