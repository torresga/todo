import React from 'react';
import cross from './icon-cross.svg';

const TodoList = ({ todos, handleCheckBox, handleDelete }) => {

  // In here, remove the ids from input and button
  // in onClick, add an arrow function that passes in the todo.id
  return (
    <ul>
    {todos.map(todo => (
      <li className="wrapper" key={todo.id}>
        <input type="checkbox" id={todo.id} onChange={(event, id) => handleCheckBox(event, todo.id)} value={todo.completed} name={todo.body} checked={todo.completed}/>
        <label htmlFor={todo.id}>{todo.body}</label>
        <button className="delete" onClick={() => handleDelete(todo.id)}>
        </button>
      </li>
    ))}
    </ul>
  );
};

export default TodoList;
