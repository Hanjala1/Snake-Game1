import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex !== null) {
      // Editing existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Adding new todo
      setTodos([...todos, inputValue]);
    }
    setInputValue("");
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleEdit(index) {
    setInputValue(todos[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">
          {editIndex !== null ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
