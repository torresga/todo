import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import Filters from './Filters.js';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ body: "" });
  const [filter, setFilter] = useState("none");
  const [todoId, setTodoId] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleChange = (event) => {
    setTodo({ body: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let todoObj = {
      id: todoId,
      body: todo.body,
      completed: false,
    };

    setTodos([
      ...todos,
      todoObj
    ]);

    setTodo({ body: "" });

    setTodoId(todoId + 1);
  }

  const handleCheckBox = (event, id) => {
    // In here, add an `id` argument

    // find todo by the 'id', rather than 'event.target.id'
    let current = todos.find(item => item.id === id);

    let completedTodo = {
      ...current,
      completed: event.target.checked
    };

    // update the todo by `id` rather than event.target.id
    setTodos(
      todos.map(currentTodo => (
        currentTodo.id === id ? completedTodo : currentTodo
      ))
    );
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter(currentTodo => (
        currentTodo.id !== id
      ))
    );
  };

  const handleActive = () => {
    setFilter("active");
  };

  const handleCompleted = () => {
    setFilter("completed");
  };

  const handleAll = () => {
    setFilter("none");
  };

  const handleClear = () => {
    setFilter("clear");
    setTodos(todos.filter(todo => !todo.completed));
  }

  const handleClick = (event) => {
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  let filteredTodos = [];
  if (filter === "active") {
    filteredTodos = todos.filter(todo => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter(todo => todo.completed);
  } else {
    filteredTodos = todos;
  }

  return (
    <div className={`App ${theme}`}>
      <header>
        <h1>Todo</h1>
        <button onClick={handleClick}>
        </button>
      </header>
      <div className="list-container">
        <form className="todo" onSubmit={handleSubmit}>
          <input type="checkbox" />
          <label></label>
          <input onChange={handleChange} type="text" value={todo.body} placeholder="Create a new todo..."/>
        </form>

        <TodoList todos={filteredTodos}
                  handleCheckBox={handleCheckBox}
                  handleDelete={handleDelete} />

        <Filters todos={filteredTodos}
                 handleAll={handleAll}
                 handleActive={handleActive}
                 handleCompleted={handleCompleted}
                 handleClear={handleClear} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
