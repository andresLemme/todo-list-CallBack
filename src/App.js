import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Addtask from './Addtask/Addtask';
import Tasks from './Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([])

  function handleInputValue(value){
    setTasks([  
      ...tasks,
      {
        value,
        isCompleted: false
      }
    ])
  }
 function handleCallback(name){
   const modifiedTasks = tasks.map((task) =>{
     
    if (task.value == name) {
      return {
        value: task.value,
        isCompleted: !task.isCompleted
      };
    }

    return task;
   })
   setTasks(modifiedTasks)
 }
  return (
    <>
    <Addtask handleCallback={handleInputValue}/>  {/* //recibimos el valor de nuestro hijo el valor del input */}
    <Tasks handleCallback={handleCallback} tasks={tasks} />
    Tareas resueltas:
    <ul>
      aca van
    </ul>

    </>
  );
}

export default App;
