import React, { useState } from 'react';
import './App2.css';

function App2() {
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
        

        <div className="task-list-container">
        <div className='vertical-line'></div>
        <div className="folder-sheet">
        <div className="empty-row"></div>
        {tasks.map((task) => (
          <div key={task.id} className="task-row">
            <div className="left-column"> 
                         
                {/* Aquí puedes agregar el cuadrado para eventos */}
              <div className="event-square">
              <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
              </div>
            </div>
            <div className="right-column">{task.text} 
                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>



        
        
        
  );
}

export default App2;