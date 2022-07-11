import React from "react";
import './OneTask.css'
import {CgClose,CgInfo} from "react-icons/cg"
import { useNavigate } from "react-router-dom";
const OneTask = ({task, handleTaskClick, handleTaskDeletion}) => {

    const navigate = useNavigate();
    const handleTaskDetail=()=>{
        navigate(`/${task.title}`,{state:{taskdetail:"Hello World!"}});
    }
    return (
        <>
            <div className="one-task-container" 
                style={task.completed ? {borderLeft: '6px solid #FF6803FF'} : {}}>
              
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>{task.title}</div>
                <div className="buttons-container">
                    <button className="see-task-detail-button" onClick={handleTaskDetail}>
                        <CgInfo />
                    </button>
                    <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                        <CgClose />
                    </button>                 
                </div>
            </div>
        </>
        
    )

}

export default OneTask;