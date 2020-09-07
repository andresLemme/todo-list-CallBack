import React, { useState, useEffect } from 'react';
import './App.css';
import Addtask from './Addtask/Addtask';
import Tasks from './Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([])
  const [login, setLogin] = useState("")
  const [id, setId] = useState("")

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

  useEffect(()=>{
     async function fetchData() {
        const data = await fetch ("https://api.github.com/users/andresLemme");
        const dataJson = await data.json();

        console.log(dataJson)
        setId(dataJson.id)
        setLogin(dataJson.login)
      }
      fetchData();

  }, []) 

 

  return (
    <>
    <Addtask handleCallback={handleInputValue}/>  {/* //recibimos el valor de nuestro hijo el valor del input */}
    <Tasks handleCallback={handleCallback} tasks={tasks} />
  
    <p>Login: {login}</p>
    <p>Mi ID:  {id}</p>


    </>
  );
}

export default App;
