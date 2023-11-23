import React from 'react';
import './TodoList.jsx'
import './TodoList.css'


 const TodoList = () => {
  return (
    <div className="todo-list-container">
      <div className="header">
        <div className="title">Todo List</div>
        <button className="add-button" >+</button>
      </div>
      {/* Aquí iría la lista de tareas */}
    </div>
  );
};

export default TodoList;
