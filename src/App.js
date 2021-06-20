import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState();
  const [datas, setDatas] = useState([]);
  const [isedit, setIsedit] = useState(null);
  const [eChange, setEChange] = useState();

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleSubmit() {
    if (!value) return;
    setDatas([
      ...datas,
      {
        id: datas.length ? datas[datas.length - 1].id + 1 : 1,
        todo: value,
      },
    ]);
    console.log(datas);
    setValue("");
  }

  function deleted(id) {
    var filterdata = datas.filter((a) => a.id !== id);
    setDatas(filterdata);
    console.log(filterdata);
  }

  function edit(id) {
    setIsedit(id);
  }

  function editChange(e) {
    e.preventDefault();
    setEChange(e.target.value);
  }

  function save(id) {
    // console.log(idx, todo)
    setIsedit(null);
    const todo = datas.find((todo) => todo.id === id);
    let newTodos = [...datas];
    newTodos[newTodos.indexOf(todo)] = { id, todo: eChange };
    setDatas(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <div className="inputContainer">
        <input
          placeholder="To - do"
          name="input"
          value={value}
          onChange={handleChange}
        />
        <button className="add" onClick={handleSubmit}>
          Add
        </button>
      </div>

      <div className="allli">
        <ul>
          {datas.length === 0 ? (
            <span className="error">no todos</span>
          ) : (
            datas.map((a, idx) => (
              <li key={a.id}>
                <div className="dataContainer">
                  {isedit === a.id ? (
                    <input
                      className="edit"
                      type="text"
                      max="10"
                      onChange={editChange}
                      defaultValue={a.todo}
                    />
                  ) : (
                    <span className="data">
                      {idx + 1}. {a.todo}{" "}
                    </span>
                  )}
                  <div className="buttonContainer">
                    <button className="button" onClick={() => deleted(a.id)}>
                      delete
                    </button>

                    {isedit === a.id ? (
                      <button onClick={() => save(a.id)}>Save</button>
                    ) : (
                      <button onClick={() => edit(a.id)}>Edit</button>
                    )}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
