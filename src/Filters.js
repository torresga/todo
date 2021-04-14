import React from 'react';
import './index.css';

const Filters = ({ todos, handleAll, handleActive, handleCompleted, handleClear }) => {

  return (
    <div className="filters">
      <div className="todos-left">
        <span>{todos.length} items left</span>
      </div>

      <div className="clear-button">
        <button onClick={handleClear}>Clear Completed</button>
      </div>

      <div className="filter-buttons">
        <button onClick={handleAll}>All</button>
        <button onClick={handleActive}>Active</button>
        <button onClick={handleCompleted}>Completed</button>
      </div>
    </div>
  )
};

export default Filters;
