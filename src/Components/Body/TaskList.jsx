import React from 'react';
import './TaskList.jsx';
import './TaskList.css'; 

const TaskList = () => {
  const tasks = [
    // Puedes llenar esta array con las tareas que quieras mostrar
    { id: 1, description: 'Throw away my books' },
    { id: 2, description: 'Tarea 2' },
    { id: 3, description: 'Tarea 3' },
    { id: 4, description: 'Tarea 4' }
    // ... otras tareas
  ];

  return (
    <div className="task-list-container">
      <div className='vertical-line'></div>
      <div className="folder-sheet">
        <div className="empty-row"></div>
        {tasks.map((task) => (
          <div key={task.id} className="task-row">
            <div className="left-column"> 
                         
                {/* Aquí puedes agregar el cuadrado para eventos */}
              <div className="event-square"></div>
            </div>
            <div className="right-column">{task.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
