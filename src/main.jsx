import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './Components/Header/TodoList'
import TaskList from './Components/Body/TaskList'
import App from './Components/daniela/App'
import App2 from './Components/danielaedit/App2'








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        
    <TodoList />
    <TaskList />    
    <App />
    <App2 />
    
    
  </React.StrictMode>,
)
