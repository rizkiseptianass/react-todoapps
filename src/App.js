import React, { useState } from "react";

function App() {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    const todoItem = {
      id: +new Date(),
      value: newTodo,
    }
    const newTodos = [...todos, todoItem];

    if(newTodo.trim().length > 0){
      setTodos(newTodos);
      setNewTodo('');
    }
  }

  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    setTodos(newTodo);
  }

  return (
    <div className="App">
      <div className="container">
      <h1>React Todo Apps</h1>
      <form className="todoForm">
        <input placeholder="Type to add Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
        <button className="btn" onClick={addTodo}>Save</button>
      </form>
      <ul className="todoList">
        {todos.map(todo => (
          <li className="todoItem" key={todo.id}>
          <span className="todoText">{todo.value}</span>
          <button className="btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
