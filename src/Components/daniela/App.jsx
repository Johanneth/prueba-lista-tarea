import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

  };
  return (
    <div className="App">
    <h1>Lista de Tareas</h1>
    <div className="task-input">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Agregar</button>
    </div>
     
      <div className="task-list-container">      
      <div className="header">
        <div className="title">Todo List</div>
        <button className="add-button" onClick={addTask} >+</button>
    </div>
    
        <table className="task-list">
          <thead>
            
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className={task.completed ? 'completed' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                </td>
                <td>{task.text}</td>
                
                <td>
                  <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;