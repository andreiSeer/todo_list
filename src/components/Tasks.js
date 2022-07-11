import React from 'react'
import OneTask from './OneTask';

 const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
  

    return (
        <>
            {tasks.map(task => <OneTask  key={task.id} handleTaskDeletion={handleTaskDeletion} handleTaskClick={handleTaskClick} task={task} />)}
        </>
        
    )
 }
 export default Tasks;