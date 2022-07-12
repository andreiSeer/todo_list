import React, { useEffect, useState } from 'react';
import '../styles/App.css'
import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks'
import TaskDetails from './TaskDetails'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios'
const App = () => {
  // let message = "Hello World"
 
  const [tasks,setTasks] = useState([]);
  useEffect(() => {

    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data)
    };
    fetchTasks()

  },[]);
  const handleTaskClick = (taskid) => {
    const editTasks = tasks.map(task =>{
      if (task.id === taskid) return {...task, completed:!task.completed}
      
      return task
    })
    setTasks(editTasks)

  }
  const handleTaskDeletion = (taskid) => {
    const removeTasks = tasks.filter(task => task.id !== taskid)
    setTasks(removeTasks)

  }
  const handleTaskEdition = (tasktitle) => {

    const newTask = [...tasks,{
      id: uuid(),
      title:tasktitle,
      completed:false,
    }];
    setTasks(newTask);
  }

  return (
    <Router>
      <Routes>       
          <Route  path="/" exact element={
             <div className='container'>
                <Header />
                <AddTask handleTaskEdition={handleTaskEdition} />
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
              </div>  
          }/>
          <Route path="/:tasktitle" exact element={
            <div className='container'>
              <Header />
              <TaskDetails />

            </div>
          }/>
      </Routes>  
    </Router>
  )
};

export default App;
